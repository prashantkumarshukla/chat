import { Component, OnInit, OnChanges } from '@angular/core';
import { UserDetailComponent } from "../user-detail/user-detail.component";
import { HttpServiceService } from "../http-service.service";
import { MdDialog } from "@angular/material";
import {resolve} from "url";
import {reject} from "q";
import 'rxjs/add/operator/toPromise';
import { CookieService } from "ngx-cookie-service";



@Component({
  selector: 'app-friend-request-list',
  templateUrl: './friend-request-list.component.html',
  styleUrls: ['./friend-request-list.component.scss'],
  providers :[]
})
export class FriendRequestListComponent implements OnInit {

  constructor(

    private httpService : HttpServiceService,
    private cookieFeatureService : CookieService,
    public dialog: MdDialog

  ) { }

  public friendRequest : any;

  public userId : any;

  public conitinue : boolean;

  retrieveFriendList() : void {

    this.userId = {"userId" :this.cookieFeatureService.get("user")};

    let newList = new Promise((resolve, reject) => {

      this.httpService.newRequestList(this.userId).toPromise().then(

        res => {

          this.friendRequest = res.requestList;

          this.conitinue = true;

          console.log("Friend List:", this.friendRequest);

        }

      );

    });

  }

  userDetailOpenDialog(userInfo): void {
    console.log("User Detail", userInfo);
    let dialogRef = this.dialog.open(UserDetailComponent, {
      width: '87%',
      data: userInfo
    });
  }

  ngOnInit() {
    this.conitinue = false;
    this.retrieveFriendList();
  }

  ngOnChanges() {

    if( this.conitinue == false ){

      this.retrieveFriendList();

    }

  }

}
