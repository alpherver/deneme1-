import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';



@Module({
  
  imports: [UsersModule, MongooseModule.forRoot('mongodb+srv://new-user48:uyFduazhGgeD1N61@cluster0.05ckkya.mongodb.net/test')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}


