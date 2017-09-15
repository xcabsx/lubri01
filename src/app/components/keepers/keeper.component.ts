import { Component, OnInit } from '@angular/core';
import { fundido} from '../../modules/admin/animation';

@Component({
  selector: 'app-keepers',
  templateUrl: './keeper.component.html',
  animations: [fundido]
})
export class KeeperComponent implements OnInit {
  public title;

  constructor() {
    this.title = 'Cuidadores';
  }

  ngOnInit() {
    console.log('keeper cargado');
  }

}
