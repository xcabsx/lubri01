import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';

// componentes
import { LoginComponent} from './components/login.component';
import { RegisterComponent} from './components/register.component';
import { DefaultComponent} from './components/default.component';
import { UserEditComponent} from './components/user.edit.component';
import {ProductosListComponent} from './components/productos-list.component';
import { ProductoAddComponent} from './components/productos-add.component';
import { ProductoDetailComponent} from './components/producto-detail.component';
import { ProductoEditComponent} from './components/producto-edit.component';
import {HomeComponent} from './components/home.component';
import { TaskNewComponent} from './components/task.new.component';
import { TaskDetailComponent} from './components/task.detail.component';

const appRoutes: Routes = [
  {path: '' , component: HomeComponent},
  {path: 'index' , component: DefaultComponent},
  {path: 'index/:page' , component: DefaultComponent},
  {path: 'home' , component: HomeComponent},
  {path: 'login' , component: LoginComponent},
  {path: 'login/:id' , component: LoginComponent},
  {path: 'register' , component: RegisterComponent},
  {path: 'user-edit', component: UserEditComponent},
  {path: 'productos', component: ProductosListComponent},
  {path: 'productos-add', component: ProductoAddComponent},
  {path: 'producto/:id', component: ProductoDetailComponent},
  {path: 'editar-producto/:id', component: ProductoEditComponent},
  {path: 'new-task', component: TaskNewComponent},
  {path: 'task/:id', component: TaskDetailComponent},
  {path: '**' , component: LoginComponent}
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);


