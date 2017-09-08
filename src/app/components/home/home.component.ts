import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class Home2Component implements OnInit {
  public title;

  constructor() {
    this.title = 'Bienvenido al Zoo';
  }

  ngOnInit() {
    console.log('home cargado');
  }

}
