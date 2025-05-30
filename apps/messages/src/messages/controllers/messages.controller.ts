import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  NotFoundException,
} from '@nestjs/common';
import { CreateMessageDto } from 'dtos/create-message.dto';
import { MessagesService } from '../services/messages.service';

@Controller('messages')
export class MessagesController {
  messagesService: MessagesService;
  constructor() {
    // Should not do like this, but dependency injection
    this.messagesService = new MessagesService();
  }
  @Get()
  listMessages() {
    return this.messagesService.findAll();
  }

  @Post()
  createMessage(@Body() body: CreateMessageDto) {
    return this.messagesService.create(body.content);
  }

  @Get(':id')
  async getMessage(@Param('id') id: string) {
    const message = await this.messagesService.findOne(id);
    if (!message) {
      throw new NotFoundException('Message not found');
    }
    return message;
  }
}
