import { TypeOrmModule } from '@nestjs/typeorm';
import { forwardRef, Module } from '@nestjs/common';
//entities
import { User } from './entities/user.entity';
import { Role } from './entities/role.entity';
import { UserRole } from './entities/userRole.entity';
//services
import { RoleService } from './services/role.service';
import { UserService } from './services/user.service';
import { UserRoleService } from './services/userRole.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([User, Role, UserRole]),  ],
  providers: [UserService, RoleService, UserRoleService],
  exports: [UserService, UserRoleService],
})
export class UserModule {}
