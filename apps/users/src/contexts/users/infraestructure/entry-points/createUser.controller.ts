import { Controller, Logger } from '@nestjs/common';
import { EventPattern, MessagePattern, Payload } from '@nestjs/microservices';
import { UserUseCase } from '../../domain/usecase/user.useCase';


@Controller()
  export class CreateUserController {
  constructor(
    private readonly createUserService: UserUseCase
  ) {}

  private readonly logger = new Logger(CreateUserController.name);
  
  //Broker-Based controller
  @EventPattern('createUser')
  async createUser(@Payload() data: any) {
    this.logger.log(`[USERS]: createUser :: INIT`);
    await this.createUserService.execute(data);
  }

  //Point-To-Point controller
  @MessagePattern('testMessage')
  getHelloTCP(name: string): string {
     return `Hello !`;
 }
}