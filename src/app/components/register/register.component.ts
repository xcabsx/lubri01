import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params} from '@angular/router';
import { UserMean} from '../../models/userMean';
import { UserMeanService} from '../../services/userMean.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  providers: [UserMeanService]
})
export class Register2Component implements OnInit {
  public title: String;
  public usermean: UserMean;
  public message: String;
  public status: String;

  constructor(
    private  _userService: UserMeanService,
    private _route: ActivatedRoute,
    private _router: Router
  ) {
    this.message = '';
    this.title = 'Registro';
    this.usermean = new UserMean(0 , 'ROLE_USER', '', '', '', '', '');
  }

  ngOnInit() {
    console.log('register component cargado');
    this.message = '';
  }
  onSubmit(registerform) {
    this._userService.registerMean(this.usermean).subscribe(
      response => {
        if (response.user && response.user._id) {
          this.status = 'success';
          this.message = 'El registro se ha realizado Correctamente. Identificate con' + this.usermean.email ;
          this.usermean = new UserMean(0 , 'ROLE_USER', '', '', '', '', '');
          registerform.reset();
         }else {
          console.log('error');
          this.status = 'error';
          this.message = 'error al registrarse';
        }

      }, error =>{
        console.log(<any>error);
      }
    );

  }

}
