import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateEventsDto } from './dtos/CreateEvents.dto';
import { Events } from './entities/events.entity';
import { EventsService } from './events.service';

@Controller('events')
export class EventsController {
  constructor(private readonly eventsService: EventsService) {}

  @Get()
  public async getAll(): Promise<Events[]> {
    return this.eventsService.getAll();
  }

  @Post()
  public async create(@Body() createEventsDto: CreateEventsDto) {
    return this.eventsService.create(createEventsDto);
  }
}
