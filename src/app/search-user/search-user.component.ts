import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { MatTabGroup } from "@angular/material";
import { FormBuilder, FormGroup } from "@angular/forms";
import { HttpServiceService } from "../http-service.service";
import { StateStoreService } from "../services/state-store.service";
import { SocketProviderService } from "../services/socket-provider.service";
import { Router } from "@angular/router";
import { CookieService } from "ngx-cookie-service";
import { Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";

@Component({
  selector: 'app-search-user',
  templateUrl: './search-user.component.html',
  styleUrls: ['./search-user.component.scss'],
  providers: [MatTabGroup, HttpServiceService]
})
export class SearchUserComponent implements OnInit, OnDestroy {

  /**
   * searchForm
   */
  private searchForm: FormGroup;
  /**
   * searchResponse
   */
  private searchResponse: any;
  /**
   * destroy$
   */
  private destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(
    private formBuilder: FormBuilder,
    private httpService: HttpServiceService,
    private socketProviderService: SocketProviderService,
    private stateStoreService: StateStoreService,
    private cookieFeatureService: CookieService,
    private router: Router
  ) {
    this.searchForm = formBuilder.group({
      'searchField' : ''
    });
  }

  /**
   * This method is to send the search string
   * @param searchString
   */
  private searchUser(searchString): void {
    const searchObj = {
      'id': this.stateStoreService.loggedInUserId(),
      'searchString': searchString.searchField
    };
    this.socketProviderService.searchUser(searchObj);
  }

  /**
   * This method is to reirect to the user detail page
   * @param friendInfo
   */
  public userDetail(friendInfo): void {
    this.stateStoreService.setFriendId(friendInfo.id);
    this.router.navigate(['/user']);
  }

  ngOnInit() {
    this.socketProviderService.retrieveSearchUser()
      .pipe(takeUntil(this.destroy$))
      .subscribe(searchList => {
        this.searchResponse = searchList;
        console.log('Search list is: ' + JSON.stringify(this.searchResponse));
      });
  }

  ngOnDestroy() {
   this.destroy$.next(true);
  }
}
