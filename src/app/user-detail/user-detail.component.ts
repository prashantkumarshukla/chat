import { Component, OnInit, Inject, OnDestroy } from '@angular/core';
import { MdDialogRef } from "@angular/material";
import { MD_DIALOG_DATA } from "@angular/material";
import { HttpServiceService } from "../http-service.service";
import { CookieService } from "ngx-cookie-service";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { SocketProviderService } from "../services/socket-provider.service";
import { Subscription } from "rxjs/Subscription";
import {resolve} from "url";
import {reject} from "q";
import 'rxjs/add/operator/toPromise';
import {noUndefined} from "@angular/compiler/src/util";

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss'],
  providers : [
    HttpServiceService
  ]
})

export class UserDetailComponent implements OnInit,OnDestroy {

  messageForm: FormGroup;


  constructor(

    private formBuilder : FormBuilder,

    public thisDialogRef : MdDialogRef<UserDetailComponent>,

    @Inject(MD_DIALOG_DATA) public data : any,

    public httpService: HttpServiceService,

    private cookieFeatureService : CookieService,

    private socketProviderService : SocketProviderService

  ) {

    this.messageForm = formBuilder.group({

      'chatMessage' : ''

    });
  }

  public loginId : any;
  public friendId : any;
  public isFriend : any;
  public conversations : any;
  public getMessage: Subscription;

  closeConfirm() :void {

    this.thisDialogRef.close("Closed");

  }

  sendFriendRequest(friendId) : void {

    let post = {"friendId" : friendId,"userId":this.loginId};

    let sendRequest = new Promise((resolve, reject) => {

      this.httpService.friendRequest(post).toPromise().then(
        res => {
          this.isFriend = res.status;
          console.log("Response:", res);

        }
      );
    });

  }

  confirmRequest(friendId,action) : void {

    let post = {"friendId" : friendId,"userId":this.loginId,"action" : action};

    let sendRequest = new Promise((resolve, reject) => {

      this.httpService.requestAction(post).toPromise().then(

        res => {

          this.isFriend = res.status;

          console.log("Response:", res);

        }

      );

    });

  }

  sendMessage(getMsg) : void {

    let messagePost = {

      "toSocketId" : this.data.friendId,
      "fromSocketId":this.cookieFeatureService.get("user"),
      "fromName" : this.data.name,
      "message" : getMsg.chatMessage

    };

    this.messageForm.reset();

    this.socketProviderService.sendMessage(messagePost);

  }

  ngOnInit() {

    console.log("Data from parent", this.data);

    this.socketProviderService.newDataSource.subscribe(message => {

      //this.data = message;

      let getMessages = message.conversations;

      let getId = this.data.friendId;

      if(getMessages) {

        for (var i = 0; i < getMessages.length; i++) {

          if (getId == getMessages[i].userId) {

            this.conversations = getMessages[i].detail;

            console.log("Conversations", this.conversations);

            break;

          }

        }

        //this.conversations = message;

        console.log("Message:", message);
      }

    })

  }

  ngOnDestroy(){}

}
