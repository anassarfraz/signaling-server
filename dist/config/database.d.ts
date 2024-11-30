import { DataSourceOptions } from 'typeorm';
import { SeederOptions } from 'typeorm-extension';
import { DatabaseObjectType } from './database.dto';
export declare const dataSourceOptions: (env: DatabaseObjectType) => DataSourceOptions & SeederOptions;
