import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Gol {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  jugadorId: string;

  @Column()
  equipoId: string;

  @Column()
  partidoId: string;

  @Column()
  minuto: number;
}
