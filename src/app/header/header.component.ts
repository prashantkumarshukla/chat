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
  public navLinks: any;

  constructor(
    private router: Router,
    private stateStoreSrvice: StateStoreService
  ) {}

  ngOnInit() {
    this.loggedInUser = this.stateStoreSrvice.loggedInUser;
    this.navLinks = [
      {
        label : 'Messages',
        path: 'chat',
        iconAlias: 'chat'
      },
      {
        label : 'Friend list',
        path: 'friendList',
        iconAlias: 'account_circle'
      },
      {
        label : 'Search',
        path: 'search',
        iconAlias: 'search'
      },
      {
        label : 'Notifications',
        path: 'notifications',
        iconAlias: 'supervisor_account'
      }
    ];
  }
}
