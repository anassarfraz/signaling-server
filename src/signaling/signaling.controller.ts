import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { SignalingService } from './signaling.service';

@Controller('signaling')
export class SignalingController {
  constructor(private readonly signalingService: SignalingService) {}
}
