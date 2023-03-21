import { Auth } from "../interfaces/auth.interface";
import { User } from "../interfaces/user.interface";
import UserModel from "../models/user";
import { encrypt, verified } from "../utils/bcrypt.handle";
import { generateToken } from "../utils/jwt.handle";

const registerNewUser = async ({ email, password, name }: User) => {
    const checkIs = await UserModel.findOne({ email });
    console.log("hola desde el servico");
    console.log(checkIs);
    if (checkIs) return "User already taken";

    const encryptedPassword = await encrypt(password);

    const registerNewUser = await UserModel.create(
        {
            email,
            password: encryptedPassword,
            name,
        }
    );
    
    return registerNewUser;
};

const loginUser =async ( { email, password }: Auth ) => {
    const checkIs = await UserModel.findOne({ email });
    if (!checkIs) return "User not found";

    const hashPassword = checkIs.password;
    const isCorrect = await verified(password, hashPassword);

    if(!isCorrect) return "Password_Incorrect";

    const token = generateToken(checkIs.email)
    console.log(token);

    const data = {
        token,
        user: checkIs
    };

    return data;
};

export {registerNewUser, loginUser };