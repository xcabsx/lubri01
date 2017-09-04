import { Component, OnInit} from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { UserService} from '../services/user.service';
import { TaskService} from '../services/task.service';
import { Task} from '../models/task';
import {Http} from "@angular/http";

@Component({
  selector: 'task-detail',
  templateUrl: '../views/task.detail.html',
  providers: [TaskService, UserService]
})
export class TaskDetailComponent implements OnInit{
  public identity;
  public token;
  public task: Task;
  public loading;

  constructor(
    private _userService: UserService,
    private _taskService: TaskService,
    private _route: ActivatedRoute,
    private _router: Router,
    private _http: Http
  ) {
    this.identity = this._userService.getIdentity();
    this.token = this._userService.getToken2();
  }
  ngOnInit() {
    if (this.identity && this.identity.sub) {
      this.getTask();
      //llamada al servicio de tareas para sacar una tarea

    }else {
      this._router.navigate(['/login']);
    }
  }
  getTask() {
    this.loading = 'show';
    this._route.params.forEach((params: Params) => {
      const id = +params['id'];
      this._taskService.getTask(this.token, id).subscribe(
        response => {

          if (response.status === 'success') {
            if (response.data.user.id == this.identity.sub) {
              // podemos ver la tarea
              this.task = response.data;
              this.loading = 'hide';

            }else{
              // redirigir home
              this._router.navigate(['/']);

            }

          }else {
            this._router.navigate(['/login']);
          }

        }, error => {
          console.log(<any>error);
        }
      );
    });
  }
  deleteTask(id) {
    this._taskService.deleteTask(this.token, id).subscribe(
      response => {
        if ( response.status == 'success') {
          this._router.navigate(['/']);
        }else {
          alert('No se ha podido Borrar');

        }
      }, error => {
        console.log(<any>error);
      }
    );
  }
}


