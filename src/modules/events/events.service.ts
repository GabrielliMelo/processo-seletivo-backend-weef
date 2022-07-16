import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateEventsDto } from './dtos/CreateEvents.dto';
import { Events } from './entities/events.entity';

@Injectable()
export class EventsService {
  constructor(
    @InjectRepository(Events)
    private readonly eventsRepository: Repository<Events>,
  ) {}

  public async getAll(): Promise<Events[]> {
    const events = await this.eventsRepository.find();

    return events;
  }

  public async create(createEventsDto: CreateEventsDto): Promise<Events> {
    const event = this.eventsRepository.create(createEventsDto);

    await this.eventsRepository.save(event);

    return event;
  }
}
