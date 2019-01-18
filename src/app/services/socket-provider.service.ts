import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import * as io from 'socket.io-client';
import {BehaviorSubject} from "rxjs";

@Injectable()
export class SocketProviderService {
  socket;
  constructor() {
    this.socket = io();
  }

  private dataSource = new BehaviorSubject<any>("");
  newDataSource = this.dataSource.asObservable();

  private userTyping = new BehaviorSubject<any>("");
  typingDataSource = this.userTyping.asObservable();

  public updateData(data: any): void {
    this.dataSource.next(data);
  }

  public updateTypingStatus(data: any): void {
    this.userTyping.next(data);
  }

  public userLogin(data): void {
    this.socket.emit('login', data);
  }

  public typingStatus(data): void {
    this.socket.emit('typing', data);
  }

  public sendFriendRequest(data): void {
    this.socket.emit('sent-request', data);
  }

  public confirmFriendRequest(data): void {
    this.socket.emit('confirm-friend-request', data);
  }

  public denyFriendRequest(data): void {
    this.socket.emit('deny-friend-request', data);
  }

  public searchUser(data): void {
    this.socket.emit('search-user', data);
  }

  public sendMessage(data): void {
    this.socket.emit('chating', data);
  }

  public getFriendList(id): void {
    this.socket.emit('friend-list', id);
  }

  public getNotificationList(userId): void {
    this.socket.emit('get-notification-list', userId);
  }

  public serverInteraction() {
    const observable = new Observable(observer => {
      this.socket.on('login done', (data) => {
        observer.next(data);
      });
      this.socket.on('new message', (chats) => {
        observer.next(chats);
      });
      this.socket.on('get-friend-list', (friendList) => {
        observer.next(friendList);
      });
      this.socket.on('user-is-typing', (typing) => {
        console.log('Typing', typing);
        observer.next(typing);
      });
      this.socket.on('search-user-list', (searchList) => {
        console.log('Search User: ' + searchList);
        observer.next(searchList);
      });
      this.socket.on('get-notifications', (friendRequestList) => {
        console.log('friend Request: ' + friendRequestList);
        observer.next(friendRequestList);
      });
      this.socket.on('confirm-request', (data) => {
        observer.next(data);
      });
      this.socket.on('deny-request', (data) => {
        observer.next(data);
      });
      this.socket.on('friend-request-status', (data) => {
        observer.next(data);
      });
    });
    return observable;
  }
}
