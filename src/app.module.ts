// import { Module } from '@nestjs/common';
// import { AppController } from './app.controller';
// import { AppService } from './app.service';
// import { JugadoresModule } from './jugadores/jugadores.module';
// import { EquiposModule } from './equipos/equipos.module';
// import { GolesModule } from './goles/goles.module';
// import { TarjetasModule } from './tarjetas/tarjetas.module';
// import { PartidosModule } from './partidos/partidos.module';
// import { TablaPosicionesModule } from './tabla-posiciones/tabla-posiciones.module';
// import { EstadisticasModule } from './estadisticas/estadisticas.module';
// import { MongooseModule } from '@nestjs/mongoose';


// @Module({
//   imports: [MongooseModule.forRoot(
//       'mongodb+srv://usuario:contraseña@cluster0.abcd123.mongodb.net/nest-cancha?retryWrites=true&w=majority'
//     ),
//     JugadoresModule, 
//     EquiposModule,
//     GolesModule,
//     TarjetasModule,
//     PartidosModule,
//      TablaPosicionesModule,
//       EstadisticasModule],
//   controllers: [AppController],
//   providers: [AppService],
// })
// export class AppModule {}






// import { Module } from '@nestjs/common';             // Agrega esta línea si no está
// import { ConfigModule } from '@nestjs/config';       // Importa ConfigModule
// import { MongooseModule } from '@nestjs/mongoose';
// import { JugadoresModule } from './jugadores/jugadores.module';
// import { EquiposModule } from './equipos/equipos.module';
// import { GolesModule } from './goles/goles.module';
// import { TarjetasModule } from './tarjetas/tarjetas.module';
// import { PartidosModule } from './partidos/partidos.module';
// import { TablaPosicionesModule } from './tabla-posiciones/tabla-posiciones.module';
// import { EstadisticasModule } from './estadisticas/estadisticas.module';
// import { AppController } from './app.controller';
// import { AppService } from './app.service';

// @Module({
//   imports: [
//     ConfigModule.forRoot(),    // Habilita carga de variables .env
//     MongooseModule.forRoot(process.env.MONGO_URI),   // Usa variable de entorno para conectar Mongo
//     JugadoresModule,
//     EquiposModule,
//     GolesModule,
//     TarjetasModule,
//     PartidosModule,
//     TablaPosicionesModule,
//     EstadisticasModule,
//   ],
//   controllers: [AppController],
//   providers: [AppService],
// })
// export class AppModule {}




// src/app.module.ts

import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

import { JugadoresModule } from './jugadores/jugadores.module';
import { EquiposModule } from './equipos/equipos.module';
import { GolesModule } from './goles/goles.module';
import { TarjetasModule } from './tarjetas/tarjetas.module';
import { PartidosModule } from './partidos/partidos.module';
import { TablaPosicionesModule } from './tabla-posiciones/tabla-posiciones.module';
import { EstadisticasModule } from './estadisticas/estadisticas.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    // Carga el archivo .env automáticamente
    ConfigModule.forRoot({
      isGlobal: true, // Hace que las variables estén disponibles en toda la app
    }),

    // Configura la conexión a Mongo usando una fábrica que accede a las variables del .env
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => {
        const mongoUri = configService.get<string>('MONGO_URI');
        if (!mongoUri) {
          throw new Error('❌ MONGO_URI no está definido en el archivo .env');
        }
        return { uri: mongoUri };
      },
      inject: [ConfigService],
    }),

    // Módulos de tu proyecto
    JugadoresModule,
    EquiposModule,
    GolesModule,
    TarjetasModule,
    PartidosModule,
    TablaPosicionesModule,
    EstadisticasModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
