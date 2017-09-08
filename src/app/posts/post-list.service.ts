import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Post } from './post';

@Injectable()
export class PostListService {

  private postUrl = 'http://localhost/wordpress/wp-json/wp/v2/';

  constructor(
    private _http: Http
  ) {}
  getPosts() {
    return this._http
      .get(this.postUrl + 'posts')
      .map((res: Response) => res.json());
  }

}
