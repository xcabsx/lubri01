import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'default',
  templateUrl: '../views/default.html'
})

export class DefaultComponent implements OnInit {
  public title: string;

  constructor(
     private _route: ActivatedRoute,
     private _router: Router
  ) {
    this.title = 'Home Page';

  };

  public ngOnInit() {
    console.log('el componente ha sido cargado correctamente');

  };

}
