import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { MessagesController } from './controllers/messages.controller';
import { AssetsController } from './controllers/assets.controller';
// import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { AssetsService } from './services/assets.service';
import { MessagesService } from './services/messages.service';
import { HealthzController } from './controllers/healthz.controller';
import { LoggerMiddleware } from './middleware/logger.middleware';
import { ResetController } from './controllers/reset.controller';
import { ResetService } from './services/reset.service';
import { MiddlewareMetricsIncMiddleware } from './middleware/middleware-metrics-inc.middleware';
import { MetricsController } from './controllers/metrics.controller';
import { MetricsService } from './services/metrics.service';

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
      .exclude('/admin/metrics', '/reset')
      .forRoutes('*');
  }
}
console.log(join(__dirname, '..', 'public'));
