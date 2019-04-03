import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import * as io from 'socket.io-client';
import {BehaviorSubject} from "rxjs";

@Injectable()
export class SocketProviderService {
  socket;
  /**
   * dataSource
   */
  public dataSource = new BehaviorSubject<any>("");
  /**
   * newDataSource
   */
  public newDataSource = this.dataSource.asObservable();
  /**
   * userTyping
   */
  public userTyping = new BehaviorSubject<any>("");
  /**
   * typingDataSource
   */
  public typingDataSource = this.userTyping.asObservable();

  constructor() {
    this.socket = io();
  }
  /**
   * This method is to update the data for conversations
   * @param data
   */
  public updateData(data: any): void {
    this.dataSource.next(data);
  }

  /**
   * This method is to call notification list
   * @param userId
   */
  public getNotificationList(userId): void {
    this.socket.emit('get-notification-list', userId);
  }

  /**
   * This method is to retrieve the searched user
   */
  public retrieveSearchUser() {
    const searchUserList = new Observable((data) => {
      this.socket.on('search-user-list', (searchList) => {
        console.log('Search User: ' + searchList);
        data.next(searchList);
      });
    });
    return searchUserList;
  }

  /**
   * This method is to call search user
   * @param data
   */
  public searchUser(data): void {
    this.socket.emit('search-user', data);
  }
  /**
   * This method is to retrieve the friend notification
   */
  public retrieveFriendNotification() {
    console.log("Friend request notification");
    const notificationList = new Observable((data) => {
      this.socket.on('get-notifications', (friendRequestList) => {
        console.log('friend Request: ' + friendRequestList);
        data.next(friendRequestList)
      });
    });
    return notificationList;
  }

  /**
   * This method is to retrieve the new live request
   * @param data
   */
  public retrieveNewRequest() {
    const newReq = new Observable((data) => {
      this.socket.on('new-request', (count) => {
        data.next(count);
      });
    });
    return newReq;
  }
  /**
   * This method is to retrieve the cofirm friend request
   */
  public confirmRequestStatus() {
    const friendRequestStatus = new Observable( (data) => {
      this.socket.on('confirm-request', (request) => {
        data.next(request);
      });
    });
    return friendRequestStatus;
  }

  /**
   * This method is to confirm friend request status back to the user
   */
  public friendRequestNotifyBack() {
    const confirmBack = new Observable( (data) => {
      this.socket.on('friend-request-confirmed', (response) => {
        data.next(response);
      });
    });
    return confirmBack;
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

  public sendMessage(data): void {
    this.socket.emit('send-message', data);
  }

  public getFriendList(id): void {
    this.socket.emit('friend-list', id);
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
      this.socket.on('deny-request', (data) => {
        observer.next(data);
      });
      this.socket.on('friend-request-status', (data) => {
        observer.next(data);
      });
      this.socket.on('receive-message', (data) => {
        observer.next(data);
      });
    });
    return observable;
  }
}
