import {Component, Input, OnInit} from '@angular/core';
import { CookieService } from "ngx-cookie-service";
import { SocketProviderService } from "../../services/socket-provider.service";
import {takeUntil} from "rxjs/operators";
import {Subject} from "rxjs";

@Component({
  selector: 'app-request-action',
  templateUrl: './request-action.component.html',
  styleUrls: ['./request-action.component.scss']
})
export class RequestActionComponent implements OnInit {
  @Input() actionObj : any;
  public friendStatus: any;
  public userId : any;
  public sentRequest : any;
  destroy$: Subject<boolean> = new Subject<boolean>();
  constructor(
    private cookieFeatureService : CookieService,
    private socketProviderService : SocketProviderService
  ) {}

  confirmRequest(friendId,action) : void {
    let reqObj = {
      "friendId" : friendId,
      "userId":this.userId,
      "action" : action
    };
    this.socketProviderService.confirmFriendRequest(reqObj);
  }

  ngOnInit() {
    this.friendStatus = this.actionObj;
    this.userId = {"userId" :this.cookieFeatureService.get("user")};
    this.sentRequest = false;
    this.socketProviderService.serverInteraction()
      .pipe(takeUntil(this.destroy$)).subscribe(requestStatus => {
      this.friendStatus = requestStatus;
      console.log("Response: " + JSON.stringify(this.friendStatus));
      if(this.friendStatus.status){
        this.sentRequest = true;
      }
    });
  }
}
