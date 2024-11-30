import { Repository } from 'typeorm';
import { User } from '../entities/user.entity';
import { RoleService } from './role.service';
import { UserRoleService } from './userRole.service';
export declare class UserService {
    private userRepository;
    private readonly userRoleService;
    private readonly roleService;
    constructor(userRepository: Repository<User>, userRoleService: UserRoleService, roleService: RoleService);
}
