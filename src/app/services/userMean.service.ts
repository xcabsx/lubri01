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

}
