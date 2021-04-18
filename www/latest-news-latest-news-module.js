(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["latest-news-latest-news-module"],{

/***/ "gSL8":
/*!***************************************************!*\
  !*** ./src/app/latest-news/latest-news.module.ts ***!
  \***************************************************/
/*! exports provided: LatestNewsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LatestNewsPageModule", function() { return LatestNewsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _latest_news_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./latest-news-routing.module */ "hU1a");
/* harmony import */ var _latest_news_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./latest-news.page */ "19uS");







let LatestNewsPageModule = class LatestNewsPageModule {
};
LatestNewsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _latest_news_routing_module__WEBPACK_IMPORTED_MODULE_5__["LatestNewsPageRoutingModule"]
        ],
        declarations: [_latest_news_page__WEBPACK_IMPORTED_MODULE_6__["LatestNewsPage"]]
    })
], LatestNewsPageModule);



/***/ }),

/***/ "hU1a":
/*!***********************************************************!*\
  !*** ./src/app/latest-news/latest-news-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: LatestNewsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LatestNewsPageRoutingModule", function() { return LatestNewsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _latest_news_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./latest-news.page */ "19uS");




const routes = [
    {
        path: '',
        component: _latest_news_page__WEBPACK_IMPORTED_MODULE_3__["LatestNewsPage"]
    }
];
let LatestNewsPageRoutingModule = class LatestNewsPageRoutingModule {
};
LatestNewsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], LatestNewsPageRoutingModule);



/***/ })

}]);
//# sourceMappingURL=latest-news-latest-news-module.js.map