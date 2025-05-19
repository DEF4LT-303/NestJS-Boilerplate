import { Body, Controller, HttpException, HttpStatus, Post, Req, UseGuards, ValidationPipe } from '@nestjs/common';
import { ApiBody, ApiConflictResponse, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Prisma } from '@prisma/client';
import { Request } from 'express';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { UsersService } from 'src/users/users.service';
import { AuthService } from './auth.service';
import { LocalGuard } from './guards/local.guard';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(
    private readonly usersService: UsersService,
    private readonly authService: AuthService,
  ) { }

  @Post('login')
  @UseGuards(LocalGuard)
  @ApiOperation({ summary: 'Login user and return JWT token' })
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        email: { type: 'string', example: 'user@example.com' },
        password: { type: 'string', example: 'password123' },
      },
    },
  })
  @ApiResponse({ status: 201, description: 'JWT token returned on success' })
  @ApiResponse({ status: 401, description: 'Invalid credentials' })
  async login(@Req() req: Request) {
    return this.authService.generateJwt(req.user as any);
  }

  @Post('register')
  @ApiOperation({ summary: 'Register a new user and return JWT token' })
  @ApiBody({ type: CreateUserDto })
  @ApiResponse({ status: 201, description: 'User registered successfully' })
  @ApiConflictResponse({ description: 'Email already exists' })
  async register(@Body(ValidationPipe) createUserDto: CreateUserDto) {
    try {
      const user = await this.usersService.create(createUserDto);
      return this.authService.generateJwt(user);
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        if (error.code === 'P2002') {
          throw new HttpException(
            'Email already exists',
            HttpStatus.CONFLICT
          );
        }
      }
      throw error;
    }
  }
}
