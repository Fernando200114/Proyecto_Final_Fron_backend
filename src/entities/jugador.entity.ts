import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Equipo } from './equipo.entity';

@Entity()
export class Jugador {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  nombre: string;

  @Column()
  posicion: string;

  @Column()
  goles: number;

  @Column()
  tarjetasAmarillas: number;

  @Column()
  tarjetasRojas: number;

  @ManyToOne(() => Equipo, equipo => equipo.jugadores)
  equipo: Equipo;
}
