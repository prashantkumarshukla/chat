import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Route, RouterModule, Routes} from "@angular/router";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { MatRippleModule } from "@angular/material";
import { CookieService } from "ngx-cookie-service";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCheckboxModule, MatCardModule, MatMenuModule, MatToolbarModule, MatIconModule, MatTabsModule, MatDialogModule, MatGridListModule } from '@angular/material';

import { AppComponent } from './app.component';
import { LoginPanelComponent } from './login-panel/login-panel.component';
import { ModalModule } from "./modal/modal.module";

import { FacebookModule } from "ngx-facebook";
import { MessageBoxComponent } from './message-box/message-box.component';
import { RegistrationFormComponent } from './registration-form/registration-form.component';
import "hammerjs";
import { FriendListComponent } from './friend-list/friend-list.component';
import { SearchUserComponent } from './search-user/search-user.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { ChatPaneComponent } from './chat-pane/chat-pane.component';
import { FriendListCounterComponent } from './friend-list-counter/friend-list-counter.component';
import { FriendRequestListComponent } from './friend-request-list/friend-request-list.component';
import { SocketProviderService } from "./services/socket-provider.service";
import { MessageListComponent } from './message-list/message-list.component';
import { RequestActionComponent } from './user-detail/request-action/request-action.component';
import { HeaderComponent } from './header/header.component';
import {StateStoreService} from "./services/state-store.service";
import {UserSearchService} from "./search-user/user-search.service";
import {HttpClientModule} from "@angular/common/http";
import { AddFriendComponent } from './user-detail/request-action/add-friend/add-friend.component';

const appRoutes:Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path : 'login',
    component : LoginPanelComponent
  },
  {
    path : 'register',
    component : LoginPanelComponent
  },
  {
    path : 'search',
    component : SearchUserComponent
  },
  {
    path : 'chat',
    component : MessageBoxComponent
  },
  {
    path: 'user',
    component : UserDetailComponent
  },
  {
    path: 'notifications',
    component : FriendRequestListComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    LoginPanelComponent,
    MessageBoxComponent,
    RegistrationFormComponent,
    FriendListComponent,
    SearchUserComponent,
    UserDetailComponent,
    ChatPaneComponent,
    FriendListCounterComponent,
    FriendRequestListComponent,
    MessageListComponent,
    RequestActionComponent,
    HeaderComponent,
    AddFriendComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      {enableTracing : true}
    ),
    HttpClientModule,
    BrowserModule,
    ModalModule,
    FacebookModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatCardModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatTabsModule,
    MatDialogModule,
    MatGridListModule
  ],
  entryComponents : [
    RegistrationFormComponent,
    UserDetailComponent
  ],
  providers: [ CookieService, SocketProviderService, StateStoreService, UserSearchService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
