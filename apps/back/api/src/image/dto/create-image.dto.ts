import { IsAlphanumeric, IsNotEmpty, IsUUID } from "class-validator";

export class CreateImageDto {
    @IsNotEmpty()
    @IsUUID()
    id_origem: string;

    @IsAlphanumeric()
    imageSrc: string | null;

}
