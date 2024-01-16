"use strict";
(self["webpackChunknewsApp"] = self["webpackChunknewsApp"] || []).push([["main"],{

/***/ 6401:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppComponent: () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _components_toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/toolbar/toolbar.component */ 5512);
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/header/header.component */ 6471);






function AppComponent_app_toolbar_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "app-toolbar", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("categoryChanged", function AppComponent_app_toolbar_2_Template_app_toolbar_categoryChanged_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r2);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r1.onCategoryChanged($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
class AppComponent {
  constructor(activatedRoute, router) {
    this.activatedRoute = activatedRoute;
    this.router = router;
    this.title = 'newsApp';
    this.selectedCategory = 'general';
    this.isLoggedIn = false;
    this.isLoginPage = false;
    this.activatedRoute.url.subscribe(segments => {
      this.isLoginPage = segments.some(segment => segment.path === 'login');
    });
    this.router.events.subscribe(event => {
      if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__.NavigationEnd) {
        this.isLoggedIn = event.url !== '/login';
      }
    });
  }
  onCategoryChanged(category) {
    this.selectedCategory = category;
  }
  static #_ = this.ɵfac = function AppComponent_Factory(t) {
    return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: AppComponent,
    selectors: [["app-root"]],
    decls: 4,
    vars: 1,
    consts: [[1, "container"], [3, "categoryChanged", 4, "ngIf"], [3, "categoryChanged"]],
    template: function AppComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, AppComponent_app_toolbar_2_Template, 1, 0, "app-toolbar", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.isLoggedIn && !ctx.isLoginPage);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterOutlet, _components_toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_0__.ToolbarComponent, _components_header_header_component__WEBPACK_IMPORTED_MODULE_1__.HeaderComponent],
    styles: [".container[_ngcontent-%COMP%] {\n  height: 100%;\n  margin: 0;\n  padding: 0;\n}\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZO0VBQ1osU0FBUztFQUNULFVBQVU7QUFDWiIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBtYXJnaW46IDA7XHJcbiAgcGFkZGluZzogMDtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 8629:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppModule: () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/platform-browser */ 6480);
/* harmony import */ var _modules_app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/app-routing.module */ 3460);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 6401);
/* harmony import */ var _components_news_list_news_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/news-list/news-list.component */ 4981);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/common/http */ 4860);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/platform-browser/animations */ 4987);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _services_news_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/news.service */ 3628);
/* harmony import */ var _modules_material_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/material.module */ 5818);
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/login/login.component */ 6666);
/* harmony import */ var _components_registration_registration_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/registration/registration.component */ 5401);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../environments/environment */ 553);
/* harmony import */ var _angular_fire_compat__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/fire/compat */ 5281);
/* harmony import */ var _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/fire/compat/firestore */ 4080);
/* harmony import */ var _angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/fire/compat/auth */ 6075);
/* harmony import */ var _angular_fire_compat_storage__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/fire/compat/storage */ 9664);
/* harmony import */ var _angular_fire_compat_database__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/fire/compat/database */ 3002);
/* harmony import */ var _components_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/forgot-password/forgot-password.component */ 2813);
/* harmony import */ var _components_verify_email_verify_email_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/verify-email/verify-email.component */ 23);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/icon */ 6515);
/* harmony import */ var _components_search_search_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/search/search.component */ 9013);
/* harmony import */ var _services_categories_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./services/categories.service */ 3245);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./services/auth.service */ 2333);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/button */ 895);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/material/divider */ 9400);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/form-field */ 1333);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/input */ 26);
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/material/list */ 3228);
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/sidenav */ 1465);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/toolbar */ 2484);
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/material/slide-toggle */ 9293);
/* harmony import */ var _components_toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/toolbar/toolbar.component */ 5512);
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/header/header.component */ 6471);
/* harmony import */ var _components_liked_liked_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/liked/liked.component */ 1444);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/core */ 1699);





































class AppModule {
  static #_ = this.ɵfac = function AppModule_Factory(t) {
    return new (t || AppModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdefineNgModule"]({
    type: AppModule,
    bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent]
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdefineInjector"]({
    providers: [_services_auth_service__WEBPACK_IMPORTED_MODULE_12__.AuthService, _services_news_service__WEBPACK_IMPORTED_MODULE_3__.NewsService, _services_categories_service__WEBPACK_IMPORTED_MODULE_11__.CategoryService],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_17__.BrowserModule, _modules_app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_18__.HttpClientModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_19__.BrowserAnimationsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_20__.FormsModule, _modules_material_module__WEBPACK_IMPORTED_MODULE_4__.MaterialModule, _angular_fire_compat__WEBPACK_IMPORTED_MODULE_21__.AngularFireModule.initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_7__.environment.firebase), _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_22__.AngularFirestoreModule, _angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_23__.AngularFireAuthModule, _angular_fire_compat_storage__WEBPACK_IMPORTED_MODULE_24__.AngularFireStorageModule, _angular_fire_compat_database__WEBPACK_IMPORTED_MODULE_25__.AngularFireDatabaseModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_26__.MatIconModule, _angular_forms__WEBPACK_IMPORTED_MODULE_20__.ReactiveFormsModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_27__.MatInputModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_28__.MatButtonModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_26__.MatIconModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_29__.MatFormFieldModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_28__.MatButtonModule, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_30__.MatToolbarModule, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_31__.MatSidenavModule, _angular_material_list__WEBPACK_IMPORTED_MODULE_32__.MatListModule, _angular_material_divider__WEBPACK_IMPORTED_MODULE_33__.MatDividerModule, _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_34__.MatSlideToggleModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent, _components_news_list_news_list_component__WEBPACK_IMPORTED_MODULE_2__.NewsListComponent, _components_login_login_component__WEBPACK_IMPORTED_MODULE_5__.LoginComponent, _components_registration_registration_component__WEBPACK_IMPORTED_MODULE_6__.RegistrationComponent, _components_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_8__.ForgotPasswordComponent, _components_verify_email_verify_email_component__WEBPACK_IMPORTED_MODULE_9__.VerifyEmailComponent, _components_search_search_component__WEBPACK_IMPORTED_MODULE_10__.SearchComponent, _components_toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_13__.ToolbarComponent, _components_header_header_component__WEBPACK_IMPORTED_MODULE_14__.HeaderComponent, _components_liked_liked_component__WEBPACK_IMPORTED_MODULE_15__.LikedComponent],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_17__.BrowserModule, _modules_app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_18__.HttpClientModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_19__.BrowserAnimationsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_20__.FormsModule, _modules_material_module__WEBPACK_IMPORTED_MODULE_4__.MaterialModule, _angular_fire_compat__WEBPACK_IMPORTED_MODULE_21__.AngularFireModule, _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_22__.AngularFirestoreModule, _angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_23__.AngularFireAuthModule, _angular_fire_compat_storage__WEBPACK_IMPORTED_MODULE_24__.AngularFireStorageModule, _angular_fire_compat_database__WEBPACK_IMPORTED_MODULE_25__.AngularFireDatabaseModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_26__.MatIconModule, _angular_forms__WEBPACK_IMPORTED_MODULE_20__.ReactiveFormsModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_27__.MatInputModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_28__.MatButtonModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_26__.MatIconModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_29__.MatFormFieldModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_28__.MatButtonModule, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_30__.MatToolbarModule, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_31__.MatSidenavModule, _angular_material_list__WEBPACK_IMPORTED_MODULE_32__.MatListModule, _angular_material_divider__WEBPACK_IMPORTED_MODULE_33__.MatDividerModule, _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_34__.MatSlideToggleModule]
  });
})();

/***/ }),

/***/ 2813:
/*!*************************************************************************!*\
  !*** ./src/app/components/forgot-password/forgot-password.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ForgotPasswordComponent: () => (/* binding */ ForgotPasswordComponent)
/* harmony export */ });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/animations */ 2501);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/auth.service */ 2333);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ 895);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/divider */ 9400);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/card */ 8497);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/form-field */ 1333);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/input */ 26);
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/progress-bar */ 8173);











