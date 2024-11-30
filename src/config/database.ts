import { DataSourceOptions } from 'typeorm';
import { SeederOptions } from 'typeorm-extension';
import { DatabaseObjectType } from './database.dto';

export const dataSourceOptions = (env: DatabaseObjectType): DataSourceOptions & SeederOptions => ({
  type: 'postgres',
  host: env.DATABASE_HOST || '',
  port: parseInt(env.DATABASE_PORT) || 5432,
  username: env.DATABASE_USERNAME || '',
  password: env.DATABASE_PASSWORD || '',
  database: env.DATABASE_NAME || '',
  entities: ['dist/**/*.entity{.js, .ts}'],
  synchronize: false, //always be false for production
  logging: false,
  migrationsRun: true,
  migrations: ['dist/src/migrations/*{.js, .ts}'],
  seeds: ['src/seeders/*.seeder{.ts,.js}'],
});