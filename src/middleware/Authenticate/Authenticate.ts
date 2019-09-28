import { JsonWebTokenError } from "jsonwebtoken";
import * as jwt from "jsonwebtoken"
import express from "express"

export class AuthenticateService
{
    public static  authenticate(req:any,res:express.Response,next:any){
        let accessToken=req.header("Authorization");
        if(!accessToken){
            res.send("Access Denied");
        }

        try{
            let decodedData= jwt.verify(accessToken,"mySecretKey");
            req.user=decodedData;
            next()
        }
        catch(err){
            console.log(err);
            res.status(401).send("Bad Request,AccessDenied")
        }
    }
    public static authorize(req:any,res:express.Response,next:any){
        let accessToken=req.header("Authorization");
        console.log("authorize accessToken????",accessToken);
        if(!accessToken){
            res.send("Access Denied");
        }

        try{
            let decodedData= jwt.verify(accessToken,"mySecretKey");
            req.user=decodedData;
            next()
        }
        catch(err){
            console.log(err);
            res.status(401).send("Bad Request,AccessDenied")
        }
    }
}