import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Inject, forwardRef, Injectable, InternalServerErrorException } from '@nestjs/common';

import { User } from '../entities/user.entity';
//services
import { RoleService } from './role.service';
import { UserRoleService } from './userRole.service';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
    @Inject(forwardRef(() => UserRoleService))
    private readonly userRoleService: UserRoleService,
    private readonly roleService: RoleService,
  ) { }


}
