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
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n\n<flash-messages></flash-messages>\n<router-outlet></router-outlet>\n<!--<app-footer></app-footer>-->\n\n\n\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/index.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/navbar/navbar.component */ "./src/app/components/navbar/navbar.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/profile/profile.component */ "./src/app/components/profile/profile.component.ts");
/* harmony import */ var _components_manage_users_manage_users_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/manage-users/manage-users.component */ "./src/app/components/manage-users/manage-users.component.ts");
/* harmony import */ var _components_manage_leaves_manage_leaves_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/manage-leaves/manage-leaves.component */ "./src/app/components/manage-leaves/manage-leaves.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_request_leaves_request_leaves_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/request-leaves/request-leaves.component */ "./src/app/components/request-leaves/request-leaves.component.ts");
/* harmony import */ var _components_leave_history_leave_history_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/leave-history/leave-history.component */ "./src/app/components/leave-history/leave-history.component.ts");
/* harmony import */ var _components_add_post_add_post_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/add-post/add-post.component */ "./src/app/components/add-post/add-post.component.ts");
/* harmony import */ var _components_report_genaration_report_genaration_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/report-genaration/report-genaration.component */ "./src/app/components/report-genaration/report-genaration.component.ts");
/* harmony import */ var _components_view_user_view_user_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/view-user/view-user.component */ "./src/app/components/view-user/view-user.component.ts");
/* harmony import */ var _components_manage_admin_manage_admin_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/manage-admin/manage-admin.component */ "./src/app/components/manage-admin/manage-admin.component.ts");
/* harmony import */ var _components_update_user_update_user_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/update-user/update-user.component */ "./src/app/components/update-user/update-user.component.ts");
/* harmony import */ var _components_update_post_update_post_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/update-post/update-post.component */ "./src/app/components/update-post/update-post.component.ts");
/* harmony import */ var _components_create_pdf_create_pdf_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/create-pdf/create-pdf.component */ "./src/app/components/create-pdf/create-pdf.component.ts");
/* harmony import */ var _components_control_dates_control_dates_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/control-dates/control-dates.component */ "./src/app/components/control-dates/control-dates.component.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_post_service__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./services/post.service */ "./src/app/services/post.service.ts");
/* harmony import */ var _services_request_service__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./services/request.service */ "./src/app/services/request.service.ts");
/* harmony import */ var _services_authguard_service__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./services/authguard.service */ "./src/app/services/authguard.service.ts");
/* harmony import */ var _components_about_about_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./components/about/about.component */ "./src/app/components/about/about.component.ts");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./components/footer/footer.component */ "./src/app/components/footer/footer.component.ts");
/* harmony import */ var _components_register_register_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./components/register/register.component */ "./src/app/components/register/register.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
































var applicationRoutes = [
    { path: 'login', component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_9__["LoginComponent"] },
    { path: 'manageUsers', component: _components_manage_users_manage_users_component__WEBPACK_IMPORTED_MODULE_11__["ManageUsersComponent"], canActivate: [_services_authguard_service__WEBPACK_IMPORTED_MODULE_27__["AuthguardService"]], data: { roles: ['Admin'] } },
    { path: 'profile', component: _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_10__["ProfileComponent"], canActivate: [_services_authguard_service__WEBPACK_IMPORTED_MODULE_27__["AuthguardService"]], data: { roles: ['All'] } },
    { path: '', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_13__["HomeComponent"] },
    { path: 'about', component: _components_about_about_component__WEBPACK_IMPORTED_MODULE_28__["AboutComponent"] },
    { path: 'requestLeaves', component: _components_request_leaves_request_leaves_component__WEBPACK_IMPORTED_MODULE_14__["RequestLeavesComponent"], canActivate: [_services_authguard_service__WEBPACK_IMPORTED_MODULE_27__["AuthguardService"]], data: { roles: ['Admin&Staff'] } },
    { path: 'leaveHistory', component: _components_leave_history_leave_history_component__WEBPACK_IMPORTED_MODULE_15__["LeaveHistoryComponent"], canActivate: [_services_authguard_service__WEBPACK_IMPORTED_MODULE_27__["AuthguardService"]], data: { roles: ['Admin&Staff'] } },
    { path: 'addPost', component: _components_add_post_add_post_component__WEBPACK_IMPORTED_MODULE_16__["AddPostComponent"], canActivate: [_services_authguard_service__WEBPACK_IMPORTED_MODULE_27__["AuthguardService"]], data: { roles: ['Head&Admin'] } },
    { path: 'reportGenaration', component: _components_report_genaration_report_genaration_component__WEBPACK_IMPORTED_MODULE_17__["ReportGenarationComponent"], canActivate: [_services_authguard_service__WEBPACK_IMPORTED_MODULE_27__["AuthguardService"]], data: { roles: ['Admin'] } },
    { path: 'manageLeaves', component: _components_manage_leaves_manage_leaves_component__WEBPACK_IMPORTED_MODULE_12__["ManageLeavesComponent"], canActivate: [_services_authguard_service__WEBPACK_IMPORTED_MODULE_27__["AuthguardService"]], data: { roles: ['Head'] } },
    { path: 'viewUser', component: _components_view_user_view_user_component__WEBPACK_IMPORTED_MODULE_18__["ViewUserComponent"], canActivate: [_services_authguard_service__WEBPACK_IMPORTED_MODULE_27__["AuthguardService"]], data: { roles: ['Head'] } },
    { path: 'manageAdmin', component: _components_manage_admin_manage_admin_component__WEBPACK_IMPORTED_MODULE_19__["ManageAdminComponent"], canActivate: [_services_authguard_service__WEBPACK_IMPORTED_MODULE_27__["AuthguardService"]], data: { roles: ['Head'] } },
    { path: 'updateUser', component: _components_update_user_update_user_component__WEBPACK_IMPORTED_MODULE_20__["UpdateUserComponent"], canActivate: [_services_authguard_service__WEBPACK_IMPORTED_MODULE_27__["AuthguardService"]], data: { roles: ['Head'] } },
    { path: 'updatePost', component: _components_update_post_update_post_component__WEBPACK_IMPORTED_MODULE_21__["UpdatePostComponent"], canActivate: [_services_authguard_service__WEBPACK_IMPORTED_MODULE_27__["AuthguardService"]], data: { roles: ['Head&Admin'] } },
    { path: 'createPDF', component: _components_create_pdf_create_pdf_component__WEBPACK_IMPORTED_MODULE_22__["CreatePDFComponent"], canActivate: [_services_authguard_service__WEBPACK_IMPORTED_MODULE_27__["AuthguardService"]], data: { roles: ['Admin'] } },
    { path: 'controlDates', component: _components_control_dates_control_dates_component__WEBPACK_IMPORTED_MODULE_23__["ControlDatesComponent"], canActivate: [_services_authguard_service__WEBPACK_IMPORTED_MODULE_27__["AuthguardService"]], data: { roles: ['Head'] } }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_8__["NavbarComponent"],
                _components_login_login_component__WEBPACK_IMPORTED_MODULE_9__["LoginComponent"],
                _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_10__["ProfileComponent"],
                _components_manage_users_manage_users_component__WEBPACK_IMPORTED_MODULE_11__["ManageUsersComponent"],
                _components_manage_leaves_manage_leaves_component__WEBPACK_IMPORTED_MODULE_12__["ManageLeavesComponent"],
                _components_home_home_component__WEBPACK_IMPORTED_MODULE_13__["HomeComponent"],
                _components_request_leaves_request_leaves_component__WEBPACK_IMPORTED_MODULE_14__["RequestLeavesComponent"],
                _components_leave_history_leave_history_component__WEBPACK_IMPORTED_MODULE_15__["LeaveHistoryComponent"],
                _components_add_post_add_post_component__WEBPACK_IMPORTED_MODULE_16__["AddPostComponent"],
                _components_report_genaration_report_genaration_component__WEBPACK_IMPORTED_MODULE_17__["ReportGenarationComponent"],
                _components_view_user_view_user_component__WEBPACK_IMPORTED_MODULE_18__["ViewUserComponent"],
                _components_manage_admin_manage_admin_component__WEBPACK_IMPORTED_MODULE_19__["ManageAdminComponent"],
                _components_update_user_update_user_component__WEBPACK_IMPORTED_MODULE_20__["UpdateUserComponent"],
                _components_update_post_update_post_component__WEBPACK_IMPORTED_MODULE_21__["UpdatePostComponent"],
                _components_create_pdf_create_pdf_component__WEBPACK_IMPORTED_MODULE_22__["CreatePDFComponent"],
                _components_control_dates_control_dates_component__WEBPACK_IMPORTED_MODULE_23__["ControlDatesComponent"],
                _components_about_about_component__WEBPACK_IMPORTED_MODULE_28__["AboutComponent"],
                _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_29__["FooterComponent"],
                _components_register_register_component__WEBPACK_IMPORTED_MODULE_30__["RegisterComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_3__["HttpModule"],
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_6__["BsDatepickerModule"].forRoot(),
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot(applicationRoutes),
                angular2_flash_messages__WEBPACK_IMPORTED_MODULE_5__["FlashMessagesModule"]
            ],
            providers: [_services_auth_service__WEBPACK_IMPORTED_MODULE_24__["AuthService"], _services_request_service__WEBPACK_IMPORTED_MODULE_26__["RequestService"], _services_post_service__WEBPACK_IMPORTED_MODULE_25__["PostService"], angular2_flash_messages__WEBPACK_IMPORTED_MODULE_5__["FlashMessagesService"], _services_authguard_service__WEBPACK_IMPORTED_MODULE_27__["AuthguardService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/about/about.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/about/about.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*.all {*/\r\n  /*background-image: url(../../../assets/image/about.jpg);*/\r\n  /*!*padding: 20px;*!*/\r\n  /*background-repeat: no-repeat;*/\r\n  /*height: 505px;*/\r\n  /*background-size: cover;*/\r\n  /*}*/\r\n"

/***/ }),

/***/ "./src/app/components/about/about.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/about/about.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"all\">\n  <div class=\"container\">\n    <div class=\"col-md-4\"></div>\n    <div class=\"col-md-4\" >\n      <img src=\"assets/image/leave-holiday.png\" height=\"200px\" width=\"75%\">\n    </div>\n    <div class=\"col-md-4\"></div>\n  </div>\n  <br>\n  <div class=\"container\">\n    <h5><b>\n      <h3>Welcome To UCSC E-Leave Forum</h3>\n      <br>\n      In this portal UCSC Acadamic and Non-Acadamic staff can apply thier leave request online. so that they wouldn't apply\n      leaverequest manyally anymore.\n      <br>\n      <br>\n      <b>Procedure</b>\n      <br>\n      <br>\n      <ul style=\"list-style-type:disc\">\n        <li>if you are member of UCSC Acadamic or Non Acadamic staff you can apply for e-leave facility</li>\n        <li>first Register to this facility via Acadamic office(through the system)</li>\n        <li>then you can make your own e-leave request!</li>\n        <li>you can manage your leave,leave history</li>\n        <li>also you can watch leave availble dates and not-availble dates</li>\n      </ul>\n\n    </b></h5>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/components/about/about.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/about/about.component.ts ***!
  \*****************************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-about',
            template: __webpack_require__(/*! ./about.component.html */ "./src/app/components/about/about.component.html"),
            styles: [__webpack_require__(/*! ./about.component.css */ "./src/app/components/about/about.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/components/add-post/add-post.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/add-post/add-post.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\n    font-family: arial, sans-serif;\n    border-collapse: collapse;\n    width: 100%;\n}\n\ntd, th {\n    border: 1px solid #dddddd;\n    text-align: left;\n    padding: 8px;\n}\n\ntr:nth-child(even) {\n    background-color: #dddddd;\n}"

/***/ }),

/***/ "./src/app/components/add-post/add-post.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/add-post/add-post.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class = \"container\">\n  <h2 class = \"page-header\"> Add Post</h2>\n  <form (submit) = \"addPost()\">\n    <div class = \"form-group col-md-7\">\n      <!--about-->\n      <label>Topic</label>\n      <input type=\"text\" [(ngModel)] = \"about\" name =\"about\" class = \"form-control\" required>\n    </div>\n    <div class=\"col-md-5\"></div>\n\n    <div class = \"form-group col-md-7\">\n      <label>Content</label><br>\n      <textarea [(ngModel)]='content' name =\"content\" rows=\"6\" cols=\"84\"></textarea>\n    </div>\n    <div class=\"col-md-5\"></div>\n\n    <div class = \"form-group col-md-7\">\n      <label>Date</label>\n      <input type=\"date\" [(ngModel)] = \"date\" name =\"date\" class = \"form-control\" required>\n    </div>\n    <div class=\"col-md-5\"></div>\n\n\n    <div class=\"col-md-7\">\n      <input type=\"submit\" class =\"btn btn-primary\" value = \"Submit\">\n    </div>\n    <div class=\"col-md-5\"></div>\n\n  </form>\n</div>\n<hr>\n<div class = \"container\">\n\t<table>\n\t\t\t<tr>\n\t\t\t   <th>Name</th>\n\t\t\t   <th>Post</th>\n\t\t\t   <th>Date</th>\n\t\t\t   <th>About</th>\n\t\t\t   <th>Delete</th>\n\t\t\t   <th>Update</th>\n\t\t\t</tr>\n\n\t\t\t<tr *ngFor = \"let post of posts\">\n\t\t\t   <td>{{post.name}}</td>\n\t\t\t   <td>{{post.post}}</td>\n\t\t\t   <td>{{post.date}}</td>\n\t\t\t   <th>{{post.about}}</th>\n        <th><input type=\"button\" (click) = \"updatePost(post._id)\" value= \"Edit\" class =\"btn btn-success\"></th>\n\t\t\t   <th><input type=\"button\" (click) = \"deletePost(post._id)\" value= \"Delete\" class =\"btn btn-danger\"></th>\n\n\t\t\t</tr>\n\n\t</table>\n</div>\n"

/***/ }),

