import { Injectable } from '@nestjs/common';
import { MessagesRepository } from '../repositories/messages.repository';

@Injectable()
export class MessagesService {
  messagesRepo: MessagesRepository;
  constructor() {
    // Should not do like this, but dependency injection
    this.messagesRepo = new MessagesRepository();
  }

  async findOne(id: string) {
    return this.messagesRepo.findOne(id);
  }

  async findAll() {
    return this.messagesRepo.findAll();
  }

  async create(content: string) {
    return this.messagesRepo.create(content);
  }
}
