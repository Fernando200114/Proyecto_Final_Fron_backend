import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Jugador } from './jugador.entity';

@Entity()
export class Equipo {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  nombre: string;

  @Column()
  ciudad: string;

  @Column()
  entrenador: string;

  @Column({ nullable: true })
  escudoUrl: string;

  @Column({ default: 0 })
  puntos: number;

  @OneToMany(() => Jugador, jugador => jugador.equipo)
  jugadores: Jugador[];
}
