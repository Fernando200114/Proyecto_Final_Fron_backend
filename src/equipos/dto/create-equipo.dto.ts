// src/equipos/dto/create-equipo.dto.ts

export class CreateEquipoDto {
  readonly nombre: string; // Nombre del equipo (Ej: Barcelona, Liga)
  readonly ciudad: string; // Ciudad de origen del equipo
  readonly entrenador: string; // Nombre del entrenador
  readonly escudoUrl?: string; // URL opcional del escudo del equipo
  readonly puntos?: number; // Puntos en la tabla (por defecto 0)
}
