import { Module } from '@nestjs/common';
import { AuthService } from '../services/auth/auth.service';
import {PassportModule} from "@nestjs/passport";
@Module({
  imports:[
    PassportModule.register({
      defaultStrategy:"jwt"
    })
  ],
  providers: [AuthService],
  exports:[PassportModule]
})
export class AuthModule {}
