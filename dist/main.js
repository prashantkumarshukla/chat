(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"chatApp\">\n  <router-outlet></router-outlet>\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".no-shadow {\n  box-shadow: none !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9wcmFzaGFudHNodWtsYS9jaGF0L3NyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUlBO0VBQ0UsNEJBQTJCLEVBQzVCIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJGdyZXkgOiAjQ0NDQ0NDO1xuJHdoaXRlIDogI0ZGRkZGRjtcbiRibGFjayA6ICMwMDAwMDA7XG5cbi5uby1zaGFkb3cge1xuICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! socket.io-client */ "./node_modules/socket.io-client/lib/index.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_2__);



var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
        this.socket = socket_io_client__WEBPACK_IMPORTED_MODULE_2__();
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/index.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _login_panel_login_panel_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./login-panel/login-panel.component */ "./src/app/login-panel/login-panel.component.ts");
/* harmony import */ var _modal_modal_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./modal/modal.module */ "./src/app/modal/modal.module.ts");
/* harmony import */ var ngx_facebook__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-facebook */ "./node_modules/ngx-facebook/dist/esm/index.js");
/* harmony import */ var _message_box_message_box_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./message-box/message-box.component */ "./src/app/message-box/message-box.component.ts");
/* harmony import */ var _registration_form_registration_form_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./registration-form/registration-form.component */ "./src/app/registration-form/registration-form.component.ts");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _friend_list_friend_list_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./friend-list/friend-list.component */ "./src/app/friend-list/friend-list.component.ts");
/* harmony import */ var _search_user_search_user_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./search-user/search-user.component */ "./src/app/search-user/search-user.component.ts");
/* harmony import */ var _user_detail_user_detail_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./user-detail/user-detail.component */ "./src/app/user-detail/user-detail.component.ts");
/* harmony import */ var _chat_pane_chat_pane_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./chat-pane/chat-pane.component */ "./src/app/chat-pane/chat-pane.component.ts");
/* harmony import */ var _friend_list_counter_friend_list_counter_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./friend-list-counter/friend-list-counter.component */ "./src/app/friend-list-counter/friend-list-counter.component.ts");
/* harmony import */ var _friend_request_list_friend_request_list_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./friend-request-list/friend-request-list.component */ "./src/app/friend-request-list/friend-request-list.component.ts");
/* harmony import */ var _services_socket_provider_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./services/socket-provider.service */ "./src/app/services/socket-provider.service.ts");
/* harmony import */ var _message_list_message_list_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./message-list/message-list.component */ "./src/app/message-list/message-list.component.ts");
/* harmony import */ var _user_detail_request_action_request_action_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./user-detail/request-action/request-action.component */ "./src/app/user-detail/request-action/request-action.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _services_state_store_service__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./services/state-store.service */ "./src/app/services/state-store.service.ts");
/* harmony import */ var _search_user_user_search_service__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./search-user/user-search.service */ "./src/app/search-user/user-search.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");





























var appRoutes = [
    {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: _login_panel_login_panel_component__WEBPACK_IMPORTED_MODULE_10__["LoginPanelComponent"]
    },
    {
        path: 'register',
        component: _login_panel_login_panel_component__WEBPACK_IMPORTED_MODULE_10__["LoginPanelComponent"]
    },
    {
        path: 'search',
        component: _search_user_search_user_component__WEBPACK_IMPORTED_MODULE_17__["SearchUserComponent"]
    },
    {
        path: 'chat',
        component: _message_box_message_box_component__WEBPACK_IMPORTED_MODULE_13__["MessageBoxComponent"]
    },
    {
        path: 'user',
        component: _user_detail_user_detail_component__WEBPACK_IMPORTED_MODULE_18__["UserDetailComponent"]
    },
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"],
                _login_panel_login_panel_component__WEBPACK_IMPORTED_MODULE_10__["LoginPanelComponent"],
                _message_box_message_box_component__WEBPACK_IMPORTED_MODULE_13__["MessageBoxComponent"],
                _registration_form_registration_form_component__WEBPACK_IMPORTED_MODULE_14__["RegistrationFormComponent"],
                _friend_list_friend_list_component__WEBPACK_IMPORTED_MODULE_16__["FriendListComponent"],
                _search_user_search_user_component__WEBPACK_IMPORTED_MODULE_17__["SearchUserComponent"],
                _user_detail_user_detail_component__WEBPACK_IMPORTED_MODULE_18__["UserDetailComponent"],
                _chat_pane_chat_pane_component__WEBPACK_IMPORTED_MODULE_19__["ChatPaneComponent"],
                _friend_list_counter_friend_list_counter_component__WEBPACK_IMPORTED_MODULE_20__["FriendListCounterComponent"],
                _friend_request_list_friend_request_list_component__WEBPACK_IMPORTED_MODULE_21__["FriendRequestListComponent"],
                _message_list_message_list_component__WEBPACK_IMPORTED_MODULE_23__["MessageListComponent"],
                _user_detail_request_action_request_action_component__WEBPACK_IMPORTED_MODULE_24__["RequestActionComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_25__["HeaderComponent"]
            ],
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(appRoutes, { enableTracing: true }),
                _angular_common_http__WEBPACK_IMPORTED_MODULE_28__["HttpClientModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _modal_modal_module__WEBPACK_IMPORTED_MODULE_11__["ModalModule"],
                ngx_facebook__WEBPACK_IMPORTED_MODULE_12__["FacebookModule"].forRoot(),
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_5__["HttpModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatGridListModule"]
            ],
            entryComponents: [
                _registration_form_registration_form_component__WEBPACK_IMPORTED_MODULE_14__["RegistrationFormComponent"],
                _user_detail_user_detail_component__WEBPACK_IMPORTED_MODULE_18__["UserDetailComponent"]
            ],
            providers: [ngx_cookie_service__WEBPACK_IMPORTED_MODULE_6__["CookieService"], _services_socket_provider_service__WEBPACK_IMPORTED_MODULE_22__["SocketProviderService"], _services_state_store_service__WEBPACK_IMPORTED_MODULE_26__["StateStoreService"], _search_user_user_search_service__WEBPACK_IMPORTED_MODULE_27__["UserSearchService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/chat-pane/chat-pane.component.html":
/*!****************************************************!*\
  !*** ./src/app/chat-pane/chat-pane.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"message-pane\">\n\n  <mat-card class=\"no-shadow\">\n\n    <mat-card-content>\n\n      <div class=\"send-message\">\n\n\n      <div mat-card-avatar class=\"header-image\"></div>\n\n      <mat-card-subtitle class=\"user-message\">Hi Prashant how r you ?</mat-card-subtitle>\n\n      </div>\n\n    </mat-card-content>\n\n    <div class=\"clearfix\"></div>\n\n    <mat-card-content>\n\n      <div class=\"received-message\">\n\n        <div mat-card-avatar class=\"header-image\"></div>\n\n        <mat-card-subtitle class=\"user-message\">Hi Prashant how r you ?</mat-card-subtitle>\n\n      </div>\n\n    </mat-card-content>\n\n    <div class=\"clearfix\"></div>\n\n    <mat-card-content>\n\n      <div class=\"send-message\">\n\n\n        <div mat-card-avatar class=\"header-image\"></div>\n\n        <mat-card-subtitle class=\"user-message\">Hi Prashant how r you ?</mat-card-subtitle>\n\n      </div>\n\n    </mat-card-content>\n\n    <div class=\"clearfix\"></div>\n\n    <mat-card-content>\n\n      <div class=\"received-message\">\n\n        <div mat-card-avatar class=\"header-image\"></div>\n\n        <mat-card-subtitle class=\"user-message\">Hi Prashant how r you ?</mat-card-subtitle>\n\n      </div>\n\n    </mat-card-content>\n\n    <div class=\"clearfix\"></div>\n\n  </mat-card>\n\n</div>\n"

/***/ }),

/***/ "./src/app/chat-pane/chat-pane.component.scss":
/*!****************************************************!*\
  !*** ./src/app/chat-pane/chat-pane.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header-image {\n  background-image: url('men-dummy-pic.jpg');\n  background-size: cover; }\n\n.message-pane .mat-card:not([class*=mat-elevation-z]) {\n  box-shadow: none; }\n\n.message-pane .send-message {\n  display: inline-block;\n  clear: both;\n  background: #00cc00;\n  color: #FFFFFF;\n  padding: 5px 10px;\n  border-radius: 8px;\n  overflow-y: hidden;\n  float: left;\n  margin-bottom: 20px; }\n\n.message-pane .send-message .header-image, .message-pane .send-message .user-message {\n    float: right;\n    overflow-y: hidden;\n    display: block; }\n\n.message-pane .received-message {\n  display: inline-block;\n  clear: both;\n  background: #CCCCCC;\n  padding: 5px 10px;\n  border-radius: 8px;\n  overflow-y: hidden;\n  float: right;\n  margin-bottom: 20px; }\n\n.message-pane .received-message .header-image, .message-pane .received-message .user-message {\n    float: left;\n    overflow-y: hidden;\n    display: block; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9wcmFzaGFudHNodWtsYS9jaGF0L3NyYy9hcHAvY2hhdC1wYW5lL2NoYXQtcGFuZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDJDQUFvRTtFQUNwRSx1QkFBc0IsRUFDdkI7O0FBRUQ7RUFHSSxpQkFBZ0IsRUFDakI7O0FBSkg7RUFPSSxzQkFBcUI7RUFDckIsWUFBVztFQUNYLG9CQUFtQjtFQUNuQixlQUFjO0VBQ2Qsa0JBQWlCO0VBQ2pCLG1CQUFrQjtFQUNsQixtQkFBa0I7RUFDbEIsWUFBVztFQUNYLG9CQUFtQixFQU9wQjs7QUF0Qkg7SUFrQk0sYUFBWTtJQUNaLG1CQUFrQjtJQUNsQixlQUFjLEVBQ2Y7O0FBckJMO0VBd0JJLHNCQUFxQjtFQUNyQixZQUFXO0VBQ1gsb0JBQW1CO0VBQ25CLGtCQUFpQjtFQUNqQixtQkFBa0I7RUFDbEIsbUJBQWtCO0VBQ2xCLGFBQVk7RUFDWixvQkFBbUIsRUFPcEI7O0FBdENIO0lBa0NNLFlBQVc7SUFDWCxtQkFBa0I7SUFDbEIsZUFBYyxFQUNmIiwiZmlsZSI6InNyYy9hcHAvY2hhdC1wYW5lL2NoYXQtcGFuZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkZXItaW1hZ2Uge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi9hc3NldHMvcHJvZmlsZS1waWNzL21lbi1kdW1teS1waWMuanBnXCIpO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xufVxuXG4ubWVzc2FnZS1wYW5lIHtcblxuICAubWF0LWNhcmQ6bm90KFtjbGFzcyo9bWF0LWVsZXZhdGlvbi16XSkge1xuICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gIH1cblxuICAuc2VuZC1tZXNzYWdle1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBjbGVhcjogYm90aDtcbiAgICBiYWNrZ3JvdW5kOiAjMDBjYzAwO1xuICAgIGNvbG9yOiAjRkZGRkZGO1xuICAgIHBhZGRpbmc6IDVweCAxMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICBvdmVyZmxvdy15OiBoaWRkZW47XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcblxuICAgIC5oZWFkZXItaW1hZ2UsLnVzZXItbWVzc2FnZSB7XG4gICAgICBmbG9hdDogcmlnaHQ7XG4gICAgICBvdmVyZmxvdy15OiBoaWRkZW47XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICB9XG4gIH1cbiAgLnJlY2VpdmVkLW1lc3NhZ2Uge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBjbGVhcjogYm90aDtcbiAgICBiYWNrZ3JvdW5kOiAjQ0NDQ0NDO1xuICAgIHBhZGRpbmc6IDVweCAxMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICBvdmVyZmxvdy15OiBoaWRkZW47XG4gICAgZmxvYXQ6IHJpZ2h0O1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG5cbiAgICAuaGVhZGVyLWltYWdlLC51c2VyLW1lc3NhZ2Uge1xuICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICBvdmVyZmxvdy15OiBoaWRkZW47XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICB9XG4gIH1cbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/chat-pane/chat-pane.component.ts":
/*!**************************************************!*\
  !*** ./src/app/chat-pane/chat-pane.component.ts ***!
  \**************************************************/
/*! exports provided: ChatPaneComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatPaneComponent", function() { return ChatPaneComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ChatPaneComponent = /** @class */ (function () {
    function ChatPaneComponent() {
    }
    ChatPaneComponent.prototype.ngOnInit = function () {
    };
    ChatPaneComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-chat-pane',
            template: __webpack_require__(/*! ./chat-pane.component.html */ "./src/app/chat-pane/chat-pane.component.html"),
            styles: [__webpack_require__(/*! ./chat-pane.component.scss */ "./src/app/chat-pane/chat-pane.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ChatPaneComponent);
    return ChatPaneComponent;
}());



/***/ }),

/***/ "./src/app/friend-list-counter/friend-list-counter.component.html":
/*!************************************************************************!*\
  !*** ./src/app/friend-list-counter/friend-list-counter.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p class=\"counter\" *ngIf=\"counter\">{{counter}}</p>\n"

/***/ }),

/***/ "./src/app/friend-list-counter/friend-list-counter.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/friend-list-counter/friend-list-counter.component.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZyaWVuZC1saXN0LWNvdW50ZXIvZnJpZW5kLWxpc3QtY291bnRlci5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/friend-list-counter/friend-list-counter.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/friend-list-counter/friend-list-counter.component.ts ***!
  \**********************************************************************/
/*! exports provided: FriendListCounterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FriendListCounterComponent", function() { return FriendListCounterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../http-service.service */ "./src/app/http-service.service.ts");



var FriendListCounterComponent = /** @class */ (function () {
    function FriendListCounterComponent(httpService) {
        this.httpService = httpService;
    }
    FriendListCounterComponent.prototype.getCounter = function () {
        var _this = this;
        var freshCounter = new Promise(function (resolve, reject) {
            _this.httpService.newFriendRequest.toPromise().then(function (res) {
                _this.counter = res.requestList.length;
                console.log("Request count", _this.counter);
            });
        });
    };
    FriendListCounterComponent.prototype.ngOnInit = function () {
        this.getCounter();
    };
    FriendListCounterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-friend-list-counter',
            template: __webpack_require__(/*! ./friend-list-counter.component.html */ "./src/app/friend-list-counter/friend-list-counter.component.html"),
            styles: [__webpack_require__(/*! ./friend-list-counter.component.scss */ "./src/app/friend-list-counter/friend-list-counter.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_http_service_service__WEBPACK_IMPORTED_MODULE_2__["HttpServiceService"]])
    ], FriendListCounterComponent);
    return FriendListCounterComponent;
}());



/***/ }),

