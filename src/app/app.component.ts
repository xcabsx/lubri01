import { Component, OnInit } from '@angular/core';
import { UserService} from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ UserService ]
})
export class AppComponent implements OnInit {
  title = 'app';
  public identity;
  public token;

  constructor( private _userService: UserService ) {
    this.token = this._userService.getToken2();
    this.identity = this._userService.getIdentity();

     }

  ngOnInit() {
  }
}
