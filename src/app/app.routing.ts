import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';

// componentes
import { LoginComponent} from './components/login.component';
import { RegisterComponent} from './components/register.component';
import { DefaultComponent} from './components/default.component';
import { UserEditComponent} from './components/user.edit.component';
import {ProductosListComponent} from './components/productos-list.component';
import  { ProductoAddComponent} from './components/productos-add.component';
import { ProductoDetailComponent} from './components/producto-detail.component';
import  { ProductoEditComponent} from './components/producto-edit.component';

const appRoutes: Routes =[
  {path: '' , component: DefaultComponent},
  {path: 'home' , component: DefaultComponent},
  {path: 'login' , component: LoginComponent},
  {path: 'login/:id' , component: LoginComponent},
  {path: 'register' , component: RegisterComponent},
  {path: 'user-edit', component: UserEditComponent},
  {path: 'productos', component: ProductosListComponent},
  { path:'productos-add', component: ProductoAddComponent},
  { path:'producto/:id', component: ProductoDetailComponent},
  { path:'editar-producto/:id', component: ProductoEditComponent},
  {path: '**' , component: LoginComponent}
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);


