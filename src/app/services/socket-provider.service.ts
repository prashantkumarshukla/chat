import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import * as io from 'socket.io-client';
import {BehaviorSubject} from "rxjs";

@Injectable()
export class SocketProviderService {
  /**
   * socket
   */
  socket;
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

  /**
   * This method is to confirm delete friend request
   */
  public denyFriendRequestBack() {
    const denyConfirmation = new Observable((data) => {
      this.socket.on('deny-request', (response) => {
        data.next(response);
      })
    });
    return denyConfirmation;
  }

  /**
   * This method is to retrieve the friend list
   */
  public friendList() {
    const retrieveList = new Observable((data) => {
      this.socket.on('get-friend-list', (friendList) => {
        data.next(friendList);
      });
    });
    return retrieveList;
  }

  /**
   * This method is to confirm whether the friend request received or not
   */
  public friendRequestConfirmation() {
    const requestStatus = new Observable((data) => {
      this.socket.on('friend-request-status', (reqStatus) => {
        data.next(reqStatus);
      });
    });
    return requestStatus;
  }
  /**
   * This method is to receive the conversations
   */
  public receiveMessages() {
    const retrieveMessages = new Observable((data) => {
      this.socket.on('receive-message', (response) => {
        data.next(response);
      });
    });
    return retrieveMessages;
  }
  /**
   * This method is to confirm whether message has been delivered or not
   */
  public messageSentStatus() {
    const messageStatus = new Observable((data) => {
      this.socket.on('message-sent', (response) => {
        data.next(response);
      });
    });
    return messageStatus;
  }
  /**
   * This method is to get typing status
   */
  public getTypingStatus() {
    const typeStatus = new Observable((data) => {
      this.socket.on('user-is-typing', (response) => {
        data.next(response);
      });
    });
    return typeStatus;
  }
  /**
   * This method is to get login status
   */
  public getLoginStatus() {
    const loginStatus = new Observable((data) => {
      this.socket.on('login done', (response) => {
        data.next(response);
      });
    });
    return loginStatus;
  }
  /**
   * This method is to get chat room name
   */
  public getChatRoom() {
    const chatRoom = new Observable((data) => {
      this.socket.on('chat-room-name', (response) => {
        data.next(response);
      });
    });
    return chatRoom;
  }
  /**
   * This method is to bring the chat room user list
   */
  public getChatRoomUsersResponse() {
    const chatRoomUsers = new Observable((data) => {
      this.socket.on('get-chat-users', (response) => {
        data.next(response);
      });
    });
    return chatRoomUsers;
  }
  /**
   * This method is to bring the country list with states
   */
  public getCountryAndStateList() {
    const countries = new Observable((data) => {
      this.socket.on('country-list', (response) => {
        data.next(response);
      });
    });
    return countries;
  }
  /**
   * This method is to bring the chat room messages
   */
  public getChatRoomMsg() {
    const chatRoomMsgs = new Observable((data) => {
      this.socket.on('room-message', (response) => {
        data.next(response);
      });
    });
    return chatRoomMsgs;
  }
  /**
   * This method is to bring the user profile detail
   */
  public getUserProfile() {
    const userProfile = new Observable((data) => {
      this.socket.on('user-profile', (response) => {
        data.next(response);
      });
    });
    return userProfile;
  }
  /**
   * This method is to bring the message unread status
   */
  public changeMessageReadStatus() {
    const msgStatus = new Observable((data) => {
      this.socket.on('message-status', (response) => {
        data.next(response);
      });
    });
    return msgStatus;
  }
  /**
   * This method is to load the previous messages
   */
  public getPreviousMessages() {
    const previousMsgs = new Observable((data) => {
      this.socket.on('previous-messages', (response) => {
        data.next(response);
      });
    });
    return previousMsgs;
  }

  /**
   * This method is to load the latest messages
   */
  public getLatestMessages() {
    const latestMsgs = new Observable((data) => {
      this.socket.on('latest-messages', (response) => {
        data.next(response);
      });
    });
    return latestMsgs;
  }
  /**
   * This method is to send the login data
   * @param data
   */
  public userLogin(data): void {
    this.socket.emit('login', data);
  }

  /**
   * This method is to send the typing status
   * @param data
   */
  public typingStatus(data): void {
    this.socket.emit('typing', data);
  }
  /**
   * This method is to send the friend request
   * @param data
   */
  public sendFriendRequest(data): void {
    this.socket.emit('sent-request', data);
  }
  /**
   * This method is to send the confirmation about friend request
   * @param data
   */
  public confirmFriendRequest(data): void {
    this.socket.emit('confirm-friend-request', data);
  }
  /**
   * This method is to deny the friend request
   * @param data
   */
  public denyFriendRequest(data): void {
    this.socket.emit('deny-friend-request', data);
  }
  /**
   * This method is to send the message
   * @param data
   */
  public sendMessage(data): void {
    this.socket.emit('send-message', data);
  }
  /**
   * This method is to get the friend list
   * @param id
   */
  public getFriendList(id): void {
    this.socket.emit('friend-list', id);
  }
  /**
   * This method is to join the chat room
   * @param formValues
   */
  public loginChatRoom(formValues): void {
    this.socket.emit('join-chat-room', formValues);
  }
  /**
   * This method is to get the chat room users
   * @param roomName
   */
  public getChatRoomUsers(roomName): void {
    this.socket.emit('chat-room-users', roomName);
  }
  public sendMsgtoChatRoom(msgDetail): void {
    this.socket.emit('chat-room-message', msgDetail);
  }
  /**
   * This method is to request for the country list
   * @param id
   */
  public countryList(id): void {
    this.socket.emit('req-country-list', id);
  }
  /**
   * This method is to request for the user profile
   * @param requestData
   */
  public reqUserProfile(requestData): void {
    this.socket.emit('get-user-profile', requestData);
  }
  /**
   * This message is to request for the message read status
   * @param requestData
   */
  public updateUnreadMsgStatus(requestData): void {
    this.socket.emit('update-read-status', requestData);
  }

  /**
   * This method will request for the previous messages
   * @param requestData
   */
  public reqPreviousMsgs(requestData): void {
    this.socket.emit('load-previous-messages', requestData);
  }

  /**
   * This method is to request for the latest messages
   * @param requestData
   */
  public reqLatestMsgs(requestData): void {
    this.socket.emit('load-latest-messages', requestData)
  }
}
