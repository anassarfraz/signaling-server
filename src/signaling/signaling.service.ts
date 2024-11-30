import { Injectable } from '@nestjs/common';

@Injectable()
export class SignalingService {
  create(createSignalingDto: any) {
    return 'This action adds a new signaling';
  }

  findAll() {
    return `This action returns all signaling`;
  }

  findOne(id: number) {
    return `This action returns a #${id} signaling`;
  }

  update(id: number, updateSignalingDto: any) {
    return `This action updates a #${id} signaling`;
  }

  remove(id: number) {
    return `This action removes a #${id} signaling`;
  }
}
