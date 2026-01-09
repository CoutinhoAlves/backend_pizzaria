import { Router } from 'express';
import { CreateuUserController } from './controllers/user/CreateUserController';
import { validateSchema } from './middlewares/validateSchema';
import { createUserSchema } from './schemas/userSchema';

const router = Router();

router.post('/users', validateSchema(createUserSchema), new CreateuUserController().handler);


export { router };

