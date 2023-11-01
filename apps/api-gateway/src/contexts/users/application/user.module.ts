import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { CreateUserController } from '../infraestructure/entry-points/create/createUser.controller';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'USERS_RMQ_CLIENT',
        transport: Transport.RMQ,
        options: {
          urls: ['amqps://localhost:5671'],
          queue: 'users',
          queueOptions: {
            durable: true
          },
        },
      }
    ])
  ],
  controllers: [CreateUserController],
  providers: [],
})
export class UserModule {}
