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
    path: 'legal-notice',
    loadComponent: () =>
      import('./legal-notice/legal-notice').then((m) => m.LegalNotice),
  },
  {
    path: 'privacy-policy',
    loadComponent: () =>
      import('./privacy-policy/privacy-policy').then((m) => m.PrivacyPolicy),
  },
  {
    path: 'cookie-policy',
    loadComponent: () =>
      import('./cookie-policy/cookie-policy').then((m) => m.CookiePolicy),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
];
