import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TypeOrmOptionsFactory } from '@nestjs/typeorm';
@Injectable()
export class DatabaseConfig implements TypeOrmOptionsFactory {
  constructor(
    private readonly configService: ConfigService,
  ) {}

  async createTypeOrmOptions() {
    let database = this.configService.get('database');
    return database;
  }
}
