import { Module } from '@nestjs/common';
import { PlanController } from './plan.controller';
import { PlanService } from './plan.service';
import { MongooseModule } from '@nestjs/mongoose';
import {PlanSchema} from './schema/plan.schema'
@Module({
  imports: [MongooseModule.forFeature([{ name: 'Plan', schema: PlanSchema }])],
  controllers: [PlanController],
  providers: [PlanService]
})
export class PlanModule {}
