import {Component, OnInit, Inject, OnDestroy, Input} from '@angular/core';
import { HttpServiceService } from "../http-service.service";
import { CookieService } from "ngx-cookie-service";
import { FormBuilder, FormGroup } from "@angular/forms";
import { SocketProviderService } from "../services/socket-provider.service";
import { StateStoreService } from "../services/state-store.service";

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
  public data : any;
  public friendId : any;
  public isFriend : any;
  public friendStatus : any;
  public isOnline : any;
  public conversations : any;
  public typeResponse : any;
  public btnActionData : any;
  private getUserId : any;

  @Input() userDetail : any;

  constructor(
    private formBuilder : FormBuilder,
    private stateStore: StateStoreService,
    public httpService: HttpServiceService,
    private cookieFeatureService : CookieService,
    private socketProviderService : SocketProviderService
  ) {
    this.messageForm = formBuilder.group({
      'chatMessage' : ''
    });
  }
  closeConfirm() :void {
    //this.thisDialogRef.close("Closed");
  }

  /*confirmRequest(friendId,action) : void {

    let post = {"friendId" : friendId,"userId":this.cookieFeatureService.get("user"),"action" : action};

    let sendRequest = new Promise((resolve, reject) => {

      this.httpService.requestAction(post).toPromise().then(

        res => {

          this.isFriend = res.status;

          console.log("Response:", res);

        }

      );

    });

  }*/

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

  userTyping(typingStatus) : void {
    let userId = this.getUserId;
    let friendId = this.data.friendId;
    let sendData = { "userId" : userId, "friendId" : friendId, "typing" : typingStatus };
    this.socketProviderService.typingStatus(sendData);
  }

  ngOnInit() {
    this.data = this.stateStore.userInfo;
    console.log("Data from parent", this.data);
    this.getUserId = this.cookieFeatureService.get("user");
    this.friendStatus = this.data.isFriend;
    this.isOnline = this.data.isOnline;
    this.btnActionData = {
      'friendId' : this.data.friendId,
      'isFriend' : this.friendStatus
    };
    this.socketProviderService.newDataSource.subscribe(message => {
      let getMessages = message.conversations;
      let getId = this.data.friendId;
      if(getMessages) {
        for (var i = 0; i < getMessages.length; i++) {
          if (getId == getMessages[i].userId) {
            this.conversations = getMessages[i].detail;
            this.friendStatus = getMessages[i].isFriend;
            this.isOnline = getMessages[i].isOnline;
            console.log("Conversations", this.conversations);
            break;
          }
        }
        console.log("Message:", message);
      }
    });
    this.socketProviderService.typingDataSource.subscribe(typing => {
      if(typing.friendId == this.data.friendId) {
        this.typeResponse = typing.typingMsg;
      }
    });
  }

  ngOnDestroy(){}

}
