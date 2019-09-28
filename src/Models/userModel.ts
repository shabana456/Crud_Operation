//mongoose.schema containe the def of mongoose db
import mongoose from "mongoose"

let userschema=new mongoose.Schema(
    {
        name:{type:String,
            required:true,
        },
        email:{type:String,
            required:true,
            unique:true
        },
        mobile:{type:String,required:true},
        password:{type:String,
            required:true},
        role:{
            type:String,
            enum:['user','admin'],
            default: 'user'
        }    
    });

 //register todo scahema with db
 export const userModel=mongoose.model('user',userschema);
 //todo->task/collection
 //todoschema-schema of collection
 //momgoose.model-retuen  ref to the collection   