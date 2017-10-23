webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"chatApp\">\n  <router-outlet></router-outlet>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".no-shadow {\n  box-shadow: none !important; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_socket_io_client__ = __webpack_require__("../../../../socket.io-client/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_socket_io_client___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_socket_io_client__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
        this.socket = __WEBPACK_IMPORTED_MODULE_1_socket_io_client__();
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ngx_cookie_service__ = __webpack_require__("../../../../ngx-cookie-service/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__login_panel_login_panel_component__ = __webpack_require__("../../../../../src/app/login-panel/login-panel.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__modal_modal_module__ = __webpack_require__("../../../../../src/app/modal/modal.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_ngx_facebook__ = __webpack_require__("../../../../ngx-facebook/dist/esm/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__message_box_message_box_component__ = __webpack_require__("../../../../../src/app/message-box/message-box.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__registration_form_registration_form_component__ = __webpack_require__("../../../../../src/app/registration-form/registration-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_hammerjs__ = __webpack_require__("../../../../hammerjs/hammer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_hammerjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__friend_list_friend_list_component__ = __webpack_require__("../../../../../src/app/friend-list/friend-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__search_user_search_user_component__ = __webpack_require__("../../../../../src/app/search-user/search-user.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__user_detail_user_detail_component__ = __webpack_require__("../../../../../src/app/user-detail/user-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__chat_pane_chat_pane_component__ = __webpack_require__("../../../../../src/app/chat-pane/chat-pane.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__friend_list_counter_friend_list_counter_component__ = __webpack_require__("../../../../../src/app/friend-list-counter/friend-list-counter.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__friend_request_list_friend_request_list_component__ = __webpack_require__("../../../../../src/app/friend-request-list/friend-request-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__services_socket_provider_service__ = __webpack_require__("../../../../../src/app/services/socket-provider.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__message_list_message_list_component__ = __webpack_require__("../../../../../src/app/message-list/message-list.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};























var appRoutes = [
    {
        path: 'login',
        component: __WEBPACK_IMPORTED_MODULE_9__login_panel_login_panel_component__["a" /* LoginPanelComponent */]
    },
    {
        path: 'register',
        component: __WEBPACK_IMPORTED_MODULE_9__login_panel_login_panel_component__["a" /* LoginPanelComponent */]
    },
    {
        path: 'chat',
        component: __WEBPACK_IMPORTED_MODULE_12__message_box_message_box_component__["a" /* MessageBoxComponent */]
    },
    {
        path: '',
        redirectTo: '/',
        pathMatch: 'full'
    }
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_9__login_panel_login_panel_component__["a" /* LoginPanelComponent */],
            __WEBPACK_IMPORTED_MODULE_12__message_box_message_box_component__["a" /* MessageBoxComponent */],
            __WEBPACK_IMPORTED_MODULE_13__registration_form_registration_form_component__["a" /* RegistrationFormComponent */],
            __WEBPACK_IMPORTED_MODULE_15__friend_list_friend_list_component__["a" /* FriendListComponent */],
            __WEBPACK_IMPORTED_MODULE_16__search_user_search_user_component__["a" /* SearchUserComponent */],
            __WEBPACK_IMPORTED_MODULE_17__user_detail_user_detail_component__["a" /* UserDetailComponent */],
            __WEBPACK_IMPORTED_MODULE_18__chat_pane_chat_pane_component__["a" /* ChatPaneComponent */],
            __WEBPACK_IMPORTED_MODULE_19__friend_list_counter_friend_list_counter_component__["a" /* FriendListCounterComponent */],
            __WEBPACK_IMPORTED_MODULE_20__friend_request_list_friend_request_list_component__["a" /* FriendRequestListComponent */],
            __WEBPACK_IMPORTED_MODULE_22__message_list_message_list_component__["a" /* MessageListComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* RouterModule */].forRoot(appRoutes, { enableTracing: true }),
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_10__modal_modal_module__["a" /* ModalModule */],
            __WEBPACK_IMPORTED_MODULE_11_ngx_facebook__["a" /* FacebookModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["d" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["i" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_material__["b" /* MdButtonModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_material__["d" /* MdCheckboxModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_material__["c" /* MdCardModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_material__["k" /* MdMenuModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_material__["o" /* MdToolbarModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_material__["j" /* MdIconModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_material__["n" /* MdTabsModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_material__["f" /* MdDialogModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_material__["i" /* MdGridListModule */]
        ],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_13__registration_form_registration_form_component__["a" /* RegistrationFormComponent */],
            __WEBPACK_IMPORTED_MODULE_17__user_detail_user_detail_component__["a" /* UserDetailComponent */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_5_ngx_cookie_service__["a" /* CookieService */], __WEBPACK_IMPORTED_MODULE_21__services_socket_provider_service__["a" /* SocketProviderService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/chat-pane/chat-pane.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"message-pane\">\n\n  <md-card class=\"no-shadow\">\n\n    <md-card-content>\n\n      <div class=\"send-message\">\n\n\n      <div md-card-avatar class=\"header-image\"></div>\n\n      <md-card-subtitle class=\"user-message\">Hi Prashant how r you ?</md-card-subtitle>\n\n      </div>\n\n    </md-card-content>\n\n    <div class=\"clearfix\"></div>\n\n    <md-card-content>\n\n      <div class=\"received-message\">\n\n        <div md-card-avatar class=\"header-image\"></div>\n\n        <md-card-subtitle class=\"user-message\">Hi Prashant how r you ?</md-card-subtitle>\n\n      </div>\n\n    </md-card-content>\n\n    <div class=\"clearfix\"></div>\n\n    <md-card-content>\n\n      <div class=\"send-message\">\n\n\n        <div md-card-avatar class=\"header-image\"></div>\n\n        <md-card-subtitle class=\"user-message\">Hi Prashant how r you ?</md-card-subtitle>\n\n      </div>\n\n    </md-card-content>\n\n    <div class=\"clearfix\"></div>\n\n    <md-card-content>\n\n      <div class=\"received-message\">\n\n        <div md-card-avatar class=\"header-image\"></div>\n\n        <md-card-subtitle class=\"user-message\">Hi Prashant how r you ?</md-card-subtitle>\n\n      </div>\n\n    </md-card-content>\n\n    <div class=\"clearfix\"></div>\n\n  </md-card>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/chat-pane/chat-pane.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".header-image {\n  background-image: url(" + __webpack_require__("../../../../../src/assets/profile-pics/men-dummy-pic.jpg") + ");\n  background-size: cover; }\n\n.message-pane .mat-card:not([class*=mat-elevation-z]) {\n  box-shadow: none; }\n\n.message-pane .send-message {\n  display: inline-block;\n  clear: both;\n  background: #00cc00;\n  color: #FFFFFF;\n  padding: 5px 10px;\n  border-radius: 8px;\n  overflow-y: hidden;\n  float: left;\n  margin-bottom: 20px; }\n  .message-pane .send-message .header-image, .message-pane .send-message .user-message {\n    float: right;\n    overflow-y: hidden;\n    display: block; }\n\n.message-pane .received-message {\n  display: inline-block;\n  clear: both;\n  background: #CCCCCC;\n  padding: 5px 10px;\n  border-radius: 8px;\n  overflow-y: hidden;\n  float: right;\n  margin-bottom: 20px; }\n  .message-pane .received-message .header-image, .message-pane .received-message .user-message {\n    float: left;\n    overflow-y: hidden;\n    display: block; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/chat-pane/chat-pane.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatPaneComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ChatPaneComponent = (function () {
    function ChatPaneComponent() {
    }
    ChatPaneComponent.prototype.ngOnInit = function () {
    };
    return ChatPaneComponent;
}());
ChatPaneComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-chat-pane',
        template: __webpack_require__("../../../../../src/app/chat-pane/chat-pane.component.html"),
        styles: [__webpack_require__("../../../../../src/app/chat-pane/chat-pane.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], ChatPaneComponent);

//# sourceMappingURL=chat-pane.component.js.map

/***/ }),

/***/ "../../../../../src/app/friend-list-counter/friend-list-counter.component.html":
/***/ (function(module, exports) {

module.exports = "<p class=\"counter\" *ngIf=\"counter\">{{counter}}</p>\n"

/***/ }),

/***/ "../../../../../src/app/friend-list-counter/friend-list-counter.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/friend-list-counter/friend-list-counter.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FriendListCounterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__http_service_service__ = __webpack_require__("../../../../../src/app/http-service.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FriendListCounterComponent = (function () {
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
    return FriendListCounterComponent;
}());
FriendListCounterComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-friend-list-counter',
        template: __webpack_require__("../../../../../src/app/friend-list-counter/friend-list-counter.component.html"),
        styles: [__webpack_require__("../../../../../src/app/friend-list-counter/friend-list-counter.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__http_service_service__["a" /* HttpServiceService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__http_service_service__["a" /* HttpServiceService */]) === "function" && _a || Object])
], FriendListCounterComponent);

var _a;
//# sourceMappingURL=friend-list-counter.component.js.map

/***/ }),

/***/ "../../../../../src/app/friend-list/friend-list.component.html":
/***/ (function(module, exports) {

module.exports = "<md-card *ngFor=\"let item of getResponse\">\n\n  <md-card-content class=\"user-list\" (click)=\"userDetailOpenDialog(item)\">\n\n    <i class=\"fa fa-user-circle-o fa-2x\" aria-hidden=\"true\"></i>\n\n    <span class='indicator' [ngClass]=\"{'online' : item.isOnline}\"></span>\n\n    <span>{{item.name}}</span>\n\n  </md-card-content>\n\n</md-card>\n"

/***/ }),

/***/ "../../../../../src/app/friend-list/friend-list.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/friend-list/friend-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FriendListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__http_service_service__ = __webpack_require__("../../../../../src/app/http-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__user_detail_user_detail_component__ = __webpack_require__("../../../../../src/app/user-detail/user-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_cookie_service__ = __webpack_require__("../../../../ngx-cookie-service/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_socket_provider_service__ = __webpack_require__("../../../../../src/app/services/socket-provider.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var FriendListComponent = (function () {
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
            _this.httpService.friendList(_this.userId).toPromise().then(function (res) {
                _this.friendList = res.friendList;
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
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_3__user_detail_user_detail_component__["a" /* UserDetailComponent */], {
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
    return FriendListComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Object)
], FriendListComponent.prototype, "getMessage", void 0);
FriendListComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-friend-list',
        template: __webpack_require__("../../../../../src/app/friend-list/friend-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/friend-list/friend-list.component.scss")],
        providers: [__WEBPACK_IMPORTED_MODULE_1__angular_material__["m" /* MdTabGroup */], __WEBPACK_IMPORTED_MODULE_2__http_service_service__["a" /* HttpServiceService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__http_service_service__["a" /* HttpServiceService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__http_service_service__["a" /* HttpServiceService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4_ngx_cookie_service__["a" /* CookieService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_ngx_cookie_service__["a" /* CookieService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__services_socket_provider_service__["a" /* SocketProviderService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_socket_provider_service__["a" /* SocketProviderService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["e" /* MdDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["e" /* MdDialog */]) === "function" && _d || Object])
], FriendListComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=friend-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/friend-request-list/friend-request-list.component.html":
/***/ (function(module, exports) {

module.exports = "<md-card *ngFor=\"let item of friendRequest\" (click)=\"userDetailOpenDialog(item.detail)\">\n\n  <md-card-content class=\"user-list\">\n\n    <i class=\"fa fa-user-circle-o fa-2x\" aria-hidden=\"true\"></i>\n\n    <!--<span class='indicator' [ngClass]=\"{'online' : item.isOnline}\"></span>-->\n\n    <span>{{item.detail.fName}} {{item.detail.lName}}</span>\n\n\n  </md-card-content>\n\n</md-card>\n"

/***/ }),

/***/ "../../../../../src/app/friend-request-list/friend-request-list.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/friend-request-list/friend-request-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FriendRequestListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user_detail_user_detail_component__ = __webpack_require__("../../../../../src/app/user-detail/user-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__http_service_service__ = __webpack_require__("../../../../../src/app/http-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ngx_cookie_service__ = __webpack_require__("../../../../ngx-cookie-service/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var FriendRequestListComponent = (function () {
    function FriendRequestListComponent(httpService, cookieFeatureService, dialog) {
        this.httpService = httpService;
        this.cookieFeatureService = cookieFeatureService;
        this.dialog = dialog;
    }
    FriendRequestListComponent.prototype.retrieveFriendList = function () {
        var _this = this;
        this.userId = { "userId": this.cookieFeatureService.get("user") };
        var newList = new Promise(function (resolve, reject) {
            _this.httpService.newRequestList(_this.userId).toPromise().then(function (res) {
                _this.friendRequest = res.requestList;
                _this.conitinue = true;
                console.log("Friend List:", _this.friendRequest);
            });
        });
    };
    FriendRequestListComponent.prototype.userDetailOpenDialog = function (userInfo) {
        console.log("User Detail", userInfo);
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_1__user_detail_user_detail_component__["a" /* UserDetailComponent */], {
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
    return FriendRequestListComponent;
}());
FriendRequestListComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-friend-request-list',
        template: __webpack_require__("../../../../../src/app/friend-request-list/friend-request-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/friend-request-list/friend-request-list.component.scss")],
        providers: []
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__http_service_service__["a" /* HttpServiceService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__http_service_service__["a" /* HttpServiceService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5_ngx_cookie_service__["a" /* CookieService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_ngx_cookie_service__["a" /* CookieService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_material__["e" /* MdDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_material__["e" /* MdDialog */]) === "function" && _c || Object])
], FriendRequestListComponent);

var _a, _b, _c;
//# sourceMappingURL=friend-request-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/http-service.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HttpServiceService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HttpServiceService = (function () {
    function HttpServiceService(_http) {
        this._http = _http;
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
        return this._http.post(url, data).map(function (res) { return res.json(); });
    };
    return HttpServiceService;
}());
HttpServiceService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
], HttpServiceService);

