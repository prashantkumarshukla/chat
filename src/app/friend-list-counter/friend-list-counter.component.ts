import { Component, OnInit } from '@angular/core';
import { HttpServiceService } from "../http-service.service";
import {reject} from "q";

@Component({
  selector: 'app-friend-list-counter',
  templateUrl: './friend-list-counter.component.html',
  styleUrls: ['./friend-list-counter.component.scss']
})
export class FriendListCounterComponent implements OnInit {

  constructor(

    private httpService: HttpServiceService

  ) { }

  public counter: string;

  getCounter(): void {

    const freshCounter = new Promise((resolve, reject) => {

      this.httpService.newFriendRequest.toPromise().then( res => {

        this.counter = res.requestList.length;

        console.log('Request count', this.counter);

      });

    });

  }

  ngOnInit() {
    this.getCounter();
  }

}
