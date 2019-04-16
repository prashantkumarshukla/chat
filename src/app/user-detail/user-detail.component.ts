import {Component, OnInit, Inject, OnDestroy, Input} from '@angular/core';
import {CookieService} from "ngx-cookie-service";
import {FormBuilder, FormGroup} from "@angular/forms";
import {SocketProviderService} from "../services/socket-provider.service";
import {StateStoreService} from "../services/state-store.service";
import { GetUserProfileService } from "../services/get-user-profile.service";
import {takeUntil} from 'rxjs/operators';
import {Subject} from 'rxjs/index';
import {FriendDetails} from "../interfaces/friend-details.interface";

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
   * myUserId
   */
  public myUserId: string;
  /**
   * friendId
   */
  public friendId: string;
  /**
   * friendInfo
   */
  private friendInfo: FriendDetails;
  /**
   * chatReferenceId
   */
  private chatReferenceId: string;
  /**
   * messageForm
   */
  public messageForm: FormGroup;
  /**
   * typeResponse
   */
  public typeResponse: boolean;
  /**
   * conversations
   */
  public conversations: any = [];
  /**
   * destroy$
   */
  public destroy$: Subject<boolean> = new Subject<boolean>();
  /**
   * destroyTypeStatus$
   */
  public destroyTypeStatus$: Subject<boolean> = new Subject<boolean>();
  /**
   * destoryProfile$
   */
  public destoryProfile$: Subject<boolean> = new Subject<boolean>();

  /**
   * Constructor method
   * @param formBuilder
   * @param stateStore
   * @param cookieFeatureService
   * @param socketProviderService
   */
  constructor(
    private formBuilder: FormBuilder,
    private stateStore: StateStoreService,
    private cookieFeatureService: CookieService,
    private socketProviderService: SocketProviderService,
    private getUserProfileService: GetUserProfileService,
  ) {
    this.messageForm = formBuilder.group({
      'chatMessage': ''
    });
  }

  /**
   * This method is to send the messages
   * @param MsgForm
   */
  public sendMessage(MsgForm): void {
    const messagePost = {
      'sentBy': this.stateStore.loggedInUserId(),
      'sentTo': this.stateStore.getFriendId(),
      'message': MsgForm.chatMessage,
      'messageId': this.stateStore.uniqueNumber(),
      'chatReferenceId': this.chatReferenceId,
      'unread': true
    };
    this.socketProviderService.sendMessage(messagePost);
    this.messageForm.reset();
  }
  /**
   * This method is to retrieve the conversations
   */
  public getAllMessages(): void {
    this.conversations = this.stateStore.getChatConversations(this.chatReferenceId);
    console.log("Conversations: ", this.conversations);
  }

  /**
   * This method is to retrieve the user profile
   */
  public getProfileDetail(): void {
    if (this.getUserProfileService.getProfile(this.friendId)) {
      this.friendInfo = this.getUserProfileService.getProfile(this.friendId);
      this.chatReferenceId = this.friendInfo.chatReferenceId;
      this.getAllMessages();
    }
  }
  /**
   * This method is to send typing status
   * @param typingStatus
   */
  public userTyping(typingStatus): void {
    let userId = this.stateStore.loggedInUserId();
    let sendData = {"userId": userId, "friendId": this.stateStore.getFriendId(), "typing": typingStatus};
    this.socketProviderService.typingStatus(sendData);
  }

  /**
   * This method is to return the user online status
   */
  public isOnline(): boolean {
    let status = false;
    if (this.friendInfo && this.friendInfo.isOnline) {
      status = true;
    }
    return status;
  }

  ngOnInit() {
    this.friendId = this.stateStore.getFriendId();
    this.myUserId = this.stateStore.loggedInUserId();
    this.stateStore.newChatArrived.pipe(takeUntil(this.destroy$)).subscribe(() => {
      this.getAllMessages();
    });
    this.socketProviderService.getTypingStatus().pipe(takeUntil(this.destroyTypeStatus$))
      .subscribe((typeResponse: boolean) => {
        this.typeResponse = typeResponse;
      });
    this.getUserProfileService.newProfile.pipe(takeUntil(this.destoryProfile$)).subscribe(() => {
      this.getProfileDetail();
    });
    this.getProfileDetail();
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroyTypeStatus$.next(false);
    this.destoryProfile$.next(false);
  }
}
