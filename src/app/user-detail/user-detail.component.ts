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

export class UserDetailComponent implements OnInit, OnDestroy {

  messageForm: FormGroup;
  public userInfo : any;
  public conversations : any;
  public typeResponse : any;
  public btnActionData : any;
  private getUserId : any;

  @Input() userDetail : any;

    constructor(
    private formBuilder : FormBuilder,
    private stateStore: StateStoreService,
    public httpService: HttpServiceService,
    private cookieFeatureService: CookieService,
    private socketProviderService: SocketProviderService
  ) {
    this.messageForm = formBuilder.group({
      'chatMessage' : ''
    });
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
/*
  sendMessage(getMsg) : void {
    let messagePost = {
      "toSocketId" : this.userInfo.id,
      "fromSocketId":this.cookieFeatureService.get("user"),
      "fromName" : this.userInfo.name,
      "message" : getMsg.chatMessage
    };
    this.messageForm.reset();
    this.socketProviderService.sendMessage(messagePost);
  }*/

/*
  userTyping(typingStatus) : void {
    let userId = this.getUserId;
    let friendId = this.userInfo.friendId;
    let sendData = { "userId" : userId, "friendId" : friendId, "typing" : typingStatus };
    this.socketProviderService.typingStatus(sendData);
  }
*/

  ngOnInit() {
    this.userInfo = this.stateStore.userInfo;
    console.log("Data from parent", this.userInfo);
    this.getUserId = this.cookieFeatureService.get("user");
  }

  ngOnDestroy(){}

}
