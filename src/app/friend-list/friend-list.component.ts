import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { MatTabGroup } from "@angular/material";
import { HttpServiceService } from "../http-service.service";
import { CookieService } from "ngx-cookie-service";
import { SocketProviderService } from "../services/socket-provider.service";
import {takeUntil} from "rxjs/operators";
import {Subject} from "rxjs";
import { Router} from '@angular/router';
import { StateStoreService } from "../services/state-store.service";


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
  public friendList: any;
  /**
   * destroy$
   */
  public destroy$: Subject<boolean> = new Subject<boolean>();
  /**
   * showSpinner
   */
  private showSpinner: boolean;

  constructor(
    private cookieService: CookieService,
    private socketProviderService: SocketProviderService,
    private router: Router,
    private stateStoreService: StateStoreService
  ) { }

  /**
   * This method is to retrieve the friend list
   */
  public retrieveFriendList(): void {
    this.showSpinner = true;
    this.socketProviderService.getFriendList(this.stateStoreService.loggedInUser.id);
    this.socketProviderService.firendList()
      .pipe(takeUntil(this.destroy$))
      .subscribe(friendList => {
        this.friendList = friendList;
        this.showSpinner = false;
        console.log('Friend list is: ' + JSON.stringify(this.friendList));
      });
  }

  /**
   * This method is to navigate the user detail page
   * @param friend
   */
  public userDetailOpenDialog(friend: any) {
    this.stateStoreService.friendDetails = friend;
    this.router.navigate(['/user']);
  }
  ngOnInit() {
    this.retrieveFriendList();
  }

  ngOnDestroy() {
    this.destroy$.next(true );
  }
}
