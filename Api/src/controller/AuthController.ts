

import { getRepository } from "typeorm";
import { Request, Response } from "express";
import { User } from '../entity/User';
import config from "../config/config";
import * as jwt from 'jsonwebtoken';
import { validate } from 'class-validator';

class AuthController{
    static login = async(req:Request, res:Response) =>{
        const{username,password} = req.body;

        if(!(username && password)){
            return res.status(400).json({message:'Username y Password are required!'});
        }

        const userRepository = getRepository(User);
        let user:User;

        try {
            user = await userRepository.findOneOrFail({where:{username}});
        } catch (error) {
            return res.status(400).json({message:'Username or Password incorrect!!'});
        }

        //chek password
        if(!user.checkPassword(password)){
            return res.status(400).json({message:'Username or password are incorrect!'});
        }

        const token = jwt.sign({userId:user.id, username:user.username}, config.jwtSecret,
            {expiresIn:'1h'});

        res.json({message:'OK', token});
    };

    static changePassword = async(req:Request, res:Response) => {
        const {oldPassword, newPassword} = req.body;

        if(!oldPassword && newPassword){
            res.status(400).json({message: ' Old password & new password are require'});
        }

        const userRespository = getRepository(User);
        let user: User;

        try {
            const { userId } = res.locals.jwtPayload;
            user = await userRespository.findOneOrFail(userId);
        } catch (error) {
            res.status(400).json({message:'somenthing goes wrong!'});
        }

        if(!user.checkPassword(oldPassword)){
            return res.status(401).json({message:'check your old password'});
        }
        user.password = newPassword;
        const validationOps={validationError:{target:false,value:false}}
        const errors = await validate(user,validationOps);

        if(errors.length > 0){
            return res.status(400).json(errors);
        }

        //hash password
        user.hashPassword();
        userRespository.save(user);

        res.json({message:'Password change!'});
    };
}
export default AuthController;