function ForgotPasswordComponent_mat_progress_bar_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "mat-progress-bar", 11);
  }
}
class ForgotPasswordComponent {
  constructor(authService) {
    this.authService = authService;
    this.isLoading = false;
  }
  ngOnInit() {}
  static #_ = this.ɵfac = function ForgotPasswordComponent_Factory(t) {
    return new (t || ForgotPasswordComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: ForgotPasswordComponent,
    selectors: [["app-forgot-password"]],
    decls: 24,
    vars: 4,
    consts: [[1, "container"], [1, "displayTable"], [1, "displayTableCell"], [1, "text-center"], [1, "formGroup"], ["matInput", "", "type", "email", "placeholder", "Email Address", "required", "", 1, "formControl"], ["passwordResetEmail", ""], ["mat-raised-button", "", "color", "primary", "type", "submit", 1, "btn", "btnPrimary", 3, "click"], [1, "redirectToLogin"], ["routerLink", "/login", 1, "redirect"], ["mode", "indeterminate", 4, "ngIf"], ["mode", "indeterminate"]],
    template: function ForgotPasswordComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "mat-card", 1)(2, "mat-card-content")(3, "mat-card-header", 2)(4, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Reset Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, " Please enter your email address to request a password reset. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "mat-form-field", 4)(9, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "input", 5, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "mat-card-actions", 4)(15, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ForgotPasswordComponent_Template_button_click_15_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r2);
          const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](12);
          return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"]([ctx.authService.show(), ctx.authService.ForgotPassword(_r0.value)]);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, " Reset Password ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "mat-card-footer", 8)(18, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Go back to ? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, " Log In");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](22, ForgotPasswordComponent_mat_progress_bar_22_Template, 1, 0, "mat-progress-bar", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](23, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@myInsertRemoveTrigger", undefined);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](23, 2, ctx.authService.isLoading$));
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLink, _angular_material_button__WEBPACK_IMPORTED_MODULE_4__.MatButton, _angular_material_divider__WEBPACK_IMPORTED_MODULE_5__.MatDivider, _angular_material_card__WEBPACK_IMPORTED_MODULE_6__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_6__.MatCardActions, _angular_material_card__WEBPACK_IMPORTED_MODULE_6__.MatCardContent, _angular_material_card__WEBPACK_IMPORTED_MODULE_6__.MatCardFooter, _angular_material_card__WEBPACK_IMPORTED_MODULE_6__.MatCardHeader, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_8__.MatInput, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_9__.MatProgressBar, _angular_common__WEBPACK_IMPORTED_MODULE_2__.AsyncPipe],
    styles: [".redirect[_ngcontent-%COMP%], .btnPrimary[_ngcontent-%COMP%] {\n    cursor: pointer;\n}\n.container[_ngcontent-%COMP%] {\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\nmat-card[_ngcontent-%COMP%] {\n  width: 500px;\n  padding: 1em;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\nbutton[_ngcontent-%COMP%] {\n  margin: 0.5em;\n}\n\nmat-form-field[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\ninput.formControl[_ngcontent-%COMP%] {\n  width: 90%;\n}\n\nmat-card-header[_ngcontent-%COMP%], mat-card-footer[_ngcontent-%COMP%], mat-card-actions[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n.redirect[_ngcontent-%COMP%] {\n  display: inline-block;\n  text-align: center;\n  color: #4dd5fe;\n  font-size: 14px;\n  cursor: pointer;\n}\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9mb3Jnb3QtcGFzc3dvcmQvZm9yZ290LXBhc3N3b3JkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxlQUFlO0FBQ25CO0FBQ0E7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osWUFBWTtFQUNaLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsVUFBVTtBQUNaOztBQUVBOzs7RUFHRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxlQUFlO0VBQ2YsZUFBZTtBQUNqQiIsInNvdXJjZXNDb250ZW50IjpbIi5yZWRpcmVjdCwgLmJ0blByaW1hcnkge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbi5jb250YWluZXIge1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbm1hdC1jYXJkIHtcclxuICB3aWR0aDogNTAwcHg7XHJcbiAgcGFkZGluZzogMWVtO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcbmJ1dHRvbiB7XHJcbiAgbWFyZ2luOiAwLjVlbTtcclxufVxyXG5cclxubWF0LWZvcm0tZmllbGQge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG5pbnB1dC5mb3JtQ29udHJvbCB7XHJcbiAgd2lkdGg6IDkwJTtcclxufVxyXG5cclxubWF0LWNhcmQtaGVhZGVyLFxyXG5tYXQtY2FyZC1mb290ZXIsXHJcbm1hdC1jYXJkLWFjdGlvbnMge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4ucmVkaXJlY3Qge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgY29sb3I6ICM0ZGQ1ZmU7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"],
    data: {
      animation: [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_10__.trigger)('myInsertRemoveTrigger', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_10__.transition)(':enter', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_10__.style)({
        opacity: 0
      }), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_10__.animate)('1s', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_10__.style)({
        opacity: 1
      }))]), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_10__.transition)(':leave', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_10__.animate)('1s', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_10__.style)({
        opacity: 0
      }))])]), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_10__.trigger)('myOtherInsertRemoveTrigger', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_10__.transition)(':enter', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_10__.style)({
        transform: 'translateX(-100%)'
      }), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_10__.animate)('0.5s', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_10__.style)({
        transform: 'translateX(0)'
      }))]), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_10__.transition)(':leave', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_10__.animate)('0.5s', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_10__.style)({
        transform: 'translateX(100%)'
      }))])])]
    }
  });
}

/***/ }),

/***/ 6471:
/*!*******************************************************!*\
  !*** ./src/app/components/header/header.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HeaderComponent: () => (/* binding */ HeaderComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 6575);


class HeaderComponent {
  constructor() {
    this.currentDay = '';
    this.currentDate = new Date();
    this.currentTime = new Date();
  }
  ngOnInit() {
    this.updateTime();
    setInterval(() => this.updateTime(), 1000);
  }
  updateTime() {
    const now = new Date();
    this.currentDay = this.getDayOfWeek(now.getDay());
    this.currentDate = now;
    this.currentTime = now;
  }
  getDayOfWeek(dayIndex) {
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return daysOfWeek[dayIndex];
  }
  static #_ = this.ɵfac = function HeaderComponent_Factory(t) {
    return new (t || HeaderComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: HeaderComponent,
    selectors: [["app-header"]],
    decls: 14,
    vars: 9,
    consts: [[1, "header"], [1, "clock"], [1, "api"], ["href", "https://newsapi.org/", "target", "_blank"], ["src", "./assets/news_logo.png", "alt", "logo", "width", "50"], [1, "banner"], [1, "theHeader"]],
    template: function HeaderComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 2)(7, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Powered by: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 5)(12, "h1", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "InfoHub News: Bringing the World to Your Screen");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"](" ", ctx.currentDay, " ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](4, 3, ctx.currentTime, "HH:mm:ss"), " MST, ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](5, 6, ctx.currentDate, "MM-dd-yyyy"), " ");
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.DatePipe],
    styles: [".clock[_ngcontent-%COMP%] {\n    text-transform: uppercase;\n    font-weight: 500;\n}\n\n\n.header[_ngcontent-%COMP%] {\n    background-color: #000;\n    color: #fca311;\n    text-align: center;\n    display: flex;\n    justify-content: space-between;\n    padding: 0 2rem;\n}\n\np[_ngcontent-%COMP%] {\n    margin: 0;\n    padding: 0;\n}\n\n.api[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 1vh;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    line-height: 0;\n    padding-top: 2px;\n}\n\n.banner[_ngcontent-%COMP%] {\n    background-image: url(\"/assets/header.jpg\");\n    background-color: #023e8a;\n    background-size: cover;\n    background-repeat: no-repeat;\n    background-position: center;\n    width: 100%;\n    height: 2em;\n}\n.theHeader[_ngcontent-%COMP%], small[_ngcontent-%COMP%] {\n    font-family: 'Montserrat', sans-serif;\n    color: #f8edeb;\n    margin: 0;\n    padding: 0 2rem;\n    font-size: 1rem;\n    display: flex;\n    justify-content: flex-end;\n    font-weight: bolder;\n    align-items: center;\n    text-transform: uppercase;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0lBQ0kseUJBQXlCO0lBQ3pCLGdCQUFnQjtBQUNwQjs7O0FBR0E7SUFDSSxzQkFBc0I7SUFDdEIsY0FBYztJQUNkLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxTQUFTO0lBQ1QsVUFBVTtBQUNkOztBQUVBO0lBQ0ksY0FBYztJQUNkLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLGNBQWM7SUFDZCxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSwyQ0FBMkM7SUFDM0MseUJBQXlCO0lBQ3pCLHNCQUFzQjtJQUN0Qiw0QkFBNEI7SUFDNUIsMkJBQTJCO0lBQzNCLFdBQVc7SUFDWCxXQUFXO0FBQ2Y7QUFDQTtJQUNJLHFDQUFxQztJQUNyQyxjQUFjO0lBQ2QsU0FBUztJQUNULGVBQWU7SUFDZixlQUFlO0lBQ2YsYUFBYTtJQUNiLHlCQUF5QjtJQUN6QixtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLHlCQUF5QjtBQUM3QiIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4uY2xvY2sge1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbn1cclxuXHJcblxyXG4uaGVhZGVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XHJcbiAgICBjb2xvcjogI2ZjYTMxMTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBwYWRkaW5nOiAwIDJyZW07XHJcbn1cclxuXHJcbnAge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMDtcclxufVxyXG5cclxuLmFwaSBwIHtcclxuICAgIGZvbnQtc2l6ZTogMXZoO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGxpbmUtaGVpZ2h0OiAwO1xyXG4gICAgcGFkZGluZy10b3A6IDJweDtcclxufVxyXG5cclxuLmJhbm5lciB7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvYXNzZXRzL2hlYWRlci5qcGdcIik7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDIzZThhO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMmVtO1xyXG59XHJcbi50aGVIZWFkZXIsIHNtYWxsIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XHJcbiAgICBjb2xvcjogI2Y4ZWRlYjtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmc6IDAgMnJlbTtcclxuICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 1444:
/*!*****************************************************!*\
  !*** ./src/app/components/liked/liked.component.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LikedComponent: () => (/* binding */ LikedComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/auth.service */ 2333);
/* harmony import */ var _services_liked_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/liked.service */ 8966);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ 895);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/divider */ 9400);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/card */ 8497);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ 6515);









