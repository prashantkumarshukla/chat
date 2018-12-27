import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import * as io from 'socket.io-client';
import {BehaviorSubject} from "rxjs";

@Injectable()
export class UserSearchService {

  socket;

  constructor() {
    this.socket = io();
  }

  searchUser(data) {
    this.socket.emit('search-user', data);
  }

  connector() {
    let data = new Observable(observer => {
      this.socket.on('search-user-list',(searchList) => {
        console.log('Search User: ' + searchList);
        observer.next(searchList);
      });
      return () => {
        this.socket.disconnect();
      };
    });
    return data;
  }

}
