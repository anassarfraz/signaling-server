"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dataSourceOptions = void 0;
const dataSourceOptions = (env) => ({
    type: 'postgres',
    host: env.DATABASE_HOST || '',
    port: parseInt(env.DATABASE_PORT) || 5432,
    username: env.DATABASE_USERNAME || '',
    password: env.DATABASE_PASSWORD || '',
    database: env.DATABASE_NAME || '',
    entities: ['dist/**/*.entity{.js, .ts}'],
    synchronize: false,
    logging: false,
    migrationsRun: true,
    migrations: ['dist/src/migrations/*{.js, .ts}'],
    seeds: ['src/seeders/*.seeder{.ts,.js}'],
});
exports.dataSourceOptions = dataSourceOptions;
//# sourceMappingURL=database.js.map