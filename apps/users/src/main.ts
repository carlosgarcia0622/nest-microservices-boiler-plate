import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.RMQ,
    options: {
      urls: ['amqps:localhost:5671'],
      queue: 'users',
      queueOptions: {
        durable: true
      },
    },
    });
  await app.startAllMicroservices();
}
bootstrap();
