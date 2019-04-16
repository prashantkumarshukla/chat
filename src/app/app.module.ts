import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CookieService } from "ngx-cookie-service";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCheckboxModule, MatCardModule, MatMenuModule, MatToolbarModule, MatIconModule, MatTabsModule, MatDialogModule, MatGridListModule } from '@angular/material';
import { AppComponent } from './app.component';
import { LoginPanelComponent } from './login-panel/login-panel.component';

import { MatSnackBarModule } from "@angular/material";
import { MatBadgeModule } from "@angular/material";
import { MatExpansionModule } from "@angular/material";
import { MatTooltipModule } from "@angular/material";
import { MatFormFieldModule } from "@angular/material";
import { MatInputModule } from "@angular/material";
import { MatSelectModule } from "@angular/material";
import { MatOptionModule } from "@angular/material";

import { FacebookModule } from "ngx-facebook";
import "hammerjs";
import { FriendListComponent } from './friend-list/friend-list.component';
import { SearchUserComponent } from './search-user/search-user.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { FriendListCounterComponent } from './friend-list-counter/friend-list-counter.component';
import { FriendRequestListComponent } from './friend-request-list/friend-request-list.component';
import { SocketProviderService } from "./services/socket-provider.service";
import { MessageListComponent } from './message-list/message-list.component';
import { RequestActionComponent } from './user-detail/request-action/request-action.component';
import { HeaderComponent } from './header/header.component';
import { StateStoreService } from "./services/state-store.service";
import { GetUserProfileService } from "./services/get-user-profile.service";
import { HttpClientModule } from "@angular/common/http";
import { AddFriendComponent } from './user-detail/request-action/add-friend/add-friend.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { NotificationComponent } from './notification/notification.component';
import { NoticationBadgeComponent } from './notication-badge/notication-badge.component';
import { NewMessageNotificationComponent } from './new-message-notification/new-message-notification.component';
import { RegistrationComponent } from './registration/registration.component';
import { CommanChatComponent } from './comman-chat/comman-chat.component';
import { ChatRoomConversationComponent } from './comman-chat/chat-room-conversation/chat-room-conversation.component';
import { ChatPaneComponent } from './comman-chat/chat-pane/chat-pane.component';
import { ChatRoomServiceService } from "./services/chat-room-service.service";
import { FriendListService } from "./services/friend-list.service";
import { LoadMessageService } from "./services/load-message.service";
import { ChangeRoomComponent } from './comman-chat/chat-room-conversation/change-room/change-room.component';


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
    component : RegistrationComponent
  },
  {
    path : 'search',
    component : SearchUserComponent
  },
  {
    path : 'chat',
    component : MessageListComponent
  },
  {
    path: 'user',
    component : UserDetailComponent
  },
  {
    path: 'notifications',
    component : FriendRequestListComponent
  },
  {
    path: 'friendList',
    component : FriendListComponent
  },
  {
    path: 'commanChat',
    component : CommanChatComponent
  },
  {
    path: 'chatRoom',
    component : ChatRoomConversationComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    LoginPanelComponent,
    FriendListComponent,
    SearchUserComponent,
    UserDetailComponent,
    FriendListCounterComponent,
    FriendRequestListComponent,
    MessageListComponent,
    RequestActionComponent,
    HeaderComponent,
    AddFriendComponent,
    NotificationComponent,
    NoticationBadgeComponent,
    NewMessageNotificationComponent,
    RegistrationComponent,
    CommanChatComponent,
    ChatRoomConversationComponent,
    ChatPaneComponent,
    ChangeRoomComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      {enableTracing : true}
    ),
    HttpClientModule,
    BrowserModule,
    FacebookModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatCardModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatTabsModule,
    MatDialogModule,
    MatGridListModule,
    MatProgressSpinnerModule,
    MatSnackBarModule,
    MatBadgeModule,
    MatExpansionModule,
    MatTooltipModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatOptionModule
  ],
  entryComponents : [
    ChangeRoomComponent
  ],
  providers: [
    CookieService,
    SocketProviderService,
    StateStoreService,
    ChatRoomServiceService,
    FriendListService,
    GetUserProfileService,
    LoadMessageService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
