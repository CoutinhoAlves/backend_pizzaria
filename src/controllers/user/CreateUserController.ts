import { Request, Response } from "express";
import { CreateUserService } from "../../services/user/CreateUserService";

class CreateuUserController {
    async handler(req: Request, res: Response) {
        const createUserService = new CreateUserService();
        const user = await createUserService.execute();
        
        res.json({messagem: user});
    }   
}

export { CreateuUserController };