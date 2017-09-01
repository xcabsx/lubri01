import { Injectable} from '@angular/core';
import { Http, Response, Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable} from 'rxjs/Observable';
import { GLOBAL} from './GLOBAL';

@Injectable()
export class TaskService{
  public url: String;
  constructor(
    private _http: Http
  ) {
    this.url = GLOBAL.url;

  }
  create(token, task) {
    const json = JSON.stringify(task);
    const params = 'json=' + json + '&authorization=' + token;
    const headers = new Headers({'Content-Type' : 'application/x-www-form-urlencoded'});
    return this._http.post(this.url + '/task/new' , params , {headers: headers}).map(res => res.json());
  }
  getTasks(token, pagina = null) {
    const params = 'authorization=' + token;
    const headers = new Headers({'Content-Type' : 'application/x-www-form-urlencoded'});
    if (pagina == null) {
      pagina = 1;
    }

    return this._http.post(this.url + '/task/list?page=' + pagina , params , {headers: headers}).map(res => res.json());



  }
  getTask(token, id) {
    const params = 'authorization=' + token;
    const headers = new Headers({'Content-Type' : 'application/x-www-form-urlencoded'});
    return this._http.post(this.url + '/task/detail/' + id, params , {headers: headers}).map(res => res.json());
  }

}
