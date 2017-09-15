import { Component, OnInit } from '@angular/core';
import {fundido} from '../../modules/admin/animation';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  animations: [fundido]
})
export class ContactComponent implements OnInit {
  public title;
  public emailContacto: string;

  constructor() {
    this.title = 'Contactos';
  }

  ngOnInit() {
    console.log('contacto cargado');
  }
  guardarEmail(){
    localStorage.setItem('email', this.emailContacto);
console.log(localStorage.getItem('email'));
  }

}
