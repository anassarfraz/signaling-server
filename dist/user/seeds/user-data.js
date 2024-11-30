"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rolesData = exports.UserRoles = exports.UsersData = exports.UserRole = void 0;
var UserRole;
(function (UserRole) {
    UserRole["SUPER_ADMIN"] = "super-admin";
    UserRole["ADMIN"] = "admin";
    UserRole["STAFF"] = "staff";
    UserRole["CUSTOMER"] = "customer";
})(UserRole || (exports.UserRole = UserRole = {}));
exports.UsersData = [
    {
        lastName: 'Aleem',
        emailVerified: true,
        firstName: 'Muhammad',
        password: 'Super123!',
        status: 'active',
        userType: UserRole.SUPER_ADMIN,
        email: 'muhammad.aleem@kwanso.com',
    },
    {
        lastName: 'Admin',
        emailVerified: true,
        firstName: 'Admin',
        password: 'Admin123!',
        status: 'active',
        userType: UserRole.ADMIN,
        email: 'm@gmail.com',
    },
    {
        lastName: 'Staff',
        emailVerified: true,
        firstName: 'Staff',
        password: 'Staff123!',
        status: 'active',
        userType: UserRole.STAFF,
        email: 'staff@gmail.com',
    },
];
exports.UserRoles = [
    {
        name: 'Super Admin',
        type: UserRole.SUPER_ADMIN,
        description: 'Super admin role',
    },
    {
        name: 'Admin',
        type: UserRole.ADMIN,
        description: 'Admin role',
    },
    {
        name: 'Staff',
        type: UserRole.STAFF,
        description: 'Staff role',
    },
    {
        name: 'Customer',
        type: UserRole.CUSTOMER,
        description: 'Customer role',
    },
];
exports.rolesData = [
    {
        name: 'Super Admin',
        type: UserRole.SUPER_ADMIN,
        description: 'Super admin role',
    },
    {
        name: 'Admin',
        type: UserRole.ADMIN,
        description: 'Admin role',
    },
    {
        name: 'Staff',
        type: UserRole.STAFF,
        description: 'Staff role',
    },
    {
        name: 'Customer',
        type: UserRole.CUSTOMER,
        description: 'Customer role',
    },
];
//# sourceMappingURL=user-data.js.map