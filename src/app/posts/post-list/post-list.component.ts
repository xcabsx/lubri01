import { Component, OnInit } from '@angular/core';
import { Post} from '../post';
import { PostListService} from '../post-list.service';


@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css'],
  providers: [PostListService]
})
export class PostListComponent implements OnInit {
  public title: String;
  public  posts: Post[];



  constructor(
    private _postsService: PostListService
  ) {
    this.title = 'Hola cabs';
  }

  ngOnInit() {
    this.getPosts();
  }
  getPosts() {
    this._postsService
      .getPosts()
      .subscribe(res => {
        this.posts = res;
      }, error => {
        console.log(<any>error);
      });
  }

}