function LikedComponent_mat_card_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-card", 5)(1, "mat-card-header")(2, "mat-card-title")(3, "h3")(4, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const likedArticle_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("href", likedArticle_r1.url, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", likedArticle_r1.title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](likedArticle_r1.description);
  }
}
class LikedComponent {
  constructor(authService, likedService, router) {
    this.authService = authService;
    this.likedService = likedService;
    this.router = router;
    this.likedArticles = [];
  }
  ngOnInit() {
    this.authService.getUserData().subscribe(user => {
      this.likedArticles = this.likedService.getLikedArticles();
    });
  }
  goBackToTopHeadlines() {
    this.router.navigate(['top-headlines']);
  }
  static #_ = this.ɵfac = function LikedComponent_Factory(t) {
    return new (t || LikedComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_liked_service__WEBPACK_IMPORTED_MODULE_1__.LikedService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: LikedComponent,
    selectors: [["app-liked"]],
    decls: 13,
    vars: 1,
    consts: [[1, "likedSection"], ["mat-button", "", 1, "cardButton", "goBackButton", 3, "click"], ["aria-hidden", "false", "aria-label", "icon"], [1, "news-list"], ["class", "searchResults", 4, "ngFor", "ngForOf"], [1, "searchResults"], ["id", "subtitler", "target", "_blank", 3, "href"]],
    template: function LikedComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "User liked articles");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function LikedComponent_Template_button_click_3_listener() {
          return ctx.goBackToTopHeadlines();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "mat-icon", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "arrow_back");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "Go Back");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "br")(9, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](11, LikedComponent_mat_card_11_Template, 8, 3, "mat-card", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](12, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.likedArticles);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_material_button__WEBPACK_IMPORTED_MODULE_5__.MatButton, _angular_material_divider__WEBPACK_IMPORTED_MODULE_6__.MatDivider, _angular_material_card__WEBPACK_IMPORTED_MODULE_7__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_7__.MatCardHeader, _angular_material_card__WEBPACK_IMPORTED_MODULE_7__.MatCardTitle, _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__.MatIcon],
    styles: ["h1[_ngcontent-%COMP%] {\n    margin: 0 auto;\n    text-align: center;\n}\n\nh1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n  font-weight: bold;\n  text-align: center;\n  text-transform: uppercase;\n  color: #0a3161;\n  padding: 1vh;\n  margin: 0;\n}\n\n\n.news-list[_ngcontent-%COMP%] {\n  margin: 0 auto;\n  width: 90%;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n}\n\nmat-card[_ngcontent-%COMP%] {\n  width: 15em;\n  height: 12rem;\n  overflow: hidden;\n  margin: 10px;\n  padding: 10px;\n  background-color: #d1d7dc;\n  flex: 0 0 calc(25% - 20px);\n  margin-bottom: 20px;\n}\n\nmat-card-header[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n\nmat-card-content[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  margin: 0;\n  padding: 0;\n}\n\nmat-icon[_ngcontent-%COMP%] {\n  align-items: center;\n  justify-content: flex-end;\n  text-align: center;\n}\n\n.cardButton[_ngcontent-%COMP%] {\n  margin: 0 auto;\n  background-color: #003566;\n  padding: 5px 10px;\n  text-decoration: none;\n  border: none;\n  color: #d1d7dc !important;\n}\n\n#subtitler[_ngcontent-%COMP%] {\n  color: #000 !important;\n  font-weight: bolder;\n}\n.cardButton[_ngcontent-%COMP%]:hover {\n  background-color: #d90429;\n}\n\n.likedSection[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  margin: 0 auto;\n  width: 40%;\n}\n.goBackButton[_ngcontent-%COMP%] {\n  margin: 0 auto;\n  width: 40%;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9saWtlZC9saWtlZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksY0FBYztJQUNkLGtCQUFrQjtBQUN0Qjs7QUFFQTs7RUFFRSxnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIsY0FBYztFQUNkLFlBQVk7RUFDWixTQUFTO0FBQ1g7OztBQUdBO0VBQ0UsY0FBYztFQUNkLFVBQVU7RUFDVixhQUFhO0VBQ2IsZUFBZTtFQUNmLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLFdBQVc7RUFDWCxhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixhQUFhO0VBQ2IseUJBQXlCO0VBQ3pCLDBCQUEwQjtFQUMxQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixTQUFTO0VBQ1QsVUFBVTtBQUNaOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLHlCQUF5QjtFQUN6QixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QseUJBQXlCO0VBQ3pCLGlCQUFpQjtFQUNqQixxQkFBcUI7RUFDckIsWUFBWTtFQUNaLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QixtQkFBbUI7QUFDckI7QUFDQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsY0FBYztFQUNkLFVBQVU7QUFDWjtBQUNBO0VBQ0UsY0FBYztFQUNkLFVBQVU7QUFDWiIsInNvdXJjZXNDb250ZW50IjpbImgxIHtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG5oMSxcclxuaDIsIGgzIHtcclxuICBtYXJnaW4tdG9wOiAxcmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIGNvbG9yOiAjMGEzMTYxO1xyXG4gIHBhZGRpbmc6IDF2aDtcclxuICBtYXJnaW46IDA7XHJcbn1cclxuXHJcblxyXG4ubmV3cy1saXN0IHtcclxuICBtYXJnaW46IDAgYXV0bztcclxuICB3aWR0aDogOTAlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxufVxyXG5cclxubWF0LWNhcmQge1xyXG4gIHdpZHRoOiAxNWVtO1xyXG4gIGhlaWdodDogMTJyZW07XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBtYXJnaW46IDEwcHg7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDFkN2RjO1xyXG4gIGZsZXg6IDAgMCBjYWxjKDI1JSAtIDIwcHgpO1xyXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbn1cclxuXHJcbm1hdC1jYXJkLWhlYWRlciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcblxyXG5tYXQtY2FyZC1jb250ZW50IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBtYXJnaW46IDA7XHJcbiAgcGFkZGluZzogMDtcclxufVxyXG5cclxubWF0LWljb24ge1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5jYXJkQnV0dG9uIHtcclxuICBtYXJnaW46IDAgYXV0bztcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAzNTY2O1xyXG4gIHBhZGRpbmc6IDVweCAxMHB4O1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgY29sb3I6ICNkMWQ3ZGMgIWltcG9ydGFudDtcclxufVxyXG5cclxuI3N1YnRpdGxlciB7XHJcbiAgY29sb3I6ICMwMDAgIWltcG9ydGFudDtcclxuICBmb250LXdlaWdodDogYm9sZGVyO1xyXG59XHJcbi5jYXJkQnV0dG9uOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDkwNDI5O1xyXG59XHJcblxyXG4ubGlrZWRTZWN0aW9uIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgd2lkdGg6IDQwJTtcclxufVxyXG4uZ29CYWNrQnV0dG9uIHtcclxuICBtYXJnaW46IDAgYXV0bztcclxuICB3aWR0aDogNDAlO1xyXG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 6666:
/*!*****************************************************!*\
  !*** ./src/app/components/login/login.component.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LoginComponent: () => (/* binding */ LoginComponent)
/* harmony export */ });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/animations */ 2501);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/auth.service */ 2333);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ 895);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/divider */ 9400);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/card */ 8497);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/form-field */ 1333);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/input */ 26);
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/progress-bar */ 8173);











function LoginComponent_mat_progress_bar_30_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "mat-progress-bar", 12);
  }
}
class LoginComponent {
  constructor(authService) {
    this.authService = authService;
    this.isLoading = false;
  }
  ngOnInit() {}
  static #_ = this.ɵfac = function LoginComponent_Factory(t) {
    return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: LoginComponent,
    selectors: [["app-login"]],
    decls: 32,
    vars: 4,
    consts: [[1, "container"], [1, "login-card"], ["src", "./assets/infohub_logo.png", "alt", "logo", "width", "400"], [1, "example-full-width"], ["matInput", "", "type", "text"], ["userName", ""], ["matInput", "", "type", "password"], ["userPassword", ""], ["mat-raised-button", "", "color", "primary", 3, "click"], ["routerLink", "/forgot-password", 1, "forgotPassword"], ["routerLink", "/register", 1, "SignUp"], ["mode", "indeterminate", 4, "ngIf"], ["mode", "indeterminate"]],
    template: function LoginComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "mat-card", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "mat-card-header")(4, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "mat-form-field", 3)(7, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Username");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "input", 4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "mat-form-field", 3)(12, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "input", 6, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "mat-card-actions")(19, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_19_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3);
          const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](10);
          const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](15);
          ctx.authService.show();
          return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx.authService.SignIn(_r0.value, _r1.value));
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, " Login ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "mat-card-footer")(22, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, " Or ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "Forgot Password?");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, " Don't have an account? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "Sign Up");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](30, LoginComponent_mat_progress_bar_30_Template, 1, 0, "mat-progress-bar", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](31, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@myInsertRemoveTrigger", undefined);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](31, 2, ctx.authService.isLoading$));
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLink, _angular_material_button__WEBPACK_IMPORTED_MODULE_4__.MatButton, _angular_material_divider__WEBPACK_IMPORTED_MODULE_5__.MatDivider, _angular_material_card__WEBPACK_IMPORTED_MODULE_6__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_6__.MatCardActions, _angular_material_card__WEBPACK_IMPORTED_MODULE_6__.MatCardContent, _angular_material_card__WEBPACK_IMPORTED_MODULE_6__.MatCardFooter, _angular_material_card__WEBPACK_IMPORTED_MODULE_6__.MatCardHeader, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_8__.MatInput, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_9__.MatProgressBar, _angular_common__WEBPACK_IMPORTED_MODULE_2__.AsyncPipe],
    styles: ["body[_ngcontent-%COMP%], *[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n}\n\n.container[_ngcontent-%COMP%] {\n  \n\n  height: 80%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\nimg[_ngcontent-%COMP%] {\n  display: block;\n  margin: 0 auto;\n  padding: 0;\n  overflow: hidden;\n}\n\nh2[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.login-card[_ngcontent-%COMP%] {\n  width: 400px;\n  padding: 0;\n}\n\nbutton[_ngcontent-%COMP%] {\n  display: block;\n  margin: 0 auto;\n}\n\n.mat-mdc-card-header[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n\n.forgotPassword[_ngcontent-%COMP%], .SignUp[_ngcontent-%COMP%] {\n  text-align: center;\n  color: #4dd5fe;\n  font-size: 14px;\n  cursor: pointer;\n  margin-top: 10px;\n}\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsU0FBUztFQUNULFVBQVU7QUFDWjs7QUFFQTtFQUNFLDRCQUE0QjtFQUM1QixXQUFXO0VBQ1gsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsY0FBYztFQUNkLFVBQVU7RUFDVixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osVUFBVTtBQUNaOztBQUVBO0VBQ0UsY0FBYztFQUNkLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0FBQ3hCOztBQUVBOztFQUVFLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2QsZUFBZTtFQUNmLGVBQWU7RUFDZixnQkFBZ0I7QUFDbEIiLCJzb3VyY2VzQ29udGVudCI6WyJib2R5LCAqIHtcclxuICBtYXJnaW46IDA7XHJcbiAgcGFkZGluZzogMDtcclxufVxyXG5cclxuLmNvbnRhaW5lciB7XHJcbiAgLyogYm9yZGVyOiAycHggc29saWQgYmx1ZTsgKi9cclxuICBoZWlnaHQ6IDgwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbmltZyB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgcGFkZGluZzogMDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG5oMiB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4ubG9naW4tY2FyZCB7XHJcbiAgd2lkdGg6IDQwMHB4O1xyXG4gIHBhZGRpbmc6IDA7XHJcbn1cclxuXHJcbmJ1dHRvbiB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbn1cclxuXHJcbi5tYXQtbWRjLWNhcmQtaGVhZGVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuXHJcbi5mb3Jnb3RQYXNzd29yZCxcclxuLlNpZ25VcCB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGNvbG9yOiAjNGRkNWZlO1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"],
    data: {
      animation: [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_10__.trigger)('myInsertRemoveTrigger', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_10__.transition)(':enter', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_10__.style)({
        opacity: 0
      }), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_10__.animate)('1s', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_10__.style)({
        opacity: 1
      }))]), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_10__.transition)(':leave', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_10__.animate)('1s', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_10__.style)({
        opacity: 0
      }))])]), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_10__.trigger)('myOtherInsertRemoveTrigger', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_10__.transition)(':enter', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_10__.style)({
        transform: 'translateX(-100%)'
      }), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_10__.animate)('0.5s', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_10__.style)({
        transform: 'translateX(0)'
      }))]), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_10__.transition)(':leave', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_10__.animate)('0.5s', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_10__.style)({
        transform: 'translateX(100%)'
      }))])])]
    }
  });
}

