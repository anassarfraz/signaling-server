import { Repository } from 'typeorm';
import { Role } from '../entities/role.entity';
export declare class RoleService {
    private roleRepo;
    constructor(roleRepo: Repository<Role>);
    private findOne;
    getOne(id: string): Promise<Role>;
}
