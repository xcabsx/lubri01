import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';

// componentes
import { LoginComponent} from './components/login.component';
import { RegisterComponent} from './components/register.component';
import { DefaultComponent} from './components/default.component';

const appRoutes: Routes =[
  {path: '' , component: DefaultComponent},
  {path: 'home' , component: DefaultComponent},
  {path: 'login' , component: LoginComponent},
  {path: 'login/:id' , component: LoginComponent},
  {path: 'register' , component: RegisterComponent},
  {path: '**' , component: LoginComponent}
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);


