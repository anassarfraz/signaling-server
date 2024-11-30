import { DataSource, DataSourceOptions } from 'typeorm';
import { SeederOptions } from 'typeorm-extension';
import 'dotenv/config';

const options: DataSourceOptions & SeederOptions = {
  type: 'postgres',
  database: process.env.DATABASE_NAME || '',
  host: process.env.DATABASE_HOST || 'localhost',
  port: parseInt(process.env.DATABASE_PORT) || 5432,
  username: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
  entities: ['dist/src/**/**/*.entity.{ts,js}'],
  migrations: ['dist/src/migrations/*{.ts,.js}'],
  seeds: ['dist/src/seeders/*.seeder{.ts,.js}'],
};

const dataSource = new DataSource(options);
export default dataSource;
