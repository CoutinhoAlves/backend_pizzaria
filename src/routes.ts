import { Router } from 'express';
import { CreateuUserController } from './controllers/user/CreateUserController';

const router = Router();

router.post('/users', new CreateuUserController().handler);


export { router };

