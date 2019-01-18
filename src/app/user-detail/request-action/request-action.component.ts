import {Component, Input, OnInit, OnDestroy} from '@angular/core';
import { CookieService } from "ngx-cookie-service";
import { SocketProviderService } from "../../services/socket-provider.service";
import {takeUntil} from "rxjs/operators";
import {Subject} from "rxjs";
import {Subscription} from 'rxjs/index';
import { Router } from '@angular/router';

@Component({
  selector: 'app-request-action',
  templateUrl: './request-action.component.html',
  styleUrls: ['./request-action.component.scss']
})
export class RequestActionComponent implements OnInit , OnDestroy {
  @Input() actionObj: any;
  public userInfo: any;
  public userId: any;
  public sentRequest: any;
  public confirmRequestResp: any;
  destroy$: Subject<boolean> = new Subject<boolean>();
  private confirmRequestsSubscription: Subscription;
  private showSpinner: boolean;
  constructor(
    private cookieFeatureService: CookieService,
    private socketProviderService: SocketProviderService,
    private router: Router
  ) {
  }

  confirmRequest(friendId): void {
    this.showSpinner = true;
    const reqObj = {
      'receiverId' : friendId,
      'senderId': this.userId,
      'action' : 'Approved'
    };
    this.socketProviderService.confirmFriendRequest(reqObj);
    this.socketProviderService.serverInteraction()
      .pipe(takeUntil(this.destroy$))
      .subscribe(response => {
        this.confirmRequestResp = response;
        this.showSpinner = false;
      });
  }

  denyRequest(friendId): void {
    this.showSpinner = true;
    const reqObj = {
      'receiverId' : friendId,
      'senderId': this.userId,
      'action' : 'Rejected'
    };
    this.socketProviderService.denyFriendRequest(reqObj);
    this.socketProviderService.serverInteraction()
      .pipe(takeUntil(this.destroy$))
      .subscribe(response => {
        this.confirmRequestResp = response;
        this.showSpinner = false;
      });
  }

  ngOnInit() {
    this.userId = this.cookieFeatureService.get('user');
    this.userInfo = this.actionObj;
    this.confirmRequestResp = false;
    this.showSpinner = false;
  }

  ngOnDestroy() {
   this.destroy$.next(true);
 }
}
