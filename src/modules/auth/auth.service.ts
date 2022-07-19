import { Injectable } from '@nestjs/common';
import { User } from '../users/entities/users.entity';
import { UsersService } from '../users/users.service';
import { compareSync } from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  public async login(user) {
    const payload = {
      sub: user.id,
    };

    return {
      token: this.jwtService.sign(payload),
    };
  }

  public async validateUser(
    email: string,
    password: string,
  ): Promise<User | null> {
    let user: User;
    try {
      user = await this.usersService.findOne({ email });
    } catch (error) {
      return null;
    }

    const isPasswordValid = compareSync(password, user.password);

    if (!isPasswordValid) return null;

    return user;
  }
}
