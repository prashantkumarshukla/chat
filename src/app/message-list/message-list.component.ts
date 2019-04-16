import {Component, OnDestroy, OnInit} from '@angular/core';
import { SocketProviderService} from "../services/socket-provider.service";
import { StateStoreService } from "../services/state-store.service";
import { GetUserProfileService } from "../services/get-user-profile.service";
import { LoadMessageService } from "../services/load-message.service";
import { Router} from '@angular/router';
import {takeUntil} from "rxjs/operators";
import {Subject} from "rxjs";

@Component({
  selector: 'app-message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.scss']
})
export class MessageListComponent implements OnInit, OnDestroy {
  /**
   * getUserList
   */
  public getUserList: any = [];
  /**
   * destroyRecentMsg$
   */
  public destroyRecentMsg$: Subject<boolean> = new Subject<boolean>();
  /**
   * destroyProfile$
   */
  public destroyProfile$: Subject<boolean> = new Subject<boolean>();
  /**
   * limitTo
   */
  public limit: number;

  /**
   * myUserId
   */
  public myUserId: string;
  /**
   * destoryUnreadMsg$
   */
  public destoryUnreadMsg$: Subject<boolean> = new Subject<boolean>();
  /**
   * destroyLatestMsg$
   */
  public destroyLatestMsg$: Subject<boolean> = new Subject<boolean>();
  /**
   * routeConfirm
   */
  public routeConfirm: boolean = false;
  /**
   * Constructor
   * @param socketProviderService
   * @param stateStoreService
   * @param router
   */

  constructor(
    private socketProviderService : SocketProviderService,
    private stateStoreService: StateStoreService,
    private getUserProfileService: GetUserProfileService,
    private loadMessageService: LoadMessageService,
    public router: Router
  ) {
    this.limit = 100
  }

  /**
   * This method is to return the read unread status
   * @param item
   */
  private unReadStatus(item) {
    let status = false;
    if (item.chatItem.sentBy !== this.myUserId && item.chatItem.unread) {
      status = true;
    }
    return status;
  }
  /**
   * This method is to navigate the user detail page
   * @param friend
   */
  public userDetailOpenDialog(detail: any) {
    this.stateStoreService.setFriendId(detail.userDetail.id);
    this.stateStoreService.updateReadStatus(detail.chatItem.chatReferenceId);
    this.routeConfirm = true;
  }
  public route(): void {
    if (this.routeConfirm) {
      this.router.navigate(['/user']);
    }
  }
  /**
   * This method is to get all messages
   */
  public updateChatList(): void {
    this.getUserList = [];
    let getUsers = this.stateStoreService.getConversationsId();
    let buildConversation = [];
    getUsers.forEach((id) => {
      let chats = this.stateStoreService.getChatConversations(id);
      buildConversation.push(chats[chats.length-1]);
    });
    buildConversation.forEach((chatItem) => {
      let getId = (chatItem.sentBy === this.myUserId) ? chatItem.sentTo : chatItem.sentBy;
      let userDetail = this.getUserProfileService.getProfile(getId);
      if (userDetail) {
        let buildChatWithProfile = {userDetail, chatItem};
        this.getUserList.push(buildChatWithProfile);
      }
    });
  }
  ngOnInit() {
    this.myUserId = this.stateStoreService.loggedInUserId();
    this.stateStoreService.newChatArrived.pipe(takeUntil(this.destroyRecentMsg$)).subscribe((response) => {
      this.updateChatList();
    });
    this.getUserProfileService.newProfile.pipe(takeUntil(this.destroyProfile$)).subscribe(() => {
      this.updateChatList();
    });
    this.stateStoreService.msgStatusChange.pipe(takeUntil(this.destoryUnreadMsg$)).subscribe(() => {
      this.route();
    });
    this.loadMessageService.latestMessageArived.pipe(takeUntil(this.destroyLatestMsg$)).subscribe(() => {
      this.updateChatList();
    });
    this.socketProviderService.reqLatestMsgs(this.myUserId);
    this.updateChatList();
  }
  ngOnDestroy(): void {
    this.destroyRecentMsg$.next(false);
    this.destroyProfile$.next(false);
    this.destoryUnreadMsg$.next(false);
    this.destroyLatestMsg$.next(false);
  }
}