var _a;
//# sourceMappingURL=http-service.service.js.map

/***/ }),

/***/ "../../../../../src/app/login-panel/create-user.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateUserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CreateUserService = (function () {
    function CreateUserService(_http) {
        this._http = _http;
    }
    CreateUserService.prototype.createUser = function (data) {
        var url = '/register';
        return this._http.post(url, data).map(function (res) { return res.json(); });
    };
    CreateUserService.prototype.loginUser = function (data) {
        var url = '/login';
        return this._http.post(url, data).map(function (res) { return res.json(); });
    };
    return CreateUserService;
}());
CreateUserService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
], CreateUserService);

var _a;
//# sourceMappingURL=create-user.service.js.map

/***/ }),

/***/ "../../../../../src/app/login-panel/login-panel.component.html":
/***/ (function(module, exports) {

module.exports = "<md-toolbar color=\"primary\">\n  <span>WebChat</span>\n</md-toolbar>\n\n\n\n  <div class=\"row m-t-6-percentage\">\n\n    <div class=\"col-lg-4 col-md-4 col-sm-6 col-xs-12 col-centered\">\n\n      <div class=\"panel\">\n\n        <div class=\"panel-heading\"><h1>User Login</h1></div>\n\n        <div class=\"panel-body\">\n\n          <form [formGroup]=\"loginform\" (ngSubmit)=\"uerLogin(loginform.value)\">\n            <div class=\"form-group\">\n              <label>Enter User ID</label>\n\n              <input class=\"form-control\" formControlName=\"userName\" type=\"text\" />\n\n              <div class=\"alert\" *ngIf=\"!loginform.controls['userName'].valid && loginform.controls['userName'].touched\">\n                {{ userNameAlert }}\n              </div>\n            </div>\n            <div class=\"form-group\">\n\n              <label>Password</label>\n\n              <input class=\"form-control\" formControlName=\"userPassword\" type=\"password\" />\n\n              <div class=\"alert\" *ngIf=\"!loginform.controls['userPassword'].valid && loginform.controls['userPassword'].touched\">\n                {{ pwdAlert }}\n              </div>\n            </div>\n\n            <button class=\"btn btn-primary btn-lg btn-block\" type=\"submit\">\n              LOGIN <i class=\"fa fa-sign-in\"></i>\n            </button>\n\n            <div class=\"text-center\">\n              <hr />\n              <p class=\"or\"><span>or</span></p>\n\n              <button (click)='modalService.open(modalId)' class=\"btn btn-dark btn-lg btn-block\" type=\"button\">Register yourself !</button>\n\n              <!--<button md-raised-button (click)=\"openDialog()\">Register yourself!</button>-->\n\n            </div>\n\n          </form>\n\n        </div>\n      </div>\n\n\n    </div>\n\n  </div>\n\n\n<app-modal [modalTitle]=\"'Sign Up'\" [blocking]='false' [modalId]='modalId'>\n\n  <div *ngIf=\"!statusResponse; then formBlock else elseResponseBlock\"></div>\n\n  <ng-template #formBlock>\n    <p>It’s free and always will be.</p>\n    <form [formGroup]=\"rForm\" (ngSubmit)=\"registerUser(rForm.value)\">\n      <div class=\"row\">\n        <div class=\"col-lg-6 col-md-6 col-sm-6 col-xs-12 form-group\">\n          <input type=\"text\" class=\"form-control\" formControlName=\"fName\" placeholder=\"First Name\" />\n\n          <div class=\"alert\" *ngIf=\"!rForm.controls['fName'].valid && rForm.controls['fName'].touched\">\n            {{ fNameAlert }}\n          </div>\n        </div>\n        <div class=\"col-lg-6 col-md-6 col-sm-6 col-xs-12 form-group\">\n          <input type=\"text\" class=\"form-control\" formControlName=\"lName\" placeholder=\"Last Name\" />\n        </div>\n        <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12 form-group\">\n          <input type=\"text\" class=\"form-control\" formControlName=\"email\" placeholder=\"Email\" />\n\n          <div class=\"alert\" *ngIf=\"!rForm.controls['email'].valid && rForm.controls['email'].touched\">\n            {{ emailAlert }}\n          </div>\n        </div>\n        <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12 form-group\">\n          <input type=\"password\" class=\"form-control\" formControlName=\"userPwd\" placeholder=\"New Password\" />\n          <div class=\"alert\" *ngIf=\"!rForm.controls['userPwd'].valid && rForm.controls['userPwd'].touched\">\n            {{ pwdAlert }}\n          </div>\n        </div>\n        <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12 form-group\">\n          <label>Birthday</label>\n          <div class=\"row\">\n            <div class=\"col-lg-4 col-md-4 col-sm-4 col-xs-12 form-group\">\n              <select formControlName=\"month\" class=\"form-control\">\n                <option value=\"0\">Month</option>\n                <option value=\"1\">Jan</option>\n                <option value=\"2\">Feb</option>\n                <option value=\"3\">Mar</option>\n                <option value=\"4\">Apr</option>\n                <option value=\"5\">May</option>\n                <option value=\"6\">Jun</option>\n                <option value=\"7\">Jul</option>\n                <option value=\"8\" selected=\"1\">Aug</option>\n                <option value=\"9\">Sep</option>\n                <option value=\"10\">Oct</option>\n                <option value=\"11\">Nov</option>\n                <option value=\"12\">Dec</option>\n              </select>\n            </div>\n            <div class=\"col-lg-2 col-md-2 col-sm-2 col-xs-12 form-group\">\n              <select formControlName=\"day\" class=\"form-control\">\n                <option value=\"0\">Day</option>\n                <option value=\"1\">1</option>\n                <option value=\"2\">2</option>\n                <option value=\"3\">3</option>\n                <option value=\"4\">4</option>\n                <option value=\"5\">5</option>\n                <option value=\"6\">6</option>\n                <option value=\"7\">7</option>\n                <option value=\"8\">8</option>\n                <option value=\"9\">9</option>\n                <option value=\"10\">10</option>\n                <option value=\"11\">11</option>\n                <option value=\"12\">12</option>\n                <option value=\"13\">13</option>\n                <option value=\"14\">14</option>\n                <option value=\"15\">15</option>\n                <option value=\"16\">16</option>\n                <option value=\"17\">17</option>\n                <option value=\"18\">18</option>\n                <option value=\"19\">19</option>\n                <option value=\"20\">20</option>\n                <option value=\"21\">21</option>\n                <option value=\"22\">22</option>\n                <option value=\"23\">23</option>\n                <option value=\"24\" selected=\"1\">24</option>\n                <option value=\"25\">25</option>\n                <option value=\"26\">26</option>\n                <option value=\"27\">27</option>\n                <option value=\"28\">28</option>\n                <option value=\"29\">29</option>\n                <option value=\"30\">30</option>\n                <option value=\"31\">31</option>\n              </select>\n            </div>\n            <div class=\"col-lg-3 col-md-3 col-sm-3 col-xs-12 form-group\">\n              <select formControlName=\"year\" class=\"form-control\">\n                <option value=\"0\">Year</option>\n                <option value=\"2017\">2017</option>\n                <option value=\"2016\">2016</option>\n                <option value=\"2015\">2015</option>\n                <option value=\"2014\">2014</option>\n                <option value=\"2013\">2013</option>\n                <option value=\"2012\">2012</option>\n                <option value=\"2011\">2011</option>\n                <option value=\"2010\">2010</option>\n                <option value=\"2009\">2009</option>\n                <option value=\"2008\">2008</option>\n                <option value=\"2007\">2007</option>\n                <option value=\"2006\">2006</option>\n                <option value=\"2005\">2005</option>\n                <option value=\"2004\">2004</option>\n                <option value=\"2003\">2003</option>\n                <option value=\"2002\">2002</option>\n                <option value=\"2001\">2001</option>\n                <option value=\"2000\">2000</option>\n                <option value=\"1999\" selected=\"1\">1999</option>\n                <option value=\"1998\">1998</option>\n                <option value=\"1997\">1997</option>\n                <option value=\"1996\">1996</option>\n                <option value=\"1995\">1995</option>\n                <option value=\"1994\">1994</option>\n                <option value=\"1993\">1993</option>\n                <option value=\"1992\">1992</option>\n                <option value=\"1991\">1991</option>\n                <option value=\"1990\">1990</option>\n                <option value=\"1989\">1989</option>\n                <option value=\"1988\">1988</option>\n                <option value=\"1987\">1987</option>\n                <option value=\"1986\">1986</option>\n                <option value=\"1985\">1985</option>\n                <option value=\"1984\">1984</option>\n                <option value=\"1983\">1983</option>\n                <option value=\"1982\">1982</option>\n                <option value=\"1981\">1981</option>\n                <option value=\"1980\">1980</option>\n                <option value=\"1979\">1979</option>\n                <option value=\"1978\">1978</option>\n                <option value=\"1977\">1977</option>\n                <option value=\"1976\">1976</option>\n                <option value=\"1975\">1975</option>\n                <option value=\"1974\">1974</option>\n                <option value=\"1973\">1973</option>\n                <option value=\"1972\">1972</option>\n                <option value=\"1971\">1971</option>\n                <option value=\"1970\">1970</option>\n                <option value=\"1969\">1969</option>\n                <option value=\"1968\">1968</option>\n                <option value=\"1967\">1967</option>\n                <option value=\"1966\">1966</option>\n                <option value=\"1965\">1965</option>\n                <option value=\"1964\">1964</option>\n                <option value=\"1963\">1963</option>\n                <option value=\"1962\">1962</option>\n                <option value=\"1961\">1961</option>\n                <option value=\"1960\">1960</option>\n                <option value=\"1959\">1959</option>\n                <option value=\"1958\">1958</option>\n                <option value=\"1957\">1957</option>\n                <option value=\"1956\">1956</option>\n                <option value=\"1955\">1955</option>\n                <option value=\"1954\">1954</option>\n                <option value=\"1953\">1953</option>\n                <option value=\"1952\">1952</option>\n                <option value=\"1951\">1951</option>\n                <option value=\"1950\">1950</option>\n                <option value=\"1949\">1949</option>\n                <option value=\"1948\">1948</option>\n                <option value=\"1947\">1947</option>\n                <option value=\"1946\">1946</option>\n                <option value=\"1945\">1945</option>\n                <option value=\"1944\">1944</option>\n                <option value=\"1943\">1943</option>\n                <option value=\"1942\">1942</option>\n                <option value=\"1941\">1941</option>\n                <option value=\"1940\">1940</option>\n                <option value=\"1939\">1939</option>\n                <option value=\"1938\">1938</option>\n                <option value=\"1937\">1937</option>\n                <option value=\"1936\">1936</option>\n                <option value=\"1935\">1935</option>\n                <option value=\"1934\">1934</option>\n                <option value=\"1933\">1933</option>\n                <option value=\"1932\">1932</option>\n                <option value=\"1931\">1931</option>\n                <option value=\"1930\">1930</option>\n                <option value=\"1929\">1929</option>\n                <option value=\"1928\">1928</option>\n                <option value=\"1927\">1927</option>\n                <option value=\"1926\">1926</option>\n                <option value=\"1925\">1925</option>\n                <option value=\"1924\">1924</option>\n                <option value=\"1923\">1923</option>\n                <option value=\"1922\">1922</option>\n                <option value=\"1921\">1921</option>\n                <option value=\"1920\">1920</option>\n                <option value=\"1919\">1919</option>\n                <option value=\"1918\">1918</option>\n                <option value=\"1917\">1917</option>\n                <option value=\"1916\">1916</option>\n                <option value=\"1915\">1915</option>\n                <option value=\"1914\">1914</option>\n                <option value=\"1913\">1913</option>\n                <option value=\"1912\">1912</option>\n                <option value=\"1911\">1911</option>\n                <option value=\"1910\">1910</option>\n                <option value=\"1909\">1909</option>\n                <option value=\"1908\">1908</option>\n                <option value=\"1907\">1907</option>\n                <option value=\"1906\">1906</option>\n                <option value=\"1905\">1905</option>\n              </select>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12\">\n          <div class=\"form-group\">\n            <label class=\"radio-inline\"><input type=\"radio\" formControlName=\"gender\" value=\"Male\" />Male</label>\n            <label class=\"radio-inline\"><input type=\"radio\" formControlName=\"gender\" value=\"Female\" />Female</label>\n          </div>\n          <div class=\"alert\" *ngIf=\"!rForm.controls['gender'].valid && rForm.controls['gender'].touched\">\n            {{ genderAlert }}\n          </div>\n          <div>\n            <p class=\"font-v-small\">By clicking Create Account, you agree to our Terms and that you have read our Data Policy, including our Cookie Use.</p>\n          </div>\n        </div>\n        <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12\">\n          <button class=\"btn btn-secondary btn-lg btn-block\" type=\"submit\">\n            Register <i class=\"fa fa-user-plus\" aria-hidden=\"true\"></i>\n          </button>\n        </div>\n        <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12 border border-left-0 border-right-0 border-bottom-0 m-t-4-percentage\">\n          <h3 class=\"text-center m-t-2-percentage\">OR</h3>\n          <button class=\"btn btn-primary btn-lg btn-block\" (click)=\"login()\" type=\"button\">\n            <i class=\"fa fa-facebook\" aria-hidden=\"true\"></i> Sign up using Facebook\n          </button>\n        </div>\n      </div>\n    </form>\n  </ng-template>\n\n  <ng-template #elseResponseBlock>\n    <div class=\"alert-success\">\n      <p class=\"p-all-25\">{{statusResponse.info}}</p>\n    </div>\n  </ng-template>\n</app-modal>\n\n"

/***/ }),

