import { Component, OnInit } from '@angular/core';
import {MatTab, MatTabChangeEvent} from '@angular/material';
import {MatTabGroup} from "@angular/material";
import {Router} from "@angular/router";
import { StateStoreService} from '../services/state-store.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  providers: [
    MatTabGroup,
    MatTab
  ]
})
export class HeaderComponent implements OnInit {

  public loggedInUser: any;

  constructor(
    private router: Router,
    private stateStoreSrvice: StateStoreService
  ) {}
  public tabNavigation(event : MatTabChangeEvent) {
    switch (event.tab.textLabel) {
        case  'friendList':
          this.router.navigate(['/friendList']);
          break;
          case  'search':
          this.router.navigate(['/search']);
          break;
      case 'notificationList':
        this.router.navigate(['/notifications']);
        break;
      case 'chat':
        this.router.navigate(['/chat']);
        break;
    }
  }


  ngOnInit() {
    this.loggedInUser = this.stateStoreSrvice.loggedInUser;
  }
}
