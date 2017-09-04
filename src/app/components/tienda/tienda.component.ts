import { Component , OnInit} from '@angular/core';

@Component({
  selector: 'tienda',
  templateUrl: '../tienda/tienda.html',
  styleUrls: ['../tienda/tienda.css']
})
export  class TiendaComponent{
  public title: string;
  constructor() {
    this.title = 'Tienda';
  }
}