/***/ "../../../../../src/app/login-panel/login-panel.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".col-centered {\n  margin: 0 auto; }\n\n.panel {\n  border: 1px solid #CCCCCC;\n  border-radius: 5px;\n  background: #FFFFFF;\n  padding-bottom: 20px; }\n  .panel .panel-heading {\n    background: #F2F2F2;\n    padding: 20px;\n    border-bottom: 1px solid #CCCCCC; }\n    .panel .panel-heading h1 {\n      font-size: medium;\n      display: block;\n      text-align: center;\n      text-transform: uppercase; }\n  .panel .panel-body {\n    padding: 50px; }\n    @media screen and (max-width: 723px) {\n      .panel .panel-body {\n        padding: 10px; } }\n    .panel .panel-body input {\n      border: none !important;\n      border-bottom: 1px solid #00cc00 !important;\n      border-radius: 0px;\n      padding: 0; }\n    .panel .panel-body .or {\n      position: absolute;\n      margin-top: -30px;\n      text-align: center;\n      width: 100%; }\n      .panel .panel-body .or span {\n        display: inline-block;\n        background: #FFF;\n        width: 50px;\n        text-align: center; }\n    .panel .panel-body .alert {\n      padding: 0 !important;\n      color: #fc2c00;\n      border-radius: 0px;\n      background: #FFF; }\n  .panel .panel-footer {\n    padding: 0 50px; }\n    @media screen and (max-width: 723px) {\n      .panel .panel-footer {\n        padding: 10px; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login-panel/login-panel.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPanelComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modal_modal_service__ = __webpack_require__("../../../../../src/app/modal/modal.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_facebook__ = __webpack_require__("../../../../ngx-facebook/dist/esm/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__login_panel_create_user_service__ = __webpack_require__("../../../../../src/app/login-panel/create-user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__registration_form_registration_form_component__ = __webpack_require__("../../../../../src/app/registration-form/registration-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ngx_cookie_service__ = __webpack_require__("../../../../ngx-cookie-service/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_socket_provider_service__ = __webpack_require__("../../../../../src/app/services/socket-provider.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_rxjs_add_operator_toPromise__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};













var LoginPanelComponent = (function () {
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
        //login form initiate
        this.loginform = loginFormBuilder.group({
            'userName': [null, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["j" /* Validators */].required],
            'userPassword': [null, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["j" /* Validators */].required]
        });
        //Registration Form initiate
        this.rForm = formBuilder.group({
            'fName': [null, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["j" /* Validators */].required],
            'lName': [null, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["j" /* Validators */].required],
            'email': [null, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["j" /* Validators */].required],
            'userPwd': [null, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["j" /* Validators */].required],
            'month': [null, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["j" /* Validators */].required],
            'day': [null, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["j" /* Validators */].required],
            'year': [null, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["j" /* Validators */].required],
            'gender': [null, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["j" /* Validators */].required],
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
        /* let submitData = new Promise((resolve, reject) => {
     
           this.createUserService.loginUser(data).toPromise().then(
     
             res => {
     
               this.statusResponse = res;
     
               console.log("Login status", this.statusResponse);
     
               if(this.statusResponse.status.valid == true){
     
                 this.cookieFeatureService.set("user",this.statusResponse.status.id);
     
                 this.router.navigate(['/chat']);
     
               }
     
             }
     
           )
     
         });*/
    };
    LoginPanelComponent.prototype.openDialog = function () {
        var _this = this;
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_6__registration_form_registration_form_component__["a" /* RegistrationFormComponent */], {
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
        this.loginSubscription = this.socketProviderService.serverInteraction().subscribe(function (status) {
            console.log("Status is:", status);
            _this.statusResponse = status;
            if (_this.statusResponse.success) {
                _this.cookieFeatureService.set("user", _this.statusResponse.userId);
                _this.router.navigate(['/chat']);
            }
        });
    };
    LoginPanelComponent.prototype.ngOnDestroy = function () {
        //this.loginSubscription.unsubscribe();
        //this.loginSubscription.next();
    };
    return LoginPanelComponent;
}());
LoginPanelComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-login-panel',
        template: __webpack_require__("../../../../../src/app/login-panel/login-panel.component.html"),
        styles: [__webpack_require__("../../../../../src/app/login-panel/login-panel.component.scss")],
        providers: [
            __WEBPACK_IMPORTED_MODULE_5__login_panel_create_user_service__["a" /* CreateUserService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["m" /* MdTabGroup */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["l" /* MdTab */]
        ]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__modal_modal_service__["a" /* ModalService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__modal_modal_service__["a" /* ModalService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4_ngx_facebook__["b" /* FacebookService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_ngx_facebook__["b" /* FacebookService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormBuilder */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormBuilder */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__login_panel_create_user_service__["a" /* CreateUserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__login_panel_create_user_service__["a" /* CreateUserService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_7__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__angular_router__["a" /* Router */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["e" /* MdDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["e" /* MdDialog */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_8_ngx_cookie_service__["a" /* CookieService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8_ngx_cookie_service__["a" /* CookieService */]) === "function" && _h || Object, typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_9__services_socket_provider_service__["a" /* SocketProviderService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_9__services_socket_provider_service__["a" /* SocketProviderService */]) === "function" && _j || Object])
], LoginPanelComponent);

var _a, _b, _c, _d, _e, _f, _g, _h, _j;
//# sourceMappingURL=login-panel.component.js.map

/***/ }),

