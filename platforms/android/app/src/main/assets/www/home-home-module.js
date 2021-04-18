(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "A3+G":
/*!*********************************************!*\
  !*** ./src/app/home/home-routing.module.ts ***!
  \*********************************************/
/*! exports provided: HomePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageRoutingModule", function() { return HomePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home.page */ "zpKS");




const routes = [
    {
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_3__["HomePage"],
    }
];
let HomePageRoutingModule = class HomePageRoutingModule {
};
HomePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], HomePageRoutingModule);



/***/ }),

/***/ "WcN3":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>\n      Visitor Entry\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n  <ion-grid>\n    <ion-row align-items-center style=\"height: 98vh;\">\n      <ion-col>\n        <ion-card>\n          <ion-card-content>\n            <form #visitorData=\"ngForm\" (ngSubmit)=\"visitorEntry(visitorData)\">\n\n              <ion-list>\n                <ion-item>\n                  <ion-label>\n                    <ion-icon name=\"person\" size=\"large\"></ion-icon>\n                    <p>Name</p>\n                  </ion-label>\n                  <ion-input type=\"text\" [ngClass]=\"{invalid:!valid}\" name=\"name\" required #name=\"ngModel\"\n                    [(ngModel)]=\"visitorObj.name\"></ion-input>\n                </ion-item>\n              </ion-list>\n              <p padding-left padding-top class=\"errorMsg\" *ngIf=\"!name.value && name.touched || !name.value && !valid\">\n                <ion-icon md=\"md-information-circle\" color=\"danger\"></ion-icon>\n                Please Enter Name.\n              </p>\n\n              <ion-list>\n                <ion-item>\n                  <ion-label>\n                    <ion-icon name=\"mail\" size=\"large\"></ion-icon>\n                    <p>Mail</p>\n                  </ion-label>\n                  <ion-input type=\"email\" [ngClass]=\"{invalid:!valid}\" name=\"email\" required #email=\"ngModel\"\n                    [(ngModel)]=\"visitorObj.email\"></ion-input>\n                </ion-item>\n              </ion-list>\n              <p padding-left padding-top class=\"errorMsg\"\n                *ngIf=\"!email.value && email.touched || !email.value && !valid\">\n                <ion-icon md=\"md-information-circle\" color=\"danger\"></ion-icon>\n                Please Enter Email.\n              </p>\n\n              <ion-list>\n                <ion-item>\n                  <ion-label>\n                    <ion-icon name=\"pricetag\" size=\"large\"></ion-icon>\n                    <p>Type Of Visit</p>\n                  </ion-label>\n                  <ion-select placeholder=\"Select One\" name=\"typeOfVisit\" [(ngModel)]=\"visitorObj.typeOfVisit\">\n                    <ion-select-option value=\"Meeting\">Meeting</ion-select-option>\n                    <ion-select-option value=\"Delivery\">Delivery</ion-select-option>\n                    <ion-select-option value=\"Personal\">Personal</ion-select-option>\n                  </ion-select>\n                </ion-item>\n              </ion-list>\n\n              <ion-list>\n                <ion-item>\n                  <ion-label>\n                    <ion-icon name=\"man\" size=\"large\"></ion-icon>\n                    <p>Person To Visit</p>\n                  </ion-label>\n                  <ion-input type=\"text\" [ngClass]=\"{invalid:!valid}\" name=\"personToVisit\" required\n                    #personToVisit=\"ngModel\" [(ngModel)]=\"visitorObj.personToVisit\">\n                  </ion-input>\n                </ion-item>\n              </ion-list>\n              <p padding-left padding-top class=\"errorMsg\"\n                *ngIf=\"!personToVisit.value && personToVisit.touched || !personToVisit.value && !valid\">\n                <ion-icon md=\"md-information-circle\" color=\"danger\"></ion-icon>\n                Please Enter Person To Visit.\n              </p>\n\n              <ion-list>\n                <ion-item>\n                  <ion-label>\n                    <ion-icon name=\"calendar\" size=\"large\"></ion-icon>\n                    <p>Date Of Entry</p>\n                  </ion-label>\n                  <ion-input type=\"text\" (click)=\"showDatepicker()\" (ionFocus)=\"showDatepicker()\" name=\"dateOfEntry\"\n                    readonly [(ngModel)]=\"visitorObj.dateOfEntry\" disabled></ion-input>\n                </ion-item>\n              </ion-list>\n\n              <ion-list>\n                <ion-item>\n                  <ion-label>\n                    <ion-icon name=\"information-circle-outline\" size=\"large\"></ion-icon>\n                    <p>Time Of Entry</p>\n                  </ion-label>\n                  <ion-input type=\"text\" (click)=\"showEntryTimepicker()\" (ionFocus)=\"showEntryTimepicker()\"\n                    name=\"timeOfEntry\" readonly [(ngModel)]=\"visitorObj.timeOfEntry\"></ion-input>\n                </ion-item>\n              </ion-list>\n\n              <ion-list>\n                <ion-item>\n                  <ion-label>\n                    <ion-icon name=\"exit\" size=\"large\"></ion-icon>\n                    <p>Time Of Exit</p>\n                  </ion-label>\n                  <ion-input type=\"text\" (click)=\"showExitTimepicker()\" (ionFocus)=\"showExitTimepicker()\"\n                    name=\"timeOfExit\" readonly [(ngModel)]=\"visitorObj.timeOfExit\"></ion-input>\n                </ion-item>\n              </ion-list>\n\n              <div padding>\n                <button ion-button color=\"secondary\" class=\"btnStyle\">Submit</button>\n              </div>\n            </form>\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>");

