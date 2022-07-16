import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Events } from './entities/events.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Events])],
})
export class EventsModule {}
