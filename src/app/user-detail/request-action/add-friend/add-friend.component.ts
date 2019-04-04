import {Component, Input, OnInit, OnDestroy} from '@angular/core';
import { CookieService } from "ngx-cookie-service";
import { SocketProviderService } from "../../../services/socket-provider.service";
import {takeUntil} from "rxjs/operators";
import {Subject, Subscription} from 'rxjs';
import {StateStoreService} from '../../../services/state-store.service';


@Component({
  selector: 'app-add-friend',
  templateUrl: './add-friend.component.html',
  styleUrls: ['./add-friend.component.scss']
})
export class AddFriendComponent implements OnInit, OnDestroy{
  /**
   * @Input() actionOb
   */
  @Input() actionObj: any;
  /**
   * friendInfo
   */
  public friendInfo: any;
  /**
   * sentRequest
   */
  public sentRequest: boolean;
  /**
   * destroy$
   */
  public destroy$: Subject<boolean> = new Subject<boolean>();
  /**
   * ApiResp
   */
  public ApiResp: any;
  /**
   * showSpinner
   */
  public showSpinner: boolean;

  constructor(
    private cookieFeatureService: CookieService,
    private socketProviderService: SocketProviderService,
    private stateStoreService: StateStoreService
  ) { }

  /**
   * This method is to send the friend request
   */
  public sendFriendRequest(): void {
    this.showSpinner = true;
    const reqObj = {
      'senderId': this.stateStoreService.loggedInUser.id,
      'receiverId': this.friendInfo.id,
      'status': 'Pending'
    };
    this.socketProviderService.sendFriendRequest(reqObj);
    this.socketProviderService.friendRequestConfirmation()
      .pipe(takeUntil(this.destroy$))
      .subscribe(response => {
        this.ApiResp = response;
        this.sentRequest = true;
        this.showSpinner = false;
      });
  }

  ngOnInit() {
    this.friendInfo = this.actionObj;
    this.sentRequest = false;
    this.showSpinner = false;
  }
  ngOnDestroy() {
    this.destroy$.next(true);
  }
}
