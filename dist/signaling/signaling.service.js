"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SignalingService = void 0;
const common_1 = require("@nestjs/common");
let SignalingService = class SignalingService {
    create(createSignalingDto) {
        return 'This action adds a new signaling';
    }
    findAll() {
        return `This action returns all signaling`;
    }
    findOne(id) {
        return `This action returns a #${id} signaling`;
    }
    update(id, updateSignalingDto) {
        return `This action updates a #${id} signaling`;
    }
    remove(id) {
        return `This action removes a #${id} signaling`;
    }
};
exports.SignalingService = SignalingService;
exports.SignalingService = SignalingService = __decorate([
    (0, common_1.Injectable)()
], SignalingService);
//# sourceMappingURL=signaling.service.js.map