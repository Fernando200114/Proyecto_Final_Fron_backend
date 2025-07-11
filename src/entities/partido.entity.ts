import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Partido {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  equipoLocalId: string;

  @Column()
  equipoVisitanteId: string;

  @Column()
  fecha: Date;

  @Column()
  lugar: string;

  @Column({ default: 0 })
  golesLocal: number;

  @Column({ default: 0 })
  golesVisitante: number;
}
