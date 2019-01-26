import {Component, OnDestroy, OnInit} from '@angular/core';
import { MatTabGroup } from "@angular/material";
import { MatTab } from "@angular/material";
import { ModalService } from "../modal/modal.service";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { FacebookService, LoginResponse, InitParams } from "ngx-facebook";
import { CreateUserService } from "../login-panel/create-user.service" ;
import { RegistrationFormComponent } from "../registration-form/registration-form.component";
import { Router } from "@angular/router";
import { MatDialog } from "@angular/material";
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
export class LoginPanelComponent implements OnInit {

  modalId = 'hoplaModal';
  dialogResult = "";

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
    public modalService: ModalService,
    private fb: FacebookService,
    private formBuilder: FormBuilder,
    private loginFormBuilder: FormBuilder,
    private createUserService: CreateUserService,
    private router: Router,
    public dialog: MatDialog,
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

    //Facebook initiate
    let initParams: InitParams = {
      appId: '828011440700346',
      xfbml: true,
      version: 'v2.8'
    };

    fb.init(initParams);

  }

  login() {
    this.fb.login()
      .then((res: LoginResponse) => {
        console.log('Logged in', res);
        this.getProfile();
        this.getFriends();
      })
      .catch(this.handleError);
  }

  getLoginStatus() {
    this.fb.getLoginStatus()
      .then(console.log.bind(console))
      .catch(console.error.bind(console));
  }

  getProfile() {
    this.fb.api('/me')
      .then((res: any) => {
        console.log('Got the users profile', res);
      })
      .catch(this.handleError);
  }

  getFriends() {
    this.fb.api('/me/friends')
      .then((res: any) => {
        console.log('Got the users friends', res);
      })
      .catch(this.handleError);
  }

  private handleError(error) {
    console.error('Error processing action', error);
  }

  registerUser(post) : void {
    var dob = post.month + "/" + post.day + "/" + post.year;
    post.birthday = dob;
    post.id=new Date().valueOf().toString();
    post.type = "normal";
    delete post['month'];
    delete post['day'];
    delete post['year'];
    delete post['validate'];
    this.createUserService.createUser(post).subscribe(res => this.statusResponse = res );
  }

  uerLogin(data) : void {
      this.socketProviderService.userLogin(data);
  }

  openDialog() {
    let dialogRef = this.dialog.open(RegistrationFormComponent,{
      width: '87%',
      data : 'This text is passed into the dialog'
    });
    dialogRef.afterClosed().subscribe(result =>{
      console.log(`Dialog closed: ${result}`);
      this.dialogResult = result;
    });
  }

  ngOnInit() {
    this.loginSubscription = this.socketProviderService.serverInteraction()
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(status => {
        console.log('Status is:', status);
        this.statusResponse = status;
        if (this.statusResponse.success) {
          this.cookieFeatureService.set('user', this.statusResponse.id);
          this.stateStoreService.loggedInUser = this.statusResponse;
          this.router.navigate(['/chat']);
        }
    });
  }
 /* ngOnDestroy() {
    this.unsubscribe$.next(true);
    this.loginSubscription.unsubscribe();
  }*/
}
