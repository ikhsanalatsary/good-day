import { Body, Controller, Post } from '@nestjs/common';
import { AttendancesService } from './attendances.service';
import { CheckIn, CheckOut } from './dto/attendance.dto';

@Controller('attendances')
export class AttendancesController {
  constructor(private readonly attendancesService: AttendancesService) {}

  @Post('check-in')
  checkIn(@Body() data: CheckIn) {
    return this.attendancesService.checkIn(data);
  }

  @Post('check-out')
  checkOut(@Body() data: CheckOut) {
    return this.attendancesService.checkOut(data);
  }
}
