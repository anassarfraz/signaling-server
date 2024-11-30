import { DataSourceOptions } from 'typeorm';
import { SeederOptions } from 'typeorm-extension';
export type ConfigDto = {
    NODE_ENV: string;
    database: DataSourceOptions & SeederOptions;
    JWT_SECRET: string;
    JWT_EXPIRY: string;
};