/***/ "../../../../../src/app/message-box/message-box.component.html":
/***/ (function(module, exports) {

module.exports = "<md-toolbar color=\"primary\">\n  <span>WebChat</span>\n  <span class=\"spacer\"></span>\n  <button md-icon-button [mdMenuTriggerFor]=\"menu\">\n    <md-icon>more_vert</md-icon>\n  </button>\n  <md-menu #menu=\"mdMenu\">\n    <button md-menu-item>\n      <md-icon>fingerprint</md-icon>\n      <span>Logout</span>\n    </button>\n    <button md-menu-item>\n      <md-icon>fingerprint</md-icon>\n      <span>My profile</span>\n    </button>\n  </md-menu>\n</md-toolbar>\n\n<md-tab-group>\n\n  <md-tab>\n\n    <ng-template md-tab-label>\n\n      <i class=\"material-icons\">chat</i>\n\n    </ng-template>\n\n    <app-message-list></app-message-list>\n\n  </md-tab>\n\n  <md-tab>\n\n    <ng-template md-tab-label>\n\n      <i class=\"material-icons\">account_circle</i>\n\n    </ng-template>\n\n    <app-friend-list [getMessage]=\"chatDetail\"></app-friend-list>\n\n  </md-tab>\n\n  <md-tab>\n\n    <ng-template md-tab-label>\n\n      <i class=\"material-icons\">search</i>\n\n    </ng-template>\n\n    <app-search-user></app-search-user>\n\n  </md-tab>\n\n  <md-tab>\n\n\n\n    <ng-template md-tab-label>\n\n      <i class=\"material-icons\">supervisor_account</i>\n\n      <span class=\"counter\">\n\n        <app-friend-list-counter></app-friend-list-counter>\n\n      </span>\n\n    </ng-template>\n\n    <app-friend-request-list></app-friend-request-list>\n\n  </md-tab>\n\n\n</md-tab-group>\n"

/***/ }),

/***/ "../../../../../src/app/message-box/message-box.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".black-tile-layer {\n  background: #000000; }\n\n.friend-list {\n  padding: 10px 0; }\n  .friend-list ul {\n    list-style: none;\n    padding: 0; }\n    .friend-list ul li {\n      border-bottom: 1px dotted #CCCCCC;\n      padding: 10px 0;\n      display: block;\n      cursor: pointer; }\n\n.white-bg {\n  background: #FFFFFF; }\n\n.friend-details {\n  display: block;\n  height: 50px; }\n\n.message-panel {\n  display: block;\n  height: 500px;\n  overflow-y: auto;\n  border: 1px solid #CCCCCC; }\n\n.chat-form-panel {\n  padding: 20px 0 0 0; }\n\n.profile-pic {\n  background: #CCCCCC;\n  border-radius: 100%;\n  padding: 22px; }\n\n@media screen and (max-width: 768px) {\n  .sm-hidden {\n    display: none; } }\n\n@media screen and (max-width: 320px) {\n  .xs-hidden {\n    display: none; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/message-box/message-box.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessageBoxComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__http_service_service__ = __webpack_require__("../../../../../src/app/http-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_cookie_service__ = __webpack_require__("../../../../ngx-cookie-service/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_socket_provider_service__ = __webpack_require__("../../../../../src/app/services/socket-provider.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_toPromise__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var MessageBoxComponent = (function () {
    function MessageBoxComponent(formBuilder, httpService, cookieFeatureService, socketProviderService) {
        this.formBuilder = formBuilder;
        this.httpService = httpService;
        this.cookieFeatureService = cookieFeatureService;
        this.socketProviderService = socketProviderService;
        this.searchform = formBuilder.group({
            'searchField': ''
        });
    }
    MessageBoxComponent.prototype.searchUser = function (searchString) {
        var _this = this;
        console.log("Search String: ", searchString);
        var serchResult = new Promise(function (resolve, reject) {
            _this.httpService.searchUser(searchString).toPromise().then(function (res) {
                _this.searchResponse = res.results;
            });
        });
    };
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
                        var buildData = {};
                        buildData = {
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
    return MessageBoxComponent;
}());
MessageBoxComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-message-box',
        template: __webpack_require__("../../../../../src/app/message-box/message-box.component.html"),
        styles: [__webpack_require__("../../../../../src/app/message-box/message-box.component.scss")],
        providers: [
            __WEBPACK_IMPORTED_MODULE_2__http_service_service__["a" /* HttpServiceService */],
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["m" /* MdTabGroup */],
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["l" /* MdTab */]
        ]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__http_service_service__["a" /* HttpServiceService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__http_service_service__["a" /* HttpServiceService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_ngx_cookie_service__["a" /* CookieService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_ngx_cookie_service__["a" /* CookieService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__services_socket_provider_service__["a" /* SocketProviderService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_socket_provider_service__["a" /* SocketProviderService */]) === "function" && _d || Object])
], MessageBoxComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=message-box.component.js.map

