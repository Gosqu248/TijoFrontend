import { Routes } from '@angular/router';
import {HomeComponent} from './components/home-components/home/home.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'restaurants',
    loadComponent: () => import('./components/restaurants-components/restaurants-main/restaurants-main.component').then(m => m.RestaurantsMainComponent),
  },
  {
    path: 'menu',
    loadComponent: () => import('./components/menu-components/menu-main/menu-main.component').then(m => m.MenuMainComponent),
  },

];
