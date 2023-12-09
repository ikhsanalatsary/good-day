import { Injectable } from '@nestjs/common';
import { CreateEmployerDto } from './dto/create-employer.dto';
import { UpdateEmployerDto } from './dto/update-employer.dto';
import { Repository } from 'typeorm';
import { Employer } from './entities/employer.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class EmployersService {
  constructor(
    @InjectRepository(Employer)
    private readonly employerRepository: Repository<Employer>,
  ) {}

  async create(createEmployerDto: CreateEmployerDto) {
    const employer = this.employerRepository.create(createEmployerDto);
    return this.employerRepository.save(employer);
  }

  async findAll() {
    return this.employerRepository.find();
  }

  async findOne(id: number) {
    return this.employerRepository.findOne({ where: { id: id } });
  }

  async update(id: number, updateEmployerDto: UpdateEmployerDto) {
    const employer = this.employerRepository.create(updateEmployerDto);
    await this.employerRepository.update(id, employer);
    return this.findOne(id);
  }

  async remove(id: number) {
    return this.employerRepository.delete(id);
  }
}
