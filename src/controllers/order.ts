import { Response } from "express";
import { handleHttp } from "../utils/error.handle";
import { RequestExt } from "../interfaces/requestExt.interface";

const getOrders = (req: RequestExt, res: Response) => {
    try{
        res.send({
            data:"ESTO SOLO LO VEN LAS PERSONAS CON SESION (JWT) VALIDO",
            user:req.user,
        });
    } catch (e){
        handleHttp(res, 'ERROR_GET_ORDERS');
    }
};

export { getOrders };