/***/ "./src/app/friend-list/friend-list.component.html":
/*!********************************************************!*\
  !*** ./src/app/friend-list/friend-list.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card *ngFor=\"let item of getResponse\">\n\n  <mat-card-content class=\"user-list\" (click)=\"userDetailOpenDialog(item)\">\n\n    <i class=\"fa fa-user-circle-o fa-2x\" aria-hidden=\"true\"></i>\n\n    <span class='indicator' [ngClass]=\"{'online' : item.isOnline}\"></span>\n\n    <span>{{item.name}}</span>\n\n  </mat-card-content>\n\n</mat-card>\n"

/***/ }),

/***/ "./src/app/friend-list/friend-list.component.scss":
/*!********************************************************!*\
  !*** ./src/app/friend-list/friend-list.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZyaWVuZC1saXN0L2ZyaWVuZC1saXN0LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/friend-list/friend-list.component.ts":
/*!******************************************************!*\
  !*** ./src/app/friend-list/friend-list.component.ts ***!
  \******************************************************/
/*! exports provided: FriendListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FriendListComponent", function() { return FriendListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _http_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../http-service.service */ "./src/app/http-service.service.ts");
/* harmony import */ var _user_detail_user_detail_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../user-detail/user-detail.component */ "./src/app/user-detail/user-detail.component.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/index.js");
/* harmony import */ var _services_socket_provider_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/socket-provider.service */ "./src/app/services/socket-provider.service.ts");








var FriendListComponent = /** @class */ (function () {
    function FriendListComponent(httpService, cookieFeatureService, socketProviderService, dialog) {
        this.httpService = httpService;
        this.cookieFeatureService = cookieFeatureService;
        this.socketProviderService = socketProviderService;
        this.dialog = dialog;
    }
    FriendListComponent.prototype.retrieveFriendList = function () {
        var _this = this;
        this.userId = { "userId": this.cookieFeatureService.get("user") };
        var newList = new Promise(function (resolve, reject) {
            _this.httpService.friendList(_this.userId).subscribe(function (res) {
                //this.friendList = res.friendList;
                console.log("Friend List:", _this.friendList);
            });
        });
    };
    FriendListComponent.prototype.getFriendList = function () {
        var userId = this.cookieFeatureService.get("user");
        this.socketProviderService.getFriendList(userId);
    };
    FriendListComponent.prototype.userDetailOpenDialog = function (userInfo) {
        console.log("User Detail", userInfo);
        //let allDetails = {"chat" : this.getMessage,"userDetail" : userInfo}
        var dialogRef = this.dialog.open(_user_detail_user_detail_component__WEBPACK_IMPORTED_MODULE_4__["UserDetailComponent"], {
            width: '87%',
            data: userInfo
        });
    };
    FriendListComponent.prototype.ngOnInit = function () {
        //this.retrieveFriendList();
        var _this = this;
        this.getFriendList();
        this.socketProviderService.serverInteraction().subscribe(function (list) {
            _this.checkResponse = list;
            if (_this.checkResponse.friends) {
                _this.getResponse = _this.checkResponse.friends;
                console.log("Friend List", _this.getResponse);
            }
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], FriendListComponent.prototype, "getMessage", void 0);
    FriendListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-friend-list',
            template: __webpack_require__(/*! ./friend-list.component.html */ "./src/app/friend-list/friend-list.component.html"),
            providers: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTabGroup"], _http_service_service__WEBPACK_IMPORTED_MODULE_3__["HttpServiceService"]],
            styles: [__webpack_require__(/*! ./friend-list.component.scss */ "./src/app/friend-list/friend-list.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_http_service_service__WEBPACK_IMPORTED_MODULE_3__["HttpServiceService"],
            ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__["CookieService"],
            _services_socket_provider_service__WEBPACK_IMPORTED_MODULE_6__["SocketProviderService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]])
    ], FriendListComponent);
    return FriendListComponent;
}());



/***/ }),

/***/ "./src/app/friend-request-list/friend-request-list.component.html":
/*!************************************************************************!*\
  !*** ./src/app/friend-request-list/friend-request-list.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card *ngFor=\"let item of friendRequest\" (click)=\"userDetailOpenDialog(item.detail)\">\n\n  <mat-card-content class=\"user-list\">\n\n    <i class=\"fa fa-user-circle-o fa-2x\" aria-hidden=\"true\"></i>\n\n    <!--<span class='indicator' [ngClass]=\"{'online' : item.isOnline}\"></span>-->\n\n    <span>{{item.detail.fName}} {{item.detail.lName}}</span>\n\n\n  </mat-card-content>\n\n</mat-card>\n"

/***/ }),

/***/ "./src/app/friend-request-list/friend-request-list.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/friend-request-list/friend-request-list.component.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZyaWVuZC1yZXF1ZXN0LWxpc3QvZnJpZW5kLXJlcXVlc3QtbGlzdC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/friend-request-list/friend-request-list.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/friend-request-list/friend-request-list.component.ts ***!
  \**********************************************************************/
/*! exports provided: FriendRequestListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FriendRequestListComponent", function() { return FriendRequestListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _user_detail_user_detail_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../user-detail/user-detail.component */ "./src/app/user-detail/user-detail.component.ts");
/* harmony import */ var _http_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../http-service.service */ "./src/app/http-service.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/index.js");






var FriendRequestListComponent = /** @class */ (function () {
    function FriendRequestListComponent(httpService, cookieFeatureService, dialog) {
        this.httpService = httpService;
        this.cookieFeatureService = cookieFeatureService;
        this.dialog = dialog;
    }
    FriendRequestListComponent.prototype.retrieveFriendList = function () {
        var _this = this;
        this.userId = { "userId": this.cookieFeatureService.get("user") };
        var newList = new Promise(function (resolve, reject) {
            _this.httpService.newRequestList(_this.userId).subscribe().then(function (res) {
                _this.friendRequest = res.requestList;
                _this.conitinue = true;
                console.log("Friend List:", _this.friendRequest);
            });
        });
    };
    FriendRequestListComponent.prototype.userDetailOpenDialog = function (userInfo) {
        console.log("User Detail", userInfo);
        var dialogRef = this.dialog.open(_user_detail_user_detail_component__WEBPACK_IMPORTED_MODULE_2__["UserDetailComponent"], {
            width: '87%',
            data: userInfo
        });
    };
    FriendRequestListComponent.prototype.ngOnInit = function () {
        this.conitinue = false;
        this.retrieveFriendList();
    };
    FriendRequestListComponent.prototype.ngOnChanges = function () {
        if (this.conitinue == false) {
            this.retrieveFriendList();
        }
    };
    FriendRequestListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-friend-request-list',
            template: __webpack_require__(/*! ./friend-request-list.component.html */ "./src/app/friend-request-list/friend-request-list.component.html"),
            providers: [],
            styles: [__webpack_require__(/*! ./friend-request-list.component.scss */ "./src/app/friend-request-list/friend-request-list.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_http_service_service__WEBPACK_IMPORTED_MODULE_3__["HttpServiceService"],
            ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__["CookieService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialog"]])
    ], FriendRequestListComponent);
    return FriendRequestListComponent;
}());



/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"primary\">\n  <span>WebChat</span>\n  <span class=\"spacer\"></span>\n  <button mat-icon-button [matMenuTriggerFor]=\"menu\">\n    <mat-icon>more_vert</mat-icon>\n  </button>\n  <mat-menu #menu=\"matMenu\">\n    <button md-menu-item>\n      <mat-icon>fingerprint</mat-icon>\n      <span>Logout</span>\n    </button>\n    <button md-menu-item>\n      <mat-icon>fingerprint</mat-icon>\n      <span>My profile</span>\n    </button>\n  </mat-menu>\n</mat-toolbar>\n<mat-tab-group>\n  <mat-tab>\n    <ng-template mat-tab-label>\n      <i class=\"material-icons\">\n        chat\n      </i>\n    </ng-template>\n  </mat-tab>\n  <mat-tab>\n    <ng-template mat-tab-label>\n      <i class=\"material-icons\">\n        account_circle\n      </i>\n    </ng-template>\n  </mat-tab>\n  <mat-tab>\n    <ng-template mat-tab-label>\n      <i class=\"material-icons\" (click)=\"goToSearch()\">search</i>\n    </ng-template>\n  </mat-tab>\n  <mat-tab>\n    <ng-template mat-tab-label>\n      <i class=\"material-icons\">supervisor_account</i>\n      <span class=\"counter\">\n        <app-friend-list-counter></app-friend-list-counter>\n      </span>\n    </ng-template>\n    <app-friend-request-list></app-friend-request-list>\n  </mat-tab>\n</mat-tab-group>\n"

/***/ }),

/***/ "./src/app/header/header.component.scss":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _http_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../http-service.service */ "./src/app/http-service.service.ts");






var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(router) {
        this.router = router;
    }
    HeaderComponent.prototype.goToSearch = function () {
        this.router.navigate(['/search']);
    };
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            providers: [
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTabGroup"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTab"],
                _http_service_service__WEBPACK_IMPORTED_MODULE_4__["HttpServiceService"]
            ],
            styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/header/header.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/http-service.service.ts":
/*!*****************************************!*\
  !*** ./src/app/http-service.service.ts ***!
  \*****************************************/
/*! exports provided: HttpServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpServiceService", function() { return HttpServiceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var HttpServiceService = /** @class */ (function () {
    function HttpServiceService(http) {
        this.http = http;
        this.serverDomain = '/';
    }
    HttpServiceService.prototype.createUser = function (data) {
        var url = this.serverDomain + 'register';
        return this.retrieveData(url, data);
    };
    HttpServiceService.prototype.loginUser = function (data) {
        var url = this.serverDomain + 'login';
        return this.retrieveData(url, data);
    };
    HttpServiceService.prototype.searchUser = function (data) {
        var url = this.serverDomain + 'search';
        return this.retrieveData(url, data);
    };
    HttpServiceService.prototype.requestAction = function (data) {
        var url = this.serverDomain + "confirm-friend-request";
        return this.retrieveData(url, data);
    };
    HttpServiceService.prototype.friendRequest = function (data) {
        var url = this.serverDomain + "send-friend-request";
        return this.retrieveData(url, data);
    };
    HttpServiceService.prototype.newRequestList = function (data) {
        var url = this.serverDomain + "friend-request";
        this.newFriendRequest = this.retrieveData(url, data);
        return this.newFriendRequest;
    };
    HttpServiceService.prototype.friendList = function (data) {
        var url = this.serverDomain + "friend-list";
        return this.retrieveData(url, data);
    };
    HttpServiceService.prototype.retrieveData = function (url, data) {
        return this.http.post(url, data, { observe: 'response' });
    };
    HttpServiceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], HttpServiceService);
    return HttpServiceService;
}());



/***/ }),

/***/ "./src/app/login-panel/create-user.service.ts":
/*!****************************************************!*\
  !*** ./src/app/login-panel/create-user.service.ts ***!
  \****************************************************/
/*! exports provided: CreateUserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateUserService", function() { return CreateUserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var CreateUserService = /** @class */ (function () {
    function CreateUserService(http) {
        this.http = http;
    }
    CreateUserService.prototype.createUser = function (data) {
        var url = '/register';
        return this.http.post(url, data, { observe: 'response' });
        //return this.http.post(url, data).subscribe((res:Response) => res.json());
    };
    CreateUserService.prototype.loginUser = function (data) {
        var url = '/login';
        return this.http.post(url, data, { observe: 'response' });
        //return this.http.post(url,data).subscribe((res:Response) => res.json());
    };
    CreateUserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], CreateUserService);
    return CreateUserService;
}());



/***/ }),

