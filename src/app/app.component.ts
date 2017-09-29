import { Component, OnInit, DoCheck } from '@angular/core';
import { UserService} from './services/user.service';
import { UserMeanService} from './services/userMean.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ UserService , UserMeanService]
})
export class AppComponent implements OnInit, DoCheck {
  title = 'app';
  public identity;
  public token;
  public identityMean; //para mean
  public tokenMean; // para mean
  public emailContacto;

  constructor(
    private _userService: UserService,
    private _UserMeanServices: UserMeanService) {

    this.token = this._userService.getToken2();
    this.identity = this._userService.getIdentity();
    this.tokenMean = this._UserMeanServices.getTokenMean();
    this.identityMean = this._UserMeanServices.getIdentityMean();

     }

  ngOnInit() {
    console.log('pepe');
    //localStorage.removeItem('identity');
    //localStorage.removeItem('token');
    //this.emailContacto = localStorage.getItem('email');
  }
  ngDoCheck() {
    this.emailContacto = localStorage.getItem('email');
    this.tokenMean = this._UserMeanServices.getTokenMean();
    this.identityMean = this._UserMeanServices.getIdentityMean();

  }
  borrarEmail() {
    localStorage.removeItem('email');
  }
}
