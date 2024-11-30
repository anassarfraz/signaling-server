import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { forwardRef, Inject, Injectable, InternalServerErrorException } from '@nestjs/common';
//entities
import { Role } from '../entities/role.entity';
import { UserRole } from '../entities/userRole.entity';
//service
import { RoleService } from './role.service';
import { UserService } from './user.service';

@Injectable()
export class UserRoleService {
  constructor(
    @InjectRepository(UserRole)
    private userRoleRepo: Repository<UserRole>,
    private readonly roleService: RoleService,
    @Inject(forwardRef(() => UserService))
    private readonly userService: UserService,
  ) {}

  /**
   * Finds roles by user id
   * @param userId
   * @returns roles by user id
   */
  async findRolesByUserId(userId: string): Promise<Role[]> {
    try {
      const userRole = await this.userRoleRepo.find({ where: { userId }, relations: ['role'] });
      const roles = userRole?.map(({ role }) => role);
      return roles;
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }
}
