import { ApplicationConfig } from '@angular/core';
import { provideRouter, withComponentInputBinding, withPreloading, PreloadAllModules, withViewTransitions, withDebugTracing } from '@angular/router';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { appRoutes } from './app.routes';
// Aquí irán interceptores personalizados si los agregas
// import { authInterceptor } from './core/interceptors/auth.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(
      appRoutes,
      withPreloading(PreloadAllModules),
      withComponentInputBinding(),
      withViewTransitions(), // animaciones suaves entre rutas
      // withDebugTracing(), // Descomenta solo para depurar rutas en consola
    ),
    provideHttpClient(
      withInterceptors([
        // authInterceptor, // ← Descomenta cuando lo tengas listo
      ])
    )
  ]
};
