import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './modules/users/users.module';

@Module({

  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: '[ENTER_USERNAME]',
      password: '[ENTER_DATABASE_PASSWORD]',
      database: '[ENTER_DATABASE_NAME]',
      entities: [__dirname+"/../modules/**/*.entity.{ts,js}"],
      synchronize: true,
      autoLoadEntities :true,
    }),
    UsersModule ,
  ],
})
export class AppModule {}
