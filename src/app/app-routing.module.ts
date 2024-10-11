import { Routes } from '@angular/router';
import { SwimmingHomeComponent } from './components/swimming-home/swimming-home.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'plavanie',
    pathMatch: 'full',
  },
  {
    path: 'plavanie',
    component: SwimmingHomeComponent,
  },
];
