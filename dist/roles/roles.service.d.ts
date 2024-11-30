import { Repository } from 'typeorm';
import { Role } from '../user/entities/role.entity';
export declare class RolesService {
    private readonly roleRepository;
    constructor(roleRepository: Repository<Role>);
    updatePermissions(roleId: string, permissions: string[]): Promise<Role>;
}
