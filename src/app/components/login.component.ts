import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import { UserService} from '../services/user.service';

@Component({
  selector: 'login',
  templateUrl: '../views/login.html',
  providers: [UserService]
})

export class LoginComponent implements OnInit {
  public title: string;
  public user ;
  public identity;
  public token;

  constructor(
     private  _userService: UserService,
     private _route: ActivatedRoute,
     private _router: Router
  ) {
    this.title = 'Identificate';
    this.user = {
      'email': '',
      'password': '',
      'getHash': 'true'
    };

   };

  ngOnInit() {
    // console.log(this.user);
    this.logOut();
    this.redirectIfIdentity();
  }
  logOut(){
  this._route.params.forEach((params: Params) => {// recorre los parametros
    let logout = +params['id'];
    if (logout == 1) {
      localStorage.removeItem('identity');
      localStorage.removeItem('token');

      this.identity = null;
      this.token = null;
      window.location.href = '/login';
    }
  });
  }

  redirectIfIdentity() {
    let identity = this._userService.getIdentity();
    if( identity != null && identity.sub ) {
      this._router.navigate(["/"]);
    }

  }

  onSubmit() {
    this._userService.signup(this.user).subscribe(
      response => {
          this.identity = response;
            if (this.identity.length <= 1) {
              console.log('error en el servidor');
            }else {
              if (!this.identity.status) {// no existe la variable status si es correcto
                localStorage.setItem('identity', JSON.stringify(this.identity));
                  // para token la misma llamada pero poniendo el resultado en token
                          this.user.getHash = ''; // al mandar falso devuelve el token la funcion
                          this._userService.signup(this.user).subscribe(
                            response1 => {
                              this.token = response1;
                              if (this.token.length <= 1) {
                                console.log('error en el servidor');
                              }else {
                                if (!this.token.status) {// no existe la variable status si es correcto
                                  localStorage.setItem('token', JSON.stringify(this.token));
                                  window.location.href = '/home';
                                }
                              }
                            }, error => {
                              console.log(<any>error);
                            }
                          );


              }

            }

      }, error => {
          console.log(<any>error);

    }
    );
  };

}


