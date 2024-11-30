import { DataSource } from 'typeorm';
import { Seeder } from 'typeorm-extension';
import { InternalServerErrorException } from '@nestjs/common';
import { User } from '../user/entities/user.entity';
import { Role } from '../user/entities/role.entity';
import { UserRole } from '../user/entities/userRole.entity';
import { UsersData, rolesData } from '../user/seeds/user-data';

export default class UserSeeder implements Seeder {
  public async run(dataSource: DataSource): Promise<void> {
    try {
      const userRepo = dataSource.getRepository(User);
      const roleRepo = dataSource.getRepository(Role);
      const userRoleRepo = dataSource.getRepository(UserRole);

      const roles = await Promise.all(
        rolesData.map(async (role) => {
          const isExistRole = await roleRepo.findOne({
            where: { name: role?.name },
          });
          if (!isExistRole) {
            const roleInstance = roleRepo.create(role);
            return await roleRepo.save(roleInstance);
          }
          return isExistRole;
        }),
      );

      const users = await Promise.all(
        UsersData?.map(async (user) => {
          const isExistingUser = await userRepo.findOne({
            where: { email: user.email },
          });
          if (!isExistingUser) {
            const userInstance = userRepo.create(user);
            console.log('userInstance', userInstance);
            const createdUser = await userRepo.save(userInstance);
            console.log('createdUser', createdUser);

            return createdUser;
          }
          return isExistingUser;
        }),
      );

      await Promise.all(
        users?.map(async (user) => {
          const { id: userId, name } = user;
          const role = roles?.find(({ name }) => name === user.name);
          if (role) {
            const isExistUserRole = await userRoleRepo.findOne({
              where: { roleId: role?.id, userId },
            });
            if (!isExistUserRole) {
              const userRoleInstance = userRoleRepo.create({
                roleId: role?.id,
                userId,
              });
              userRoleInstance.user = user;
              userRoleInstance.role = role;
              return await userRoleRepo.save(userRoleInstance);
            }
          }
        }),
      );
      console.log(
        '>>>>>>>>>>>>>>>>USERS CREATED SUCCESSFULLY>>>>>>>>>>>>>>>>>>',
      );
    } catch (error) {
      console.log('error', error);
      throw new InternalServerErrorException(error);
    }
  }
}