/***/ }),

/***/ "ct+p":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home.page */ "zpKS");
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home-routing.module */ "A3+G");







let HomePageModule = class HomePageModule {
};
HomePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
            _home_routing_module__WEBPACK_IMPORTED_MODULE_6__["HomePageRoutingModule"]
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_5__["HomePage"]]
    })
], HomePageModule);



/***/ }),

/***/ "f6od":
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#container {\n  text-align: center;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 50%;\n  transform: translateY(-50%);\n}\n\n#container strong {\n  font-size: 20px;\n  line-height: 26px;\n}\n\n#container p {\n  font-size: 16px;\n  line-height: 22px;\n  color: #8c8c8c;\n  margin: 0;\n}\n\n#container a {\n  text-decoration: none;\n}\n\n.errorMsg {\n  color: #ff4848;\n  padding-left: 0;\n  margin-bottom: 0;\n}\n\n.btnStyle {\n  background-color: #bff077;\n  display: block;\n  margin: 10px 0;\n  padding: 10px;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGhvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFFQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsUUFBQTtFQUNBLDJCQUFBO0FBQUY7O0FBR0E7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7QUFBRjs7QUFHQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUVBLGNBQUE7RUFFQSxTQUFBO0FBRkY7O0FBS0E7RUFDRSxxQkFBQTtBQUZGOztBQUtBO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQUZGOztBQUtBO0VBQ0UseUJBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0FBRkYiLCJmaWxlIjoiaG9tZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjY29udGFpbmVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIHRvcDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG59XG5cbiNjb250YWluZXIgc3Ryb25nIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBsaW5lLWhlaWdodDogMjZweDtcbn1cblxuI2NvbnRhaW5lciBwIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBsaW5lLWhlaWdodDogMjJweDtcblxuICBjb2xvcjogIzhjOGM4YztcblxuICBtYXJnaW46IDA7XG59XG5cbiNjb250YWluZXIgYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuLmVycm9yTXNnIHtcbiAgY29sb3I6ICNmZjQ4NDg7XG4gIHBhZGRpbmctbGVmdDogMDtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbn1cblxuLmJ0blN0eWxlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE5MSwgMjQwLCAxMTkpO1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luOiAxMHB4IDA7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIHdpZHRoOiAxMDAlO1xufSJdfQ== */");

/***/ }),

/***/ "zpKS":
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_home_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./home.page.html */ "WcN3");
/* harmony import */ var _home_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home.page.scss */ "f6od");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_native_date_picker_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/date-picker/ngx */ "ya1t");
/* harmony import */ var _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/native-storage/ngx */ "M2ZX");
/* harmony import */ var _services_util_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/util.service */ "2Rin");







