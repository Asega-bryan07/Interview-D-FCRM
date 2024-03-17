import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './user.entity';

@Controller('api/v1/users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('add-user')
  async addUser(@Body() userData: any): Promise<User> {
    return await this.userService.addUser(userData);
  }

  @Get('get-user/:id')
  async getUserById(@Param('id') id: number): Promise<User> {
    return await this.userService.getUserById(id);
  }
}
