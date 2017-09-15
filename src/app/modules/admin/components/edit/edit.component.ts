import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'admin-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  public title;

  constructor() {
    this.title = 'editar';
  }

  ngOnInit() {
  }

}
