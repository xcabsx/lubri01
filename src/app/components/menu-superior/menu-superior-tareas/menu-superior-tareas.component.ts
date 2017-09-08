import { Component, OnInit } from '@angular/core';
import { UserService} from '../../../services/user.service';

@Component({
  selector: 'app-menu-superior-tareas',
  templateUrl: './menu-superior-tareas.component.html',
  styleUrls: ['./menu-superior-tareas.component.css']
})
export class MenuSuperiorTareasComponent implements OnInit {

  public identity;
  public token;
  public emailContacto;

  constructor( private _userService: UserService ) {
    this.token = this._userService.getToken2();
    this.identity = this._userService.getIdentity();

  }

  ngOnInit() {
    console.log('menu tareas');
  }

}
