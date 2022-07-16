import { IsArray, IsDateString, IsEmail, IsString } from 'class-validator';

export class UpdateEventsDto {
  @IsDateString()
  date: Date;

  @IsString()
  name: string;

  @IsString()
  accountable: string;

  @IsString()
  city: string;

  @IsString()
  state: string;

  @IsString()
  address: string;

  @IsString()
  addressComplement: string;

  @IsString()
  @IsEmail()
  email: string;

  @IsString()
  phone: string;

  @IsArray()
  images: string[];
}
