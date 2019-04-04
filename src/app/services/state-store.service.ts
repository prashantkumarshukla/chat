import { Injectable } from '@angular/core';

@Injectable()
export class StateStoreService {

  /**
   * loggedInUser
   */
  public loggedInUser: any;
  /**
   * friendDetails
   */
  public friendDetails: any;

  /**
   * friendsId
   */
  public chatDetail: any = [];

  constructor() {
  }

}
