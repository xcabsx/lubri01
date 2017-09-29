import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params} from '@angular/router';
import { UserMean} from "../../models/userMean";
import { UserMeanService} from '../../services/userMean.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  providers: [UserMeanService]
})
export class Login2Component implements OnInit {
  public title;
  public user: UserMean;
  public identity;
  public token;
  public status;

  constructor(
    private  _userService: UserMeanService,
    private _route: ActivatedRoute,
    private  _router: Router
  ) {
    this.title = 'login';
    this.user = new UserMean(0, '' , '' , '' , '' , '' , '' );
    }

  ngOnInit() {
    console.log(this._userService.getIdentityMean());
  }
  onSubmit() {
    // logear al usuario y conseguir objeto.
    this._userService.signupMean(this.user, null).subscribe(
      response => {
        this.identity = response.data;
        if (!this.identity || !this.identity._id) {
          this.status = 'error';
          console.log('no se ha logeado correctamente');
        }else {
          // mostrar identity
          this.identity.password = '';
          //console.log(this.identity);
          localStorage.setItem('identityMean', JSON.stringify(this.identity));

            // conseguir el token
              this._userService.signupMean(this.user, true).subscribe(
                response => {
                  this.token = response.token;
                  if (this.token.lenth <= 0) {
                    console.log('error en token, no se ha generado');
                    this.status = 'error';
                  }else {
                    // this.identity = response.data;
                    // mostrar el token
                   localStorage.setItem('tokenMean', this.token);
                   this.status = 'success';
                   this._router.navigate(['/inicio']);
                  }
                }, error => {
                  console.log(<any>error);
                }
              );
         // this.identity = response.data;
          //this.user = response;
        }

      }, error => {
        let errorMesage = <any>error;
        if(errorMesage != null) {
          let body = JSON.parse(error._body);
          this.status = 'error';
        }
      }
    );
  }

}