/***/ }),

/***/ 4981:
/*!*************************************************************!*\
  !*** ./src/app/components/news-list/news-list.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NewsListComponent: () => (/* binding */ NewsListComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _services_news_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/news.service */ 3628);
/* harmony import */ var _services_categories_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/categories.service */ 3245);
/* harmony import */ var src_app_services_liked_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/liked.service */ 8966);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/divider */ 9400);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/card */ 8497);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ 6515);








function NewsListComponent_mat_card_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-card", 6)(1, "a", 7)(2, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "img", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "mat-card-header")(5, "mat-card-title")(6, "h3")(7, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "p", 11)(10, "em");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function NewsListComponent_mat_card_8_Template_a_click_12_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r3);
      const article_r1 = restoredCtx.$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r2.likedArticles(article_r1.url));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](13, "mat-icon", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const article_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("href", article_r1.url, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("src", article_r1.urlToImage ? article_r1.urlToImage : ctx_r0.defaultImage, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](article_r1.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](article_r1.publishedAt);
  }
}
class NewsListComponent {
  constructor(newsService, categoryService, likedService) {
    this.newsService = newsService;
    this.categoryService = categoryService;
    this.likedService = likedService;
    this.selectedCategory = 'business';
    this.categories = this.categoryService.categories;
    this.selectedCategory$ = this.newsService.selectedCategory$;
    console.log(this.selectedCategory);
  }
  ngOnInit() {
    this.getNews(this.selectedCategory);
    this.selectedCategory$.subscribe(category => {
      console.log(category);
      this.selectedCategory = category;
      this.getNews(this.selectedCategory);
    });
  }
  getNews(category) {
    this.newsService.getTopHeadlines(category).subscribe(data => {
      this.headlines = data.articles;
      console.log(data);
    });
  }
  onCategoryChange(event) {
    console.log(event, 'received');
    this.selectedCategory = event;
    this.getNews(this.selectedCategory);
  }
  truncatedText(title) {
    if (title.length > 60) {
      return title.substring(0, 60) + '...';
    } else {
      return title;
    }
  }
  likedArticles(articleUrl) {
    const likedArticle = {
      url: articleUrl,
      title: 'title',
      description: 'description'
    };
    this.likedService.addLikedArticle(likedArticle);
    console.log(articleUrl);
  }
  static #_ = this.ɵfac = function NewsListComponent_Factory(t) {
    return new (t || NewsListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_news_service__WEBPACK_IMPORTED_MODULE_0__.NewsService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_categories_service__WEBPACK_IMPORTED_MODULE_1__.CategoryService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_liked_service__WEBPACK_IMPORTED_MODULE_2__.LikedService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: NewsListComponent,
    selectors: [["app-news-list"]],
    inputs: {
      selectedCategory: "selectedCategory"
    },
    decls: 10,
    vars: 2,
    consts: [[1, "news-list"], ["id", "topHeadlinesTitle"], [1, "h1Headlines"], [1, "custom-divider"], [1, "news-items"], ["class", "news-item", 4, "ngFor", "ngForOf"], [1, "news-item"], ["target", "_blank", 3, "href"], [1, "image-container"], ["alt", "img", "id", "snapshotImg", 3, "src"], ["id", "subtitler"], ["id", "articlePublished"], ["target", "_blank", 1, "like", 3, "href", "click"], ["aria-hidden", "false", "aria-label", "icon", "fontIcon", "favorite", 2, "font-size", "20px"]],
    template: function NewsListComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "mat-card-title", 1)(2, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Top Headlines: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](6, "mat-divider", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](8, NewsListComponent_mat_card_8_Template, 14, 4, "mat-card", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](9, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.selectedCategory);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.headlines);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_material_divider__WEBPACK_IMPORTED_MODULE_5__.MatDivider, _angular_material_card__WEBPACK_IMPORTED_MODULE_6__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_6__.MatCardHeader, _angular_material_card__WEBPACK_IMPORTED_MODULE_6__.MatCardTitle, _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__.MatIcon],
    styles: ["h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n  font-weight: bold;\n  text-align: center;\n  text-transform: uppercase;\n  color: white;\n  padding: 1vh;\n  margin: 0;\n}\n\nh3[_ngcontent-%COMP%] {\n  line-height: 3vh;\n}\n\n.h1Headlines[_ngcontent-%COMP%] {\n  background-color: #0a3161;\n  font-size: 2.5vw;\n}\n\n.custom-divider[_ngcontent-%COMP%] {\n  height: 2px;\n  background-color: #d90429;\n}\n\n\n.news-list[_ngcontent-%COMP%] {\n  width: 90% !important;\n  margin: 0 auto;\n  width: auto;\n}\n\n.news-items[_ngcontent-%COMP%] {\n  width: 100%;\n  margin: 0;\n  padding: 0;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n}\n\nmat-card[_ngcontent-%COMP%] {\n  width: 20em;\n  overflow: hidden;\n  margin: 5px;\n  padding: 0;\n  background-color: #d1d7dc;\n  flex: 0 0 calc(20% - 10px);\n  margin-bottom: 10px;\n}\n\n.mat-mdc-card-header[_ngcontent-%COMP%] {\n  display: flex;\n  padding: 0 10px;\n  line-height: 0;\n}\n\n#snapshotImg[_ngcontent-%COMP%] {\n  width: 100%;\n  padding-bottom: 0;\n}\n\n#actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  margin: 0;\n  padding: 0;\n}\n\n.cardButton[_ngcontent-%COMP%] {\n  background-color: #003566;\n  padding: 5px 10px;\n  text-decoration: none;\n  border: none;\n}\n\n\n\n\n\n#subtitler[_ngcontent-%COMP%] {\n  color: #000 !important;\n  font-weight: bolder;\n  font-size: 14px;\n  padding: 0;\n  margin: 0;\n}\n\n\n#articleDescription[_ngcontent-%COMP%], #articlePublished[_ngcontent-%COMP%] {\n  font-size: 12px;\n  padding: 0;\n  margin: 0;\n}\n\n\n.image-container[_ngcontent-%COMP%] {\n  position: relative;\n  display: inline-block;\n  margin: 0;\n  padding: 0;\n}\n\n.like[_ngcontent-%COMP%] {\n  color: #0862b5;\n  position: absolute;\n  top: 0;\n  right: 0;\n  background: transparent;\n  border: none;\n  cursor: pointer;\n}\n.like[_ngcontent-%COMP%]:hover {\n  color: #d90429;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9uZXdzLWxpc3QvbmV3cy1saXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0VBRUUsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixZQUFZO0VBQ1osU0FBUztBQUNYOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCx5QkFBeUI7QUFDM0I7OztBQUdBO0VBQ0UscUJBQXFCO0VBQ3JCLGNBQWM7RUFDZCxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsU0FBUztFQUNULFVBQVU7RUFDVixhQUFhO0VBQ2IsZUFBZTtFQUNmLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsV0FBVztFQUNYLFVBQVU7RUFDVix5QkFBeUI7RUFDekIsMEJBQTBCO0VBQzFCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixlQUFlO0VBQ2YsY0FBYztBQUNoQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLFNBQVM7RUFDVCxVQUFVO0FBQ1o7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsaUJBQWlCO0VBQ2pCLHFCQUFxQjtFQUNyQixZQUFZO0FBQ2Q7O0FBRUE7O0dBRUc7QUFDSDtFQUNFLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLFVBQVU7RUFDVixTQUFTO0FBQ1g7OztBQUdBOztFQUVFLGVBQWU7RUFDZixVQUFVO0VBQ1YsU0FBUztBQUNYOzs7QUFHQTtFQUNFLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIsU0FBUztFQUNULFVBQVU7QUFDWjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLFFBQVE7RUFDUix1QkFBdUI7RUFDdkIsWUFBWTtFQUNaLGVBQWU7QUFDakI7QUFDQTtFQUNFLGNBQWM7QUFDaEIiLCJzb3VyY2VzQ29udGVudCI6WyJoMSxcclxuaDIge1xyXG4gIG1hcmdpbi10b3A6IDFyZW07XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHBhZGRpbmc6IDF2aDtcclxuICBtYXJnaW46IDA7XHJcbn1cclxuXHJcbmgzIHtcclxuICBsaW5lLWhlaWdodDogM3ZoO1xyXG59XHJcblxyXG4uaDFIZWFkbGluZXMge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwYTMxNjE7XHJcbiAgZm9udC1zaXplOiAyLjV2dztcclxufVxyXG5cclxuLmN1c3RvbS1kaXZpZGVyIHtcclxuICBoZWlnaHQ6IDJweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDkwNDI5O1xyXG59XHJcblxyXG5cclxuLm5ld3MtbGlzdCB7XHJcbiAgd2lkdGg6IDkwJSAhaW1wb3J0YW50O1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG4gIHdpZHRoOiBhdXRvO1xyXG59XHJcblxyXG4ubmV3cy1pdGVtcyB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG59XHJcblxyXG5tYXQtY2FyZCB7XHJcbiAgd2lkdGg6IDIwZW07XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBtYXJnaW46IDVweDtcclxuICBwYWRkaW5nOiAwO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNkMWQ3ZGM7XHJcbiAgZmxleDogMCAwIGNhbGMoMjAlIC0gMTBweCk7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxufVxyXG5cclxuLm1hdC1tZGMtY2FyZC1oZWFkZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgcGFkZGluZzogMCAxMHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAwO1xyXG59XHJcblxyXG4jc25hcHNob3RJbWcge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBhZGRpbmctYm90dG9tOiAwO1xyXG59XHJcblxyXG4jYWN0aW9ucyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHBhZGRpbmc6IDA7XHJcbn1cclxuXHJcbi5jYXJkQnV0dG9uIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAzNTY2O1xyXG4gIHBhZGRpbmc6IDVweCAxMHB4O1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBib3JkZXI6IG5vbmU7XHJcbn1cclxuXHJcbi8qIGEge1xyXG4gICAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XHJcbn0gKi9cclxuI3N1YnRpdGxlciB7XHJcbiAgY29sb3I6ICMwMDAgIWltcG9ydGFudDtcclxuICBmb250LXdlaWdodDogYm9sZGVyO1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBwYWRkaW5nOiAwO1xyXG4gIG1hcmdpbjogMDtcclxufVxyXG5cclxuXHJcbiNhcnRpY2xlRGVzY3JpcHRpb24sXHJcbiNhcnRpY2xlUHVibGlzaGVkIHtcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgcGFkZGluZzogMDtcclxuICBtYXJnaW46IDA7XHJcbn1cclxuXHJcblxyXG4uaW1hZ2UtY29udGFpbmVyIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIG1hcmdpbjogMDtcclxuICBwYWRkaW5nOiAwO1xyXG59XHJcblxyXG4ubGlrZSB7XHJcbiAgY29sb3I6ICMwODYyYjU7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMDtcclxuICByaWdodDogMDtcclxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbi5saWtlOmhvdmVyIHtcclxuICBjb2xvcjogI2Q5MDQyOTtcclxufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 5401:
/*!*******************************************************************!*\
  !*** ./src/app/components/registration/registration.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RegistrationComponent: () => (/* binding */ RegistrationComponent)
