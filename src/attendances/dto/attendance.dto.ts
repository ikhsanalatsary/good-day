import {
  IsBoolean,
  IsDateString,
  IsInt,
  IsLatitude,
  IsLongitude,
  IsMilitaryTime,
  IsNotEmpty,
  IsOptional,
} from 'class-validator';
import { IAttendance } from '../entities/attendance.entity';
import { OmitType } from '@nestjs/mapped-types';

export interface ICheckIn extends Omit<IAttendance, 'check_out' | 'id'> {
  time: string;
}

export interface ICheckOut extends Omit<IAttendance, 'check_in' | 'id'> {
  time: string;
}

export class CheckIn implements ICheckIn {
  @IsDateString()
  @IsNotEmpty()
  date: Date;

  @IsMilitaryTime()
  @IsNotEmpty()
  time: string;

  @IsLatitude()
  @IsNotEmpty()
  latitude: number;

  @IsLongitude()
  @IsNotEmpty()
  longitude: number;

  @IsInt()
  @IsNotEmpty()
  employee_id: number;

  @IsBoolean()
  @IsOptional()
  check_in: boolean;
}

// eslint-disable-next-line prettier/prettier
export class CheckOut
  extends OmitType(CheckIn, ['check_in'])
  implements ICheckOut
{
  @IsBoolean()
  @IsOptional()
  check_out: boolean;
}
