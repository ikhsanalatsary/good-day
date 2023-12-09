import { Injectable } from '@nestjs/common';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Employee } from './entities/employee.entity';
import { Repository } from 'typeorm';

@Injectable()
export class EmployeesService {
  constructor(
    @InjectRepository(Employee)
    private readonly employeeRepository: Repository<Employee>,
  ) {}

  async create(createEmployeeDto: CreateEmployeeDto) {
    const employee = this.employeeRepository.create(createEmployeeDto);
    return this.employeeRepository.save(employee);
  }

  async findAll() {
    return this.employeeRepository.find();
  }

  async findOne(id: number) {
    return this.employeeRepository.findOne({ where: { id: id } });
  }

  async update(id: number, updateEmployeeDto: UpdateEmployeeDto) {
    const employee = this.employeeRepository.create(updateEmployeeDto);
    await this.employeeRepository.update(id, employee);
    return this.findOne(id);
  }

  async remove(id: number) {
    return this.employeeRepository.delete(id);
  }
}
