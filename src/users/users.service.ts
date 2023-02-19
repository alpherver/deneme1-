import { Injectable } from "@nestjs/common/";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { User, UserDocument } from "./schemas/users.schema";
import { CreatePersonDto } from "./dto/create-users.dto";
import { stringify } from "querystring";

@Injectable()
export class UsersService {
  constructor (@InjectModel(User.name)public userModel: Model<UserDocument>) {}
    async getAll(): Promise<User[]> {
        return await this.userModel.find();


    }
    async getOne(id: string): Promise<User> {
    return await this.userModel.findById(id);

    }
   
    async create(allProps: CreatePersonDto) {
    const user = new this.userModel(allProps);
    if (user.age<18) { 
        console.log("18'den küçük oldugu için işlem yapılmaz");
        return false;
        
        
    }

    return await user.save();
    }

    async update(id: string, allProps:CreatePersonDto) : Promise<User>{
    
        return await this.userModel.findByIdAndUpdate(id,allProps, {new:true});
    }
 
    async remove(id:string): Promise<User> {
        return await this.userModel.findByIdAndDelete(id);
    }
}
 
 
 
 
 
 
 
 
 
    /*  private readonly users =  [
        {
            id:"123",
            username: "alper",
            age : 18
        },
        {
            id:"321",
            username: "tugrul",
            age : 34
        },
    ];
    findAll() {
        return` this.users`;
    }*/


    
