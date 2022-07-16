import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('events')
export class Events {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    type: 'timestamptz',
  })
  date: Date;

  @Column('varchar')
  name: string;

  @Column('varchar')
  accountable: string;

  @Column('varchar')
  city: string;

  @Column('varchar')
  state: string;

  @Column('varchar')
  address: string;

  @Column('varchar')
  addressComplement: string;

  @Column('varchar')
  email: string;

  @Column('varchar')
  phone: string;

  @Column({
    type: 'simple-array',
  })
  images: string[];

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
