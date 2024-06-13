import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { DataBaseModule } from 'src/database/database.module';

@Module({
  imports: [
    ConfigModule.forRoot(
      {
        envFilePath: ['.env']
      }
    ),
    DataBaseModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
