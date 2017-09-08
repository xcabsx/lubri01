import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-keepers',
  templateUrl: './keeper.component.html',
  styleUrls: ['./keeper.component.css']
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
