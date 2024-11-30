// roles.controller.ts
import { Controller, Patch, Param, Body } from '@nestjs/common';
import { RolesService } from './roles.service';
import { UpdateRolePermissionsDto } from './roles.dto';

@Controller('roles')
export class RolesController {
  constructor(private readonly rolesService: RolesService) {}

  @Patch(':id/permissions')
  async updateRolePermissions(
    @Param('id') id: string,
    @Body() updateRolePermissionsDto: UpdateRolePermissionsDto,
  ) {
    return this.rolesService.updatePermissions(
      id,
      updateRolePermissionsDto.permissions,
    );
  }
}
