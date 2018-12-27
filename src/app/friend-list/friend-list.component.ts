import { Component, OnInit, Input } from '@angular/core';
import { MatTabGroup } from "@angular/material";
import { HttpServiceService } from "../http-service.service";
import { UserDetailComponent } from "../user-detail/user-detail.component";
import { MatDialog } from "@angular/material";
import { CookieService } from "ngx-cookie-service";
import { SocketProviderService } from "../services/socket-provider.service";

@Component({
  selector: 'app-friend-list',
  templateUrl: './friend-list.component.html',
  styleUrls: ['./friend-list.component.scss'],
  providers: [MatTabGroup, HttpServiceService]
})
export class FriendListComponent implements OnInit {

  @Input() getMessage : any;

  constructor(

    private httpService : HttpServiceService,

    private cookieFeatureService : CookieService,

    private socketProviderService: SocketProviderService,

    public dialog: MatDialog

  ) { }



  public userId : any;

  public friendList : any;

  public getResponse : any;

  public checkResponse : any;

  retrieveFriendList() : void {

    this.userId = {"userId" :this.cookieFeatureService.get("user")};

    let newList = new Promise((resolve, reject) => {

      this.httpService.friendList(this.userId).subscribe(

        res => {

          //this.friendList = res.friendList;

          console.log("Friend List:", this.friendList);

        }

      );

    });

  }

  getFriendList() : void {

    let userId = this.cookieFeatureService.get("user");

    this.socketProviderService.getFriendList(userId);

  }

  userDetailOpenDialog(userInfo) : void {

    console.log("User Detail", userInfo);

    //let allDetails = {"chat" : this.getMessage,"userDetail" : userInfo}

    let dialogRef = this.dialog.open(UserDetailComponent, {

      width: '87%',

      data: userInfo

    });

  }

  ngOnInit() {

    //this.retrieveFriendList();

    this.getFriendList();

    this.socketProviderService.serverInteraction().subscribe(list => {

      this.checkResponse = list;

      if(this.checkResponse.friends){

        this.getResponse = this.checkResponse.friends;

        console.log("Friend List", this.getResponse);

      }

    });

  }
}
