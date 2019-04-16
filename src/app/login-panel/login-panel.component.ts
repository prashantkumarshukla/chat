import {Component, OnDestroy, OnInit} from '@angular/core';
import { MatTabGroup } from "@angular/material";
import { MatTab } from "@angular/material";

import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { CreateUserService } from "../login-panel/create-user.service" ;
import { Router } from "@angular/router";
import { CookieService } from "ngx-cookie-service";
import { SocketProviderService } from "../services/socket-provider.service";
import {Subscription} from "rxjs";
import {Subject} from "rxjs";
import {takeUntil} from "rxjs/operators";
import { StateStoreService} from '../services/state-store.service';

@Component({
  selector: 'app-login-panel',
  templateUrl: './login-panel.component.html',
  styleUrls: ['./login-panel.component.scss'],
  providers :[
    CreateUserService,
    MatTabGroup,
    MatTab
  ]
})
export class LoginPanelComponent implements OnInit, OnDestroy {

  rForm: FormGroup;
  loginform : FormGroup;
  public userNameAlert:string = 'User ID cannot be empty';
  public fNameAlert:string = 'First name cannot be empty';
  public emailAlert:string = 'Email cannot be empty';
  public pwdAlert:string = 'Password cannot be empty';
  public genderAlert:string = 'Please chooose the gender';
  public statusResponse: any;
  public response : any;
  private loginSubscription: Subscription;
  unsubscribe$: Subject<boolean> = new Subject<boolean>();

  constructor(
    private formBuilder: FormBuilder,
    private loginFormBuilder: FormBuilder,
    private createUserService: CreateUserService,
    private router: Router,
    private cookieFeatureService: CookieService,
    private socketProviderService: SocketProviderService,
    private stateStoreService: StateStoreService
  ) {

    //login form initiate
    this.loginform = loginFormBuilder.group({
      'userName' :[null, Validators.required],
      'userPassword' :[null, Validators.required]
    });

    //Registration Form initiate
    this.rForm = formBuilder.group({
      'fName': [null, Validators.required],
      'lName': [null, Validators.required],
      'email': [null, Validators.required],
      'userPwd': [null, Validators.required],
      'month' : [null, Validators.required],
      'day' : [null, Validators.required],
      'year' : [null, Validators.required],
      'gender' : [null, Validators.required],
      'validate' : ''
    });
  }

  uerLogin(data) : void {
      this.socketProviderService.userLogin(data);
  }

  ngOnInit() {
    this.loginSubscription = this.socketProviderService.getLoginStatus()
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(status => {
        this.statusResponse = status;
        if (this.statusResponse.success) {
          this.cookieFeatureService.set('user', this.statusResponse.id);
          console.log("Logged in user details: ", this.statusResponse);
          this.stateStoreService.setLoggedInUserDetails(this.statusResponse);
          this.router.navigate(['/chat']);
        }
    });
  }

 ngOnDestroy() {
   this.unsubscribe$.next(true);
 }
}
