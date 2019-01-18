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

  @Input() getMessage : any;
  public userId : string;
  public friendList : any;
  public getResponse : any;
  destroy$: Subject<boolean> = new Subject<boolean>();
  private showSpinner: boolean;

  constructor(
    private cookieService: CookieService,
    private socketProviderService: SocketProviderService,
    private router: Router,
    private stateStoreService: StateStoreService
  ) { }

  public retrieveFriendList(): void {
    this.showSpinner = true;
    this.socketProviderService.getFriendList(this.userId);
    this.socketProviderService.serverInteraction()
      .pipe(takeUntil(this.destroy$))
      .subscribe(friendList => {
        this.friendList = friendList;
        this.showSpinner = false;
        console.log('Friend list is: ' + JSON.stringify(this.friendList));
      });
  }


  ngOnInit() {
    this.userId = this.cookieService.get('user');
    this.retrieveFriendList();
  }

  ngOnDestroy() {
    this.destroy$.next(true );
  }

  userDetailOpenDialog(user: any) {
    this.stateStoreService.userInfo = user;
    this.router.navigate(['/user']);
  }
}
