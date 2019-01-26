import {Component, Input, OnInit, OnDestroy} from '@angular/core';
import { CookieService } from "ngx-cookie-service";
import { SocketProviderService } from "../../services/socket-provider.service";
import {takeUntil} from "rxjs/operators";
import {Subject} from "rxjs";
import {Subscription} from 'rxjs/index';
import { Router } from '@angular/router';
import {StateStoreService} from '../../services/state-store.service';

@Component({
  selector: 'app-request-action',
  templateUrl: './request-action.component.html',
  styleUrls: ['./request-action.component.scss']
})
export class RequestActionComponent implements OnInit , OnDestroy {
  @Input() actionObj: any;
  public friendInfo: any;
  public sentRequest: any;
  public confirmRequestResp: any;
  destroy$: Subject<boolean> = new Subject<boolean>();
  private confirmRequestsSubscription: Subscription;
  private showSpinner: boolean;
  constructor(
    private cookieFeatureService: CookieService,
    private socketProviderService: SocketProviderService,
    private router: Router,
    private stateStoreService: StateStoreService
  ) {
  }

  confirmRequest(): void {
    this.showSpinner = true;
    const reqObj = {
      'receiverId' : this.friendInfo.id,
      'senderId': this.stateStoreService.loggedInUser.id,
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

  denyRequest(): void {
    this.showSpinner = true;
    const reqObj = {
      'receiverId' : this.friendInfo.id,
      'senderId': this.stateStoreService.loggedInUser.id,
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
    this.friendInfo = this.actionObj;
    this.confirmRequestResp = false;
    this.showSpinner = false;
  }

  ngOnDestroy() {
   this.destroy$.next(true);
 }
}
