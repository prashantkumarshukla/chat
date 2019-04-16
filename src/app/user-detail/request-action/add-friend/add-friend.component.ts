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
  private friendInfo: any;
  /**
   * sentRequest
   */
  private sentRequest: boolean = false;
  /**
   * destroy$
   */
  private destroy$: Subject<boolean> = new Subject<boolean>();
  /**
   * ApiResp
   */
  public ApiResp: any;

  constructor(
    private cookieFeatureService: CookieService,
    private socketProviderService: SocketProviderService,
    private stateStoreService: StateStoreService
  ) { }

  /**
   * This method is to send the friend request
   */
  private sendFriendRequest(): void {
    const reqObj = {
      'senderId': this.stateStoreService.loggedInUserId(),
      'receiverId': this.friendInfo.id,
      'status': 'Pending'
    };
    this.socketProviderService.sendFriendRequest(reqObj);
  }

  ngOnInit() {
    this.friendInfo = this.actionObj;
    this.socketProviderService.friendRequestConfirmation().pipe(takeUntil(this.destroy$)).subscribe(response => {
        this.ApiResp = response;
        this.sentRequest = true;
    });
  }
  ngOnDestroy() {
    this.destroy$.next(true);
  }
}
