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
var _a, _b, _c, _d, _e;
Object.defineProperty(exports, "__esModule", { value: true });
exports.SignalingGateway = void 0;
const websockets_1 = require("@nestjs/websockets");
const socket_io_1 = require("socket.io");
let SignalingGateway = class SignalingGateway {
    handleConnection(socket) {
        console.log('User connected:', socket.id);
    }
    handleDisconnect(socket) {
        console.log('User disconnected:', socket.id);
        socket.broadcast.emit('peer-disconnected', { clientId: socket.id });
    }
    handleJoinRoom(socket, roomId) {
        console.log('User joined room:', roomId);
        const roomClients = this.server.sockets.adapter.rooms.get(roomId) || new Set();
        roomClients.forEach((clientId) => {
            socket.emit('peer-connected', { clientId });
            this.server.to(clientId).emit('peer-connected', { clientId: socket.id });
        });
        socket.join(roomId);
    }
    handleOffer(socket, data) {
        socket
            .to(data.receiverId)
            .emit('offer', { senderId: socket.id, offer: data.offer });
    }
    handleAnswer(socket, data) {
        socket
            .to(data.receiverId)
            .emit('answer', { senderId: socket.id, answer: data.answer });
    }
    handleIceCandidate(socket, data) {
        socket
            .to(data.receiverId)
            .emit('icecandidate', { senderId: socket.id, candidate: data.candidate });
    }
};
exports.SignalingGateway = SignalingGateway;
__decorate([
    (0, websockets_1.WebSocketServer)(),
    __metadata("design:type", typeof (_a = typeof socket_io_1.Server !== "undefined" && socket_io_1.Server) === "function" ? _a : Object)
], SignalingGateway.prototype, "server", void 0);
__decorate([
    (0, websockets_1.SubscribeMessage)('join-room'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_b = typeof socket_io_1.Socket !== "undefined" && socket_io_1.Socket) === "function" ? _b : Object, String]),
    __metadata("design:returntype", void 0)
], SignalingGateway.prototype, "handleJoinRoom", null);
__decorate([
    (0, websockets_1.SubscribeMessage)('offer'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_c = typeof socket_io_1.Socket !== "undefined" && socket_io_1.Socket) === "function" ? _c : Object, Object]),
    __metadata("design:returntype", void 0)
], SignalingGateway.prototype, "handleOffer", null);
__decorate([
    (0, websockets_1.SubscribeMessage)('answer'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_d = typeof socket_io_1.Socket !== "undefined" && socket_io_1.Socket) === "function" ? _d : Object, Object]),
    __metadata("design:returntype", void 0)
], SignalingGateway.prototype, "handleAnswer", null);
__decorate([
    (0, websockets_1.SubscribeMessage)('icecandidate'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_e = typeof socket_io_1.Socket !== "undefined" && socket_io_1.Socket) === "function" ? _e : Object, Object]),
    __metadata("design:returntype", void 0)
], SignalingGateway.prototype, "handleIceCandidate", null);
exports.SignalingGateway = SignalingGateway = __decorate([
    (0, websockets_1.WebSocketGateway)({ cors: { origin: '*' } })
], SignalingGateway);
//# sourceMappingURL=signaling.gateway.js.map