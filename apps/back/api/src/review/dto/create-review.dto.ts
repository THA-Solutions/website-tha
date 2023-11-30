import { IsAlphanumeric, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateReviewDto {
    @IsString()
    @IsNotEmpty()
    id_inverter: string;
    @IsString()
    @IsNotEmpty()
    id_user: string;
    @IsNumber()
    value: number | null;
    @IsAlphanumeric()
    comment: string | null;
}
