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

  @Input() actionObj: any;
  public friendInfo: any;
  public sentRequest: boolean;
  destroy$: Subject<boolean> = new Subject<boolean>();
  public friendRequestStatus: Subscription;
  public ApiResp: any;
  public showSpinner: boolean;

  constructor(
    private cookieFeatureService: CookieService,
    private socketProviderService: SocketProviderService,
    private stateStoreService: StateStoreService

  ) { }

  ngOnInit() {

    this.friendInfo = this.actionObj;
    this.sentRequest = false;
    this.showSpinner = false;
  }

  sendFriendRequest(): void {
    this.showSpinner = true;
    const reqObj = {
      'senderId': this.stateStoreService.loggedInUser.id,
      'receiverId': this.friendInfo.id,
      'status': 'Pending'
    };
    this.socketProviderService.sendFriendRequest(reqObj);
    this.socketProviderService.serverInteraction()
      .pipe(takeUntil(this.destroy$))
      .subscribe(response => {
        this.ApiResp = response;
        this.sentRequest = true;
        this.showSpinner = false;
      });
  }
  ngOnDestroy() {
    this.destroy$.next(true);
  }
}
