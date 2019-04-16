import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { MatTabGroup } from "@angular/material";
import { HttpServiceService } from "../http-service.service";
import { CookieService } from "ngx-cookie-service";
import { SocketProviderService } from "../services/socket-provider.service";
import {takeUntil} from "rxjs/operators";
import {Subject} from "rxjs";
import { Router} from '@angular/router';
import { StateStoreService } from "../services/state-store.service";
import { FriendListService } from "../services/friend-list.service";


@Component({
  selector: 'app-friend-list',
  templateUrl: './friend-list.component.html',
  styleUrls: ['./friend-list.component.scss'],
  providers: [MatTabGroup, HttpServiceService]
})
export class FriendListComponent implements OnInit, OnDestroy {
  /**
   * friendList
   */
  public friendList: any = [];
  /**
   * destroy$
   */
  public destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(
    private cookieService: CookieService,
    private socketProviderService: SocketProviderService,
    private router: Router,
    private stateStoreService: StateStoreService,
    private friendListService: FriendListService
  ) { }

  /**
   * This method is to pull the friend list
   */
  public pullFriendList(): void {
    this.friendList = this.friendListService.getMyFriendList();
  }
  /**
   * This method is to navigate the user detail page
   * @param friend
   */
  public userDetailOpenDialog(friend: any) {
    this.stateStoreService.setFriendId(friend.id);
    let getProfileInfo = {userId: this.stateStoreService.loggedInUserId(), friendId: friend.id};
    this.socketProviderService.reqUserProfile(getProfileInfo);
    this.router.navigate(['/user']);
  }
  ngOnInit() {
    this.friendListService.newFriend
      .pipe(takeUntil(this.destroy$))
      .subscribe((friendList) => {
        this.pullFriendList();
      });
  }

  ngOnDestroy() {
    this.destroy$.next(true );
  }
}