/***/ "./src/app/components/add-post/add-post.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/add-post/add-post.component.ts ***!
  \***********************************************************/
/*! exports provided: AddPostComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddPostComponent", function() { return AddPostComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_post_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/post.service */ "./src/app/services/post.service.ts");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AddPostComponent = /** @class */ (function () {
    function AddPostComponent(postService, authService, flashMessage, router) {
        this.postService = postService;
        this.authService = authService;
        this.flashMessage = flashMessage;
        this.router = router;
        this.email = this.authService.getAuthEmail();
        this.name = this.authService.getAuthName();
        this.post = this.authService.getAuthPost();
    }
    AddPostComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.postService.getAllPost().subscribe(function (request) {
            _this.posts = request;
        });
    };
    AddPostComponent.prototype.addPost = function () {
        var _this = this;
        var post = {
            name: this.name,
            post: this.post,
            email: this.email,
            about: this.about,
            date: this.date,
            content: this.content
        };
        this.postService.sendPost(post).subscribe(function (request) {
            _this.posts.push(request);
            _this.postService.getAllPost().subscribe(function (request) {
                _this.posts = request;
            });
        });
    };
    AddPostComponent.prototype.deletePost = function (id) {
        var post = this.posts;
        this.postService.deletePost(id).subscribe(function (data) {
            if (data.n == 1) {
                for (var i = 0; i < post.length; i++) {
                    if (post[i]._id == id) {
                        post.splice(i, 1);
                    }
                }
            }
        });
    };
    AddPostComponent.prototype.updatePost = function (id) {
        var navigationExtras = {
            queryParams: {
                "id": id
            }
        };
        this.router.navigate(["/updatePost"], navigationExtras);
    };
    AddPostComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-post',
            template: __webpack_require__(/*! ./add-post.component.html */ "./src/app/components/add-post/add-post.component.html"),
            styles: [__webpack_require__(/*! ./add-post.component.css */ "./src/app/components/add-post/add-post.component.css")]
        }),
        __metadata("design:paramtypes", [_services_post_service__WEBPACK_IMPORTED_MODULE_2__["PostService"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
            angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__["FlashMessagesService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AddPostComponent);
    return AddPostComponent;
}());



/***/ }),

/***/ "./src/app/components/control-dates/control-dates.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/components/control-dates/control-dates.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/control-dates/control-dates.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/components/control-dates/control-dates.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class = \"container\">\n\t<h2 class = \"page-header\"> Select Dates</h2>\n\t<form (submit) = \"blockDate()\">\n\t\t<div class = \"form-group\">\n\t\t\t<label>Date</label>\n      <input type=\"date\"  [(ngModel)] = \"date\" name =\"date\" class = \"form-control\" required>\n\t\t</div>\n\t\t<input type=\"submit\" class =\"btn btn-success\" value = \"Submit\">\n\t</form>\n</div>\n<hr>\n"

/***/ }),

/***/ "./src/app/components/control-dates/control-dates.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/control-dates/control-dates.component.ts ***!
  \*********************************************************************/
/*! exports provided: ControlDatesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ControlDatesComponent", function() { return ControlDatesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ControlDatesComponent = /** @class */ (function () {
    function ControlDatesComponent() {
    }
    ControlDatesComponent.prototype.ngOnInit = function () {
    };
    ControlDatesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-control-dates',
            template: __webpack_require__(/*! ./control-dates.component.html */ "./src/app/components/control-dates/control-dates.component.html"),
            styles: [__webpack_require__(/*! ./control-dates.component.css */ "./src/app/components/control-dates/control-dates.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ControlDatesComponent);
    return ControlDatesComponent;
}());



/***/ }),

/***/ "./src/app/components/create-pdf/create-pdf.component.css":
/*!****************************************************************!*\
  !*** ./src/app/components/create-pdf/create-pdf.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\n    font-family: arial, sans-serif;\n    border-collapse: collapse;\n    width: 100%;\n}\n\ntd, th {\n    border: 1px solid #dddddd;\n    text-align: left;\n    padding: 8px;\n}\n\ntr:nth-child(even) {\n    background-color: #dddddd;\n}"

/***/ }),

/***/ "./src/app/components/create-pdf/create-pdf.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/create-pdf/create-pdf.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class = \"container\" id=\"content\" #content>\n\t<div *ngIf=\"user\">\n    <h2><b>Leave History of {{user.full_name}}</b></h2>\n\t\t<br>\n    <h4><b>Email : {{user.email}}</b></h4>\n    <h4><b>Contact : {{user.phone}}</b></h4>\n\t\t<h4><b>Post : {{user.post}}</b></h4>\n\t\t<br><br>\n\n\t\t<table>\n\t\t\t<tr>\n\t\t\t   <th>Date</th>\n\t\t\t   <th>Reason</th>\n\t\t\t   <th>Describe</th>\n\t\t\t   <th>State</th>\n\t\t\t</tr>\n\n\t\t\t<tr *ngFor = \"let hry of history\">\n\t\t\t   <td>{{hry.date}}</td>\n\t\t\t   <td>{{hry.reason}}</td>\n\t\t\t   <td>{{hry.describe}}</td>\n\t\t\t   <th>{{hry.state}}</th>\n\t\t\t</tr>\n\n\t\t</table>\n\t\t<br><br>\n\n\t\t<div class = \"col-md-3\">\n\t\t\t\t<input type=\"button\" (click) = \"redirectBack()\" value= \"back\" class =\"btn btn-info\">\n\t    </div>\n\t    <div class = \"col-md-3\">\n\t\t\t\t<input type=\"button\" (click) = \"downloadPFD()\" value= \"Download as PDF\" class =\"btn btn-success\">\n\t    </div>\n\t</div>\n</div>\n\n\n\n\n\n\n\n\n\n"

/***/ }),

/***/ "./src/app/components/create-pdf/create-pdf.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/create-pdf/create-pdf.component.ts ***!
  \***************************************************************/
/*! exports provided: CreatePDFComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreatePDFComponent", function() { return CreatePDFComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_request_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/request.service */ "./src/app/services/request.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var jspdf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jspdf */ "./node_modules/jspdf/dist/jspdf.min.js");
/* harmony import */ var jspdf__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(jspdf__WEBPACK_IMPORTED_MODULE_4__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var CreatePDFComponent = /** @class */ (function () {
    function CreatePDFComponent(route, requestService, authService, router) {
        var _this = this;
        this.route = route;
        this.requestService = requestService;
        this.authService = authService;
        this.router = router;
        this.route.queryParams.subscribe(function (params) {
            _this.id = params["id"];
            _this.email = params["email"];
        });
    }
    CreatePDFComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getUserToUpdate(this.id).subscribe(function (user) {
            _this.user = user;
        });
        this.requestService.viewHistory(this.email).subscribe(function (user) {
            _this.history = user;
        });
    };
    CreatePDFComponent.prototype.downloadPFD = function () {
        var doc = new jspdf__WEBPACK_IMPORTED_MODULE_4__();
        var specialElementHandlers = {
            '#editor': function (element, renderer) {
                return true;
            }
        };
        var content = this.content.nativeElement;
        doc.fromHTML(content.innerHTML, 15, 15, {
            'width': 190,
            'elementHandlers': specialElementHandlers
        });
        doc.save(this.user.full_name);
    };
    CreatePDFComponent.prototype.redirectBack = function () {
        this.router.navigate(['/reportGenaration']);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('content'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], CreatePDFComponent.prototype, "content", void 0);
    CreatePDFComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-create-pdf',
            template: __webpack_require__(/*! ./create-pdf.component.html */ "./src/app/components/create-pdf/create-pdf.component.html"),
            styles: [__webpack_require__(/*! ./create-pdf.component.css */ "./src/app/components/create-pdf/create-pdf.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _services_request_service__WEBPACK_IMPORTED_MODULE_2__["RequestService"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], CreatePDFComponent);
    return CreatePDFComponent;
}());



/***/ }),

