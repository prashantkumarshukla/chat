import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Observable";
import * as io from 'socket.io-client';
import {BehaviorSubject} from "rxjs/BehaviorSubject";
import {any} from "codelyzer/util/function";

@Injectable()
export class SocketProviderService {

  socket;

  constructor() {

    this.socket = io();

  }

  private dataSource = new BehaviorSubject<any>("");
  newDataSource = this.dataSource.asObservable();

  updateData(data : any){

    this.dataSource.next(data);
  }

  userLogin(data){

    this.socket.emit('login',data);

  }

  serverInteraction() {

    let observable = new Observable(observer => {

      this.socket.on('login done', (data) => {

        observer.next(data);

      });

      this.socket.on('new message', (chats) => {

        observer.next(chats);

      });


      this.socket.on('friend-list-sent', (friendList) => {

        observer.next(friendList);

      });


      return () => {

        this.socket.disconnect();
      };

    });

    return observable;


  }

  sendMessage(data){

    this.socket.emit('chating',data);

  };

  getFriendList(id) {

    this.socket.emit('friend-list',id);

  }

}
