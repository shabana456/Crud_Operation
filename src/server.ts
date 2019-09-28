import express from "express"
import bodyParser from "body-parser"
import {Db} from "./startUp/db"
import {Route} from "./startUp/route"


class UserApp{
    app: express.Application;
    constructor(){
        this.app=express();
      
        this.app.listen(3000,()=>{
            console.log("Server is running on port 3000");
            this.configBodyParser();
            Db.connectMongoDb();
            Route.configRoutes(this.app);
        });
       
    }
    private configBodyParser(){
        //
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({extended:false}));//use-middleware
    }
}
let MytoDoApp=new UserApp();

// app.listen(3000,()=>){
//   console.log("Server is running on port 3000");
// }