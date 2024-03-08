import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { PostsService } from './posts.service';
import { PostType } from './post.interface';

@Controller('posts')
export class PostsController {
    constructor(private readonly PostsService:PostsService){}
    @Get()
    findAll(){
        return this.PostsService.findAll();
    }

    @Post()
    create(@Body() posts:PostType):void{
        this.PostsService.create(posts)
    }
    //エンドポイントのID
    @Get(":id")
    findById(@Param("id")id:string):PostType{
        return this.PostsService.findById(id)
    }
}
