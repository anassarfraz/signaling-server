"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SignalingModule = void 0;
const common_1 = require("@nestjs/common");
const signaling_service_1 = require("./signaling.service");
const signaling_controller_1 = require("./signaling.controller");
const signaling_gateway_1 = require("./signaling.gateway");
let SignalingModule = class SignalingModule {
};
exports.SignalingModule = SignalingModule;
exports.SignalingModule = SignalingModule = __decorate([
    (0, common_1.Module)({
        controllers: [signaling_controller_1.SignalingController],
        providers: [signaling_service_1.SignalingService, signaling_gateway_1.SignalingGateway],
    })
], SignalingModule);
//# sourceMappingURL=signaling.module.js.map