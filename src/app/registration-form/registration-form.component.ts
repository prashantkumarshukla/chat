import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef } from "@angular/material";
import { MAT_DIALOG_DATA } from "@angular/material";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MatGridList } from "@angular/material";
import { CreateUserService } from "../login-panel/create-user.service" ;

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.scss'],
  providers : [CreateUserService, MatGridList]
})
export class RegistrationFormComponent implements OnInit {

  rForm: FormGroup;
  public userNameAlert:string = 'User ID cannot be empty';
  public fNameAlert:string = 'First name cannot be empty';
  public emailAlert:string = 'Email cannot be empty';
  public pwdAlert:string = 'Password cannot be empty';
  public genderAlert:string = 'Please chooose the gender';
  public statusResponse: any;
  public getResponse: any;
  public responseInfo : any;

  constructor( public thisDialogRef : MatDialogRef<RegistrationFormComponent>,
               @Inject(MAT_DIALOG_DATA) public data : string,
               private formBuilder : FormBuilder,
               private createUserService : CreateUserService) {

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

  ngOnInit() {
  }

  closeConfirm() :void {
    this.thisDialogRef.close("Closed");
  }

  registerUser(post) : void {

    var dob = post.month + "/" + post.day + "/" + post.year;

    post.birthday = dob;
    post.id=new Date().valueOf();
    post.type = "normal";

    delete post['month'];
    delete post['day'];
    delete post['year'];
    delete post['validate'];

    //console.log('you submitted value:', post);

    this.createUserService.createUser(post).subscribe(res => this.getResponse = res );
    //console.log("Response", this.getResponse);
    this.statusResponse = this.getResponse.status;
    this.responseInfo = this.getResponse.info;
  }

}
