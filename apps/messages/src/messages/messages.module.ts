import { Module } from '@nestjs/common';
import { MessagesController } from './messages.controller';
import { AssetsController } from './assets.controller';
// import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { AssetsService } from './assets.service';
import { MessagesService } from './messages.service';

@Module({
  //   imports: [
  //     ServeStaticModule.forRoot({
  //       rootPath: join(__dirname, '..', 'public'),
  //       serveRoot: '/assets',
  //       //   exclude: ['/api/{*test}'],
  //       //   serveStaticOptions: {
  //       //     fallthrough: false,
  //       //   },
  //     }),
  //   ],
  controllers: [MessagesController, AssetsController],
  providers: [AssetsService, MessagesService],
})
export class MessagesModule {}
console.log(join(__dirname, '..', 'public'));
