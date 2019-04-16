import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import { CookieService } from "ngx-cookie-service";
import { SocketProviderService } from "../services/socket-provider.service";
import {takeUntil} from "rxjs/operators";
import {Subject} from "rxjs";
import { StateStoreService } from "../services/state-store.service";
import { Router } from "@angular/router";



@Component({
  selector: 'app-friend-request-list',
  templateUrl: './friend-request-list.component.html',
  styleUrls: ['./friend-request-list.component.scss'],
  providers: []
})
export class FriendRequestListComponent implements OnInit, OnDestroy{

  constructor(private socketProviderService: SocketProviderService,
              private cookieService: CookieService,
              private stateStoreService: StateStoreService,
              private router: Router
  ) { }

  /**
   * friendRequest
   */
  private friendRequest: any;
  /**
   * userId
   */
  private userId: string;
  /**
   * destroy$
   */
  private destroy$: Subject<boolean> = new Subject<boolean>();
  /**
   * showSpinner
   */
  private showSpinner: boolean = false;

  /**
   * This method is to retrieve the friend list
   */
  private retrieveFriendList(): void {
    this.socketProviderService.getNotificationList(this.userId);
  }

  /**
   * This method is to set the friend id and route the user detail page
   * @param friend
   */
  private userDetailOpenDialog(friend: any) {
    this.stateStoreService.setFriendId(friend.id);
    this.router.navigate(['/user']);
  }
  ngOnInit(): void {
    this.userId = this.stateStoreService.loggedInUserId();
    this.retrieveFriendList();
    this.socketProviderService.retrieveFriendNotification()
      .pipe(takeUntil(this.destroy$))
      .subscribe(searchList => {
        this.friendRequest = searchList;
        console.log('Search list is: ' + JSON.stringify(this.friendRequest));
      });
  }
  ngOnDestroy() {
    this.destroy$.next(true);
  }
}
