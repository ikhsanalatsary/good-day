import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

export interface IAttendance {
  id: string;
  employee_id: number;
  date: Date;
  latitude: number;
  longitude: number;
  check_in: boolean;
  check_out: boolean;
}

@Entity({ name: 'attendances' })
export class Attendance implements IAttendance {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  employee_id: number;

  @Column()
  date: Date;

  @Column({ type: 'double precision' })
  latitude: number;

  @Column({ type: 'double precision' })
  longitude: number;

  @Column()
  check_in: boolean;

  @Column()
  check_out: boolean;
}
