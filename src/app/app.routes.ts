import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./homepage/homepage').then(m => m.Homepage)
  },
  {
    path: 'shop',
    loadComponent: () =>
      import('./shop/shop').then(m => m.Shop )
  },
    {
    path: 'about',
    loadComponent: () =>
      import('./about/about').then(m => m.About )
  },
     {
    path: 'eventplanner',
    loadComponent: () =>
      import('./eventplanner/eventplanner').then(m => m.Eventplanner )
  },
     {
    path: 'card',
    loadComponent: () =>
      import('./card/card').then(m => m.Card )
  },
];
