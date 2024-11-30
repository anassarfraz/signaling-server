import { OnGatewayConnection, OnGatewayDisconnect } from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
export declare class SignalingGateway implements OnGatewayConnection, OnGatewayDisconnect {
    server: Server;
    handleConnection(socket: Socket): void;
    handleDisconnect(socket: Socket): void;
    handleJoinRoom(socket: Socket, roomId: string): void;
    handleOffer(socket: Socket, data: {
        receiverId: string;
        offer: RTCSessionDescriptionInit;
    }): void;
    handleAnswer(socket: Socket, data: {
        receiverId: string;
        answer: RTCSessionDescriptionInit;
    }): void;
    handleIceCandidate(socket: Socket, data: {
        receiverId: string;
        candidate: RTCIceCandidateInit;
    }): void;
}
