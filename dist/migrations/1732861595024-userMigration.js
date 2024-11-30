"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserMigration1732861595024 = void 0;
class UserMigration1732861595024 {
    constructor() {
        this.name = 'UserMigration1732861595024';
    }
    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE "UserRole" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "userId" uuid, "roleId" uuid, "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), CONSTRAINT "PK_83fd6b024a41173978f5b2b9b79" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "Role" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying, "type" character varying, "description" character varying, "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), CONSTRAINT "PK_9309532197a7397548e341e5536" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "User" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "firstName" character varying, "lastName" character varying, "email" character varying NOT NULL, "status" character varying NOT NULL DEFAULT 'in_active', "emailVerified" boolean DEFAULT false, "userType" character varying NOT NULL, "token" character varying, "password" character varying NOT NULL, "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), CONSTRAINT "UQ_4a257d2c9837248d70640b3e36e" UNIQUE ("email"), CONSTRAINT "PK_9862f679340fb2388436a5ab3e4" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "UserRole" ADD CONSTRAINT "FK_c09e6f704c7cd9fe2bbc26a1a38" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "UserRole" ADD CONSTRAINT "FK_48ca98fafa3cd9a4c1e8caea1fe" FOREIGN KEY ("roleId") REFERENCES "Role"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "UserRole" DROP CONSTRAINT "FK_48ca98fafa3cd9a4c1e8caea1fe"`);
        await queryRunner.query(`ALTER TABLE "UserRole" DROP CONSTRAINT "FK_c09e6f704c7cd9fe2bbc26a1a38"`);
        await queryRunner.query(`DROP TABLE "User"`);
        await queryRunner.query(`DROP TABLE "Role"`);
        await queryRunner.query(`DROP TABLE "UserRole"`);
    }
}
exports.UserMigration1732861595024 = UserMigration1732861595024;
//# sourceMappingURL=1732861595024-userMigration.js.map