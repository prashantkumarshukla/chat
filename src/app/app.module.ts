import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Route, RouterModule, Routes} from "@angular/router";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { MaterialModule } from "@angular/material";
import { CookieService } from "ngx-cookie-service";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdButtonModule, MdCheckboxModule, MdCardModule, MdMenuModule, MdToolbarModule, MdIconModule, MdTabsModule, MdDialogModule, MdGridListModule } from '@angular/material';

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

const appRoutes:Routes = [
  {
    path : 'login',
    component : LoginPanelComponent
  },
  {
    path : 'register',
    component : LoginPanelComponent
  },
  {
    path : 'chat',
    component : MessageBoxComponent
  },
  {
    path: '',
    redirectTo: '/',
    pathMatch: 'full'
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
    FriendRequestListComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      {enableTracing : true}
    ),
    BrowserModule,
    ModalModule,
    FacebookModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MdButtonModule,
    MdCheckboxModule,
    MdCardModule,
    MdMenuModule,
    MdToolbarModule,
    MdIconModule,
    MdTabsModule,
    MdDialogModule,
    MdGridListModule
  ],
  entryComponents : [
    RegistrationFormComponent,
    UserDetailComponent
  ],
  providers: [ CookieService, SocketProviderService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
