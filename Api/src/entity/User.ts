import {Entity, PrimaryGeneratedColumn,Unique,CreateDateColumn, UpdateDateColumn, Column} from "typeorm";
import { MinLength, IsNotEmpty, IsEmail, isNotEmpty } from "class-validator";
import * as bcrypt from 'bcryptjs';

//TODO IsEmail
@Entity()
@Unique(['username'])
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    @MinLength(1)
    @IsEmail()
    @IsNotEmpty()
    username: string;

    @Column()
    @MinLength(6)
    @IsNotEmpty()
    password: string;
    
    @Column()
    @IsNotEmpty()
    role: string;

    @Column()
    @CreateDateColumn()
    createAt: Date;
    
    @Column()
    @UpdateDateColumn()
    updateAt: Date;

    hashPassword():void{
        const salt = bcrypt.genSaltSync(10);
        this.password = bcrypt.hashSync(this.password,salt);
    }

    checkPassword(password: string):boolean{
        return bcrypt.compareSync(password,this.password);
    }

}
