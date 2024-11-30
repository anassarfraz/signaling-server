import { Module } from '@nestjs/common';
import { SignalingService } from './signaling.service';
import { SignalingController } from './signaling.controller';
import { SignalingGateway } from './signaling.gateway';

@Module({
  controllers: [SignalingController],
  providers: [SignalingService, SignalingGateway],
})
export class SignalingModule {}
