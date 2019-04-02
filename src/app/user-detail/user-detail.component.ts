import {Component, OnInit, Inject, OnDestroy, Input} from '@angular/core';
import { HttpServiceService } from "../http-service.service";
import { CookieService } from "ngx-cookie-service";
import { FormBuilder, FormGroup } from "@angular/forms";
import { SocketProviderService } from "../services/socket-provider.service";
import { StateStoreService } from "../services/state-store.service";
import {takeUntil} from 'rxjs/operators';
import {Subject} from 'rxjs/index';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss'],
})

export class UserDetailComponent implements OnInit, OnDestroy {

  messageForm: FormGroup;
  public friendInfo: any;
  public typeResponse: any;
  public btnActionData: any;
  public conversations: any =  [];
  public messageArray: any =  [];
  destroy$: Subject<boolean> = new Subject<boolean>();

  @Input() userDetail: any;

    constructor(
    private formBuilder: FormBuilder,
    private stateStore: StateStoreService,
    private cookieFeatureService: CookieService,
    private socketProviderService: SocketProviderService
  ) {
    this.messageForm = formBuilder.group({
      'chatMessage' : ''
    });
  }


  public sendMessage(MsgForm): void {
    const messagePost = {
      'senderId' : this.stateStore.loggedInUser.id,
      'receiverId' : this.friendInfo.id,
      'message' : MsgForm.chatMessage
    };
    this.messageForm.reset();
    this.socketProviderService.sendMessage(messagePost);
    this.socketProviderService.serverInteraction()
      .pipe(takeUntil(this.destroy$))
      .subscribe(response => {
        const message: any = {'me' : messagePost.message, 'friend' : response };
        this.messageArray.push(message);
        this.conversations = {'conversations' : this.messageArray};
      });
  }

/*
  userTyping(typingStatus) : void
  {
    let userId = this.getUserId;
    let friendId = this.userInfo.friendId;
    let sendData = { "userId" : userId, "friendId" : friendId, "typing" : typingStatus };
    this.socketProviderService.typingStatus(sendData);
  }
*/

  ngOnInit() {
    this.friendInfo = this.stateStore.friendDetails;
    let friendDetails = this.friendInfo;
    this.socketProviderService.newDataSource.subscribe((data) => {
      this.conversations = data;
      let messages = this.conversations.filter((userInfo) => {
        return friendDetails._id === userInfo._id;
      });
      this.conversations.conversations = messages;
    });
  }

  ngOnDestroy() {
    this.destroy$.next(true);
  }
}
