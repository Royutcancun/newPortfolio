import { Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { WorkComponent } from './sections/work/work.component';

export const routes: Routes = [
  {
    path: './header.component.ts',
    component: HeaderComponent,

  },
  {
    path: './navbar.component.ts',
    component: NavbarComponent
  },
  {
    path: './sections/work/work.component.ts',
    component: WorkComponent
  }
];
