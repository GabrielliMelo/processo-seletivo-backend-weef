import { Body, Controller, Post } from '@nestjs/common';
import { CreateEventsDto } from './dtos/CreateEvents.dto';
import { EventsService } from './events.service';

@Controller('events')
export class EventsController {
  constructor(private readonly eventsService: EventsService) {}

  @Post()
  public async create(@Body() createEventsDto: CreateEventsDto) {
    return this.eventsService.create(createEventsDto);
  }
}
