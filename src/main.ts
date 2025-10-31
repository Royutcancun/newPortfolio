import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { appConfig } from './app/app.config';
import { provideHttpClient } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';
import { importProvidersFrom, mergeApplicationConfig } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

// 🔧 Fusionamos la configuración base del proyecto con los nuevos providers
const extendedConfig = mergeApplicationConfig(appConfig, {
  providers: [
    provideHttpClient(),
    provideAnimations(),
    importProvidersFrom(ReactiveFormsModule),
  ],
});

// 🚀 Iniciamos la app con la configuración fusionada
bootstrapApplication(AppComponent, extendedConfig)
  .catch((err) => console.error('❌ Error al iniciar la aplicación:', err));