/***/ "./src/app/components/footer/footer.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/footer/footer.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/footer/footer.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/footer/footer.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  footer works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/footer/footer.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/components/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/components/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/components/home/home.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/home/home.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".logo{\r\n  float: right;\r\n}\r\n\r\n\r\n.three-column-footer-contact-form-container {\r\n  background-color: #8a8a8a;\r\n}\r\n\r\n\r\n.three-column-footer-contact-form-container .three-column-footer-contact-form {\r\n  max-width: 75rem;\r\n  margin-right: auto;\r\n  margin-left: auto;\r\n  color: #e6e6e6;\r\n  padding: 3.75rem 0;\r\n}\r\n\r\n\r\n.three-column-footer-contact-form-container .three-column-footer-contact-form::before, .three-column-footer-contact-form-container .three-column-footer-contact-form::after {\r\n  display: table;\r\n  content: ' ';\r\n  flex-basis: 0;\r\n  order: 1;\r\n}\r\n\r\n\r\n.three-column-footer-contact-form-container .three-column-footer-contact-form::after {\r\n  clear: both;\r\n}\r\n\r\n\r\n.three-column-footer-contact-form-container .three-column-footer-contact-form a {\r\n  color: #e6e6e6;\r\n}\r\n\r\n\r\n.three-column-footer-contact-form-container .three-column-footer-contact-form .footer-left {\r\n  width: 100%;\r\n  float: left;\r\n  padding-right: 0.625rem;\r\n  padding-left: 0.625rem;\r\n  display: table;\r\n}\r\n\r\n\r\n.three-column-footer-contact-form-container .three-column-footer-contact-form .footer-left .baseline {\r\n  display: table-cell;\r\n  vertical-align: bottom;\r\n}\r\n\r\n\r\n.three-column-footer-contact-form-container .three-column-footer-contact-form .footer-left .contact-details p {\r\n  font-size: 0.8rem;\r\n  margin-bottom: 0;\r\n}\r\n\r\n\r\n.three-column-footer-contact-form-container .three-column-footer-contact-form .footer-left .input-group {\r\n  padding: 2rem 0 0 0;\r\n}\r\n\r\n\r\n.three-column-footer-contact-form-container .three-column-footer-contact-form .footer-left .input-group input {\r\n  border-bottom: 2px solid #cacaca;\r\n}\r\n\r\n\r\n@media print, screen and (min-width: 40em) {\r\n  .three-column-footer-contact-form-container .three-column-footer-contact-form .footer-left {\r\n    padding-right: 0.9375rem;\r\n    padding-left: 0.9375rem;\r\n  }\r\n}\r\n\r\n\r\n.three-column-footer-contact-form-container .three-column-footer-contact-form .footer-left:last-child:not(:first-child) {\r\n  float: right;\r\n}\r\n\r\n\r\n@media print, screen and (min-width: 64em) {\r\n  .three-column-footer-contact-form-container .three-column-footer-contact-form .footer-left {\r\n    width: 25%;\r\n    float: left;\r\n    padding-right: 0.625rem;\r\n    padding-left: 0.625rem;\r\n  }\r\n}\r\n\r\n\r\n@media print, screen and (min-width: 64em) and (min-width: 40em) {\r\n  .three-column-footer-contact-form-container .three-column-footer-contact-form .footer-left {\r\n    padding-right: 0.9375rem;\r\n    padding-left: 0.9375rem;\r\n  }\r\n}\r\n\r\n\r\n@media print, screen and (min-width: 64em) {\r\n  .three-column-footer-contact-form-container .three-column-footer-contact-form .footer-left:last-child:not(:first-child) {\r\n    float: right;\r\n  }\r\n}\r\n\r\n\r\n.three-column-footer-contact-form-container .three-column-footer-contact-form .footer-center {\r\n  text-align: left;\r\n  width: 100%;\r\n  float: left;\r\n  padding-right: 0.625rem;\r\n  padding-left: 0.625rem;\r\n  display: table;\r\n}\r\n\r\n\r\n@media print, screen and (min-width: 40em) {\r\n  .three-column-footer-contact-form-container .three-column-footer-contact-form .footer-center {\r\n    padding-right: 0.9375rem;\r\n    padding-left: 0.9375rem;\r\n  }\r\n}\r\n\r\n\r\n.three-column-footer-contact-form-container .three-column-footer-contact-form .footer-center:last-child:not(:first-child) {\r\n  float: right;\r\n}\r\n\r\n\r\n@media print, screen and (min-width: 64em) {\r\n  .three-column-footer-contact-form-container .three-column-footer-contact-form .footer-center {\r\n    width: 33.33333%;\r\n    float: left;\r\n    padding-right: 0.625rem;\r\n    padding-left: 0.625rem;\r\n    position: relative;\r\n    left: 8.33333%;\r\n  }\r\n}\r\n\r\n\r\n@media print, screen and (min-width: 64em) and (min-width: 40em) {\r\n  .three-column-footer-contact-form-container .three-column-footer-contact-form .footer-center {\r\n    padding-right: 0.9375rem;\r\n    padding-left: 0.9375rem;\r\n  }\r\n}\r\n\r\n\r\n@media print, screen and (min-width: 64em) {\r\n  .three-column-footer-contact-form-container .three-column-footer-contact-form .footer-center:last-child:not(:first-child) {\r\n    float: right;\r\n  }\r\n}\r\n\r\n\r\n.three-column-footer-contact-form-container .three-column-footer-contact-form .footer-center .baseline {\r\n  display: table-cell;\r\n  vertical-align: bottom;\r\n}\r\n\r\n\r\n.three-column-footer-contact-form-container .three-column-footer-contact-form .footer-center .input-group {\r\n  padding: 0.5rem 0 0 0;\r\n}\r\n\r\n\r\n.three-column-footer-contact-form-container .three-column-footer-contact-form .footer-center .input-group input {\r\n  border-bottom: 2px solid #cacaca;\r\n}\r\n\r\n\r\n.three-column-footer-contact-form-container .three-column-footer-contact-form .footer-center .input-group textarea {\r\n  border-bottom: 2px solid #cacaca;\r\n}\r\n\r\n\r\n.three-column-footer-contact-form-container .three-column-footer-contact-form .footer-right {\r\n  text-align: right;\r\n  width: 100%;\r\n  float: left;\r\n  padding-right: 0.625rem;\r\n  padding-left: 0.625rem;\r\n  display: table;\r\n}\r\n\r\n\r\n.three-column-footer-contact-form-container .three-column-footer-contact-form .footer-right .baseline {\r\n  display: table-cell;\r\n  vertical-align: bottom;\r\n}\r\n\r\n\r\n.three-column-footer-contact-form-container .three-column-footer-contact-form .footer-right h2 {\r\n  color: #fefefe;\r\n}\r\n\r\n\r\n.three-column-footer-contact-form-container .three-column-footer-contact-form .footer-right p {\r\n  font-size: 0.8rem;\r\n  margin-bottom: 0;\r\n}\r\n\r\n\r\n.three-column-footer-contact-form-container .three-column-footer-contact-form .footer-right .fa {\r\n  padding: 1rem 0 1rem 0.2rem;\r\n}\r\n\r\n\r\n@media print, screen and (min-width: 40em) {\r\n  .three-column-footer-contact-form-container .three-column-footer-contact-form .footer-right {\r\n    padding-right: 0.9375rem;\r\n    padding-left: 0.9375rem;\r\n  }\r\n}\r\n\r\n\r\n.three-column-footer-contact-form-container .three-column-footer-contact-form .footer-right:last-child:not(:first-child) {\r\n  float: right;\r\n}\r\n\r\n\r\n@media print, screen and (min-width: 64em) {\r\n  .three-column-footer-contact-form-container .three-column-footer-contact-form .footer-right {\r\n    width: 25%;\r\n    float: left;\r\n    padding-right: 0.625rem;\r\n    padding-left: 0.625rem;\r\n  }\r\n}\r\n\r\n\r\n@media print, screen and (min-width: 64em) and (min-width: 40em) {\r\n  .three-column-footer-contact-form-container .three-column-footer-contact-form .footer-right {\r\n    padding-right: 0.9375rem;\r\n    padding-left: 0.9375rem;\r\n  }\r\n}\r\n\r\n\r\n@media print, screen and (min-width: 64em) {\r\n  .three-column-footer-contact-form-container .three-column-footer-contact-form .footer-right:last-child:not(:first-child) {\r\n    float: right;\r\n  }\r\n}\r\n\r\n\r\nbody {\r\n  display: flex;\r\n  min-height: 100vh;\r\n  flex-direction: column;\r\n}\r\n\r\n\r\nmain {\r\n  flex: 1 0 auto;\r\n}\r\n\r\n\r\n.footer-distributed{\r\n  background-color: #292c2f;\r\n  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.12);\r\n  box-sizing: border-box;\r\n  width: 100%;\r\n  text-align: left;\r\n  font: normal 16px sans-serif;\r\n\r\n  padding: 45px 50px;\r\n  margin-top: 80px;\r\n}\r\n\r\n\r\n.footer-distributed .footer-left p{\r\n  color:  #8f9296;\r\n  font-size: 14px;\r\n  margin: 0;\r\n}\r\n\r\n\r\n/* Footer links */\r\n\r\n\r\n.footer-distributed p.footer-links{\r\n  font-size:18px;\r\n  font-weight: bold;\r\n  color:  #ffffff;\r\n  margin: 0 0 10px;\r\n  padding: 0;\r\n}\r\n\r\n\r\n.footer-distributed p.footer-links a{\r\n  display:inline-block;\r\n  line-height: 1.8;\r\n  text-decoration: none;\r\n  color:  inherit;\r\n}\r\n\r\n\r\n.footer-distributed .footer-right{\r\n  float: right;\r\n  margin-top: 6px;\r\n  max-width: 180px;\r\n}\r\n\r\n\r\n.footer-distributed .footer-right a{\r\n  display: inline-block;\r\n  width: 35px;\r\n  height: 35px;\r\n  background-color:  #33383b;\r\n  border-radius: 2px;\r\n\r\n  font-size: 20px;\r\n  color: #ffffff;\r\n  text-align: center;\r\n  line-height: 35px;\r\n\r\n  margin-left: 3px;\r\n}\r\n\r\n\r\n/* If you don't want the footer to be responsive, remove these media queries */\r\n\r\n\r\n@media (max-width: 600px) {\r\n\r\n  .footer-distributed .footer-left,\r\n  .footer-distributed .footer-right{\r\n    text-align: center;\r\n  }\r\n\r\n  .footer-distributed .footer-right{\r\n    float: none;\r\n    margin: 0 auto 20px;\r\n  }\r\n\r\n  .footer-distributed .footer-left p.footer-links{\r\n    line-height: 1.8;\r\n  }\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/home/home.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/home/home.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class = \"container\">\n\n  <!--under the nav bar-->\n  <div class=\"container\">\n\n    <!--1 st class-->\n    <div class=\"under-nav-bar-module-1\">\n      <div class=\"col-md-3\" >\n        <img src=\"assets/image/UCSC-Logo.jpg\" height=\"100px\" width=\"100px\">\n      </div>\n\n      <div class=\"col-md-9\">\n        <h2><font size=\"16px\"><b>Welcome To UCSC E-Leave Forum</b></font></h2>\n      </div>\n    </div>\n\n    <div class=\"under-nav-bar-module-2\">\n\n    </div>\n  </div>\n  <br><br>\n\n  <div class=\"container\">\n\n    <!--2 nd class-->\n    <div class=\"under-nav-bar-module-1\">\n      <!--<div class=\"col-md-1\"></div>-->\n      <div class=\"col-md-12\" >\n        <img src=\"assets/image/ucsc-b.jpg\" height=\"340px\" width=\"100%\">\n      </div>\n    </div>\n\n    <div class=\"under-nav-bar-module-2\">\n\n    </div>\n  </div>\n  <br><br>\n\n  <div class=\"container\">\n    <h2><b>Site Announcements</b></h2>\n    <br><br>\n    <div class=\"row\">\n      <!--<div class=\"col-md-4\"></div>-->\n\n        <div *ngFor = \"let post of posts\">\n          <div class=\"col-md-4\">\n            <table class=\"table\">\n              <thead>\n              <tr class=\"success\">\n                <th scope=\"col\">{{post.about}}</th>\n              </tr>\n              </thead>\n              <tbody>\n              <tr class=\"success\">\n                <td>{{post.content}}</td>\n              </tr>\n              <tr class=\"success\">\n                <td>{{post.date}} by {{post.name}}  </td>\n              </tr>\n              </tbody>\n            </table>\n          </div>\n        </div>\n\n      <!--<div class=\"col-md-4\"></div>-->\n\n    </div>\n\n  </div>\n\n\n      <!--<div class=\"row\" style=\"background-color: #cce0ff;height: 400px;\">-->\n      <!--<div class = \"row\">-->\n      <!--<div class = \"col-md-12\">-->\n      <!--<h2>{{post.about}} </h2>-->\n      <!--</div>-->\n      <!--</div>-->\n      <!--<div class = \"row\">-->\n      <!--<div class = \"col-md-1\">-->\n      <!--<h5>Post</h5>-->\n      <!--</div>-->\n      <!--<div class = \"col-md-1\">-->\n      <!--<h5>by</h5>-->\n      <!--</div>-->\n      <!--<div class = \"col-md-1\">-->\n      <!--<h5>{{post.name}}</h5>-->\n      <!--</div>-->\n      <!--<div class = \"col-md-1\">-->\n      <!--<h5>({{post.post}})</h5>-->\n      <!--</div>-->\n      <!--<div class = \"col-md-1\">-->\n      <!--<h5>On</h5>-->\n      <!--</div>-->\n      <!--<div class = \"col-md-4\">-->\n      <!--<h5>{{post.date}}</h5>-->\n      <!--</div>-->\n      <!--</div>-->\n\n      <!--<div class = \"row\">-->\n      <!--<div class = \"col-md-12\">-->\n      <!--<h4>{{post.content}}</h4>-->\n      <!--</div>-->\n      <!--</div>-->\n      <!--</div>-->\n\n\n  <!--<div class=\"container\">-->\n    <!--<h3>Other useful links</h3>-->\n    <!--<h5><a href=\"http://ucsc.cmb.ac.lk/\">Visit UCSC Website</a></h5>-->\n    <!--<h5><a href=\"http://ugvle.ucsc.cmb.ac.lk/\">Visit UGVLE</a></h5>-->\n  <!--</div>-->\n\n\n\n</div>\n\n<footer class=\"footer-distributed\">\n\n  <div class=\"footer-right\">\n\n    <a href=\"https://www.facebook.com/UCSC.LK/\"><i class=\"fa fa-facebook\"></i></a>\n    <a href=\"https://twitter.com/UCSC_LK\"><i class=\"fa fa-twitter\"></i></a>\n    <a href=\"#\"><i class=\"fa fa-linkedin\"></i></a>\n    <a href=\"#\"><i class=\"fa fa-github\"></i></a>\n\n  </div>\n\n  <div class=\"footer-left\">\n    <p><font size=\"6\"><b>Contact Us</b></font></p>>\n\n    <br>\n\n    <p>Address :\n\n      UCSC, No.35, Reid Avenue, Colombo 7, Sri Lanka</p>\n    <p>Telephone Number : +94 -11- 2581245/ 7</p>\n  </div>\n\n</footer>\n"

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_post_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/post.service */ "./src/app/services/post.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = /** @class */ (function () {
    function HomeComponent(postService) {
        this.postService = postService;
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.postService.getAllPost().subscribe(function (request) {
            _this.posts = request;
        });
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/components/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/components/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [_services_post_service__WEBPACK_IMPORTED_MODULE_1__["PostService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/components/leave-history/leave-history.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/components/leave-history/leave-history.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\n    font-family: arial, sans-serif;\n    border-collapse: collapse;\n    width: 100%;\n}\n\ntd, th {\n    border: 1px solid #dddddd;\n    text-align: left;\n    padding: 8px;\n}\n\ntr:nth-child(even) {\n    background-color: #dddddd;\n}"

/***/ }),

/***/ "./src/app/components/leave-history/leave-history.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/components/leave-history/leave-history.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class = \"container\">\n\t<h2>Leaves History</h2>\n\t<br><br>\n\t<table>\n\t\t<tr>\n\t\t\t<th>Date</th>\n\t\t\t<th>Reason</th>\n\t\t\t<th>Describe</th>\n\t\t\t<th>State</th>\n\t    </tr>\n\t\t\t  \n\t    <tr *ngFor = \"let hry of history\">\n\t\t\t<td>{{hry.date}}</td>\n\t\t\t<td>{{hry.reason}}</td>\n\t\t\t<td>{{hry.describe}}</td>\n\t\t\t<th>{{hry.state}}</th>\n\t\t</tr>\n\t\t\t\n\t</table>\n</div>\n\n"

/***/ }),

