import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class Login2Component implements OnInit {
  public title;

  constructor(
    private _route : ActivatedRoute,
    private  _router: Router
  ) {
    this.title = 'login';
  }

  ngOnInit() {
    console.log('login works');
  }

}