/***/ "./src/app/login-panel/login-panel.component.html":
/*!********************************************************!*\
  !*** ./src/app/login-panel/login-panel.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"primary\">\n  <span>WebChat</span>\n</mat-toolbar>\n\n\n\n  <div class=\"row m-t-6-percentage\">\n\n    <div class=\"col-lg-4 col-md-4 col-sm-6 col-xs-12 col-centered\">\n\n      <div class=\"panel\">\n\n        <div class=\"panel-heading\"><h1>User Login</h1></div>\n\n        <div class=\"panel-body\">\n\n          <form [formGroup]=\"loginform\" (ngSubmit)=\"uerLogin(loginform.value)\">\n            <div class=\"form-group\">\n              <label>Enter User ID</label>\n\n              <input class=\"form-control\" formControlName=\"userName\" type=\"text\" />\n\n              <div class=\"alert\" *ngIf=\"!loginform.controls['userName'].valid && loginform.controls['userName'].touched\">\n                {{ userNameAlert }}\n              </div>\n            </div>\n            <div class=\"form-group\">\n\n              <label>Password</label>\n\n              <input class=\"form-control\" formControlName=\"userPassword\" type=\"password\" />\n\n              <div class=\"alert\" *ngIf=\"!loginform.controls['userPassword'].valid && loginform.controls['userPassword'].touched\">\n                {{ pwdAlert }}\n              </div>\n            </div>\n\n            <button class=\"btn btn-primary btn-lg btn-block\" type=\"submit\">\n              LOGIN <i class=\"fa fa-sign-in\"></i>\n            </button>\n\n            <div class=\"text-center\">\n              <hr />\n              <p class=\"or\"><span>or</span></p>\n\n              <button (click)='modalService.open(modalId)' class=\"btn btn-dark btn-lg btn-block\" type=\"button\">Register yourself !</button>\n\n              <!--<button mat-raised-button (click)=\"openDialog()\">Register yourself!</button>-->\n\n            </div>\n\n          </form>\n\n        </div>\n      </div>\n\n\n    </div>\n\n  </div>\n\n\n<app-modal [modalTitle]=\"'Sign Up'\" [blocking]='false' [modalId]='modalId'>\n\n  <div *ngIf=\"!statusResponse; then formBlock else elseResponseBlock\"></div>\n\n  <ng-template #formBlock>\n    <p>It’s free and always will be.</p>\n    <form [formGroup]=\"rForm\" (ngSubmit)=\"registerUser(rForm.value)\">\n      <div class=\"row\">\n        <div class=\"col-lg-6 col-md-6 col-sm-6 col-xs-12 form-group\">\n          <input type=\"text\" class=\"form-control\" formControlName=\"fName\" placeholder=\"First Name\" />\n\n          <div class=\"alert\" *ngIf=\"!rForm.controls['fName'].valid && rForm.controls['fName'].touched\">\n            {{ fNameAlert }}\n          </div>\n        </div>\n        <div class=\"col-lg-6 col-md-6 col-sm-6 col-xs-12 form-group\">\n          <input type=\"text\" class=\"form-control\" formControlName=\"lName\" placeholder=\"Last Name\" />\n        </div>\n        <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12 form-group\">\n          <input type=\"text\" class=\"form-control\" formControlName=\"email\" placeholder=\"Email\" />\n\n          <div class=\"alert\" *ngIf=\"!rForm.controls['email'].valid && rForm.controls['email'].touched\">\n            {{ emailAlert }}\n          </div>\n        </div>\n        <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12 form-group\">\n          <input type=\"password\" class=\"form-control\" formControlName=\"userPwd\" placeholder=\"New Password\" />\n          <div class=\"alert\" *ngIf=\"!rForm.controls['userPwd'].valid && rForm.controls['userPwd'].touched\">\n            {{ pwdAlert }}\n          </div>\n        </div>\n        <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12 form-group\">\n          <label>Birthday</label>\n          <div class=\"row\">\n            <div class=\"col-lg-4 col-md-4 col-sm-4 col-xs-12 form-group\">\n              <select formControlName=\"month\" class=\"form-control\">\n                <option value=\"0\">Month</option>\n                <option value=\"1\">Jan</option>\n                <option value=\"2\">Feb</option>\n                <option value=\"3\">Mar</option>\n                <option value=\"4\">Apr</option>\n                <option value=\"5\">May</option>\n                <option value=\"6\">Jun</option>\n                <option value=\"7\">Jul</option>\n                <option value=\"8\" selected=\"1\">Aug</option>\n                <option value=\"9\">Sep</option>\n                <option value=\"10\">Oct</option>\n                <option value=\"11\">Nov</option>\n                <option value=\"12\">Dec</option>\n              </select>\n            </div>\n            <div class=\"col-lg-2 col-md-2 col-sm-2 col-xs-12 form-group\">\n              <select formControlName=\"day\" class=\"form-control\">\n                <option value=\"0\">Day</option>\n                <option value=\"1\">1</option>\n                <option value=\"2\">2</option>\n                <option value=\"3\">3</option>\n                <option value=\"4\">4</option>\n                <option value=\"5\">5</option>\n                <option value=\"6\">6</option>\n                <option value=\"7\">7</option>\n                <option value=\"8\">8</option>\n                <option value=\"9\">9</option>\n                <option value=\"10\">10</option>\n                <option value=\"11\">11</option>\n                <option value=\"12\">12</option>\n                <option value=\"13\">13</option>\n                <option value=\"14\">14</option>\n                <option value=\"15\">15</option>\n                <option value=\"16\">16</option>\n                <option value=\"17\">17</option>\n                <option value=\"18\">18</option>\n                <option value=\"19\">19</option>\n                <option value=\"20\">20</option>\n                <option value=\"21\">21</option>\n                <option value=\"22\">22</option>\n                <option value=\"23\">23</option>\n                <option value=\"24\" selected=\"1\">24</option>\n                <option value=\"25\">25</option>\n                <option value=\"26\">26</option>\n                <option value=\"27\">27</option>\n                <option value=\"28\">28</option>\n                <option value=\"29\">29</option>\n                <option value=\"30\">30</option>\n                <option value=\"31\">31</option>\n              </select>\n            </div>\n            <div class=\"col-lg-3 col-md-3 col-sm-3 col-xs-12 form-group\">\n              <select formControlName=\"year\" class=\"form-control\">\n                <option value=\"0\">Year</option>\n                <option value=\"2017\">2017</option>\n                <option value=\"2016\">2016</option>\n                <option value=\"2015\">2015</option>\n                <option value=\"2014\">2014</option>\n                <option value=\"2013\">2013</option>\n                <option value=\"2012\">2012</option>\n                <option value=\"2011\">2011</option>\n                <option value=\"2010\">2010</option>\n                <option value=\"2009\">2009</option>\n                <option value=\"2008\">2008</option>\n                <option value=\"2007\">2007</option>\n                <option value=\"2006\">2006</option>\n                <option value=\"2005\">2005</option>\n                <option value=\"2004\">2004</option>\n                <option value=\"2003\">2003</option>\n                <option value=\"2002\">2002</option>\n                <option value=\"2001\">2001</option>\n                <option value=\"2000\">2000</option>\n                <option value=\"1999\" selected=\"1\">1999</option>\n                <option value=\"1998\">1998</option>\n                <option value=\"1997\">1997</option>\n                <option value=\"1996\">1996</option>\n                <option value=\"1995\">1995</option>\n                <option value=\"1994\">1994</option>\n                <option value=\"1993\">1993</option>\n                <option value=\"1992\">1992</option>\n                <option value=\"1991\">1991</option>\n                <option value=\"1990\">1990</option>\n                <option value=\"1989\">1989</option>\n                <option value=\"1988\">1988</option>\n                <option value=\"1987\">1987</option>\n                <option value=\"1986\">1986</option>\n                <option value=\"1985\">1985</option>\n                <option value=\"1984\">1984</option>\n                <option value=\"1983\">1983</option>\n                <option value=\"1982\">1982</option>\n                <option value=\"1981\">1981</option>\n                <option value=\"1980\">1980</option>\n                <option value=\"1979\">1979</option>\n                <option value=\"1978\">1978</option>\n                <option value=\"1977\">1977</option>\n                <option value=\"1976\">1976</option>\n                <option value=\"1975\">1975</option>\n                <option value=\"1974\">1974</option>\n                <option value=\"1973\">1973</option>\n                <option value=\"1972\">1972</option>\n                <option value=\"1971\">1971</option>\n                <option value=\"1970\">1970</option>\n                <option value=\"1969\">1969</option>\n                <option value=\"1968\">1968</option>\n                <option value=\"1967\">1967</option>\n                <option value=\"1966\">1966</option>\n                <option value=\"1965\">1965</option>\n                <option value=\"1964\">1964</option>\n                <option value=\"1963\">1963</option>\n                <option value=\"1962\">1962</option>\n                <option value=\"1961\">1961</option>\n                <option value=\"1960\">1960</option>\n                <option value=\"1959\">1959</option>\n                <option value=\"1958\">1958</option>\n                <option value=\"1957\">1957</option>\n                <option value=\"1956\">1956</option>\n                <option value=\"1955\">1955</option>\n                <option value=\"1954\">1954</option>\n                <option value=\"1953\">1953</option>\n                <option value=\"1952\">1952</option>\n                <option value=\"1951\">1951</option>\n                <option value=\"1950\">1950</option>\n                <option value=\"1949\">1949</option>\n                <option value=\"1948\">1948</option>\n                <option value=\"1947\">1947</option>\n                <option value=\"1946\">1946</option>\n                <option value=\"1945\">1945</option>\n                <option value=\"1944\">1944</option>\n                <option value=\"1943\">1943</option>\n                <option value=\"1942\">1942</option>\n                <option value=\"1941\">1941</option>\n                <option value=\"1940\">1940</option>\n                <option value=\"1939\">1939</option>\n                <option value=\"1938\">1938</option>\n                <option value=\"1937\">1937</option>\n                <option value=\"1936\">1936</option>\n                <option value=\"1935\">1935</option>\n                <option value=\"1934\">1934</option>\n                <option value=\"1933\">1933</option>\n                <option value=\"1932\">1932</option>\n                <option value=\"1931\">1931</option>\n                <option value=\"1930\">1930</option>\n                <option value=\"1929\">1929</option>\n                <option value=\"1928\">1928</option>\n                <option value=\"1927\">1927</option>\n                <option value=\"1926\">1926</option>\n                <option value=\"1925\">1925</option>\n                <option value=\"1924\">1924</option>\n                <option value=\"1923\">1923</option>\n                <option value=\"1922\">1922</option>\n                <option value=\"1921\">1921</option>\n                <option value=\"1920\">1920</option>\n                <option value=\"1919\">1919</option>\n                <option value=\"1918\">1918</option>\n                <option value=\"1917\">1917</option>\n                <option value=\"1916\">1916</option>\n                <option value=\"1915\">1915</option>\n                <option value=\"1914\">1914</option>\n                <option value=\"1913\">1913</option>\n                <option value=\"1912\">1912</option>\n                <option value=\"1911\">1911</option>\n                <option value=\"1910\">1910</option>\n                <option value=\"1909\">1909</option>\n                <option value=\"1908\">1908</option>\n                <option value=\"1907\">1907</option>\n                <option value=\"1906\">1906</option>\n                <option value=\"1905\">1905</option>\n              </select>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12\">\n          <div class=\"form-group\">\n            <label class=\"radio-inline\"><input type=\"radio\" formControlName=\"gender\" value=\"Male\" />Male</label>\n            <label class=\"radio-inline\"><input type=\"radio\" formControlName=\"gender\" value=\"Female\" />Female</label>\n          </div>\n          <div class=\"alert\" *ngIf=\"!rForm.controls['gender'].valid && rForm.controls['gender'].touched\">\n            {{ genderAlert }}\n          </div>\n          <div>\n            <p class=\"font-v-small\">By clicking Create Account, you agree to our Terms and that you have read our Data Policy, including our Cookie Use.</p>\n          </div>\n        </div>\n        <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12\">\n          <button class=\"btn btn-secondary btn-lg btn-block\" type=\"submit\">\n            Register <i class=\"fa fa-user-plus\" aria-hidden=\"true\"></i>\n          </button>\n        </div>\n        <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12 border border-left-0 border-right-0 border-bottom-0 m-t-4-percentage\">\n          <h3 class=\"text-center m-t-2-percentage\">OR</h3>\n          <button class=\"btn btn-primary btn-lg btn-block\" (click)=\"login()\" type=\"button\">\n            <i class=\"fa fa-facebook\" aria-hidden=\"true\"></i> Sign up using Facebook\n          </button>\n        </div>\n      </div>\n    </form>\n  </ng-template>\n\n  <ng-template #elseResponseBlock>\n    <div class=\"alert-success\">\n      <p class=\"p-all-25\">{{statusResponse.info}}</p>\n    </div>\n  </ng-template>\n</app-modal>\n\n"

/***/ }),

/***/ "./src/app/login-panel/login-panel.component.scss":
/*!********************************************************!*\
  !*** ./src/app/login-panel/login-panel.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".col-centered {\n  margin: 0 auto; }\n\n.panel {\n  border: 1px solid #CCCCCC;\n  border-radius: 5px;\n  background: #FFFFFF;\n  padding-bottom: 20px; }\n\n.panel .panel-heading {\n    background: #F2F2F2;\n    padding: 20px;\n    border-bottom: 1px solid #CCCCCC; }\n\n.panel .panel-heading h1 {\n      font-size: medium;\n      display: block;\n      text-align: center;\n      text-transform: uppercase; }\n\n.panel .panel-body {\n    padding: 50px; }\n\n@media screen and (max-width: 723px) {\n      .panel .panel-body {\n        padding: 10px; } }\n\n.panel .panel-body input {\n      border: none !important;\n      border-bottom: 1px solid #00cc00 !important;\n      border-radius: 0px;\n      padding: 0; }\n\n.panel .panel-body .or {\n      position: absolute;\n      margin-top: -30px;\n      text-align: center;\n      width: 100%; }\n\n.panel .panel-body .or span {\n        display: inline-block;\n        background: #FFF;\n        width: 50px;\n        text-align: center; }\n\n.panel .panel-body .alert {\n      padding: 0 !important;\n      color: #fc2c00;\n      border-radius: 0px;\n      background: #FFF; }\n\n.panel .panel-footer {\n    padding: 0 50px; }\n\n@media screen and (max-width: 723px) {\n      .panel .panel-footer {\n        padding: 10px; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9wcmFzaGFudHNodWtsYS9jaGF0L3NyYy9hcHAvbG9naW4tcGFuZWwvbG9naW4tcGFuZWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFjLEVBQ2Y7O0FBQ0Q7RUFDRSwwQkFBd0I7RUFHeEIsbUJBQWtCO0VBQ2xCLG9CQUFtQjtFQUNuQixxQkFBb0IsRUFnRHJCOztBQXRERDtJQVFJLG9CQUFtQjtJQUNuQixjQUFhO0lBQ2IsaUNBQWdDLEVBT2pDOztBQWpCSDtNQVlNLGtCQUFpQjtNQUNqQixlQUFjO01BQ2QsbUJBQWtCO01BQ2xCLDBCQUF5QixFQUMxQjs7QUFoQkw7SUFtQkksY0FBWSxFQTRCYjs7QUEzQkM7TUFwQko7UUFxQk0sY0FDRixFQXlCRCxFQUFBOztBQS9DSDtNQXdCTSx3QkFBdUI7TUFDdkIsNENBQTJDO01BQzNDLG1CQUFrQjtNQUNsQixXQUNGLEVBQUM7O0FBNUJMO01BOEJNLG1CQUFrQjtNQUNsQixrQkFBaUI7TUFDakIsbUJBQWtCO01BQ2xCLFlBQVcsRUFPWjs7QUF4Q0w7UUFtQ1Esc0JBQXFCO1FBQ3JCLGlCQUFnQjtRQUNoQixZQUFXO1FBQ1gsbUJBQWtCLEVBQ25COztBQXZDUDtNQTBDTSxzQkFBcUI7TUFDckIsZUFBYztNQUNkLG1CQUFrQjtNQUNsQixpQkFBZ0IsRUFDakI7O0FBOUNMO0lBaURJLGdCQUFlLEVBSWhCOztBQUhDO01BbERKO1FBbURNLGNBQ0YsRUFDRCxFQUFBIiwiZmlsZSI6InNyYy9hcHAvbG9naW4tcGFuZWwvbG9naW4tcGFuZWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29sLWNlbnRlcmVkIHtcbiAgbWFyZ2luOiAwIGF1dG87XG59XG4ucGFuZWwge1xuICBib3JkZXI6MXB4IHNvbGlkICNDQ0NDQ0M7XG4gIC13ZWJraXQtYm9yZGVyLXJhZGl1czogNXB4O1xuICAtbW96LWJvcmRlci1yYWRpdXM6IDVweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBiYWNrZ3JvdW5kOiAjRkZGRkZGO1xuICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbiAgLnBhbmVsLWhlYWRpbmcge1xuICAgIGJhY2tncm91bmQ6ICNGMkYyRjI7XG4gICAgcGFkZGluZzogMjBweDtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI0NDQ0NDQztcbiAgICBoMSB7XG4gICAgICBmb250LXNpemU6IG1lZGl1bTtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICB9XG4gIH1cbiAgLnBhbmVsLWJvZHkge1xuICAgIHBhZGRpbmc6NTBweDtcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3MjNweCkge1xuICAgICAgcGFkZGluZzoxMHB4XG4gICAgfVxuICAgIGlucHV0IHtcbiAgICAgIGJvcmRlcjogbm9uZSAhaW1wb3J0YW50O1xuICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMwMGNjMDAgIWltcG9ydGFudDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDBweDtcbiAgICAgIHBhZGRpbmc6MFxuICAgIH1cbiAgICAub3Ige1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgbWFyZ2luLXRvcDogLTMwcHg7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIHNwYW4ge1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIGJhY2tncm91bmQ6ICNGRkY7XG4gICAgICAgIHdpZHRoOiA1MHB4O1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICB9XG4gICAgfVxuICAgIC5hbGVydCB7XG4gICAgICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XG4gICAgICBjb2xvcjogI2ZjMmMwMDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDBweDtcbiAgICAgIGJhY2tncm91bmQ6ICNGRkY7XG4gICAgfVxuICB9XG4gIC5wYW5lbC1mb290ZXIge1xuICAgIHBhZGRpbmc6IDAgNTBweDtcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3MjNweCkge1xuICAgICAgcGFkZGluZzoxMHB4XG4gICAgfVxuICB9XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/login-panel/login-panel.component.ts":
/*!******************************************************!*\
  !*** ./src/app/login-panel/login-panel.component.ts ***!
  \******************************************************/