/***/ "./src/app/components/leave-history/leave-history.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/leave-history/leave-history.component.ts ***!
  \*********************************************************************/
/*! exports provided: LeaveHistoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeaveHistoryComponent", function() { return LeaveHistoryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_request_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/request.service */ "./src/app/services/request.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LeaveHistoryComponent = /** @class */ (function () {
    function LeaveHistoryComponent(authService, requestService) {
        this.authService = authService;
        this.requestService = requestService;
    }
    LeaveHistoryComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.email = this.authService.getAuthEmail();
        this.requestService.viewHistory(this.email).subscribe(function (user) {
            _this.history = user;
        });
    };
    LeaveHistoryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-leave-history',
            template: __webpack_require__(/*! ./leave-history.component.html */ "./src/app/components/leave-history/leave-history.component.html"),
            styles: [__webpack_require__(/*! ./leave-history.component.css */ "./src/app/components/leave-history/leave-history.component.css")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            _services_request_service__WEBPACK_IMPORTED_MODULE_2__["RequestService"]])
    ], LeaveHistoryComponent);
    return LeaveHistoryComponent;
}());



/***/ }),

/***/ "./src/app/components/login/login.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/login/login.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/login/login.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/login/login.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class = \"container\">\n  <div class=\"container\">\n    <div class=\"col-md-4\"></div>\n    <div class=\"col-md-4\"><h2 class = \"page-header\">Login</h2></div>\n    <div class=\"col-md-4\"></div>\n  </div>\n\n  <form (submit) = \"loginUser()\">\n    <div class=\"container\">\n      <div class=\"col-md-4\"></div>\n      <div class = \"form-group col-md-4\">\n        <label>Email</label>\n        <input type=\"text\" [(ngModel)] = \"email\" name =\"email\" class = \"form-control\">\n      </div>\n      <div class=\"col-md-4\"></div>\n    </div>\n\n    <div class=\"container\">\n      <div class=\"col-md-4\"></div>\n      <div class = \"form-group col-md-4\">\n        <label>Password</label>\n        <input type=\"password\" [(ngModel)] = \"password\" name =\"password\" class = \"form-control\">\n      </div>\n      <div class=\"col-md-4\"></div>\n    </div>\n\n    <div class=\"container\">\n      <div class=\"col-md-4\"></div>\n      <div class=\"col-md-4\"><input type=\"submit\" class =\"btn btn-primary btn-block\" value = \"Login\"></div>\n      <div class=\"col-md-4\"></div>\n    </div>\n  </form>\n</div>\n"

/***/ }),

/***/ "./src/app/components/login/login.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = /** @class */ (function () {
    function LoginComponent(authService, flashMessage, router) {
        this.authService = authService;
        this.flashMessage = flashMessage;
        this.router = router;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.loginUser = function () {
        var _this = this;
        var user = {
            email: this.email,
            password: this.password
        };
        this.authService.loginUser(user).subscribe(function (res) {
            if (res.state) {
                _this.authService.storeData(res.token, res.id, res.name, res.level, res.email, res.post);
                _this.flashMessage.show("You're Loggedin", { cssClass: 'alert-success', times: 3000 });
                _this.router.navigate(['/profile']);
            }
            else {
                _this.flashMessage.show(res.msg, { cssClass: 'alert-danger', times: 3000 });
                _this.router.navigate(['/login']);
            }
        });
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/components/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/components/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__["FlashMessagesService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/components/manage-admin/manage-admin.component.css":
/*!********************************************************************!*\
  !*** ./src/app/components/manage-admin/manage-admin.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\n    font-family: arial, sans-serif;\n    border-collapse: collapse;\n    width: 100%;\n}\n\ntd, th {\n    border: 1px solid #dddddd;\n    text-align: left;\n    padding: 8px;\n}\n\ntr:nth-child(even) {\n    background-color: #dddddd;\n}"

/***/ }),

/***/ "./src/app/components/manage-admin/manage-admin.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/manage-admin/manage-admin.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class = \"container\">\n  <h2 class = \"page-header\"> Register Users</h2>\n  <form (submit) = \"registerData()\">\n    <div class = \"form-group col-md-7\">\n      <label>Name</label>\n      <input type=\"text\" [(ngModel)] = \"full_name\" name =\"full_name\" class = \"form-control\">\n    </div>\n    <div class=\"col-md-5\"></div>\n\n    <div class = \"form-group col-md-7\">\n      <label>Phone No.</label>\n      <input type=\"text\" [(ngModel)] = \"phone\" name =\"phone\" class = \"form-control\" required>\n    </div>\n    <div class=\"col-md-5\"></div>\n\n    <div class = \"form-group col-md-7\">\n      <label>Username</label>\n      <input type=\"text\" [(ngModel)] = \"username\" name =\"username\" class = \"form-control\" required>\n    </div>\n    <div class=\"col-md-5\"></div>\n\n    <div class = \"form-group col-md-7\">\n      <label>Email</label>\n      <input type=\"text\" [(ngModel)] = \"email\" name =\"email\" class = \"form-control\" required>\n    </div>\n    <div class=\"col-md-5\"></div>\n\n    <div class = \"form-group col-md-7\">\n      <label>Password</label>\n      <input type=\"password\" [(ngModel)] = \"password\" name =\"password\" class = \"form-control\" required>\n    </div>\n    <div class=\"col-md-5\"></div>\n\n    <div class = \"form-group col-md-7\">\n      <label>Level</label>\n      <input type=\"text\" [(ngModel)] = \"state\" name =\"state\" class = \"form-control\" required>\n    </div>\n    <div class=\"col-md-5\"></div>\n\n    <div class=\"col-md-7\">\n      <input type=\"submit\" class =\"btn btn-primary\" value = \"Submit\">\n    </div>\n\n    <div class=\"col-md-5\"></div>\n  </form>\n</div>\n<hr>\n<div class = \"container\">\n\t<table>\n\t\t\t<tr>\n\t\t\t   <th>Name</th>\n\t\t\t   <th>Post</th>\n\t\t\t   <th>Contact</th>\n         <th>Update</th>\n\t\t\t   <th>Delete</th>\n\n\t\t\t</tr>\n\n\t\t\t<tr *ngFor = \"let user of users\">\n\t\t\t   <td>{{user.full_name}}</td>\n\t\t\t   <td>{{user.post}}</td>\n\t\t\t   <td>{{user.phone}}</td>\n        <th><input type=\"button\" (click) = \"updateUser(user._id)\" value= \"Edit\" class =\"btn btn-success\"></th>\n\t\t\t   <th><input type=\"button\" (click) = \"deleteUser(user._id)\" value= \"Delete\" class =\"btn btn-danger\"></th>\n\n\t\t\t</tr>\n\n\t</table>\n</div>\n\n"

/***/ }),

/***/ "./src/app/components/manage-admin/manage-admin.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/manage-admin/manage-admin.component.ts ***!
  \*******************************************************************/
/*! exports provided: ManageAdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManageAdminComponent", function() { return ManageAdminComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ManageAdminComponent = /** @class */ (function () {
    function ManageAdminComponent(authService, flashMessage, router) {
        this.authService = authService;
        this.flashMessage = flashMessage;
        this.router = router;
    }
    ManageAdminComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getAllUsers().subscribe(function (user) {
            _this.users = user;
        });
    };
    ManageAdminComponent.prototype.registerData = function () {
        var _this = this;
        this.checkPost();
        var user = {
            full_name: this.full_name,
            post: this.post,
            phone: this.phone,
            username: this.username,
            email: this.email,
            password: this.password,
            state: this.state
        };
        this.authService.registerUser(user).subscribe(function (user) {
            _this.users.push(user);
            _this.authService.getUser().subscribe(function (user) {
                _this.users = user;
            });
        });
    };
    ManageAdminComponent.prototype.checkPost = function () {
        if (this.state == '0') {
            this.post = 'head';
        }
        else if (this.state == '1') {
            this.post = 'admin';
        }
        else if (this.state == '2') {
            this.post = 'staff';
        }
    };
    ManageAdminComponent.prototype.deleteUser = function (id) {
        var user = this.users;
        this.authService.deleteUser(id).subscribe(function (data) {
            if (data.n == 1) {
                for (var i = 0; i < user.length; i++) {
                    if (user[i]._id == id) {
                        user.splice(i, 1);
                    }
                }
            }
        });
    };
    ManageAdminComponent.prototype.updateUser = function (id) {
        var navigationExtras = {
            queryParams: {
                "id": id
            }
        };
        this.router.navigate(["/updateUser"], navigationExtras);
    };
    ManageAdminComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-manage-admin',
            template: __webpack_require__(/*! ./manage-admin.component.html */ "./src/app/components/manage-admin/manage-admin.component.html"),
            styles: [__webpack_require__(/*! ./manage-admin.component.css */ "./src/app/components/manage-admin/manage-admin.component.css")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__["FlashMessagesService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], ManageAdminComponent);
    return ManageAdminComponent;
}());



/***/ }),

/***/ "./src/app/components/manage-leaves/manage-leaves.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/components/manage-leaves/manage-leaves.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\n    font-family: arial, sans-serif;\n    border-collapse: collapse;\n    width: 100%;\n}\n\ntd, th {\n    border: 1px solid #dddddd;\n    text-align: left;\n    padding: 8px;\n}\n\ntr:nth-child(even) {\n    background-color: #dddddd;\n}"

/***/ }),