/***/ }),

/***/ "../../../../../src/app/message-list/message-list.component.html":
/***/ (function(module, exports) {

module.exports = "<md-card *ngFor=\"let item of getUserList\">\n\n  <md-card-content class=\"user-list\" (click)=\"userDetailOpenDialog(item)\">\n\n    <i class=\"fa fa-user-circle-o fa-2x\" aria-hidden=\"true\"></i>\n\n    <span class='indicator' [ngClass]=\"{'online' : item.isOnline}\"></span>\n\n    <span>{{item.name}}</span>\n\n    <div *ngIf=\"item.latestConversation.requestType == 'recieved'; then recievedBlock else sentBlock\"></div>\n\n    <ng-template #recievedBlock>\n\n      <p class=\"latestMsg\">{{item.latestConversation.message}}</p>\n\n    </ng-template>\n\n    <ng-template #sentBlock>\n\n      <p class=\"latestMsg youTag\">\n\n        {{item.latestConversation.message}}\n\n      </p>\n\n    </ng-template>\n\n  </md-card-content>\n\n</md-card>\n"

/***/ }),

/***/ "../../../../../src/app/message-list/message-list.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "p.latestMsg {\n  display: block;\n  font-size: 0.75rem;\n  color: #CCCCCC;\n  margin-left: 32px; }\n\n.youTag:before {\n  content: \"me: \";\n  font-size: 0.75rem;\n  font-style: italic;\n  color: #CCCCCC; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/message-list/message-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessageListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user_detail_user_detail_component__ = __webpack_require__("../../../../../src/app/user-detail/user-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_socket_provider_service__ = __webpack_require__("../../../../../src/app/services/socket-provider.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MessageListComponent = (function () {
    function MessageListComponent(socketProviderService, dialog) {
        this.socketProviderService = socketProviderService;
        this.dialog = dialog;
    }
    MessageListComponent.prototype.userDetailOpenDialog = function (userInfo) {
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_1__user_detail_user_detail_component__["a" /* UserDetailComponent */], {
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
    return MessageListComponent;
}());
MessageListComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-message-list',
        template: __webpack_require__("../../../../../src/app/message-list/message-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/message-list/message-list.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__services_socket_provider_service__["a" /* SocketProviderService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_socket_provider_service__["a" /* SocketProviderService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_material__["e" /* MdDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_material__["e" /* MdDialog */]) === "function" && _b || Object])
], MessageListComponent);

var _a, _b;
//# sourceMappingURL=message-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/modal/modal.component.html":
/***/ (function(module, exports) {

module.exports = "<div [ngClass]=\"{'closed': !isOpen}\">\n  <div class=\"modal-overlay\" (click)=\"close(true)\"></div>\n\n  <div class=\"modal\">\n    <div *ngIf=\"modalTitle\">\n      <span class=\"right-align p-r-20 \" (click)=\"close(true)\">\n        <i class=\"fa fa-times\" aria-hidden=\"true\"></i>\n      </span>\n    </div>\n    <div class=\"title p-all-25\" *ngIf=\"modalTitle\">\n      <span class=\"title-text\">{{ modalTitle }}</span>\n    </div>\n\n    <div class=\"body\">\n      <ng-content></ng-content>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/modal/modal.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".modal-overlay {\n  background-color: rgba(0, 0, 0, 0.4);\n  bottom: 0;\n  left: 0;\n  position: fixed;\n  right: 0;\n  top: 0;\n  z-index: 1000; }\n\n.closed .modal {\n  top: -50%;\n  display: none; }\n\n.closed .modal-overlay {\n  display: none; }\n\n.modal {\n  box-shadow: 0 12px 15px 0 rgba(0, 0, 0, 0.22), 0 17px 20px 0 rgba(0, 0, 0, 0.12);\n  background-color: white;\n  left: calc(50% - 300px);\n  max-height: calc(100% - 10em);\n  overflow-y: auto;\n  position: fixed;\n  top: 5em;\n  z-index: 1100;\n  transition: all .5s ease;\n  display: block; }\n  @media screen and (min-width: 320px) {\n    .modal {\n      width: 80%;\n      left: 10px; } }\n  @media screen and (min-width: 764px) {\n    .modal {\n      width: 600px; } }\n  .modal .title {\n    text-align: center;\n    color: #000000;\n    line-height: 40px;\n    font-size: 2em;\n    border-bottom: 1px dotted #CCCCCC; }\n  .modal .right-align {\n    position: absolute;\n    right: 5px; }\n    .modal .right-align, .modal .right-align i {\n      line-height: 40px; }\n    .modal .right-align:hover {\n      cursor: pointer;\n      -webkit-transform: scale(1.1);\n              transform: scale(1.1); }\n  .modal .body {\n    padding: 1.2em; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/modal/modal.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__modal_service__ = __webpack_require__("../../../../../src/app/modal/modal.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ModalComponent = (function () {
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
    return ModalComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", String)
], ModalComponent.prototype, "modalId", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", String)
], ModalComponent.prototype, "modalTitle", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Object)
], ModalComponent.prototype, "blocking", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* HostListener */])('keyup'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ModalComponent.prototype, "onMouseEnter", null);
ModalComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-modal',
        template: __webpack_require__("../../../../../src/app/modal/modal.component.html"),
        styles: [__webpack_require__("../../../../../src/app/modal/modal.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__modal_service__["a" /* ModalService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__modal_service__["a" /* ModalService */]) === "function" && _a || Object])
], ModalComponent);

var _a;
//# sourceMappingURL=modal.component.js.map

/***/ }),

/***/ "../../../../../src/app/modal/modal.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modal_component__ = __webpack_require__("../../../../../src/app/modal/modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__modal_service__ = __webpack_require__("../../../../../src/app/modal/modal.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ModalModule = (function () {
    function ModalModule() {
    }
    return ModalModule;
}());
ModalModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__modal_component__["a" /* ModalComponent */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_3__modal_service__["a" /* ModalService */]],
        exports: [__WEBPACK_IMPORTED_MODULE_2__modal_component__["a" /* ModalComponent */]]
    })
], ModalModule);

//# sourceMappingURL=modal.module.js.map

/***/ }),

/***/ "../../../../../src/app/modal/modal.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ModalService = (function () {
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
    return ModalService;
}());
ModalService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], ModalService);

//# sourceMappingURL=modal.service.js.map

/***/ }),

