import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';

export class SignupDto {
  @ApiProperty({ description: 'name of user' })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({ description: 'email of user' })
  @IsNotEmpty()
  @IsString()
  @IsEmail()
  email: string;

  @ApiProperty({ description: 'user password' })
  @IsNotEmpty()
  @IsString()
  @MinLength(4)
  password: string;
}
