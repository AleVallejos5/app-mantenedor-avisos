import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./paginas/home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'aviso-formulario',
    loadComponent: () => import('./paginas/aviso-formulario/aviso-formulario.page').then( m => m.AvisoFormularioPage)
  },
];