/***/ "../../../../../src/app/registration-form/registration-form.component.html":
/***/ (function(module, exports) {

module.exports = "\n  <md-dialog-actions>\n    <button md-raised-button (click)=\"closeConfirm()\">X</button>\n  </md-dialog-actions>\n  <h2 my-dialog-title>Sign Up</h2>\n  <hr />\n\n  <md-dialog-content>\n    <div *ngIf=\"!statusResponse; then formBlock else elseResponseBlock\"></div>\n\n    <ng-template #formBlock>\n      <p>It’s free and always will be.</p>\n      <hr />\n      <form [formGroup]=\"rForm\" (ngSubmit)=\"registerUser(rForm.value)\">\n\n        <div class=\"row registrationForm\">\n          <div class=\"col-lg-6 col-md-6 col-sm-6 col-xs-12 form-group\">\n            <input type=\"text\" class=\"form-control\" formControlName=\"fName\" placeholder=\"First Name\" />\n\n            <div class=\"alert\" *ngIf=\"!rForm.controls['fName'].valid && rForm.controls['fName'].touched\">\n              {{ fNameAlert }}\n            </div>\n          </div>\n          <div class=\"col-lg-6 col-md-6 col-sm-6 col-xs-12 form-group\">\n            <input type=\"text\" class=\"form-control\" formControlName=\"lName\" placeholder=\"Last Name\" />\n          </div>\n          <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12 form-group\">\n            <input type=\"text\" class=\"form-control\" formControlName=\"email\" placeholder=\"Email\" />\n\n            <div class=\"alert\" *ngIf=\"!rForm.controls['email'].valid && rForm.controls['email'].touched\">\n              {{ emailAlert }}\n            </div>\n          </div>\n          <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12 form-group\">\n            <input type=\"password\" class=\"form-control\" formControlName=\"userPwd\" placeholder=\"New Password\" />\n            <div class=\"alert\" *ngIf=\"!rForm.controls['userPwd'].valid && rForm.controls['userPwd'].touched\">\n              {{ pwdAlert }}\n            </div>\n          </div>\n\n          <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12 form-group\">\n            <hr />\n\n            <h3>Birthday</h3>\n            <div class=\"row\">\n              <div class=\"col-lg-4 col-md-4 col-sm-4 col-xs-12 form-group\">\n                <label>Month</label>\n                <select formControlName=\"month\" class=\"form-control\">\n                  <option value=\"0\" selected>Month</option>\n                  <option value=\"1\">Jan</option>\n                  <option value=\"2\">Feb</option>\n                  <option value=\"3\">Mar</option>\n                  <option value=\"4\">Apr</option>\n                  <option value=\"5\">May</option>\n                  <option value=\"6\">Jun</option>\n                  <option value=\"7\">Jul</option>\n                  <option value=\"8\" selected=\"1\">Aug</option>\n                  <option value=\"9\">Sep</option>\n                  <option value=\"10\">Oct</option>\n                  <option value=\"11\">Nov</option>\n                  <option value=\"12\">Dec</option>\n                </select>\n              </div>\n              <div class=\"col-lg-2 col-md-2 col-sm-2 col-xs-12 form-group\">\n                <label>Date</label>\n                <select formControlName=\"day\" class=\"form-control\">\n                  <option value=\"0\" selected>Day</option>\n                  <option value=\"1\">1</option>\n                  <option value=\"2\">2</option>\n                  <option value=\"3\">3</option>\n                  <option value=\"4\">4</option>\n                  <option value=\"5\">5</option>\n                  <option value=\"6\">6</option>\n                  <option value=\"7\">7</option>\n                  <option value=\"8\">8</option>\n                  <option value=\"9\">9</option>\n                  <option value=\"10\">10</option>\n                  <option value=\"11\">11</option>\n                  <option value=\"12\">12</option>\n                  <option value=\"13\">13</option>\n                  <option value=\"14\">14</option>\n                  <option value=\"15\">15</option>\n                  <option value=\"16\">16</option>\n                  <option value=\"17\">17</option>\n                  <option value=\"18\">18</option>\n                  <option value=\"19\">19</option>\n                  <option value=\"20\">20</option>\n                  <option value=\"21\">21</option>\n                  <option value=\"22\">22</option>\n                  <option value=\"23\">23</option>\n                  <option value=\"24\" selected=\"1\">24</option>\n                  <option value=\"25\">25</option>\n                  <option value=\"26\">26</option>\n                  <option value=\"27\">27</option>\n                  <option value=\"28\">28</option>\n                  <option value=\"29\">29</option>\n                  <option value=\"30\">30</option>\n                  <option value=\"31\">31</option>\n                </select>\n              </div>\n              <div class=\"col-lg-3 col-md-3 col-sm-3 col-xs-12 form-group\">\n                <label>Year</label>\n                <select formControlName=\"year\" class=\"form-control\">\n                  <option value=\"0\" selected>Year</option>\n                  <option value=\"2017\">2017</option>\n                  <option value=\"2016\">2016</option>\n                  <option value=\"2015\">2015</option>\n                  <option value=\"2014\">2014</option>\n                  <option value=\"2013\">2013</option>\n                  <option value=\"2012\">2012</option>\n                  <option value=\"2011\">2011</option>\n                  <option value=\"2010\">2010</option>\n                  <option value=\"2009\">2009</option>\n                  <option value=\"2008\">2008</option>\n                  <option value=\"2007\">2007</option>\n                  <option value=\"2006\">2006</option>\n                  <option value=\"2005\">2005</option>\n                  <option value=\"2004\">2004</option>\n                  <option value=\"2003\">2003</option>\n                  <option value=\"2002\">2002</option>\n                  <option value=\"2001\">2001</option>\n                  <option value=\"2000\">2000</option>\n                  <option value=\"1999\">1999</option>\n                  <option value=\"1998\">1998</option>\n                  <option value=\"1997\">1997</option>\n                  <option value=\"1996\">1996</option>\n                  <option value=\"1995\">1995</option>\n                  <option value=\"1994\">1994</option>\n                  <option value=\"1993\">1993</option>\n                  <option value=\"1992\">1992</option>\n                  <option value=\"1991\">1991</option>\n                  <option value=\"1990\">1990</option>\n                  <option value=\"1989\">1989</option>\n                  <option value=\"1988\">1988</option>\n                  <option value=\"1987\">1987</option>\n                  <option value=\"1986\">1986</option>\n                  <option value=\"1985\">1985</option>\n                  <option value=\"1984\">1984</option>\n                  <option value=\"1983\">1983</option>\n                  <option value=\"1982\">1982</option>\n                  <option value=\"1981\">1981</option>\n                  <option value=\"1980\">1980</option>\n                  <option value=\"1979\">1979</option>\n                  <option value=\"1978\">1978</option>\n                  <option value=\"1977\">1977</option>\n                  <option value=\"1976\">1976</option>\n                  <option value=\"1975\">1975</option>\n                  <option value=\"1974\">1974</option>\n                  <option value=\"1973\">1973</option>\n                  <option value=\"1972\">1972</option>\n                  <option value=\"1971\">1971</option>\n                  <option value=\"1970\">1970</option>\n                  <option value=\"1969\">1969</option>\n                  <option value=\"1968\">1968</option>\n                  <option value=\"1967\">1967</option>\n                  <option value=\"1966\">1966</option>\n                  <option value=\"1965\">1965</option>\n                  <option value=\"1964\">1964</option>\n                  <option value=\"1963\">1963</option>\n                  <option value=\"1962\">1962</option>\n                  <option value=\"1961\">1961</option>\n                  <option value=\"1960\">1960</option>\n                </select>\n              </div>\n            </div>\n          </div>\n          <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12\">\n\n            <div class=\"form-group\">\n              <label class=\"radio-inline\"><input type=\"radio\" formControlName=\"gender\" value=\"Male\" />Male</label>\n              <label class=\"radio-inline\"><input type=\"radio\" formControlName=\"gender\" value=\"Female\" />Female</label>\n            </div>\n            <div class=\"alert\" *ngIf=\"!rForm.controls['gender'].valid && rForm.controls['gender'].touched\">\n              {{ genderAlert }}\n            </div>\n            <div>\n              <p class=\"font-v-small\">By clicking Create Account, you agree to our Terms and that you have read our Data Policy, including our Cookie Use.</p>\n            </div>\n          </div>\n          <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12\">\n            <button class=\"btn btn-secondary btn-lg btn-block\" type=\"submit\">\n              Register <i class=\"fa fa-user-plus\" aria-hidden=\"true\"></i>\n            </button>\n          </div>\n\n        </div>\n\n      </form>\n    </ng-template>\n\n    <ng-template #elseResponseBlock>\n      <div class=\"alert-success\">\n        <p class=\"p-all-25\">{{responseInfo}}</p>\n      </div>\n    </ng-template>\n  </md-dialog-content>\n\n"

/***/ }),

/***/ "../../../../../src/app/registration-form/registration-form.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".registrationForm input[type=text] {\n  border: none;\n  border-bottom: 1px solid #CCC;\n  border-radius: 0; }\n\n.registrationForm input[type=password] {\n  border: none;\n  border-bottom: 1px solid #CCC;\n  border-radius: 0; }\n\n.registrationForm input[type=email] {\n  border: none;\n  border-bottom: 1px solid #CCC;\n  border-radius: 0; }\n\n.registrationForm select {\n  border: none;\n  border-bottom: 1px solid #CCC;\n  border-radius: 0; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/registration-form/registration-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegistrationFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_panel_create_user_service__ = __webpack_require__("../../../../../src/app/login-panel/create-user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};







var RegistrationFormComponent = (function () {
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
            'fName': [null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["j" /* Validators */].required],
            'lName': [null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["j" /* Validators */].required],
            'email': [null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["j" /* Validators */].required],
            'userPwd': [null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["j" /* Validators */].required],
            'month': [null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["j" /* Validators */].required],
            'day': [null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["j" /* Validators */].required],
            'year': [null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["j" /* Validators */].required],
            'gender': [null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["j" /* Validators */].required],
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
    return RegistrationFormComponent;
}());
RegistrationFormComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-registration-form',
        template: __webpack_require__("../../../../../src/app/registration-form/registration-form.component.html"),
        styles: [__webpack_require__("../../../../../src/app/registration-form/registration-form.component.scss")],
        providers: [__WEBPACK_IMPORTED_MODULE_3__login_panel_create_user_service__["a" /* CreateUserService */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["h" /* MdGridList */]]
    }),
    __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MD_DIALOG_DATA */])),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["g" /* MdDialogRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["g" /* MdDialogRef */]) === "function" && _a || Object, String, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormBuilder */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__login_panel_create_user_service__["a" /* CreateUserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__login_panel_create_user_service__["a" /* CreateUserService */]) === "function" && _c || Object])
], RegistrationFormComponent);

