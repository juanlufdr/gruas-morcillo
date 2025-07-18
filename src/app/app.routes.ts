import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home').then((m) => m.Home),
  },
  {
    path: 'about-us',
    loadComponent: () => import('./about/about').then((m) => m.About),
  },
  {
    path: 'contact',
    loadComponent: () => import('./contact/contact').then((m) => m.Contact),
  },
  {
    path: 'fleet',
    loadComponent: () => import('./fleet/fleet').then((m) => m.Fleet),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
];
