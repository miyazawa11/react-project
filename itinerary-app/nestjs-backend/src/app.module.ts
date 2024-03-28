import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PlanModule } from './plan/plan.module';
import { UsersModule } from './users/users.module';
import { MongooseModule } from "@nestjs/mongoose";

@Module({
  imports: [PlanModule, UsersModule,MongooseModule.forRoot('mongodb+srv://1113mkoki:test@cluster0.0rhenbu.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'),],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
