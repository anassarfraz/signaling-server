"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SignalingController = void 0;
const common_1 = require("@nestjs/common");
const signaling_service_1 = require("./signaling.service");
let SignalingController = class SignalingController {
    constructor(signalingService) {
        this.signalingService = signalingService;
    }
};
exports.SignalingController = SignalingController;
exports.SignalingController = SignalingController = __decorate([
    (0, common_1.Controller)('signaling'),
    __metadata("design:paramtypes", [signaling_service_1.SignalingService])
], SignalingController);
//# sourceMappingURL=signaling.controller.js.map