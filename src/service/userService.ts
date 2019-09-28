import {userModel} from "../Models/userModel"
import bcrypt from "bcrypt"
import * as jwt from "jsonwebtoken"

import {Request,Response} from "express"

export class UserService{
    public static async createUser(req:Request,res:Response){
        try{
            let hashedPassword=await bcrypt.hash(req.body.password,5);
            req.body.password=hashedPassword;
            let newUser=new userModel(req.body);
            await newUser.save();
            return newUser;

        }
        catch(err){
            return err;

        }
    }

    public static async login(req:Request,res:Response){
        try{
            //check for user exist by email
            let user:any=await userModel.findOne({email:req.body.email});
            if(user==null){
                 return `user not registered with email ${req.body.email}`//template string we use dynamic var
            }
            let passwordMatch=await bcrypt.compare(req.body.password,user.password);
            if(!passwordMatch){
                return "Incorrect Password"
            }
            //user login success
            let options:jwt.SignOptions={
                expiresIn:"3d",
                //algorithm:"HS256"
                //algorithm:"HS512"
               
            }
            let payload={
                userId: user._id,
                role: user.role

            }
            let secret="mySecretKey";//real time env private and public key concept
            let accessToken=await jwt.sign(payload,secret,options);//local storage or session
            console.log("accessToken generated",accessToken);
            return accessToken;

        }
        catch(err){
          return err;
        }

    }

    public static async getProfile(req:Request,res:Response){
        try{
            //check for user exist by email
            // console.log("request",req);
            // console.log("request req.body.name",req.body.name);
            let user:any=await userModel.findOne({name:req.body.name});
            console.log("role user????",user.name);
            if(user==null){
                 return `user not registered with id ${req.body._id}`//template string we use dynamic var
            }
            let userRole=await userModel.findOne({role:req.body.role});
        
            if(req.body.role==user.role){
                return `login successful ${req.body.role}`
            }
            if(user.role=="admin"){
                return `has access ${user.role}`
            }
            else{
                  return `has noaccess ${user.role}`
            }
            let payload={
                role: user.role
            }
            console.log("payload role",payload);
            return payload;
        }
        catch(err){
          return err;
        }

    }


    public static async GetAll(){
        try{
            let todos=await userModel.find({}).exec();
            //let todos=await todoModel.find({{Name:'task1'}}).exec();
            return todos;
        }
        catch(err){
            console.log(err);
        }
    }
    public static async register(req:Request){
        {
            try{
                //create data in req.body
                let newUser=new userModel(req.body);//schema type obj
                await newUser.save();//new one will be not having _id
                return newUser;
            }
            catch(err){
              return err;
            }
        }


      
    }
    
    public static async findUserByEmail(req: Request) {
        {
            try {
                console.log("emailid:::",req.query.email);
                let  user:any = await userModel.findOne({email: req.query.email}).exec();
                
                console.log("findUserByEmail user",user.email);
                if(user.email=!undefined){
                    console.log("value present");
                    let  userPwd:any = await userModel.findOne({pwd: req.query.password}).exec();
                    console.log("value present pwd",userPwd);
                    if(userPwd.pwd==user.password){
                        console.log("login successful");
                    }
                    else{
                        console.log("password incorrect");
                    }


               }
               return user;
            }
            catch (err) {
                return err;
            }
        }
    }

    // public static async updateUserName(req:Request){
    //     {
    //         try{
    //             let todo=await userModel.findByIdAndUpdate(req.params.todoId,req.body).exec();
    //             return todo;
    //         }
    //         catch(err){
    //           return err;
    //         }
    //     }

    // public static async findByPassword(req: Request) {
    //     {
    //         console.log("Password");
    //         UserService.findByPassword(req);


    //     }

    // public static async getTodoById(req:Request){
    //     {
    //         try{
    //             let todo=await userModel.findById(req.params.todoId);
    //             return todo;
    //         }
    //         catch(err){
    //           return err;
    //         }
    //     }


    
    // http://localhost:3000/api/user/getByEmail/?email=hhjjj7777
    
    
    
      
    // }

    // public static async updateTodo(req:Request){
    //     {
    //         try{
    //             let todo=await userModel.findByIdAndUpdate(req.params.todoId,req.body).exec();
    //             return todo;
    //         }
    //         catch(err){
    //           return err;
    //         }
    //     }


      
    // }
    // public static async deleteTodo(req:Request){
    //     {
    //         try{
    //             let todo=await userModel.findByIdAndDelete(req.params.todoId).exec();
    //             return todo;
    //         }
    //         catch(err){
    //           return err;
    //         }
    //     }
      
    // }

//http://localhost:3000/api/user/getByEmail/?email=hhjjj7777



}