import { Request, Response , NextFunction } from "express";
import { User } from "../entity/User";
import { getRepository } from 'typeorm';


export const checkRole = (roles:Array<string>) => {
    return async(req:Request, res:Response, next:NextFunction) => {


        let user: User;

        try {
            
            const  userId  = res.locals.jwtPayload;
            const userRepository = getRepository(User);
            
            user = await userRepository.findOneOrFail(userId);
            
        } catch (error) {
            return res.status(401).json({message: 'Not Autorized'});
        }
        
        //Check
        const {role} = user;
        if(roles.includes(role)){
            next();
        }else {
            res.status(401).json({message: 'Not Autorized' });
        }
    };
};