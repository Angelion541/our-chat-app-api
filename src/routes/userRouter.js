import express from 'express';
import { userController } from "../controllers/userController.js";
import { ctrlWrapper } from "../middlewares/ctrlWrapper.js";

export const userRouter = express.Router();

updateUserRouter.put("/update", ctrlWrapper(userController.updateUser));