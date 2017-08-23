import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'login',
  templateUrl: '../views/login.html'
})

export class LoginComponent implements OnInit {
  public title: string;
  public user ;

  constructor(
     private _route: ActivatedRoute,
     private _router: Router
  ) {
    this.title = 'Identificate';
    this.user = {
      'email': '',
      'password': '',
      'gethash': 'false'
    };

   };

  ngOnInit() {
    console.log('el componente ha sido cargado correctamente');

};
  onSubmit() {
    console.log(this.user);
  };

}