/*! exports provided: LoginPanelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPanelComponent", function() { return LoginPanelComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _modal_modal_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../modal/modal.service */ "./src/app/modal/modal.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_facebook__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-facebook */ "./node_modules/ngx-facebook/dist/esm/index.js");
/* harmony import */ var _login_panel_create_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../login-panel/create-user.service */ "./src/app/login-panel/create-user.service.ts");
/* harmony import */ var _registration_form_registration_form_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../registration-form/registration-form.component */ "./src/app/registration-form/registration-form.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/index.js");
/* harmony import */ var _services_socket_provider_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../services/socket-provider.service */ "./src/app/services/socket-provider.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");















var LoginPanelComponent = /** @class */ (function () {
    function LoginPanelComponent(modalService, fb, formBuilder, loginFormBuilder, createUserService, router, dialog, cookieFeatureService, socketProviderService) {
        this.modalService = modalService;
        this.fb = fb;
        this.formBuilder = formBuilder;
        this.loginFormBuilder = loginFormBuilder;
        this.createUserService = createUserService;
        this.router = router;
        this.dialog = dialog;
        this.cookieFeatureService = cookieFeatureService;
        this.socketProviderService = socketProviderService;
        this.modalId = 'hoplaModal';
        this.dialogResult = "";
        this.userNameAlert = 'User ID cannot be empty';
        this.fNameAlert = 'First name cannot be empty';
        this.emailAlert = 'Email cannot be empty';
        this.pwdAlert = 'Password cannot be empty';
        this.genderAlert = 'Please chooose the gender';
        this.unsubscribe$ = new rxjs__WEBPACK_IMPORTED_MODULE_11__["Subject"]();
        //login form initiate
        this.loginform = loginFormBuilder.group({
            'userName': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            'userPassword': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
        });
        //Registration Form initiate
        this.rForm = formBuilder.group({
            'fName': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            'lName': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            'email': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            'userPwd': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            'month': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            'day': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            'year': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            'gender': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            'validate': ''
        });
        //Facebook initiate
        var initParams = {
            appId: '828011440700346',
            xfbml: true,
            version: 'v2.8'
        };
        fb.init(initParams);
    }
    LoginPanelComponent.prototype.login = function () {
        var _this = this;
        this.fb.login()
            .then(function (res) {
            console.log('Logged in', res);
            _this.getProfile();
            _this.getFriends();
        })
            .catch(this.handleError);
    };
    LoginPanelComponent.prototype.getLoginStatus = function () {
        this.fb.getLoginStatus()
            .then(console.log.bind(console))
            .catch(console.error.bind(console));
    };
    LoginPanelComponent.prototype.getProfile = function () {
        this.fb.api('/me')
            .then(function (res) {
            console.log('Got the users profile', res);
        })
            .catch(this.handleError);
    };
    LoginPanelComponent.prototype.getFriends = function () {
        this.fb.api('/me/friends')
            .then(function (res) {
            console.log('Got the users friends', res);
        })
            .catch(this.handleError);
    };
    LoginPanelComponent.prototype.handleError = function (error) {
        console.error('Error processing action', error);
    };
    LoginPanelComponent.prototype.registerUser = function (post) {
        var _this = this;
        var dob = post.month + "/" + post.day + "/" + post.year;
        post.birthday = dob;
        post.id = new Date().valueOf().toString();
        post.type = "normal";
        delete post['month'];
        delete post['day'];
        delete post['year'];
        delete post['validate'];
        this.createUserService.createUser(post).subscribe(function (res) { return _this.statusResponse = res; });
    };
    LoginPanelComponent.prototype.uerLogin = function (data) {
        this.socketProviderService.userLogin(data);
    };
    LoginPanelComponent.prototype.openDialog = function () {
        var _this = this;
        var dialogRef = this.dialog.open(_registration_form_registration_form_component__WEBPACK_IMPORTED_MODULE_7__["RegistrationFormComponent"], {
            width: '87%',
            data: 'This text is passed into the dialog'
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log("Dialog closed: " + result);
            _this.dialogResult = result;
        });
    };
    LoginPanelComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loginSubscription = this.socketProviderService.serverInteraction()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["takeUntil"])(this.unsubscribe$))
            .subscribe(function (status) {
            console.log("Status is:", status);
            _this.statusResponse = status;
            if (_this.statusResponse.success) {
                _this.cookieFeatureService.set("user", _this.statusResponse.userId);
                _this.router.navigate(['/chat']);
            }
        });
    };
    LoginPanelComponent.prototype.ngOnDestroy = function () {
        //this.unsubscribe$.next(true);
        //this.loginSubscription.unsubscribe();
    };
    LoginPanelComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login-panel',
            template: __webpack_require__(/*! ./login-panel.component.html */ "./src/app/login-panel/login-panel.component.html"),
            providers: [
                _login_panel_create_user_service__WEBPACK_IMPORTED_MODULE_6__["CreateUserService"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTabGroup"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTab"]
            ],
            styles: [__webpack_require__(/*! ./login-panel.component.scss */ "./src/app/login-panel/login-panel.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_modal_modal_service__WEBPACK_IMPORTED_MODULE_3__["ModalService"],
            ngx_facebook__WEBPACK_IMPORTED_MODULE_5__["FacebookService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
            _login_panel_create_user_service__WEBPACK_IMPORTED_MODULE_6__["CreateUserService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"],
            ngx_cookie_service__WEBPACK_IMPORTED_MODULE_9__["CookieService"],
            _services_socket_provider_service__WEBPACK_IMPORTED_MODULE_10__["SocketProviderService"]])
    ], LoginPanelComponent);
    return LoginPanelComponent;
}());



/***/ }),

/***/ "./src/app/message-box/message-box.component.html":
/*!********************************************************!*\
  !*** ./src/app/message-box/message-box.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<app-friend-list [getMessage]=\"chatDetail\"></app-friend-list>\n"

/***/ }),

/***/ "./src/app/message-box/message-box.component.scss":
/*!********************************************************!*\
  !*** ./src/app/message-box/message-box.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".black-tile-layer {\n  background: #000000; }\n\n.friend-list {\n  padding: 10px 0; }\n\n.friend-list ul {\n    list-style: none;\n    padding: 0; }\n\n.friend-list ul li {\n      border-bottom: 1px dotted #CCCCCC;\n      padding: 10px 0;\n      display: block;\n      cursor: pointer; }\n\n.white-bg {\n  background: #FFFFFF; }\n\n.friend-details {\n  display: block;\n  height: 50px; }\n\n.message-panel {\n  display: block;\n  height: 500px;\n  overflow-y: auto;\n  border: 1px solid #CCCCCC; }\n\n.chat-form-panel {\n  padding: 20px 0 0 0; }\n\n.profile-pic {\n  background: #CCCCCC;\n  border-radius: 100%;\n  padding: 22px; }\n\n@media screen and (max-width: 768px) {\n  .sm-hidden {\n    display: none; } }\n\n@media screen and (max-width: 320px) {\n  .xs-hidden {\n    display: none; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9wcmFzaGFudHNodWtsYS9jaGF0L3NyYy9hcHAvbWVzc2FnZS1ib3gvbWVzc2FnZS1ib3guY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBS0E7RUFDRSxvQkFKYyxFQUtmOztBQUNEO0VBQ0UsZ0JBQWMsRUFXZjs7QUFaRDtJQUdJLGlCQUFnQjtJQUNoQixXQUFVLEVBT1g7O0FBWEg7TUFNTSxrQ0FkUztNQWVULGdCQUFjO01BQ2QsZUFBYztNQUNkLGdCQUFlLEVBQ2hCOztBQUdMO0VBQ0Usb0JBckJjLEVBc0JmOztBQUVEO0VBRUUsZUFBYztFQUNkLGFBQVksRUFDYjs7QUFDRDtFQUVFLGVBQWM7RUFDZCxjQUFZO0VBQ1osaUJBQWdCO0VBQ2hCLDBCQW5DYSxFQW9DZDs7QUFDRDtFQUVFLG9CQUFrQixFQUNuQjs7QUFFRDtFQUNFLG9CQTNDYTtFQTRDYixvQkFBbUI7RUFDbkIsY0FBYSxFQUNkOztBQUVDO0VBREY7SUFFSSxjQUFhLEVBRWhCLEVBQUE7O0FBRUM7RUFERjtJQUVJLGNBQWEsRUFFaEIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL21lc3NhZ2UtYm94L21lc3NhZ2UtYm94LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJGdyZXkgOiAjQ0NDQ0NDO1xuJHdoaXRlIDogI0ZGRkZGRjtcbiRibGFjayA6ICMwMDAwMDA7XG4kZ3JlZW4gOiAjMDBjYzAwO1xuXG4uYmxhY2stdGlsZS1sYXllciB7XG4gIGJhY2tncm91bmQ6ICRibGFjaztcbn1cbi5mcmllbmQtbGlzdCB7XG4gIHBhZGRpbmc6MTBweCAwO1xuICB1bCB7XG4gICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGxpIHtcbiAgICAgIGJvcmRlci1ib3R0b206IDFweCBkb3R0ZWQgJGdyZXk7XG4gICAgICBwYWRkaW5nOjEwcHggMDtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIH1cbiAgfVxufVxuLndoaXRlLWJne1xuICBiYWNrZ3JvdW5kOiAkd2hpdGU7XG59XG5cbi5mcmllbmQtZGV0YWlsc1xue1xuICBkaXNwbGF5OiBibG9jaztcbiAgaGVpZ2h0OiA1MHB4O1xufVxuLm1lc3NhZ2UtcGFuZWxcbntcbiAgZGlzcGxheTogYmxvY2s7XG4gIGhlaWdodDo1MDBweDtcbiAgb3ZlcmZsb3cteTogYXV0bztcbiAgYm9yZGVyOiAxcHggc29saWQgJGdyZXk7XG59XG4uY2hhdC1mb3JtLXBhbmVsXG57XG4gIHBhZGRpbmc6MjBweCAwIDAgMDtcbn1cblxuLnByb2ZpbGUtcGljIHtcbiAgYmFja2dyb3VuZDogJGdyZXk7XG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gIHBhZGRpbmc6IDIycHg7XG59XG4uc20taGlkZGVue1xuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn1cbi54cy1oaWRkZW57XG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDMyMHB4KSB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxufVxuIl19 */"

/***/ }),

/***/ "./src/app/message-box/message-box.component.ts":
/*!******************************************************!*\
  !*** ./src/app/message-box/message-box.component.ts ***!
  \******************************************************/
/*! exports provided: MessageBoxComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageBoxComponent", function() { return MessageBoxComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _http_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../http-service.service */ "./src/app/http-service.service.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/index.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _services_socket_provider_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/socket-provider.service */ "./src/app/services/socket-provider.service.ts");








var MessageBoxComponent = /** @class */ (function () {
    function MessageBoxComponent(formBuilder, httpService, cookieFeatureService, socketProviderService) {
        this.formBuilder = formBuilder;
        this.httpService = httpService;
        this.cookieFeatureService = cookieFeatureService;
        this.socketProviderService = socketProviderService;
        this.searchform = formBuilder.group({
            'searchField': ''
        });
    }
    MessageBoxComponent.prototype.getFriendList = function () {
        var userId = this.cookieFeatureService.get("user");
        this.socketProviderService.getFriendList(userId);
    };
    MessageBoxComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.socketProviderService.serverInteraction().subscribe(function (chats) {
            _this.getServerResponse = chats;
            console.log("Response", _this.getServerResponse);
            var getUserId = _this.getServerResponse.userId;
            if (getUserId) {
                var buildChat = {
                    "userDetail": _this.getServerResponse.userInfo,
                    "isFriend": _this.getServerResponse.isFriend,
                    "isOnline": _this.getServerResponse.isOnline,
                    "conversations": {
                        "message": _this.getServerResponse.message,
                        "requestType": _this.getServerResponse.requestType
                    }
                };
                if (!_this.chatDetail) {
                    _this.chatDetail = [{
                            "userId": getUserId,
                            "isFriend": _this.getServerResponse.isFriend,
                            "isOnline": _this.getServerResponse.isOnline,
                            "detail": [buildChat.conversations],
                            "userInfo": buildChat.userDetail
                        }];
                }
                else {
                    var getStatus = false;
                    for (var i = 0; i < _this.chatDetail.length; i++) {
                        if (getUserId == _this.chatDetail[i].userId) {
                            _this.chatDetail[i].detail.push(buildChat.conversations);
                            getStatus = true;
                            break;
                        }
                    }
                    if (!getStatus) {
                        var buildData = {
                            "userId": getUserId,
                            "isFriend": _this.getServerResponse.isFriend,
                            "isOnline": _this.getServerResponse.isOnline,
                            "detail": [buildChat.conversations],
                            "userInfo": buildChat.userDetail
                        };
                        _this.chatDetail.push(buildData);
                    }
                }
                _this.socketProviderService.updateData({ "conversations": _this.chatDetail });
            }
            if (_this.getServerResponse.typingMsg) {
                _this.socketProviderService.updateTypingStatus(_this.getServerResponse);
            }
        });
    };
    MessageBoxComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-message-box',
            template: __webpack_require__(/*! ./message-box.component.html */ "./src/app/message-box/message-box.component.html"),
            providers: [
                _http_service_service__WEBPACK_IMPORTED_MODULE_3__["HttpServiceService"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatTabGroup"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatTab"]
            ],
            styles: [__webpack_require__(/*! ./message-box.component.scss */ "./src/app/message-box/message-box.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _http_service_service__WEBPACK_IMPORTED_MODULE_3__["HttpServiceService"],
            ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__["CookieService"],
            _services_socket_provider_service__WEBPACK_IMPORTED_MODULE_6__["SocketProviderService"]])
    ], MessageBoxComponent);
    return MessageBoxComponent;
}());



/***/ }),

/***/ "./src/app/message-list/message-list.component.html":
/*!**********************************************************!*\
  !*** ./src/app/message-list/message-list.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<mat-card *ngFor=\"let item of getUserList\">\n\n  <mat-card-content class=\"user-list\" (click)=\"userDetailOpenDialog(item)\">\n\n    <i class=\"fa fa-user-circle-o fa-2x\" aria-hidden=\"true\"></i>\n\n    <span class='indicator' [ngClass]=\"{'online' : item.isOnline}\"></span>\n\n    <span>{{item.name}}</span>\n\n    <div *ngIf=\"item.latestConversation.requestType == 'recieved'; then recievedBlock else sentBlock\"></div>\n\n    <ng-template #recievedBlock>\n\n      <p class=\"latestMsg\">{{item.latestConversation.message}}</p>\n\n    </ng-template>\n\n    <ng-template #sentBlock>\n\n      <p class=\"latestMsg youTag\">\n\n        {{item.latestConversation.message}}\n\n      </p>\n\n    </ng-template>\n\n  </mat-card-content>\n\n</mat-card>\n"

/***/ }),

