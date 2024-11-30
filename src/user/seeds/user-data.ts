export enum UserRole {
  SUPER_ADMIN = 'super-admin',
  ADMIN = 'admin',
  STAFF = 'staff',
  CUSTOMER = 'customer',
}

export const UsersData = [
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

export const UserRoles = [
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

export const rolesData = [
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
