// update-role-permissions.dto.ts
import { IsArray, ArrayNotEmpty, IsString } from 'class-validator';

export class UpdateRolePermissionsDto {
  @IsArray()
  @ArrayNotEmpty()
  @IsString({ each: true })
  permissions: string[];
}