var _a, _b, _c;
//# sourceMappingURL=registration-form.component.js.map

/***/ }),

/***/ "../../../../../src/app/search-user/search-user.component.html":
/***/ (function(module, exports) {

module.exports = "<md-card>\n\n  <md-card-content>\n\n    <form [formGroup]=\"searchform\" (ngSubmit)=\"searchUser(searchform.value)\">\n\n      <div class=\"form-group\">\n\n        <div class=\"input-group\">\n\n          <input class=\"form-control search-field\" formControlName=\"searchField\" placeholder=\"Type to search\" type=\"text\"/>\n\n          <!--<button class=\"input-group-addon\" type=\"submit\">-->\n\n            <!--<i class=\"fa fa-search\"></i>-->\n\n          <!--</button>-->\n\n        </div>\n\n      </div>\n\n    </form>\n\n  </md-card-content>\n\n</md-card>\n\n<md-card *ngFor=\"let item of searchResponse\" (click)=\"userDetailOpenDialog(item)\">\n\n  <md-card-content class=\"user-list\">\n\n    <i class=\"fa fa-user-circle-o fa-2x\" aria-hidden=\"true\"></i>\n\n    <span class='indicator' [ngClass]=\"{'online' : item.isOnline}\"></span>\n\n    <span>{{item.name}}</span>\n\n  </md-card-content>\n\n</md-card>\n"

/***/ }),

/***/ "../../../../../src/app/search-user/search-user.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".search-field {\n  border: none;\n  border-bottom: 1px solid #CCCCCC;\n  border-radius: 0; }\n\n.user-list .indicator {\n  border-radius: 5px;\n  padding: 6px;\n  width: 12px;\n  display: block;\n  background: #CCCCCC;\n  position: absolute;\n  z-index: 1;\n  bottom: 22px; }\n\n.user-list .online {\n  background: #00cc00; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/search-user/search-user.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchUserComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__user_detail_user_detail_component__ = __webpack_require__("../../../../../src/app/user-detail/user-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__http_service_service__ = __webpack_require__("../../../../../src/app/http-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_toPromise__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var SearchUserComponent = (function () {
    function SearchUserComponent(formBuilder, httpService, dialog) {
        this.formBuilder = formBuilder;
        this.httpService = httpService;
        this.dialog = dialog;
        this.searchform = formBuilder.group({
            'searchField': ''
        });
    }
    SearchUserComponent.prototype.searchUser = function (searchString) {
        var _this = this;
        console.log("Search String: ", searchString);
        var serchResult = new Promise(function (resolve, reject) {
            _this.httpService.searchUser(searchString).toPromise().then(function (res) {
                _this.searchResponse = res.results;
                //console.log("Login status", this.statusResponse);
            });
        });
    };
    SearchUserComponent.prototype.userDetailOpenDialog = function (userInfo) {
        console.log("User Detail", userInfo);
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_3__user_detail_user_detail_component__["a" /* UserDetailComponent */], {
            width: '87%',
            data: userInfo
        });
    };
    SearchUserComponent.prototype.ngOnInit = function () {
    };
    return SearchUserComponent;
}());
SearchUserComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-search-user',
        template: __webpack_require__("../../../../../src/app/search-user/search-user.component.html"),
        styles: [__webpack_require__("../../../../../src/app/search-user/search-user.component.scss")],
        providers: [__WEBPACK_IMPORTED_MODULE_1__angular_material__["m" /* MdTabGroup */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormBuilder */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__http_service_service__["a" /* HttpServiceService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__http_service_service__["a" /* HttpServiceService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["e" /* MdDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["e" /* MdDialog */]) === "function" && _c || Object])
], SearchUserComponent);

var _a, _b, _c;
//# sourceMappingURL=search-user.component.js.map

/***/ }),

/***/ "../../../../../src/app/services/socket-provider.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SocketProviderService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_socket_io_client__ = __webpack_require__("../../../../socket.io-client/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_socket_io_client___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_socket_io_client__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_BehaviorSubject__ = __webpack_require__("../../../../rxjs/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_BehaviorSubject__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SocketProviderService = (function () {
    function SocketProviderService() {
        this.dataSource = new __WEBPACK_IMPORTED_MODULE_3_rxjs_BehaviorSubject__["BehaviorSubject"]("");
        this.newDataSource = this.dataSource.asObservable();
        this.userTyping = new __WEBPACK_IMPORTED_MODULE_3_rxjs_BehaviorSubject__["BehaviorSubject"]("");
        this.typingDataSource = this.userTyping.asObservable();
        this.socket = __WEBPACK_IMPORTED_MODULE_2_socket_io_client__();
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
    SocketProviderService.prototype.serverInteraction = function () {
        var _this = this;
        var observable = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"](function (observer) {
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
            return function () {
                _this.socket.disconnect();
            };
        });
        return observable;
    };
    SocketProviderService.prototype.sendMessage = function (data) {
        this.socket.emit('chating', data);
    };
    ;
    SocketProviderService.prototype.getFriendList = function (id) {
        this.socket.emit('friend-list', id);
    };
    return SocketProviderService;
}());
SocketProviderService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], SocketProviderService);

//# sourceMappingURL=socket-provider.service.js.map

/***/ }),

/***/ "../../../../../src/app/user-detail/user-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<md-dialog-actions>\n\n  <button md-raised-button (click)=\"closeConfirm()\" class=\"back-btn\">Back</button>\n\n</md-dialog-actions>\n\n<p md-dialog-title class=\"text-center font-v-small align-v-top\">{{data.name}}</p>\n\n<md-dialog-content>\n  <hr />\n  <md-card class=\"no-shadow card-fixed-sized\">\n\n  <md-card-header>\n\n    <div md-card-avatar class=\"header-image\"></div>\n\n    <md-card-title>{{data.name}}</md-card-title>\n\n    <md-card-subtitle *ngIf=\"isOnline; then onlineBlock else offLineBlock\"></md-card-subtitle>\n\n    <ng-template #onlineBlock>\n     <span class=\"user-indicator online\"></span><span class=\"indicator-text\">Online</span>\n    </ng-template>\n\n    <ng-template #offLineBlock>\n      <span class=\"user-indicator offline\"></span><span class=\"indicator-text\">Offline</span>\n    </ng-template>\n\n  </md-card-header>\n\n  <md-card-content>\n\n    <div *ngIf=\"friendStatus; then friendBlock else addFriendBlock\"></div>\n\n    <ng-template #friendBlock></ng-template>\n\n    <ng-template #addFriendBlock>\n\n      <p>Add them so they can message you, and so you can send and receive messages.</p>\n\n      <button\n        md-raised-button\n        type=\"button\"\n        (click)=\"sendFriendRequest(data.friendId)\"\n        [hidden]=\"isFriend == 'confirm' || isFriend == 'pending'\">\n        ADD ON MESSENGER\n      </button>\n\n    </ng-template>\n\n    <div *ngIf=\"data.isFriend == 'pending'\">\n\n      <p>{{data.name}} has sent you the Friend Request.</p>\n\n      <button\n        md-raised-button\n        (click)=\"confirmRequest(data.friendId,'accept')\"\n        type=\"button\">\n        CONFIRM\n      </button>\n\n      <button\n        md-raised-button\n        (click)=\"confirmRequest(data.friendId,'delete')\"\n        type=\"button\">\n        Deny\n      </button>\n\n    </div>\n\n    <hr />\n\n    <div class=\"chat-pane\">\n\n      <div class=\"message-section\" *ngIf=\"conversations !== undefined\">\n\n        <div *ngFor=\"let item of conversations\">\n\n          <div class=\"sent\" *ngIf=\"item.requestType=='sent'\">\n\n            <p>{{item.message}}</p>\n\n          </div>\n\n          <div class=\"received\" *ngIf=\"item.requestType=='recieved'\">\n\n            <p>{{item.message}}</p>\n\n          </div>\n\n        </div>\n\n      </div>\n\n    </div>\n\n    <div class=\"send-message-pane\">\n\n      <p class=\"typingStatus\" *ngIf=\"typeResponse\">{{typeResponse}}</p>\n\n      <form [formGroup]=\"messageForm\" (ngSubmit)=\"sendMessage(messageForm.value)\">\n\n        <input class=\"form-control type-pane\" type=\"text\" formControlName=\"chatMessage\" (keyup)=\"userTyping('none')\" (keydown)=\"userTyping('typing')\"/>\n\n        <button md-raised-button type=\"submit\" class=\"send-message\"><i class=\"material-icons\">send</i></button>\n\n      </form>\n\n      <div class=\"emoji\">\n\n        <button>\n\n          <i class=\"fa fa-smile-o\" aria-hidden=\"true\"></i>\n\n        </button>\n\n        <button>\n\n          <i class=\"fa fa-picture-o\" aria-hidden=\"true\"></i>\n\n        </button>\n\n      </div>\n\n    </div>\n\n  </md-card-content>\n\n\n\n</md-card>\n\n</md-dialog-content>\n"

