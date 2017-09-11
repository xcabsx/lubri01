import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule} from '@angular/http';
import { FormsModule} from '@angular/forms';

import { routing, appRoutingProviders} from './app.routing';

// importar modulo

import { ModuloemailModule} from './modules/moduloemail/moduloemail.module';
import { AdminModule} from "./modules/admin/admin.module";

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login.component';
import { RegisterComponent} from './components/register.component';
import { DefaultComponent} from './components/default.component';
import { UserEditComponent } from './components/user.edit.component';
import { ProductoEditComponent} from './components/producto-edit.component';
import {ProductoAddComponent} from './components/productos-add.component';
import { ProductosListComponent} from './components/productos-list.component';
import { ProductoDetailComponent} from './components/producto-detail.component';
import { HomeComponent} from './components/home.component';
import { TaskNewComponent} from './components/task.new.component';
import { TaskDetailComponent} from './components/task.detail.component';
import { TaskEditComponent} from './components/task.edit.component';
import { generateDatePipe } from './pipes/generate.date.pipe';
import { ErrorComponent} from './components/error.component';

//componentes de curso mean stack
import { TiendaComponent} from './components/tienda/tienda.component';
import { ParquesComponent} from './components/parques/parques.component';
import { Home2Component} from "./components/home/home.component";
import { AnimalsComponent } from './components/animals/animals.component';
import { ContactComponent } from './components/contact/contact.component';
import { KeeperComponent } from './components/keepers/keeper.component';
import { GuardarEmailComponent} from './modules/moduloemail/components/guardar-email/guardar.email.component';
import { MostrarEmailComponent} from './modules/moduloemail/components/mostrar-email/mostrar.email.component';
import { MainEmailComponent} from './modules/moduloemail/components/main-email/main.email.component';
// para probar wordpress
import { PostListComponent } from './posts/post-list/post-list.component';
import { FutbolComponent } from './components/futbol/futbol.component';
import { SimpleTinyComponent } from './components/simple-tiny/simple-tiny.component';
import { MenuSuperiorComponent } from './components/menu-superior/menu-superior.component';
import { MenuSuperiorTareasComponent } from './components/menu-superior/menu-superior-tareas/menu-superior-tareas.component';




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
    ProductoDetailComponent,
    HomeComponent,
    TaskNewComponent,
    TaskDetailComponent,
    TaskEditComponent,
    generateDatePipe,
    TiendaComponent,
    PostListComponent,
    ErrorComponent,
    ParquesComponent,
    FutbolComponent,
    AnimalsComponent,
    ContactComponent,
    KeeperComponent,
    Home2Component,
    SimpleTinyComponent,
    MenuSuperiorComponent,
    MenuSuperiorTareasComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    routing,
    ModuloemailModule,
    AdminModule
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
