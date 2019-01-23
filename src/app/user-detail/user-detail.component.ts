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
  public userInfo: any;
  public conversations: any;
  public typeResponse: any;
  public btnActionData: any;
  public messages: any =  [];
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


  sendMessage(MsgForm): void {
    const messagePost = {
      'senderId' : this.cookieFeatureService.get('user'),
      'receiverId' : this.userInfo.id,
      'message' : MsgForm.chatMessage
    };
    this.messageForm.reset();
    this.socketProviderService.sendMessage(messagePost);
    this.socketProviderService.serverInteraction()
      .pipe(takeUntil(this.destroy$))
      .subscribe(response => {
        const message: any = {'me' : messagePost.message, 'friend' : response };
        let messageArray, friendArray: any =  [];
        messageArray.push(message);
        const receiverId: string = this.userInfo.id;
        const a: any = {receiverId : messageArray};
        friendArray.push(a);
        this.messages = {'messages' : friendArray};
      });
  }

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
  }

  ngOnDestroy() {
    this.destroy$.next(true);
  }
}
