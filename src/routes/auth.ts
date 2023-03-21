import { Request, Response, Router } from "express";
import { registerCtrl, loginCtrl } from "../controllers/auth";

const router = Router();
/**
 * register
 * http://localhost:3002/auth/register [POST]
 */
router.post("/register", registerCtrl);

/**
 * login
 * http://localhost:3002/auth/login [POST]
 */
router.post("/login", loginCtrl);

export {router}