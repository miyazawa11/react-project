import { Body, Controller, Get, Post } from '@nestjs/common';
import { PlanService } from './plan.service';
import { Plan } from './interface';

@Controller('plan')
export class PlanController {
    constructor(private readonly PlanService:PlanService){}

    @Get()
    findAll(){
        return this.PlanService.findAll()
    }
    @Post()
    create(@Body() plan:Plan):void{
        return this.PlanService.create(plan)
    }
}
