import { RolesService } from './roles.service';
import { UpdateRolePermissionsDto } from './roles.dto';
export declare class RolesController {
    private readonly rolesService;
    constructor(rolesService: RolesService);
    updateRolePermissions(id: string, updateRolePermissionsDto: UpdateRolePermissionsDto): unknown;
}
