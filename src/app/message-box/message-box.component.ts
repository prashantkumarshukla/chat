import {Component, OnInit, OnDestroy} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {HttpServiceService} from "../http-service.service";
import { CookieService } from "ngx-cookie-service";
import {MatTab} from "@angular/material";
import {MatTabGroup} from "@angular/material";
import {SocketProviderService} from "../services/socket-provider.service";
import {StateStoreService} from '../services/state-store.service';
import {takeUntil} from 'rxjs/operators';
import {Subject} from 'rxjs/index';
import { Router} from '@angular/router';


@Component({
  selector: 'app-message-box',
  templateUrl: './message-box.component.html',
  styleUrls: ['./message-box.component.scss'],
  providers: [
    HttpServiceService,
    MatTabGroup,
    MatTab]
})
export class MessageBoxComponent implements OnInit, OnDestroy {

  searchform: FormGroup;
  public chatDetail: any;
  public getServerResponse: any;
  public searchBegin: boolean;
  destroy$: Subject<boolean> = new Subject<boolean>();
  public conversations: any =  [];
  public messageArray: any =  [];
  public chatArray: any = [];

  constructor(private formBuilder: FormBuilder,
              private httpService: HttpServiceService,
              private cookieFeatureService: CookieService,
              private socketProviderService: SocketProviderService,
              private stateStoreService: StateStoreService,
              private router: Router) {

  }

  ngOnInit() {
    this.socketProviderService.serverInteraction()
      .pipe(takeUntil(this.destroy$))
      .subscribe(response => {
        if (response) {
            this.chatArray.push(response[0]);
            this.socketProviderService.newDataSource = this.chatArray;
        }
      });
  }

  ngOnDestroy() {
    this.destroy$.next(true);
  }


  userDetailOpenDialog(friend: any) {
    this.stateStoreService.friendDetails = friend;
    this.router.navigate(['/user']);
  }
}