/* harmony export */ });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/animations */ 2501);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/auth.service */ 2333);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ 895);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/divider */ 9400);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/card */ 8497);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/form-field */ 1333);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/input */ 26);
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/progress-bar */ 8173);











function RegistrationComponent_mat_progress_bar_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "mat-progress-bar", 10);
  }
}
class RegistrationComponent {
  constructor(authService) {
    this.authService = authService;
    this.isLoading = false;
  }
  ngOnInit() {}
  static #_ = this.ɵfac = function RegistrationComponent_Factory(t) {
    return new (t || RegistrationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: RegistrationComponent,
    selectors: [["app-registration"]],
    decls: 27,
    vars: 4,
    consts: [[1, "container"], [1, "login-card"], [1, "example-full-width"], ["matInput", "", "type", "email"], ["userEmail", ""], ["matInput", "", "type", "password"], ["userPwd", ""], ["mat-raised-button", "", "color", "primary", 3, "click"], ["routerLink", "/login", 1, "redirect"], ["mode", "indeterminate", 4, "ngIf"], ["mode", "indeterminate"]],
    template: function RegistrationComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "mat-card", 1)(2, "mat-card-header")(3, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Register");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "mat-form-field", 2)(6, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "input", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "mat-form-field", 2)(11, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "input", 5, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "mat-card-actions")(18, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RegistrationComponent_Template_button_click_18_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3);
          const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](9);
          const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](14);
          return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"]([ctx.authService.show(), ctx.authService.SignUp(_r0.value, _r1.value)]);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, " Sign Up ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "mat-card-footer")(21, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Already have an account? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "Log In");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](25, RegistrationComponent_mat_progress_bar_25_Template, 1, 0, "mat-progress-bar", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](26, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@myInsertRemoveTrigger", undefined);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](26, 2, ctx.authService.isLoading$));
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLink, _angular_material_button__WEBPACK_IMPORTED_MODULE_4__.MatButton, _angular_material_divider__WEBPACK_IMPORTED_MODULE_5__.MatDivider, _angular_material_card__WEBPACK_IMPORTED_MODULE_6__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_6__.MatCardActions, _angular_material_card__WEBPACK_IMPORTED_MODULE_6__.MatCardContent, _angular_material_card__WEBPACK_IMPORTED_MODULE_6__.MatCardFooter, _angular_material_card__WEBPACK_IMPORTED_MODULE_6__.MatCardHeader, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_8__.MatInput, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_9__.MatProgressBar, _angular_common__WEBPACK_IMPORTED_MODULE_2__.AsyncPipe],
    styles: [".container[_ngcontent-%COMP%] {\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\nh2[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.login-card[_ngcontent-%COMP%] {\n  width: 400px;\n}\n\nbutton[_ngcontent-%COMP%] {\n  margin: 0 auto;\n}\n\nspan[_ngcontent-%COMP%] {\n  padding: 0.5em;\n  text-align: center;\n  display: block;\n}\n\n.mat-mdc-card-header[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n\n.redirect[_ngcontent-%COMP%] {\n  display: inline-block;\n  text-align: center;\n  color: #4dd5fe;\n  font-size: 14px;\n  cursor: pointer;\n}\n\n.redirect[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9yZWdpc3RyYXRpb24vcmVnaXN0cmF0aW9uLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixrQkFBa0I7RUFDbEIsY0FBYztFQUNkLGVBQWU7RUFDZixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQiIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbmgyIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5sb2dpbi1jYXJkIHtcclxuICB3aWR0aDogNDAwcHg7XHJcbn1cclxuXHJcbmJ1dHRvbiB7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbn1cclxuXHJcbnNwYW4ge1xyXG4gIHBhZGRpbmc6IDAuNWVtO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuLm1hdC1tZGMtY2FyZC1oZWFkZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG5cclxuLnJlZGlyZWN0IHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGNvbG9yOiAjNGRkNWZlO1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5yZWRpcmVjdCB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"],
    data: {
      animation: [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_10__.trigger)('myInsertRemoveTrigger', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_10__.transition)(':enter', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_10__.style)({
        opacity: 0
      }), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_10__.animate)('1s', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_10__.style)({
        opacity: 1
      }))]), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_10__.transition)(':leave', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_10__.animate)('1s', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_10__.style)({
        opacity: 0
      }))])]), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_10__.trigger)('myOtherInsertRemoveTrigger', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_10__.transition)(':enter', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_10__.style)({
        transform: 'translateX(-100%)'
      }), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_10__.animate)('0.5s', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_10__.style)({
        transform: 'translateX(0)'
      }))]), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_10__.transition)(':leave', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_10__.animate)('0.5s', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_10__.style)({
        transform: 'translateX(100%)'
      }))])])]
    }
  });
}

/***/ }),

/***/ 9013:
/*!*******************************************************!*\
  !*** ./src/app/components/search/search.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SearchComponent: () => (/* binding */ SearchComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _services_news_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/news.service */ 3628);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ 895);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/divider */ 9400);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/card */ 8497);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ 6515);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/form-field */ 1333);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/input */ 26);










