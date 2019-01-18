import {Component, Input, OnInit, OnDestroy} from '@angular/core';
import { CookieService } from "ngx-cookie-service";
import { SocketProviderService } from "../../../services/socket-provider.service";
import {takeUntil} from "rxjs/operators";
import {Subject, Subscription} from 'rxjs';


@Component({
  selector: 'app-add-friend',
  templateUrl: './add-friend.component.html',
  styleUrls: ['./add-friend.component.scss']
})
export class AddFriendComponent implements OnInit, OnDestroy{

  @Input() actionObj : any;
  public userInfo: any;
  public userId : any;
  public sentRequest : any;
  destroy$: Subject<boolean> = new Subject<boolean>();
  public friendRequestStatus: Subscription;
  public ApiResp: any;

  constructor(
    private cookieFeatureService: CookieService,
    private socketProviderService: SocketProviderService

  ) { }

  ngOnInit() {

    this.userInfo = this.actionObj;
    this.sentRequest = false;

  }

  sendFriendRequest(receiverId): void {
    let senderId = this.cookieFeatureService.get("user");
    let reqObj = {
      'senderId': senderId,
      'receiverId': receiverId,
      'status': 'Pending'
    };
    this.socketProviderService.sendFriendRequest(reqObj);
    this.socketProviderService.serverInteraction()
      .pipe(takeUntil(this.destroy$))
      .subscribe(response => {
        this.ApiResp = response;
        this.sentRequest = true;
      });
  }
  ngOnDestroy() {
    this.destroy$.next(true);
  }
}
