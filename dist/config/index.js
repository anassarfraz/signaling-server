"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = require("./database");
exports.default = () => {
    const database = {
        DATABASE_HOST: process.env.DATABASE_HOST,
        DATABASE_NAME: process.env.DATABASE_NAME,
        DATABASE_PORT: process.env.DATABASE_PORT,
        DATABASE_PASSWORD: process.env.DATABASE_PASSWORD,
        DATABASE_USERNAME: process.env.DATABASE_USERNAME,
    };
    return {
        NODE_ENV: process.env.NODE_ENV,
        database: (0, database_1.dataSourceOptions)(database),
        JWT_SECRET: process.env.JWT_SECRET,
        JWT_EXPIRY: process.env.JWT_EXPIRY,
    };
};
//# sourceMappingURL=index.js.map