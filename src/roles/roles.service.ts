// roles.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Role } from '../user/entities/role.entity';

@Injectable()
export class RolesService {
  constructor(
    @InjectRepository(Role)
    private readonly roleRepository: Repository<Role>,
  ) {}

  async updatePermissions(
    roleId: string,
    permissions: string[],
  ): Promise<Role> {
    const role = await this.roleRepository.findOneBy({ id: roleId });

    if (!role) {
      throw new NotFoundException('Role not found');
    }

    role.permissions = permissions;
    return this.roleRepository.save(role);
  }
}
