import {Component, Input, OnInit, OnDestroy} from '@angular/core';
import { MatTabGroup } from "@angular/material";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { HttpServiceService } from "../http-service.service";
import {UserSearchService} from "./user-search.service";
import { StateStoreService } from "../services/state-store.service";
import {SocketProviderService} from "../services/socket-provider.service";
import { Router } from "@angular/router";
import {Subscription} from "rxjs";
import { CookieService } from "ngx-cookie-service";
import {Subject} from "rxjs";
import {takeUntil} from "rxjs/operators";

@Component({
  selector: 'app-search-user',
  templateUrl: './search-user.component.html',
  styleUrls: ['./search-user.component.scss'],
  providers: [MatTabGroup, HttpServiceService]
})
export class SearchUserComponent implements OnInit, OnDestroy {

  searchform: FormGroup;
  public searchResponse: any;
  private searchSubscription: Subscription;
  private userId: any;
  destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(
    private formBuilder: FormBuilder,
    private httpService: HttpServiceService,
    private userSearchService: UserSearchService,
    private socketProviderService: SocketProviderService,
    private stateStoreService: StateStoreService,
    private cookieFeatureService: CookieService,
    private router: Router
  ) {
    this.searchform = formBuilder.group({
      'searchField' : ''
    });
  }

  searchUser(searchString): void {
    const searchObj = {
      'id': this.userId,
      'searchString': searchString.searchField
    };
    this.socketProviderService.searchUser(searchObj);

    this.socketProviderService.serverInteraction()
      .pipe(takeUntil(this.destroy$))
      .subscribe(searchList => {
        this.searchResponse = searchList;
        console.log('Search list is: ' + JSON.stringify(this.searchResponse));
      });
  }

  userDetail(friendInfo) {
    this.stateStoreService.friendDetails = friendInfo;
    this.router.navigate(['/user']);
  }

  ngOnInit() {
    this.userId = this.stateStoreService.loggedInUser.id;
  }

  ngOnDestroy() {
   /* this.destroy$.next(true);*/
  }
}
