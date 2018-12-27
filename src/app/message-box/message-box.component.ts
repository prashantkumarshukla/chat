import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {HttpServiceService} from "../http-service.service";
import { CookieService } from "ngx-cookie-service";
import {MatTab} from "@angular/material";
import {MatTabGroup} from "@angular/material";
import {SocketProviderService} from "../services/socket-provider.service";

@Component({
  selector: 'app-message-box',
  templateUrl: './message-box.component.html',
  styleUrls: ['./message-box.component.scss'],
  providers: [
    HttpServiceService,
    MatTabGroup,
    MatTab]
})
export class MessageBoxComponent implements OnInit {

  searchform: FormGroup;
  public chatDetail: any;
  public getServerResponse: any;
  public searchBegin: boolean;
  constructor(private formBuilder: FormBuilder,
              private httpService: HttpServiceService,
              private cookieFeatureService : CookieService,
              private socketProviderService: SocketProviderService) {

    this.searchform = formBuilder.group({
      'searchField': ''
    });
  }

  getFriendList() : void {
    let userId = this.cookieFeatureService.get("user");
    this.socketProviderService.getFriendList(userId);
  }

  ngOnInit() {
    this.socketProviderService.serverInteraction().subscribe(chats => {
      this.getServerResponse = chats;
      console.log("Response", this.getServerResponse);
      let getUserId = this.getServerResponse.userId;
      if(getUserId) {
        let buildChat = {
          "userDetail": this.getServerResponse.userInfo,
          "isFriend": this.getServerResponse.isFriend,
          "isOnline": this.getServerResponse.isOnline,
          "conversations": {
            "message": this.getServerResponse.message,
            "requestType": this.getServerResponse.requestType
          }
        };
        if (!this.chatDetail) {
          this.chatDetail = [{
            "userId": getUserId,
            "isFriend": this.getServerResponse.isFriend,
            "isOnline": this.getServerResponse.isOnline,
            "detail": [buildChat.conversations],
            "userInfo": buildChat.userDetail
          }];
        }
        else {
          let getStatus = false;
          for (let i = 0; i < this.chatDetail.length; i++) {
            if (getUserId == this.chatDetail[i].userId) {
              this.chatDetail[i].detail.push(buildChat.conversations);
              getStatus = true;
              break;
            }
          }
          if (!getStatus) {
            let buildData = {
              "userId": getUserId,
              "isFriend": this.getServerResponse.isFriend,
              "isOnline": this.getServerResponse.isOnline,
              "detail": [buildChat.conversations],
              "userInfo": buildChat.userDetail
            };
            this.chatDetail.push(buildData);
          }
        }
        this.socketProviderService.updateData({"conversations": this.chatDetail});
      }
      if(this.getServerResponse.typingMsg){
        this.socketProviderService.updateTypingStatus(this.getServerResponse);
      }
    });
  }
}
