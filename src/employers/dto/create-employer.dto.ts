import { IsNotEmpty, IsString, MinLength } from 'class-validator';

export interface IEmployer {
  name: string;
  address: string;
}

// Data transfer object (DTO) - abstraction dictionary / object request atau response
export class CreateEmployerDto implements IEmployer {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(5)
  address: string;
}
