import { UserRole } from './userRole.entity';
export declare class User {
    id: string;
    name: string;
    email: string;
    userRoles: UserRole[];
    createdAt: string;
    updatedAt: string;
}