/***/ }),

/***/ "../../../../../src/app/user-detail/user-detail.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".back-btn {\n  width: auto;\n  box-shadow: none;\n  cursor: pointer;\n  position: absolute;\n  margin: -30px 0 0 -33px;\n  background: none;\n  outline: none; }\n\n.align-v-top {\n  position: absolute;\n  margin-top: -38px;\n  margin-left: 82px; }\n\n.no-shadow {\n  box-shadow: none !important; }\n\n.header-image {\n  background-image: url(" + __webpack_require__("../../../../../src/assets/profile-pics/men-dummy-pic.jpg") + ");\n  background-size: cover; }\n\n.card-fixed-bottom {\n  position: fixed;\n  bottom: 125px; }\n\n.mat-card-title {\n  margin-bottom: -5px !important; }\n\n.user-indicator {\n  border-radius: 5px;\n  padding: 4px;\n  width: 8px;\n  display: inline-block;\n  background: #CCCCCC; }\n  .user-indicator.online {\n    background: #00cc00; }\n\n.indicator-text {\n  font-size: 0.8rem; }\n\n.chat-pane {\n  height: 200px;\n  overflow-y: auto;\n  display: block; }\n  .chat-pane .message-section {\n    display: block;\n    overflow: hidden; }\n    .chat-pane .message-section .sent {\n      display: block;\n      float: right;\n      width: 100%;\n      text-align: right; }\n      .chat-pane .message-section .sent:before {\n        content: \"me: \";\n        font-size: 0.75rem;\n        font-style: italic;\n        color: #CCCCCC; }\n      .chat-pane .message-section .sent p {\n        display: inline-block;\n        background: #CCCCCC;\n        color: #000000;\n        padding: 5px 10px;\n        border-radius: 6px; }\n    .chat-pane .message-section .received {\n      display: block;\n      float: left;\n      width: 100%;\n      text-align: left; }\n      .chat-pane .message-section .received p {\n        display: inline-block;\n        background: #00cc00;\n        color: #FFFFFF;\n        padding: 5px 10px;\n        border-radius: 6px; }\n\n.send-message-pane .typingStatus {\n  display: block;\n  font-size: 0.6em;\n  font-weight: bold;\n  font-style: italic; }\n\n.send-message-pane .type-pane {\n  display: inline-block !important;\n  width: 90% !important; }\n\n.send-message-pane .send-message {\n  background: transparent;\n  border: none;\n  box-shadow: none;\n  min-width: auto;\n  padding: 0; }\n\n.send-message-pane .emoji {\n  display: block;\n  margin: 10px 5px; }\n  .send-message-pane .emoji button {\n    border: none;\n    background: transparent;\n    cursor: pointer; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/user-detail/user-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserDetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__http_service_service__ = __webpack_require__("../../../../../src/app/http-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_cookie_service__ = __webpack_require__("../../../../ngx-cookie-service/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_socket_provider_service__ = __webpack_require__("../../../../../src/app/services/socket-provider.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_toPromise__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};








var UserDetailComponent = (function () {
    function UserDetailComponent(formBuilder, thisDialogRef, data, httpService, cookieFeatureService, socketProviderService) {
        this.formBuilder = formBuilder;
        this.thisDialogRef = thisDialogRef;
        this.data = data;
        this.httpService = httpService;
        this.cookieFeatureService = cookieFeatureService;
        this.socketProviderService = socketProviderService;
        this.messageForm = formBuilder.group({
            'chatMessage': ''
        });
    }
    UserDetailComponent.prototype.closeConfirm = function () {
        this.thisDialogRef.close("Closed");
    };
    UserDetailComponent.prototype.sendFriendRequest = function (friendId) {
        var _this = this;
        var post = { "friendId": friendId, "userId": this.cookieFeatureService.get("user") };
        var sendRequest = new Promise(function (resolve, reject) {
            _this.httpService.friendRequest(post).toPromise().then(function (res) {
                _this.isFriend = res.status;
                console.log("Response:", res);
            });
        });
    };
    UserDetailComponent.prototype.confirmRequest = function (friendId, action) {
        var _this = this;
        var post = { "friendId": friendId, "userId": this.cookieFeatureService.get("user"), "action": action };
        var sendRequest = new Promise(function (resolve, reject) {
            _this.httpService.requestAction(post).toPromise().then(function (res) {
                _this.isFriend = res.status;
                console.log("Response:", res);
            });
        });
    };
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
        var userId = this.cookieFeatureService.get("user");
        var friendId = this.data.friendId;
        var sendData = { "userId": userId, "friendId": friendId, "typing": typingStatus };
        this.socketProviderService.typingStatus(sendData);
    };
    UserDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log("Data from parent", this.data);
        this.friendStatus = this.data.isFriend;
        this.isOnline = this.data.isOnline;
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
    return UserDetailComponent;
}());
UserDetailComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-user-detail',
        template: __webpack_require__("../../../../../src/app/user-detail/user-detail.component.html"),
        styles: [__webpack_require__("../../../../../src/app/user-detail/user-detail.component.scss")],
        providers: [
            __WEBPACK_IMPORTED_MODULE_2__http_service_service__["a" /* HttpServiceService */]
        ]
    }),
    __param(2, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MD_DIALOG_DATA */])),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormBuilder */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["g" /* MdDialogRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["g" /* MdDialogRef */]) === "function" && _b || Object, Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__http_service_service__["a" /* HttpServiceService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__http_service_service__["a" /* HttpServiceService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3_ngx_cookie_service__["a" /* CookieService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_ngx_cookie_service__["a" /* CookieService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__services_socket_provider_service__["a" /* SocketProviderService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_socket_provider_service__["a" /* SocketProviderService */]) === "function" && _e || Object])
], UserDetailComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=user-detail.component.js.map

/***/ }),

/***/ "../../../../../src/assets/profile-pics/men-dummy-pic.jpg":
/***/ (function(module, exports) {

module.exports = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAHgAcQMBIgACEQEDEQH/xAAcAAEAAgMBAQEAAAAAAAAAAAAAAQcDBQYECAL/xAA3EAACAgECAwQIAQ0AAAAAAAAAAQIDBAURBiExBxJxkRMUIkFCUWGhsRYjJDJDUlWBgpPB0fD/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8AvEAAAAAI3PLn6jh6dX6TOyaqIPo7Jbb+BW3EPH+blXTp0eXq2Onsrdt5z+vPoBae6XVhNNblA36hm5MnK/MyLG+rlbJmTE1jUsKSli5+TXt7lY2vJgX2CstC7RciqcatZrjbU+TvrW0o/Vx6P7Fj4uTVl49eRj2RsqsW8ZRfJoDMAAAAAAAAAABiyboY+PZdY9oVxc5P6JbmU1HF7ceGdScevq8kBTut6rk6zqFuXlTk+833IN8oR9yR4AAAAAHd9meuyqyno+Q96rd50N/DL3rwa5+Jwh7dEyHi6zgXpv8AN5Fbfh3lv9twL7BCJAAAAAAAAAGv4gx3laHn0R62Y80vHuvY2Biyp1149s7pKNag3KTfJLYD58T3SYJmlGclFpxTaTXyIAAAAerSq3dquFUus8iuPnJI8pseHLKqtf0+3IsjXVC+EpSl0Wz3AvZEkJprdEgAAAAAAAADwa/jPM0XOxo/rW484rx2Z7wwPnf/ALmDo+M+Hb9FzZ5Eu56rkXz9D3XzS67Pz+xzgAAADNg0yyM3Hogt5W2xgl822YSwOA+ErPTYmtZdkHV3fSU1Jc9/c3+IFjxSSSXu5EgAAAAAAAAAAAByHafjO7h1XRjv6C6Mm/knyb+5Ux9B5EKrKZ15EYyqmu7JT6NMo3iLFx8HXMzFw5b0V2bQ577LbfbcDXAAA+SL90rH9V0zEx9tvR0xi19UiquznGxMniJLMhGbrqdlSk+XeTXny3LfXJASAAAAAAAAAYcrJoxKnbk3QqrXWU5bIDMRucdqvaHpeLvDBhPMsXvXsw8318jjNU421rUN4xyFi1P4Mf2eXj1A33ahrcZurSceaaT7+Rs/f8MX+PkV8TKTlJyk3KTe7be7bIAAACYylGSlCUoyXRxezRbvA3EdGq6bVi3W/p1EFGcZy5zS+JfMqE/ULJ1TjOucoTi94yi9mn9GB9CpklR6Px9quB3YZahm0r9/lNf1f7R2+j8baPqfdg7/AFa5/Bf7Pk+gHSgiL32ae6fyJAAACrNX7RM/I3hplUcWvp35+1Nr8EcjmZmVnWu7NyLL7PnZJswAAAAAAAAAAAAAAA2mk8QappDisHLlGtfspe1B/wAn/g7bRu0ai1wq1bHdDb2dtXOC8V1X3K1AF4flPof8Uxf7gKP2XyQAAAAAAAAAAAAAAAAAAAAAAP/Z"

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_hammerjs__ = __webpack_require__("../../../../hammerjs/hammer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_hammerjs__);





if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ }),

/***/ 1:
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map