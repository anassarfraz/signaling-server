import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Injectable, InternalServerErrorException } from '@nestjs/common';
//entities
import { Role } from '../entities/role.entity';

@Injectable()
export class RoleService {
  constructor(
    @InjectRepository(Role)
    private roleRepo: Repository<Role>,
  ) {}

  /**
   * Finds one
   * @param id
   * @returns one
   */
  private async findOne(id: string): Promise<Role> {
    return await this.roleRepo.findOne({ where: { id } });
  }

  /**
   * Gets one
   * @param id
   * @returns one
   */
  async getOne(id: string): Promise<Role> {
    try {
      return await this.findOne(id);
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }

}