/***/ "./src/app/message-list/message-list.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/message-list/message-list.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "p.latestMsg {\n  display: block;\n  font-size: 0.75rem;\n  color: #CCCCCC;\n  margin-left: 32px; }\n\n.youTag:before {\n  content: \"me: \";\n  font-size: 0.75rem;\n  font-style: italic;\n  color: #CCCCCC; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9wcmFzaGFudHNodWtsYS9jaGF0L3NyYy9hcHAvbWVzc2FnZS1saXN0L21lc3NhZ2UtbGlzdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUVFLGVBQWM7RUFDZCxtQkFBa0I7RUFDbEIsZUFOYTtFQU9iLGtCQUFpQixFQUVsQjs7QUFFRDtFQUlJLGdCQUFlO0VBQ2YsbUJBQWtCO0VBQ2xCLG1CQUFrQjtFQUNsQixlQWxCVyxFQW1CWiIsImZpbGUiOiJzcmMvYXBwL21lc3NhZ2UtbGlzdC9tZXNzYWdlLWxpc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkZ3JleSA6ICNDQ0NDQ0M7XG5cbnAubGF0ZXN0TXNnIHtcblxuICBkaXNwbGF5OiBibG9jaztcbiAgZm9udC1zaXplOiAwLjc1cmVtO1xuICBjb2xvcjogJGdyZXk7XG4gIG1hcmdpbi1sZWZ0OiAzMnB4O1xuXG59XG5cbi55b3VUYWcge1xuXG4gICY6YmVmb3JlIHtcblxuICAgIGNvbnRlbnQ6IFwibWU6IFwiO1xuICAgIGZvbnQtc2l6ZTogMC43NXJlbTtcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XG4gICAgY29sb3I6ICRncmV5O1xuICB9XG5cbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/message-list/message-list.component.ts":
/*!********************************************************!*\
  !*** ./src/app/message-list/message-list.component.ts ***!
  \********************************************************/
/*! exports provided: MessageListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageListComponent", function() { return MessageListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _user_detail_user_detail_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../user-detail/user-detail.component */ "./src/app/user-detail/user-detail.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _services_socket_provider_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/socket-provider.service */ "./src/app/services/socket-provider.service.ts");





var MessageListComponent = /** @class */ (function () {
    function MessageListComponent(socketProviderService, dialog) {
        this.socketProviderService = socketProviderService;
        this.dialog = dialog;
    }
    MessageListComponent.prototype.userDetailOpenDialog = function (userInfo) {
        var dialogRef = this.dialog.open(_user_detail_user_detail_component__WEBPACK_IMPORTED_MODULE_2__["UserDetailComponent"], {
            width: '87%',
            data: userInfo
        });
    };
    MessageListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.socketProviderService.newDataSource.subscribe(function (message) {
            var getMessages = message.conversations;
            var buildList = [];
            if (getMessages) {
                for (var i = 0; i < getMessages.length; i++) {
                    if (getMessages[i].userId) {
                        var conversationLength = getMessages[i].detail.length - 1;
                        var lastConversation = getMessages[i].detail[conversationLength];
                        var userDetail = {
                            "name": getMessages[i].userInfo.userName,
                            "friendId": getMessages[i].userId,
                            "latestConversation": lastConversation
                        };
                        buildList.push(userDetail);
                    }
                }
                _this.getUserList = buildList;
                console.log("Get Messages", getMessages);
                console.log("User list", _this.getUserList);
            }
        });
    };
    MessageListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-message-list',
            template: __webpack_require__(/*! ./message-list.component.html */ "./src/app/message-list/message-list.component.html"),
            styles: [__webpack_require__(/*! ./message-list.component.scss */ "./src/app/message-list/message-list.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_socket_provider_service__WEBPACK_IMPORTED_MODULE_4__["SocketProviderService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"]])
    ], MessageListComponent);
    return MessageListComponent;
}());



/***/ }),

/***/ "./src/app/modal/modal.component.html":
/*!********************************************!*\
  !*** ./src/app/modal/modal.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [ngClass]=\"{'closed': !isOpen}\">\n  <div class=\"modal-overlay\" (click)=\"close(true)\"></div>\n\n  <div class=\"modal\">\n    <div *ngIf=\"modalTitle\">\n      <span class=\"right-align p-r-20 \" (click)=\"close(true)\">\n        <i class=\"fa fa-times\" aria-hidden=\"true\"></i>\n      </span>\n    </div>\n    <div class=\"title p-all-25\" *ngIf=\"modalTitle\">\n      <span class=\"title-text\">{{ modalTitle }}</span>\n    </div>\n\n    <div class=\"body\">\n      <ng-content></ng-content>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/modal/modal.component.scss":
/*!********************************************!*\
  !*** ./src/app/modal/modal.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".modal-overlay {\n  background-color: rgba(0, 0, 0, 0.4);\n  bottom: 0;\n  left: 0;\n  position: fixed;\n  right: 0;\n  top: 0;\n  z-index: 1000; }\n\n.closed .modal {\n  top: -50%;\n  display: none; }\n\n.closed .modal-overlay {\n  display: none; }\n\n.modal {\n  box-shadow: 0 12px 15px 0 rgba(0, 0, 0, 0.22), 0 17px 20px 0 rgba(0, 0, 0, 0.12);\n  background-color: white;\n  left: calc(50% - 300px);\n  max-height: calc(100% - 10em);\n  overflow-y: auto;\n  position: fixed;\n  top: 5em;\n  z-index: 1100;\n  transition: all .5s ease;\n  display: block; }\n\n@media screen and (min-width: 320px) {\n    .modal {\n      width: 80%;\n      left: 10px; } }\n\n@media screen and (min-width: 764px) {\n    .modal {\n      width: 600px; } }\n\n.modal .title {\n    text-align: center;\n    color: #000000;\n    line-height: 40px;\n    font-size: 2em;\n    border-bottom: 1px dotted #CCCCCC; }\n\n.modal .right-align {\n    position: absolute;\n    right: 5px; }\n\n.modal .right-align, .modal .right-align i {\n      line-height: 40px; }\n\n.modal .right-align:hover {\n      cursor: pointer;\n      -webkit-transform: scale(1.1);\n              transform: scale(1.1); }\n\n.modal .body {\n    padding: 1.2em; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9wcmFzaGFudHNodWtsYS9jaGF0L3NyYy9hcHAvbW9kYWwvbW9kYWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxxQ0FBbUM7RUFDbkMsVUFBUztFQUNULFFBQU87RUFDUCxnQkFBZTtFQUNmLFNBQVE7RUFDUixPQUFNO0VBQ04sY0FBYSxFQUNkOztBQUVEO0VBRUksVUFBUztFQUNULGNBQWEsRUFDZDs7QUFKSDtFQU1JLGNBQWEsRUFDZDs7QUFHSDtFQUNFLGlGQUE4RTtFQUU5RSx3QkFBdUI7RUFDdkIsd0JBQXVCO0VBQ3ZCLDhCQUE2QjtFQUM3QixpQkFBZ0I7RUFDaEIsZ0JBQWU7RUFDZixTQUFRO0VBRVIsY0FBYTtFQUNiLHlCQUF3QjtFQUN4QixlQUFjLEVBZ0NmOztBQTlCQztJQWRGO01BZUksV0FBVTtNQUNWLFdBQVMsRUE0QlosRUFBQTs7QUExQkM7SUFsQkY7TUFtQkksYUFBWSxFQXlCZixFQUFBOztBQTVDRDtJQXNCSSxtQkFBa0I7SUFDbEIsZUFBYztJQUNkLGtCQUFpQjtJQUNqQixlQUFjO0lBQ2Qsa0NBQWlDLEVBQ2xDOztBQTNCSDtJQTZCSSxtQkFBa0I7SUFDbEIsV0FBVSxFQVNYOztBQXZDSDtNQWdDTSxrQkFBaUIsRUFDbEI7O0FBakNMO01Bb0NNLGdCQUFlO01BQ2YsOEJBQXFCO2NBQXJCLHNCQUFxQixFQUN0Qjs7QUF0Q0w7SUEwQ0ksZUFBYyxFQUNmIiwiZmlsZSI6InNyYy9hcHAvbW9kYWwvbW9kYWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubW9kYWwtb3ZlcmxheSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgLjQpO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgcmlnaHQ6IDA7XG4gIHRvcDogMDtcbiAgei1pbmRleDogMTAwMDtcbn1cblxuLmNsb3NlZCB7XG4gIC5tb2RhbHtcbiAgICB0b3A6IC01MCU7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuICAubW9kYWwtb3ZlcmxheXtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59XG5cbi5tb2RhbCB7XG4gIGJveC1zaGFkb3c6IDAgMTJweCAxNXB4IDAgcmdiYSgwLCAwLCAwLCAuMjIpLCAwIDE3cHggMjBweCAwIHJnYmEoMCwgMCwgMCwgLjEyKTtcblxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgbGVmdDogY2FsYyg1MCUgLSAzMDBweCk7XG4gIG1heC1oZWlnaHQ6IGNhbGMoMTAwJSAtIDEwZW0pO1xuICBvdmVyZmxvdy15OiBhdXRvO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogNWVtO1xuXG4gIHotaW5kZXg6IDExMDA7XG4gIHRyYW5zaXRpb246IGFsbCAuNXMgZWFzZTtcbiAgZGlzcGxheTogYmxvY2s7XG5cbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMzIwcHgpe1xuICAgIHdpZHRoOiA4MCU7XG4gICAgbGVmdDoxMHB4O1xuICB9XG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2NHB4KXtcbiAgICB3aWR0aDogNjAwcHg7XG4gIH1cbiAgLnRpdGxlIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgY29sb3I6ICMwMDAwMDA7XG4gICAgbGluZS1oZWlnaHQ6IDQwcHg7XG4gICAgZm9udC1zaXplOiAyZW07XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IGRvdHRlZCAjQ0NDQ0NDO1xuICB9XG4gIC5yaWdodC1hbGlnbiB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiA1cHg7XG4gICAgJiwgaXtcbiAgICAgIGxpbmUtaGVpZ2h0OiA0MHB4O1xuICAgIH1cblxuICAgICY6aG92ZXJ7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XG4gICAgfVxuICB9XG5cbiAgLmJvZHl7XG4gICAgcGFkZGluZzogMS4yZW07XG4gIH1cbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/modal/modal.component.ts":
/*!******************************************!*\
  !*** ./src/app/modal/modal.component.ts ***!
  \******************************************/
/*! exports provided: ModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalComponent", function() { return ModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _modal_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modal.service */ "./src/app/modal/modal.service.ts");



var ModalComponent = /** @class */ (function () {
    function ModalComponent(modalService) {
        this.modalService = modalService;
        this.blocking = false;
        this.isOpen = false;
    }
    ModalComponent.prototype.onMouseEnter = function (event) {
        this.keyup(event);
    };
    ModalComponent.prototype.ngOnInit = function () {
        this.modalService.registerModal(this);
    };
    ModalComponent.prototype.close = function (checkBlocking) {
        if (checkBlocking === void 0) { checkBlocking = false; }
        this.modalService.close(this.modalId, checkBlocking);
    };
    ModalComponent.prototype.keyup = function (event) {
        if (event.keyCode === 27) {
            this.modalService.close(this.modalId, true);
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], ModalComponent.prototype, "modalId", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], ModalComponent.prototype, "modalTitle", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ModalComponent.prototype, "blocking", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('keyup'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], ModalComponent.prototype, "onMouseEnter", null);
    ModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-modal',
            template: __webpack_require__(/*! ./modal.component.html */ "./src/app/modal/modal.component.html"),
            styles: [__webpack_require__(/*! ./modal.component.scss */ "./src/app/modal/modal.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_modal_service__WEBPACK_IMPORTED_MODULE_2__["ModalService"]])
    ], ModalComponent);
    return ModalComponent;
}());



/***/ }),

/***/ "./src/app/modal/modal.module.ts":
/*!***************************************!*\
  !*** ./src/app/modal/modal.module.ts ***!
  \***************************************/
/*! exports provided: ModalModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalModule", function() { return ModalModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _modal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modal.component */ "./src/app/modal/modal.component.ts");
/* harmony import */ var _modal_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modal.service */ "./src/app/modal/modal.service.ts");





var ModalModule = /** @class */ (function () {
    function ModalModule() {
    }
    ModalModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
            ],
            declarations: [
                _modal_component__WEBPACK_IMPORTED_MODULE_3__["ModalComponent"]
            ],
            providers: [_modal_service__WEBPACK_IMPORTED_MODULE_4__["ModalService"]],
            exports: [_modal_component__WEBPACK_IMPORTED_MODULE_3__["ModalComponent"]]
        })
    ], ModalModule);
    return ModalModule;
}());



/***/ }),

/***/ "./src/app/modal/modal.service.ts":
/*!****************************************!*\
  !*** ./src/app/modal/modal.service.ts ***!
  \****************************************/
/*! exports provided: ModalService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalService", function() { return ModalService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ModalService = /** @class */ (function () {
    function ModalService() {
        this.modals = [];
    }
    ModalService.prototype.registerModal = function (newModal) {
        var modal = this.findModal(newModal.modalId);
        // Delete existing to replace the modal
        if (modal) {
            this.modals.splice(this.modals.indexOf(modal));
        }
        this.modals.push(newModal);
    };
    ModalService.prototype.open = function (modalId) {
        var modal = this.findModal(modalId);
        if (modal) {
            modal.isOpen = true;
        }
    };
    ModalService.prototype.close = function (modalId, checkBlocking) {
        if (checkBlocking === void 0) { checkBlocking = false; }
        var modal = this.findModal(modalId);
        if (modal) {
            if (checkBlocking && modal.blocking) {
                return;
            }
            modal.isOpen = false;
        }
    };
    ModalService.prototype.findModal = function (modalId) {
        for (var _i = 0, _a = this.modals; _i < _a.length; _i++) {
            var modal = _a[_i];
            if (modal.modalId === modalId) {
                return modal;
            }
        }
        return null;
    };
    ModalService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ModalService);
    return ModalService;
}());



/***/ }),

