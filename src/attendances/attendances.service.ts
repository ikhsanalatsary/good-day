import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Attendance } from './entities/attendance.entity';
import { Repository } from 'typeorm';
import { CheckIn, CheckOut } from './dto/attendance.dto';
import * as dayjs from 'dayjs';

@Injectable()
export class AttendancesService {
  constructor(
    @InjectRepository(Attendance)
    private readonly attandanceRepository: Repository<Attendance>,
  ) {}

  async checkIn(checkIn: CheckIn) {
    const attendance = this.attandanceRepository.create(checkIn);
    attendance.check_out = false;
    const [hh, mm] = checkIn.time.split(':'); // 08:00 -> [08, 00]
    // eslint-disable-next-line prettier/prettier
    attendance.date = dayjs(attendance.date).set('hour', Number(hh)).set('minute', Number(mm)).toDate();
    return this.attandanceRepository.save(attendance);
  }

  async checkOut(checkOut: CheckOut) {
    const attendance = this.attandanceRepository.create(checkOut);
    attendance.check_in = false;
    const [hh, mm] = checkOut.time.split(':'); // 08:00 -> [08, 00]
    // eslint-disable-next-line prettier/prettier
    attendance.date = dayjs(attendance.date).set('hour', Number(hh)).set('minute', Number(mm)).toDate();
    return this.attandanceRepository.save(attendance);
  }
}
