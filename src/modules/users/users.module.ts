import { Module } from '@nestjs/common';
import { UserController } from './users.controller';
import { UsersService } from './users.service';
import { TypeOrmModule } from "@nestjs/typeorm";
//import { UsersRepository } from "./users.repository";
import { Repository } from "typeorm";
import { UserTable } from "./user.entity";
// import { ModulesModule } from './modules/modules.module';

@Module({
  //imports: [TypeOrmModule.forFeature([User]), ModulesModule],
  imports: [TypeOrmModule.forFeature([UserTable])],
  controllers: [UserController],
  providers: [UsersService],

})
export class UsersModule {}
