import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateMessageDto } from 'dtos/create-message.dto';

@Controller('messages')
export class MessagesController {
  @Get()
  listMessages() {
    return [
      {
        id: 1,
        text: 'Hello world',
      },
      {
        id: 2,
        text: 'Hello again',
      },
    ];
  }

  @Post()
  createMessage(@Body() body: CreateMessageDto) {
    return {
      id: Math.floor(Math.random() * 1000),
      text: body.content,
    };
  }

  @Get(':id')
  getMessage(@Param('id') id: string) {
    return {
      id,
      text: 'Hello world',
    };
  }
}
