import { NgModule} from '@angular/core';
import { RouterModule, Routes} from '@angular/router';

// componentes
import { MainComponent} from './components/main/main.component';
import { EditComponent} from './components/edit/edit.component';
import { AddComponent} from './components/add/add.component';
import { ListComponent} from './components/list/list.component';
import { RolListComponent} from './components/list/rol.list.component';
import { UserListComponent} from './components/list/user.list.component';

const adminRoutes: Routes = [
  {
    path: 'admin-panel',
    component: MainComponent,
    children: [
      {path: '', redirectTo: 'listado', pathMatch: 'full'},
      {path: 'listado', component: RolListComponent},
      {path: 'listado-usuarios', component: UserListComponent},
      {path: 'crear', component: AddComponent}


    ]
  }];
@NgModule({
  imports: [
    RouterModule.forChild(adminRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AdminRoutingModule {}
