import { Body, Controller, Get, Post,Put,Param } from '@nestjs/common';
import { PlanService } from './plan.service';
import { CreatePlanDto } from './dto/create-plan.dto';
import { Plan } from './interface';
import { Types } from 'mongoose';

@Controller('plan')
export class PlanController {
    constructor(private readonly planService:PlanService){}

    @Get()
    findAll(){
        return this.planService.findAll()
    }
    @Post()
    create(@Body() createPlan:CreatePlanDto){
        return this.planService.create(createPlan)
    }
    // @Get(':id')
    // findOne(
    //   @Param('id') id: string,
    // ){
    //   return this.planService.findOne(id:string)
    // }
    @Put(':id/update')
      async update(
        @Param('id') id: string, // プランのID
        @Body() updatedPlan: CreatePlanDto, // 更新されたプランの情報
      ) {
        return await this.planService.update(id,updatedPlan);
      }
}
