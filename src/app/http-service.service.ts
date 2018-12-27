import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable()
export class HttpServiceService {

  constructor(private http : HttpClient) { }

  serverDomain:string = '/';

  public newFriendRequest : any;

  createUser(data) {

    let url : string = this.serverDomain + 'register';

    return this.retrieveData(url,data);

  }
  loginUser(data) {

    let url :string = this.serverDomain + 'login';

    return this.retrieveData(url,data);

  }

  searchUser(data){

    let url :string = this.serverDomain + 'search';

    return this.retrieveData(url,data);

  }

  requestAction(data){

    let url:string = this.serverDomain + "confirm-friend-request";

    return this.retrieveData(url,data);

  }


  friendRequest(data){

    let url:string = this.serverDomain + "send-friend-request";

    return this.retrieveData(url,data);

  }

  newRequestList(data){

    let url:string = this.serverDomain + "friend-request";

    this.newFriendRequest =  this.retrieveData(url,data);

    return this.newFriendRequest;

  }

  friendList(data){

    let url:string = this.serverDomain + "friend-list";

    return this.retrieveData(url,data);

  }

  retrieveData (url,data){
    return this.http.post(
      url, data, {observe: 'response' }
    );
  }

}
