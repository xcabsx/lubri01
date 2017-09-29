import { Component, OnInit, DoCheck } from '@angular/core';
import { UserService} from '../../services/user.service';
import { UserMeanService} from '../../services/userMean.service';
import { Router, ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-menu-superior',
  templateUrl: './menu-superior.component.html',
  providers: [UserMeanService]
})
export class MenuSuperiorComponent implements OnInit, DoCheck {
  public identityMean;
  public tokenMean;
  public emailContacto;

  constructor(
    private _userService: UserMeanService,
    private _route: ActivatedRoute,
    private  _router: Router) {
    this.tokenMean = this._userService.getTokenMean();
    this.identityMean = this._userService.getIdentityMean();
  }

  ngOnInit() {
    console.log('menu superior cargado');
  }
  ngDoCheck() {
    this.identityMean = this._userService.getIdentityMean();
  }
logout(){
    localStorage.clear();
    this.identityMean = null;
    this.tokenMean = null;
    this._router.navigate(['/inicio']);
}

}
