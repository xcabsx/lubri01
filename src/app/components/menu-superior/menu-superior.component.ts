import { Component, OnInit } from '@angular/core';
import { UserService} from '../../services/user.service';

@Component({
  selector: 'app-menu-superior',
  templateUrl: './menu-superior.component.html',
  styleUrls: ['./menu-superior.component.css']
})
export class MenuSuperiorComponent implements OnInit {
  public identity;
  public token;
  public emailContacto;

  constructor( private _userService: UserService ) {
    this.token = this._userService.getToken2();
    this.identity = this._userService.getIdentity();

  }

  ngOnInit() {
    console.log('menu superior cargado');
  }

}
