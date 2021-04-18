(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["visitor-log-list-visitor-log-list-module"],{

/***/ "OY0l":
/*!*********************************************************************!*\
  !*** ./src/app/visitor-log-list/visitor-log-list-routing.module.ts ***!
  \*********************************************************************/
/*! exports provided: VisitorLogListPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VisitorLogListPageRoutingModule", function() { return VisitorLogListPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _visitor_log_list_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./visitor-log-list.page */ "pgH+");




const routes = [
    {
        path: '',
        component: _visitor_log_list_page__WEBPACK_IMPORTED_MODULE_3__["VisitorLogListPage"]
    }
];
let VisitorLogListPageRoutingModule = class VisitorLogListPageRoutingModule {
};
VisitorLogListPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], VisitorLogListPageRoutingModule);



/***/ }),

/***/ "Rvo7":
/*!*************************************************************!*\
  !*** ./src/app/visitor-log-list/visitor-log-list.module.ts ***!
  \*************************************************************/
/*! exports provided: VisitorLogListPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VisitorLogListPageModule", function() { return VisitorLogListPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _visitor_log_list_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./visitor-log-list-routing.module */ "OY0l");
/* harmony import */ var _visitor_log_list_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./visitor-log-list.page */ "pgH+");







let VisitorLogListPageModule = class VisitorLogListPageModule {
};
VisitorLogListPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _visitor_log_list_routing_module__WEBPACK_IMPORTED_MODULE_5__["VisitorLogListPageRoutingModule"]
        ],
        declarations: [_visitor_log_list_page__WEBPACK_IMPORTED_MODULE_6__["VisitorLogListPage"]]
    })
], VisitorLogListPageModule);



/***/ })

}]);
//# sourceMappingURL=visitor-log-list-visitor-log-list-module.js.map