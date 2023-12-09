import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export interface IDepartment {
  name: string;
  employer_id: number;
}

export class CreateDepartmentDto implements IDepartment {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsNumber()
  @IsNotEmpty()
  employer_id: number;
}