function SearchComponent_mat_card_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-card", 9)(1, "mat-card-header")(2, "mat-card-title")(3, "h3")(4, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "mat-card-content", 11)(9, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "mat-icon", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const article_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("href", article_r1.url, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r0.truncatedText(article_r1.title), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](article_r1.description);
  }
}
class SearchComponent {
  constructor(newsService, router) {
    this.newsService = newsService;
    this.router = router;
    this.searchResults = [];
    this.searchFilter = '';
  }
  ngOnInit() {
    this.getSearchResults();
  }
  getSearchResults() {
    if (this.searchFilter.trim() !== '') {
      this.newsService.searchArticles(this.searchFilter).subscribe(data => {
        this.headlines = data.articles;
        console.log(this.headlines);
        this.searchResults = this.headlines.map(article => {
          return {
            title: article.title,
            url: article.url
          };
        });
      }, error => {
        console.error('Error on API request:', error);
      });
    }
  }
  onFilterChange(event) {
    const filter = event.target.value;
    this.searchFilter = filter;
    this.getSearchResults();
  }
  goBackToTopHeadlines() {
    this.router.navigate(['top-headlines']);
  }
  truncatedText(title) {
    if (title.length > 60) {
      return title.substring(0, 60) + '...';
    } else {
      return title;
    }
  }
  static #_ = this.ɵfac = function SearchComponent_Factory(t) {
    return new (t || SearchComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_news_service__WEBPACK_IMPORTED_MODULE_0__.NewsService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: SearchComponent,
    selectors: [["app-search"]],
    inputs: {
      searchFilter: "searchFilter"
    },
    decls: 24,
    vars: 1,
    consts: [[1, "searchInput"], ["appearance", "outline"], ["matInput", "", 3, "input"], ["matSuffix", ""], ["mat-button", "", 1, "cardButton", "goBackButton", 3, "click"], ["aria-hidden", "false", "aria-label", "icon"], ["id", "searchTitler"], [1, "news-list"], ["class", "searchResults", 4, "ngFor", "ngForOf"], [1, "searchResults"], ["id", "subtitler", "target", "_blank", 3, "href"], ["id", "actions"], ["mat-button", "", "target", "_blank", 1, "cardButton", 3, "href"], ["aria-hidden", "false", "aria-label", "icon", "fontIcon", "thumb_up"]],
    template: function SearchComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Search by keyword");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "mat-form-field", 1)(4, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Type a keyword to find");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("input", function SearchComponent_Template_input_input_6_listener($event) {
          return ctx.onFilterChange($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "mat-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "search");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "mat-hint");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "can use AND / OR / NOT keywords");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SearchComponent_Template_button_click_12_listener() {
          return ctx.goBackToTopHeadlines();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "mat-icon", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "arrow_back");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Go Back");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "h2", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Your Search Results");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](22, SearchComponent_mat_card_22_Template, 11, 3, "mat-card", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](23, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.searchResults);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_material_button__WEBPACK_IMPORTED_MODULE_4__.MatAnchor, _angular_material_button__WEBPACK_IMPORTED_MODULE_4__.MatButton, _angular_material_divider__WEBPACK_IMPORTED_MODULE_5__.MatDivider, _angular_material_card__WEBPACK_IMPORTED_MODULE_6__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_6__.MatCardContent, _angular_material_card__WEBPACK_IMPORTED_MODULE_6__.MatCardHeader, _angular_material_card__WEBPACK_IMPORTED_MODULE_6__.MatCardTitle, _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__.MatIcon, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__.MatLabel, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__.MatHint, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__.MatSuffix, _angular_material_input__WEBPACK_IMPORTED_MODULE_9__.MatInput],
    styles: ["h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n  font-weight: bold;\n  text-align: center;\n  text-transform: uppercase;\n  color: #0a3161;\n  padding: 1vh;\n  margin: 0;\n}\n\nh3[_ngcontent-%COMP%]   #searchTitler[_ngcontent-%COMP%] {\n  margin: 0 auto;\n}\n\n.news-list[_ngcontent-%COMP%] {\n  margin: 0 auto;\n  width: 90%;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n}\n\nmat-card[_ngcontent-%COMP%] {\n  width: 15em;\n  height: 12rem;\n  overflow: hidden;\n  margin: 10px;\n  padding: 10px;\n  background-color: #d1d7dc;\n  flex: 0 0 calc(25% - 20px);\n  margin-bottom: 20px;\n}\n\nmat-card-header[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n\nmat-card-content[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  margin: 0;\n  padding: 0;\n}\n\nmat-icon[_ngcontent-%COMP%] {\n  align-items: center;\n  justify-content: flex-end;\n  text-align: center;\n}\n\n.cardButton[_ngcontent-%COMP%] {\n  margin: 0 auto;\n  background-color: #003566;\n  padding: 5px 10px;\n  text-decoration: none;\n  border: none;\n  color: #d1d7dc !important;\n}\n\n#subtitler[_ngcontent-%COMP%] {\n  color: #000 !important;\n  font-weight: bolder;\n}\n.cardButton[_ngcontent-%COMP%]:hover {\n  background-color: #d90429;\n}\n\n.searchInput[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  margin: 0 auto;\n  width: 40%;\n}\n.goBackButton[_ngcontent-%COMP%] {\n  margin: 0 auto;\n  width: 40%;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9zZWFyY2gvc2VhcmNoLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0VBRUUsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLGNBQWM7RUFDZCxZQUFZO0VBQ1osU0FBUztBQUNYOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxVQUFVO0VBQ1YsYUFBYTtFQUNiLGVBQWU7RUFDZiw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsYUFBYTtFQUNiLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osYUFBYTtFQUNiLHlCQUF5QjtFQUN6QiwwQkFBMEI7RUFDMUIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsU0FBUztFQUNULFVBQVU7QUFDWjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQix5QkFBeUI7RUFDekIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsY0FBYztFQUNkLHlCQUF5QjtFQUN6QixpQkFBaUI7RUFDakIscUJBQXFCO0VBQ3JCLFlBQVk7RUFDWix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLGNBQWM7RUFDZCxVQUFVO0FBQ1o7QUFDQTtFQUNFLGNBQWM7RUFDZCxVQUFVO0FBQ1oiLCJzb3VyY2VzQ29udGVudCI6WyJoMSxcclxuaDIsIGgzIHtcclxuICBtYXJnaW4tdG9wOiAxcmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIGNvbG9yOiAjMGEzMTYxO1xyXG4gIHBhZGRpbmc6IDF2aDtcclxuICBtYXJnaW46IDA7XHJcbn1cclxuXHJcbmgzICNzZWFyY2hUaXRsZXIge1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG59XHJcblxyXG4ubmV3cy1saXN0IHtcclxuICBtYXJnaW46IDAgYXV0bztcclxuICB3aWR0aDogOTAlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxufVxyXG5cclxubWF0LWNhcmQge1xyXG4gIHdpZHRoOiAxNWVtO1xyXG4gIGhlaWdodDogMTJyZW07XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBtYXJnaW46IDEwcHg7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDFkN2RjO1xyXG4gIGZsZXg6IDAgMCBjYWxjKDI1JSAtIDIwcHgpO1xyXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbn1cclxuXHJcbm1hdC1jYXJkLWhlYWRlciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcblxyXG5tYXQtY2FyZC1jb250ZW50IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBtYXJnaW46IDA7XHJcbiAgcGFkZGluZzogMDtcclxufVxyXG5cclxubWF0LWljb24ge1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5jYXJkQnV0dG9uIHtcclxuICBtYXJnaW46IDAgYXV0bztcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAzNTY2O1xyXG4gIHBhZGRpbmc6IDVweCAxMHB4O1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgY29sb3I6ICNkMWQ3ZGMgIWltcG9ydGFudDtcclxufVxyXG5cclxuI3N1YnRpdGxlciB7XHJcbiAgY29sb3I6ICMwMDAgIWltcG9ydGFudDtcclxuICBmb250LXdlaWdodDogYm9sZGVyO1xyXG59XHJcbi5jYXJkQnV0dG9uOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDkwNDI5O1xyXG59XHJcblxyXG4uc2VhcmNoSW5wdXQge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBtYXJnaW46IDAgYXV0bztcclxuICB3aWR0aDogNDAlO1xyXG59XHJcbi5nb0JhY2tCdXR0b24ge1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG4gIHdpZHRoOiA0MCU7XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 5512:
/*!*********************************************************!*\
  !*** ./src/app/components/toolbar/toolbar.component.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ToolbarComponent: () => (/* binding */ ToolbarComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/auth.service */ 2333);
/* harmony import */ var src_app_services_categories_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/categories.service */ 3245);
/* harmony import */ var src_app_services_news_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/news.service */ 3628);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/toolbar */ 2484);
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button-toggle */ 727);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ 6515);











function ToolbarComponent_mat_button_toggle_2_mat_icon_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const category_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](category_r2.icon);
  }
}
function ToolbarComponent_mat_button_toggle_2_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const category_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](category_r2.name);
  }
}
function ToolbarComponent_mat_button_toggle_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-button-toggle", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ToolbarComponent_mat_button_toggle_2_Template_mat_button_toggle_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r8);
      const category_r2 = restoredCtx.$implicit;
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r7.newsService.show(category_r2.name));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, ToolbarComponent_mat_button_toggle_2_mat_icon_1_Template, 2, 1, "mat-icon", 4)(2, ToolbarComponent_mat_button_toggle_2_span_2_Template, 2, 1, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const category_r2 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", category_r2.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.isSmallScreen);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r0.isSmallScreen);
  }
}
function ToolbarComponent_span_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ToolbarComponent_span_3_Template_span_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r10);
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r9.authService.SignOut());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "mat-icon", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, " logout ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
class ToolbarComponent {
  onResize(event) {
    this.isSmallScreen = event.target.innerWidth < 860;
    this.windowInnerWidth = window.innerWidth;
  }
  constructor(router, authService, categoryService, newsService) {
    this.router = router;
    this.authService = authService;
    this.categoryService = categoryService;
    this.newsService = newsService;
    this.isSmallScreen = false;
    this.isAuthenticated = false;
    this.categories = this.categoryService.categories;
    this.showSearchComponent = false;
    this.newsListComponent = false;
    this.selectedCategory = 'general';
    this.categoryChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
    this.windowInnerWidth = window.innerWidth;
  }
  onCategoryChange(event) {
    this.selectedCategory = event.value;
    this.categoryChanged.emit(this.selectedCategory);
    if (event.value === 'Search') {
      this.router.navigate(['search']);
    } else if (event.value === 'Start') {
      this.router.navigate(['top-headlines']);
    } else if (event.value === 'Liked') {
      this.router.navigate(['Liked']);
    }
  }
  ngOnInit() {
    this.authService.isAuthenticated().subscribe(authenticated => {
      this.isAuthenticated = authenticated;
    });
  }
  static #_ = this.ɵfac = function ToolbarComponent_Factory(t) {
    return new (t || ToolbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_categories_service__WEBPACK_IMPORTED_MODULE_1__.CategoryService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_news_service__WEBPACK_IMPORTED_MODULE_2__.NewsService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: ToolbarComponent,
    selectors: [["app-toolbar"]],
    hostBindings: function ToolbarComponent_HostBindings(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("resize", function ToolbarComponent_resize_HostBindingHandler($event) {
          return ctx.onResize($event);
        }, false, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresolveWindow"]);
      }
    },
    outputs: {
      categoryChanged: "categoryChanged"
    },
    decls: 4,
    vars: 3,
    consts: [[3, "ngModel", "ngModelChange", "change"], [3, "value", "click", 4, "ngFor", "ngForOf"], ["class", "material-symbols-outlined logout", 3, "click", 4, "ngIf"], [3, "value", "click"], [4, "ngIf"], [1, "material-symbols-outlined", "logout", 3, "click"], ["aria-hidden", "false", "aria-label", "Example home icon", "fontIcon", "logout", "id", "logout"]],
    template: function ToolbarComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-toolbar")(1, "mat-button-toggle-group", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function ToolbarComponent_Template_mat_button_toggle_group_ngModelChange_1_listener($event) {
          return ctx.selectedCategory = $event;
        })("change", function ToolbarComponent_Template_mat_button_toggle_group_change_1_listener($event) {
          return ctx.onCategoryChange($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, ToolbarComponent_mat_button_toggle_2_Template, 3, 3, "mat-button-toggle", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, ToolbarComponent_span_3_Template, 3, 0, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.selectedCategory);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.categories);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.authService.isLoggedIn);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgModel, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_7__.MatToolbar, _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_8__.MatButtonToggleGroup, _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_8__.MatButtonToggle, _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__.MatIcon],
    styles: ["mat-toolbar[_ngcontent-%COMP%] {\n  font-size: 15px !important;\n  padding: 0;\n  display: flex;\n  justify-content: space-between;\n  background-color: transparent;\n  border: none;\n}\n\nmat-button-toggle-group[_ngcontent-%COMP%] {\n  flex-direction: row;\n  align-items: center;\n  width: 100%;\n  margin: 0 auto;\n  height: 2rem;\n}\n\nmat-button-toggle[_ngcontent-%COMP%]:hover {\n  background-color: #ced4da;\n}\n\n.material-symbols-outlined[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  cursor: pointer;\n  margin: 0 auto;\n}\n\n.mat-toolbar-single-row[_ngcontent-%COMP%] {\n  height: auto;\n  padding: 0 1rem;\n}\n\n.api[_ngcontent-%COMP%], p[_ngcontent-%COMP%], a[_ngcontent-%COMP%], img[_ngcontent-%COMP%] {\n  font-size: 10px;\n  margin: 0 auto;\n  padding: 0;\n}\n\n.logout[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n}\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy90b29sYmFyL3Rvb2xiYXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDBCQUEwQjtFQUMxQixVQUFVO0VBQ1YsYUFBYTtFQUNiLDhCQUE4QjtFQUM5Qiw2QkFBNkI7RUFDN0IsWUFBWTtBQUNkOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsY0FBYztFQUNkLFlBQVk7QUFDZDs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsY0FBYztBQUNoQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixlQUFlO0FBQ2pCOztBQUVBOzs7O0VBSUUsZUFBZTtFQUNmLGNBQWM7RUFDZCxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0FBQ3pCIiwic291cmNlc0NvbnRlbnQiOlsibWF0LXRvb2xiYXIge1xyXG4gIGZvbnQtc2l6ZTogMTVweCAhaW1wb3J0YW50O1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgYm9yZGVyOiBub25lO1xyXG59XHJcblxyXG5tYXQtYnV0dG9uLXRvZ2dsZS1ncm91cCB7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG4gIGhlaWdodDogMnJlbTtcclxufVxyXG5cclxubWF0LWJ1dHRvbi10b2dnbGU6aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNjZWQ0ZGE7XHJcbn1cclxuXHJcbi5tYXRlcmlhbC1zeW1ib2xzLW91dGxpbmVkIHtcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBtYXJnaW46IDAgYXV0bztcclxufVxyXG5cclxuLm1hdC10b29sYmFyLXNpbmdsZS1yb3cge1xyXG4gIGhlaWdodDogYXV0bztcclxuICBwYWRkaW5nOiAwIDFyZW07XHJcbn1cclxuXHJcbi5hcGksXHJcbnAsXHJcbmEsXHJcbmltZyB7XHJcbiAgZm9udC1zaXplOiAxMHB4O1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG4gIHBhZGRpbmc6IDA7XHJcbn1cclxuXHJcbi5sb2dvdXQge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 23:
/*!*******************************************************************!*\
  !*** ./src/app/components/verify-email/verify-email.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   VerifyEmailComponent: () => (/* binding */ VerifyEmailComponent)