let HomePage = class HomePage {
    constructor(datePicker, util, nativeStorage) {
        this.datePicker = datePicker;
        this.util = util;
        this.nativeStorage = nativeStorage;
        this.visitorObj = {
            "name": "",
            "email": "",
            "typeOfVisit": "",
            "personToVisit": "",
            "dateOfEntry": this.util.getCurrentDate(),
            "timeOfEntry": this.util.getCurrentTime(),
            "timeOfExit": this.util.getCurrentTime(),
            "rowId": "",
        };
        this.valid = true;
        this.data = [];
    }
    ngOnInit() {
        this.visitorObj = {
            "name": "",
            "email": "",
            "typeOfVisit": "",
            "personToVisit": "",
            "dateOfEntry": this.util.getCurrentDate(),
            "timeOfEntry": this.util.getCurrentTime(),
            "timeOfExit": this.util.getCurrentTime(),
            "rowId": "",
        };
        this.nativeStorage.getItem('visitorLogList').then(res => {
            if (res) {
                this.data = res;
                console.log(this.data);
            }
            else {
                this.nativeStorage.setItem('visitorLogList', []);
                this.data = [];
                console.log(this.data);
            }
        }).catch(err => {
            console.log(err);
            this.nativeStorage.setItem('visitorLogList', []);
            this.data = [];
            console.log(this.data);
        });
    }
    visitorEntry(visiorData) {
        this.valid = visiorData.valid;
        var ref = this;
        if (this.valid) {
            var EMAIL_REGEX = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            if (EMAIL_REGEX.test((ref.visitorObj.email).toLowerCase()) == false) {
                ref.util.presentToast("Please Enter Valid Email!");
                return false;
            }
            console.log(ref.visitorObj);
            if (ref.data.length !== 0) {
                ref.data.push(ref.visitorObj);
                ref.nativeStorage.setItem("visitorLogList", ref.data);
                visiorData.reset();
                ref.nativeStorage.getItem('visitorLogList').then(res => {
                    if (res) {
                        ref.data = res;
                        ref.util.presentToast("Data saved successfully!");
                        console.log(ref.data);
                        ref.ngOnInit();
                    }
                    else {
                        ref.nativeStorage.setItem('visitorLogList', []);
                        ref.util.presentToast("Data saved successfully!");
                        ref.ngOnInit();
                    }
                }).catch(err => {
                    console.log(err);
                });
            }
            else {
                var temp = [];
                temp.push(ref.visitorObj);
                ref.nativeStorage.setItem("visitorLogList", temp);
                visiorData.reset();
                ref.nativeStorage.getItem('visitorLogList').then(res => {
                    if (res) {
                        ref.data = res;
                        ref.util.presentToast("Data saved successfully!");
                        console.log(ref.data);
                        ref.ngOnInit();
                    }
                    else {
                        ref.nativeStorage.setItem('visitorLogList', []);
                        ref.util.presentToast("Data saved successfully!");
                        ref.ngOnInit();
                    }
                }).catch(err => {
                    console.log(err);
                });
            }
        }
    }
    showDatepicker() {
        this.datePicker.show({
            date: new Date(),
            mode: 'date',
            androidTheme: this.datePicker.ANDROID_THEMES.THEME_HOLO_DARK,
            okText: "Save Date",
            todayText: "Set Today"
        }).then(date => {
            this.visitorObj.dateOfEntry = date.getDate() + "-" + date.toLocaleString('default', { month: 'long' }) + "-" + date.getFullYear();
        }, err => console.log('Error occurred while getting date: ', err));
    }
    showEntryTimepicker() {
        this.datePicker.show({
            date: new Date(),
            mode: 'time',
            androidTheme: this.datePicker.ANDROID_THEMES.THEME_HOLO_LIGHT,
            okText: "Save Time",
            nowText: "Set Now"
        }).then(time => {
            this.visitorObj.timeOfEntry = time.getHours() + ":" + time.getMinutes();
        }, err => console.log('Error occurred while getting time: ', err));
    }
    showExitTimepicker() {
        this.datePicker.show({
            date: new Date(),
            mode: 'time',
            androidTheme: this.datePicker.ANDROID_THEMES.THEME_HOLO_LIGHT,
            okText: "Save Time",
            nowText: "Set Now"
        }).then(time => {
            this.visitorObj.timeOfExit = time.getHours() + ":" + time.getMinutes();
        }, err => console.log('Error occurred while getting time: ', err));
    }
};
HomePage.ctorParameters = () => [
    { type: _ionic_native_date_picker_ngx__WEBPACK_IMPORTED_MODULE_4__["DatePicker"] },
    { type: _services_util_service__WEBPACK_IMPORTED_MODULE_6__["UtilService"] },
    { type: _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_5__["NativeStorage"] }
];
HomePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-home',
        template: _raw_loader_home_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_home_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], HomePage);



/***/ })

}]);
//# sourceMappingURL=home-home-module.js.map