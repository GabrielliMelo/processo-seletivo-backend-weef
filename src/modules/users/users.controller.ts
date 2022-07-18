import { Body, Controller, Post } from '@nestjs/common';
import { CreateUserDto } from './dtos/CreateUser.dto';
import { User } from './entities/users.entity';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  public async create(@Body() createUserDto: CreateUserDto): Promise<User> {
    const user = await this.usersService.create(createUserDto);

    return user;
  }
}
