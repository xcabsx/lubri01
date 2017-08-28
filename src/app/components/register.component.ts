import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import { User} from '../models/user';
import { UserService} from '../services/user.service';
import {parseHttpResponse} from "selenium-webdriver/http";

@Component({
  selector: 'register',
  templateUrl: '../views/register.html',
  providers: [UserService]
})

export class RegisterComponent implements OnInit {
  public title: string;
  public user: User;
  public status;

  constructor(
    private  _userService: UserService,
   private _route: ActivatedRoute,
    private _router: Router
  ) {
    this.title = 'Registro';
    this.user = new User(1, 'user', '', '', '', '');
    /*this.user = {
      id: null ,
      name: '',
      email: '',
      role: '',
      surname: '',
      password: ''
    };*/


  };

  public ngOnInit() {
    console.log('el componente ha sido cargado correctamente');

  };
  onSubmit() {
    console.log(this.user);
    this._userService.register2(this.user).subscribe(
      response => {
        this.status = response.status;
        if ( response.status != 'success'){
          this.status = 'Error';
        }else {
          this.user = new User(1, 'user', '', '', '', '');
        }

      },error => {
          console.log(<any>error);
      });
  }

}
