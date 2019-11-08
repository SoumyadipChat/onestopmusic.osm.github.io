(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
        /***/ "./$$_lazy_route_resource lazy recursive": 
        /*!******************************************************!*\
          !*** ./$$_lazy_route_resource lazy namespace object ***!
          \******************************************************/
        /*! no static exports found */
        /***/ (function (module, exports) {
            function webpackEmptyAsyncContext(req) {
                // Here Promise.resolve().then() is used instead of new Promise() to prevent
                // uncaught exception popping up in devtools
                return Promise.resolve().then(function () {
                    var e = new Error("Cannot find module '" + req + "'");
                    e.code = 'MODULE_NOT_FOUND';
                    throw e;
                });
            }
            webpackEmptyAsyncContext.keys = function () { return []; };
            webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
            module.exports = webpackEmptyAsyncContext;
            webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html": 
        /*!**************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
          \**************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"osmApp\" [ngStyle]=\"appStyle\">\n    <div class=\"contentSection\" [ngStyle]=\"routerOutletStyle\">\n        <router-outlet></router-outlet>\n    </div>\n\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/buttons/buttons.component.html": 
        /*!**************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/buttons/buttons.component.html ***!
          \**************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<i role=\"button\" [class]=\"icon\" style=\"font-size:36px;\" (click)=\"clicked()\"></i>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html": 
        /*!************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html ***!
          \************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"header\" [ngClass]=\"{'isMobile':screenSz.isMobile}\">\n    <div class=\"appName\">\n        One.Stop.Music\n    </div>\n    <div class=\"userName\">\n       Welcome, {{username}}\n    </div>\n</div>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/launcher/launcher.component.html": 
        /*!****************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/launcher/launcher.component.html ***!
          \****************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div [ngStyle]=\"logoStyle\" class=\"LogoContainer\">\n        <div [ngStyle]=\"abbrLogoStyle\" class=\"abbrLogo\">OSM</div>\n        <div class=\"fullLogo\">One.Stop.Music</div>\n        \n</div>\n<div [ngStyle]=\"loginStyle\" class=\"spinner\">\n        <div [ngStyle]=\"loaderStyle\" class=\"loader\"></div>\n</div>\n\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/music-add/music-add.component.html": 
        /*!******************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/music-add/music-add.component.html ***!
          \******************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n    <div class=\"adder\" >\n        <div class=\"box\" [ngClass]=\"{'isMobile':screenSt.isMobile}\">\n                <div class=\"adderinputField\">\n                        <mat-form-field color=\"accent\">\n                                <input matInput \n                                [(ngModel)]=\"url\" \n                                placeholder=\"Youtube URL\"\n                                (ngModelChange)=\"onURLChange($event)\"\n                                autocomplete=\"off\"\n                                >\n                        </mat-form-field>\n                        <mat-error *ngIf=\"invalidURL\">URL is invalid</mat-error>\n                </div>\n                <div class=\"adderinputField bottomFIeld\">\n                        <div class=\"bottom\">\n                                <mat-form-field color=\"accent\">\n                                        <input matInput \n                                        placeholder=\"Title\"\n                                        [(ngModel)]=\"title\"\n                                        (ngModelChange)=\"onTitleChange($event)\"\n                                        >\n                                </mat-form-field>\n                                <mat-error *ngIf=\"invalidTitle\">Title cant be empty</mat-error>\n                        </div>\n                        <mat-icon role=\"button\" (click)=\"addValue()\" class=\"icons\" svgIcon=\"add\" aria-hidden=\"false\" ></mat-icon>\n                </div>\n               \n        </div>\n    </div>\n\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/music-player/music-player.component.html": 
        /*!************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/music-player/music-player.component.html ***!
          \************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div [ngStyle]=\"headerBarStyle\">\n    <app-header [username]=\"loggedInUser\"></app-header>\n</div>\n<div [ngStyle]=\"musicPlayerStyle\">\n    <div [ngStyle]=\"leftStyle\">\n        <div [ngStyle]=\"playerStyle\">\n            <app-player [playerQueue]=\"playerQueue\" [currentIndex]=\"currentIndex\" (onIndexChange)=\"currentIndex=$event\"></app-player>\n        </div>\n        <div [ngStyle]=\"adderStyle\">\n            <app-music-add (onAdd)=\"addVideo($event)\"></app-music-add>\n        </div>\n    </div>\n    <div [ngStyle]=\"rightStyle\">\n        <app-queue [playerQueue]=\"playerQueue\" [currentIndex]=\"currentIndex\"></app-queue>\n    </div>\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/player/player.component.html": 
        /*!************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/player/player.component.html ***!
          \************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div  class=\"playr\">\n  <div #outpt class=\"screenSwap\">\n    <div [hidden]=\"!showYoutube\" class=\"videoOutput\">\n  \n      <youtube-player\n            [videoId]=\"id\"\n            (ready)=\"savePlayer($event)\"\n            (change)=\"onStateChange($event)\"\n          ></youtube-player>\n    \n    </div>\n\n    <div [hidden]=\"paused || showYoutube\" class=\"soundBars\">\n        <div class=\"bars\">\n            <div class=\"bar\"></div>\n            <div class=\"bar\"></div>\n            <div class=\"bar\"></div>\n            <div class=\"bar\"></div>\n            <div class=\"bar\"></div>\n            <div class=\"bar\"></div>\n            <div class=\"bar\"></div>\n            <div class=\"bar\"></div>\n            <div class=\"bar\"></div>\n            <div class=\"bar\"></div>\n        </div>\n    </div>\n\n    <div class=\"utubeTitle\" *ngFor=\"let song of playerQueue;let in = index\" >\n      <div class=\"titleNm\" *ngIf=\"in==currentIndex\">{{song.title}} </div>\n    </div>\n    <div class=\"utubeIcon\">\n      <mat-icon role=\"button\" class=\"icons\" (click)=\"showYoutube=!showYoutube\" [svgIcon]=\"showYoutube?'ipod':'youtube'\" aria-hidden=\"false\" aria-label=\"Example thumbs up SVG icon\"></mat-icon>\n      <mat-icon role=\"button\" (click)=\"previous()\" class=\"icons\" svgIcon=\"prev\" aria-hidden=\"false\" ></mat-icon>\n      <mat-icon role=\"button\" (click)=\"play()\" class=\"icons\" svgIcon=\"play\" aria-hidden=\"false\" ></mat-icon>\n      <mat-icon role=\"button\" (click)=\"pause()\" class=\"icons\" svgIcon=\"pause\" aria-hidden=\"false\" ></mat-icon>\n      <mat-icon role=\"button\" (click)=\"next()\" class=\"icons\" svgIcon=\"next\" aria-hidden=\"false\" ></mat-icon>\n    </div>\n    \n    \n  </div>\n  \n  <!-- <div class=\"controlButtons\">\n    <app-buttons icon=\"fa fa-play\" (buttonClicked)=\"play()\"></app-buttons>\n    <app-buttons icon=\"fa fa-pause\" (buttonClicked)=\"pause()\"></app-buttons>\n    \n  </div> -->\n  \n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/queue/queue.component.html": 
        /*!**********************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/queue/queue.component.html ***!
          \**********************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n    <div class=\"queue\" >\n        <!-- <div cdkDropList class=\"box\" (cdkDropListDropped)=\"drop($event)\" >\n            <div *ngFor=\"let song of playerQueue;let in = index\" class=\"queElements\" cdkDrag >\n                <div  class=\"queueElem\" [ngClass]=\"{'current':in==currentIndex}\">\n                    <div class=\"thumbNail\">\n                        <img [src]=\"song.thumbnail\">\n                    </div>\n                    <div class=\"songTitle\">\n                            {{song.title}} {{currentIndex}}\n                    </div>\n                </div>\n                \n            </div>\n        </div> -->\n        <div cdkDropList class=\"box example-list\" (cdkDropListDropped)=\"drop($event)\">\n                <div class=\"example-box\"  *ngFor=\"let song of playerQueue;let in = index\" [ngClass]=\"{'current':in==currentIndex}\" cdkDrag>\n                                <div class=\"thumbNail\">\n                                    <img [src]=\"song.thumbnail\">\n                                </div>\n                                <div class=\"songTitle\">\n                                        {{song.title}}\n                                </div>\n                                <div [hidden]=\"in==currentIndex\" class=\"closer\">\n                                        <mat-icon role=\"button\" (click)=\"remSong(in)\" class=\"icons\" svgIcon=\"cross\" aria-hidden=\"false\" ></mat-icon>\n                                </div>\n                        \n                </div>\n        </div>\n    </div>\n\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/sign-up/sign-up.component.html": 
        /*!**************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/sign-up/sign-up.component.html ***!
          \**************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div [ngStyle]=\"logoStyle\" class=\"LogoContainer\">\r\n        <div [ngStyle]=\"abbrLogoStyle\" class=\"abbrLogo\">OSM</div>\r\n        <div class=\"fullLogo\">One.Stop.Music</div>\r\n</div>\r\n\r\n<div [ngStyle]=\"loginStyle\">\r\n        <div class=\"loginTabs\" [ngStyle]=\"tabTextStyle\" >\r\n                <div \r\n                class=\"loginTab\" \r\n                [ngClass]=\"{'activeTab':loginSelected}\"\r\n                role=\"button\"\r\n                (click)=\"loginClicked()\"\r\n                [ngStyle]=\"tabTextAlignStyle\">\r\n                LOGIN\r\n            </div>\r\n            <div \r\n                class=\"loginTab\" \r\n                [ngClass]=\"{'activeTab':regSelected}\"\r\n                role=\"button\"\r\n                (click)=\"registerClicked()\"\r\n                [ngStyle]=\"tabTextAlignStyle\">\r\n                REGISTER\r\n            </div>\r\n        </div>\r\n        <div [hidden]=\"regSelected\" class=\"loginFormSection\" [ngStyle]=\"inputTextStyle\">\r\n                <div class=\"loginputField\">\r\n                        <mat-form-field color=\"accent\">\r\n                                <input matInput \r\n                                #first\r\n                                [(ngModel)]=\"username\" \r\n                                placeholder=\"Username/Email\"\r\n                                (ngModelChange)=\"onLoginUsernameChange($event)\"\r\n                                (cdkAutofill)=\"onLoginAutofilled($event)\"\r\n                                \r\n                                >\r\n                        </mat-form-field>\r\n                        <mat-error *ngIf=\"invalidUsername\">{{errorUserMsg}}</mat-error>\r\n                </div>\r\n                <div class=\"loginputField\">\r\n                        <mat-form-field color=\"accent\">\r\n                                <input matInput \r\n                                placeholder=\"Password\"\r\n                                [(ngModel)]=\"pwd\"\r\n                                (ngModelChange)=\"onPwdChange($event)\"\r\n                                [type]=\"hidePwd ? 'password' : 'text'\">\r\n                                <button mat-icon-button matSuffix (click)=\"hidePwd = !hidePwd\" [attr.aria-label]=\"'Hide password'\" [attr.aria-pressed]=\"hide\">\r\n                                        <mat-icon>{{hidePwd ? 'visibility_off' : 'visibility'}}</mat-icon>\r\n                                </button>\r\n                        </mat-form-field>\r\n                        <mat-error *ngIf=\"invalidPassword\">Password must have 6-20 characters</mat-error>\r\n                </div>\r\n                <div class=\"loginButton\">\r\n                    <div class=\"buttons\">\r\n                        <button \r\n                        [ngStyle]=\"inputTextStyle\"\r\n                        [disabled]=\"invalidPassword || invalidUsername\"\r\n                        (click)=\"checkPasswordLogin()\" \r\n                        mat-raised-button>\r\n                        Login\r\n                    </button>\r\n                    <button \r\n                        [ngStyle]=\"inputTextStyle\" \r\n                        mat-raised-button\r\n                        (click)=\"openMusicGuest()\">\r\n                        Guest Login\r\n                    </button>\r\n                    </div>\r\n                    <mat-error *ngIf=\"loginError\">{{loginErrorMsg}}</mat-error>\r\n                </div>\r\n                \r\n\r\n        </div>\r\n        <div [hidden]=\"loginSelected\" class=\"regFormSection\" [ngStyle]=\"inputTextStyle\">\r\n                <div class=\"reginputField\">\r\n                        <mat-form-field color=\"accent\">\r\n                                <input matInput\r\n                                [(ngModel)]=\"username\" \r\n                                placeholder=\"Username\"\r\n                                (ngModelChange)=\"onUsernameChange($event)\">\r\n                        </mat-form-field>\r\n                        <mat-error *ngIf=\"invalidUsername\">{{errorUserMsg}}</mat-error>\r\n                </div>\r\n                <div class=\"reginputField\">\r\n                        <mat-form-field color=\"accent\">\r\n                                <input matInput\r\n                                [(ngModel)]=\"eml\" \r\n                                placeholder=\"Email ID\"\r\n                                (ngModelChange)=\"onEmailChange($event)\"\r\n                               >\r\n                        </mat-form-field>\r\n                        <mat-error *ngIf=\"invalidEmail\">{{errorEmailMsg}}</mat-error>\r\n                </div>\r\n                <div class=\"reginputField\">\r\n                        <mat-form-field color=\"accent\">\r\n                                <input matInput\r\n                                [(ngModel)]=\"pwd\"  \r\n                                placeholder=\"Password\"\r\n                                (ngModelChange)=\"onPwdChange($event)\"\r\n                                [type]=\"hidePwd ? 'password' : 'text'\"\r\n                               >\r\n                               <button mat-icon-button matSuffix (click)=\"hidePwd = !hidePwd\" [attr.aria-label]=\"'Hide password'\" [attr.aria-pressed]=\"hide\">\r\n                                         <mat-icon>{{hidePwd ? 'visibility_off' : 'visibility'}}</mat-icon>\r\n                                </button>\r\n                        </mat-form-field>\r\n                        <mat-error *ngIf=\"invalidPassword\">Password must have 6-20 characters</mat-error>\r\n                </div>\r\n                <div class=\"reginputField\">\r\n                        <mat-form-field color=\"accent\">\r\n                                <input matInput\r\n                                [disabled]=\"!otpSentOnce\" \r\n                                [(ngModel)]=\"otp\"\r\n                                (ngModelChange)=\"onOTPChange($event)\" \r\n                                placeholder=\"OTP\">\r\n                        </mat-form-field>\r\n                        <mat-error *ngIf=\"otpSentOnce && invalidOtp\">OTP doesn't match</mat-error>\r\n                </div>\r\n                <div class=\"regButton\">\r\n                    <button \r\n                        [ngStyle]=\"inputTextStyle\"\r\n                        [disabled]=\"invalidEmail || invalidPassword || invalidUsername\" \r\n                        mat-raised-button\r\n                        (click)=\"sendOTP()\">\r\n                        {{otpSentOnce?'Resend OTP':'Send OTP'}}\r\n                    </button>\r\n                        <button \r\n                        [ngStyle]=\"inputTextStyle\"\r\n                        [disabled]=\"!otpSentOnce || invalidEmail || invalidPassword || invalidUsername\" \r\n                        (click)=\"registerUser()\"\r\n                        mat-raised-button>Register</button>\r\n                </div>\r\n\r\n        </div>\r\n    </div>\r\n    ");
            /***/ 
        }),
        /***/ "./node_modules/tslib/tslib.es6.js": 
        /*!*****************************************!*\
          !*** ./node_modules/tslib/tslib.es6.js ***!
          \*****************************************/
        /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function () { return __extends; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function () { return __assign; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function () { return __rest; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function () { return __decorate; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function () { return __param; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function () { return __metadata; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function () { return __awaiter; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function () { return __generator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function () { return __exportStar; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function () { return __values; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function () { return __read; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function () { return __spread; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () { return __spreadArrays; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function () { return __await; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () { return __asyncGenerator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () { return __asyncDelegator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function () { return __asyncValues; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () { return __makeTemplateObject; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function () { return __importStar; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function () { return __importDefault; });
            /*! *****************************************************************************
            Copyright (c) Microsoft Corporation. All rights reserved.
            Licensed under the Apache License, Version 2.0 (the "License"); you may not use
            this file except in compliance with the License. You may obtain a copy of the
            License at http://www.apache.org/licenses/LICENSE-2.0
            
            THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
            KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
            WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
            MERCHANTABLITY OR NON-INFRINGEMENT.
            
            See the Apache Version 2.0 License for specific language governing permissions
            and limitations under the License.
            ***************************************************************************** */
            /* global Reflect, Promise */
            var extendStatics = function (d, b) {
                extendStatics = Object.setPrototypeOf ||
                    ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
                    function (d, b) { for (var p in b)
                        if (b.hasOwnProperty(p))
                            d[p] = b[p]; };
                return extendStatics(d, b);
            };
            function __extends(d, b) {
                extendStatics(d, b);
                function __() { this.constructor = d; }
                d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
            }
            var __assign = function () {
                __assign = Object.assign || function __assign(t) {
                    for (var s, i = 1, n = arguments.length; i < n; i++) {
                        s = arguments[i];
                        for (var p in s)
                            if (Object.prototype.hasOwnProperty.call(s, p))
                                t[p] = s[p];
                    }
                    return t;
                };
                return __assign.apply(this, arguments);
            };
            function __rest(s, e) {
                var t = {};
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
                        t[p] = s[p];
                if (s != null && typeof Object.getOwnPropertySymbols === "function")
                    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                            t[p[i]] = s[p[i]];
                    }
                return t;
            }
            function __decorate(decorators, target, key, desc) {
                var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
                if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
                    r = Reflect.decorate(decorators, target, key, desc);
                else
                    for (var i = decorators.length - 1; i >= 0; i--)
                        if (d = decorators[i])
                            r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
                return c > 3 && r && Object.defineProperty(target, key, r), r;
            }
            function __param(paramIndex, decorator) {
                return function (target, key) { decorator(target, key, paramIndex); };
            }
            function __metadata(metadataKey, metadataValue) {
                if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
                    return Reflect.metadata(metadataKey, metadataValue);
            }
            function __awaiter(thisArg, _arguments, P, generator) {
                return new (P || (P = Promise))(function (resolve, reject) {
                    function fulfilled(value) { try {
                        step(generator.next(value));
                    }
                    catch (e) {
                        reject(e);
                    } }
                    function rejected(value) { try {
                        step(generator["throw"](value));
                    }
                    catch (e) {
                        reject(e);
                    } }
                    function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
                    step((generator = generator.apply(thisArg, _arguments || [])).next());
                });
            }
            function __generator(thisArg, body) {
                var _ = { label: 0, sent: function () { if (t[0] & 1)
                        throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
                return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
                function verb(n) { return function (v) { return step([n, v]); }; }
                function step(op) {
                    if (f)
                        throw new TypeError("Generator is already executing.");
                    while (_)
                        try {
                            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                                return t;
                            if (y = 0, t)
                                op = [op[0] & 2, t.value];
                            switch (op[0]) {
                                case 0:
                                case 1:
                                    t = op;
                                    break;
                                case 4:
                                    _.label++;
                                    return { value: op[1], done: false };
                                case 5:
                                    _.label++;
                                    y = op[1];
                                    op = [0];
                                    continue;
                                case 7:
                                    op = _.ops.pop();
                                    _.trys.pop();
                                    continue;
                                default:
                                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                                        _ = 0;
                                        continue;
                                    }
                                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                                        _.label = op[1];
                                        break;
                                    }
                                    if (op[0] === 6 && _.label < t[1]) {
                                        _.label = t[1];
                                        t = op;
                                        break;
                                    }
                                    if (t && _.label < t[2]) {
                                        _.label = t[2];
                                        _.ops.push(op);
                                        break;
                                    }
                                    if (t[2])
                                        _.ops.pop();
                                    _.trys.pop();
                                    continue;
                            }
                            op = body.call(thisArg, _);
                        }
                        catch (e) {
                            op = [6, e];
                            y = 0;
                        }
                        finally {
                            f = t = 0;
                        }
                    if (op[0] & 5)
                        throw op[1];
                    return { value: op[0] ? op[1] : void 0, done: true };
                }
            }
            function __exportStar(m, exports) {
                for (var p in m)
                    if (!exports.hasOwnProperty(p))
                        exports[p] = m[p];
            }
            function __values(o) {
                var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
                if (m)
                    return m.call(o);
                return {
                    next: function () {
                        if (o && i >= o.length)
                            o = void 0;
                        return { value: o && o[i++], done: !o };
                    }
                };
            }
            function __read(o, n) {
                var m = typeof Symbol === "function" && o[Symbol.iterator];
                if (!m)
                    return o;
                var i = m.call(o), r, ar = [], e;
                try {
                    while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                        ar.push(r.value);
                }
                catch (error) {
                    e = { error: error };
                }
                finally {
                    try {
                        if (r && !r.done && (m = i["return"]))
                            m.call(i);
                    }
                    finally {
                        if (e)
                            throw e.error;
                    }
                }
                return ar;
            }
            function __spread() {
                for (var ar = [], i = 0; i < arguments.length; i++)
                    ar = ar.concat(__read(arguments[i]));
                return ar;
            }
            function __spreadArrays() {
                for (var s = 0, i = 0, il = arguments.length; i < il; i++)
                    s += arguments[i].length;
                for (var r = Array(s), k = 0, i = 0; i < il; i++)
                    for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                        r[k] = a[j];
                return r;
            }
            ;
            function __await(v) {
                return this instanceof __await ? (this.v = v, this) : new __await(v);
            }
            function __asyncGenerator(thisArg, _arguments, generator) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var g = generator.apply(thisArg, _arguments || []), i, q = [];
                return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
                function verb(n) { if (g[n])
                    i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
                function resume(n, v) { try {
                    step(g[n](v));
                }
                catch (e) {
                    settle(q[0][3], e);
                } }
                function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
                function fulfill(value) { resume("next", value); }
                function reject(value) { resume("throw", value); }
                function settle(f, v) { if (f(v), q.shift(), q.length)
                    resume(q[0][0], q[0][1]); }
            }
            function __asyncDelegator(o) {
                var i, p;
                return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
                function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
            }
            function __asyncValues(o) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var m = o[Symbol.asyncIterator], i;
                return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
                function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
                function settle(resolve, reject, d, v) { Promise.resolve(v).then(function (v) { resolve({ value: v, done: d }); }, reject); }
            }
            function __makeTemplateObject(cooked, raw) {
                if (Object.defineProperty) {
                    Object.defineProperty(cooked, "raw", { value: raw });
                }
                else {
                    cooked.raw = raw;
                }
                return cooked;
            }
            ;
            function __importStar(mod) {
                if (mod && mod.__esModule)
                    return mod;
                var result = {};
                if (mod != null)
                    for (var k in mod)
                        if (Object.hasOwnProperty.call(mod, k))
                            result[k] = mod[k];
                result.default = mod;
                return result;
            }
            function __importDefault(mod) {
                return (mod && mod.__esModule) ? mod : { default: mod };
            }
            /***/ 
        }),
        /***/ "./src/app/app-routing.module.ts": 
        /*!***************************************!*\
          !*** ./src/app/app-routing.module.ts ***!
          \***************************************/
        /*! exports provided: AppRoutingModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () { return AppRoutingModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _music_player_music_player_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./music-player/music-player.component */ "./src/app/music-player/music-player.component.ts");
            /* harmony import */ var _sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sign-up/sign-up.component */ "./src/app/sign-up/sign-up.component.ts");
            /* harmony import */ var _launcher_launcher_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./launcher/launcher.component */ "./src/app/launcher/launcher.component.ts");
            var routes = [
                { path: 'music', component: _music_player_music_player_component__WEBPACK_IMPORTED_MODULE_3__["MusicPlayerComponent"] },
                { path: 'login', component: _sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_4__["SignUpComponent"] },
                { path: '', component: _launcher_launcher_component__WEBPACK_IMPORTED_MODULE_5__["LauncherComponent"] },
                { path: '', redirectTo: 'launch', pathMatch: 'full' },
            ];
            var AppRoutingModule = /** @class */ (function () {
                function AppRoutingModule() {
                }
                return AppRoutingModule;
            }());
            AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
                    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
                })
            ], AppRoutingModule);
            /***/ 
        }),
        /***/ "./src/app/app.component.scss": 
        /*!************************************!*\
          !*** ./src/app/app.component.scss ***!
          \************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".headerBar {\n  background-color: cadetblue;\n  margin: 0px;\n}\n\n.contentSection {\n  background-image: url('trianglify-lowres.png');\n  background-size: cover;\n  margin: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvRDpcXEFuZ3VsYXJcXE9TTS9zcmNcXGFwcFxcYXBwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSwyQkFBQTtFQUNBLFdBQUE7QUNESjs7QURHQTtFQUlJLDhDQUFBO0VBQ0Esc0JBQUE7RUFFQSxXQUFBO0FDSkoiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcbi5oZWFkZXJCYXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBjYWRldGJsdWU7XHJcbiAgICBtYXJnaW46IDBweDtcclxufVxyXG4uY29udGVudFNlY3Rpb257XHJcbiAgICAvL2JhY2tncm91bmQ6IHJnYigyNTIsNzAsMTA3KTtcclxuICAgIC8vYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCByZ2JhKDI1Miw3MCwxMDcsMSkgMCUsIHJnYmEoMjksNjcsODAsMSkgOTUlKTtcclxuICAgIFxyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uL2Fzc2V0cy90cmlhbmdsaWZ5LWxvd3Jlcy5wbmcpO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIFxyXG4gICAgbWFyZ2luOiAwcHg7XHJcbn0iLCIuaGVhZGVyQmFyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogY2FkZXRibHVlO1xuICBtYXJnaW46IDBweDtcbn1cblxuLmNvbnRlbnRTZWN0aW9uIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uL2Fzc2V0cy90cmlhbmdsaWZ5LWxvd3Jlcy5wbmcpO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBtYXJnaW46IDBweDtcbn0iXX0= */");
            /***/ 
        }),
        /***/ "./src/app/app.component.ts": 
        /*!**********************************!*\
          !*** ./src/app/app.component.ts ***!
          \**********************************/
        /*! exports provided: AppComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function () { return AppComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _services_screen_size_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/screen-size.service */ "./src/app/services/screen-size.service.ts");
            /* harmony import */ var _styleSetter_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styleSetter.service */ "./src/app/styleSetter.service.ts");
            /* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
            /* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
            var AppComponent = /** @class */ (function () {
                function AppComponent(iconRegistry, sanitizer, screenState, styleSetter) {
                    this.iconRegistry = iconRegistry;
                    this.screenState = screenState;
                    this.styleSetter = styleSetter;
                    this.title = 'OSM';
                    iconRegistry.addSvgIcon('youtube', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/youtube.svg'));
                    iconRegistry.addSvgIcon('ipod', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/ipod.svg'));
                    iconRegistry.addSvgIcon('play', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/play.svg'));
                    iconRegistry.addSvgIcon('pause', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/pause.svg'));
                    iconRegistry.addSvgIcon('next', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/next-track.svg'));
                    iconRegistry.addSvgIcon('prev', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/previous-track.svg'));
                    iconRegistry.addSvgIcon('add', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/plus.svg'));
                    iconRegistry.addSvgIcon('cross', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/close.svg'));
                }
                AppComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.screenState.screenSize.subscribe(function (scrSz) {
                        _this.onScreensizeChange(scrSz);
                    });
                    this.screenState.updatedScreenSize(window.innerWidth, window.innerHeight, this.checkIfMobile(window.innerWidth, window.innerHeight));
                };
                AppComponent.prototype.onResize = function (event) {
                    this.screenState.updatedScreenSize(window.innerWidth, window.innerHeight, this.checkIfMobile(window.innerWidth, window.innerHeight));
                };
                AppComponent.prototype.checkIfMobile = function (wdt, hgt) {
                    return (wdt / hgt) <= 1;
                };
                AppComponent.prototype.onScreensizeChange = function (scrSz) {
                    console.log("screen size changed to", scrSz.width, "X", scrSz.height, " and is Mobile :", scrSz.isMobile);
                    this.appStyle = this.styleSetter.appStyleSetter(scrSz);
                    this.routerOutletStyle = this.styleSetter.routerOutletStyleSetter(scrSz);
                };
                return AppComponent;
            }());
            AppComponent.ctorParameters = function () { return [
                { type: _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatIconRegistry"] },
                { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["DomSanitizer"] },
                { type: _services_screen_size_service__WEBPACK_IMPORTED_MODULE_2__["screenSizeState"] },
                { type: _styleSetter_service__WEBPACK_IMPORTED_MODULE_3__["styleSetterService"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:resize', ['$event'])
            ], AppComponent.prototype, "onResize", null);
            AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-root',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
                    providers: [_services_screen_size_service__WEBPACK_IMPORTED_MODULE_2__["screenSizeState"], _styleSetter_service__WEBPACK_IMPORTED_MODULE_3__["styleSetterService"]],
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
                })
            ], AppComponent);
            /***/ 
        }),
        /***/ "./src/app/app.module.ts": 
        /*!*******************************!*\
          !*** ./src/app/app.module.ts ***!
          \*******************************/
        /*! exports provided: AppModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function () { return AppModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var ng2_youtube_player__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng2-youtube-player */ "./node_modules/ng2-youtube-player/modules/ng2-youtube-player.js");
            /* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
            /* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
            /* harmony import */ var _player_player_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./player/player.component */ "./src/app/player/player.component.ts");
            /* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
            /* harmony import */ var _music_add_music_add_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./music-add/music-add.component */ "./src/app/music-add/music-add.component.ts");
            /* harmony import */ var _queue_queue_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./queue/queue.component */ "./src/app/queue/queue.component.ts");
            /* harmony import */ var _music_player_music_player_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./music-player/music-player.component */ "./src/app/music-player/music-player.component.ts");
            /* harmony import */ var _buttons_buttons_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./buttons/buttons.component */ "./src/app/buttons/buttons.component.ts");
            /* harmony import */ var _sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./sign-up/sign-up.component */ "./src/app/sign-up/sign-up.component.ts");
            /* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
            /* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/cdk/text-field */ "./node_modules/@angular/cdk/esm2015/text-field.js");
            /* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/esm2015/drag-drop.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var _launcher_launcher_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./launcher/launcher.component */ "./src/app/launcher/launcher.component.ts");
            var AppModule = /** @class */ (function () {
                function AppModule() {
                }
                return AppModule;
            }());
            AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
                    declarations: [
                        _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                        _player_player_component__WEBPACK_IMPORTED_MODULE_6__["PlayerComponent"],
                        _header_header_component__WEBPACK_IMPORTED_MODULE_7__["HeaderComponent"],
                        _music_add_music_add_component__WEBPACK_IMPORTED_MODULE_8__["MusicAddComponent"],
                        _queue_queue_component__WEBPACK_IMPORTED_MODULE_9__["QueueComponent"],
                        _music_player_music_player_component__WEBPACK_IMPORTED_MODULE_10__["MusicPlayerComponent"],
                        _buttons_buttons_component__WEBPACK_IMPORTED_MODULE_11__["ButtonsComponent"],
                        _sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_12__["SignUpComponent"],
                        _launcher_launcher_component__WEBPACK_IMPORTED_MODULE_19__["LauncherComponent"],
                    ],
                    imports: [
                        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                        _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                        ng2_youtube_player__WEBPACK_IMPORTED_MODULE_3__["YoutubePlayerModule"],
                        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__["BrowserAnimationsModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatFormFieldModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatInputModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatButtonModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatIconModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_15__["ReactiveFormsModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_15__["FormsModule"],
                        _angular_common_http__WEBPACK_IMPORTED_MODULE_18__["HttpClientModule"],
                        _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_16__["TextFieldModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatIconModule"],
                        _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_17__["DragDropModule"]
                    ],
                    providers: [],
                    bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
                })
            ], AppModule);
            /***/ 
        }),
        /***/ "./src/app/buttons/buttons.component.scss": 
        /*!************************************************!*\
          !*** ./src/app/buttons/buttons.component.scss ***!
          \************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2J1dHRvbnMvYnV0dG9ucy5jb21wb25lbnQuc2NzcyJ9 */");
            /***/ 
        }),
        /***/ "./src/app/buttons/buttons.component.ts": 
        /*!**********************************************!*\
          !*** ./src/app/buttons/buttons.component.ts ***!
          \**********************************************/
        /*! exports provided: ButtonsComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonsComponent", function () { return ButtonsComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var ButtonsComponent = /** @class */ (function () {
                function ButtonsComponent() {
                    this.buttonClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
                }
                ButtonsComponent.prototype.ngOnInit = function () {
                };
                ButtonsComponent.prototype.clicked = function () {
                    this.buttonClicked.emit();
                };
                return ButtonsComponent;
            }());
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], ButtonsComponent.prototype, "icon", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
            ], ButtonsComponent.prototype, "buttonClicked", void 0);
            ButtonsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-buttons',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./buttons.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/buttons/buttons.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./buttons.component.scss */ "./src/app/buttons/buttons.component.scss")).default]
                })
            ], ButtonsComponent);
            /***/ 
        }),
        /***/ "./src/app/header/header.component.scss": 
        /*!**********************************************!*\
          !*** ./src/app/header/header.component.scss ***!
          \**********************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".header {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  justify-content: space-between;\n  background: rgba(0, 0, 0, 0.7);\n  position: relative;\n  color: seashell;\n  border-radius: 2px;\n}\n\n.appName {\n  position: absolute;\n  left: 1%;\n  top: 50%;\n  transform: translateY(-50%);\n  font-family: \"Cookie\", cursive;\n  font-size: 150%;\n}\n\n.userName {\n  right: 5%;\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n  font-family: \"Cookie\", cursive;\n  font-size: 150%;\n}\n\n.isMobile .appName, .isMobile .userName {\n  font-size: 110%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL0Q6XFxBbmd1bGFyXFxPU00vc3JjXFxhcHBcXGhlYWRlclxcaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSw4QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FDQ0o7O0FERUE7RUFDSSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxRQUFBO0VBQ0EsMkJBQUE7RUFDQSw4QkFBQTtFQUNBLGVBQUE7QUNDSjs7QURDQTtFQUNJLFNBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSwyQkFBQTtFQUNBLDhCQUFBO0VBQ0EsZUFBQTtBQ0VKOztBRENBO0VBQ0ksZUFBQTtBQ0VKIiwiZmlsZSI6InNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkZXJ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsMC43KTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGNvbG9yOiBzZWFzaGVsbDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcclxufVxyXG5cclxuLmFwcE5hbWV7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiAxJTtcclxuICAgIHRvcDogNTAlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG4gICAgZm9udC1mYW1pbHk6ICdDb29raWUnLCBjdXJzaXZlO1xyXG4gICAgZm9udC1zaXplOiAxNTAlOyAgICBcclxufVxyXG4udXNlck5hbWV7XHJcbiAgICByaWdodDogNSU7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDUwJTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcclxuICAgIGZvbnQtZmFtaWx5OiAnQ29va2llJywgY3Vyc2l2ZTtcclxuICAgIGZvbnQtc2l6ZTogMTUwJTtcclxufVxyXG5cclxuLmlzTW9iaWxlIC5hcHBOYW1lLC5pc01vYmlsZSAudXNlck5hbWV7XHJcbiAgICBmb250LXNpemU6IDExMCU7XHJcbn0iLCIuaGVhZGVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNyk7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgY29sb3I6IHNlYXNoZWxsO1xuICBib3JkZXItcmFkaXVzOiAycHg7XG59XG5cbi5hcHBOYW1lIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAxJTtcbiAgdG9wOiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgZm9udC1mYW1pbHk6IFwiQ29va2llXCIsIGN1cnNpdmU7XG4gIGZvbnQtc2l6ZTogMTUwJTtcbn1cblxuLnVzZXJOYW1lIHtcbiAgcmlnaHQ6IDUlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gIGZvbnQtZmFtaWx5OiBcIkNvb2tpZVwiLCBjdXJzaXZlO1xuICBmb250LXNpemU6IDE1MCU7XG59XG5cbi5pc01vYmlsZSAuYXBwTmFtZSwgLmlzTW9iaWxlIC51c2VyTmFtZSB7XG4gIGZvbnQtc2l6ZTogMTEwJTtcbn0iXX0= */");
            /***/ 
        }),
        /***/ "./src/app/header/header.component.ts": 
        /*!********************************************!*\
          !*** ./src/app/header/header.component.ts ***!
          \********************************************/
        /*! exports provided: HeaderComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () { return HeaderComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _services_screen_size_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/screen-size.service */ "./src/app/services/screen-size.service.ts");
            var HeaderComponent = /** @class */ (function () {
                function HeaderComponent(screenState) {
                    this.screenState = screenState;
                }
                HeaderComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.screenState.screenSize.subscribe(function (screen) {
                        _this.screenSz = screen;
                    });
                };
                return HeaderComponent;
            }());
            HeaderComponent.ctorParameters = function () { return [
                { type: _services_screen_size_service__WEBPACK_IMPORTED_MODULE_2__["screenSizeState"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], HeaderComponent.prototype, "username", void 0);
            HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-header',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./header.component.scss */ "./src/app/header/header.component.scss")).default]
                })
            ], HeaderComponent);
            /***/ 
        }),
        /***/ "./src/app/launcher/launcher.component.scss": 
        /*!**************************************************!*\
          !*** ./src/app/launcher/launcher.component.scss ***!
          \**************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".LogoContainer {\n  vertical-align: middle;\n}\n\n.abbrLogo {\n  font-size: 400%;\n  text-align: center;\n  font-family: \"Sedgwick Ave Display\", cursive;\n  -webkit-text-stroke: 1px black;\n  color: white;\n  text-shadow: 3px 3px 0 #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;\n}\n\n.fullLogo {\n  font-size: 150%;\n  text-align: center;\n  color: aliceblue;\n  font-family: \"Cookie\", cursive;\n}\n\n.loader {\n  border: 8px solid rgba(0, 0, 0, 0.8);\n  border-radius: 50%;\n  border-top: 8px solid #3498db;\n  -webkit-animation: spin 2s linear infinite;\n  /* Safari */\n  animation: spin 2s linear infinite;\n}\n\n@-webkit-keyframes spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n  }\n}\n\n@keyframes spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF1bmNoZXIvRDpcXEFuZ3VsYXJcXE9TTS9zcmNcXGFwcFxcbGF1bmNoZXJcXGxhdW5jaGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9sYXVuY2hlci9sYXVuY2hlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLHNCQUFBO0FDQUo7O0FESUE7RUFDSSxlQUFBO0VBQ0Esa0JBQUE7RUFDRCw0Q0FBQTtFQUNDLDhCQUFBO0VBQ0EsWUFBQTtFQUNBLCtGQUNJO0FDRlI7O0FEU0E7RUFDSSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLDhCQUFBO0FDTko7O0FEU0E7RUFDSSxvQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsNkJBQUE7RUFDRCwwQ0FBQTtFQUE0QyxXQUFBO0VBQzNDLGtDQUFBO0FDTEo7O0FEUUU7RUFDRTtJQUFLLCtCQUFBO0VDSlA7RURLRTtJQUFPLGlDQUFBO0VDRlQ7QUFDRjs7QURJRTtFQUNFO0lBQUssdUJBQUE7RUNEUDtFREVFO0lBQU8seUJBQUE7RUNDVDtBQUNGIiwiZmlsZSI6InNyYy9hcHAvbGF1bmNoZXIvbGF1bmNoZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLkxvZ29Db250YWluZXJ7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG59XHJcblxyXG5cclxuLmFiYnJMb2dve1xyXG4gICAgZm9udC1zaXplOjQwMCU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgIGZvbnQtZmFtaWx5OiAnU2VkZ3dpY2sgQXZlIERpc3BsYXknLCBjdXJzaXZlO1xyXG4gICAgLXdlYmtpdC10ZXh0LXN0cm9rZTogMXB4IGJsYWNrO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgdGV4dC1zaGFkb3c6XHJcbiAgICAgICAgM3B4IDNweCAwICMwMDAsXHJcbiAgICAgICAgLTFweCAtMXB4IDAgIzAwMCwgIFxyXG4gICAgICAgIDFweCAtMXB4IDAgIzAwMCxcclxuICAgICAgICAtMXB4IDFweCAwICMwMDAsXHJcbiAgICAgICAgMXB4IDFweCAwICMwMDA7XHJcbn1cclxuXHJcbi5mdWxsTG9nb3tcclxuICAgIGZvbnQtc2l6ZToxNTAlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY29sb3I6IGFsaWNlYmx1ZTtcclxuICAgIGZvbnQtZmFtaWx5OiAnQ29va2llJywgY3Vyc2l2ZTtcclxufVxyXG5cclxuLmxvYWRlciB7XHJcbiAgICBib3JkZXI6IDhweCBzb2xpZCByZ2JhKDAsMCwwLDAuOCk7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBib3JkZXItdG9wOiA4cHggc29saWQgIzM0OThkYjtcclxuICAgLXdlYmtpdC1hbmltYXRpb246IHNwaW4gMnMgbGluZWFyIGluZmluaXRlOyAvKiBTYWZhcmkgKi9cclxuICAgIGFuaW1hdGlvbjogc3BpbiAycyBsaW5lYXIgaW5maW5pdGU7XHJcbiAgfVxyXG5cclxuICBALXdlYmtpdC1rZXlmcmFtZXMgc3BpbiB7XHJcbiAgICAwJSB7IC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7IH1cclxuICAgIDEwMCUgeyAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7IH1cclxuICB9XHJcbiAgXHJcbiAgQGtleWZyYW1lcyBzcGluIHtcclxuICAgIDAlIHsgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7IH1cclxuICAgIDEwMCUgeyB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpOyB9XHJcbiAgfVxyXG4iLCIuTG9nb0NvbnRhaW5lciB7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG5cbi5hYmJyTG9nbyB7XG4gIGZvbnQtc2l6ZTogNDAwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LWZhbWlseTogXCJTZWRnd2ljayBBdmUgRGlzcGxheVwiLCBjdXJzaXZlO1xuICAtd2Via2l0LXRleHQtc3Ryb2tlOiAxcHggYmxhY2s7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgdGV4dC1zaGFkb3c6IDNweCAzcHggMCAjMDAwLCAtMXB4IC0xcHggMCAjMDAwLCAxcHggLTFweCAwICMwMDAsIC0xcHggMXB4IDAgIzAwMCwgMXB4IDFweCAwICMwMDA7XG59XG5cbi5mdWxsTG9nbyB7XG4gIGZvbnQtc2l6ZTogMTUwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogYWxpY2VibHVlO1xuICBmb250LWZhbWlseTogXCJDb29raWVcIiwgY3Vyc2l2ZTtcbn1cblxuLmxvYWRlciB7XG4gIGJvcmRlcjogOHB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC44KTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBib3JkZXItdG9wOiA4cHggc29saWQgIzM0OThkYjtcbiAgLXdlYmtpdC1hbmltYXRpb246IHNwaW4gMnMgbGluZWFyIGluZmluaXRlO1xuICAvKiBTYWZhcmkgKi9cbiAgYW5pbWF0aW9uOiBzcGluIDJzIGxpbmVhciBpbmZpbml0ZTtcbn1cblxuQC13ZWJraXQta2V5ZnJhbWVzIHNwaW4ge1xuICAwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgfVxuICAxMDAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG4gIH1cbn1cbkBrZXlmcmFtZXMgc3BpbiB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgfVxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xuICB9XG59Il19 */");
            /***/ 
        }),
        /***/ "./src/app/launcher/launcher.component.ts": 
        /*!************************************************!*\
          !*** ./src/app/launcher/launcher.component.ts ***!
          \************************************************/
        /*! exports provided: LauncherComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LauncherComponent", function () { return LauncherComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _services_screen_size_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/screen-size.service */ "./src/app/services/screen-size.service.ts");
            /* harmony import */ var _launcherStyle_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./launcherStyle.service */ "./src/app/launcher/launcherStyle.service.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            var LauncherComponent = /** @class */ (function () {
                function LauncherComponent(screenState, styleSetter, router) {
                    this.screenState = screenState;
                    this.styleSetter = styleSetter;
                    this.router = router;
                }
                LauncherComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.screenState.screenSize.subscribe(function (scrSz) {
                        _this.onScreensizeChange(scrSz);
                    });
                    setTimeout(function () {
                        (sessionStorage.getItem('loggedIn') && sessionStorage.getItem('loggedIn') == 'true') ?
                            _this.router.navigateByUrl("/music") :
                            _this.router.navigateByUrl("/login");
                    }, 5000);
                };
                LauncherComponent.prototype.onScreensizeChange = function (scrSz) {
                    this.logoStyle = this.styleSetter.logoStyleSetter(scrSz);
                    this.abbrLogoStyle = this.styleSetter.abbrLogoStyler(scrSz);
                    this.fullLogoStyle = this.styleSetter.fullLogoStyler(scrSz);
                    this.loginStyle = this.styleSetter.loginStyleSetter(scrSz);
                    this.loaderStyle = this.styleSetter.loaderStyleSetter(scrSz);
                };
                return LauncherComponent;
            }());
            LauncherComponent.ctorParameters = function () { return [
                { type: _services_screen_size_service__WEBPACK_IMPORTED_MODULE_2__["screenSizeState"] },
                { type: _launcherStyle_service__WEBPACK_IMPORTED_MODULE_3__["launcherStyleService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
            ]; };
            LauncherComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-launcher',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./launcher.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/launcher/launcher.component.html")).default,
                    providers: [_launcherStyle_service__WEBPACK_IMPORTED_MODULE_3__["launcherStyleService"]],
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./launcher.component.scss */ "./src/app/launcher/launcher.component.scss")).default]
                })
            ], LauncherComponent);
            /***/ 
        }),
        /***/ "./src/app/launcher/launcherStyle.service.ts": 
        /*!***************************************************!*\
          !*** ./src/app/launcher/launcherStyle.service.ts ***!
          \***************************************************/
        /*! exports provided: launcherStyleService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "launcherStyleService", function () { return launcherStyleService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var launcherStyleService = /** @class */ (function () {
                function launcherStyleService() {
                }
                launcherStyleService.prototype.loginStyleSetter = function (scrSz) {
                    var boxSize = 0.1 * Math.min(scrSz.width, scrSz.height);
                    return {
                        'width': boxSize + 'px',
                        'height': boxSize + 'px',
                        'position': 'absolute',
                        'top': (scrSz.height - boxSize) / 2 + 'px',
                        'left': (scrSz.width - boxSize) / 2 + 'px',
                    };
                };
                launcherStyleService.prototype.loaderStyleSetter = function (scrSz) {
                    var boxSize = 0.1 * Math.min(scrSz.width, scrSz.height);
                    return {
                        'width': boxSize - 16 + 'px',
                        'height': boxSize - 16 + 'px'
                    };
                };
                launcherStyleService.prototype.logoStyleSetter = function (scrSz) {
                    var boxSize = 0.6 * Math.min(scrSz.width, scrSz.height);
                    return {
                        'width': boxSize + 'px',
                        'height': (scrSz.height - boxSize) + 'px',
                        'position': 'absolute',
                        'top': '50px',
                        'padding-top': (scrSz.height - boxSize) / 8 + 'px',
                        'left': (scrSz.width - boxSize) / 2 + 'px',
                        'font-size': (scrSz.height - boxSize) / (scrSz.isMobile ? 15 : 10) + 'px'
                    };
                };
                launcherStyleService.prototype.abbrLogoStyler = function (scrSz) {
                    var boxSize = 0.6 * Math.min(scrSz.width, scrSz.height);
                    return {
                        'line-height': ((scrSz.height - boxSize) / 3) + 'px',
                    };
                };
                launcherStyleService.prototype.fullLogoStyler = function (scrSz) {
                    var boxSize = 0.6 * Math.min(scrSz.width, scrSz.height);
                    return {
                        'line-height': '1px',
                    };
                };
                return launcherStyleService;
            }());
            launcherStyleService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
            ], launcherStyleService);
            /***/ 
        }),
        /***/ "./src/app/music-add/music-add.component.scss": 
        /*!****************************************************!*\
          !*** ./src/app/music-add/music-add.component.scss ***!
          \****************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".adder {\n  height: 100%;\n  width: 98%;\n  margin: auto;\n  position: relative;\n}\n.adder .box {\n  width: 100%;\n  height: 90%;\n  background-color: rgba(0, 0, 0, 0.5);\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n  border-radius: 5px;\n}\n.box.isMobile {\n  display: flex;\n  justify-content: flex-start;\n}\n.adderinputField {\n  width: 100%;\n  height: 30%;\n  padding-top: 3%;\n  align-content: center;\n  color: white;\n}\n.adderinputField > mat-form-field {\n  width: 90%;\n  height: 100%;\n  padding-left: 5%;\n}\n.adderinputField mat-error {\n  width: 84%;\n  padding-left: 8%;\n  padding-top: 0;\n  font-size: 80%;\n  text-align: right;\n}\n.isMobile .adderinputField {\n  width: 50%;\n  height: 30%;\n  padding-top: 1%;\n  align-content: center;\n  color: white;\n}\n.isMobile .adderinputField > mat-form-field {\n  width: 90%;\n  height: 100%;\n  padding-left: 5%;\n}\n.isMobile .adderinputField mat-error {\n  width: 84%;\n  padding-left: 8%;\n  padding-top: 10px;\n  font-size: 60%;\n  text-align: right;\n}\n.bottomFIeld {\n  display: flex;\n  justify-content: flex-start;\n}\n.bottomFIeld .bottom {\n  height: 100%;\n  width: 60%;\n  padding-left: 5%;\n}\n.bottomFIeld mat-form-field {\n  width: 100%;\n  height: 100%;\n}\n.isMobile .bottomFIeld {\n  display: flex;\n  justify-content: flex-start;\n}\n.isMobile .bottomFIeld .bottom {\n  height: 100%;\n  width: 70%;\n  padding-left: 5%;\n}\n.isMobile .bottomFIeld mat-form-field {\n  width: 100%;\n  height: 100%;\n}\n.icons {\n  height: 80%;\n  width: 13%;\n  padding-top: 1%;\n}\n.isMobile .icons {\n  height: 100%;\n  width: 13%;\n  padding-top: 20px;\n  padding-left: 5%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbXVzaWMtYWRkL0Q6XFxBbmd1bGFyXFxPU00vc3JjXFxhcHBcXG11c2ljLWFkZFxcbXVzaWMtYWRkLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tdXNpYy1hZGQvbXVzaWMtYWRkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUNDSjtBREFJO0VBQ0ksV0FBQTtFQUNBLFdBQUE7RUFDQSxvQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLDJCQUFBO0VBQ0Esa0JBQUE7QUNFUjtBREdBO0VBQ0ksYUFBQTtFQUNBLDJCQUFBO0FDQUo7QURHQTtFQUNJLFdBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0VBQ0EsWUFBQTtBQ0FKO0FEQ0k7RUFDSSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FDQ1I7QURFSTtFQUNJLFVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7QUNBUjtBREdBO0VBQ0ksVUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0FDQUo7QURDSTtFQUNJLFVBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUNDUjtBREVJO0VBQ0ksVUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7QUNBUjtBRElBO0VBQ0ksYUFBQTtFQUNBLDJCQUFBO0FDREo7QURFSTtFQUNJLFlBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7QUNBUjtBREVJO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUNBUjtBREtBO0VBQ0ksYUFBQTtFQUNBLDJCQUFBO0FDRko7QURHSTtFQUNJLFlBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7QUNEUjtBREdJO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUNEUjtBRE1BO0VBQ0ksV0FBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0FDSEo7QURNQTtFQUNJLFlBQUE7RUFDQSxVQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQ0hKIiwiZmlsZSI6InNyYy9hcHAvbXVzaWMtYWRkL211c2ljLWFkZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hZGRlcntcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHdpZHRoOiA5OCU7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAuYm94e1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogOTAlO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC41KTtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgdG9wOiA1MCU7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIH1cclxuICAgIFxyXG59XHJcblxyXG4uYm94LmlzTW9iaWxle1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxufVxyXG5cclxuLmFkZGVyaW5wdXRGaWVsZHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAzMCU7XHJcbiAgICBwYWRkaW5nLXRvcDogMyU7XHJcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICA+bWF0LWZvcm0tZmllbGR7XHJcbiAgICAgICAgd2lkdGg6IDkwJTtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiA1JTtcclxuICAgICAgICBcclxuICAgIH1cclxuICAgIG1hdC1lcnJvcntcclxuICAgICAgICB3aWR0aDogODQlO1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogOCU7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDA7XHJcbiAgICAgICAgZm9udC1zaXplOjgwJTtcclxuICAgICAgICB0ZXh0LWFsaWduOnJpZ2h0IDtcclxuICAgIH1cclxufVxyXG4uaXNNb2JpbGUgLmFkZGVyaW5wdXRGaWVsZHtcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgICBoZWlnaHQ6IDMwJTtcclxuICAgIHBhZGRpbmctdG9wOjElO1xyXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgPm1hdC1mb3JtLWZpZWxke1xyXG4gICAgICAgIHdpZHRoOiA5MCU7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogNSU7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcbiAgICBtYXQtZXJyb3J7XHJcbiAgICAgICAgd2lkdGg6IDg0JTtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDglO1xyXG4gICAgICAgIHBhZGRpbmctdG9wOjEwcHg7XHJcbiAgICAgICAgZm9udC1zaXplOjYwJTtcclxuICAgICAgICB0ZXh0LWFsaWduOnJpZ2h0IDtcclxuICAgIH1cclxufVxyXG5cclxuLmJvdHRvbUZJZWxke1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICAgIC5ib3R0b217XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIHdpZHRoOiA2MCU7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiA1JTtcclxuICAgIH1cclxuICAgIG1hdC1mb3JtLWZpZWxke1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgIFxyXG4gICAgfVxyXG59XHJcblxyXG4uaXNNb2JpbGUgLmJvdHRvbUZJZWxke1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICAgIC5ib3R0b217XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIHdpZHRoOiA3MCU7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiA1JTtcclxuICAgIH1cclxuICAgIG1hdC1mb3JtLWZpZWxke1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgIFxyXG4gICAgfVxyXG59XHJcblxyXG4uaWNvbnN7XHJcbiAgICBoZWlnaHQ6IDgwJTtcclxuICAgIHdpZHRoOiAxMyU7XHJcbiAgICBwYWRkaW5nLXRvcDogMSU7XHJcbn1cclxuXHJcbi5pc01vYmlsZSAuaWNvbnN7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogMTMlO1xyXG4gICAgcGFkZGluZy10b3A6IDIwcHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDUlO1xyXG59XHJcbiIsIi5hZGRlciB7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDk4JTtcbiAgbWFyZ2luOiBhdXRvO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uYWRkZXIgLmJveCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDkwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cblxuLmJveC5pc01vYmlsZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbn1cblxuLmFkZGVyaW5wdXRGaWVsZCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDMwJTtcbiAgcGFkZGluZy10b3A6IDMlO1xuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbi5hZGRlcmlucHV0RmllbGQgPiBtYXQtZm9ybS1maWVsZCB7XG4gIHdpZHRoOiA5MCU7XG4gIGhlaWdodDogMTAwJTtcbiAgcGFkZGluZy1sZWZ0OiA1JTtcbn1cbi5hZGRlcmlucHV0RmllbGQgbWF0LWVycm9yIHtcbiAgd2lkdGg6IDg0JTtcbiAgcGFkZGluZy1sZWZ0OiA4JTtcbiAgcGFkZGluZy10b3A6IDA7XG4gIGZvbnQtc2l6ZTogODAlO1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cblxuLmlzTW9iaWxlIC5hZGRlcmlucHV0RmllbGQge1xuICB3aWR0aDogNTAlO1xuICBoZWlnaHQ6IDMwJTtcbiAgcGFkZGluZy10b3A6IDElO1xuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbi5pc01vYmlsZSAuYWRkZXJpbnB1dEZpZWxkID4gbWF0LWZvcm0tZmllbGQge1xuICB3aWR0aDogOTAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBhZGRpbmctbGVmdDogNSU7XG59XG4uaXNNb2JpbGUgLmFkZGVyaW5wdXRGaWVsZCBtYXQtZXJyb3Ige1xuICB3aWR0aDogODQlO1xuICBwYWRkaW5nLWxlZnQ6IDglO1xuICBwYWRkaW5nLXRvcDogMTBweDtcbiAgZm9udC1zaXplOiA2MCU7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuXG4uYm90dG9tRkllbGQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG59XG4uYm90dG9tRkllbGQgLmJvdHRvbSB7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDYwJTtcbiAgcGFkZGluZy1sZWZ0OiA1JTtcbn1cbi5ib3R0b21GSWVsZCBtYXQtZm9ybS1maWVsZCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5pc01vYmlsZSAuYm90dG9tRkllbGQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG59XG4uaXNNb2JpbGUgLmJvdHRvbUZJZWxkIC5ib3R0b20ge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiA3MCU7XG4gIHBhZGRpbmctbGVmdDogNSU7XG59XG4uaXNNb2JpbGUgLmJvdHRvbUZJZWxkIG1hdC1mb3JtLWZpZWxkIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLmljb25zIHtcbiAgaGVpZ2h0OiA4MCU7XG4gIHdpZHRoOiAxMyU7XG4gIHBhZGRpbmctdG9wOiAxJTtcbn1cblxuLmlzTW9iaWxlIC5pY29ucyB7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEzJTtcbiAgcGFkZGluZy10b3A6IDIwcHg7XG4gIHBhZGRpbmctbGVmdDogNSU7XG59Il19 */");
            /***/ 
        }),
        /***/ "./src/app/music-add/music-add.component.ts": 
        /*!**************************************************!*\
          !*** ./src/app/music-add/music-add.component.ts ***!
          \**************************************************/
        /*! exports provided: MusicAddComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MusicAddComponent", function () { return MusicAddComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _services_screen_size_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/screen-size.service */ "./src/app/services/screen-size.service.ts");
            /* harmony import */ var _services_musicDataFetcher_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/musicDataFetcher.service */ "./src/app/services/musicDataFetcher.service.ts");
            /* harmony import */ var _services_DataFetcher_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/DataFetcher.service */ "./src/app/services/DataFetcher.service.ts");
            var MusicAddComponent = /** @class */ (function () {
                function MusicAddComponent(screenState, musicDataFetcher) {
                    this.screenState = screenState;
                    this.musicDataFetcher = musicDataFetcher;
                    this.title = '';
                    this.invalidURL = true;
                    this.invalidTitle = true;
                    this.onAdd = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
                }
                MusicAddComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.screenState.screenSize.subscribe(function (scrSz) {
                        _this.screenSt = scrSz;
                    });
                };
                MusicAddComponent.prototype.addValue = function () {
                    if (this.invalidTitle) {
                        return;
                    }
                    var id = this.getIdFromUrl(this.url);
                    if (id == '-1') {
                        this.invalidURL = true;
                        return;
                    }
                    var videoElem = {
                        videoId: id,
                        title: this.title,
                        thumbnail: this.getPhotoUrl(id)
                    };
                    if (sessionStorage.getItem('loggedIn') && sessionStorage.getItem('loggedIn') == 'true') {
                        var user = sessionStorage.getItem('username') ? sessionStorage.getItem('username') : 'Guest';
                        if (user != 'Guest') {
                            videoElem.username = user.substring(1, user.length - 1);
                            this.musicDataFetcher.saveSong(videoElem).subscribe(function (data) {
                                console.log(data);
                            });
                        }
                    }
                    this.onAdd.emit(videoElem);
                };
                MusicAddComponent.prototype.onURLChange = function () {
                    this.invalidURL = false;
                };
                MusicAddComponent.prototype.onTitleChange = function () {
                    this.invalidTitle = this.title.length == 0;
                };
                MusicAddComponent.prototype.getPhotoUrl = function (id) {
                    return "http://img.youtube.com/vi/" + id + "/hqdefault.jpg";
                };
                MusicAddComponent.prototype.getIdFromUrl = function (url) {
                    var regExp = /^.*(youtu\.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
                    var match = url.match(regExp);
                    if (match && match[2].length == 11) {
                        return match[2];
                    }
                    else {
                        return '-1';
                    }
                };
                return MusicAddComponent;
            }());
            MusicAddComponent.ctorParameters = function () { return [
                { type: _services_screen_size_service__WEBPACK_IMPORTED_MODULE_2__["screenSizeState"] },
                { type: _services_musicDataFetcher_service__WEBPACK_IMPORTED_MODULE_3__["MusicDataFetcher"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
            ], MusicAddComponent.prototype, "onAdd", void 0);
            MusicAddComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-music-add',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./music-add.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/music-add/music-add.component.html")).default,
                    providers: [_services_musicDataFetcher_service__WEBPACK_IMPORTED_MODULE_3__["MusicDataFetcher"], _services_DataFetcher_service__WEBPACK_IMPORTED_MODULE_4__["DataFetcher"]],
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./music-add.component.scss */ "./src/app/music-add/music-add.component.scss")).default]
                })
            ], MusicAddComponent);
            /***/ 
        }),
        /***/ "./src/app/music-player/music-player.component.scss": 
        /*!**********************************************************!*\
          !*** ./src/app/music-player/music-player.component.scss ***!
          \**********************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL211c2ljLXBsYXllci9tdXNpYy1wbGF5ZXIuY29tcG9uZW50LnNjc3MifQ== */");
            /***/ 
        }),
        /***/ "./src/app/music-player/music-player.component.ts": 
        /*!********************************************************!*\
          !*** ./src/app/music-player/music-player.component.ts ***!
          \********************************************************/
        /*! exports provided: MusicPlayerComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MusicPlayerComponent", function () { return MusicPlayerComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _services_screen_size_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/screen-size.service */ "./src/app/services/screen-size.service.ts");
            /* harmony import */ var _musicPlayerStyle_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./musicPlayerStyle.service */ "./src/app/music-player/musicPlayerStyle.service.ts");
            /* harmony import */ var _services_musicDataFetcher_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/musicDataFetcher.service */ "./src/app/services/musicDataFetcher.service.ts");
            /* harmony import */ var _services_DataFetcher_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/DataFetcher.service */ "./src/app/services/DataFetcher.service.ts");
            var MusicPlayerComponent = /** @class */ (function () {
                function MusicPlayerComponent(screenState, styleSetter, musicDataFetcher) {
                    this.screenState = screenState;
                    this.styleSetter = styleSetter;
                    this.musicDataFetcher = musicDataFetcher;
                    this.defplayerQueue = [
                        {
                            videoId: 'YKcgwUg39yY',
                            thumbnail: "http://img.youtube.com/vi/YKcgwUg39yY/hqdefault.jpg",
                            title: 'Dhadak(Title Track)'
                        },
                        {
                            videoId: 'DMRRC0rwO_I',
                            thumbnail: "http://img.youtube.com/vi/DMRRC0rwO_I/hqdefault.jpg",
                            title: 'Khairiyat'
                        },
                        {
                            videoId: '2kN3THdRih8',
                            thumbnail: "http://img.youtube.com/vi/2kN3THdRih8/hqdefault.jpg",
                            title: 'Tum hi aana'
                        }
                    ];
                    this.currentIndex = -1;
                }
                MusicPlayerComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.screenState.screenSize.subscribe(function (screen) {
                        _this.onScreensizeChange(screen);
                    });
                    if (sessionStorage.getItem('loggedIn') && sessionStorage.getItem('loggedIn') == 'true') {
                        this.loggedInUser = sessionStorage.getItem('username') ? sessionStorage.getItem('username') : 'Guest';
                        if (this.loggedInUser != 'Guest') {
                            var usernm = this.loggedInUser.substring(1, this.loggedInUser.length - 1);
                            this.musicDataFetcher.getAllSongs(usernm).subscribe(function (songList) {
                                _this.playerQueue = songList;
                                _this.playerQueue = _this.playerQueue.filter(function (x) { return x.videoId != null; });
                                console.log(_this.playerQueue);
                            });
                        }
                        else {
                            this.playerQueue = this.defplayerQueue;
                        }
                    }
                };
                MusicPlayerComponent.prototype.onScreensizeChange = function (scrSz) {
                    this.adderToggleShow = scrSz.isMobile;
                    this.adderShow = !scrSz.isMobile;
                    this.headerBarStyle = this.styleSetter.headerStyleSetter(scrSz);
                    this.musicPlayerStyle = this.styleSetter.bodyStyleSetter(scrSz);
                    this.leftStyle = this.styleSetter.leftStyleSetter(scrSz);
                    this.rightStyle = this.styleSetter.rightStyleSetter(scrSz);
                    this.playerStyle = this.styleSetter.playerStyleSetter(scrSz);
                    this.adderStyle = this.styleSetter.adderStyleSetter(scrSz);
                };
                MusicPlayerComponent.prototype.addVideo = function (video) {
                    this.playerQueue.push(video);
                };
                return MusicPlayerComponent;
            }());
            MusicPlayerComponent.ctorParameters = function () { return [
                { type: _services_screen_size_service__WEBPACK_IMPORTED_MODULE_2__["screenSizeState"] },
                { type: _musicPlayerStyle_service__WEBPACK_IMPORTED_MODULE_3__["musicStyleService"] },
                { type: _services_musicDataFetcher_service__WEBPACK_IMPORTED_MODULE_4__["MusicDataFetcher"] }
            ]; };
            MusicPlayerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-music-player',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./music-player.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/music-player/music-player.component.html")).default,
                    providers: [_musicPlayerStyle_service__WEBPACK_IMPORTED_MODULE_3__["musicStyleService"], _services_musicDataFetcher_service__WEBPACK_IMPORTED_MODULE_4__["MusicDataFetcher"], _services_DataFetcher_service__WEBPACK_IMPORTED_MODULE_5__["DataFetcher"]],
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./music-player.component.scss */ "./src/app/music-player/music-player.component.scss")).default]
                })
            ], MusicPlayerComponent);
            /***/ 
        }),
        /***/ "./src/app/music-player/musicPlayerStyle.service.ts": 
        /*!**********************************************************!*\
          !*** ./src/app/music-player/musicPlayerStyle.service.ts ***!
          \**********************************************************/
        /*! exports provided: musicStyleService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "musicStyleService", function () { return musicStyleService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var musicStyleService = /** @class */ (function () {
                function musicStyleService() {
                }
                musicStyleService.prototype.headerStyleSetter = function (scrSz) {
                    if (scrSz.isMobile) {
                        return {
                            'width': (scrSz.width - 3) + 'px',
                            'height': 0.03 * (scrSz.height - 3) + 'px',
                            'background-color': 'white',
                        };
                    }
                    else {
                        return {
                            'width': (scrSz.width - 3) + 'px',
                            'height': 0.05 * (scrSz.height - 3) + 'px',
                            'background-color': 'white',
                        };
                    }
                };
                musicStyleService.prototype.bodyStyleSetter = function (scrSz) {
                    if (scrSz.isMobile) {
                        return {
                            'width': (scrSz.width - 3) + 'px',
                            'height': 0.97 * (scrSz.height - 3) + 'px',
                        };
                    }
                    else {
                        return {
                            'width': (scrSz.width - 3) + 'px',
                            'height': 0.95 * (scrSz.height - 3) + 'px',
                            'display': 'flex',
                            'justify-content': 'flex-start'
                        };
                    }
                };
                musicStyleService.prototype.leftStyleSetter = function (scrSz) {
                    if (scrSz.isMobile) {
                        return {
                            'width': (scrSz.width - 3) + 'px',
                            'height': ((9 * (scrSz.width - 3) / 16) + (0.2 * ((0.97 * (scrSz.height - 3) - (9 * (scrSz.width - 3) / 16))))) + 'px',
                            'background-color': 'rgba(0,0,0,0.0)',
                        };
                    }
                    else {
                        return {
                            'width': 0.7 * (scrSz.width - 3) + 'px',
                            'height': 0.95 * (scrSz.height - 3) + 'px',
                            'background-color': 'rgba(0,0,0,0.0)',
                        };
                    }
                };
                musicStyleService.prototype.rightStyleSetter = function (scrSz) {
                    if (scrSz.isMobile) {
                        return {
                            'width': (scrSz.width - 3) + 'px',
                            'height': 0.8 * ((0.97 * (scrSz.height - 3) - (9 * (scrSz.width - 3) / 16))) + 'px',
                            'background-color': 'rgba(0,0,0,0.0)',
                        };
                    }
                    else {
                        return {
                            'width': 0.3 * (scrSz.width - 3) + 'px',
                            'height': 0.95 * (scrSz.height - 3) + 'px',
                            'background-color': 'rgba(0,0,0,0.0)',
                        };
                    }
                };
                musicStyleService.prototype.playerStyleSetter = function (scrSz) {
                    if (scrSz.isMobile) {
                        return {
                            'width': (scrSz.width - 3) + 'px',
                            'height': 9 * (scrSz.width - 3) / 16 + 'px',
                            'background-color': 'rgba(0,0,0,0)',
                        };
                    }
                    else {
                        return {
                            'width': 0.7 * (scrSz.width - 3) + 'px',
                            'height': 0.7 * 0.95 * (scrSz.height - 3) + 'px',
                            'background-color': 'rgba(0,0,0,0)',
                        };
                    }
                };
                musicStyleService.prototype.adderStyleSetter = function (scrSz) {
                    if (scrSz.isMobile) {
                        return {
                            'width': (scrSz.width - 3) + 'px',
                            'height': 0.2 * ((0.97 * (scrSz.height - 3) - (9 * (scrSz.width - 3) / 16))) + 'px',
                            'background-color': 'rgba(0,0,0,0)',
                            'z-index': '999'
                        };
                    }
                    else {
                        return {
                            'width': 0.7 * (scrSz.width - 3) + 'px',
                            'height': 0.3 * 0.95 * (scrSz.height - 3) + 'px',
                            'background-color': 'rgba(0,0,0,0)',
                        };
                    }
                };
                return musicStyleService;
            }());
            musicStyleService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
            ], musicStyleService);
            /***/ 
        }),
        /***/ "./src/app/player/player.component.scss": 
        /*!**********************************************!*\
          !*** ./src/app/player/player.component.scss ***!
          \**********************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".playr {\n  height: 100%;\n  width: 98%;\n  margin: auto;\n  position: relative;\n}\n.playr .screenSwap {\n  width: 100%;\n  height: 98%;\n  background-color: rgba(255, 255, 255, 0.5);\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n  border-radius: 5px;\n}\n.playr .bars {\n  height: 30px;\n  left: 50%;\n  margin: 0px 0 0 -80px;\n  position: absolute;\n  top: 50%;\n  width: 160px;\n}\n.playr .bar {\n  background: #666;\n  bottom: 1px;\n  height: 30px;\n  position: absolute;\n  width: 12px;\n  -webkit-animation: sound 0ms -800ms linear infinite alternate;\n          animation: sound 0ms -800ms linear infinite alternate;\n}\n@-webkit-keyframes sound {\n  0% {\n    opacity: 0.35;\n    height: 15px;\n  }\n  100% {\n    opacity: 1;\n    height: 70px;\n  }\n}\n@keyframes sound {\n  0% {\n    opacity: 0.35;\n    height: 15px;\n  }\n  100% {\n    opacity: 1;\n    height: 70px;\n  }\n}\n.playr .bar:nth-child(1) {\n  left: 1px;\n  -webkit-animation-duration: 474ms;\n          animation-duration: 474ms;\n}\n.playr .bar:nth-child(2) {\n  left: 20px;\n  -webkit-animation-duration: 433ms;\n          animation-duration: 433ms;\n}\n.playr .bar:nth-child(3) {\n  left: 36px;\n  -webkit-animation-duration: 407ms;\n          animation-duration: 407ms;\n}\n.playr .bar:nth-child(4) {\n  left: 52px;\n  -webkit-animation-duration: 458ms;\n          animation-duration: 458ms;\n}\n.playr .bar:nth-child(5) {\n  left: 68px;\n  -webkit-animation-duration: 400ms;\n          animation-duration: 400ms;\n}\n.playr .bar:nth-child(6) {\n  left: 84px;\n  -webkit-animation-duration: 427ms;\n          animation-duration: 427ms;\n}\n.playr .bar:nth-child(7) {\n  left: 100px;\n  -webkit-animation-duration: 441ms;\n          animation-duration: 441ms;\n}\n.playr .bar:nth-child(8) {\n  left: 116px;\n  -webkit-animation-duration: 419ms;\n          animation-duration: 419ms;\n}\n.playr .bar:nth-child(9) {\n  left: 132px;\n  -webkit-animation-duration: 487ms;\n          animation-duration: 487ms;\n}\n.playr .bar:nth-child(10) {\n  left: 148px;\n  -webkit-animation-duration: 442ms;\n          animation-duration: 442ms;\n}\n.playr .utubeIcon {\n  width: 100%;\n  height: 16%;\n  position: absolute;\n  top: 85%;\n  transform: translateY(-50%);\n  z-index: 999;\n  display: flex;\n  justify-content: space-around;\n}\n.playr .utubeTitle {\n  width: 100%;\n  height: 12%;\n  position: absolute;\n  top: 10%;\n  transform: translateY(-50%);\n  z-index: 999;\n  display: flex;\n  justify-content: flex-start;\n  font-size: 150%;\n}\n.playr .utubeTitle .titleNm {\n  padding-left: 20px;\n}\n.playr .icons {\n  height: 100%;\n  flex-grow: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGxheWVyL0Q6XFxBbmd1bGFyXFxPU00vc3JjXFxhcHBcXHBsYXllclxccGxheWVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wbGF5ZXIvcGxheWVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUNDSjtBREFJO0VBQ0ksV0FBQTtFQUNBLFdBQUE7RUFDQSwwQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLDJCQUFBO0VBQ0Esa0JBQUE7QUNFUjtBREVJO0VBQ0ksWUFBQTtFQUNBLFNBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFlBQUE7QUNBUjtBREdJO0VBQ0ksZ0JBQUE7RUFDQyxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLDZEQUFBO1VBQUEscURBQUE7QUNEVDtBRElLO0VBQ0k7SUFDRyxhQUFBO0lBQ0MsWUFBQTtFQ0ZYO0VESU87SUFDSSxVQUFBO0lBQ0EsWUFBQTtFQ0ZYO0FBQ0Y7QUROSztFQUNJO0lBQ0csYUFBQTtJQUNDLFlBQUE7RUNGWDtFRElPO0lBQ0ksVUFBQTtJQUNBLFlBQUE7RUNGWDtBQUNGO0FES0s7RUFBcUIsU0FBQTtFQUFXLGlDQUFBO1VBQUEseUJBQUE7QUNEckM7QURFSztFQUFxQixVQUFBO0VBQVksaUNBQUE7VUFBQSx5QkFBQTtBQ0V0QztBRERLO0VBQXFCLFVBQUE7RUFBWSxpQ0FBQTtVQUFBLHlCQUFBO0FDS3RDO0FESks7RUFBcUIsVUFBQTtFQUFZLGlDQUFBO1VBQUEseUJBQUE7QUNRdEM7QURQSztFQUFxQixVQUFBO0VBQVksaUNBQUE7VUFBQSx5QkFBQTtBQ1d0QztBRFZLO0VBQXFCLFVBQUE7RUFBWSxpQ0FBQTtVQUFBLHlCQUFBO0FDY3RDO0FEYks7RUFBcUIsV0FBQTtFQUFhLGlDQUFBO1VBQUEseUJBQUE7QUNpQnZDO0FEaEJLO0VBQXFCLFdBQUE7RUFBYSxpQ0FBQTtVQUFBLHlCQUFBO0FDb0J2QztBRG5CSztFQUFxQixXQUFBO0VBQWEsaUNBQUE7VUFBQSx5QkFBQTtBQ3VCdkM7QUR0Qks7RUFBcUIsV0FBQTtFQUFhLGlDQUFBO1VBQUEseUJBQUE7QUMwQnZDO0FEeEJJO0VBQ0ksV0FBQTtFQUNBLFdBQUE7RUFDRCxrQkFBQTtFQUNDLFFBQUE7RUFDQSwyQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsNkJBQUE7QUMwQlI7QUR4Qkk7RUFDSSxXQUFBO0VBQ0EsV0FBQTtFQUNELGtCQUFBO0VBQ0MsUUFBQTtFQUNBLDJCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSwyQkFBQTtFQUNBLGVBQUE7QUMwQlI7QUR6QlE7RUFDSSxrQkFBQTtBQzJCWjtBRHhCSTtFQUNJLFlBQUE7RUFDQSxZQUFBO0FDMEJSIiwiZmlsZSI6InNyYy9hcHAvcGxheWVyL3BsYXllci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wbGF5cntcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHdpZHRoOiA5OCU7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAuc2NyZWVuU3dhcHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IDk4JTtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHRvcDogNTAlO1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC5iYXJzIHtcclxuICAgICAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICAgICAgbGVmdDogNTAlO1xyXG4gICAgICAgIG1hcmdpbjogMHB4IDAgMCAtODBweDtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgdG9wOiA1MCU7XHJcbiAgICAgICAgd2lkdGg6IDE2MHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5iYXIge1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICM2NjY7XHJcbiAgICAgICAgIGJvdHRvbTogMXB4O1xyXG4gICAgICAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgd2lkdGg6IDEycHg7ICAgICAgXHJcbiAgICAgICAgIGFuaW1hdGlvbjogc291bmQgMG1zIC04MDBtcyBsaW5lYXIgaW5maW5pdGUgYWx0ZXJuYXRlO1xyXG4gICAgIH1cclxuICAgICBcclxuICAgICBAa2V5ZnJhbWVzIHNvdW5kIHtcclxuICAgICAgICAgMCUge1xyXG4gICAgICAgICAgICBvcGFjaXR5OiAuMzU7XHJcbiAgICAgICAgICAgICBoZWlnaHQ6IDE1cHg7IFxyXG4gICAgICAgICB9XHJcbiAgICAgICAgIDEwMCUge1xyXG4gICAgICAgICAgICAgb3BhY2l0eTogMTsgICAgICAgXHJcbiAgICAgICAgICAgICBoZWlnaHQ6IDcwcHg7ICAgICAgICBcclxuICAgICAgICAgfVxyXG4gICAgIH1cclxuICAgICBcclxuICAgICAuYmFyOm50aC1jaGlsZCgxKSAgeyBsZWZ0OiAxcHg7IGFuaW1hdGlvbi1kdXJhdGlvbjogNDc0bXM7IH1cclxuICAgICAuYmFyOm50aC1jaGlsZCgyKSAgeyBsZWZ0OiAyMHB4OyBhbmltYXRpb24tZHVyYXRpb246IDQzM21zOyB9XHJcbiAgICAgLmJhcjpudGgtY2hpbGQoMykgIHsgbGVmdDogMzZweDsgYW5pbWF0aW9uLWR1cmF0aW9uOiA0MDdtczsgfVxyXG4gICAgIC5iYXI6bnRoLWNoaWxkKDQpICB7IGxlZnQ6IDUycHg7IGFuaW1hdGlvbi1kdXJhdGlvbjogNDU4bXM7IH1cclxuICAgICAuYmFyOm50aC1jaGlsZCg1KSAgeyBsZWZ0OiA2OHB4OyBhbmltYXRpb24tZHVyYXRpb246IDQwMG1zOyB9XHJcbiAgICAgLmJhcjpudGgtY2hpbGQoNikgIHsgbGVmdDogODRweDsgYW5pbWF0aW9uLWR1cmF0aW9uOiA0MjdtczsgfVxyXG4gICAgIC5iYXI6bnRoLWNoaWxkKDcpICB7IGxlZnQ6IDEwMHB4OyBhbmltYXRpb24tZHVyYXRpb246IDQ0MW1zOyB9XHJcbiAgICAgLmJhcjpudGgtY2hpbGQoOCkgIHsgbGVmdDogMTE2cHg7IGFuaW1hdGlvbi1kdXJhdGlvbjogNDE5bXM7IH1cclxuICAgICAuYmFyOm50aC1jaGlsZCg5KSAgeyBsZWZ0OiAxMzJweDsgYW5pbWF0aW9uLWR1cmF0aW9uOiA0ODdtczsgfVxyXG4gICAgIC5iYXI6bnRoLWNoaWxkKDEwKSB7IGxlZnQ6IDE0OHB4OyBhbmltYXRpb24tZHVyYXRpb246IDQ0Mm1zOyB9XHJcblxyXG4gICAgLnV0dWJlSWNvbntcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IDE2JTtcclxuICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB0b3A6IDg1JTtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbiAgICAgICAgei1pbmRleDogOTk5O1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgICB9XHJcbiAgICAudXR1YmVUaXRsZXtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IDEyJTtcclxuICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB0b3A6IDEwJTtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbiAgICAgICAgei1pbmRleDogOTk5O1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTUwJTtcclxuICAgICAgICAudGl0bGVObXtcclxuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5pY29uc3tcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgZmxleC1ncm93OiAxO1xyXG4gICAgfVxyXG4gICAgXHJcbn0iLCIucGxheXIge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiA5OCU7XG4gIG1hcmdpbjogYXV0bztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLnBsYXlyIC5zY3JlZW5Td2FwIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogOTglO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuLnBsYXlyIC5iYXJzIHtcbiAgaGVpZ2h0OiAzMHB4O1xuICBsZWZ0OiA1MCU7XG4gIG1hcmdpbjogMHB4IDAgMCAtODBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgd2lkdGg6IDE2MHB4O1xufVxuLnBsYXlyIC5iYXIge1xuICBiYWNrZ3JvdW5kOiAjNjY2O1xuICBib3R0b206IDFweDtcbiAgaGVpZ2h0OiAzMHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMnB4O1xuICBhbmltYXRpb246IHNvdW5kIDBtcyAtODAwbXMgbGluZWFyIGluZmluaXRlIGFsdGVybmF0ZTtcbn1cbkBrZXlmcmFtZXMgc291bmQge1xuICAwJSB7XG4gICAgb3BhY2l0eTogMC4zNTtcbiAgICBoZWlnaHQ6IDE1cHg7XG4gIH1cbiAgMTAwJSB7XG4gICAgb3BhY2l0eTogMTtcbiAgICBoZWlnaHQ6IDcwcHg7XG4gIH1cbn1cbi5wbGF5ciAuYmFyOm50aC1jaGlsZCgxKSB7XG4gIGxlZnQ6IDFweDtcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiA0NzRtcztcbn1cbi5wbGF5ciAuYmFyOm50aC1jaGlsZCgyKSB7XG4gIGxlZnQ6IDIwcHg7XG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogNDMzbXM7XG59XG4ucGxheXIgLmJhcjpudGgtY2hpbGQoMykge1xuICBsZWZ0OiAzNnB4O1xuICBhbmltYXRpb24tZHVyYXRpb246IDQwN21zO1xufVxuLnBsYXlyIC5iYXI6bnRoLWNoaWxkKDQpIHtcbiAgbGVmdDogNTJweDtcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiA0NThtcztcbn1cbi5wbGF5ciAuYmFyOm50aC1jaGlsZCg1KSB7XG4gIGxlZnQ6IDY4cHg7XG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogNDAwbXM7XG59XG4ucGxheXIgLmJhcjpudGgtY2hpbGQoNikge1xuICBsZWZ0OiA4NHB4O1xuICBhbmltYXRpb24tZHVyYXRpb246IDQyN21zO1xufVxuLnBsYXlyIC5iYXI6bnRoLWNoaWxkKDcpIHtcbiAgbGVmdDogMTAwcHg7XG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogNDQxbXM7XG59XG4ucGxheXIgLmJhcjpudGgtY2hpbGQoOCkge1xuICBsZWZ0OiAxMTZweDtcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiA0MTltcztcbn1cbi5wbGF5ciAuYmFyOm50aC1jaGlsZCg5KSB7XG4gIGxlZnQ6IDEzMnB4O1xuICBhbmltYXRpb24tZHVyYXRpb246IDQ4N21zO1xufVxuLnBsYXlyIC5iYXI6bnRoLWNoaWxkKDEwKSB7XG4gIGxlZnQ6IDE0OHB4O1xuICBhbmltYXRpb24tZHVyYXRpb246IDQ0Mm1zO1xufVxuLnBsYXlyIC51dHViZUljb24ge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxNiU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA4NSU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgei1pbmRleDogOTk5O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbn1cbi5wbGF5ciAudXR1YmVUaXRsZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEyJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDEwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICB6LWluZGV4OiA5OTk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgZm9udC1zaXplOiAxNTAlO1xufVxuLnBsYXlyIC51dHViZVRpdGxlIC50aXRsZU5tIHtcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xufVxuLnBsYXlyIC5pY29ucyB7XG4gIGhlaWdodDogMTAwJTtcbiAgZmxleC1ncm93OiAxO1xufSJdfQ== */");
            /***/ 
        }),
        /***/ "./src/app/player/player.component.ts": 
        /*!********************************************!*\
          !*** ./src/app/player/player.component.ts ***!
          \********************************************/
        /*! exports provided: PlayerComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayerComponent", function () { return PlayerComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var PlayerComponent = /** @class */ (function () {
                function PlayerComponent() {
                    this.onIndexChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
                    this.id = '';
                    this.showYoutube = false;
                    this.paused = true;
                }
                PlayerComponent.prototype.OnIndChanges = function () {
                    console.log(this.currentIndex);
                    this.onIndexChange.emit(this.currentIndex);
                };
                PlayerComponent.prototype.ngOnInit = function () {
                };
                PlayerComponent.prototype.onResize = function (event) {
                    this.videoHgt = this.outpt.nativeElement.offsetHeight;
                    this.videoWdt = this.outpt.nativeElement.offsetWidth;
                    this.player.setSize(this.videoWdt, this.videoHgt);
                };
                PlayerComponent.prototype.savePlayer = function (player) {
                    this.player = player;
                    this.videoHgt = this.outpt.nativeElement.offsetHeight;
                    this.videoWdt = this.outpt.nativeElement.offsetWidth;
                    this.player.setSize(this.videoWdt, this.videoHgt);
                    if (this.playerQueue.length == 0) {
                        this.currentIndex = -1;
                        this.OnIndChanges();
                    }
                    else {
                        console.log("load1");
                        this.currentIndex = 0;
                        this.OnIndChanges();
                        this.player.loadVideoById(this.playerQueue[0].videoId);
                        this.pause();
                    }
                };
                PlayerComponent.prototype.play = function () {
                    console.log(this.player.getPlayerState);
                    if (this.playerQueue.length == 0) {
                        return;
                    }
                    if (this.currentIndex == -1) {
                        console.log("load2");
                        this.player.loadVideoById(this.playerQueue[0].videoId);
                        this.currentIndex = 0;
                        this.OnIndChanges();
                        this.paused = false;
                        return;
                    }
                    this.player.playVideo();
                    this.paused = false;
                };
                PlayerComponent.prototype.pause = function () {
                    this.paused = true;
                    this.player.pauseVideo();
                };
                PlayerComponent.prototype.next = function () {
                    if (this.playerQueue.length == 0) {
                        return;
                    }
                    if (this.currentIndex == -1) {
                        this.currentIndex++;
                    }
                    this.currentIndex = this.currentIndex + 1 == this.playerQueue.length ? 0 : this.currentIndex + 1;
                    this.OnIndChanges();
                    this.player.loadVideoById(this.playerQueue[this.currentIndex].videoId);
                    if (this.paused) {
                        this.pause();
                    }
                };
                PlayerComponent.prototype.previous = function () {
                    if (this.playerQueue.length == 0) {
                        return;
                    }
                    if (this.currentIndex == -1) {
                        this.currentIndex++;
                    }
                    this.currentIndex = this.currentIndex == 0 ? this.playerQueue.length - 1 : this.currentIndex - 1;
                    this.OnIndChanges();
                    this.player.loadVideoById(this.playerQueue[this.currentIndex].videoId);
                    if (this.paused) {
                        this.pause();
                    }
                };
                PlayerComponent.prototype.onStateChange = function (event) {
                    console.log('player state', event);
                    if (event.data == 0) {
                        this.next();
                    }
                    if (event.data == 2 && !this.paused) {
                        this.play();
                    }
                };
                return PlayerComponent;
            }());
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], PlayerComponent.prototype, "playerQueue", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], PlayerComponent.prototype, "currentIndex", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
            ], PlayerComponent.prototype, "onIndexChange", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("outpt", { read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], static: false })
            ], PlayerComponent.prototype, "outpt", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:resize', ['$event'])
            ], PlayerComponent.prototype, "onResize", null);
            PlayerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-player',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./player.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/player/player.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./player.component.scss */ "./src/app/player/player.component.scss")).default]
                })
            ], PlayerComponent);
            /***/ 
        }),
        /***/ "./src/app/queue/queue.component.scss": 
        /*!********************************************!*\
          !*** ./src/app/queue/queue.component.scss ***!
          \********************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".queue {\n  height: 100%;\n  width: 98%;\n  margin: auto;\n  position: relative;\n}\n.queue .box {\n  width: 100%;\n  height: 98%;\n  background-color: rgba(255, 255, 255, 0.3);\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n  border-radius: 5px;\n  overflow: auto;\n}\n.queue .queElements {\n  width: 95%;\n  height: 10%;\n  margin: auto;\n  position: relative;\n}\n.queue .queueElem {\n  width: 100%;\n  height: 90%;\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n  background: rgba(165, 42, 42, 0.5);\n  display: flex;\n  justify-content: flex-start;\n}\n.queue .queueElem.current {\n  background: brown;\n}\n.queue .thumbNail {\n  height: 100%;\n  width: 30%;\n  margin: auto;\n  position: relative;\n}\n.queue .thumbNail > img {\n  height: 90%;\n  width: 100%;\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n  border-radius: 50%;\n}\n.queue .songTitle {\n  height: 100%;\n  width: 65%;\n}\n.example-list {\n  width: 500px;\n  max-width: 100%;\n  min-height: 60px;\n  padding-top: 5px;\n  display: block;\n  background: white;\n  border-radius: 4px;\n}\n.example-box {\n  width: 95%;\n  margin: auto;\n  margin-top: 5px;\n  height: 60px;\n  padding: 1%;\n  color: white;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: flex-start;\n  box-sizing: border-box;\n  cursor: move;\n  background: rgba(0, 0, 0, 0.6);\n  border-radius: 5px;\n  font-size: 100%;\n  position: relative;\n}\n.example-box .thumbNail {\n  width: 60px;\n  margin-left: 5px;\n  margin-right: 5px;\n  position: relative;\n}\n.example-box .thumbNail > img {\n  height: 90%;\n  width: auto;\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n  border-radius: 50%;\n}\n.example-box .songTitle {\n  height: auto;\n  width: auto;\n  padding-left: 5%;\n  padding-right: 5%;\n  padding-top: 3%;\n  padding-bottom: 2%;\n}\n.example-box .closer {\n  position: absolute;\n  top: 8px;\n  right: 8px;\n}\n.example-box .closer .icons {\n  height: 15px;\n  width: 15px;\n  rotate: 90;\n}\n.cdk-drag-preview {\n  box-sizing: border-box;\n  border-radius: 4px;\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12);\n}\n.cdk-drag-placeholder {\n  opacity: 0;\n}\n.cdk-drag-animating {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n.example-box:last-child {\n  border: none;\n}\n.example-list.cdk-drop-list-dragging .example-box:not(.cdk-drag-placeholder) {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n.current {\n  background: rgba(0, 0, 0, 0.9);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcXVldWUvRDpcXEFuZ3VsYXJcXE9TTS9zcmNcXGFwcFxccXVldWVcXHF1ZXVlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9xdWV1ZS9xdWV1ZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FDQ0o7QURBSTtFQUNJLFdBQUE7RUFDQSxXQUFBO0VBQ0EsMENBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSwyQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBQ0VSO0FEQUk7RUFDSSxVQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQ0VSO0FEQUk7RUFDSSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLDJCQUFBO0VBQ0Esa0NBQUE7RUFDQSxhQUFBO0VBQ0EsMkJBQUE7QUNFUjtBREFJO0VBQ0ksaUJBQUE7QUNFUjtBREFJO0VBQ0ksWUFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUNFUjtBRERRO0VBQ0ksV0FBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSwyQkFBQTtFQUNBLGtCQUFBO0FDR1o7QURBSTtFQUNJLFlBQUE7RUFDQSxVQUFBO0FDRVI7QURHQTtFQUNJLFlBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FDQUo7QURJRTtFQUNFLFVBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsMkJBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7RUFDQSw4QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FDREo7QURFSTtFQUNJLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUNBUjtBRENRO0VBQ0ksV0FBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSwyQkFBQTtFQUNBLGtCQUFBO0FDQ1o7QURFSTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQ0FSO0FERUk7RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxVQUFBO0FDQU47QURDTTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtBQ0NSO0FESUU7RUFDRSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EscUhBQUE7QUNESjtBRE1FO0VBQ0UsVUFBQTtBQ0hKO0FETUU7RUFDRSxzREFBQTtBQ0hKO0FETUU7RUFDRSxZQUFBO0FDSEo7QURNRTtFQUNFLHNEQUFBO0FDSEo7QURNRTtFQUNFLDhCQUFBO0FDSEoiLCJmaWxlIjoic3JjL2FwcC9xdWV1ZS9xdWV1ZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5xdWV1ZXtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHdpZHRoOiA5OCU7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAuYm94e1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogOTglO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zKTtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgdG9wOiA1MCU7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICBvdmVyZmxvdzogYXV0bztcclxuICAgIH1cclxuICAgIC5xdWVFbGVtZW50c3tcclxuICAgICAgICB3aWR0aDogOTUlO1xyXG4gICAgICAgIGhlaWdodDogMTAlO1xyXG4gICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB9XHJcbiAgICAucXVldWVFbGVte1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogOTAlO1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB0b3A6IDUwJTtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbiAgICAgICAgYmFja2dyb3VuZDogcmdiYSgxNjUsIDQyLCA0MiwgMC41KTtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICAgIH1cclxuICAgIC5xdWV1ZUVsZW0uY3VycmVudHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiBicm93bjtcclxuICAgIH1cclxuICAgIC50aHVtYk5haWx7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIHdpZHRoOiAzMCU7XHJcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICA+aW1ne1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDkwJTtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgdG9wOiA1MCU7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5zb25nVGl0bGV7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIHdpZHRoOiA2NSU7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIFxyXG59XHJcbi5leGFtcGxlLWxpc3Qge1xyXG4gICAgd2lkdGg6IDUwMHB4O1xyXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgbWluLWhlaWdodDogNjBweDtcclxuICAgIHBhZGRpbmctdG9wOiA1cHg7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgXHJcbiAgfVxyXG4gIFxyXG4gIC5leGFtcGxlLWJveCB7XHJcbiAgICB3aWR0aDogOTUlO1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgbWFyZ2luLXRvcDogNXB4O1xyXG4gICAgaGVpZ2h0OiA2MHB4O1xyXG4gICAgcGFkZGluZzogMSU7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgY3Vyc29yOiBtb3ZlO1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjYpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4OyAgICBcclxuICAgIGZvbnQtc2l6ZTogMTAwJTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIC50aHVtYk5haWx7XHJcbiAgICAgICAgd2lkdGg6IDYwcHg7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDVweDtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDVweDtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgPmltZ3tcclxuICAgICAgICAgICAgaGVpZ2h0OiA5MCU7XHJcbiAgICAgICAgICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIHRvcDogNTAlO1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAuc29uZ1RpdGxle1xyXG4gICAgICAgIGhlaWdodDogYXV0bztcclxuICAgICAgICB3aWR0aDogYXV0bztcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDUlO1xyXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDUlO1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiAzJTtcclxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMiU7XHJcbiAgICB9XHJcbiAgICAuY2xvc2Vye1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIHRvcDogOHB4O1xyXG4gICAgICByaWdodDogOHB4O1xyXG4gICAgICAuaWNvbnN7XHJcbiAgICAgICAgaGVpZ2h0OiAxNXB4O1xyXG4gICAgICAgIHdpZHRoOiAxNXB4O1xyXG4gICAgICAgIHJvdGF0ZTogKDkwKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICAuY2RrLWRyYWctcHJldmlldyB7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgYm94LXNoYWRvdzogMCA1cHggNXB4IC0zcHggcmdiYSgwLCAwLCAwLCAwLjIpLFxyXG4gICAgICAgICAgICAgICAgMCA4cHggMTBweCAxcHggcmdiYSgwLCAwLCAwLCAwLjE0KSxcclxuICAgICAgICAgICAgICAgIDAgM3B4IDE0cHggMnB4IHJnYmEoMCwgMCwgMCwgMC4xMik7XHJcbiAgfVxyXG4gIFxyXG4gIC5jZGstZHJhZy1wbGFjZWhvbGRlciB7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gIH1cclxuICBcclxuICAuY2RrLWRyYWctYW5pbWF0aW5nIHtcclxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAyNTBtcyBjdWJpYy1iZXppZXIoMCwgMCwgMC4yLCAxKTtcclxuICB9XHJcbiAgXHJcbiAgLmV4YW1wbGUtYm94Omxhc3QtY2hpbGQge1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gIH1cclxuICBcclxuICAuZXhhbXBsZS1saXN0LmNkay1kcm9wLWxpc3QtZHJhZ2dpbmcgLmV4YW1wbGUtYm94Om5vdCguY2RrLWRyYWctcGxhY2Vob2xkZXIpIHtcclxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAyNTBtcyBjdWJpYy1iZXppZXIoMCwgMCwgMC4yLCAxKTtcclxuICB9XHJcblxyXG4gIC5jdXJyZW50e1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjkpO1xyXG4gIH0iLCIucXVldWUge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiA5OCU7XG4gIG1hcmdpbjogYXV0bztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLnF1ZXVlIC5ib3gge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA5OCU7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zKTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIG92ZXJmbG93OiBhdXRvO1xufVxuLnF1ZXVlIC5xdWVFbGVtZW50cyB7XG4gIHdpZHRoOiA5NSU7XG4gIGhlaWdodDogMTAlO1xuICBtYXJnaW46IGF1dG87XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5xdWV1ZSAucXVldWVFbGVtIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogOTAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gIGJhY2tncm91bmQ6IHJnYmEoMTY1LCA0MiwgNDIsIDAuNSk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbn1cbi5xdWV1ZSAucXVldWVFbGVtLmN1cnJlbnQge1xuICBiYWNrZ3JvdW5kOiBicm93bjtcbn1cbi5xdWV1ZSAudGh1bWJOYWlsIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMzAlO1xuICBtYXJnaW46IGF1dG87XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5xdWV1ZSAudGh1bWJOYWlsID4gaW1nIHtcbiAgaGVpZ2h0OiA5MCU7XG4gIHdpZHRoOiAxMDAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cbi5xdWV1ZSAuc29uZ1RpdGxlIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogNjUlO1xufVxuXG4uZXhhbXBsZS1saXN0IHtcbiAgd2lkdGg6IDUwMHB4O1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIG1pbi1oZWlnaHQ6IDYwcHg7XG4gIHBhZGRpbmctdG9wOiA1cHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xufVxuXG4uZXhhbXBsZS1ib3gge1xuICB3aWR0aDogOTUlO1xuICBtYXJnaW46IGF1dG87XG4gIG1hcmdpbi10b3A6IDVweDtcbiAgaGVpZ2h0OiA2MHB4O1xuICBwYWRkaW5nOiAxJTtcbiAgY29sb3I6IHdoaXRlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGN1cnNvcjogbW92ZTtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjYpO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGZvbnQtc2l6ZTogMTAwJTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmV4YW1wbGUtYm94IC50aHVtYk5haWwge1xuICB3aWR0aDogNjBweDtcbiAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5leGFtcGxlLWJveCAudGh1bWJOYWlsID4gaW1nIHtcbiAgaGVpZ2h0OiA5MCU7XG4gIHdpZHRoOiBhdXRvO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cbi5leGFtcGxlLWJveCAuc29uZ1RpdGxlIHtcbiAgaGVpZ2h0OiBhdXRvO1xuICB3aWR0aDogYXV0bztcbiAgcGFkZGluZy1sZWZ0OiA1JTtcbiAgcGFkZGluZy1yaWdodDogNSU7XG4gIHBhZGRpbmctdG9wOiAzJTtcbiAgcGFkZGluZy1ib3R0b206IDIlO1xufVxuLmV4YW1wbGUtYm94IC5jbG9zZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogOHB4O1xuICByaWdodDogOHB4O1xufVxuLmV4YW1wbGUtYm94IC5jbG9zZXIgLmljb25zIHtcbiAgaGVpZ2h0OiAxNXB4O1xuICB3aWR0aDogMTVweDtcbiAgcm90YXRlOiA5MDtcbn1cblxuLmNkay1kcmFnLXByZXZpZXcge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGJveC1zaGFkb3c6IDAgNXB4IDVweCAtM3B4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMCA4cHggMTBweCAxcHggcmdiYSgwLCAwLCAwLCAwLjE0KSwgMCAzcHggMTRweCAycHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcbn1cblxuLmNkay1kcmFnLXBsYWNlaG9sZGVyIHtcbiAgb3BhY2l0eTogMDtcbn1cblxuLmNkay1kcmFnLWFuaW1hdGluZyB7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAyNTBtcyBjdWJpYy1iZXppZXIoMCwgMCwgMC4yLCAxKTtcbn1cblxuLmV4YW1wbGUtYm94Omxhc3QtY2hpbGQge1xuICBib3JkZXI6IG5vbmU7XG59XG5cbi5leGFtcGxlLWxpc3QuY2RrLWRyb3AtbGlzdC1kcmFnZ2luZyAuZXhhbXBsZS1ib3g6bm90KC5jZGstZHJhZy1wbGFjZWhvbGRlcikge1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMjUwbXMgY3ViaWMtYmV6aWVyKDAsIDAsIDAuMiwgMSk7XG59XG5cbi5jdXJyZW50IHtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjkpO1xufSJdfQ== */");
            /***/ 
        }),
        /***/ "./src/app/queue/queue.component.ts": 
        /*!******************************************!*\
          !*** ./src/app/queue/queue.component.ts ***!
          \******************************************/
        /*! exports provided: QueueComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QueueComponent", function () { return QueueComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/esm2015/drag-drop.js");
            /* harmony import */ var _services_musicDataFetcher_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/musicDataFetcher.service */ "./src/app/services/musicDataFetcher.service.ts");
            /* harmony import */ var _services_DataFetcher_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/DataFetcher.service */ "./src/app/services/DataFetcher.service.ts");
            var QueueComponent = /** @class */ (function () {
                function QueueComponent(musicDataFetcher) {
                    this.musicDataFetcher = musicDataFetcher;
                }
                QueueComponent.prototype.ngOnInit = function () {
                };
                QueueComponent.prototype.drop = function (event) {
                    //console.log(event);
                    if (event.previousIndex == this.currentIndex) {
                        return;
                    }
                    if (event.previousIndex > this.currentIndex && event.currentIndex <= this.currentIndex) {
                        this.currentIndex++;
                    }
                    else if (event.previousIndex < this.currentIndex && event.currentIndex >= this.currentIndex) {
                        this.currentIndex--;
                    }
                    Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__["moveItemInArray"])(this.playerQueue, event.previousIndex, event.currentIndex);
                };
                QueueComponent.prototype.remSong = function (index) {
                    console.log(this.playerQueue[index]);
                    if (sessionStorage.getItem('loggedIn') && sessionStorage.getItem('loggedIn') == 'true') {
                        var user = sessionStorage.getItem('username') ? sessionStorage.getItem('username') : 'Guest';
                        if (user != 'Guest') {
                            var videoElem = this.playerQueue[index];
                            this.musicDataFetcher.deleteSong(videoElem).subscribe(function (data) {
                                console.log(data);
                            });
                        }
                    }
                    this.playerQueue.splice(index, 1);
                };
                return QueueComponent;
            }());
            QueueComponent.ctorParameters = function () { return [
                { type: _services_musicDataFetcher_service__WEBPACK_IMPORTED_MODULE_3__["MusicDataFetcher"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], QueueComponent.prototype, "playerQueue", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], QueueComponent.prototype, "currentIndex", void 0);
            QueueComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-queue',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./queue.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/queue/queue.component.html")).default,
                    providers: [_services_musicDataFetcher_service__WEBPACK_IMPORTED_MODULE_3__["MusicDataFetcher"], _services_DataFetcher_service__WEBPACK_IMPORTED_MODULE_4__["DataFetcher"]],
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./queue.component.scss */ "./src/app/queue/queue.component.scss")).default]
                })
            ], QueueComponent);
            /***/ 
        }),
        /***/ "./src/app/services/DataFetcher.service.ts": 
        /*!*************************************************!*\
          !*** ./src/app/services/DataFetcher.service.ts ***!
          \*************************************************/
        /*! exports provided: DataFetcher */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataFetcher", function () { return DataFetcher; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            var DataFetcher = /** @class */ (function () {
                function DataFetcher(http) {
                    this.http = http;
                    this.baseUrl = "https://osm-server.herokuapp.com/";
                    this.httpOptions = {
                        headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                            'Access-Control-Allow-Origin': '*',
                            'Authorization': 'authkey',
                            'userid': '1'
                        })
                    };
                }
                DataFetcher.prototype.get = function (uri) {
                    var url = this.baseUrl.concat(uri);
                    return this.http.get(url, this.httpOptions);
                };
                DataFetcher.prototype.post = function (uri, request) {
                    var url = this.baseUrl.concat(uri);
                    return this.http.post(url, request, this.httpOptions);
                };
                return DataFetcher;
            }());
            DataFetcher.ctorParameters = function () { return [
                { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
            ]; };
            DataFetcher = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
            ], DataFetcher);
            /***/ 
        }),
        /***/ "./src/app/services/loginDataFetche.service.ts": 
        /*!*****************************************************!*\
          !*** ./src/app/services/loginDataFetche.service.ts ***!
          \*****************************************************/
        /*! exports provided: LoginDataFetcher */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginDataFetcher", function () { return LoginDataFetcher; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _DataFetcher_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DataFetcher.service */ "./src/app/services/DataFetcher.service.ts");
            var LoginDataFetcher = /** @class */ (function () {
                function LoginDataFetcher(dataFetcher) {
                    this.dataFetcher = dataFetcher;
                }
                LoginDataFetcher.prototype.getAllUsers = function () {
                    var uri = "login/getAllUsername";
                    return this.dataFetcher.get(uri);
                };
                LoginDataFetcher.prototype.getAllEmails = function () {
                    var uri = "login/getAllEmail";
                    return this.dataFetcher.get(uri);
                };
                LoginDataFetcher.prototype.checkPassword = function (credential) {
                    var uri = "login/check/password";
                    return this.dataFetcher.post(uri, credential);
                };
                LoginDataFetcher.prototype.addUser = function (user) {
                    var uri = "login/saveUser";
                    return this.dataFetcher.post(uri, user);
                };
                LoginDataFetcher.prototype.getUser = function (user) {
                    var uri = "login/getUser/" + user;
                    return this.dataFetcher.get(uri);
                };
                LoginDataFetcher.prototype.sendOTP = function (user) {
                    var uri = "mail/sendMail";
                    return this.dataFetcher.post(uri, user);
                };
                LoginDataFetcher.prototype.getOTP = function () {
                    var uri = "mail/getOTP";
                    return this.dataFetcher.get(uri);
                };
                return LoginDataFetcher;
            }());
            LoginDataFetcher.ctorParameters = function () { return [
                { type: _DataFetcher_service__WEBPACK_IMPORTED_MODULE_2__["DataFetcher"] }
            ]; };
            LoginDataFetcher = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
            ], LoginDataFetcher);
            /***/ 
        }),
        /***/ "./src/app/services/musicDataFetcher.service.ts": 
        /*!******************************************************!*\
          !*** ./src/app/services/musicDataFetcher.service.ts ***!
          \******************************************************/
        /*! exports provided: MusicDataFetcher */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MusicDataFetcher", function () { return MusicDataFetcher; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _DataFetcher_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DataFetcher.service */ "./src/app/services/DataFetcher.service.ts");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var MusicDataFetcher = /** @class */ (function () {
                function MusicDataFetcher(dataFetcher) {
                    this.dataFetcher = dataFetcher;
                }
                MusicDataFetcher.prototype.getAllSongs = function (user) {
                    var uri = "music/getAll/" + user;
                    return this.dataFetcher.get(uri);
                };
                MusicDataFetcher.prototype.saveSong = function (item) {
                    var uri = "music/saveItem";
                    return this.dataFetcher.post(uri, item);
                };
                MusicDataFetcher.prototype.deleteSong = function (item) {
                    var uri = "music/deleteItem";
                    return this.dataFetcher.post(uri, item);
                };
                return MusicDataFetcher;
            }());
            MusicDataFetcher.ctorParameters = function () { return [
                { type: _DataFetcher_service__WEBPACK_IMPORTED_MODULE_1__["DataFetcher"] }
            ]; };
            MusicDataFetcher = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])()
            ], MusicDataFetcher);
            /***/ 
        }),
        /***/ "./src/app/services/screen-size.service.ts": 
        /*!*************************************************!*\
          !*** ./src/app/services/screen-size.service.ts ***!
          \*************************************************/
        /*! exports provided: screenSizeState */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "screenSizeState", function () { return screenSizeState; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
            var screenSizeState = /** @class */ (function () {
                function screenSizeState() {
                    this.screenSizeSource = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]({ width: 1280, height: 720, isMobile: true });
                    this.screenSize = this.screenSizeSource.asObservable();
                }
                screenSizeState.prototype.updatedScreenSize = function (wdt, hgt, isMob) {
                    var newScreen = {
                        width: wdt,
                        height: hgt,
                        isMobile: isMob
                    };
                    this.screenSizeSource.next(newScreen);
                };
                return screenSizeState;
            }());
            screenSizeState = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
            ], screenSizeState);
            /***/ 
        }),
        /***/ "./src/app/sign-up/sign-up-style.service.ts": 
        /*!**************************************************!*\
          !*** ./src/app/sign-up/sign-up-style.service.ts ***!
          \**************************************************/
        /*! exports provided: signupStyleService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "signupStyleService", function () { return signupStyleService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var signupStyleService = /** @class */ (function () {
                function signupStyleService() {
                }
                signupStyleService.prototype.loginStyleSetter = function (scrSz) {
                    var boxSize = 0.6 * Math.min(scrSz.width, scrSz.height);
                    return {
                        'width': boxSize + 'px',
                        'height': boxSize + 'px',
                        'background-color': 'rgba(0,0,0,0.8)',
                        'color': 'white',
                        'position': 'absolute',
                        'top': (scrSz.height - boxSize) / 2 + 'px',
                        'left': (scrSz.width - boxSize) / 2 + 'px',
                        'box-shadow': '0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)'
                    };
                };
                signupStyleService.prototype.logoStyleSetter = function (scrSz) {
                    var boxSize = 0.6 * Math.min(scrSz.width, scrSz.height);
                    return {
                        'width': boxSize + 'px',
                        'height': (scrSz.height - boxSize) / 2 + 'px',
                        'position': 'absolute',
                        'top': '0px',
                        'padding-top': (scrSz.height - boxSize) / 8 + 'px',
                        'left': (scrSz.width - boxSize) / 2 + 'px',
                        'font-size': (scrSz.height - boxSize) / 20 + 'px'
                    };
                };
                signupStyleService.prototype.abbrLogoStyler = function (scrSz) {
                    var boxSize = 0.6 * Math.min(scrSz.width, scrSz.height);
                    return {
                        'line-height': ((scrSz.height - boxSize) / 5) + 'px',
                    };
                };
                signupStyleService.prototype.fullLogoStyler = function (scrSz) {
                    var boxSize = 0.6 * Math.min(scrSz.width, scrSz.height);
                    return {
                        'line-height': '1px',
                    };
                };
                signupStyleService.prototype.tabTextSizeSetter = function (scrSz) {
                    var boxSize = 0.6 * Math.min(scrSz.width, scrSz.height);
                    var tabSize = 0.15 * boxSize;
                    return {
                        'font-size': (0.4 * tabSize) + 'px',
                    };
                };
                signupStyleService.prototype.inputTextSizeSetter = function (scrSz) {
                    var boxSize = 0.6 * Math.min(scrSz.width, scrSz.height);
                    var tabSize = 0.15 * boxSize;
                    return {
                        'font-size': (0.3 * tabSize) + 'px',
                    };
                };
                signupStyleService.prototype.tabTextAlignSizeSetter = function (scrSz) {
                    var boxSize = 0.6 * Math.min(scrSz.width, scrSz.height);
                    var tabSize = 0.15 * boxSize;
                    return {
                        'height': (tabSize) + 'px',
                        'line-height': (tabSize) + 'px',
                    };
                };
                return signupStyleService;
            }());
            signupStyleService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
            ], signupStyleService);
            /***/ 
        }),
        /***/ "./src/app/sign-up/sign-up.component.scss": 
        /*!************************************************!*\
          !*** ./src/app/sign-up/sign-up.component.scss ***!
          \************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".LogoContainer {\n  vertical-align: middle;\n}\n\n.abbrLogo {\n  font-size: 400%;\n  text-align: center;\n  font-family: \"Sedgwick Ave Display\", cursive;\n  -webkit-text-stroke: 1px black;\n  color: white;\n  text-shadow: 3px 3px 0 #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;\n}\n\n.fullLogo {\n  font-size: 150%;\n  text-align: center;\n  color: aliceblue;\n  font-family: \"Cookie\", cursive;\n}\n\n.loginTabs {\n  width: 100%;\n  height: 15%;\n  display: flex;\n  justify-content: space-evenly;\n  background-color: #009688;\n  color: #f5f5f5;\n}\n\n.loginTab {\n  width: 50%;\n  text-align: center;\n  vertical-align: middle;\n}\n\n.loginTabs .activeTab {\n  background-color: #42b1a7;\n}\n\n.loginFormSection, .regFormSection {\n  width: 100%;\n  height: 85%;\n}\n\n.loginputField {\n  width: 100%;\n  height: 25%;\n  align-content: center;\n}\n\n.loginputField > mat-form-field {\n  width: 84%;\n  height: 50%;\n  padding-left: 8%;\n  padding-top: 11%;\n}\n\n.loginputField > mat-error {\n  width: 84%;\n  padding-left: 8%;\n  padding-top: 3%;\n  font-size: 55%;\n  text-align: right;\n}\n\n.loginButton {\n  width: 100%;\n  height: 30%;\n  padding-top: 15%;\n}\n\n.loginButton .buttons {\n  height: 65%;\n  display: flex;\n  align-content: space-around;\n}\n\n.loginButton .buttons > button {\n  width: 34%;\n  height: 80%;\n  margin-left: 11%;\n  background-color: #009688;\n  color: #f5f5f5;\n}\n\n.loginButton .buttons > button:disabled {\n  background-color: #00968775;\n}\n\n.loginButton > mat-error {\n  width: 84%;\n  padding-left: 8%;\n  font-size: 70%;\n  text-align: center;\n}\n\n.reginputField {\n  width: 100%;\n  height: 17%;\n  align-content: center;\n}\n\n.reginputField > mat-form-field {\n  width: 84%;\n  height: 20%;\n  padding-left: 8%;\n  padding-top: 4%;\n}\n\n.reginputField > mat-error {\n  width: 84%;\n  padding-left: 8%;\n  padding-top: 3%;\n  font-size: 55%;\n  text-align: right;\n}\n\n.regButton {\n  width: 100%;\n  height: 28%;\n  padding-top: 9%;\n  display: flex;\n  align-content: space-around;\n}\n\n.regButton > button {\n  width: 34%;\n  height: 55%;\n  margin-left: 11%;\n  background-color: #009688;\n  color: #f5f5f5;\n}\n\n.regButton > button:disabled {\n  background-color: #00968775;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2lnbi11cC9EOlxcQW5ndWxhclxcT1NNL3NyY1xcYXBwXFxzaWduLXVwXFxzaWduLXVwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zaWduLXVwL3NpZ24tdXAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSxzQkFBQTtBQ0FKOztBRElBO0VBQ0ksZUFBQTtFQUNBLGtCQUFBO0VBQ0QsNENBQUE7RUFDQyw4QkFBQTtFQUNBLFlBQUE7RUFDQSwrRkFDSTtBQ0ZSOztBRFNBO0VBQ0ksZUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSw4QkFBQTtBQ05KOztBRFVBO0VBQ0ksV0FBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsNkJBQUE7RUFDQSx5QkFBQTtFQUNBLGNBQUE7QUNQSjs7QURTQTtFQUNJLFVBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0FDTko7O0FEU0E7RUFDSSx5QkFBQTtBQ05KOztBRFNBO0VBQ0ksV0FBQTtFQUNBLFdBQUE7QUNOSjs7QURTQTtFQUNJLFdBQUE7RUFDQSxXQUFBO0VBQ0EscUJBQUE7QUNOSjs7QURPSTtFQUNJLFVBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQ0xSOztBRE9JO0VBQ0ksVUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtBQ0xSOztBRFFBO0VBQ0ksV0FBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtBQ0xKOztBRE1JO0VBQ0ksV0FBQTtFQUNBLGFBQUE7RUFDQSwyQkFBQTtBQ0pSOztBRE1JO0VBQ0ksVUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0EsY0FBQTtBQ0pSOztBRE1JO0VBQ0ksMkJBQUE7QUNKUjs7QURPSTtFQUNJLFVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQ0xSOztBRFNBO0VBQ0ksV0FBQTtFQUNBLFdBQUE7RUFDQSxxQkFBQTtBQ05KOztBRE9JO0VBQ0ksVUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUNMUjs7QURPSTtFQUNJLFVBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7QUNMUjs7QURTQTtFQUNJLFdBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSwyQkFBQTtBQ05KOztBRE9JO0VBQ0ksVUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0EsY0FBQTtBQ0xSOztBRE9JO0VBQ0ksMkJBQUE7QUNMUiIsImZpbGUiOiJzcmMvYXBwL3NpZ24tdXAvc2lnbi11cC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4uTG9nb0NvbnRhaW5lcntcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbn1cclxuXHJcblxyXG4uYWJickxvZ297XHJcbiAgICBmb250LXNpemU6NDAwJTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgZm9udC1mYW1pbHk6ICdTZWRnd2ljayBBdmUgRGlzcGxheScsIGN1cnNpdmU7XHJcbiAgICAtd2Via2l0LXRleHQtc3Ryb2tlOiAxcHggYmxhY2s7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB0ZXh0LXNoYWRvdzpcclxuICAgICAgICAzcHggM3B4IDAgIzAwMCxcclxuICAgICAgICAtMXB4IC0xcHggMCAjMDAwLCAgXHJcbiAgICAgICAgMXB4IC0xcHggMCAjMDAwLFxyXG4gICAgICAgIC0xcHggMXB4IDAgIzAwMCxcclxuICAgICAgICAxcHggMXB4IDAgIzAwMDtcclxufVxyXG5cclxuLmZ1bGxMb2dve1xyXG4gICAgZm9udC1zaXplOjE1MCU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogYWxpY2VibHVlO1xyXG4gICAgZm9udC1mYW1pbHk6ICdDb29raWUnLCBjdXJzaXZlO1xyXG59XHJcblxyXG5cclxuLmxvZ2luVGFic3tcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxNSU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OnNwYWNlLWV2ZW5seTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDk2ODg7XHJcbiAgICBjb2xvcjogI2Y1ZjVmNTtcclxufVxyXG4ubG9naW5UYWJ7XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxufVxyXG5cclxuLmxvZ2luVGFicyAuYWN0aXZlVGFie1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzQyYjFhNztcclxufVxyXG5cclxuLmxvZ2luRm9ybVNlY3Rpb24sLnJlZ0Zvcm1TZWN0aW9ue1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDg1JTtcclxufVxyXG5cclxuLmxvZ2lucHV0RmllbGR7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMjUlO1xyXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gICAgPm1hdC1mb3JtLWZpZWxke1xyXG4gICAgICAgIHdpZHRoOiA4NCU7XHJcbiAgICAgICAgaGVpZ2h0OiA1MCU7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiA4JTtcclxuICAgICAgICBwYWRkaW5nLXRvcDogMTElO1xyXG4gICAgfVxyXG4gICAgPm1hdC1lcnJvcntcclxuICAgICAgICB3aWR0aDogODQlO1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogOCU7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDMlO1xyXG4gICAgICAgIGZvbnQtc2l6ZTo1NSU7XHJcbiAgICAgICAgdGV4dC1hbGlnbjpyaWdodCA7XHJcbiAgICB9XHJcbn1cclxuLmxvZ2luQnV0dG9ue1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDMwJTtcclxuICAgIHBhZGRpbmctdG9wOiAxNSU7XHJcbiAgICAuYnV0dG9uc3tcclxuICAgICAgICBoZWlnaHQ6IDY1JTtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGFsaWduLWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICAgIFxyXG4gICAgPmJ1dHRvbntcclxuICAgICAgICB3aWR0aDogMzQlO1xyXG4gICAgICAgIGhlaWdodDogODAlO1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxMSU7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAwOTY4ODtcclxuICAgICAgICBjb2xvcjogI2Y1ZjVmNTtcclxuICAgIH1cclxuICAgID5idXR0b246ZGlzYWJsZWR7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAwOTY4Nzc1O1xyXG4gICAgfVxyXG4gICAgfVxyXG4gICAgPm1hdC1lcnJvcntcclxuICAgICAgICB3aWR0aDogODQlO1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogOCU7XHJcbiAgICAgICAgZm9udC1zaXplOjcwJTtcclxuICAgICAgICB0ZXh0LWFsaWduOmNlbnRlciA7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5yZWdpbnB1dEZpZWxke1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDE3JTtcclxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgID5tYXQtZm9ybS1maWVsZHtcclxuICAgICAgICB3aWR0aDogODQlO1xyXG4gICAgICAgIGhlaWdodDogMjAlO1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogOCU7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDQlO1xyXG4gICAgfVxyXG4gICAgPm1hdC1lcnJvcntcclxuICAgICAgICB3aWR0aDogODQlO1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogOCU7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDMlO1xyXG4gICAgICAgIGZvbnQtc2l6ZTo1NSU7XHJcbiAgICAgICAgdGV4dC1hbGlnbjpyaWdodCA7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5yZWdCdXR0b257XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMjglO1xyXG4gICAgcGFkZGluZy10b3A6IDklO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICAgID5idXR0b257XHJcbiAgICAgICAgd2lkdGg6IDM0JTtcclxuICAgICAgICBoZWlnaHQ6IDU1JTtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMTElO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDk2ODg7XHJcbiAgICAgICAgY29sb3I6ICNmNWY1ZjU7XHJcbiAgICB9XHJcbiAgICA+YnV0dG9uOmRpc2FibGVke1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDk2ODc3NTtcclxuICAgIH1cclxufSIsIi5Mb2dvQ29udGFpbmVyIHtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cblxuLmFiYnJMb2dvIHtcbiAgZm9udC1zaXplOiA0MDAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtZmFtaWx5OiBcIlNlZGd3aWNrIEF2ZSBEaXNwbGF5XCIsIGN1cnNpdmU7XG4gIC13ZWJraXQtdGV4dC1zdHJva2U6IDFweCBibGFjaztcbiAgY29sb3I6IHdoaXRlO1xuICB0ZXh0LXNoYWRvdzogM3B4IDNweCAwICMwMDAsIC0xcHggLTFweCAwICMwMDAsIDFweCAtMXB4IDAgIzAwMCwgLTFweCAxcHggMCAjMDAwLCAxcHggMXB4IDAgIzAwMDtcbn1cblxuLmZ1bGxMb2dvIHtcbiAgZm9udC1zaXplOiAxNTAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiBhbGljZWJsdWU7XG4gIGZvbnQtZmFtaWx5OiBcIkNvb2tpZVwiLCBjdXJzaXZlO1xufVxuXG4ubG9naW5UYWJzIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTUlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwOTY4ODtcbiAgY29sb3I6ICNmNWY1ZjU7XG59XG5cbi5sb2dpblRhYiB7XG4gIHdpZHRoOiA1MCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cblxuLmxvZ2luVGFicyAuYWN0aXZlVGFiIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQyYjFhNztcbn1cblxuLmxvZ2luRm9ybVNlY3Rpb24sIC5yZWdGb3JtU2VjdGlvbiB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDg1JTtcbn1cblxuLmxvZ2lucHV0RmllbGQge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAyNSU7XG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbn1cbi5sb2dpbnB1dEZpZWxkID4gbWF0LWZvcm0tZmllbGQge1xuICB3aWR0aDogODQlO1xuICBoZWlnaHQ6IDUwJTtcbiAgcGFkZGluZy1sZWZ0OiA4JTtcbiAgcGFkZGluZy10b3A6IDExJTtcbn1cbi5sb2dpbnB1dEZpZWxkID4gbWF0LWVycm9yIHtcbiAgd2lkdGg6IDg0JTtcbiAgcGFkZGluZy1sZWZ0OiA4JTtcbiAgcGFkZGluZy10b3A6IDMlO1xuICBmb250LXNpemU6IDU1JTtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG5cbi5sb2dpbkJ1dHRvbiB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDMwJTtcbiAgcGFkZGluZy10b3A6IDE1JTtcbn1cbi5sb2dpbkJ1dHRvbiAuYnV0dG9ucyB7XG4gIGhlaWdodDogNjUlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG59XG4ubG9naW5CdXR0b24gLmJ1dHRvbnMgPiBidXR0b24ge1xuICB3aWR0aDogMzQlO1xuICBoZWlnaHQ6IDgwJTtcbiAgbWFyZ2luLWxlZnQ6IDExJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwOTY4ODtcbiAgY29sb3I6ICNmNWY1ZjU7XG59XG4ubG9naW5CdXR0b24gLmJ1dHRvbnMgPiBidXR0b246ZGlzYWJsZWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA5Njg3NzU7XG59XG4ubG9naW5CdXR0b24gPiBtYXQtZXJyb3Ige1xuICB3aWR0aDogODQlO1xuICBwYWRkaW5nLWxlZnQ6IDglO1xuICBmb250LXNpemU6IDcwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ucmVnaW5wdXRGaWVsZCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDE3JTtcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xufVxuLnJlZ2lucHV0RmllbGQgPiBtYXQtZm9ybS1maWVsZCB7XG4gIHdpZHRoOiA4NCU7XG4gIGhlaWdodDogMjAlO1xuICBwYWRkaW5nLWxlZnQ6IDglO1xuICBwYWRkaW5nLXRvcDogNCU7XG59XG4ucmVnaW5wdXRGaWVsZCA+IG1hdC1lcnJvciB7XG4gIHdpZHRoOiA4NCU7XG4gIHBhZGRpbmctbGVmdDogOCU7XG4gIHBhZGRpbmctdG9wOiAzJTtcbiAgZm9udC1zaXplOiA1NSU7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuXG4ucmVnQnV0dG9uIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMjglO1xuICBwYWRkaW5nLXRvcDogOSU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbn1cbi5yZWdCdXR0b24gPiBidXR0b24ge1xuICB3aWR0aDogMzQlO1xuICBoZWlnaHQ6IDU1JTtcbiAgbWFyZ2luLWxlZnQ6IDExJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwOTY4ODtcbiAgY29sb3I6ICNmNWY1ZjU7XG59XG4ucmVnQnV0dG9uID4gYnV0dG9uOmRpc2FibGVkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwOTY4Nzc1O1xufSJdfQ== */");
            /***/ 
        }),
        /***/ "./src/app/sign-up/sign-up.component.ts": 
        /*!**********************************************!*\
          !*** ./src/app/sign-up/sign-up.component.ts ***!
          \**********************************************/
        /*! exports provided: SignUpComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignUpComponent", function () { return SignUpComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _services_screen_size_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/screen-size.service */ "./src/app/services/screen-size.service.ts");
            /* harmony import */ var _sign_up_style_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sign-up-style.service */ "./src/app/sign-up/sign-up-style.service.ts");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _services_loginDataFetche_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/loginDataFetche.service */ "./src/app/services/loginDataFetche.service.ts");
            /* harmony import */ var _services_DataFetcher_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/DataFetcher.service */ "./src/app/services/DataFetcher.service.ts");
            /* harmony import */ var _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/text-field */ "./node_modules/@angular/cdk/esm2015/text-field.js");
            var SignUpComponent = /** @class */ (function () {
                function SignUpComponent(_autofill, dataFetcher, router, screenState, styleSetter) {
                    this._autofill = _autofill;
                    this.dataFetcher = dataFetcher;
                    this.router = router;
                    this.screenState = screenState;
                    this.styleSetter = styleSetter;
                    this.loginSelected = true;
                    this.regSelected = false;
                    this.otpSentOnce = false;
                    this.hidePwd = true;
                    this.username = '';
                    this.eml = '';
                    this.pwd = '';
                    this.otp = '';
                    this.otpVal = '-1';
                    this.errorEmailMsg = 'Invalid Email';
                    this.errorUserMsg = "Username can't be blank";
                    this.invalidEmail = true;
                    this.invalidPassword = true;
                    this.invalidUsername = true;
                    this.invalidOtp = true;
                    this.loginError = false;
                    this.loginErrorMsg = '';
                }
                SignUpComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.screenState.screenSize.subscribe(function (scrSz) {
                        _this.onScreensizeChange(scrSz);
                    });
                    this.dataFetcher.getAllUsers().subscribe(function (data) {
                        _this.allUsername = data;
                    });
                    this.dataFetcher.getAllEmails().subscribe(function (data) {
                        _this.allEmail = data;
                    });
                };
                SignUpComponent.prototype.ngAfterViewInit = function () {
                };
                SignUpComponent.prototype.showLoginError = function (message) {
                    var _this = this;
                    this.loginError = true;
                    this.loginErrorMsg = message;
                    setTimeout(function () {
                        _this.loginError = false;
                        _this.loginErrorMsg = '';
                    }, 5000);
                };
                SignUpComponent.prototype.resetModel = function () {
                    this.username = '';
                    this.pwd = '';
                    this.eml = '';
                    this.otp = '';
                    this.hidePwd = true;
                    this.otpSentOnce = false;
                    this.errorEmailMsg = 'Invalid Email';
                    this.errorUserMsg = "Username can't be blank";
                    this.invalidEmail = true;
                    this.invalidPassword = true;
                    this.invalidUsername = true;
                    this.invalidOtp = true;
                };
                SignUpComponent.prototype.onScreensizeChange = function (scrSz) {
                    this.loginStyle = this.styleSetter.loginStyleSetter(scrSz);
                    this.logoStyle = this.styleSetter.logoStyleSetter(scrSz);
                    this.abbrLogoStyle = this.styleSetter.abbrLogoStyler(scrSz);
                    this.fullLogoStyle = this.styleSetter.fullLogoStyler(scrSz);
                    this.tabTextStyle = this.styleSetter.tabTextSizeSetter(scrSz);
                    this.inputTextStyle = this.styleSetter.inputTextSizeSetter(scrSz);
                    this.tabTextAlignStyle = this.styleSetter.tabTextAlignSizeSetter(scrSz);
                };
                SignUpComponent.prototype.loginClicked = function () {
                    this.resetModel();
                    this.loginSelected = true;
                    this.regSelected = false;
                };
                SignUpComponent.prototype.registerClicked = function () {
                    this.resetModel();
                    this.loginSelected = false;
                    this.regSelected = true;
                };
                SignUpComponent.prototype.sendOTP = function () {
                    var _this = this;
                    this.otpSentOnce = true;
                    var user = {
                        username: this.username,
                        password: this.pwd,
                        email: this.eml
                    };
                    this.dataFetcher.sendOTP(user).subscribe(function (data) {
                        if (data == -1) {
                            alert("OTP send not successful");
                            _this.otpVal = '-1';
                        }
                        else {
                            _this.dataFetcher.getOTP().subscribe(function (data) {
                                var decrOTP = _this.otpDecryptor(JSON.stringify(data));
                                if (decrOTP == '-1') {
                                    alert("error fetching OTP");
                                    _this.otpVal = '-1';
                                }
                                else {
                                    _this.otpVal = '' + decrOTP;
                                }
                            });
                        }
                    });
                };
                SignUpComponent.prototype.otpDecryptor = function (value) {
                    var otpParts = value.split('.');
                    if (otpParts.length < 2) {
                        return "-1";
                    }
                    return (+otpParts[0] - (+otpParts[1])) / +otpParts[1];
                };
                SignUpComponent.prototype.openMusicGuest = function () {
                    this.router.navigateByUrl("/music");
                };
                SignUpComponent.prototype.onLoginUsernameChange = function (username) {
                    if (username.length > 0 && (this.allUsername.indexOf(username) != -1 || this.allEmail.indexOf(username) != -1)) {
                        this.invalidUsername = false;
                    }
                    else {
                        this.invalidUsername = true;
                        this.errorUserMsg = username.length > 0 ? "Username not registered" : "Username can't be blank";
                    }
                };
                SignUpComponent.prototype.onLoginAutofilled = function (event) {
                    this.invalidUsername = false;
                    this.invalidPassword = false;
                };
                SignUpComponent.prototype.onUsernameChange = function (username) {
                    if (username.length > 0 && this.allUsername.indexOf(username) == -1) {
                        this.invalidUsername = false;
                    }
                    else {
                        this.invalidUsername = true;
                        this.errorUserMsg = username.length > 0 ? "Username Already Taken" : "Username can't be blank";
                    }
                };
                SignUpComponent.prototype.checkPasswordLogin = function () {
                    var _this = this;
                    this.dataFetcher.checkPassword({ username: this.username, password: this.pwd }).subscribe(function (data) {
                        if (data == 1) {
                            _this.dataFetcher.getUser(_this.username).subscribe(function (user) {
                                sessionStorage.setItem('loggedIn', 'true');
                                console.log(user);
                                sessionStorage.setItem('username', JSON.stringify(user));
                                _this.router.navigateByUrl("/music");
                            });
                        }
                        else if (data == 0) {
                            _this.showLoginError("Error validating Password");
                        }
                        else {
                            _this.showLoginError("Incorrect Password.Try Again");
                        }
                    });
                };
                SignUpComponent.prototype.onEmailChange = function (email) {
                    if (this.allEmail.indexOf(email) == -1 && new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](email, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].email]).valid) {
                        this.invalidEmail = false;
                    }
                    else {
                        this.invalidEmail = true;
                        this.errorEmailMsg = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](email, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].email]).valid ? "Email already in use" : "Invalid Email";
                    }
                };
                SignUpComponent.prototype.onPwdChange = function (passwd) {
                    if (passwd.length < 6 || passwd.length > 20) {
                        this.invalidPassword = true;
                    }
                    else {
                        this.invalidPassword = false;
                    }
                };
                SignUpComponent.prototype.onOTPChange = function (otp) {
                    if (this.otpVal != this.otp) {
                        this.invalidOtp = true;
                    }
                    else {
                        this.invalidOtp = false;
                    }
                };
                SignUpComponent.prototype.registerUser = function () {
                    var _this = this;
                    var user = {
                        username: this.username,
                        password: this.pwd,
                        email: this.eml
                    };
                    this.dataFetcher.addUser(user).subscribe(function (data) {
                        alert("Registered");
                        _this.resetModel();
                        _this.regSelected = false;
                        _this.loginSelected = true;
                    });
                };
                return SignUpComponent;
            }());
            SignUpComponent.ctorParameters = function () { return [
                { type: _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_8__["AutofillMonitor"] },
                { type: _services_loginDataFetche_service__WEBPACK_IMPORTED_MODULE_6__["LoginDataFetcher"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
                { type: _services_screen_size_service__WEBPACK_IMPORTED_MODULE_2__["screenSizeState"] },
                { type: _sign_up_style_service__WEBPACK_IMPORTED_MODULE_3__["signupStyleService"] }
            ]; };
            SignUpComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-sign-up',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./sign-up.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/sign-up/sign-up.component.html")).default,
                    providers: [_sign_up_style_service__WEBPACK_IMPORTED_MODULE_3__["signupStyleService"], _services_loginDataFetche_service__WEBPACK_IMPORTED_MODULE_6__["LoginDataFetcher"], _services_DataFetcher_service__WEBPACK_IMPORTED_MODULE_7__["DataFetcher"]],
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./sign-up.component.scss */ "./src/app/sign-up/sign-up.component.scss")).default]
                })
            ], SignUpComponent);
            /***/ 
        }),
        /***/ "./src/app/styleSetter.service.ts": 
        /*!****************************************!*\
          !*** ./src/app/styleSetter.service.ts ***!
          \****************************************/
        /*! exports provided: styleSetterService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styleSetterService", function () { return styleSetterService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            var styleSetterService = /** @class */ (function () {
                function styleSetterService(router) {
                    this.router = router;
                }
                styleSetterService.prototype.appStyleSetter = function (scrSz) {
                    return {
                        'width': (scrSz.width - 3) + 'px',
                        'height': (scrSz.height - 3) + 'px',
                        'border': '1px solid white'
                    };
                };
                styleSetterService.prototype.routerOutletStyleSetter = function (scrSz) {
                    return {
                        'width': (100) + '%',
                        'height': (100) + '%',
                    };
                };
                return styleSetterService;
            }());
            styleSetterService.ctorParameters = function () { return [
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
            ]; };
            styleSetterService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
            ], styleSetterService);
            /***/ 
        }),
        /***/ "./src/environments/environment.ts": 
        /*!*****************************************!*\
          !*** ./src/environments/environment.ts ***!
          \*****************************************/
        /*! exports provided: environment */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function () { return environment; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            // This file can be replaced during build by using the `fileReplacements` array.
            // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
            // The list of file replacements can be found in `angular.json`.
            var environment = {
                production: false
            };
            /*
             * For easier debugging in development mode, you can import the following file
             * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
             *
             * This import should be commented out in production mode because it will have a negative impact
             * on performance if an error is thrown.
             */
            // import 'zone.js/dist/zone-error';  // Included with Angular CLI.
            /***/ 
        }),
        /***/ "./src/main.ts": 
        /*!*********************!*\
          !*** ./src/main.ts ***!
          \*********************/
        /*! no exports provided */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
            /* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
            /* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
            if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
            }
            Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
                .catch(function (err) { return console.error(err); });
            /***/ 
        }),
        /***/ 0: 
        /*!***************************!*\
          !*** multi ./src/main.ts ***!
          \***************************/
        /*! no static exports found */
        /***/ (function (module, exports, __webpack_require__) {
            module.exports = __webpack_require__(/*! D:\Angular\OSM\src\main.ts */ "./src/main.ts");
            /***/ 
        })
    }, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es2015.js.map
//# sourceMappingURL=main-es5.js.map
//# sourceMappingURL=main-es5.js.map