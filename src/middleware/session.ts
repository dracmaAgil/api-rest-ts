import { NextFunction, Response } from "express"
import { verifyToken } from "../utils/jwt.handle";
import { RequestExt } from "../interfaces/requestExt.interface";

const checkJwt = (req:RequestExt, res:Response, next: NextFunction) => {
    try{
        const jwtByUser = req.headers.authorization || '';
        const jwt =  jwtByUser.split(' ').pop();
        const isUser = verifyToken(`${jwt}`);
        console.log(isUser);
        if(!isUser){
            res.status(401);
            res.send("INVALID_JWT");
        }else{

            req.user = isUser as { id:string };
            console.log(jwtByUser);
            next();
        }
    }catch(e){
        console.log(e);
        res.status(400);
        res.send("SESSION_INVALID");
    }
}

export { checkJwt }