/***/ "./src/app/registration-form/registration-form.component.html":
/*!********************************************************************!*\
  !*** ./src/app/registration-form/registration-form.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = " <mat-dialog-actions>\n    <button mat-raised-button (click)=\"closeConfirm()\">X</button>\n  </mat-dialog-actions>\n  <h2 my-dialog-title>Sign Up</h2>\n  <hr />\n\n  <mat-dialog-content>\n    <div *ngIf=\"!statusResponse; then formBlock else elseResponseBlock\"></div>\n\n    <ng-template #formBlock>\n      <p>It’s free and always will be.</p>\n      <hr />\n      <form [formGroup]=\"rForm\" (ngSubmit)=\"registerUser(rForm.value)\">\n\n        <div class=\"row registrationForm\">\n          <div class=\"col-lg-6 col-md-6 col-sm-6 col-xs-12 form-group\">\n            <input type=\"text\" class=\"form-control\" formControlName=\"fName\" placeholder=\"First Name\" />\n\n            <div class=\"alert\" *ngIf=\"!rForm.controls['fName'].valid && rForm.controls['fName'].touched\">\n              {{ fNameAlert }}\n            </div>\n          </div>\n          <div class=\"col-lg-6 col-md-6 col-sm-6 col-xs-12 form-group\">\n            <input type=\"text\" class=\"form-control\" formControlName=\"lName\" placeholder=\"Last Name\" />\n          </div>\n          <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12 form-group\">\n            <input type=\"text\" class=\"form-control\" formControlName=\"email\" placeholder=\"Email\" />\n\n            <div class=\"alert\" *ngIf=\"!rForm.controls['email'].valid && rForm.controls['email'].touched\">\n              {{ emailAlert }}\n            </div>\n          </div>\n          <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12 form-group\">\n            <input type=\"password\" class=\"form-control\" formControlName=\"userPwd\" placeholder=\"New Password\" />\n            <div class=\"alert\" *ngIf=\"!rForm.controls['userPwd'].valid && rForm.controls['userPwd'].touched\">\n              {{ pwdAlert }}\n            </div>\n          </div>\n\n          <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12 form-group\">\n            <hr />\n\n            <h3>Birthday</h3>\n            <div class=\"row\">\n              <div class=\"col-lg-4 col-md-4 col-sm-4 col-xs-12 form-group\">\n                <label>Month</label>\n                <select formControlName=\"month\" class=\"form-control\">\n                  <option value=\"0\" selected>Month</option>\n                  <option value=\"1\">Jan</option>\n                  <option value=\"2\">Feb</option>\n                  <option value=\"3\">Mar</option>\n                  <option value=\"4\">Apr</option>\n                  <option value=\"5\">May</option>\n                  <option value=\"6\">Jun</option>\n                  <option value=\"7\">Jul</option>\n                  <option value=\"8\" selected=\"1\">Aug</option>\n                  <option value=\"9\">Sep</option>\n                  <option value=\"10\">Oct</option>\n                  <option value=\"11\">Nov</option>\n                  <option value=\"12\">Dec</option>\n                </select>\n              </div>\n              <div class=\"col-lg-2 col-md-2 col-sm-2 col-xs-12 form-group\">\n                <label>Date</label>\n                <select formControlName=\"day\" class=\"form-control\">\n                  <option value=\"0\" selected>Day</option>\n                  <option value=\"1\">1</option>\n                  <option value=\"2\">2</option>\n                  <option value=\"3\">3</option>\n                  <option value=\"4\">4</option>\n                  <option value=\"5\">5</option>\n                  <option value=\"6\">6</option>\n                  <option value=\"7\">7</option>\n                  <option value=\"8\">8</option>\n                  <option value=\"9\">9</option>\n                  <option value=\"10\">10</option>\n                  <option value=\"11\">11</option>\n                  <option value=\"12\">12</option>\n                  <option value=\"13\">13</option>\n                  <option value=\"14\">14</option>\n                  <option value=\"15\">15</option>\n                  <option value=\"16\">16</option>\n                  <option value=\"17\">17</option>\n                  <option value=\"18\">18</option>\n                  <option value=\"19\">19</option>\n                  <option value=\"20\">20</option>\n                  <option value=\"21\">21</option>\n                  <option value=\"22\">22</option>\n                  <option value=\"23\">23</option>\n                  <option value=\"24\" selected=\"1\">24</option>\n                  <option value=\"25\">25</option>\n                  <option value=\"26\">26</option>\n                  <option value=\"27\">27</option>\n                  <option value=\"28\">28</option>\n                  <option value=\"29\">29</option>\n                  <option value=\"30\">30</option>\n                  <option value=\"31\">31</option>\n                </select>\n              </div>\n              <div class=\"col-lg-3 col-md-3 col-sm-3 col-xs-12 form-group\">\n                <label>Year</label>\n                <select formControlName=\"year\" class=\"form-control\">\n                  <option value=\"0\" selected>Year</option>\n                  <option value=\"2017\">2017</option>\n                  <option value=\"2016\">2016</option>\n                  <option value=\"2015\">2015</option>\n                  <option value=\"2014\">2014</option>\n                  <option value=\"2013\">2013</option>\n                  <option value=\"2012\">2012</option>\n                  <option value=\"2011\">2011</option>\n                  <option value=\"2010\">2010</option>\n                  <option value=\"2009\">2009</option>\n                  <option value=\"2008\">2008</option>\n                  <option value=\"2007\">2007</option>\n                  <option value=\"2006\">2006</option>\n                  <option value=\"2005\">2005</option>\n                  <option value=\"2004\">2004</option>\n                  <option value=\"2003\">2003</option>\n                  <option value=\"2002\">2002</option>\n                  <option value=\"2001\">2001</option>\n                  <option value=\"2000\">2000</option>\n                  <option value=\"1999\">1999</option>\n                  <option value=\"1998\">1998</option>\n                  <option value=\"1997\">1997</option>\n                  <option value=\"1996\">1996</option>\n                  <option value=\"1995\">1995</option>\n                  <option value=\"1994\">1994</option>\n                  <option value=\"1993\">1993</option>\n                  <option value=\"1992\">1992</option>\n                  <option value=\"1991\">1991</option>\n                  <option value=\"1990\">1990</option>\n                  <option value=\"1989\">1989</option>\n                  <option value=\"1988\">1988</option>\n                  <option value=\"1987\">1987</option>\n                  <option value=\"1986\">1986</option>\n                  <option value=\"1985\">1985</option>\n                  <option value=\"1984\">1984</option>\n                  <option value=\"1983\">1983</option>\n                  <option value=\"1982\">1982</option>\n                  <option value=\"1981\">1981</option>\n                  <option value=\"1980\">1980</option>\n                  <option value=\"1979\">1979</option>\n                  <option value=\"1978\">1978</option>\n                  <option value=\"1977\">1977</option>\n                  <option value=\"1976\">1976</option>\n                  <option value=\"1975\">1975</option>\n                  <option value=\"1974\">1974</option>\n                  <option value=\"1973\">1973</option>\n                  <option value=\"1972\">1972</option>\n                  <option value=\"1971\">1971</option>\n                  <option value=\"1970\">1970</option>\n                  <option value=\"1969\">1969</option>\n                  <option value=\"1968\">1968</option>\n                  <option value=\"1967\">1967</option>\n                  <option value=\"1966\">1966</option>\n                  <option value=\"1965\">1965</option>\n                  <option value=\"1964\">1964</option>\n                  <option value=\"1963\">1963</option>\n                  <option value=\"1962\">1962</option>\n                  <option value=\"1961\">1961</option>\n                  <option value=\"1960\">1960</option>\n                </select>\n              </div>\n            </div>\n          </div>\n          <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12\">\n\n            <div class=\"form-group\">\n              <label class=\"radio-inline\"><input type=\"radio\" formControlName=\"gender\" value=\"Male\" />Male</label>\n              <label class=\"radio-inline\"><input type=\"radio\" formControlName=\"gender\" value=\"Female\" />Female</label>\n            </div>\n            <div class=\"alert\" *ngIf=\"!rForm.controls['gender'].valid && rForm.controls['gender'].touched\">\n              {{ genderAlert }}\n            </div>\n            <div>\n              <p class=\"font-v-small\">By clicking Create Account, you agree to our Terms and that you have read our Data Policy, including our Cookie Use.</p>\n            </div>\n          </div>\n          <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12\">\n            <button class=\"btn btn-secondary btn-lg btn-block\" type=\"submit\">\n              Register <i class=\"fa fa-user-plus\" aria-hidden=\"true\"></i>\n            </button>\n          </div>\n\n        </div>\n\n      </form>\n    </ng-template>\n\n    <ng-template #elseResponseBlock>\n      <div class=\"alert-success\">\n        <p class=\"p-all-25\">{{responseInfo}}</p>\n      </div>\n    </ng-template>\n  </mat-dialog-content>\n\n"

/***/ }),

/***/ "./src/app/registration-form/registration-form.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/registration-form/registration-form.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".registrationForm input[type=text] {\n  border: none;\n  border-bottom: 1px solid #CCC;\n  border-radius: 0; }\n\n.registrationForm input[type=password] {\n  border: none;\n  border-bottom: 1px solid #CCC;\n  border-radius: 0; }\n\n.registrationForm input[type=email] {\n  border: none;\n  border-bottom: 1px solid #CCC;\n  border-radius: 0; }\n\n.registrationForm select {\n  border: none;\n  border-bottom: 1px solid #CCC;\n  border-radius: 0; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9wcmFzaGFudHNodWtsYS9jaGF0L3NyYy9hcHAvcmVnaXN0cmF0aW9uLWZvcm0vcmVnaXN0cmF0aW9uLWZvcm0uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFSSxhQUFZO0VBQ1osOEJBQTZCO0VBQzdCLGlCQUFnQixFQUNqQjs7QUFMSDtFQU9JLGFBQVk7RUFDWiw4QkFBNkI7RUFDN0IsaUJBQWdCLEVBQ2pCOztBQVZIO0VBWUksYUFBWTtFQUNaLDhCQUE2QjtFQUM3QixpQkFBZ0IsRUFDakI7O0FBZkg7RUFpQkksYUFBWTtFQUNaLDhCQUE2QjtFQUM3QixpQkFBZ0IsRUFDakIiLCJmaWxlIjoic3JjL2FwcC9yZWdpc3RyYXRpb24tZm9ybS9yZWdpc3RyYXRpb24tZm9ybS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yZWdpc3RyYXRpb25Gb3JtIHtcbiAgaW5wdXRbdHlwZT10ZXh0XSB7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjQ0NDO1xuICAgIGJvcmRlci1yYWRpdXM6IDA7XG4gIH1cbiAgaW5wdXRbdHlwZT1wYXNzd29yZF0ge1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI0NDQztcbiAgICBib3JkZXItcmFkaXVzOiAwO1xuICB9XG4gIGlucHV0W3R5cGU9ZW1haWxdIHtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNDQ0M7XG4gICAgYm9yZGVyLXJhZGl1czogMDtcbiAgfVxuICBzZWxlY3Qge1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI0NDQztcbiAgICBib3JkZXItcmFkaXVzOiAwO1xuICB9XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/registration-form/registration-form.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/registration-form/registration-form.component.ts ***!
  \******************************************************************/
/*! exports provided: RegistrationFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrationFormComponent", function() { return RegistrationFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _login_panel_create_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../login-panel/create-user.service */ "./src/app/login-panel/create-user.service.ts");







var RegistrationFormComponent = /** @class */ (function () {
    function RegistrationFormComponent(thisDialogRef, data, formBuilder, createUserService) {
        this.thisDialogRef = thisDialogRef;
        this.data = data;
        this.formBuilder = formBuilder;
        this.createUserService = createUserService;
        this.userNameAlert = 'User ID cannot be empty';
        this.fNameAlert = 'First name cannot be empty';
        this.emailAlert = 'Email cannot be empty';
        this.pwdAlert = 'Password cannot be empty';
        this.genderAlert = 'Please chooose the gender';
        this.rForm = formBuilder.group({
            'fName': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            'lName': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            'email': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            'userPwd': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            'month': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            'day': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            'year': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            'gender': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            'validate': ''
        });
    }
    RegistrationFormComponent.prototype.ngOnInit = function () {
    };
    RegistrationFormComponent.prototype.closeConfirm = function () {
        this.thisDialogRef.close("Closed");
    };
    RegistrationFormComponent.prototype.registerUser = function (post) {
        var _this = this;
        var dob = post.month + "/" + post.day + "/" + post.year;
        post.birthday = dob;
        post.id = new Date().valueOf().toString();
        post.type = "normal";
        delete post['month'];
        delete post['day'];
        delete post['year'];
        delete post['validate'];
        //console.log('you submitted value:', post);
        this.createUserService.createUser(post).subscribe(function (res) { return _this.getResponse = res; });
        //console.log("Response", this.getResponse);
        this.statusResponse = this.getResponse.status;
        this.responseInfo = this.getResponse.info;
    };
    RegistrationFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-registration-form',
            template: __webpack_require__(/*! ./registration-form.component.html */ "./src/app/registration-form/registration-form.component.html"),
            providers: [_login_panel_create_user_service__WEBPACK_IMPORTED_MODULE_4__["CreateUserService"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatGridList"]],
            styles: [__webpack_require__(/*! ./registration-form.component.scss */ "./src/app/registration-form/registration-form.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"], String, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _login_panel_create_user_service__WEBPACK_IMPORTED_MODULE_4__["CreateUserService"]])
    ], RegistrationFormComponent);
    return RegistrationFormComponent;
}());



/***/ }),

/***/ "./src/app/search-user/search-user.component.html":
/*!********************************************************!*\
  !*** ./src/app/search-user/search-user.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<mat-card>\n  <mat-card-content>\n    <form [formGroup]=\"searchform\"\n          (ngSubmit)=\"searchUser(searchform.value)\">\n      <div class=\"form-group\">\n        <div class=\"input-group\">\n          <input class=\"form-control search-field\"\n                 formControlName=\"searchField\"\n                 placeholder=\"Type to search\"\n                 type=\"text\"/>\n        </div>\n      </div>\n    </form>\n  </mat-card-content>\n</mat-card>\n<mat-card *ngFor=\"let item of searchResponse\"\n         (click)=\"userDetail(item)\">\n  <mat-card-content class=\"user-list\">\n    <i class=\"fa fa-user-circle-o fa-2x\"\n       aria-hidden=\"true\">\n    </i>\n    <span class='indicator'\n          [ngClass]=\"{'online' : item.isOnline}\">\n    </span>\n    <span>\n      {{item.name}}\n    </span>\n  </mat-card-content>\n</mat-card>\n"

/***/ }),

