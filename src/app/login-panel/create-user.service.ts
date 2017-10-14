import { Injectable } from '@angular/core';
import { Http, Response } from "@angular/http";
import 'rxjs/add/operator/map';

@Injectable()
export class CreateUserService {

  constructor(private _http : Http) { }

    createUser(data) {
    let url : string = '/register';

    return this._http.post(url, data).map((res:Response) => res.json());
  }
  loginUser(data) {
    let url :string = '/login';

    return this._http.post(url,data).map((res:Response) => res.json());
  }

}
