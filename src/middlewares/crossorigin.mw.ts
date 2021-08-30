import {Request,Response,NextFunction} from 'express';
export var crossorigin =(req:Request,res:Response,next:NextFunction)=>{
     //Enabling CORS
     res.header("x-powered-by", "Harikrushna");
     res.header("Access-Control-Allow-Origin", "*");
     res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
     res.header(
         "Access-Control-Allow-Headers",
         "Origin, X-Requested-With, contentType,Content-Type, Accept, Authorization"
     );
     next();
}