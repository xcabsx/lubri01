// modulos
import { NgModule} from '@angular/core';
import { CommonModule} from '@angular/common';
import { FormsModule} from '@angular/forms';
import { HttpModule} from '@angular/http';
import { AdminRoutingModule} from './admin-routing.module';

import { MainComponent} from './components/main/main.component';
import { EditComponent} from './components/edit/edit.component';
import { AddComponent} from './components/add/add.component';
import { ListComponent} from './components/list/list.component';
import { RolListComponent} from './components/list/rol.list.component';
import { UserListComponent} from './components/list/user.list.component';


@NgModule({
  declarations: [
    MainComponent,
    ListComponent,
    AddComponent,
    EditComponent,
    RolListComponent,
    UserListComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    AdminRoutingModule
  ],
  providers: []
})

export class AdminModule {}
