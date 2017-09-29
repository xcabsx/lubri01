import { Component, OnInit} from '@angular/core';
import { RouterModule, Routes, Router, Params, ActivatedRoute} from '@angular/router';
import { UserService } from '../services/user.service';
import { User} from '../models/user';
import { UserMean} from '../models/userMean';
import { UserMeanService} from '../services/userMean.service';

@Component({
  selector: 'user-edit',
  templateUrl: '../views/user.edit.html',
  providers: [UserService, UserMeanService]

})
export class UserEditComponent implements OnInit{
  public title: string;
  public user: User;
  public userMean: UserMean;
  public  status;
  public identity;
  public token;
  public identityMean;
  public tokenMean;

  constructor(
    private  _userMeanService: UserMeanService,
    private _userService: UserService,
    private  _route: ActivatedRoute,
    private  _router: Router
  ) {
    this.title = 'Editar Datos';
    this.identity = this._userService.getIdentity();
    this.token = this._userService.getToken2();
    this.tokenMean = this._userMeanService.getTokenMean();
    this.identityMean = this._userMeanService.getIdentityMean();
    this.userMean = this.identityMean;

  }

  ngOnInit() {
   /*if ( this.identity == null) {
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
    }*/console.log('user edit component');
    if(this.identityMean == null) {
      this._router.navigate(['/login']);
    }else {

      this.userMean = new UserMean(
        this.identityMean._id,
        this.identityMean.role ,
        this.identityMean.name,
        this.identityMean.surname,
        this.identityMean.email, '', '');
      this.user = this.userMean;
      console.log(this.user);
    }


  }
  onSubmit() {
    this._userService.update_user(this.user).subscribe(
      response => {
        this.status = response.status;

        if (this.status != 'success') {
          this.status = 'error';
        }else {
          console.log('va a localstorrage');
          localStorage.setItem('identity', JSON.stringify(this.user));
          // como ya esta actualizado en la bd .. reemplaza el usuario del local storage

        }

      }, error => {
        console.log(<any>error);
      } );
    console.log(this.user);
  }
  onSubmitMean() {
    this._userMeanService.updateUserMean(this.userMean).subscribe(
      response => {
        //this.status = response.status;

        if (!response.user) {
          this.status = 'error';
        }else {
          localStorage.setItem('identityMean', JSON.stringify(this.userMean));
        }

      }, error => {
        console.log(<any>error);
      } );
    console.log(this.user);
  }
}
