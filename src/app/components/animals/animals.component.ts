import { Component, OnInit } from '@angular/core';
import { fundido} from '../../modules/admin/animation';

@Component({
  selector: 'app-animals',
  templateUrl: './animals.component.html',
  animations: [fundido]
})
export class AnimalsComponent implements OnInit {
  public title;

  constructor() {
    this.title = 'animales';
  }

  ngOnInit() {
    console.log('animales cargado');
  }

}
