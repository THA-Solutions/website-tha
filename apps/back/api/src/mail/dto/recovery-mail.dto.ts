import { IsNotEmpty, IsString } from "class-validator";

export class recoveryMailDto{
    @IsNotEmpty()
    @IsString()
    email: string;

    @IsNotEmpty()
    @IsString()
    subject: string;

    @IsNotEmpty()
    @IsString()
    message: string;
}