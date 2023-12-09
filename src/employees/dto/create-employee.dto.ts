import { IsInt, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export interface IEmployee {
  name: string;
  gender: string;
  age: number;
  department_id: number;
}

export class CreateEmployeeDto implements IEmployee {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  gender: string;

  @IsInt()
  @IsNotEmpty()
  department_id: number;

  @IsInt()
  @IsOptional()
  age: number;
}
