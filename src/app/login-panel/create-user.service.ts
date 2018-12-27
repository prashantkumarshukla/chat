import { Injectable } from '@angular/core';
import { Http, Response } from "@angular/http";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class CreateUserService {

  constructor(private http : HttpClient) { }

    createUser(data) {
    let url : string = '/register';

    return this.http.post(
        url, data, {observe: 'response' }
      );
    //return this.http.post(url, data).subscribe((res:Response) => res.json());
  }
  loginUser(data) {
    let url :string = '/login';
    return this.http.post(
      url, data, {observe: 'response' }
    );
    //return this.http.post(url,data).subscribe((res:Response) => res.json());
  }

}