/* harmony export */ });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/animations */ 2501);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/auth.service */ 2333);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ 895);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/card */ 8497);







function VerifyEmailComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 9)(1, "p", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " We have sent a confirmation email to ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, ". ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "p", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, " Please check your email and click on the link to verify your email address. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const user_r1 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](user_r1.email);
  }
}
class VerifyEmailComponent {
  constructor(authService) {
    this.authService = authService;
  }
  ngOnInit() {}
  static #_ = this.ɵfac = function VerifyEmailComponent_Factory(t) {
    return new (t || VerifyEmailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: VerifyEmailComponent,
    selectors: [["app-verify-email"]],
    decls: 15,
    vars: 2,
    consts: [[1, "container"], [1, "displayTableCell"], [1, "authBlock"], ["class", "formGroup", 4, "ngIf"], [1, "button"], ["type", "button", "mat-raised-button", "", "color", "primary", 3, "click"], [1, "fas", "fa-redo-alt"], [1, "redirectToLogin"], ["routerLink", "/login", 1, "redirect"], [1, "formGroup"], [1, "text-center"]],
    template: function VerifyEmailComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "mat-card", 1)(2, "mat-card-content", 2)(3, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Thank You for Registering");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, VerifyEmailComponent_div_5_Template, 8, 1, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 4)(7, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function VerifyEmailComponent_Template_button_click_7_listener() {
          return ctx.authService.SendVerificationMail();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, " Resend Verification Email ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "mat-card-footer", 7)(11, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Go back to? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, " Sign in");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@myInsertRemoveTrigger", undefined);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.authService.userData);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLink, _angular_material_button__WEBPACK_IMPORTED_MODULE_4__.MatButton, _angular_material_card__WEBPACK_IMPORTED_MODULE_5__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_5__.MatCardContent, _angular_material_card__WEBPACK_IMPORTED_MODULE_5__.MatCardFooter],
    styles: [".container[_ngcontent-%COMP%] {\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\nh3[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\nmat-card[_ngcontent-%COMP%] {\n  width: 500px;\n  padding: 1em;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\nbutton[_ngcontent-%COMP%] {\n  margin: 0.5em;\n}\n\nmat-card-header[_ngcontent-%COMP%], mat-card-footer[_ngcontent-%COMP%], mat-card-actions[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n.redirect[_ngcontent-%COMP%] {\n  display: inline-block;\n  text-align: center;\n  color: #4dd5fe;\n  font-size: 14px;\n  cursor: pointer;\n}\n\n.button[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n}\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy92ZXJpZnktZW1haWwvdmVyaWZ5LWVtYWlsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osWUFBWTtFQUNaLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0UsYUFBYTtBQUNmOztBQUVBOzs7RUFHRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxlQUFlO0VBQ2YsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7QUFDekIiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG5oMyB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG5tYXQtY2FyZCB7XHJcbiAgd2lkdGg6IDUwMHB4O1xyXG4gIHBhZGRpbmc6IDFlbTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5idXR0b24ge1xyXG4gIG1hcmdpbjogMC41ZW07XHJcbn1cclxuXHJcbm1hdC1jYXJkLWhlYWRlcixcclxubWF0LWNhcmQtZm9vdGVyLFxyXG5tYXQtY2FyZC1hY3Rpb25zIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLnJlZGlyZWN0IHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGNvbG9yOiAjNGRkNWZlO1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5idXR0b24ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"],
    data: {
      animation: [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_6__.trigger)('myInsertRemoveTrigger', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_6__.transition)(':enter', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_6__.style)({
        opacity: 0
      }), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_6__.animate)('1s', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_6__.style)({
        opacity: 1
      }))]), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_6__.transition)(':leave', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_6__.animate)('1s', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_6__.style)({
        opacity: 0
      }))])]), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_6__.trigger)('myOtherInsertRemoveTrigger', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_6__.transition)(':enter', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_6__.style)({
        transform: 'translateX(-100%)'
      }), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_6__.animate)('0.5s', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_6__.style)({
        transform: 'translateX(0)'
      }))]), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_6__.transition)(':leave', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_6__.animate)('0.5s', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_6__.style)({
        transform: 'translateX(100%)'
      }))])])]
    }
  });
}

/***/ }),

/***/ 4201:
/*!*************************************!*\
  !*** ./src/app/guard/auth.guard.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AuthGuard: () => (/* binding */ AuthGuard)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/auth.service */ 2333);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 7947);



class AuthGuard {
  constructor(authService, router) {
    this.authService = authService;
    this.router = router;
  }
  canActivate(next, state) {
    if (this.authService.isLoggedIn !== true) {
      this.router.navigate(['login']);
    }
    return true;
  }
  static #_ = this.ɵfac = function AuthGuard_Factory(t) {
    return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
    token: AuthGuard,
    factory: AuthGuard.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 3460:
/*!***********************************************!*\
  !*** ./src/app/modules/app-routing.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppRoutingModule: () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/login/login.component */ 6666);
/* harmony import */ var _components_news_list_news_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/news-list/news-list.component */ 4981);
/* harmony import */ var _components_registration_registration_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/registration/registration.component */ 5401);
/* harmony import */ var _components_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/forgot-password/forgot-password.component */ 2813);
/* harmony import */ var _components_verify_email_verify_email_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/verify-email/verify-email.component */ 23);
/* harmony import */ var _components_search_search_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/search/search.component */ 9013);
/* harmony import */ var _components_liked_liked_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/liked/liked.component */ 1444);
/* harmony import */ var _guard_auth_guard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../guard/auth.guard */ 4201);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 1699);











const routes = [{
  path: '',
  redirectTo: 'login',
  pathMatch: 'full'
}, {
  path: 'login',
  component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_0__.LoginComponent
}, {
  path: 'register',
  component: _components_registration_registration_component__WEBPACK_IMPORTED_MODULE_2__.RegistrationComponent
}, {
  path: 'top-headlines',
  component: _components_news_list_news_list_component__WEBPACK_IMPORTED_MODULE_1__.NewsListComponent,
  canActivate: [_guard_auth_guard__WEBPACK_IMPORTED_MODULE_7__.AuthGuard]
}, {
  path: 'forgot-password',
  component: _components_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_3__.ForgotPasswordComponent
}, {
  path: 'verify-email-address',
  component: _components_verify_email_verify_email_component__WEBPACK_IMPORTED_MODULE_4__.VerifyEmailComponent
}, {
  path: 'search',
  component: _components_search_search_component__WEBPACK_IMPORTED_MODULE_5__.SearchComponent
}, {
  path: 'Liked',
  component: _components_liked_liked_component__WEBPACK_IMPORTED_MODULE_6__.LikedComponent
}];
class AppRoutingModule {
  static #_ = this.ɵfac = function AppRoutingModule_Factory(t) {
    return new (t || AppRoutingModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({
    type: AppRoutingModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule.forRoot(routes), _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](AppRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule]
  });
})();

/***/ }),

/***/ 5818:
/*!********************************************!*\
  !*** ./src/app/modules/material.module.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MaterialModule: () => (/* binding */ MaterialModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/toolbar */ 2484);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ 895);
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button-toggle */ 727);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/divider */ 9400);
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/list */ 3228);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/card */ 8497);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ 6515);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/input */ 26);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/form-field */ 1333);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/progress-bar */ 8173);
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/expansion */ 8060);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);














