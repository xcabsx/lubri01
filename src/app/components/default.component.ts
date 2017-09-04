import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import { TaskService} from '../services/task.service';
import { UserService} from '../services/user.service';
import { Task} from '../models/task';

@Component({
  selector: 'default',
  templateUrl: '../views/default.html',
  providers: [TaskService, UserService]
})

export class DefaultComponent implements OnInit {
  public title: string;
  public identity;
  public token;
  public tasks: Array<Task>;
  public status_task;
  public pages;
  public pagePrev;
  public pageNext;
  public loading;

  constructor(
    private  _taskServices: TaskService,
     private _userServices: UserService,
     private _route: ActivatedRoute,
     private _router: Router
  ) {
    this.title = 'Home Page';
    this.identity = this._userServices.getIdentity();
    this.token = this._userServices.getToken2();

  }

  public ngOnInit() {
    console.log('el componente ha sido cargado correctamente');
    this.getAllTasks();

  }
  getAllTasks() {
    this._route.params.forEach((params: Params) => {
      let page = +params['page'];
      if (!page) {
        page = 1;
      }
      this.loading = 'Show';
      this._taskServices.getTasks(this.token, page ).subscribe(
        response => {
          this.status_task = response.status;
          if (this.status_task != 'success') {
            this.status_task = 'error';
          }else {
            this.tasks = response.data;
            this.loading = 'hide';

            // total de paginas
            this.pages = [];
            for (let i = 0; i < response.total_pages; i++) {
              this.pages.push(i);
            }
            // pagina anterior
            if (page >= 2 ) {
              this.pagePrev = (page - 1);
            }else {
              this.pagePrev = page;
            }
            // pagina siguiente
            if (page < response.total_pages  ) {
              this.pageNext = (page + 1);
            }else {
              this.pageNext = page;
            }



          }

        }, error => {
          console.log(<any>error);
        }
      );


    });

  }
  // filtro
 public filter = 0;
 public order = 0;
 public searchString;
 search() {
  console.log(this.filter);
  console.log(this.searchString);
  console.log(this.order);
  this.loading = 'show';
  if (!this.searchString || this.searchString.trim().length == 0) {
    this.searchString = null;
  }
  this._taskServices.search(this.token,this.searchString, this.filter, this.order).subscribe(
    response => {
      if (response.status == 'success'){
        this.tasks = response.data;
        this.loading = 'hide';
      }else {
        this._router.navigate(['/index']);
      }
    }, error => {
      console.log(<any>error);
    }
  );
}

}
