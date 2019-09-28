import  mongoose from 'mongoose'
export class Db{
   private static url:string="mongodb://localhost:27017/myDb"

    public static connectMongoDb(){
        //,"useNewUrlParser": "true"--no warning will come
        mongoose.connect(this.url)
        .then(()=>{console.log("Db Connecte")})
        .catch((err)=>{console.log(err)});
    }
}