/***/ "./src/app/search-user/search-user.component.scss":
/*!********************************************************!*\
  !*** ./src/app/search-user/search-user.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".search-field {\n  border: none;\n  border-bottom: 1px solid #CCCCCC;\n  border-radius: 0; }\n\n.user-list .indicator {\n  border-radius: 5px;\n  padding: 6px;\n  width: 12px;\n  display: block;\n  background: #CCCCCC;\n  position: absolute;\n  z-index: 1;\n  bottom: 22px; }\n\n.user-list .online {\n  background: #00cc00; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9wcmFzaGFudHNodWtsYS9jaGF0L3NyYy9hcHAvc2VhcmNoLXVzZXIvc2VhcmNoLXVzZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBS0E7RUFDRSxhQUFXO0VBQ1gsaUNBQWdDO0VBQ2hDLGlCQUFnQixFQUNqQjs7QUFFRDtFQUdJLG1CQUFrQjtFQUNsQixhQUFZO0VBQ1osWUFBVztFQUNYLGVBQWM7RUFDZCxvQkFsQlc7RUFtQlgsbUJBQWtCO0VBQ2xCLFdBQVU7RUFDVixhQUFZLEVBQ2I7O0FBWEg7RUFhSSxvQkFyQlksRUFzQmIiLCJmaWxlIjoic3JjL2FwcC9zZWFyY2gtdXNlci9zZWFyY2gtdXNlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRncmV5IDogI0NDQ0NDQztcbiR3aGl0ZSA6ICNGRkZGRkY7XG4kYmxhY2sgOiAjMDAwMDAwO1xuJGdyZWVuIDogIzAwY2MwMDtcblxuLnNlYXJjaC1maWVsZCB7XG4gIGJvcmRlcjpub25lO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI0NDQ0NDQztcbiAgYm9yZGVyLXJhZGl1czogMDtcbn1cblxuLnVzZXItbGlzdCB7XG5cbiAgLmluZGljYXRvciB7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIHBhZGRpbmc6IDZweDtcbiAgICB3aWR0aDogMTJweDtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBiYWNrZ3JvdW5kOiAkZ3JleTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgei1pbmRleDogMTtcbiAgICBib3R0b206IDIycHg7XG4gIH1cbiAgLm9ubGluZSB7XG4gICAgYmFja2dyb3VuZDogJGdyZWVuO1xuICB9XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/search-user/search-user.component.ts":
/*!******************************************************!*\
  !*** ./src/app/search-user/search-user.component.ts ***!
  \******************************************************/
/*! exports provided: SearchUserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchUserComponent", function() { return SearchUserComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _http_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../http-service.service */ "./src/app/http-service.service.ts");
/* harmony import */ var _user_search_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./user-search.service */ "./src/app/search-user/user-search.service.ts");
/* harmony import */ var _services_state_store_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/state-store.service */ "./src/app/services/state-store.service.ts");
/* harmony import */ var _services_socket_provider_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/socket-provider.service */ "./src/app/services/socket-provider.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");












var SearchUserComponent = /** @class */ (function () {
    function SearchUserComponent(formBuilder, httpService, userSearchService, socketProviderService, stateStoreService, cookieFeatureService, router) {
        this.formBuilder = formBuilder;
        this.httpService = httpService;
        this.userSearchService = userSearchService;
        this.socketProviderService = socketProviderService;
        this.stateStoreService = stateStoreService;
        this.cookieFeatureService = cookieFeatureService;
        this.router = router;
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_10__["Subject"]();
        this.searchform = formBuilder.group({
            'searchField': ''
        });
    }
    SearchUserComponent.prototype.searchUser = function (searchString) {
        var searchObj = {
            'id': this.userId,
            'searchString': searchString.searchField
        };
        this.socketProviderService.searchUser(searchObj);
    };
    SearchUserComponent.prototype.userDetail = function (userInfo) {
        console.log("User Detail", userInfo);
        this.stateStoreService.userInfo = userInfo;
        this.router.navigate(['/user']);
    };
    SearchUserComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userId = this.cookieFeatureService.get("user");
        this.searchSubscription = this.socketProviderService.serverInteraction()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["takeUntil"])(this.destroy$))
            .subscribe(function (searchList) {
            _this.searchResponse = searchList;
            console.log('Search list is: ' + JSON.stringify(_this.searchResponse));
        });
    };
    SearchUserComponent.prototype.ngOnDestroy = function () {
        //this.destroy$.next(true);
        //this.searchSubscription.unsubscribe();
    };
    SearchUserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-search-user',
            template: __webpack_require__(/*! ./search-user.component.html */ "./src/app/search-user/search-user.component.html"),
            providers: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTabGroup"], _http_service_service__WEBPACK_IMPORTED_MODULE_4__["HttpServiceService"]],
            styles: [__webpack_require__(/*! ./search-user.component.scss */ "./src/app/search-user/search-user.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _http_service_service__WEBPACK_IMPORTED_MODULE_4__["HttpServiceService"],
            _user_search_service__WEBPACK_IMPORTED_MODULE_5__["UserSearchService"],
            _services_socket_provider_service__WEBPACK_IMPORTED_MODULE_7__["SocketProviderService"],
            _services_state_store_service__WEBPACK_IMPORTED_MODULE_6__["StateStoreService"],
            ngx_cookie_service__WEBPACK_IMPORTED_MODULE_9__["CookieService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"]])
    ], SearchUserComponent);
    return SearchUserComponent;
}());



/***/ }),

/***/ "./src/app/search-user/user-search.service.ts":
/*!****************************************************!*\
  !*** ./src/app/search-user/user-search.service.ts ***!
  \****************************************************/
/*! exports provided: UserSearchService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserSearchService", function() { return UserSearchService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! socket.io-client */ "./node_modules/socket.io-client/lib/index.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_3__);




var UserSearchService = /** @class */ (function () {
    function UserSearchService() {
        this.socket = socket_io_client__WEBPACK_IMPORTED_MODULE_3__();
    }
    UserSearchService.prototype.searchUser = function (data) {
        this.socket.emit('search-user', data);
    };
    UserSearchService.prototype.connector = function () {
        var _this = this;
        var data = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (observer) {
            _this.socket.on('search-user-list', function (searchList) {
                console.log('Search User: ' + searchList);
                observer.next(searchList);
            });
            return function () {
                _this.socket.disconnect();
            };
        });
        return data;
    };
    UserSearchService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], UserSearchService);
    return UserSearchService;
}());



/***/ }),

/***/ "./src/app/services/socket-provider.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/services/socket-provider.service.ts ***!
  \*****************************************************/
/*! exports provided: SocketProviderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocketProviderService", function() { return SocketProviderService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! socket.io-client */ "./node_modules/socket.io-client/lib/index.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_3__);





var SocketProviderService = /** @class */ (function () {
    function SocketProviderService() {
        this.dataSource = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]("");
        this.newDataSource = this.dataSource.asObservable();
        this.userTyping = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]("");
        this.typingDataSource = this.userTyping.asObservable();
        this.socket = socket_io_client__WEBPACK_IMPORTED_MODULE_3__();
    }
    SocketProviderService.prototype.updateData = function (data) {
        this.dataSource.next(data);
    };
    SocketProviderService.prototype.updateTypingStatus = function (data) {
        this.userTyping.next(data);
    };
    SocketProviderService.prototype.userLogin = function (data) {
        this.socket.emit('login', data);
    };
    SocketProviderService.prototype.typingStatus = function (data) {
        this.socket.emit('typing', data);
    };
    SocketProviderService.prototype.sendFriendRequest = function (data) {
        this.socket.emit('sent-request', data);
    };
    SocketProviderService.prototype.confirmFriendRequest = function (data) {
        this.socket.emit('confirm-friend-request', data);
    };
    SocketProviderService.prototype.searchUser = function (data) {
        this.socket.emit('search-user', data);
    };
    SocketProviderService.prototype.sendMessage = function (data) {
        this.socket.emit('chating', data);
    };
    ;
    SocketProviderService.prototype.getFriendList = function (id) {
        this.socket.emit('friend-list', id);
    };
    SocketProviderService.prototype.serverInteraction = function () {
        var _this = this;
        var observable = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (observer) {
            _this.socket.on('login done', function (data) {
                observer.next(data);
            });
            _this.socket.on('new message', function (chats) {
                observer.next(chats);
            });
            _this.socket.on('friend-list-sent', function (friendList) {
                observer.next(friendList);
            });
            _this.socket.on('user-is-typing', function (typing) {
                console.log("Typing", typing);
                observer.next(typing);
            });
            _this.socket.on('friend-request-status', function (requestStatus) {
                console.log('Friend Request Status: ' + requestStatus);
                observer.next(requestStatus);
            });
            _this.socket.on('friend-request-update', function (friendRequestUpdate) {
                console.log('Friend Request Update: ' + friendRequestUpdate);
                observer.next(friendRequestUpdate);
            });
            _this.socket.on('search-user-list', function (searchList) {
                console.log('Search User: ' + searchList);
                observer.next(searchList);
            });
            return function () {
                _this.socket.disconnect();
            };
        });
        return observable;
    };
    SocketProviderService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SocketProviderService);
    return SocketProviderService;
}());



/***/ }),

/***/ "./src/app/services/state-store.service.ts":
/*!*************************************************!*\
  !*** ./src/app/services/state-store.service.ts ***!
  \*************************************************/
/*! exports provided: StateStoreService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StateStoreService", function() { return StateStoreService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var StateStoreService = /** @class */ (function () {
    function StateStoreService() {
    }
    StateStoreService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], StateStoreService);
    return StateStoreService;
}());



/***/ }),

/***/ "./src/app/user-detail/request-action/request-action.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/user-detail/request-action/request-action.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"friendStatus.isFriend !== 'pending' || !friendStatus.isFriend || !sentRequest\">\n  <button\n    mat-raised-button\n    type=\"button\"\n    (click)=\"sendFriendRequest(friendStatus.friendId)\">\n    ADD ON MESSENGER\n  </button>\n</div>\n<div *ngIf=\"friendStatus.isFriend === 'pending'\">\n  <p>{{friendStatus.name}} has sent you the Friend Request.</p>\n  <button\n    mat-raised-button\n    (click)=\"confirmRequest(friendStatus.friendId,'accept')\"\n    type=\"button\">\n    CONFIRM\n  </button>\n  <button\n    mat-raised-button\n    (click)=\"confirmRequest(friendStatus.friendId,'delete')\"\n    type=\"button\">\n    Deny\n  </button>\n</div>\n"

/***/ }),

/***/ "./src/app/user-detail/request-action/request-action.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/user-detail/request-action/request-action.component.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXItZGV0YWlsL3JlcXVlc3QtYWN0aW9uL3JlcXVlc3QtYWN0aW9uLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/user-detail/request-action/request-action.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/user-detail/request-action/request-action.component.ts ***!
  \************************************************************************/
/*! exports provided: RequestActionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestActionComponent", function() { return RequestActionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/index.js");
/* harmony import */ var _services_socket_provider_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/socket-provider.service */ "./src/app/services/socket-provider.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");






var RequestActionComponent = /** @class */ (function () {
    function RequestActionComponent(cookieFeatureService, socketProviderService) {
        this.cookieFeatureService = cookieFeatureService;
        this.socketProviderService = socketProviderService;
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
    }
    RequestActionComponent.prototype.sendFriendRequest = function (friendId) {
        var fromId = this.userId.userId;
        var reqObj = {
            'id': fromId,
            'friendId': friendId
        };
        this.socketProviderService.sendFriendRequest(reqObj);
    };
    RequestActionComponent.prototype.confirmRequest = function (friendId, action) {
        var reqObj = {
            "friendId": friendId,
            "userId": this.userId,
            "action": action
        };
        this.socketProviderService.confirmFriendRequest(reqObj);
    };
    RequestActionComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.friendStatus = this.actionObj;
        this.userId = { "userId": this.cookieFeatureService.get("user") };
        this.sentRequest = false;
        this.socketProviderService.serverInteraction()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.destroy$)).subscribe(function (requestStatus) {
            _this.friendStatus = requestStatus;
            console.log("Response: " + JSON.stringify(_this.friendStatus));
            if (_this.friendStatus.status) {
                _this.sentRequest = true;
            }
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], RequestActionComponent.prototype, "actionObj", void 0);
    RequestActionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-request-action',
            template: __webpack_require__(/*! ./request-action.component.html */ "./src/app/user-detail/request-action/request-action.component.html"),
            styles: [__webpack_require__(/*! ./request-action.component.scss */ "./src/app/user-detail/request-action/request-action.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ngx_cookie_service__WEBPACK_IMPORTED_MODULE_2__["CookieService"],
            _services_socket_provider_service__WEBPACK_IMPORTED_MODULE_3__["SocketProviderService"]])
    ], RequestActionComponent);
    return RequestActionComponent;
}());



/***/ }),

/***/ "./src/app/user-detail/user-detail.component.html":
/*!********************************************************!*\
  !*** ./src/app/user-detail/user-detail.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<mat-card>\n  <mat-card-content>\n    <mat-card-header>\n      <div mat-card-avatar\n           class=\"header-image\">\n      </div>\n      <mat-card-title>\n        {{data.name}}\n      </mat-card-title>\n      <mat-card-subtitle *ngIf=\"isOnline; then onlineBlock else offLineBlock\">\n      </mat-card-subtitle>\n      <ng-template #onlineBlock>\n        <span class=\"user-indicator online\"></span>\n        <span class=\"indicator-text\">\n          Online\n        </span>\n      </ng-template>\n      <ng-template #offLineBlock>\n        <span class=\"user-indicator offline\"></span>\n        <span class=\"indicator-text\">\n          Offline\n        </span>\n      </ng-template>\n    </mat-card-header>\n    <mat-card-content>\n      <div *ngIf=\"friendStatus; then friendBlock else addFriendBlock\"></div>\n      <ng-template #friendBlock></ng-template>\n      <ng-template #addFriendBlock>\n        <p *ngIf=\"data.gender === 'female' || data.gender === 'Female'\">\n          She is not in your friend list. Send her request.\n        </p>\n        <p *ngIf=\"data.gender === 'male' || data.gender === 'Male'\">\n          He is not in your friend list. Send him request.\n        </p>\n      </ng-template>\n\n      <app-request-action [actionObj]=\"btnActionData\"></app-request-action>\n      <hr />\n      <div class=\"chat-pane\">\n        <div class=\"message-section\"\n             *ngIf=\"conversations !== undefined\">\n          <div *ngFor=\"let item of conversations\">\n            <div class=\"sent\"\n                 *ngIf=\"item.requestType=='sent'\">\n              <p>{{item.message}}</p>\n            </div>\n            <div class=\"received\"\n                 *ngIf=\"item.requestType=='recieved'\">\n              <p>{{item.message}}</p>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"send-message-pane\">\n        <p class=\"typingStatus\"\n           *ngIf=\"typeResponse\">\n          {{typeResponse}}\n        </p>\n        <form [formGroup]=\"messageForm\"\n              (ngSubmit)=\"sendMessage(messageForm.value)\">\n          <input class=\"form-control type-pane\"\n                 type=\"text\"\n                 formControlName=\"chatMessage\"\n                 (keyup)=\"userTyping('none')\"\n                 (keydown)=\"userTyping('typing')\"/>\n          <button mat-raised-button\n                  type=\"submit\"\n                  class=\"send-message\">\n            <i class=\"material-icons\">\n              send\n            </i>\n          </button>\n        </form>\n        <div class=\"emoji\">\n          <button>\n            <i class=\"fa fa-smile-o\"\n               aria-hidden=\"true\">\n            </i>\n          </button>\n          <button>\n            <i class=\"fa fa-picture-o\"\n               aria-hidden=\"true\">\n            </i>\n          </button>\n        </div>\n      </div>\n    </mat-card-content>\n  </mat-card-content>\n</mat-card>\n"

/***/ }),

