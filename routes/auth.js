
import express from 'express';
import { deleteUser, findAllUsers, getUserId, signIn, signUp } from '../controller/authController.js';
import {auth} from '../middleware/auth.js';

const authRouter = express.Router();

authRouter.get('/user', auth, findAllUsers);

authRouter.post('/signup', signUp);

authRouter.post('/signin', signIn);
authRouter.delete("/:id", deleteUser);
authRouter.get("/:id", getUserId);

export default authRouter;
