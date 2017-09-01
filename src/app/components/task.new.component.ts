import { Component, OnInit} from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { UserService} from '../services/user.service';
import  { TaskService} from '../services/task.service';
import { Task} from '../models/task';

@Component({
  selector: '/task-new',
  templateUrl: '../views/task.new.html',
  providers: [UserService, TaskService]
})
export class TaskNewComponent implements OnInit {
  public titulo: String;
  public identity;
  public task: Task;
  public token;
  public status_task: String;

  constructor(
    private _userService : UserService,
    private _route: ActivatedRoute,
    private _router: Router,
    private  _taskService: TaskService
  ) {
    this.titulo = 'Nueva Tarea';
    this.identity = this._userService.getIdentity();
    this.token = this._userService.getToken2();

  }
  ngOnInit() {
    if (this.identity == null || !this.identity.sub) {
      this._router.navigate(['/login']);
    }else {
         this.task = new Task(1, '', '', 'new', 'null', 'null', '' );
    }


  }
  onSubmit() {
    this._taskService.create(this.token, this.task).subscribe(
      response => {
        this.status_task = response.status;
        if ( response.status != 'success') {
          this.status_task = 'ERROR';
        }else {
          this.task = response.data;
          this._router.navigate(['/task',this.task.id]);
        }

      }, error => {
        console.log(<any>error);
      });

  }

}
