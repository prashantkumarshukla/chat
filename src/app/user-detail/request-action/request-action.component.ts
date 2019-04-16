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
   * myUserId
   */
  private myUserId: string;
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

  constructor(
    private cookieFeatureService: CookieService,
    private socketProviderService: SocketProviderService,
    private stateStoreService: StateStoreService
  ) {
  }

  /**
   * This method is to use confirm request
   */
  private confirmRequest(): void {
    const reqObj = {
      'receiverId' : this.friendInfo.id,
      'senderId': this.stateStoreService.loggedInUser.id,
      'action' : 'Approved'
    };
    this.socketProviderService.confirmFriendRequest(reqObj);
  }

  /**
   * This method is to deny the friend request
   */
  private denyRequest(): void {
    const reqObj = {
      'receiverId' : this.friendInfo.id,
      'senderId': this.stateStoreService.loggedInUser.id,
      'action' : 'Rejected'
    };
    this.socketProviderService.denyFriendRequest(reqObj);
  }

  ngOnInit() {
    this.friendInfo = this.actionObj;
    this.confirmRequestResp = false;
    this.myUserId = this.stateStoreService.loggedInUserId();
    this.socketProviderService.confirmRequestStatus().pipe(takeUntil(this.destroy$)).subscribe(response => {
        this.confirmRequestResp = response;
    });
    this.socketProviderService.denyFriendRequestBack().pipe(takeUntil(this.destroy$)).subscribe(response => {
      this.confirmRequestResp = response;
    });
  }

  ngOnDestroy() {
   this.destroy$.next(false);
 }
}
