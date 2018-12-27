import { Component, OnInit } from '@angular/core';
import {MatTab} from "@angular/material";
import {MatTabGroup} from "@angular/material";
import {Router} from "@angular/router";
import { HttpServiceService } from "../http-service.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  providers: [
    MatTabGroup,
    MatTab,
    HttpServiceService
  ]
})
export class HeaderComponent implements OnInit {

  constructor(
    private router: Router
  ) {}

  public goToSearch():void {
    this.router.navigate(['/search']);
  }

  ngOnInit() {
  }

}
