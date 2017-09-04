import { Component, OnInit} from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { UserService} from '../services/user.service';
import { TaskService} from '../services/task.service';
import { Task} from '../models/task';

@Component({
  selector: '/task-edit',
  templateUrl: '../views/task.new.html',
  providers: [UserService, TaskService]
})
export class TaskEditComponent implements OnInit {
  public titulo: String;
  public identity;
  public task: Task;
  public token;
  public status_task: String;
  public loading;

  constructor(
    private _userService : UserService,
    private _route: ActivatedRoute,
    private _router: Router,
    private  _taskService: TaskService
  ) {
    this.titulo = 'Editar Tarea';
    this.identity = this._userService.getIdentity();
    this.token = this._userService.getToken2();

  }
  ngOnInit() {
    if (this.identity == null || !this.identity.sub) {
      this._router.navigate(['/login']);
    }else {
      this.getTask();
      // this.task = new Task(1, '', '', 'new', 'null', 'null', '' );

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
  onSubmit() {
    this._route.params.forEach((params: Params) => {
      const id = +params['id'];
      this._taskService.update(this.token, this.task, id).subscribe(
        response => {
          this.status_task = response.status;
          if (response.status != 'success') {
            this.status_task = 'ERROR';
          } else {
            this.task = response.data;
            this._router.navigate(['/task', this.task.id]);
          }

        }, error => {
          console.log(<any>error);
        }
      );

    });
  }

}
