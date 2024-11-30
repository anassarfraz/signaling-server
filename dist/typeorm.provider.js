"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TypeormProvider = void 0;
const config_1 = require("@nestjs/config");
const database_config_1 = require("./database.config");
exports.TypeormProvider = {
    imports: [config_1.ConfigModule],
    useClass: database_config_1.DatabaseConfig,
};
//# sourceMappingURL=typeorm.provider.js.map