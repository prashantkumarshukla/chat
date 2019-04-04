import {Component, Input, OnInit, OnDestroy} from '@angular/core';
import { CookieService } from "ngx-cookie-service";
import { SocketProviderService } from "../../services/socket-provider.service";
import {takeUntil} from "rxjs/operators";
import {Subject} from "rxjs";
import {StateStoreService} from '../../services/state-store.service';

@Component({
  selector: 'app-request-action',
  templateUrl: './request-action.component.html',
  styleUrls: ['./request-action.component.scss']
})
export class RequestActionComponent implements OnInit , OnDestroy {
  /**
   * actionObj
   */
  @Input() actionObj: any;
  /**
   * friendInfo
   */
  public friendInfo: any;
  /**
   * confirmRequestResp
   */
  public confirmRequestResp: any;
  /**
   * destroy$
   */
  public destroy$: Subject<boolean> = new Subject<boolean>();
  /**
   * showSpinner
   */
  private showSpinner: boolean;
  constructor(
    private cookieFeatureService: CookieService,
    private socketProviderService: SocketProviderService,
    private stateStoreService: StateStoreService
  ) {
  }

  /**
   * This method is to use confirm request
   */
  public confirmRequest(): void {
    this.showSpinner = true;
    const reqObj = {
      'receiverId' : this.friendInfo.id,
      'senderId': this.stateStoreService.loggedInUser.id,
      'action' : 'Approved'
    };
    this.socketProviderService.confirmFriendRequest(reqObj);
    this.socketProviderService.confirmRequestStatus()
      .pipe(takeUntil(this.destroy$))
      .subscribe(response => {
        this.confirmRequestResp = response;
        this.showSpinner = false;
      });
  }

  /**
   * This method is to deny the friend request
   */
  public denyRequest(): void {
    this.showSpinner = true;
    const reqObj = {
      'receiverId' : this.friendInfo.id,
      'senderId': this.stateStoreService.loggedInUser.id,
      'action' : 'Rejected'
    };
    this.socketProviderService.denyFriendRequest(reqObj);
    this.socketProviderService.denyFriendRequestBack()
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
