import { Request, Response } from "express";
import { insertCar, getCars, getCar, updateCar, deleteCar } from "../services/item.service";
import { handleHttp } from "../utils/error.handle";

const getItem = async ({ params }: Request, res: Response) => {
    try{
        const { id } = params
        const responseItem = await getCar(id);
        const data = responseItem ? responseItem : "NOT_FOUND";
        res.send(data);
    } catch (e){
        handleHttp(res, 'ERROR_GET_ITEM', e);
    }
};

const getItems = async (req: Request, res: Response) => {
    try{
        const responseItems = await getCars();
        res.send(responseItems);
    } catch (e){
        handleHttp(res, 'ERROR_GET_ITEMS', e);
    }
}; 

const updateItem = async ({ params, body }: Request, res: Response) => {
    try{
        const { id } = params;
        const responseItem = await updateCar(id, body);
        const data = responseItem ? responseItem : "NOT_FOUND";
        res.send(data);
    } catch (e){
        handleHttp(res, 'ERROR_UPDATE_ITEM', e);
    }
};

const postItem = async ({ body }: Request, res: Response) => {
    try{
        const responseItem = await insertCar(body);
        res.send(responseItem);
    } catch (e){
        handleHttp(res, 'ERROR_POST_ITEM', e);
    }
};

const deleteItem = async ({ params, body }: Request, res: Response) => {
    try{
        const { id } = params
        const responseItem = await deleteCar(id);
        const data = responseItem ? responseItem : "NOT_FOUND";
        res.send(data);
    } catch (e){
        handleHttp(res, 'ERROR_DELETE_ITEM', e);
    }
};

export { getItem, getItems, postItem, updateItem, deleteItem };