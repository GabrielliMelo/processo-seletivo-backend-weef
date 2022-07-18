import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateEventsDto } from './dtos/CreateEvents.dto';
import { UpdateEventsDto } from './dtos/UpdateEvents.dto';
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

  public async getOne(id: string): Promise<Events> {
    const event = await this.eventsRepository.findOneBy({ id });

    return event;
  }

  public async create(createEventsDto: CreateEventsDto): Promise<Events> {
    const event = this.eventsRepository.create(createEventsDto);

    await this.eventsRepository.save(event);

    return event;
  }

  public async update(
    id: string,
    updateEventsDto: UpdateEventsDto,
  ): Promise<Events> {
    const eventExists = await this.getOne(id);

    if (!eventExists) {
      throw new NotFoundException('Event not found');
    }

    this.eventsRepository.merge(eventExists, updateEventsDto);

    const updatedEvent = await this.eventsRepository.save(eventExists);

    return updatedEvent;
  }

  public async delete(id: string): Promise<void> {
    const eventExists = await this.getOne(id);

    if (!eventExists) {
      throw new NotFoundException('Event not found');
    }

    await this.eventsRepository.delete(id);
  }
}
