"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const user_entity_1 = require("../user/entities/user.entity");
const role_entity_1 = require("../user/entities/role.entity");
const userRole_entity_1 = require("../user/entities/userRole.entity");
const user_data_1 = require("../user/seeds/user-data");
class UserSeeder {
    async run(dataSource) {
        try {
            const userRepo = dataSource.getRepository(user_entity_1.User);
            const roleRepo = dataSource.getRepository(role_entity_1.Role);
            const userRoleRepo = dataSource.getRepository(userRole_entity_1.UserRole);
            const roles = await Promise.all(user_data_1.rolesData.map(async (role) => {
                const isExistRole = await roleRepo.findOne({
                    where: { name: role?.name },
                });
                if (!isExistRole) {
                    const roleInstance = roleRepo.create(role);
                    return await roleRepo.save(roleInstance);
                }
                return isExistRole;
            }));
            const users = await Promise.all(user_data_1.UsersData?.map(async (user) => {
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
            }));
            await Promise.all(users?.map(async (user) => {
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
            }));
            console.log('>>>>>>>>>>>>>>>>USERS CREATED SUCCESSFULLY>>>>>>>>>>>>>>>>>>');
        }
        catch (error) {
            console.log('error', error);
            throw new common_1.InternalServerErrorException(error);
        }
    }
}
exports.default = UserSeeder;
//# sourceMappingURL=user.seeder.js.map