import {Component, Input, OnInit} from '@angular/core';
import { CookieService } from "ngx-cookie-service";
import { SocketProviderService } from "../../../services/socket-provider.service";
import {takeUntil} from "rxjs/operators";
import {Subject} from "rxjs";


@Component({
  selector: 'app-add-friend',
  templateUrl: './add-friend.component.html',
  styleUrls: ['./add-friend.component.scss']
})
export class AddFriendComponent implements OnInit {

  @Input() actionObj : any;
  public userInfo: any;
  public userId : any;
  public sentRequest : any;
  destroy$: Subject<boolean> = new Subject<boolean>();

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
  }
}
