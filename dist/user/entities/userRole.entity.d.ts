import { Role } from './role.entity';
import { User } from './user.entity';
export declare class UserRole {
    id: string;
    userId: string;
    roleId: string;
    user: User;
    role: Role;
    createdAt: string;
    updatedAt: string;
}
