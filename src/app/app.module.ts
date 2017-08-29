import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule} from '@angular/http';
import { FormsModule} from '@angular/forms';

import { routing, appRoutingProviders} from './app.routing';


import { AppComponent } from './app.component';
import { LoginComponent } from './components/login.component';
import { RegisterComponent} from './components/register.component';
import { DefaultComponent} from './components/default.component';
import { UserEditComponent } from './components/user.edit.component';
import { ProductoEditComponent} from './components/producto-edit.component';
import {ProductoAddComponent} from './components/productos-add.component';
import { ProductosListComponent} from './components/productos-list.component';
import { ProductoDetailComponent} from './components/producto-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    DefaultComponent,
    UserEditComponent,
    ProductoEditComponent,
    ProductoAddComponent,
    ProductosListComponent,
    ProductoDetailComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    routing
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
