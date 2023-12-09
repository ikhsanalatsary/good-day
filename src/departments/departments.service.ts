import { Injectable } from '@nestjs/common';
import { CreateDepartmentDto } from './dto/create-department.dto';
import { UpdateDepartmentDto } from './dto/update-department.dto';
import { Repository } from 'typeorm';
import { Department } from './entities/department.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class DepartmentsService {
  constructor(
    @InjectRepository(Department)
    private readonly departmentRepository: Repository<Department>,
  ) {}

  async create(createDepartmentDto: CreateDepartmentDto) {
    const department = this.departmentRepository.create(createDepartmentDto);
    return this.departmentRepository.save(department);
  }

  async findAll() {
    return this.departmentRepository.find();
  }

  async findOne(id: number) {
    return this.departmentRepository.findOne({ where: { id } });
  }

  async update(id: number, updateDepartmentDto: UpdateDepartmentDto) {
    const department = this.departmentRepository.create(updateDepartmentDto);
    await this.departmentRepository.update(id, department);
    return this.findOne(id);
  }

  async remove(id: number) {
    return this.departmentRepository.delete(id);
  }
}
