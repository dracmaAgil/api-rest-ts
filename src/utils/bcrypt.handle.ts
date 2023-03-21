import { hash, compare} from "bcryptjs"

const encrypt = async (password:string) => {
    const passwordHash = await hash(password, 8);
    return passwordHash;
};

const verified = async (password:string, hashPassword: string) => {
    const isCorrect = await compare(password, hashPassword);
    return isCorrect;
};

export { encrypt, verified }