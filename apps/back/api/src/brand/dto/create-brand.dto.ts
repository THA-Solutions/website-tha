import { IsAlphanumeric, IsEmail, IsNotEmpty, IsPhoneNumber } from "class-validator";


export class CreateBrandDto {
    @IsNotEmpty()
    legal_name: string;
    trade_name: string;
    @IsNotEmpty()
    cnpj: string;
    @IsEmail()
    email: string;
    @IsPhoneNumber('BR')
    phone: string;
    @IsAlphanumeric()
    description: string;
}
