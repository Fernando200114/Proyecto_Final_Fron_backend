import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Tarjeta {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  jugadorId: string;

  @Column()
  partidoId: string;

  @Column()
  minuto: number;

  @Column()
  tipo: 'amarilla' | 'roja';
}
