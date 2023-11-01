import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { UserUseCase } from '../domain/usecase/user.useCase';
import { CreateUserController } from '../infraestructure/entry-points/createUser.controller';
import { ConfigModule } from '@nestjs/config';

export const CommandHandlers = [UserUseCase];
@Module({
  imports: [
    ConfigModule.forRoot(),
    ClientsModule.register([
      {
        name: 'FILES_RMQ_CLIENT',
        transport: Transport.RMQ,
        options: {
          urls: ['amqps://localhost:5671'],
          queue: 'files',
          queueOptions: {
            durable: true
          },
        },
      },
    ])
  ],
  controllers: [CreateUserController],
  providers: [
    UserUseCase
  ],
})
export class UsersModule {}
