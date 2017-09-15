import {Component, OnInit} from '@angular/core';
import {trigger, state, style, transition, animate} from '@angular/animations';
import { fundido} from '../../modules/admin/animation';


declare var jQuery: any;
declare  var $: any;

@Component({
  selector: 'tienda',
  templateUrl: '../tienda/tienda.html',
  styleUrls: ['../tienda/tienda.css'],
  animations: [
    trigger('marcar',[
      state('inactivo', style({
        border: '5px solid #ccc'
      })),
      state('active', style({
        border: '5px solid yellow',
        background: 'red',
        borderRadius: '50px',
        transform: 'scale(1.2)'
      })),
transition('inactivo => active', animate('3s linear')),
transition('active => inactivo', animate('300ms linear'))
    ]), [fundido]
  ]
})
export  class TiendaComponent implements OnInit {
  public title: string;
  public nombreDelParque: String;
  public metros;
  public estado;

  constructor() {
    this.title = 'Tienda';
    this.metros = 666;
    this.estado = 'inactivo';
  }

  ngOnInit() {
    $('#botonjq').click(function(){
      $('#texto').removeClass('hidden');
    });
  }

  mostrarNombre() {
    console.log(this.nombreDelParque);
  }
  cambiarEstado() {
    if (this.estado === 'active') {
      this.estado = 'inactivo';
    }else {
      this.estado = 'active';
    }
  }
  verDatosParque(event){
    console.log(event);
  }
  textoRichEditor(event) {
    console.log(event);
  }
}