/***/ "./src/app/components/manage-leaves/manage-leaves.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/components/manage-leaves/manage-leaves.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class = \"container\">\n<h2>All Requested Leaves</h2>\n<br><br>\n\t<table>\n\t\t\t<tr>\n\t\t\t   <th>Name</th>\n\t\t\t   <th>Post</th>\n\t\t\t   <th>Date</th>\n\t\t\t   <th>Reason</th>\n\t\t\t   <th>Describe</th>\n\t\t\t   <th>History</th>\n\t\t\t   <th>Accept</th>\n\t\t\t   <th>Delete</th>\n\t\t\t</tr>\n\n\t\t\t<tr *ngFor = \"let request of requests\">\n\t\t\t   <td>{{request.name}}</td>\n\t\t\t   <td>{{request.post}}</td>\n\t\t\t   <td>{{request.date}}</td>\n\t\t\t   <th>{{request.reason}}</th>\n\t\t\t   <th>{{request.describe}}</th>\n\t\t\t   <th><input type=\"button\" (click) = \"viewUser(request.email)\" value= \"History\" class =\"btn btn-success\"></th>\n\t\t\t   <th><input type=\"button\" (click) = \"acceptRequest(request)\" value= \"Accept\" class =\"btn btn-info\"></th>\n\t\t\t   <th><input type=\"button\" (click) = \"deleteRequest(request)\" value= \"Cancel\" class =\"btn btn-danger\"></th>\n\t\t\t</tr>\n\n\t</table>\n</div>\n\n"

/***/ }),

/***/ "./src/app/components/manage-leaves/manage-leaves.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/manage-leaves/manage-leaves.component.ts ***!
  \*********************************************************************/
/*! exports provided: ManageLeavesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManageLeavesComponent", function() { return ManageLeavesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_request_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/request.service */ "./src/app/services/request.service.ts");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ManageLeavesComponent = /** @class */ (function () {
    function ManageLeavesComponent(requestService, flashMessage, router) {
        this.requestService = requestService;
        this.flashMessage = flashMessage;
        this.router = router;
    }
    ManageLeavesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.requestService.getAllRequest().subscribe(function (request) {
            _this.requests = request;
        });
    };
    ManageLeavesComponent.prototype.acceptRequest = function (request) {
        var _this = this;
        this.user = request;
        this.id = request._id;
        this.requestService.acceptRequest(this.user).subscribe(function (res) {
            if (res.state) {
                var requests = _this.requests;
                _this.requestService.deleteRequest(_this.id).subscribe(function (data) {
                    if (data.n == 1) {
                        for (var i = 0; i < requests.length; i++) {
                            if (requests[i]._id == _this.id) {
                                requests.splice(i, 1);
                            }
                        }
                    }
                });
                _this.flashMessage.show("Accepted Successfuly", { cssClass: 'alert-success', times: 3000 });
                _this.router.navigate(['/manageLeaves']);
            }
            else {
                _this.flashMessage.show("Something Went Wrong", { cssClass: 'alert-danger', times: 3000 });
                _this.router.navigate(['/manageLeaves']);
            }
        });
    };
    ManageLeavesComponent.prototype.deleteRequest = function (request) {
        var _this = this;
        this.user = request;
        this.id = request._id;
        this.requestService.notacceptRequest(this.user).subscribe(function (res) {
            if (res.state) {
                var requests = _this.requests;
                _this.requestService.deleteRequest(_this.id).subscribe(function (data) {
                    if (data.n == 1) {
                        for (var i = 0; i < requests.length; i++) {
                            if (requests[i]._id == _this.id) {
                                requests.splice(i, 1);
                            }
                        }
                    }
                });
                _this.flashMessage.show("Not Accepted ", { cssClass: 'alert-success', times: 3000 });
                _this.router.navigate(['/manageLeaves']);
            }
            else {
                _this.flashMessage.show("Something Went Wrong", { cssClass: 'alert-danger', times: 3000 });
                _this.router.navigate(['/manageLeaves']);
            }
        });
    };
    ManageLeavesComponent.prototype.viewUser = function (email) {
        var navigationExtras = {
            queryParams: {
                "email": email
            }
        };
        this.router.navigate(["/viewUser"], navigationExtras);
    };
    ManageLeavesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-manage-leaves',
            template: __webpack_require__(/*! ./manage-leaves.component.html */ "./src/app/components/manage-leaves/manage-leaves.component.html"),
            styles: [__webpack_require__(/*! ./manage-leaves.component.css */ "./src/app/components/manage-leaves/manage-leaves.component.css")]
        }),
        __metadata("design:paramtypes", [_services_request_service__WEBPACK_IMPORTED_MODULE_1__["RequestService"],
            angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__["FlashMessagesService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], ManageLeavesComponent);
    return ManageLeavesComponent;
}());



/***/ }),

/***/ "./src/app/components/manage-users/manage-users.component.css":
/*!********************************************************************!*\
  !*** ./src/app/components/manage-users/manage-users.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\n    font-family: arial, sans-serif;\n    border-collapse: collapse;\n    width: 100%;\n}\n\ntd, th {\n    border: 1px solid #dddddd;\n    text-align: left;\n    padding: 8px;\n}\n\ntr:nth-child(even) {\n    background-color: #dddddd;\n}"

/***/ }),

/***/ "./src/app/components/manage-users/manage-users.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/manage-users/manage-users.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class = \"container\">\n  <h2 class = \"page-header\"> Register Employee</h2>\n  <form (submit) = \"registerData()\">\n    <div class = \"form-group col-md-7\">\n      <label>Name</label>\n      <input type=\"text\" [(ngModel)] = \"full_name\" name =\"full_name\" class = \"form-control\">\n    </div>\n    <!--<div class=\"col-md-4\"></div>-->\n\n    <div class = \"form-group col-md-7\">\n      <label>Phone No.</label>\n      <input type=\"text\" [(ngModel)] = \"phone\" name =\"phone\" class = \"form-control\" required>\n    </div>\n    <!--<div class=\"col-md-4\"></div>-->\n\n    <div class = \"form-group col-md-7\">\n      <label>Username</label>\n      <input type=\"text\" [(ngModel)] = \"username\" name =\"username\" class = \"form-control\" required>\n    </div>\n    <div class = \"form-group col-md-7\">\n      <label>Email</label>\n      <input type=\"text\" [(ngModel)] = \"email\" name =\"email\" class = \"form-control\" required>\n    </div>\n    <div class = \"form-group col-md-7\">\n      <label>Password</label>\n      <input type=\"password\" [(ngModel)] = \"password\" name =\"password\" class = \"form-control\" required>\n    </div>\n\n    <div class=\"col-md-7\">\n      <input type=\"submit\" class =\"btn btn-primary\" value = \"Submit\">\n    </div>\n  </form>\n</div>\n<hr>\n<div class = \"container\">\n\t<table>\n\t\t\t<tr>\n\t\t\t   <th>Name</th>\n\t\t\t   <th>Post</th>\n\t\t\t   <th>Contact</th>\n\t\t\t   <th>Delete</th>\n\t\t\t</tr>\n\n\t\t\t<tr *ngFor = \"let user of users\">\n\t\t\t   <td>{{user.full_name}}</td>\n\t\t\t   <td>{{user.post}}</td>\n\t\t\t   <td>{{user.phone}}</td>\n\t\t\t   <th><input type=\"button\" (click) = \"deleteUser(user._id)\" value= \"Delete\" class =\"btn btn-danger\"></th>\n\t\t\t</tr>\n\n\t</table>\n</div>\n"

/***/ }),

/***/ "./src/app/components/manage-users/manage-users.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/manage-users/manage-users.component.ts ***!
  \*******************************************************************/
/*! exports provided: ManageUsersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManageUsersComponent", function() { return ManageUsersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ManageUsersComponent = /** @class */ (function () {
    function ManageUsersComponent(authService, flashMessage, router) {
        this.authService = authService;
        this.flashMessage = flashMessage;
        this.router = router;
    }
    ManageUsersComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getUser().subscribe(function (user) {
            _this.users = user;
        });
    };
    ManageUsersComponent.prototype.registerData = function () {
        var _this = this;
        var user = {
            full_name: this.full_name,
            post: 'staff',
            phone: this.phone,
            username: this.username,
            email: this.email,
            password: this.password,
            state: '2'
        };
        this.authService.registerUser(user).subscribe(function (user) {
            _this.users.push(user);
            _this.authService.getUser().subscribe(function (user) {
                _this.users = user;
            });
        });
    };
    ManageUsersComponent.prototype.deleteUser = function (id) {
        var user = this.users;
        this.authService.deleteUser(id).subscribe(function (data) {
            if (data.n == 1) {
                for (var i = 0; i < user.length; i++) {
                    if (user[i]._id == id) {
                        user.splice(i, 1);
                    }
                }
            }
        });
    };
    ManageUsersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-manage-users',
            template: __webpack_require__(/*! ./manage-users.component.html */ "./src/app/components/manage-users/manage-users.component.html"),
            styles: [__webpack_require__(/*! ./manage-users.component.css */ "./src/app/components/manage-users/manage-users.component.css")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__["FlashMessagesService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], ManageUsersComponent);
    return ManageUsersComponent;
}());



/***/ }),

