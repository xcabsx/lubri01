import { Component, OnInit } from '@angular/core';
import { fundido} from '../../modules/admin/animation';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  animations: [fundido] })
export class Home2Component implements OnInit {
  public title;

  constructor() {
    this.title = 'Bienvenido al Zoo';
  }

  ngOnInit() {
    console.log('home cargado');
  }

}
