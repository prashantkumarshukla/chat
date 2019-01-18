import { Component, OnInit, Input } from '@angular/core';
import { MatTabGroup } from "@angular/material";
import { HttpServiceService } from "../http-service.service";
import { CookieService } from "ngx-cookie-service";
import { SocketProviderService } from "../services/socket-provider.service";
import {takeUntil} from "rxjs/operators";
import {Subject} from "rxjs";

@Component({
  selector: 'app-friend-list',
  templateUrl: './friend-list.component.html',
  styleUrls: ['./friend-list.component.scss'],
  providers: [MatTabGroup, HttpServiceService]
})
export class FriendListComponent implements OnInit {

  @Input() getMessage : any;
  public userId : string;
  public friendList : any;
  public getResponse : any;
  destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(
    private cookieService: CookieService,
    private socketProviderService: SocketProviderService
  ) { }

  public retrieveFriendList(): void {
    this.socketProviderService.getFriendList(this.userId);
  }


  ngOnInit() {
    this.userId = this.cookieService.get("user");
    this.retrieveFriendList();
    this.socketProviderService.serverInteraction()
      .pipe(takeUntil(this.destroy$))
      .subscribe(friendList => {
        this.friendList = friendList;
        console.log('Friend list is: ' + JSON.stringify(this.friendList));
      });
  }
}
