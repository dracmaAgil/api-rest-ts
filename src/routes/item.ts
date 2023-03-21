import { Request, Response, Router } from "express";
import { 
    deleteItem,
    getItem,
    getItems,
    postItem,
    updateItem
} from "../controllers/item";
import { logMiddleware } from "../middleware/logs.middleware";

const router = Router();
/**
 * get all the Items
 * http://localhost:3002/item [GET]
 */
router.get("/", getItems);

/**
 * get one Item detail
 * http://localhost:3002/item/id [GET]
 */
router.get("/:id", logMiddleware, getItem);

/**
 * create one item
 * http://localhost:3002/item [POST]
 */
router.post("/", postItem);

/**
 * update one item
 * http://localhost:3002/item [PUT]
 */
router.put("/:id", updateItem);

/**
 * delete one item
 * http://localhost:3002/item [DELETE]
 */
router.delete("/:id", deleteItem);

export {router}