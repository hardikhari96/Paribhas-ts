import  { Request, Response } from 'express';
import {USERS} from '../model/user'
 class testControllerClass {
    
    test(req:Request,res:Response):any{
        USERS.create({
            MOBILE_NO: req.body.phone,
            EMAIL_ID: req.body.email,
            F_NAME: req.body.name
        }).then((data)=>{
            res.json({
                success:true,data:data.get({plain:true})
            })
        }).catch((error:any)=>{
            res.json({
                success:false,
                error:error
            })
        })
    }
}
export var testController = new testControllerClass();