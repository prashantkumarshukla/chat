import { Injectable } from '@angular/core';
import { SocketProviderService } from "./socket-provider.service";
import { GetUserProfileService } from "./get-user-profile.service";
import {BehaviorSubject} from "rxjs";
import {UserDetails} from "../interfaces/user-details.interface";

@Injectable()
export class StateStoreService {

  /**
   * loggedInUser
   */
  public loggedInUser: UserDetails;
  /**
   * conversationIds
   */
  public conversationIds: any = [];
  /**
   * friendId
   */
  public friendId: string;
  /**
   * chatRoom
   */
  public chatRoom: any;
  /**
   * chatConversations
   */
  public chatConversations: any = [];
  /**
   * countryList
   */
  public countryList: any;
  /**
   * updateChatDetails
   */
  public updateChatDetails = new BehaviorSubject<any>('');
  /**
   * newChatArrived
   */
  public newChatArrived = this.updateChatDetails.asObservable();
  /**
   * updateMsgReadStatus
   */
  public updateMsgReadStatus = new BehaviorSubject<any>('');
  /**
   * msgStatusChange
   */
  public msgStatusChange = this.updateMsgReadStatus.asObservable();

  constructor(private socketProviderService: SocketProviderService,
              private getUserProfileService: GetUserProfileService) {
    this.socketProviderService.receiveMessages().subscribe((response) => {
      this.updateChatDetails.next(response);
    });
    this.newChatArrived.subscribe((chat) => {
      this.updateChatHistory(chat);
    });
    this.socketProviderService.changeMessageReadStatus().subscribe((response) => {
      this.updateMsgReadStatus.next(response);
    });
    this.msgStatusChange.subscribe((msgStatus) => {
      this.setMessageStatus(msgStatus);
    });
  }

  /**
   * This message is to update the message status
   * @param data
   */
  public setMessageStatus(data): void {
    if (data.status) {
      let conversations = this.getChatConversations(data.chatReferenceId);
      conversations.forEach((msgDetails: any) => {
        if (msgDetails.unread) {
          msgDetails.unread = false;
        }
      });
      this.overWriteConversation(data.chatReferenceId, conversations);
    }
  }
  /**
   * This method is to get chat conversations
   * @param chatRefId
   */
  public getChatConversations(chatRefId): [] {
    return chatRefId ? this.chatConversations[chatRefId] : '';
  }
  /**
   * This method is to set chat conversations
   * @param chatReferenceId
   * @param messages
   */
  public setChatConversations(chatReferenceId, messages): void {
    if( !this.chatConversations[chatReferenceId] ) {
      this.chatConversations[chatReferenceId] = [];
    }
    this.reqProfile(messages);
    this.chatConversations[chatReferenceId].push(messages);
  }

  /**
   * This method is to overwrite the chat conversations
   * @param chatReferenceId
   * @param messages
   */
  private overWriteConversation(chatReferenceId, messages): void {
    this.chatConversations[chatReferenceId] = messages;
  }

  /**
   * This method is to request for profile
   */
  private reqProfile(messages: any): void {
    if (messages.sentBy !== this.loggedInUserId()) {
      let profile = this.getUserProfileService.getProfile(messages.sentBy);
      if (!profile) {
        let dataToPass = {friendId: messages.sentBy, userId: this.loggedInUserId()};
        this.socketProviderService.reqUserProfile(dataToPass);
      }
    }
  }
  /**
   * This method is to return the all user id
   */
  public getConversationsId(): [] {
    return this.conversationIds;
  }
  /**
   * This method is to set user id
   * @param conversationId
   */
  private setConversationId(conversationId: string): void {
    const users =  this.conversationIds.filter((data) => {
      return data === conversationId
    });
    if (users.length === 0) {
      this.conversationIds.push(conversationId);
    }
  }
  /**
   * This method is to maintain the conversations
   * @param messages
   */
  public updateChatHistory(messages): void {
    if (messages) {
      this.setChatConversations(messages.chatReferenceId, messages);
      this.setConversationId(messages.chatReferenceId);
    }
  }

  /**
   * This method is update the chat conversations
   * @param id
   * @param messages
   */
  public updateConversation(id: string, messages: []): void {
    this.chatConversations[id] = messages;
  }

  /**
   * This method is to set message status unread false
   * @param chatRefId
   */
  public updateReadStatus(chatRefId: string): void {
    let conversations = this.getChatConversations(chatRefId);
    let latestMsg: any = conversations[conversations.length - 1];
    if (latestMsg.sentBy !== this.loggedInUserId()) {
      let dataToPass = {'chatReferenceId': chatRefId, 'userId': this.loggedInUserId()};
      this.socketProviderService.updateUnreadMsgStatus(dataToPass);
    }
  }
  /**
   * This method is to set the chat room name
   * @param room
   */
  public setChatRoom(room: any): void {
    this.chatRoom = room;
  }

  /**
   * This method is to set the chat room name
   * @param roomName
   */
  public setChatRoomName(roomName: string): void {
    this.chatRoom.room = roomName;
  }
  /**
   * This method is to get chat room name
   */
  public getChatRoomName() {
    return this.chatRoom.room;
  }
  /**
   * This method is to get nick name
   */
  public getNickName() {
    return this.chatRoom.nickName;
  }

  /**
   * This method is to set the country list
   * @param obj
   */
  public setCountryList(obj): void {
    this.countryList = obj;
  }
  /**
   * This method is to get the country list
   */
  public getCountryList() {
    return this.countryList;
  }

  /**
   * This method is to return logged in user id
   */
  public loggedInUserId() {
    return this.loggedInUser.id;
  }
  /**
   * This method is to set logged in user details
   * @param details
   */
  public setLoggedInUserDetails(details) {
    this.loggedInUser = details;
  }
  /**
   * This method is to return the logged in user details
   */
  public loggedInUserDetails() {
    return this.loggedInUser;
  }

  /**
   * This method is to return the friend id
   */
  public getFriendId() {
    return this.friendId;
  }

  /**
   * This method is to set the friend id
   * @param id
   */
  public setFriendId(id) {
    this.friendId = id;
    this.getUserProfile();
  }

  /**
   *This method is to request to load the user profile
   */
  public getUserProfile(): void {
    let getProfileInfo = {userId: this.loggedInUserId(), friendId: this.getFriendId()};
    this.socketProviderService.reqUserProfile(getProfileInfo);
  }
  /**
   * This method is generate and return unique no
   */
  public uniqueNumber() {
    let today = new Date();
    let year = today.getFullYear();
    let month = today.getMonth();
    let currentDate = today.getDate();
    let hours = today.getHours();
    let minutes = today.getMinutes();
    let seconds = today.getSeconds();
    let miliseconds = today.getMilliseconds();
    let generatedNo = year.toString() + month.toString() + currentDate.toString() + hours.toString() +
      minutes.toString() + seconds.toString() + miliseconds.toString();
    return generatedNo;
  }
}
