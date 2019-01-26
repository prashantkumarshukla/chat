import {Component, Input, OnInit} from '@angular/core';
import { CookieService } from "ngx-cookie-service";
import { SocketProviderService } from "../services/socket-provider.service";
import {takeUntil} from "rxjs/operators";
import {Subject} from "rxjs";
import {Subscription} from 'rxjs/index';
import { StateStoreService } from "../services/state-store.service";
import { Router } from "@angular/router";



@Component({
  selector: 'app-friend-request-list',
  templateUrl: './friend-request-list.component.html',
  styleUrls: ['./friend-request-list.component.scss'],
  providers: []
})
export class FriendRequestListComponent implements OnInit {

  constructor(private socketProviderService: SocketProviderService,
              private cookieService: CookieService,
              private stateStoreService: StateStoreService,
              private router: Router
  ) { }

  public friendRequest: any;

  public userId: string;

  private searchSubscription : Subscription;
  destroy$: Subject<boolean> = new Subject<boolean>();
  private showSpinner: boolean;

  retrieveFriendList(): void {
    this.showSpinner = true;
    this.socketProviderService.getNotificationList(this.userId);
  }


  ngOnInit() {
    this.userId = this.stateStoreService.loggedInUser.id;
    this.retrieveFriendList();

    this.socketProviderService.serverInteraction()
      .pipe(takeUntil(this.destroy$))
      .subscribe(searchList => {
        this.friendRequest = searchList;
        console.log('Search list is: ' + JSON.stringify(this.friendRequest));
        this.showSpinner = false;
      });
  }

  userDetailOpenDialog(friend: any) {
    this.stateStoreService.friendDetails = friend;
    this.router.navigate(['/user']);
  }
}
