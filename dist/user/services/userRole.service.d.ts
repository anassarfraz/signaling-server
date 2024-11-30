import { Repository } from 'typeorm';
import { Role } from '../entities/role.entity';
import { UserRole } from '../entities/userRole.entity';
import { RoleService } from './role.service';
import { UserService } from './user.service';
export declare class UserRoleService {
    private userRoleRepo;
    private readonly roleService;
    private readonly userService;
    constructor(userRoleRepo: Repository<UserRole>, roleService: RoleService, userService: UserService);
    findRolesByUserId(userId: string): Promise<Role[]>;
}
