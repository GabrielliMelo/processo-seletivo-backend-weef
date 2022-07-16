import { Body, Controller, Get, Param, Post } from '@nestjs/common';
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

  @Get(':id')
  public async getOne(@Param('id') id: string): Promise<Events> {
    return this.eventsService.getOne(id);
  }

  @Post()
  public async create(@Body() createEventsDto: CreateEventsDto) {
    return this.eventsService.create(createEventsDto);
  }
}
