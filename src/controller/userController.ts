import {Request,Response} from "express"
import {UserService} from './../Service/userService'
export class UserController
{
    public async GetAllTodo(req:Request,res:Response){
        let result=await UserService.GetAll();

        //result obj can be err
        return res.json(result);

    }
    public async getProfile(req:Request,res:Response){
        let result=await UserService.getProfile(req,res);

        //result obj can be err
        return res.json(result);

    }
    public async createUser(req:Request,res:Response){//register
        let result=await UserService.createUser(req,res);

        //result obj can be err
        return res.json(result);

    }
    public async login(req:Request,res:Response){//register
        let result=await UserService.login(req,res);

        //result obj can be err
        return res.json(result);

    }
    public async findUserByEmail(req:Request,res:Response){
        let result=await UserService.findUserByEmail(req);

        //result obj can be err
        return res.json(result);

    }
    // public async updateTodo(req:Request,res:Response){
    //     let result=await UserService.updateTodo(req);

    //     //result obj can be err
    //     return res.json(result);

    // }
    // public async deleteTodo(req:Request,res:Response){
    //     let result=await UserService.deleteTodo(req);

    //     //result obj can be err
    //     return res.json(result);

    // }
    // public async getTodoByName(req:Request,res:Response){
    //     let result=await UserService.getTodoByName(req);

    //     //result obj can be err
    //     return res.json(result);

    // }
}