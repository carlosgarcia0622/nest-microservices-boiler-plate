import { Injectable, Logger } from '@nestjs/common';
import { IUsersRepository } from '../model/gateways/users.repository.interface';
import { User } from "../model/User";

@Injectable()
export class UserUseCase {
  constructor(
    private readonly userRepository: IUsersRepository
  ) {}
  private readonly logger = new Logger(UserUseCase.name);
  async execute(data: User): Promise<User> {
    this.logger.log(`[${this.execute.name}] :: INIT`);
    return this.userRepository.create(data);
  }
}
