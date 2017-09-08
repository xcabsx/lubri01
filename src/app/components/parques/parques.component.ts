import { Component , OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges, DoCheck } from '@angular/core';

@Component({
  selector: 'parques',
  templateUrl: '../parques/parques.html',
  styleUrls: ['../parques/parques.css']
})
export  class ParquesComponent implements OnChanges, DoCheck{
 @Input() public nombre: string;
 @Input() public metros: number;
  public vegetacion: String;
  public abierto: boolean;

  @Output() pasameLosDatos = new EventEmitter();


  constructor() {
    this.nombre = 'parque natural para caballos';
    this.metros = 450;
    this.vegetacion = 'alta';
    this.abierto = true;
  }
  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
    console.log('cambios');


  }
  ngDoCheck(){
    console.log('docheck');
  }
  emitirEvento(){
    this.pasameLosDatos.emit({
      'nombre1' : this.nombre,
      'metros1' : this.metros,
      'vegetacion1' : this.vegetacion,
      'abierto1' : this.abierto
    });
  };
}
