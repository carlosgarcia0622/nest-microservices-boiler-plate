import { Module } from '@nestjs/common';
import { UserModule } from './contexts/users/application/user.module';

@Module({
  imports: [UserModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
