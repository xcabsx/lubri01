import { Injectable} from '@angular/core';
import { Http, Response, Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable} from 'rxjs/Observable';
import { GLOBAL} from './GLOBAL';

@Injectable()
export class UserMeanService {
  public url: string;
  public identity;
  public token;

  constructor(private _http: Http) {
    this.url = GLOBAL.url3;
  }

  registerMean(user_to_register) {
    let params = JSON.stringify(user_to_register);
    //const params = 'json=' + json;
    const headers = new Headers({'Content-Type' : 'application/json'});
    return this._http.post(this.url + 'saveUser' , params , {headers : headers}).map(res => res.json());
  }
  signupMean(user_to_login, getToken = null) {
    if(getToken != null) {
      user_to_login.getToken = getToken;
    }

    let params = JSON.stringify(user_to_login);
    const headers = new Headers({'Content-Type' : 'application/json'});
    return this._http.post(this.url + 'login' , params , {headers : headers}).map(res => res.json());
  }
  getIdentityMean() {
    const identity = JSON.parse(localStorage.getItem('identityMean'));

    if (identity != 'undefined') {
      this.identity = identity;
    }else {
      this.identity = null;
    }
    return this.identity;
  }

  getTokenMean() {
    const token = localStorage.getItem('tokenMean');

    if (token != 'undefined') {
      this.token = token;
    }else {
      this.token = null;
    }
    return this.token;
  }
  updateUserMean(user_to_update){
    let params = JSON.stringify(user_to_update);
    const headers = new Headers({'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': this.getTokenMean()});
    return this._http.post(this.url + 'update-user/' + user_to_update.id , params , {headers : headers}).map(res => res.json());

  }

}