class MaterialModule {
  static #_ = this.ɵfac = function MaterialModule_Factory(t) {
    return new (t || MaterialModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
    type: MaterialModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__.MatToolbarModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_3__.MatButtonModule, _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_4__.MatButtonToggleModule, _angular_material_divider__WEBPACK_IMPORTED_MODULE_5__.MatDividerModule, _angular_material_list__WEBPACK_IMPORTED_MODULE_6__.MatListModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_7__.MatCardModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__.MatIconModule, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__.MatFormFieldModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_11__.MatInputModule, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_12__.MatProgressBarModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_11__.MatInputModule, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_13__.MatExpansionModule, _angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__.MatToolbarModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_3__.MatButtonModule, _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_4__.MatButtonToggleModule, _angular_material_divider__WEBPACK_IMPORTED_MODULE_5__.MatDividerModule, _angular_material_list__WEBPACK_IMPORTED_MODULE_6__.MatListModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_7__.MatCardModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__.MatIconModule, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__.MatFormFieldModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_11__.MatInputModule, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_12__.MatProgressBarModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_11__.MatInputModule, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_13__.MatExpansionModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MaterialModule, {
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__.MatToolbarModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_3__.MatButtonModule, _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_4__.MatButtonToggleModule, _angular_material_divider__WEBPACK_IMPORTED_MODULE_5__.MatDividerModule, _angular_material_list__WEBPACK_IMPORTED_MODULE_6__.MatListModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_7__.MatCardModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__.MatIconModule, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__.MatFormFieldModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_11__.MatInputModule, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_12__.MatProgressBarModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_11__.MatInputModule, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_13__.MatExpansionModule],
    exports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__.MatToolbarModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_3__.MatButtonModule, _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_4__.MatButtonToggleModule, _angular_material_divider__WEBPACK_IMPORTED_MODULE_5__.MatDividerModule, _angular_material_list__WEBPACK_IMPORTED_MODULE_6__.MatListModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_7__.MatCardModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__.MatIconModule, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__.MatFormFieldModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_11__.MatInputModule, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_12__.MatProgressBarModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_11__.MatInputModule, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_13__.MatExpansionModule]
  });
})();

/***/ }),

/***/ 2333:
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AuthService: () => (/* binding */ AuthService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 8071);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 1891);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 2513);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 4980);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/compat/firestore */ 4080);
/* harmony import */ var _angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/fire/compat/auth */ 6075);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 7947);







class AuthService {
  constructor(afs,
  // Inject Firestore service
  afAuth,
  // Inject Firebase auth service
  router, ngZone // NgZone service to remove outside scope warning
  ) {
    this.afs = afs;
    this.afAuth = afAuth;
    this.router = router;
    this.ngZone = ngZone;
    this.isAuthenticatedSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(false);
    this.isLoading = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
    this.isLoading$ = this.isLoading.asObservable();
    /* Saving user data in localstorage when
    logged in and setting up null when logged out */
    this.afAuth.authState.subscribe(user => {
      if (user) {
        this.userData = user;
        localStorage.setItem('user', JSON.stringify(this.userData));
        this.isAuthenticatedSubject.next(true);
        JSON.parse(localStorage.getItem('user'));
      } else {
        localStorage.setItem('user', 'null');
        this.isAuthenticatedSubject.next(false);
        JSON.parse(localStorage.getItem('user'));
      }
    });
  }
  show() {
    this.isLoading.next(true);
  }
  hide() {
    this.isLoading.next(false);
  }
  // Sign in with email/password
  SignIn(email, password) {
    setTimeout(() => {
      this.isLoading.next(false);
      return this.afAuth.signInWithEmailAndPassword(email, password).then(result => {
        this.SetUserData(result.user);
        this.afAuth.authState.subscribe(user => {
          if (user) {
            this.router.navigate(['top-headlines']);
          }
        });
      }).catch(error => {
        window.alert(error.message);
      });
    }, 2000);
  }
  // Sign up with email/password
  SignUp(email, password) {
    setTimeout(() => {
      this.isLoading.next(false);
      return this.afAuth.createUserWithEmailAndPassword(email, password).then(result => {
        /* Call the SendVerificaitonMail() function when new user sign
        up and returns promise */
        this.SendVerificationMail();
        this.SetUserData(result.user);
      }).catch(error => {
        window.alert(error.message);
      });
    }, 2000);
  }
  // Send email verfificaiton when new user sign up
  SendVerificationMail() {
    return this.afAuth.currentUser.then(u => u.sendEmailVerification()).then(() => {
      this.router.navigate(['verify-email-address']);
    });
  }
  // Reset Forggot password
  ForgotPassword(passwordResetEmail) {
    setTimeout(() => {
      this.isLoading.next(false);
      return this.afAuth.sendPasswordResetEmail(passwordResetEmail).then(() => {
        window.alert('Password reset email sent, check your inbox.');
      }).catch(error => {
        window.alert(error);
      });
    }, 2000);
  }
  // Returns true when user is looged in and email is verified
  get isLoggedIn() {
    const user = JSON.parse(localStorage.getItem('user'));
    return user !== null && user.emailVerified !== false ? true : false;
  }
  /* Setting up user data when sign in with username/password,
  sign up with username/password and sign in with social auth
  provider in Firestore database using AngularFirestore + AngularFirestoreDocument service */
  SetUserData(user) {
    const userRef = this.afs.doc(`users/${user.uid}`);
    const userData = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL,
      emailVerified: user.emailVerified,
      likedArticles: []
      // likedArticles: user.likedArticles,
    };

    return userRef.set(userData, {
      merge: true
    });
  }
  // Sign out
  SignOut() {
    return this.afAuth.signOut().then(() => {
      localStorage.removeItem('user');
      this.router.navigate(['login']);
    });
  }
  isAuthenticated() {
    return this.isAuthenticatedSubject.asObservable();
  }
  getUserData() {
    return this.afAuth.authState.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.switchMap)(user => {
      if (user) {
        return this.afs.doc(`users/${user.uid}`).valueChanges();
      } else {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.of)(null);
      }
    }));
  }
  static #_ = this.ɵfac = function AuthService_Factory(t) {
    return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_5__.AngularFirestore), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_6__.AngularFireAuth), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgZone));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
    token: AuthService,
    factory: AuthService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 3245:
/*!************************************************!*\
  !*** ./src/app/services/categories.service.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CategoryService: () => (/* binding */ CategoryService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);

class CategoryService {
  constructor() {
    this.categories = [{
      name: 'General',
      icon: 'description'
    }, {
      name: 'Business',
      icon: 'add_business'
    }, {
      name: 'Entertainment',
      icon: 'theater_comedy'
    }, {
      name: 'Health',
      icon: 'health_and_safety'
    }, {
      name: 'Science',
      icon: 'biotech'
    }, {
      name: 'Sports',
      icon: 'sports_football'
    }, {
      name: 'Technology',
      icon: 'important_devices'
    }, {
      name: 'Search',
      icon: 'search'
    }, {
      name: 'Liked',
      icon: 'favorite'
    }];
  }
  static #_ = this.ɵfac = function CategoryService_Factory(t) {
    return new (t || CategoryService)();
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
    token: CategoryService,
    factory: CategoryService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 8966:
/*!*******************************************!*\
  !*** ./src/app/services/liked.service.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LikedService: () => (/* binding */ LikedService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);

class LikedService {
  constructor() {
    this.likedArticles = [];
  }
  addLikedArticle(likedArticle) {
    this.likedArticles.push(likedArticle);
  }
  getLikedArticles() {
    return this.likedArticles;
  }
  static #_ = this.ɵfac = function LikedService_Factory(t) {
    return new (t || LikedService)();
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
    token: LikedService,
    factory: LikedService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 3628:
/*!******************************************!*\
  !*** ./src/app/services/news.service.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NewsService: () => (/* binding */ NewsService)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 2389);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 553);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 2513);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 3252);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 4860);





class NewsService {
  constructor(http) {
    this.http = http;
    this.apiKey = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.newsApiFive.apiKey;
    this.selectedCategory = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
    this.selectedCategory$ = this.selectedCategory.asObservable();
  }
  show(category) {
    this.selectedCategory.next(category);
    console.log(typeof category);
  }
  getTopHeadlines(category) {
    return this.http.get(`https://newsapi.org/v2/top-headlines?country=US&category=${category}&apiKey=${this.apiKey}`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(error => {
      console.error('Error:', error);
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.throwError)(error);
    }));
  }
  searchArticles(filters) {
    return this.http.get(`https://newsapi.org/v2/everything?q=${filters}&sortBy=publishedAt&apiKey=${this.apiKey}`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(error => {
      console.error('API request failed:', error);
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.throwError)(error);
    }));
  }
  static #_ = this.ɵfac = function NewsService_Factory(t) {
    return new (t || NewsService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClient));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
    token: NewsService,
    factory: NewsService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 553:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   environment: () => (/* binding */ environment)
/* harmony export */ });
const environment = {
  production: false,
  newsApi: {
    apiKey: 'b29c939a0d9a42319b5b03b6de190043'
  },
  newsApiTwo: {
    apiKey: '2dc8de50066345a48d40b362faeb8b76'
  },
  newsApiThree: {
    apiKey: '25e51eebb3e843a48f30a351675dc2cc'
  },
  newsApiFour: {
    apiKey: '88619abd5e234dbdbd034c607dae97dd'
  },
  newsApiFive: {
    apiKey: '0266bc550d3e46f9893b52815d2118f2'
  },
  firebase: {
    apiKey: 'AIzaSyCRNjlAyNOhhSpCayhj8FGHHhbw4MtkpKA',
    authDomain: 'news-project-579a3.firebaseapp.com',
    projectId: 'news-project-579a3',
    storageBucket: 'news-project-579a3.appspot.com',
    messagingSenderId: '700119532137',
    appId: '1:700119532137:web:9fd58caf58aa49ded8d8f8',
    measurementId: 'G-DNL6PZSD2R'
  }
};

/***/ }),

/***/ 4913:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ 6480);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 8629);


// import { enableProdMode } from '@angular/core';
// import { environment } from './environments/environment';
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(err => console.error(err));
// if (environment.production) {
//   enableProdMode();
// }

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4913)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map