/***/ "./src/app/user-detail/user-detail.component.scss":
/*!********************************************************!*\
  !*** ./src/app/user-detail/user-detail.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".back-btn {\n  width: auto;\n  box-shadow: none;\n  cursor: pointer;\n  position: absolute;\n  margin: -30px 0 0 -33px;\n  background: none;\n  outline: none; }\n\n.align-v-top {\n  position: absolute;\n  margin-top: -38px;\n  margin-left: 82px; }\n\n.no-shadow {\n  box-shadow: none !important; }\n\n.header-image {\n  background-image: url('men-dummy-pic.jpg');\n  background-size: cover; }\n\n.card-fixed-bottom {\n  position: fixed;\n  bottom: 125px; }\n\n.mat-card-title {\n  margin-bottom: -5px !important; }\n\n.user-indicator {\n  border-radius: 5px;\n  padding: 4px;\n  width: 8px;\n  display: inline-block;\n  background: #CCCCCC; }\n\n.user-indicator.online {\n    background: #00cc00; }\n\n.indicator-text {\n  font-size: 0.8rem; }\n\n.chat-pane {\n  height: 200px;\n  overflow-y: auto;\n  display: block; }\n\n.chat-pane .message-section {\n    display: block;\n    overflow: hidden; }\n\n.chat-pane .message-section .sent {\n      display: block;\n      float: right;\n      width: 100%;\n      text-align: right; }\n\n.chat-pane .message-section .sent:before {\n        content: \"me: \";\n        font-size: 0.75rem;\n        font-style: italic;\n        color: #CCCCCC; }\n\n.chat-pane .message-section .sent p {\n        display: inline-block;\n        background: #CCCCCC;\n        color: #000000;\n        padding: 5px 10px;\n        border-radius: 6px; }\n\n.chat-pane .message-section .received {\n      display: block;\n      float: left;\n      width: 100%;\n      text-align: left; }\n\n.chat-pane .message-section .received p {\n        display: inline-block;\n        background: #00cc00;\n        color: #FFFFFF;\n        padding: 5px 10px;\n        border-radius: 6px; }\n\n.send-message-pane .typingStatus {\n  display: block;\n  font-size: 0.6em;\n  font-weight: bold;\n  font-style: italic; }\n\n.send-message-pane .type-pane {\n  display: inline-block !important;\n  width: 89% !important; }\n\n.send-message-pane .send-message {\n  background: transparent;\n  border: none;\n  box-shadow: none;\n  min-width: auto;\n  padding: 0; }\n\n.send-message-pane .emoji {\n  display: block;\n  margin: 10px 5px; }\n\n.send-message-pane .emoji button {\n    border: none;\n    background: transparent;\n    cursor: pointer; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9wcmFzaGFudHNodWtsYS9jaGF0L3NyYy9hcHAvdXNlci1kZXRhaWwvdXNlci1kZXRhaWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBSUE7RUFDRSxZQUFXO0VBQ1gsaUJBQWdCO0VBQ2hCLGdCQUFlO0VBQ2YsbUJBQWtCO0VBQ2xCLHdCQUF1QjtFQUN2QixpQkFBZ0I7RUFDaEIsY0FBYSxFQUNkOztBQUNEO0VBQ0UsbUJBQWtCO0VBQ2xCLGtCQUFpQjtFQUNqQixrQkFBaUIsRUFDbEI7O0FBQ0Q7RUFDRSw0QkFBMkIsRUFDNUI7O0FBQ0Q7RUFDRSwyQ0FBb0U7RUFDcEUsdUJBQXNCLEVBQ3ZCOztBQUVEO0VBQ0UsZ0JBQWU7RUFDZixjQUFhLEVBQ2Q7O0FBRUQ7RUFFRSwrQkFBOEIsRUFDL0I7O0FBRUQ7RUFDRSxtQkFBa0I7RUFDbEIsYUFBWTtFQUNaLFdBQVU7RUFDVixzQkFBcUI7RUFDckIsb0JBeENhLEVBNENkOztBQVREO0lBT0ksb0JBM0NZLEVBNENiOztBQUVIO0VBQ0Usa0JBQWlCLEVBQ2xCOztBQUVEO0VBQ0UsY0FBYTtFQUNiLGlCQUFnQjtFQUNoQixlQUFjLEVBZ0RmOztBQW5ERDtJQU9JLGVBQWM7SUFDZCxpQkFBZ0IsRUEwQ2pCOztBQWxESDtNQVdNLGVBQWM7TUFDZCxhQUFZO01BQ1osWUFBVztNQUNYLGtCQUFpQixFQWtCbEI7O0FBaENMO1FBaUJRLGdCQUFjO1FBQ2QsbUJBQWtCO1FBQ2xCLG1CQUFrQjtRQUNsQixlQXJFTyxFQXNFUjs7QUFyQlA7UUF3QlEsc0JBQXFCO1FBQ3JCLG9CQTFFTztRQTJFUCxlQTFFUTtRQTJFUixrQkFBaUI7UUFHakIsbUJBQWtCLEVBQ25COztBQS9CUDtNQW1DTSxlQUFjO01BQ2QsWUFBVztNQUNYLFlBQVc7TUFDWCxpQkFBZ0IsRUFXakI7O0FBakRMO1FBeUNRLHNCQUFxQjtRQUNyQixvQkE1RlE7UUE2RlIsZUExRlE7UUEyRlIsa0JBQWlCO1FBR2pCLG1CQUFrQixFQUNuQjs7QUFLUDtFQUdJLGVBQWM7RUFDZCxpQkFBZ0I7RUFDaEIsa0JBQWlCO0VBQ2pCLG1CQUFrQixFQUNuQjs7QUFQSDtFQVNJLGlDQUFnQztFQUNoQyxzQkFBcUIsRUFDdEI7O0FBWEg7RUFjSSx3QkFBdUI7RUFDdkIsYUFBWTtFQUNaLGlCQUFnQjtFQUNoQixnQkFBZTtFQUNmLFdBQVUsRUFDWDs7QUFuQkg7RUFzQkksZUFBYztFQUNkLGlCQUFnQixFQVFqQjs7QUEvQkg7SUEwQk0sYUFBWTtJQUNaLHdCQUF1QjtJQUN2QixnQkFBZSxFQUNoQiIsImZpbGUiOiJzcmMvYXBwL3VzZXItZGV0YWlsL3VzZXItZGV0YWlsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJGdyZWVuIDogIzAwY2MwMDtcbiRncmV5IDogI0NDQ0NDQztcbiRibGFjayA6ICMwMDAwMDA7XG4kd2hpdGUgOiAjRkZGRkZGO1xuLmJhY2stYnRuIHtcbiAgd2lkdGg6IGF1dG87XG4gIGJveC1zaGFkb3c6IG5vbmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBtYXJnaW46IC0zMHB4IDAgMCAtMzNweDtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgb3V0bGluZTogbm9uZTtcbn1cbi5hbGlnbi12LXRvcCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbWFyZ2luLXRvcDogLTM4cHg7XG4gIG1hcmdpbi1sZWZ0OiA4MnB4O1xufVxuLm5vLXNoYWRvdyB7XG4gIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcbn1cbi5oZWFkZXItaW1hZ2Uge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi9hc3NldHMvcHJvZmlsZS1waWNzL21lbi1kdW1teS1waWMuanBnXCIpO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xufVxuXG4uY2FyZC1maXhlZC1ib3R0b20ge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGJvdHRvbTogMTI1cHg7XG59XG5cbi5tYXQtY2FyZC10aXRsZXtcblxuICBtYXJnaW4tYm90dG9tOiAtNXB4ICFpbXBvcnRhbnQ7XG59XG5cbi51c2VyLWluZGljYXRvciB7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgcGFkZGluZzogNHB4O1xuICB3aWR0aDogOHB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGJhY2tncm91bmQ6ICRncmV5O1xuICAmLm9ubGluZSB7XG4gICAgYmFja2dyb3VuZDogJGdyZWVuO1xuICB9XG59XG4uaW5kaWNhdG9yLXRleHQge1xuICBmb250LXNpemU6IDAuOHJlbTtcbn1cblxuLmNoYXQtcGFuZSB7XG4gIGhlaWdodDogMjAwcHg7XG4gIG92ZXJmbG93LXk6IGF1dG87XG4gIGRpc3BsYXk6IGJsb2NrO1xuXG4gIC5tZXNzYWdlLXNlY3Rpb257XG5cbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuXG4gICAgLnNlbnQge1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICBmbG9hdDogcmlnaHQ7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuXG4gICAgICAmOmJlZm9yZXtcbiAgICAgICAgY29udGVudDpcIm1lOiBcIjtcbiAgICAgICAgZm9udC1zaXplOiAwLjc1cmVtO1xuICAgICAgICBmb250LXN0eWxlOiBpdGFsaWM7XG4gICAgICAgIGNvbG9yOiAkZ3JleTtcbiAgICAgIH1cblxuICAgICAgcCB7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgYmFja2dyb3VuZDogJGdyZXk7XG4gICAgICAgIGNvbG9yOiAkYmxhY2s7XG4gICAgICAgIHBhZGRpbmc6IDVweCAxMHB4O1xuICAgICAgICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgICAgIC1tb3otYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNnB4O1xuICAgICAgfVxuICAgIH1cblxuICAgIC5yZWNlaXZlZCB7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuXG4gICAgICBwIHtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICBiYWNrZ3JvdW5kOiAkZ3JlZW47XG4gICAgICAgIGNvbG9yOiAkd2hpdGU7XG4gICAgICAgIHBhZGRpbmc6IDVweCAxMHB4O1xuICAgICAgICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgICAgIC1tb3otYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNnB4O1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4uc2VuZC1tZXNzYWdlLXBhbmUge1xuXG4gIC50eXBpbmdTdGF0dXMge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGZvbnQtc2l6ZTogMC42ZW07XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xuICB9XG4gIC50eXBlLXBhbmV7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrICFpbXBvcnRhbnQ7XG4gICAgd2lkdGg6IDg5JSAhaW1wb3J0YW50O1xuICB9XG5cbiAgLnNlbmQtbWVzc2FnZSB7XG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gICAgbWluLXdpZHRoOiBhdXRvO1xuICAgIHBhZGRpbmc6IDA7XG4gIH1cblxuICAuZW1vamkge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1hcmdpbjogMTBweCA1cHg7XG5cbiAgICBidXR0b24ge1xuICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgfVxuXG4gIH1cbn1cblxuIl19 */"

/***/ }),

/***/ "./src/app/user-detail/user-detail.component.ts":
/*!******************************************************!*\
  !*** ./src/app/user-detail/user-detail.component.ts ***!
  \******************************************************/
/*! exports provided: UserDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserDetailComponent", function() { return UserDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../http-service.service */ "./src/app/http-service.service.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_socket_provider_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/socket-provider.service */ "./src/app/services/socket-provider.service.ts");
/* harmony import */ var _services_state_store_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/state-store.service */ "./src/app/services/state-store.service.ts");







var UserDetailComponent = /** @class */ (function () {
    function UserDetailComponent(formBuilder, stateStore, httpService, cookieFeatureService, socketProviderService) {
        this.formBuilder = formBuilder;
        this.stateStore = stateStore;
        this.httpService = httpService;
        this.cookieFeatureService = cookieFeatureService;
        this.socketProviderService = socketProviderService;
        this.messageForm = formBuilder.group({
            'chatMessage': ''
        });
    }
    UserDetailComponent.prototype.closeConfirm = function () {
        //this.thisDialogRef.close("Closed");
    };
    /*confirmRequest(friendId,action) : void {
  
      let post = {"friendId" : friendId,"userId":this.cookieFeatureService.get("user"),"action" : action};
  
      let sendRequest = new Promise((resolve, reject) => {
  
        this.httpService.requestAction(post).toPromise().then(
  
          res => {
  
            this.isFriend = res.status;
  
            console.log("Response:", res);
  
          }
  
        );
  
      });
  
    }*/
    UserDetailComponent.prototype.sendMessage = function (getMsg) {
        var messagePost = {
            "toSocketId": this.data.friendId,
            "fromSocketId": this.cookieFeatureService.get("user"),
            "fromName": this.data.name,
            "message": getMsg.chatMessage
        };
        this.messageForm.reset();
        this.socketProviderService.sendMessage(messagePost);
    };
    UserDetailComponent.prototype.userTyping = function (typingStatus) {
        var userId = this.getUserId;
        var friendId = this.data.friendId;
        var sendData = { "userId": userId, "friendId": friendId, "typing": typingStatus };
        this.socketProviderService.typingStatus(sendData);
    };
    UserDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.data = this.stateStore.userInfo;
        console.log("Data from parent", this.data);
        this.getUserId = this.cookieFeatureService.get("user");
        this.friendStatus = this.data.isFriend;
        this.isOnline = this.data.isOnline;
        this.btnActionData = {
            'friendId': this.data.friendId,
            'isFriend': this.friendStatus
        };
        this.socketProviderService.newDataSource.subscribe(function (message) {
            var getMessages = message.conversations;
            var getId = _this.data.friendId;
            if (getMessages) {
                for (var i = 0; i < getMessages.length; i++) {
                    if (getId == getMessages[i].userId) {
                        _this.conversations = getMessages[i].detail;
                        _this.friendStatus = getMessages[i].isFriend;
                        _this.isOnline = getMessages[i].isOnline;
                        console.log("Conversations", _this.conversations);
                        break;
                    }
                }
                console.log("Message:", message);
            }
        });
        this.socketProviderService.typingDataSource.subscribe(function (typing) {
            if (typing.friendId == _this.data.friendId) {
                _this.typeResponse = typing.typingMsg;
            }
        });
    };
    UserDetailComponent.prototype.ngOnDestroy = function () { };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], UserDetailComponent.prototype, "userDetail", void 0);
    UserDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user-detail',
            template: __webpack_require__(/*! ./user-detail.component.html */ "./src/app/user-detail/user-detail.component.html"),
            providers: [
                _http_service_service__WEBPACK_IMPORTED_MODULE_2__["HttpServiceService"]
            ],
            styles: [__webpack_require__(/*! ./user-detail.component.scss */ "./src/app/user-detail/user-detail.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
            _services_state_store_service__WEBPACK_IMPORTED_MODULE_6__["StateStoreService"],
            _http_service_service__WEBPACK_IMPORTED_MODULE_2__["HttpServiceService"],
            ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__["CookieService"],
            _services_socket_provider_service__WEBPACK_IMPORTED_MODULE_5__["SocketProviderService"]])
    ], UserDetailComponent);
    return UserDetailComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_4__);





if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"]);


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/prashantshukla/chat/src/main.ts */"./src/main.ts");


/***/ }),

/***/ 1:
/*!********************!*\
  !*** ws (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map