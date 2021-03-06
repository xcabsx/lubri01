import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';

// componentes
import { LoginComponent} from './components/login.component';
import { RegisterComponent} from './components/register.component';
import { DefaultComponent} from './components/default.component';
// import { UserEditComponent} from './components/user.edit.component';
import {ProductosListComponent} from './components/productos-list.component';
import { ProductoAddComponent} from './components/productos-add.component';
import { ProductoDetailComponent} from './components/producto-detail.component';
import { ProductoEditComponent} from './components/producto-edit.component';
import {HomeComponent} from './components/home.component';
import { TaskNewComponent} from './components/task.new.component';
import { TaskDetailComponent} from './components/task.detail.component';
import { TaskEditComponent} from './components/task.edit.component';// mean stack
import { Login2Component} from './components/login/login.component';
import { Register2Component} from './components/register/register.component';
import { UserDetailComponent} from './components/user-detail/user.detail.component';

import { AnimalsComponent } from './components/animals/animals.component';
import { ContactComponent } from './components/contact/contact.component';
import { KeeperComponent } from './components/keepers/keeper.component';
import { TiendaComponent} from "./components/tienda/tienda.component";
import {Home2Component} from "./components/home/home.component";



const appRoutes: Routes = [
  {path: '' , component: DefaultComponent},
  {path: 'index' , component: DefaultComponent},
  {path: 'index/:page' , component: DefaultComponent},
  {path: 'home' , component: HomeComponent},
  {path: 'login' , component: LoginComponent},
  {path: 'login/:id' , component: LoginComponent},
  {path: 'register' , component: RegisterComponent},
 // {path: 'user-edit', component: UserEditComponent},
  {path: 'productos', component: ProductosListComponent},
  {path: 'productos-add', component: ProductoAddComponent},
  {path: 'producto/:id', component: ProductoDetailComponent},
  {path: 'editar-producto/:id', component: ProductoEditComponent},
  {path: 'new-task', component: TaskNewComponent},
  {path: 'task/:id', component: TaskDetailComponent},
  {path: 'task-edit/:id', component: TaskEditComponent},

  {path: 'contacto', component: ContactComponent},
  {path: 'animals', component: AnimalsComponent},
  {path: 'keepers', component: KeeperComponent},
  {path: 'inicio', component: Home2Component},
  {path: 'tienda', component: TiendaComponent},
  {path: 'registro', component: Register2Component},
 // {path: 'login', component: Login2Component}, //para el desarrollo con mean

  {path: '**' , component: LoginComponent}
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);


