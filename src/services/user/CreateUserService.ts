import prismaClient from "../../prisma";

interface CreateUserProps{
    name: string;
    email: string;
    password: string;
}

class CreateUserService {
    async execute({name, email, password}: CreateUserProps) {

        const findUser = await prismaClient.user.findFirst({
            where: {
                email: email
            }
        });

        if(findUser){
            throw new Error("Usuário já existe");
        }
        
        const user = await prismaClient.user.create({
            data: {
                name,
                email,
                password
            }
        });

        return user;
    }
}

export { CreateUserService };