import { Injectable } from '@nestjs/common';
import { Plan } from './interface';
import {CreatePlanDto} from './dto/create-plan.dto'
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Types } from 'mongoose';
import * as bcrypt from "bcryptjs";
@Injectable()
export class PlanService {
    constructor(@InjectModel('Plan') private readonly planModel: Model<Plan>) { }
    plan: CreatePlanDto[] = [];
    async create(plan: CreatePlanDto) {
        const createdPlan = new this.planModel({
          id:plan.id,
          title: plan.title,
          images: plan.images,
          description: plan.description,
          fromTime: plan.fromTime,
          toTime: plan.toTime,
          tags: plan.tags,
          resultArea: plan.resultArea,
        })
        console.log(createdPlan)
        return await createdPlan.save()
      }
      async findAll() {
        return await this.planModel.find().exec();
      }
      async update(id:string,updatedPlan: CreatePlanDto) {
        return await this.planModel.findByIdAndUpdate(id,updatedPlan,{ new: true }).exec();
      }
   
}
