import { UserRole } from './userRole.entity';
export declare class Role {
    id: string;
    name: string;
    permissions: string[];
    userRoles: UserRole[];
    createdAt: string;
    updatedAt: string;
}
