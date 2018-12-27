import { Component, OnInit } from '@angular/core';
import { UserDetailComponent } from "../user-detail/user-detail.component";
import { MatDialog } from "@angular/material";
import { SocketProviderService} from "../services/socket-provider.service";

@Component({
  selector: 'app-message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.scss']
})
export class MessageListComponent implements OnInit {

  constructor(

    private socketProviderService : SocketProviderService,

    public dialog: MatDialog

    ) { }

  public getUserList : any;

  userDetailOpenDialog(userInfo) : void {

    let dialogRef = this.dialog.open(UserDetailComponent, {

      width: '87%',

      data: userInfo

    });

  }

  ngOnInit() {

    this.socketProviderService.newDataSource.subscribe(message => {

      let getMessages = message.conversations;

      let buildList = [];

      if(getMessages) {

        for (let i = 0; i < getMessages.length; i++) {

          if (getMessages[i].userId) {

            let conversationLength = getMessages[i].detail.length - 1;

            let lastConversation = getMessages[i].detail[conversationLength];

            let userDetail = {

              "name": getMessages[i].userInfo.userName,
              "friendId": getMessages[i].userId,
              "latestConversation" : lastConversation

            };

            buildList.push(userDetail);

          }

        }

        this.getUserList = buildList;

        console.log("Get Messages", getMessages);

        console.log("User list", this.getUserList);
      }

    });

  }

}
