import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // 🚨 Habilitar CORS para permitir peticiones desde el frontend
  app.enableCors({
    origin: ['http://localhost:5173'], // frontend local de React (Vite)
    methods: 'GET,POST,PUT,PATCH,DELETE,OPTIONS',
    credentials: true,
  });

  await app.listen(process.env.PORT ?? 3013);
}
bootstrap();
