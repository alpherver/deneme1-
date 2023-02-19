import { Body, Controller, Get, Param, Post, Put, Delete } from "@nestjs/common";
import { CreatePersonDto } from "./dto/create-users.dto";
import { UsersService } from "./users.service";
import { User } from "./schemas/users.schema";

@Controller('users')
export class UsersController {
    constructor (private usersService: UsersService) {}
    @Get()
    getAll(): Promise<User[]> {      
        return this.usersService.getAll();
    }
    @Get(':id')
    getOne(@Param('id') id ) : Promise<User>{
        return this.usersService.getOne(id);
    }    

    @Post()
        create (@Body()  allProps:CreatePersonDto) {  
        return this.usersService.create(allProps);

}   
    @Put(':id')
        update(@Param('id') id , @Body() allProps:CreatePersonDto) : Promise<User> {
        return this.usersService.update(id, allProps);
    }
    @Delete(':id')
    remove(@Param("id") id) : Promise<User> {
        return this.usersService.remove(id);    
        
    }
}