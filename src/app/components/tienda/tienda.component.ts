import { Component , OnInit} from '@angular/core';
declare var jQuery: any;
declare  var $: any;

@Component({
  selector: 'tienda',
  templateUrl: '../tienda/tienda.html',
  styleUrls: ['../tienda/tienda.css']
})
export  class TiendaComponent implements OnInit{
  public title: string;
  public nombreDelParque: String;
  public metros;

  constructor() {
    this.title = 'Tienda';
    this.metros = 666;
  }

  ngOnInit() {
    $('#botonjq').click(function(){
      $('#texto').removeClass('hidden');
    });
  }

  mostrarNombre() {
    console.log(this.nombreDelParque);
  }
  verDatosParque(event){
    console.log(event);
  }
  textoRichEditor(event) {
    console.log(event);
  }
}
