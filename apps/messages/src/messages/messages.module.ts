import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { MessagesController } from './messages.controller';
import { AssetsController } from './assets.controller';
// import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { AssetsService } from './assets.service';
import { MessagesService } from './messages.service';
import { HealthzController } from './healthz.controller';
import { LoggerMiddleware } from './logger.middleware';
import { ResetController } from './reset.controller';
import { ResetService } from './reset.service';
import { MiddlewareMetricsIncMiddleware } from './middleware-metrics-inc.middleware';
import { MetricsController } from './metrics.controller';
import { MetricsService } from './metrics.service';

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
  controllers: [
    MessagesController,
    AssetsController,
    HealthzController,
    ResetController,
    MetricsController,
  ],
  providers: [AssetsService, MessagesService, ResetService, MetricsService],
})
export class MessagesModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('*');
    consumer
      .apply(MiddlewareMetricsIncMiddleware)
      .exclude('/metrics', '/reset')
      .forRoutes('*');
  }
}
console.log(join(__dirname, '..', 'public'));
