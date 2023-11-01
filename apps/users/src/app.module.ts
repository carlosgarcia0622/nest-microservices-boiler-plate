import { Module } from '@nestjs/common';
import { UsersModule } from './contexts/users/application/users.module';

@Module({
  imports: [UsersModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
