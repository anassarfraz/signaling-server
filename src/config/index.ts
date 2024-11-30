import { ConfigDto } from './config.dto';
import { dataSourceOptions } from './database';
import { DatabaseObjectType } from './database.dto';

export default (): ConfigDto => {
  const database: DatabaseObjectType = {
    DATABASE_HOST: process.env.DATABASE_HOST,
    DATABASE_NAME: process.env.DATABASE_NAME,
    DATABASE_PORT: process.env.DATABASE_PORT,
    DATABASE_PASSWORD: process.env.DATABASE_PASSWORD,
    DATABASE_USERNAME: process.env.DATABASE_USERNAME,
  };

  return {
    NODE_ENV: process.env.NODE_ENV,

    // database envs
    database: dataSourceOptions(database),

    // jwt envs
    JWT_SECRET: process.env.JWT_SECRET,
    JWT_EXPIRY: process.env.JWT_EXPIRY,
    };
};
