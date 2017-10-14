import { Component, OnInit } from '@angular/core';
import { MdTabGroup } from "@angular/material";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MdDialog } from "@angular/material";
import { UserDetailComponent } from "../user-detail/user-detail.component";
import { HttpServiceService } from "../http-service.service";
import {resolve} from "url";
import {reject} from "q";
import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'app-search-user',
  templateUrl: './search-user.component.html',
  styleUrls: ['./search-user.component.scss'],
  providers: [MdTabGroup]
})
export class SearchUserComponent implements OnInit {

  searchform : FormGroup;
  public searchResponse: any;

  constructor(
    private formBuilder : FormBuilder,
    private httpService : HttpServiceService,
    public dialog: MdDialog
  ) {

    this.searchform = formBuilder.group({
      'searchField' : ''
    });
  }

  searchUser(searchString) : void {

    console.log("Search String: ", searchString);

    let serchResult = new Promise((resolve, reject) => {
      this.httpService.searchUser(searchString).toPromise().then(
        res => {

          this.searchResponse = res.results;
          //console.log("Login status", this.statusResponse);
        }
      )
    });
  }

  userDetailOpenDialog(userInfo) {
    console.log("User Detail", userInfo);
    let dialogRef = this.dialog.open(UserDetailComponent, {
      width: '87%',
      data: userInfo
    });
  }

  ngOnInit() {
  }

}
