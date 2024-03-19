import { Injectable } from '@nestjs/common';
import { Plan } from './interface';
@Injectable()
export class PlanService {
    private readonly plan:Plan[]=[]

    findAll():Plan[]{
        return this.plan;
    }

    create(plan :Plan){
        this.plan.push(plan)
    }
    // findById(id:string):Plan{
    //     return this.plan.find((post)=>post.id===id)
    // }
}