/***/ "./src/app/components/navbar/navbar.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar-inverse\">\n  <div class=\"container-fluid\">\n    <!-- Brand and toggle get grouped for better mobile display -->\n    <div class=\"navbar-header\">\n      <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\" aria-expanded=\"false\">\n        <span class=\"sr-only\">Toggle navigation</span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n      </button>\n      <!--<a class=\"navbar-brand\" href=\"http://ucsc.cmb.ac.lk/\">UCSC</a>-->\n    </div>\n\n    <!-- Collect the nav links, forms, and other content for toggling -->\n    <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\n      <ul class=\"nav navbar-nav\">\n        <li><a [routerLink]=\"['/']\">Home <span class=\"sr-only\">(current)</span></a></li>\n        <li><a [routerLink]=\"['/about']\">About</a></li>\n      </ul>\n\n      <ul class=\"nav navbar-nav navbar-right\">\n        <li *ngIf=\"!authService.loggedIn()\"><a [routerLink]=\"['/login']\">Login</a></li>\n\n        <li *ngIf=\"authService.loggedIn()\" class=\"dropdown\">\n          <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\">{{user.getAuthName()}} <span class=\"caret\"></span></a>\n\n          <ul class=\"dropdown-menu\">\n            <li *ngIf=\"authService.isStaff() || authService.isAdmin() || authService.isHead()\"><a [routerLink]=\"['/profile']\">Profile</a></li>\n            <li *ngIf=\"authService.isStaff() || authService.isAdmin()\"><a [routerLink]=\"['/requestLeaves']\">Request Leaves</a></li>\n            <li *ngIf=\"authService.isStaff() || authService.isAdmin()\"><a [routerLink]=\"['/leaveHistory']\">History of Leaves</a></li>\n            <li *ngIf=\"authService.isAdmin()\"><a [routerLink]=\"['/manageUsers']\">Manage Staff</a></li>\n            <li *ngIf=\"authService.isAdmin() || authService.isHead()\"><a [routerLink]=\"['/addPost']\">Add Post</a></li>\n            <li *ngIf=\"authService.isAdmin()\"><a [routerLink]=\"['/reportGenaration']\">Report Genaration</a></li>\n            <li *ngIf=\"authService.isHead()\"><a [routerLink]=\"['/manageAdmin']\">Manage Users</a></li>\n            <li *ngIf=\"authService.isHead()\"><a [routerLink]=\"['/manageLeaves']\">Manage Leaves</a></li>\n            <li *ngIf=\"authService.isHead()\"><a [routerLink]=\"['/controlDates']\">Control Dates</a></li>\n            <li role=\"separator\" class=\"divider\"></li>\n            <li><a href=\"#\" (click)=\"logoutUser()\">Logout</a></li>\n          </ul>\n        </li>\n      </ul>\n    </div><!-- /.navbar-collapse -->\n  </div><!-- /.container-fluid -->\n</nav>\n\n\n\n"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.ts ***!
  \*******************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(router, authService, flashMessage, user) {
        this.router = router;
        this.authService = authService;
        this.flashMessage = flashMessage;
        this.user = user;
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent.prototype.logoutUser = function () {
        this.authService.logout();
        this.flashMessage.show("You're Logged out", { cssClass: 'alert-success', times: 3000 });
        this.router.navigate(['']);
        return false;
    };
    NavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/components/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/components/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__["FlashMessagesService"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/components/profile/profile.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/profile/profile.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*table, th, td {*/\r\n  /*border: 1px solid black;*/\r\n  /*}*/\r\n  /*th, td {*/\r\n  /*padding: 15px;*/\r\n  /*text-align: left;*/\r\n  /*}*/\r\n  /*table {*/\r\n  /*font-family: arial, sans-serif;*/\r\n  /*border-collapse: collapse;*/\r\n  /*width: 100%;*/\r\n  /*}*/\r\n  .text tr td{\r\n  padding-left: 40px;\r\n}\r\n  .all {\r\n  background-image: url('profile.jpg');\r\n  /*padding: 20px;*/\r\n  background-repeat: no-repeat;\r\n  height: 505px;\r\n  background-size: cover;\r\n\r\n}\r\n\r\n"

/***/ }),

/***/ "./src/app/components/profile/profile.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/profile/profile.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--<div class = 'container'>-->\n\t<!--<div *ngIf=\"user\">-->\n\t\t<!--<div class = \"row\">-->\n\t\t\t<!--NAME : {{user.full_name}}-->\n\t\t<!--</div>-->\n\t\t<!--<br>-->\n\t\t<!--<div class = \"row\">-->\n\t\t\t<!--POST : {{user.post}}-->\n\t\t<!--</div>-->\n\t\t<!--<br>-->\n\t\t<!--<div class = \"row\">-->\n\t\t\t<!--CONTACT NO : {{user.phone}}-->\n\t\t<!--</div>-->\n\t\t<!--<br>-->\n\t\t<!--<div class = \"row\">-->\n\t\t\t<!--USERNAME : {{user.username}}-->\n\t\t<!--</div>-->\n\t\t<!--<br>-->\n\t\t<!--<div class = \"row\">-->\n\t\t\t<!--EMAIL : {{user.email}}-->\n\t\t<!--</div>-->\n\t\t<!--<br>-->\n    <!--</div>-->\n<!--</div>-->\n<div class=\"all\">\n<div class=\"container\">\n\n   <div class=\"row\">\n    <div class=\"col-md-2\"></div>\n    <div class=\"col-md-8\">\n      <br><br><br><br><br>\n      <div class=\"table-responsive\">\n        <table class=\"table table-hover text\">\n          <tr class=\"info\">\n            <td><b>full name</b></td>\n            <td><b>{{user.full_name}}</b></td>\n          </tr>\n\n\n          <tr class=\"success\">\n            <td><b>username</b></td>\n            <td><b>{{user.username}}</b></td>\n          </tr>\n          <tr class=\"info\">\n            <td><b>email</b></td>\n            <td><b>{{user.email}}</b></td>\n          </tr>\n          <tr class=\"success\">\n            <td><b>contact no</b></td>\n            <td><b>{{user.phone}}</b></td>\n          </tr>\n          <tr class=\"danger\">\n            <td><b>position</b></td>\n            <td><b>{{user.post}}</b></td>\n          </tr>\n        </table>\n      </div>\n    </div>\n    <div class=\"col-md-2\"></div>\n   </div>\n\n  <!--<div class=\"cl-mod-3\"></div>-->\n  <!--<div class=\"cl-mod-6\">-->\n    <!--<div class=\"table-responsive\">-->\n      <!--<table class=\"table table-hover\">-->\n        <!--<tr class=\"info\">-->\n          <!--<td><b>NAME</b></td>-->\n          <!--<td><b>{{user.full_name}}</b></td>-->\n        <!--</tr>-->\n        <!--<tr class=\"warning\">-->\n          <!--<td><b>POST</b></td>-->\n          <!--<td><b>{{user.post}}</b></td>-->\n        <!--</tr>-->\n        <!--<tr class=\"info\">-->\n          <!--<td><b>CONTACT NO</b></td>-->\n          <!--<td><b>{{user.phone}}</b></td>-->\n        <!--</tr>-->\n        <!--<tr class=\"success\">-->\n          <!--<td><b>USERNAME</b></td>-->\n          <!--<td><b>{{user.username}}</b></td>-->\n        <!--</tr>-->\n        <!--<tr class=\"danger\">-->\n          <!--<td><b>EMAIL</b></td>-->\n          <!--<td><b>{{user.email}}</b></td>-->\n        <!--</tr>-->\n      <!--</table>-->\n    <!--</div>-->\n  <!--</div>-->\n  <!--<div class=\"cl-mod-3\"></div>-->\n\n<!--<table style=\"width:80%\">-->\n  <!--<tr>-->\n    <!--<th>#</th>-->\n    <!--<th>#</th>-->\n  <!--</tr>-->\n  <!--<tr>-->\n    <!--<td>NAME</td>-->\n    <!--<td>{{user.full_name}}</td>-->\n  <!--</tr>-->\n  <!--<tr>-->\n    <!--<td>POST</td>-->\n    <!--<td>{{user.post}}</td>-->\n  <!--</tr>-->\n  <!--<tr>-->\n    <!--<td>CONTACT NO</td>-->\n    <!--<td>{{user.phone}}</td>-->\n  <!--</tr>-->\n  <!--<tr>-->\n    <!--<td>USERNAME</td>-->\n    <!--<td>{{user.username}}</td>-->\n  <!--</tr>-->\n  <!--<tr>-->\n    <!--<td>EMAIL</td>-->\n    <!--<td>{{user.email}}</td>-->\n  <!--</tr>-->\n<!--</table>-->\n  <!--<table class=\"table table-hover\">-->\n    <!--<thead>-->\n    <!--<tr>-->\n      <!--<th scope=\"col\">Type</th>-->\n      <!--<th scope=\"col\">Column heading</th>-->\n      <!--<th scope=\"col\">Column heading</th>-->\n      <!--<th scope=\"col\">Column heading</th>-->\n    <!--</tr>-->\n    <!--</thead>-->\n    <!--<tbody>-->\n    <!--<tr class=\"table-active\">-->\n      <!--<th scope=\"row\">Active</th>-->\n      <!--<td>Column content</td>-->\n      <!--<td>Column content</td>-->\n      <!--<td>Column content</td>-->\n    <!--</tr>-->\n    <!--<tr>-->\n      <!--<th scope=\"row\">Default</th>-->\n      <!--<td>Column content</td>-->\n      <!--<td>Column content</td>-->\n      <!--<td>Column content</td>-->\n    <!--</tr>-->\n    <!--<tr class=\"table-primary\">-->\n      <!--<th scope=\"row\">Primary</th>-->\n      <!--<td>Column content</td>-->\n      <!--<td>Column content</td>-->\n      <!--<td>Column content</td>-->\n    <!--</tr>-->\n    <!--<tr class=\"table-secondary\">-->\n      <!--<th scope=\"row\">Secondary</th>-->\n      <!--<td>Column content</td>-->\n      <!--<td>Column content</td>-->\n      <!--<td>Column content</td>-->\n    <!--</tr>-->\n    <!--<tr class=\"table-success\">-->\n      <!--<th scope=\"row\">Success</th>-->\n      <!--<td>Column content</td>-->\n      <!--<td>Column content</td>-->\n      <!--<td>Column content</td>-->\n    <!--</tr>-->\n    <!--<tr class=\"table-danger\">-->\n      <!--<th scope=\"row\">Danger</th>-->\n      <!--<td>Column content</td>-->\n      <!--<td>Column content</td>-->\n      <!--<td>Column content</td>-->\n    <!--</tr>-->\n    <!--<tr class=\"table-warning\">-->\n      <!--<th scope=\"row\">Warning</th>-->\n      <!--<td>Column content</td>-->\n      <!--<td>Column content</td>-->\n      <!--<td>Column content</td>-->\n    <!--</tr>-->\n    <!--<tr class=\"table-info\">-->\n      <!--<th scope=\"row\">Info</th>-->\n      <!--<td>Column content</td>-->\n      <!--<td>Column content</td>-->\n      <!--<td>Column content</td>-->\n    <!--</tr>-->\n    <!--<tr class=\"table-light\">-->\n      <!--<th scope=\"row\">Light</th>-->\n      <!--<td>Column content</td>-->\n      <!--<td>Column content</td>-->\n      <!--<td>Column content</td>-->\n    <!--</tr>-->\n    <!--<tr class=\"table-dark\">-->\n      <!--<th scope=\"row\">Dark</th>-->\n      <!--<td>Column content</td>-->\n      <!--<td>Column content</td>-->\n      <!--<td>Column content</td>-->\n    <!--</tr>-->\n    <!--</tbody>-->\n  <!--</table>-->\n</div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/profile/profile.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/profile/profile.component.ts ***!
  \*********************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(authService) {
        this.authService = authService;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getProfile().subscribe(function (res) {
            _this.user = res.user;
        });
    };
    ProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! ./profile.component.html */ "./src/app/components/profile/profile.component.html"),
            styles: [__webpack_require__(/*! ./profile.component.css */ "./src/app/components/profile/profile.component.css")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/components/register/register.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/register/register.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/register/register.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/register/register.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class = \"container\">\n  <h2 class = \"page-header\"> Register Faculty - Captain Details Form</h2>\n  <form (submit) = \"registerData()\">\n    \n    <div class = \"form-group col-md-7\">\n      <label>Name</label>\n      <input type=\"text\" [(ngModel)] = \"full_name\" name =\"full_name\" class = \"form-control\">\n    </div>\n    <!--<div class=\"col-md-4\"></div>-->\n\n    <div class = \"form-group col-md-7\">\n      <label>Phone No.</label>\n      <input type=\"text\" [(ngModel)] = \"phone\" name =\"phone\" class = \"form-control\" required>\n    </div>\n    <!--<div class=\"col-md-4\"></div>-->\n\n    <div class = \"form-group col-md-7\">\n      <label>Username</label>\n      <input type=\"text\" [(ngModel)] = \"username\" name =\"username\" class = \"form-control\" required>\n    </div>\n\n    <div class = \"form-group col-md-7\">\n      <label>Password</label>\n      <input type=\"password\" [(ngModel)] = \"password\" name =\"password\" class = \"form-control\" required>\n    </div>\n\n    <div class=\"col-md-7\">\n      <input type=\"submit\" class =\"btn btn-primary\" value = \"Submit\">\n    </div>\n  </form>\n</div>\n<hr>\n<div class = \"container\">\n\t<table>\n\t\t\t<tr>\n\t\t\t   <th>Name</th>\n\t\t\t   <th>Post</th>\n\t\t\t   <th>Contact</th>\n\t\t\t   <th>Delete</th>\n\t\t\t</tr>\n\n\t\t\t<tr *ngFor = \"let user of users\">\n\t\t\t   <td>{{user.full_name}}</td>\n\t\t\t   <td>{{user.post}}</td>\n\t\t\t   <td>{{user.phone}}</td>\n\t\t\t   <th><input type=\"button\" (click) = \"deleteUser(user._id)\" value= \"Delete\" class =\"btn btn-danger\"></th>\n\t\t\t</tr>\n\n\t</table>\n</div>\n\n"

/***/ }),

/***/ "./src/app/components/register/register.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/register/register.component.ts ***!
  \***********************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(authService, flashMessage, router) {
        this.authService = authService;
        this.flashMessage = flashMessage;
        this.router = router;
    }
    RegisterComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getUser().subscribe(function (user) {
            _this.users = user;
        });
    };
    RegisterComponent.prototype.registerData = function () {
        var _this = this;
        var user = {
            full_name: this.full_name,
            post: 'staff',
            phone: this.phone,
            username: this.username,
            password: this.password,
            state: '2'
        };
        this.authService.registerUser(user).subscribe(function (user) {
            _this.users.push(user);
            _this.authService.getUser().subscribe(function (user) {
                _this.users = user;
            });
        });
    };
    RegisterComponent.prototype.deleteUser = function (id) {
        var user = this.users;
        this.authService.deleteUser(id).subscribe(function (data) {
            if (data.n == 1) {
                for (var i = 0; i < user.length; i++) {
                    if (user[i]._id == id) {
                        user.splice(i, 1);
                    }
                }
            }
        });
    };
    RegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/components/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/components/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__["FlashMessagesService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/components/report-genaration/report-genaration.component.css":
/*!******************************************************************************!*\
  !*** ./src/app/components/report-genaration/report-genaration.component.css ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\n    font-family: arial, sans-serif;\n    border-collapse: collapse;\n    width: 100%;\n}\n\ntd, th {\n    border: 1px solid #dddddd;\n    text-align: left;\n    padding: 8px;\n}\n\ntr:nth-child(even) {\n    background-color: #dddddd;\n}"

/***/ }),

