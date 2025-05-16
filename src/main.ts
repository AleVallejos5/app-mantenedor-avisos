/// <reference types="@angular/localize" />

import { bootstrapApplication } from '@angular/platform-browser';
import { RouteReuseStrategy, provideRouter, withPreloading, PreloadAllModules } from '@angular/router';
import { IonicRouteStrategy, provideIonicAngular } from '@ionic/angular/standalone';

import { routes } from './app/app.routes';
import { AppComponent } from './app/app.component';
import { AvisosService } from './app/services/avisos.service';
import { AlmacenamientoService } from './app/services/almacenamiento.service';
import { CamaraService } from './app/services/camara.service';

import { provideHttpClient } from '@angular/common/http';
import { DatePipe } from '@angular/common';



bootstrapApplication(AppComponent, {
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    provideIonicAngular({ mode: 'ios',
      backButtonText: 'Volver',
      hardwareBackButton: true
     }),
    provideRouter(routes, withPreloading(PreloadAllModules)),

    // Servicios globales
    AvisosService,
    AlmacenamientoService,
    CamaraService,
    
    // Utilidades comunes
    provideHttpClient(), // Para futuras peticiones HTTP
    DatePipe, // Para el pipe de formato de fecha

  ]
}).catch(err => console.error(err));
