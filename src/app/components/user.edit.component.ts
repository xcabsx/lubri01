import { Component, OnInit} from '@angular/core';
import { RouterModule, Routes, Router, Params, ActivatedRoute} from '@angular/router';
import { UserService } from '../services/user.service';
import { User} from '../models/user';

@Component({
  selector: 'user-edit',
  templateUrl: '../views/user.edit.html',
  providers: [UserService]

})
export class UserEditComponent implements OnInit{
  public title: string;
  public user: User;
  public  status;
  public identity;
  public token;

  constructor(
    private _userService: UserService,
    private  _route: ActivatedRoute,
    private  _router: Router
  ) {
    this.title = 'Editar Datos';
    this.identity = this._userService.getIdentity();
    this.token = this._userService.getToken2();

  }

  ngOnInit() {
    if ( this.identity == null) {
      this._router.navigate(['/login']);
    }else {
      console.log(this.identity.role);
      this.user = new User(
        this.identity.sub ,
        this.identity.role,
        this.identity.name,
        this.identity.surname,
        this.identity.email,
        this.identity.password
        );
    }
  }
  onSubmit(){
    console.log(this.user);
  }
}