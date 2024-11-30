import {
  OnGatewayConnection,
  OnGatewayDisconnect,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';

@WebSocketGateway({ cors: { origin: '*' } })
export class SignalingGateway
  implements OnGatewayConnection, OnGatewayDisconnect
{
  @WebSocketServer()
  server: Server;

  handleConnection(socket: Socket) {
    console.log('User connected:', socket.id);
  }

  handleDisconnect(socket: Socket) {
    console.log('User disconnected:', socket.id);
    socket.broadcast.emit('peer-disconnected', { clientId: socket.id });
  }

  @SubscribeMessage('join-room')
  handleJoinRoom(socket: Socket, roomId: string) {
    console.log('User joined room:', roomId);

    const roomClients =
      this.server.sockets.adapter.rooms.get(roomId) || new Set();
    roomClients.forEach((clientId: string) => {
      socket.emit('peer-connected', { clientId });
      this.server.to(clientId).emit('peer-connected', { clientId: socket.id });
    });

    socket.join(roomId);
  }

  @SubscribeMessage('offer')
  handleOffer(
    socket: Socket,
    data: { receiverId: string; offer: RTCSessionDescriptionInit },
  ) {
    socket
      .to(data.receiverId)
      .emit('offer', { senderId: socket.id, offer: data.offer });
  }

  @SubscribeMessage('answer')
  handleAnswer(
    socket: Socket,
    data: { receiverId: string; answer: RTCSessionDescriptionInit },
  ) {
    socket
      .to(data.receiverId)
      .emit('answer', { senderId: socket.id, answer: data.answer });
  }

  @SubscribeMessage('icecandidate')
  handleIceCandidate(
    socket: Socket,
    data: { receiverId: string; candidate: RTCIceCandidateInit },
  ) {
    socket
      .to(data.receiverId)
      .emit('icecandidate', { senderId: socket.id, candidate: data.candidate });
  }
}
