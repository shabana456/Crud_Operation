import express from "express"
import {userRoutes} from './../routes/userRoutes'
import {AuthenticateService} from './../middleware/Authenticate/Authenticate'

export class Route{
    public static configRoutes(app:express.Application){
      console.log("AAAA")
       
        app.get('/',(req:express.Request,res:express.Response) =>{
          res.status(200).send("API is working");
      });
     //
     
     
     //app.use(AuthenticateService.authenticate)
      app.use('/api/user/',userRoutes)
    
      //app.use('/api/todo/{{name}}',todoRoutes)

    }
}