import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';

@Controller('users')
export class UsersController {
  /*
  GET /users
  GET /users/:id
  POST /users
  PATCH /users/:id
  DELETE /users/:id
  */

  // @Get() // GET /users
  // findAll() {
  //   return ['GET방식, endpoint는 /user 입니다.'];
  // }

  @Get('interns') // GET /users/interns
  findAllInterns() {
    return ['GET방식, endpoint는 /user/interns 입니다.'];
  }

  @Get(':id') // GET /users/:id
  findOne(@Param('id') id: string) {
    return `GET방식, 동적경로 /users/${id}`;
  }

  @Post() // POST /users
  create(@Body() user: {}) {
    return user;
  }

  @Patch(':id') // PATCH /users/:id
  update(@Param('id') id: string, @Body() userUpdate: {}) {
    return { id, ...userUpdate };
  }

  @Delete(':id') // DELETE /users/:id
  delete(@Param('id') id: string) {
    return { id };
  }

  @Get() // GET /users or /users?role=value
  findAll(@Query('role') role?: 'INTERN' | 'ENGINEER' | 'ADMIN') {
    return [];
  }
}
