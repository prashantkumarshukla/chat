import {Component, OnInit, Inject, OnDestroy, Input} from '@angular/core';
import { HttpServiceService } from "../http-service.service";
import { CookieService } from "ngx-cookie-service";
import { FormBuilder, FormGroup } from "@angular/forms";
import { SocketProviderService } from "../services/socket-provider.service";
import { StateStoreService } from "../services/state-store.service";
import { takeUntil} from 'rxjs/operators';
import {Subject} from 'rxjs/index';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss'],
})

export class UserDetailComponent implements OnInit, OnDestroy {
  /**
   * @Input() userDetail
   */
  @Input() userDetail: any;
  /**
   * messageForm
   */
  public messageForm: FormGroup;
  /**
   * friendInfo
   */
  public friendInfo: any;
  /**
   * typeResponse
   */
  public typeResponse: boolean;
  /**
   * conversations
   */
  public conversations: any =  [];
  /**
   * destroy$
   */
  public destroy$: Subject<boolean> = new Subject<boolean>();

  /**
   * destroyTypeStatus$
   */
  public destroyTypeStatus$: Subject<boolean> = new Subject<boolean>();

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

  /**
   * This method is to send the messages
   * @param MsgForm
   */
  public sendMessage(MsgForm): void {
    const messagePost = {
      'senderId' : this.stateStore.loggedInUser.id,
      'receiverId' : this.friendInfo.id,
      'message' : MsgForm.chatMessage
    };
    this.stateStore.chatDetail[this.friendInfo.id].push({'me': MsgForm.chatMessage});
    this.messageForm.reset();
    this.socketProviderService.sendMessage(messagePost);
    this.getAllMessages();
  }

  /**
   * This method is to build the chat history
   */
  public conversationBuild(chat: any): void {
    if (chat.message) {
      this.stateStore.chatDetail[chat.id].push({'fName': chat.fName, 'message': chat.message});
    }
    this.getAllMessages();
  }

  /**
   * This method is to retrieve the conversations
   */
  public getAllMessages(): void {
    this.conversations = this.stateStore.chatDetail[this.friendInfo.id];
  }

  /**
   * This method is to send typing status
   * @param typingStatus
   */
  public userTyping(typingStatus) : void {
    let userId = this.stateStore.loggedInUser.id;
    let friendId = this.friendInfo.id;
    let sendData = { "userId" : userId, "friendId" : friendId, "typing" : typingStatus };
    this.socketProviderService.typingStatus(sendData);
  }


  ngOnInit() {
    this.friendInfo = this.stateStore.friendDetails;
    if (!this.stateStore.chatDetail[this.friendInfo.id]) {
      this.stateStore.chatDetail[this.friendInfo.id] = [];
    } else {
      this.getAllMessages();
    }
    this.socketProviderService.receiveMessages()
      .pipe(takeUntil(this.destroy$))
      .subscribe((response: []) => {
        this.conversationBuild(response);
      });
    this.socketProviderService.getTypingStatus()
      .pipe(takeUntil(this.destroyTypeStatus$))
      .subscribe((typeReponse: boolean) => {
        this.typeResponse = typeReponse;
      });
  }

  ngOnDestroy() {
    this.destroy$.next(true);
  }
}