/***/ "./src/app/components/report-genaration/report-genaration.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/components/report-genaration/report-genaration.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class = \"container\">\n<h2>Report Generate</h2>\n<br><br>\n\t<table>\n\t\t\t<tr>\n\t\t\t   <th>Name</th>\n\t\t\t   <th>Post</th>\n\t\t\t   <th>Email</th>\n\t\t\t   <th>Reports</th>\n\t\t\t</tr>\n\n\t\t\t<tr *ngFor = \"let user of users\">\n\t\t\t   <td>{{user.full_name}}</td>\n\t\t\t   <td>{{user.post}}</td>\n\t\t\t   <td>{{user.email}}</td>\n\t\t\t   <th><input type=\"button\" (click) = \"viewLeavesAll(user._id,user.email)\" value= \"View Report\" class =\"btn btn-info\"></th>\n\t\t\t</tr>\n\n\t</table>\n</div>\n"

/***/ }),

/***/ "./src/app/components/report-genaration/report-genaration.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/components/report-genaration/report-genaration.component.ts ***!
  \*****************************************************************************/
/*! exports provided: ReportGenarationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportGenarationComponent", function() { return ReportGenarationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ReportGenarationComponent = /** @class */ (function () {
    function ReportGenarationComponent(authService, flashMessage, router) {
        this.authService = authService;
        this.flashMessage = flashMessage;
        this.router = router;
    }
    ReportGenarationComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getUser().subscribe(function (user) {
            _this.users = user;
        });
    };
    ReportGenarationComponent.prototype.viewLeavesAll = function (id, email) {
        var navigationExtras = {
            queryParams: {
                "id": id,
                "email": email
            }
        };
        this.router.navigate(["/createPDF"], navigationExtras);
    };
    ReportGenarationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-report-genaration',
            template: __webpack_require__(/*! ./report-genaration.component.html */ "./src/app/components/report-genaration/report-genaration.component.html"),
            styles: [__webpack_require__(/*! ./report-genaration.component.css */ "./src/app/components/report-genaration/report-genaration.component.css")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            angular2_flash_messages__WEBPACK_IMPORTED_MODULE_1__["FlashMessagesService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], ReportGenarationComponent);
    return ReportGenarationComponent;
}());



/***/ }),

/***/ "./src/app/components/request-leaves/request-leaves.component.css":
/*!************************************************************************!*\
  !*** ./src/app/components/request-leaves/request-leaves.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\n    font-family: arial, sans-serif;\n    border-collapse: collapse;\n    width: 100%;\n}\n\ntd, th {\n    border: 1px solid #dddddd;\n    text-align: left;\n    padding: 8px;\n}\n\ntr:nth-child(even) {\n    background-color: #dddddd;\n}"

/***/ }),

/***/ "./src/app/components/request-leaves/request-leaves.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/components/request-leaves/request-leaves.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class = \"container\">\n  <h2 class = \"page-header\"> Request Leaves</h2>\n  <form (submit) = \"request()\">\n\n\n\n    <div class=\"container\">\n      <div class=\"col-md-8\">\n        <div class = \"form-group\">\n          <label>Subject</label>\n          <input type=\"text\" [(ngModel)] = \"reason\" name =\"reason\" class = \"form-control\" required>\n        </div>\n      </div>\n      <div class=\"col-md-4\"></div>\n    </div>\n\n    <div class=\"container\">\n      <div class=\"col-md-8\">\n        <div class = \"form-group\">\n          <label>Discription (if any)</label><br>\n          <textarea [(ngModel)]='describe' name =\"describe\" rows=\"6\" cols=\"98\"></textarea>\n        </div>\n      </div>\n      <div class=\"col-md-4\"></div>\n    </div>\n\n    <div class=\"container\">\n      <div class=\"col-md-8\">\n        <div class = \"form-group\">\n          <label>Date</label>\n          <input type=\"date\" [(ngModel)] = \"date\" name =\"date\" class = \"form-control\" required>\n        </div>\n      </div>\n      <div class=\"col-md-4\"></div>\n    </div>\n\n    <div class=\"container\">\n      <div class=\"col-md-8\">\n        <input type=\"submit | reset\" class =\"btn btn-primary\" value = \"Submit\">\n      </div>\n      <div class=\"col-md-4\"></div>\n    </div>\n  </form>\n</div>\n<hr>\n<div class = \"container\">\n\t<table>\n\t\t\t<tr>\n\t\t\t   <th>Date</th>\n\t\t\t   <th>Reason</th>\n\t\t\t   <th>Describe</th>\n\t\t\t   <th>Delete</th>\n\t\t\t</tr>\n\n\t\t\t<tr *ngFor = \"let request of requests\">\n\t\t\t   <td>{{request.date}}</td>\n\t\t\t   <td>{{request.reason}}</td>\n\t\t\t   <td>{{request.describe}}</td>\n\t\t\t   <th><input type=\"button\" (click) = \"deleteRequest(request._id)\" value= \"Delete\" class =\"btn btn-danger\"></th>\n\t\t\t</tr>\n\n\t</table>\n  <br>\n  <br>\n</div>\n"

/***/ }),

/***/ "./src/app/components/request-leaves/request-leaves.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/request-leaves/request-leaves.component.ts ***!
  \***********************************************************************/
/*! exports provided: RequestLeavesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestLeavesComponent", function() { return RequestLeavesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_request_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/request.service */ "./src/app/services/request.service.ts");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RequestLeavesComponent = /** @class */ (function () {
    function RequestLeavesComponent(requestService, authService, flashMessage, router) {
        this.requestService = requestService;
        this.authService = authService;
        this.flashMessage = flashMessage;
        this.router = router;
        this.email = this.authService.getAuthEmail();
        this.name = this.authService.getAuthName();
        this.post = this.authService.getAuthPost();
    }
    RequestLeavesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.requestService.getRequest(this.email).subscribe(function (request) {
            _this.requests = request;
        });
    };
    RequestLeavesComponent.prototype.request = function () {
        var _this = this;
        var request = {
            name: this.name,
            post: this.post,
            email: this.email,
            date: this.date,
            reason: this.reason,
            describe: this.describe
        };
        this.requestService.sendRequest(request).subscribe(function (request) {
            _this.requests.push(request);
            _this.requestService.getRequest(_this.email).subscribe(function (request) {
                _this.requests = request;
            });
        });
    };
    RequestLeavesComponent.prototype.deleteRequest = function (id) {
        var request = this.requests;
        this.requestService.deleteRequest(id).subscribe(function (data) {
            if (data.n == 1) {
                for (var i = 0; i < request.length; i++) {
                    if (request[i]._id == id) {
                        request.splice(i, 1);
                    }
                }
            }
        });
    };
    RequestLeavesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-request-leaves',
            template: __webpack_require__(/*! ./request-leaves.component.html */ "./src/app/components/request-leaves/request-leaves.component.html"),
            styles: [__webpack_require__(/*! ./request-leaves.component.css */ "./src/app/components/request-leaves/request-leaves.component.css")]
        }),
        __metadata("design:paramtypes", [_services_request_service__WEBPACK_IMPORTED_MODULE_2__["RequestService"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
            angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__["FlashMessagesService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], RequestLeavesComponent);
    return RequestLeavesComponent;
}());



/***/ }),

/***/ "./src/app/components/update-post/update-post.component.css":
/*!******************************************************************!*\
  !*** ./src/app/components/update-post/update-post.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/update-post/update-post.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/components/update-post/update-post.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class = \"container\">\n\t<h2 class = \"page-header\"> Update Posts</h2>\n\t<form (submit) = \"updateData()\">\n\t\t<div class = \"form-group\">\n\t\t\t<label>About</label>\n\t\t\t<input type=\"text\" [(ngModel)] = \"about\" name =\"about\" class = \"form-control\" required>\n\t\t</div>\n\t\t<div class = \"form-group\">\n\t\t\t<label>Date</label>\n\t\t\t<input type=\"text\" [(ngModel)] = \"date\" name =\"date\" class = \"form-control\" required>\n\t\t</div>\n\t\t<div class = \"form-group\">\n\t\t\t<label>Content</label><br>\n\t\t\t<textarea [(ngModel)]='content' name =\"content\" rows=\"6\" cols=\"100\"></textarea>\n\t\t</div>\n\t\t<br>\n        <div class = \"form-group\">\n\t\t\t<input type=\"submit\" class =\"btn btn-success\" value = \"Update\">\n        </div>\n        <div class = \"form-group\">\n\t\t\t<input type=\"button\" (click) = \"redirectBack()\" value= \"back\" class =\"btn btn-warning\">\n        </div>\n\t</form>\n</div>"

/***/ }),

/***/ "./src/app/components/update-post/update-post.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/update-post/update-post.component.ts ***!
  \*****************************************************************/
/*! exports provided: UpdatePostComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdatePostComponent", function() { return UpdatePostComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_post_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/post.service */ "./src/app/services/post.service.ts");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var UpdatePostComponent = /** @class */ (function () {
    function UpdatePostComponent(route, postService, flashMessage, router) {
        var _this = this;
        this.route = route;
        this.postService = postService;
        this.flashMessage = flashMessage;
        this.router = router;
        this.route.queryParams.subscribe(function (params) {
            _this.id = params["id"];
        });
    }
    UpdatePostComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.postService.getPostToUpdate(this.id).subscribe(function (post) {
            _this.name = post.name,
                _this.post = post.post,
                _this.email = post.email,
                _this.about = post.about,
                _this.date = post.date,
                _this.content = post.content;
        });
    };
    UpdatePostComponent.prototype.updateData = function () {
        var _this = this;
        var post = {
            name: this.name,
            post: this.post,
            email: this.email,
            about: this.about,
            date: this.date,
            content: this.content
        };
        this.postService.updatePost(this.id, post).subscribe(function (res) {
            if (res) {
                _this.flashMessage.show("Update Successfuly", { cssClass: 'alert-success', times: 3000 });
                _this.router.navigate(['/addPost']);
            }
            else {
                _this.flashMessage.show("Something Went Wrong", { cssClass: 'alert-danger', times: 3000 });
                _this.router.navigate(['/addPost']);
            }
        });
    };
    UpdatePostComponent.prototype.redirectBack = function () {
        this.router.navigate(['/addPost']);
    };
    UpdatePostComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-update-post',
            template: __webpack_require__(/*! ./update-post.component.html */ "./src/app/components/update-post/update-post.component.html"),
            styles: [__webpack_require__(/*! ./update-post.component.css */ "./src/app/components/update-post/update-post.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _services_post_service__WEBPACK_IMPORTED_MODULE_2__["PostService"],
            angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__["FlashMessagesService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], UpdatePostComponent);
    return UpdatePostComponent;
}());



/***/ }),

/***/ "./src/app/components/update-user/update-user.component.css":
/*!******************************************************************!*\
  !*** ./src/app/components/update-user/update-user.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/update-user/update-user.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/components/update-user/update-user.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class = \"container\">\n\t<h2 class = \"page-header\"> Update Users</h2>\n\t<form (submit) = \"updateData()\">\n\t\t<div class = \"form-group\">\n\t\t\t<label>Name</label>\n\t\t\t<input type=\"text\" [(ngModel)] = \"full_name\" name =\"full_name\" class = \"form-control\" required>\n\t\t</div>\n\t\t<div class = \"form-group\">\n\t\t\t<label>Phone No.</label>\n\t\t\t<input type=\"text\" [(ngModel)] = \"phone\" name =\"phone\" class = \"form-control\" required>\n\t\t</div>\n\t\t<div class = \"form-group\">\n\t\t\t<label>Username</label>\n\t\t\t<input type=\"text\" [(ngModel)] = \"username\" name =\"username\" class = \"form-control\" required>\n\t\t</div>\n\t\t<div class = \"form-group\">\n\t\t\t<label>Email</label>\n\t\t\t<input type=\"text\" [(ngModel)] = \"email\" name =\"email\" class = \"form-control\" required>\n\t\t</div>\n\t\t<div class = \"form-group\">\n\t\t\t<label>Password</label>\n\t\t\t<input type=\"text\" [(ngModel)] = \"password\" name =\"password\" class = \"form-control\" required>\n\t\t</div>\n\t\t<h2 class = \"page-header\"> Grant Access</h2>\n\t\t<div class = \"form-group\">\n\t\t\t<label>Level</label>\n\t\t\t<input type=\"text\" [(ngModel)] = \"state\" name =\"state\" class = \"form-control\" required>\n\t\t</div>\n\t\t<br>\n        <div class = \"form-group\">\n\t\t\t<input type=\"submit\" class =\"btn btn-success\" value = \"Update\">\n        </div>\n        <div class = \"form-group\">\n\t\t\t<input type=\"button\" (click) = \"redirectBack()\" value= \"back\" class =\"btn btn-warning\">\n        </div>\n\t</form>\n</div>"

/***/ }),

