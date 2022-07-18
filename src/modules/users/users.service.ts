import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dtos/CreateUser.dto';
import { UpdateUserDto } from './dtos/UpdateUser.dto';
import { User } from './entities/users.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly usersRepository: Repository<User>,
  ) {}

  public async create(createUserDto: CreateUserDto): Promise<User> {
    const userExists = await this.usersRepository.findOneBy({
      email: createUserDto.email,
    });

    if (userExists) {
      throw new BadRequestException('this email is already in use');
    }

    const user = this.usersRepository.create(createUserDto);

    const createdUser = await this.usersRepository.save(user);

    delete createdUser.password;

    return createdUser;
  }

  public async update(id: string, updateUserDto: UpdateUserDto): Promise<User> {
    const userExists = await this.usersRepository.findOneBy({
      id,
    });

    if (!userExists) {
      throw new NotFoundException('User not found');
    }

    this.usersRepository.merge(userExists, updateUserDto);

    const updatedUser = await this.usersRepository.save(userExists);

    delete updatedUser.password;

    return updatedUser;
  }
}