/***/ "./src/app/components/update-user/update-user.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/update-user/update-user.component.ts ***!
  \*****************************************************************/
/*! exports provided: UpdateUserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateUserComponent", function() { return UpdateUserComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var UpdateUserComponent = /** @class */ (function () {
    function UpdateUserComponent(route, authService, flashMessage, router) {
        var _this = this;
        this.route = route;
        this.authService = authService;
        this.flashMessage = flashMessage;
        this.router = router;
        this.route.queryParams.subscribe(function (params) {
            _this.id = params["id"];
        });
    }
    UpdateUserComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getUserToUpdate(this.id).subscribe(function (user) {
            _this.full_name = user.full_name,
                _this.phone = user.phone,
                _this.username = user.username,
                _this.email = user.email,
                _this.password = user.password,
                _this.state = user.state,
                _this.beforeState = user.state;
        });
    };
    UpdateUserComponent.prototype.updateData = function () {
        var _this = this;
        this.checkPost();
        var user = {
            full_name: this.full_name,
            post: this.post,
            phone: this.phone,
            username: this.username,
            email: this.email,
            password: this.password,
            state: this.state
        };
        this.authService.updateUser(this.id, user).subscribe(function (res) {
            if (res) {
                if ((_this.beforeState != _this.state) && (_this.id == _this.authService.getAuthId())) {
                    _this.flashMessage.show("Your Level Update Successfuly Please Login as the new Role", { cssClass: 'alert-success', times: 3000 });
                    _this.authService.logout();
                    _this.router.navigate(['/login']);
                }
                else {
                    _this.flashMessage.show("Update Successfuly", { cssClass: 'alert-success', times: 3000 });
                    _this.router.navigate(['/manageAdmin']);
                }
            }
            else {
                _this.flashMessage.show("Something Went Wrong", { cssClass: 'alert-danger', times: 3000 });
                _this.router.navigate(['/manageAdmin']);
            }
        });
    };
    UpdateUserComponent.prototype.redirectBack = function () {
        this.router.navigate(['/manageAdmin']);
    };
    UpdateUserComponent.prototype.checkPost = function () {
        if (this.state == '0') {
            this.post = 'head';
        }
        else if (this.state == '1') {
            this.post = 'admin';
        }
        else if (this.state == '2') {
            this.post = 'staff';
        }
    };
    UpdateUserComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-update-user',
            template: __webpack_require__(/*! ./update-user.component.html */ "./src/app/components/update-user/update-user.component.html"),
            styles: [__webpack_require__(/*! ./update-user.component.css */ "./src/app/components/update-user/update-user.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__["FlashMessagesService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], UpdateUserComponent);
    return UpdateUserComponent;
}());



/***/ }),

/***/ "./src/app/components/view-user/view-user.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/view-user/view-user.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\n    font-family: arial, sans-serif;\n    border-collapse: collapse;\n    width: 100%;\n}\n\ntd, th {\n    border: 1px solid #dddddd;\n    text-align: left;\n    padding: 8px;\n}\n\ntr:nth-child(even) {\n    background-color: #dddddd;\n}"

/***/ }),

/***/ "./src/app/components/view-user/view-user.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/view-user/view-user.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class = \"container\">\n<h2>Leaves History</h2>\n<br><br>\t\n\t<table>\n\t\t\t<tr>\n\t\t\t   <th>Date</th>\n\t\t\t   <th>Reason</th>\n\t\t\t   <th>Describe</th>\n\t\t\t   <th>State</th>\n\t\t\t</tr>\n\t\t\t  \n\t\t\t<tr *ngFor = \"let hry of history\">\n\t\t\t   <td>{{hry.date}}</td>\n\t\t\t   <td>{{hry.reason}}</td>\n\t\t\t   <td>{{hry.describe}}</td>\n\t\t\t   <th>{{hry.state}}</th>\n\t\t\t</tr>\n\t\t\t\n\t</table>\n    <br><br>\n\t<div class = \"col-md-3\">\n\t\t\t<input type=\"button\" (click) = \"redirectBack()\" value= \"back\" class =\"btn btn-success\">\n\t\t\t<br><br>\n    </div>\t\n</div>\n\n\t\n"

/***/ }),

/***/ "./src/app/components/view-user/view-user.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/view-user/view-user.component.ts ***!
  \*************************************************************/
/*! exports provided: ViewUserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewUserComponent", function() { return ViewUserComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_request_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/request.service */ "./src/app/services/request.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ViewUserComponent = /** @class */ (function () {
    function ViewUserComponent(route, requestService, router) {
        var _this = this;
        this.route = route;
        this.requestService = requestService;
        this.router = router;
        this.route.queryParams.subscribe(function (params) {
            _this.email = params["email"];
        });
    }
    ViewUserComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.requestService.viewHistory(this.email).subscribe(function (user) {
            _this.history = user;
        });
    };
    ViewUserComponent.prototype.redirectBack = function () {
        this.router.navigate(['/manageLeaves']);
    };
    ViewUserComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-view-user',
            template: __webpack_require__(/*! ./view-user.component.html */ "./src/app/components/view-user/view-user.component.html"),
            styles: [__webpack_require__(/*! ./view-user.component.css */ "./src/app/components/view-user/view-user.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _services_request_service__WEBPACK_IMPORTED_MODULE_2__["RequestService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], ViewUserComponent);
    return ViewUserComponent;
}());



/***/ }),

/***/ "./src/app/services/auth.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthService = /** @class */ (function () {
    function AuthService(http, router) {
        this.http = http;
        this.router = router;
    }
    AuthService.prototype.registerUser = function (user) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post("user/manageUsers", user, { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    AuthService.prototype.loginUser = function (user) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post("user/login", user, { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    AuthService.prototype.getProfile = function () {
        this.fetchToken();
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({ "Authorization": this.authtoken });
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["RequestOptions"]({ headers: headers });
        return this.http.get("user/profile", options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    AuthService.prototype.getUser = function () {
        return this.http.get('user/manageUsers').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    AuthService.prototype.getUserToUpdate = function (id) {
        return this.http.get('user/getUser/' + id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    AuthService.prototype.updateUser = function (id, user) {
        return this.http.put('user/updateUser/' + id, user).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    AuthService.prototype.getAllUsers = function () {
        return this.http.get('user/manageAdmin').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    AuthService.prototype.deleteUser = function (id) {
        return this.http.delete('user/manageUsers/' + id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    AuthService.prototype.fetchToken = function () {
        var token = localStorage.getItem("tokenid");
        this.authtoken = token;
    };
    AuthService.prototype.fetchId = function () {
        var id = localStorage.getItem("id");
        this.authid = id;
    };
    AuthService.prototype.fetchName = function () {
        var name = localStorage.getItem("name");
        this.authname = name;
    };
    AuthService.prototype.fetchLevel = function () {
        var level = localStorage.getItem("level");
        this.authlevel = level;
    };
    AuthService.prototype.fetchEmail = function () {
        var email = localStorage.getItem("email");
        this.authemail = email;
    };
    AuthService.prototype.fetchPost = function () {
        var post = localStorage.getItem("post");
        this.authpost = post;
    };
    AuthService.prototype.storeData = function (token, id, name, level, email, post) {
        localStorage.setItem("tokenid", token);
        localStorage.setItem("id", id);
        localStorage.setItem("name", name);
        localStorage.setItem("level", level);
        localStorage.setItem("email", email);
        localStorage.setItem("post", post);
    };
    AuthService.prototype.logout = function () {
        this.authtoken = null;
        this.user = null;
        localStorage.clear();
    };
    AuthService.prototype.loggedIn = function () {
        this.fetchToken();
        if (this.authtoken != null) {
            return true;
        }
    };
    AuthService.prototype.getAuthName = function () {
        this.fetchName();
        return this.authname;
    };
    AuthService.prototype.getAuthId = function () {
        this.fetchId();
        return this.authid;
    };
    AuthService.prototype.getAuthEmail = function () {
        this.fetchEmail();
        return this.authemail;
    };
    AuthService.prototype.getAuthPost = function () {
        this.fetchPost();
        return this.authpost;
    };
    AuthService.prototype.isHead = function () {
        this.fetchLevel();
        if (this.authlevel == '0') {
            return true;
        }
    };
    AuthService.prototype.isAdmin = function () {
        this.fetchLevel();
        if (this.authlevel == '1') {
            return true;
        }
    };
    AuthService.prototype.isStaff = function () {
        this.fetchLevel();
        if (this.authlevel == '2') {
            return true;
        }
    };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/services/authguard.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/authguard.service.ts ***!
  \***********************************************/
/*! exports provided: AuthguardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthguardService", function() { return AuthguardService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthguardService = /** @class */ (function () {
    function AuthguardService(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthguardService.prototype.canActivate = function (route, state) {
        var roles = route.data["roles"];
        if (this.authService.loggedIn()) {
            if (this.authService.isHead()) {
                if ((roles[0] == 'Head') || (roles[0] == 'Head&Admin') || (roles[0] == 'All')) {
                    return true;
                }
                else {
                    this.router.navigate(['/']);
                    return false;
                }
            }
            else if (this.authService.isAdmin()) {
                if ((roles[0] == 'Admin') || (roles[0] == 'Head&Admin') || (roles[0] == 'Admin&Staff') || (roles[0] == 'All')) {
                    return true;
                }
                else {
                    this.router.navigate(['/']);
                    return false;
                }
            }
            else if (this.authService.isStaff()) {
                if ((roles[0] == 'Admin&Staff') || (roles[0] == 'All')) {
                    return true;
                }
                else {
                    this.router.navigate(['/']);
                    return false;
                }
            }
            else {
                this.router.navigate(['/']);
                return false;
            }
        }
        else {
            this.router.navigate(['/']);
            return false;
        }
    };
    AuthguardService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AuthguardService);
    return AuthguardService;
}());



/***/ }),

/***/ "./src/app/services/post.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/post.service.ts ***!
  \******************************************/
/*! exports provided: PostService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostService", function() { return PostService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PostService = /** @class */ (function () {
    function PostService(http, router) {
        this.http = http;
        this.router = router;
    }
    PostService.prototype.sendPost = function (post) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post("post/savePost", post, { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    PostService.prototype.getAllPost = function () {
        return this.http.get('post/getAllPost').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    PostService.prototype.deletePost = function (id) {
        return this.http.delete('post/deletePost/' + id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    PostService.prototype.getPostToUpdate = function (id) {
        return this.http.get('post/getPost/' + id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    PostService.prototype.updatePost = function (id, post) {
        return this.http.put('post/updatePost/' + id, post).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    PostService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], PostService);
    return PostService;
}());



/***/ }),

/***/ "./src/app/services/request.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/request.service.ts ***!
  \*********************************************/
/*! exports provided: RequestService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestService", function() { return RequestService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RequestService = /** @class */ (function () {
    function RequestService(http, router) {
        this.http = http;
        this.router = router;
    }
    RequestService.prototype.sendRequest = function (request) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post("request/manageRequest", request, { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    RequestService.prototype.getRequest = function (email) {
        return this.http.get('request/manageRequest/' + email).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    RequestService.prototype.viewHistory = function (email) {
        return this.http.get('request/viewHistory/' + email).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    RequestService.prototype.deleteRequest = function (id) {
        return this.http.delete('request/manageRequest/' + id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    RequestService.prototype.getAllRequest = function () {
        return this.http.get('request/manageRequest').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    RequestService.prototype.acceptRequest = function (request) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post("request/acceptRequest", request, { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    RequestService.prototype.notacceptRequest = function (request) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post("request/notacceptRequest", request, { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    RequestService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], RequestService);
    return RequestService;
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
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


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




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Angular Projects\templates\web_project\Angular-Front\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map