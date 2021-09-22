(self["webpackChunkfundoo_notes"] = self["webpackChunkfundoo_notes"] || []).push([["main"],{

/***/ 8255:
/*!*******************************************************!*\
  !*** ./$_lazy_route_resources/ lazy namespace object ***!
  \*******************************************************/
/***/ ((module) => {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(() => {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = () => ([]);
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 8255;
module.exports = webpackEmptyAsyncContext;

/***/ }),

/***/ 8153:
/*!**********************************************************!*\
  !*** ./src/app/Component/add-note/add-note.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddNoteComponent": () => (/* binding */ AddNoteComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/card */ 2118);
/* harmony import */ var _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/text-field */ 6536);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/icon */ 2529);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ 781);
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/list */ 8417);






class AddNoteComponent {
    constructor() {
        this.showVar = true;
    }
    ngOnInit() {
    }
}
AddNoteComponent.ɵfac = function AddNoteComponent_Factory(t) { return new (t || AddNoteComponent)(); };
AddNoteComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AddNoteComponent, selectors: [["app-add-note"]], decls: 41, vars: 0, consts: [[1, "card"], [1, "titlerow"], [1, "title"], ["cdkTextareaAutosize", "", "placeholder", "Title"], [1, "icons"], [1, "material-icons-outlined"], [1, "description", 2, "padding-top", "10px"], [1, "description"], ["cdkTextareaAutosize", "", "placeholder", "Take a note..."], [1, "cardbottom", 2, "padding-top", "15px"], [1, "icon"], [1, "button"], ["mat-button", "", 2, "color", "#1A73E8"], ["mat-list-icon", "", 1, "material-icons-outlined"]], template: function AddNoteComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card-title", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "textarea", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-card-subtitle", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-icon", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "beenhere");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-card-title", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "textarea", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-icon", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "add_alert");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-icon", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "person_add");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-icon", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "crop_original");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-icon", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "image");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-icon", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "archive");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-icon", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "more_vert");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "mat-icon", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "undo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "mat-icon", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "redo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "mat-card-title", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, " Take a Note... ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "mat-card-subtitle", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "mat-icon", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "check_box");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "mat-icon", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "brush");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "mat-icon", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "crop_original");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_1__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_1__.MatCardTitle, _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_2__.CdkTextareaAutosize, _angular_material_card__WEBPACK_IMPORTED_MODULE_1__.MatCardSubtitle, _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__.MatIcon, _angular_material_button__WEBPACK_IMPORTED_MODULE_4__.MatButton, _angular_material_list__WEBPACK_IMPORTED_MODULE_5__.MatListIconCssMatStyler], styles: ["@import url(\"https://fonts.googleapis.com/icon?family=Material+Icons|Material+Icons+Outlined\");\n.titlerow[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n}\n.title[_ngcontent-%COMP%] {\n  font-size: 16px;\n  flex-grow: 12;\n}\n.icons[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n}\nmat-card[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-evenly;\n  width: 65%;\n  border-radius: 10px;\n  margin-top: 25px;\n}\n.mat-card[_ngcontent-%COMP%]:not([class*=mat-elevation-z]) {\n  box-shadow: 0 1px 2px 0 rgba(60, 64, 67, 0.3), 0 2px 6px 2px rgba(60, 64, 67, 0.15);\n}\n  .mat-drawer-content {\n  overflow: unset;\n}\ntextarea[_ngcontent-%COMP%] {\n  border: unset;\n  font-size: 17px;\n  color: #4F4F4F;\n  width: 100%;\n}\ntextarea[_ngcontent-%COMP%]:focus {\n  outline: none !important;\n  border-color: white;\n}\n.cardbottom[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n}\n.cardbottom[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  flex-grow: 2;\n}\n.cardbottom[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  flex-grow: 2;\n  padding-right: 10px;\n  margin-bottom: -10px;\n}\nmat-icon[_ngcontent-%COMP%] {\n  color: #757575;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkZC1ub3RlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFRLDhGQUFBO0FBQ1A7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7QUFDTDtBQUNFO0VBQ0ksZUFBQTtFQUNBLGFBQUE7QUFFTjtBQUFFO0VBQ0ksYUFBQTtFQUNBLHlCQUFBO0FBR047QUFBSTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLDZCQUFBO0VBQ0EsVUFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUFHUjtBQUFJO0VBQ0ksbUZBQUE7QUFHUjtBQUFJO0VBQ0ksZUFBQTtBQUdSO0FBREk7RUFDSSxhQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0FBSVI7QUFGSTtFQUNJLHdCQUFBO0VBQ0EsbUJBQUE7QUFLUjtBQUhLO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0FBTVQ7QUFMUztFQUNJLGFBQUE7RUFDQSw4QkFBQTtFQUNBLFlBQUE7QUFPYjtBQUxTO0VBQ0ksYUFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0Esb0JBQUE7QUFPYjtBQUhLO0VBQ0ksY0FBQTtBQU1UIiwiZmlsZSI6ImFkZC1ub3RlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2ljb24/ZmFtaWx5PU1hdGVyaWFsK0ljb25zfE1hdGVyaWFsK0ljb25zK091dGxpbmVkXCIpO1xyXG4gLnRpdGxlcm93e1xyXG4gICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuIH1cclxuICAudGl0bGV7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgZmxleC1ncm93OiAxMjtcclxuICB9XHJcbiAgLmljb25ze1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4gICAgfVxyXG5cclxuICAgIG1hdC1jYXJke1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcclxuICAgICAgICB3aWR0aDogNjUlOyAgIFxyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMjVweDtcclxuICAgICAgICBcclxuICAgIH1cclxuICAgIC5tYXQtY2FyZDpub3QoW2NsYXNzKj1tYXQtZWxldmF0aW9uLXpdKSB7XHJcbiAgICAgICAgYm94LXNoYWRvdzogMCAxcHggMnB4IDAgcmdiKDYwIDY0IDY3IC8gMzAlKSwgMCAycHggNnB4IDJweCByZ2IoNjAgNjQgNjcgLyAxNSUpO1xyXG4gICAgfVxyXG5cclxuICAgIDo6bmctZGVlcCAubWF0LWRyYXdlci1jb250ZW50e1xyXG4gICAgICAgIG92ZXJmbG93OnVuc2V0O1xyXG4gICAgfSBcclxuICAgIHRleHRhcmVhe1xyXG4gICAgICAgIGJvcmRlcjogdW5zZXQ7XHJcbiAgICAgICAgZm9udC1zaXplOiAxN3B4O1xyXG4gICAgICAgIGNvbG9yOiAjNEY0RjRGO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG4gICAgdGV4dGFyZWE6Zm9jdXMgeyBcclxuICAgICAgICBvdXRsaW5lOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgYm9yZGVyLWNvbG9yOiB3aGl0ZTtcclxuICAgICB9XHJcbiAgICAgLmNhcmRib3R0b217XHJcbiAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgICAgIC5pY29ue1xyXG4gICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICAgICAgIGZsZXgtZ3JvdzogMjtcclxuICAgICAgICAgfVxyXG4gICAgICAgICAuYnV0dG9ue1xyXG4gICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgICAgICAgICAgICBmbGV4LWdyb3c6IDI7XHJcbiAgICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xyXG4gICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTotMTBweCA7XHJcbiAgICAgICAgIH1cclxuXHJcbiAgICAgfVxyXG4gICAgIG1hdC1pY29ue1xyXG4gICAgICAgICBjb2xvcjogIzc1NzU3NTtcclxuICAgICB9Il19 */"] });


/***/ }),

/***/ 8053:
/*!************************************************************!*\
  !*** ./src/app/Component/dashboard/dashboard.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardComponent": () => (/* binding */ DashboardComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/toolbar */ 4106);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ 781);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/icon */ 2529);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/card */ 2118);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/form-field */ 5788);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/input */ 4742);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/menu */ 221);
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/sidenav */ 6608);
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/list */ 8417);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/core */ 2220);
/* harmony import */ var _add_note_add_note_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../add-note/add-note.component */ 8153);












class DashboardComponent {
    constructor() {
        this.opened = true;
    }
    ngOnInit() {
    }
}
DashboardComponent.ɵfac = function DashboardComponent_Factory(t) { return new (t || DashboardComponent)(); };
DashboardComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: DashboardComponent, selectors: [["app-dashboard"]], decls: 59, vars: 4, consts: [[2, "background-color", "white", "border-bottom", "1px solid #DADCE0"], [1, "menu"], ["mat-icon-button", "", "aria-label", "Example icon-button with menu icon", 1, "example-icon"], [1, "menuicon", 3, "click"], ["src", "../../../assets/fundooIcon.png", 1, "image"], [2, "margin-left", "5px", "padding-top", "14px"], [2, "color", "#5F6368", "font-weight", "normal"], [1, "search"], ["appearance", "fill", 1, "search"], ["matInput", "", "placeholder", "Search"], ["matPrefix", "", 2, "margin", "0 10px"], [1, "endIcons"], ["mat-icon-button", "", "aria-label", "Example icon-button with heart icon", 1, "example-icon", "favorite-icon"], [1, "material-icons-outlined"], ["mat-button", "", 3, "matMenuTriggerFor"], ["menu", "matMenu"], ["src", "../../../assets/denis-harschi-umj2W38UOmc-unsplash.jpg", 1, "profilePic"], ["mat-menu-item", ""], [1, "main"], ["mode", "side", 1, "side_nav", 3, "opened", "openedChange"], ["sidenav", ""], ["mat-list-icon", "", 1, "sidenavLogo"], ["mat-line", ""], ["mat-list-icon", "", 1, "sidenavLogo", "material-icons-outlined"]], template: function DashboardComponent_Template(rf, ctx) { if (rf & 1) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-toolbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "mat-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DashboardComponent_Template_mat_icon_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r2); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](30); return _r1.toggle(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "mat-card-title", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Fundoo");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "mat-form-field", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "mat-icon", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "search");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "mat-icon", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "view_agenda");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "supervised_user_circle");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "mat-menu", null, 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](23, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "Item 1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "Item 2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "mat-sidenav-container", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "mat-sidenav", 19, 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("openedChange", function DashboardComponent_Template_mat_sidenav_openedChange_29_listener($event) { return ctx.opened = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "mat-nav-list");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "mat-list-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "mat-icon", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "lightbulb_outline");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "h4", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, "Notes");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "mat-list-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "mat-icon", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39, "notifications_none");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "h4", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41, "Reminders");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "mat-list-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "mat-icon", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44, "edit_outline");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "h4", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46, "Edit labels");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "mat-list-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "mat-icon", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](49, "archive");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "h4", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](51, "Archive");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "mat-list-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "mat-icon", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](54, "delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "h4", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](56, "Trash");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "mat-sidenav-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](58, "app-add-note");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("width", 700, "px");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matMenuTriggerFor", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("opened", ctx.opened);
    } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__.MatToolbar, _angular_material_button__WEBPACK_IMPORTED_MODULE_3__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__.MatIcon, _angular_material_card__WEBPACK_IMPORTED_MODULE_5__.MatCardTitle, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__.MatFormField, _angular_material_input__WEBPACK_IMPORTED_MODULE_7__.MatInput, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__.MatPrefix, _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__.MatMenuTrigger, _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__.MatMenu, _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__.MatMenuItem, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_9__.MatSidenavContainer, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_9__.MatSidenav, _angular_material_list__WEBPACK_IMPORTED_MODULE_10__.MatNavList, _angular_material_list__WEBPACK_IMPORTED_MODULE_10__.MatListItem, _angular_material_list__WEBPACK_IMPORTED_MODULE_10__.MatListIconCssMatStyler, _angular_material_core__WEBPACK_IMPORTED_MODULE_11__.MatLine, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_9__.MatSidenavContent, _add_note_add_note_component__WEBPACK_IMPORTED_MODULE_0__.AddNoteComponent], styles: ["@import url(\"https://fonts.googleapis.com/icon?family=Material+Icons|Material+Icons+Outlined\");\nmat-toolbar[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n}\n.menu[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.endIcons[_ngcontent-%COMP%] {\n  display: flex;\n  padding-right: 10px;\n}\n.image[_ngcontent-%COMP%] {\n  height: 40px;\n}\n  .mat-form-field .mat-form-field-flex {\n  display: flex;\n  align-items: center;\n  height: 50%;\n  border-radius: 10px !important;\n  margin-top: 2em;\n  font-size: 15.3px;\n  padding: 0.1em !important;\n}\n  .mat-form-field .mat-form-field-underline {\n  width: 0;\n}\n.menuicon[_ngcontent-%COMP%] {\n  color: #5F6368;\n}\nmat-sidenav[_ngcontent-%COMP%]:not(.mat-drawer-opened) {\n  transform: translate3d(0, 0, 0) !important;\n  visibility: visible !important;\n  width: 50px;\n}\nmat-sidenav[_ngcontent-%COMP%] {\n  width: 300px;\n  border: 0;\n}\nmat-sidenav-content[_ngcontent-%COMP%] {\n  padding-left: 100px;\n  background-color: white;\n}\n.main[_ngcontent-%COMP%] {\n  min-height: 500px;\n  background-color: white;\n}\nmat-list-item[_ngcontent-%COMP%]:hover {\n  background-color: #FEEFC3 !important;\n  border-bottom-right-radius: 30px;\n  border-top-right-radius: 30px;\n}\n .mat-menu-content:not(:empty) {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n}\n.profilePic[_ngcontent-%COMP%] {\n  height: 20px;\n  border-radius: 25px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhc2hib2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBUSw4RkFBQTtBQUNSO0VBQ0ksYUFBQTtFQUNBLDhCQUFBO0FBQ0o7QUFDQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtBQUVKO0FBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUFHQTtBQURBO0VBQ0ksWUFBQTtBQUlKO0FBQUk7RUFDTSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsOEJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFBQTtBQUdWO0FBREk7RUFDRSxRQUFBO0FBR047QUFBQTtFQUNJLGNBQUE7QUFHSjtBQURBO0VBRVEsMENBQUE7RUFDQSw4QkFBQTtFQUNBLFdBQUE7QUFHUjtBQURNO0VBQ0UsWUFBQTtFQUNBLFNBQUE7QUFJUjtBQUZNO0VBQ0ksbUJBQUE7RUFDQSx1QkFBQTtBQUtWO0FBSEE7RUFFSSxpQkFBQTtFQUNBLHVCQUFBO0FBS0o7QUFIQTtFQUVJLG9DQUFBO0VBQ0EsZ0NBQUE7RUFDQSw2QkFBQTtBQUtKO0FBSEE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0FBTUE7QUFKQztFQUNJLFlBQUE7RUFDQSxtQkFBQTtBQU9MIiwiZmlsZSI6ImRhc2hib2FyZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9pY29uP2ZhbWlseT1NYXRlcmlhbCtJY29uc3xNYXRlcmlhbCtJY29ucytPdXRsaW5lZFwiKTtcclxubWF0LXRvb2xiYXJ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuOyBcclxufVxyXG4ubWVudXtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcbi5lbmRJY29uc3tcclxuZGlzcGxheTogZmxleDtcclxucGFkZGluZy1yaWdodDogMTBweDtcclxufVxyXG4uaW1hZ2V7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbn1cclxuOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZFxyXG4ge1xyXG4gICAgLm1hdC1mb3JtLWZpZWxkLWZsZXgge1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICBoZWlnaHQ6IDUwJTtcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHghaW1wb3J0YW50O1xyXG4gICAgICAgICAgbWFyZ2luLXRvcDogMmVtO1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxNS4zcHg7XHJcbiAgICAgICAgICBwYWRkaW5nOiAwLjFlbSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgLm1hdC1mb3JtLWZpZWxkLXVuZGVybGluZSB7XHJcbiAgICAgIHdpZHRoOiAwO1xyXG4gICAgfVxyXG59XHJcbi5tZW51aWNvbiB7XHJcbiAgICBjb2xvcjogIzVGNjM2ODtcclxufVxyXG5tYXQtc2lkZW5hdjpub3QoLm1hdC1kcmF3ZXItb3BlbmVkKSBcclxue1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCkgIWltcG9ydGFudDtcclxuICAgICAgICB2aXNpYmlsaXR5OiB2aXNpYmxlICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgd2lkdGg6IDUwcHggO1xyXG4gICAgICB9XHJcbiAgICAgIG1hdC1zaWRlbmF2IHtcclxuICAgICAgICB3aWR0aDogMzAwcHg7XHJcbiAgICAgICAgYm9yZGVyOiAwO1xyXG4gICAgICB9XHJcbiAgICAgIG1hdC1zaWRlbmF2LWNvbnRlbnR7XHJcbiAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDEwMHB4O1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiB9XHJcbi5tYWluXHJcbntcclxuICAgIG1pbi1oZWlnaHQ6IDUwMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbn1cclxubWF0LWxpc3QtaXRlbTpob3ZlclxyXG57XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkVFRkMzICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMzBweDtcclxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAzMHB4O1xyXG59XHJcbjo6bmctZGVlcC5tYXQtbWVudS1jb250ZW50Om5vdCg6ZW1wdHkpIHtcclxuZGlzcGxheTogZmxleDtcclxuanVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbmFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbmZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuIC5wcm9maWxlUGlje1xyXG4gICAgIGhlaWdodDogMjBweDtcclxuICAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xyXG4gfSJdfQ== */"] });


/***/ }),

/***/ 8590:
/*!************************************************************************!*\
  !*** ./src/app/Component/forgot-password/forgot-password.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ForgotPasswordComponent": () => (/* binding */ ForgotPasswordComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var src_app_Service_UserService_user_service_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/Service/UserService/user-service.service */ 5988);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/snack-bar */ 8456);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/card */ 2118);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/form-field */ 5788);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/input */ 4742);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ 781);










const _c0 = function () { return ["/register"]; };
class ForgotPasswordComponent {
    constructor(userService, snackBar, router) {
        this.userService = userService;
        this.snackBar = snackBar;
        this.router = router;
    }
    ngOnInit() {
        this.ForgotPasswordForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormGroup({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required,])
        });
    }
    onSubmit() {
        if (this.ForgotPasswordForm.valid) {
            this.forgotPassword();
        }
    }
    forgotPassword() {
        this.userService.ResetMail(this.ForgotPasswordForm.value.email).
            subscribe((status) => {
            this.snackBar.open(`${status.message}`, '', { duration: 3000, verticalPosition: 'bottom', horizontalPosition: 'left' });
            if (`${status.status == true}`) {
                localStorage.setItem("Token", `${status.data}`);
                localStorage.setItem("Username", `${this.ForgotPasswordForm.value.email}`);
            }
        }, error => {
            this.snackBar.open(`${error.error.message}`, '', { duration: 3000, verticalPosition: 'bottom', horizontalPosition: 'left' });
        });
    }
}
ForgotPasswordComponent.ɵfac = function ForgotPasswordComponent_Factory(t) { return new (t || ForgotPasswordComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_Service_UserService_user_service_service__WEBPACK_IMPORTED_MODULE_0__.UserServiceService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__.MatSnackBar), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router)); };
ForgotPasswordComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: ForgotPasswordComponent, selectors: [["app-forgot-password"]], decls: 31, vars: 3, consts: [[1, "container"], [1, "card"], [1, "ForgotContainer"], [2, "color", "#4285F4"], [2, "color", "#EA4335"], [2, "color", "#FBBC05"], [2, "color", "#34A853"], [2, "color", "#EB4E41"], [1, "formContainer", 3, "formGroup", "ngSubmit"], [1, "email"], ["appearance", "outline"], ["type", "email", "matInput", "", "id", "email", "formControlName", "email"], [1, "buttonContainer"], ["mat-button", "", 2, "color", "#1A73E8", 3, "routerLink"], ["type", "submit", "mat-raised-button", "", 1, "button"]], template: function ForgotPasswordComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "mat-card", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "F");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "u");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "n");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "d");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "o");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "o");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, " Account Recovery ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, "Recover Your Fundoo Account");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "form", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function ForgotPasswordComponent_Template_form_ngSubmit_20_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "mat-form-field", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, "UserName");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](25, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](30, "Next");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.ForgotPasswordForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](2, _c0));
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_5__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_5__.MatCardTitle, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormGroupDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_7__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControlName, _angular_material_button__WEBPACK_IMPORTED_MODULE_8__.MatButton, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLink], styles: [".container[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-top: 3%;\n}\n\n.card[_ngcontent-%COMP%] {\n  width: 27%;\n  display: flex;\n  flex-direction: column;\n  padding: 4%;\n  min-height: 400px;\n  border-radius: 10px;\n  text-align: center;\n  border: 1px solid #DADCE0;\n}\n\nmat-card-title[_ngcontent-%COMP%] {\n  font-size: 2.2vw;\n  font-family: \"Google Sans\", \"Noto Sans Myanmar UI\", arial, sans-serif;\n  font-weight: bolder;\n  margin-bottom: 15px;\n}\n\nmat-form-field[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\nmat-form-field[_ngcontent-%COMP%]   mat-label[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n\nh1[_ngcontent-%COMP%] {\n  padding-top: 20px;\n  font-size: 1.7vw;\n  color: #202124;\n}\n\nh3[_ngcontent-%COMP%] {\n  font-size: 1.5vw;\n  font-weight: normal;\n}\n\n.buttonContainer[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  padding-top: 17px;\n}\n\n.buttonContainer[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%] {\n  background-color: #1A73E8;\n  color: #FFFFFF;\n}\n\n@media only screen and (max-width: 800px) {\n  .card[_ngcontent-%COMP%] {\n    width: 50%;\n    display: flex;\n    flex-direction: column;\n    border-radius: 0px;\n    height: auto;\n  }\n\n  .container[_ngcontent-%COMP%] {\n    padding-top: 5%;\n  }\n\n  mat-form-field[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n\n  h1[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], mat-card-title[_ngcontent-%COMP%] {\n    font-size: 18px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvcmdvdC1wYXNzd29yZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsY0FBQTtBQUNKOztBQUNBO0VBQ0ksVUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtBQUVKOztBQUFBO0VBQ0ksZ0JBQUE7RUFDQSxxRUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7QUFHSjs7QUFEQTtFQUNJLFdBQUE7QUFJSjs7QUFISTtFQUNJLGVBQUE7QUFLUjs7QUFGQTtFQUNJLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FBS0o7O0FBSEE7RUFDSSxnQkFBQTtFQUNBLG1CQUFBO0FBTUo7O0FBSkM7RUFDSSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxpQkFBQTtBQU9MOztBQU5LO0VBQ0kseUJBQUE7RUFDQSxjQUFBO0FBUVQ7O0FBTEM7RUFDRztJQUNJLFVBQUE7SUFDQSxhQUFBO0lBQ0Esc0JBQUE7SUFDQSxrQkFBQTtJQUNBLFlBQUE7RUFRTjs7RUFORTtJQUNJLGVBQUE7RUFTTjs7RUFQRTtJQUNJLFdBQUE7RUFVTjs7RUFSRTtJQUNJLGVBQUE7RUFXTjtBQUNGIiwiZmlsZSI6ImZvcmdvdC1wYXNzd29yZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXJ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgbWFyZ2luLXRvcDogMyU7XHJcbn1cclxuLmNhcmR7XHJcbiAgICB3aWR0aDogMjclO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBwYWRkaW5nOiA0JTtcclxuICAgIG1pbi1oZWlnaHQ6IDQwMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNEQURDRTA7XHJcbn1cclxubWF0LWNhcmQtdGl0bGV7XHJcbiAgICBmb250LXNpemU6IDIuMnZ3O1xyXG4gICAgZm9udC1mYW1pbHk6ICdHb29nbGUgU2FucycsJ05vdG8gU2FucyBNeWFubWFyIFVJJyxhcmlhbCxzYW5zLXNlcmlmO1xyXG4gICAgZm9udC13ZWlnaHQ6Ym9sZGVyO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxufVxyXG5tYXQtZm9ybS1maWVsZHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWF0LWxhYmVse1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIH1cclxufVxyXG5oMXtcclxuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xyXG4gICAgZm9udC1zaXplOiAxLjd2dztcclxuICAgIGNvbG9yOiAjMjAyMTI0IDtcclxufVxyXG5oM3tcclxuICAgIGZvbnQtc2l6ZTogMS41dnc7XHJcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG59XHJcbiAuYnV0dG9uQ29udGFpbmVye1xyXG4gICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgIHBhZGRpbmctdG9wOiAxN3B4O1xyXG4gICAgIC5idXR0b257XHJcbiAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMxQTczRTg7XHJcbiAgICAgICAgIGNvbG9yOiAjRkZGRkZGXHJcbiAgICAgfVxyXG4gfVxyXG4gQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4MDBweCl7XHJcbiAgICAuY2FyZHtcclxuICAgICAgICB3aWR0aDogNTAlO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgfVxyXG4gICAgLmNvbnRhaW5lcntcclxuICAgICAgICBwYWRkaW5nLXRvcDogNSU7XHJcbiAgICB9XHJcbiAgICBtYXQtZm9ybS1maWVsZHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxuICAgIGgxLGgzLG1hdC1jYXJkLXRpdGxle1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIH1cclxuIH1cclxuICJdfQ== */"] });


/***/ }),

/***/ 7609:
/*!**************************************************!*\
  !*** ./src/app/Component/icon/icon.component.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IconComponent": () => (/* binding */ IconComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);

class IconComponent {
    constructor() { }
    ngOnInit() {
    }
}
IconComponent.ɵfac = function IconComponent_Factory(t) { return new (t || IconComponent)(); };
IconComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: IconComponent, selectors: [["app-icon"]], decls: 2, vars: 0, template: function IconComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "icon works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpY29uLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 5534:
/*!****************************************************!*\
  !*** ./src/app/Component/login/login.component.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginComponent": () => (/* binding */ LoginComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var src_app_Service_UserService_user_service_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/Service/UserService/user-service.service */ 5988);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/snack-bar */ 8456);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/card */ 2118);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/form-field */ 5788);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/input */ 4742);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ 781);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ 2529);











const _c0 = function () { return ["/forgetPassword"]; };
const _c1 = function () { return ["/register"]; };
class LoginComponent {
    constructor(userService, snackBar, router) {
        this.userService = userService;
        this.snackBar = snackBar;
        this.router = router;
        this.hide = true;
    }
    ngOnInit() {
        this.LoginForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormGroup({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required,]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required])
        });
    }
    onSubmit() {
        if (this.LoginForm.valid) {
            this.login();
        }
    }
    login() {
        this.userService.Login(this.LoginForm.value).
            subscribe((status) => {
            console.log(status);
            this.snackBar.open(`${status.message}`, '', { duration: 3000, verticalPosition: 'bottom', horizontalPosition: 'left' });
            if (`${status.status == true}`)
                this.router.navigate(['/register']);
        }, error => {
            this.snackBar.open(`${error.error.message}`, '', { duration: 3000, verticalPosition: 'bottom', horizontalPosition: 'left' });
        });
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_Service_UserService_user_service_service__WEBPACK_IMPORTED_MODULE_0__.UserServiceService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__.MatSnackBar), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router)); };
LoginComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 41, vars: 9, consts: [[1, "container"], [1, "card"], [1, "loginContainer"], [2, "color", "#4285F4"], [2, "color", "#EA4335"], [2, "color", "#FBBC05"], [2, "color", "#34A853"], [2, "color", "#EB4E41"], [1, "formContainer", 3, "formGroup", "ngSubmit"], [1, "email"], ["appearance", "outline"], ["type", "email", "matInput", "", "id", "email", "formControlName", "email"], [1, "password"], ["matInput", "", "formControlName", "password", 3, "type"], ["mat-icon-button", "", "matSuffix", "", 3, "click"], ["mat-flat-button", "", 1, "forgotPassword", 2, "color", "#1A73E8", 3, "routerLink"], [1, "buttonContainer"], ["mat-button", "", 2, "color", "#1A73E8", 3, "routerLink"], ["type", "submit", "mat-raised-button", "", 1, "button"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "mat-card", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "F");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "u");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "n");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "d");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "o");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "o");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, " Sign in");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, "Use Your Fundoo Account");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "form", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_20_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "mat-form-field", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, "UserName");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](25, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "mat-form-field", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](29, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](30, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_31_listener() { return ctx.hide = !ctx.hide; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](33);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](35, "Forgot Password?");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](38, "Create account");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](40, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.LoginForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("type", ctx.hide ? "password" : "text");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("aria-label", "Hide password")("aria-pressed", ctx.hide);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.hide ? "visibility_off" : "visibility");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](7, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](8, _c1));
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_5__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_5__.MatCardTitle, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormGroupDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_7__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControlName, _angular_material_button__WEBPACK_IMPORTED_MODULE_8__.MatButton, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__.MatSuffix, _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__.MatIcon, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLink], styles: ["@import url(\"https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap\");\n.container[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: row;\n  margin-top: 3%;\n}\n.card[_ngcontent-%COMP%] {\n  width: 30%;\n  display: flex;\n  align-items: none;\n  justify-content: none;\n  flex-direction: column;\n  padding: 3%;\n  text-align: center;\n  border: 1px solid #DADCE0;\n  border-radius: 10px;\n}\n.card[_ngcontent-%COMP%]   .loginContainer[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: none;\n  justify-content: none;\n  flex-direction: column;\n}\nmat-card-title[_ngcontent-%COMP%] {\n  font-size: 25px;\n  font-family: \"Google Sans\", \"Noto Sans Myanmar UI\", arial, sans-serif;\n  margin-bottom: 15px;\n  color: #202124;\n}\nmat-form-field[_ngcontent-%COMP%] {\n  width: 100%;\n}\nmat-form-field[_ngcontent-%COMP%]   mat-label[_ngcontent-%COMP%] {\n  font-size: 17px;\n}\nmat-error[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n  .mat-form-field-appearance-outline.mat-focused .mat-form-field-outline-thick {\n  color: #2E7FEA !important;\n}\n.formContainer[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  margin-top: 4%;\n}\n.buttonContainer[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: none;\n  justify-content: space-between;\n  flex-direction: row;\n  padding-top: 12%;\n}\n.buttonContainer[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%] {\n  background-color: #1A73E8;\n  color: #FFFFFF;\n}\n.forgotPassword[_ngcontent-%COMP%] {\n  margin-top: -13px;\n  display: flex;\n  align-items: none;\n  justify-content: flex-start;\n  flex-direction: none;\n  padding: 0;\n}\n@media only screen and (max-width: 750px) {\n  .card[_ngcontent-%COMP%] {\n    width: 50%;\n    display: flex;\n    flex-direction: column;\n    border-radius: 0px;\n    height: auto;\n  }\n\n  .container[_ngcontent-%COMP%] {\n    padding-top: 5%;\n  }\n\n  mat-form-field[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n\n  h1[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], mat-card-title[_ngcontent-%COMP%] {\n    font-size: 18px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFRLG9GQUFBO0FBWVI7RUFUSSxhQVV1QjtFQVR2QixtQkFTd0M7RUFSeEMsdUJBUStEO0VBUC9ELG1CQU9xRjtFQUNyRixjQUFBO0FBUEo7QUFTQTtFQUNJLFVBQUE7RUFkQSxhQWV1QjtFQWR2QixpQkFjd0M7RUFieEMscUJBYTZEO0VBWjdELHNCQVlpRjtFQUNqRixXQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0FBSEo7QUFLSTtFQXJCQSxhQXNCMkI7RUFyQjNCLGlCQXFCNEM7RUFwQjVDLHFCQW9CaUU7RUFuQmpFLHNCQW1CcUY7QUFBekY7QUFHQTtFQWxCSSxlQW1Ca0I7RUFDbEIscUVBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7QUFBSjtBQUVBO0VBQ0ksV0FBQTtBQUNKO0FBQUk7RUExQkEsZUEyQnNCO0FBRTFCO0FBQ0E7RUE5QkksZUErQmtCO0FBRXRCO0FBQUE7RUFDSSx5QkFBQTtBQUdKO0FBQUk7RUFDQyxjQUFBO0FBR0w7QUFDQztFQWpERyxhQWtEdUI7RUFqRHZCLGlCQWlEd0M7RUFoRHhDLDhCQWdENkQ7RUEvQzdELG1CQStDMEY7RUFDekYsZ0JBQUE7QUFLTDtBQUpLO0VBQ0kseUJBQUE7RUFDQSxjQUFBO0FBTVQ7QUFIQztFQUNJLGlCQUFBO0VBMURELGFBMkR3QjtFQTFEeEIsaUJBMER5QztFQXpEekMsMkJBeUQ4RDtFQXhEOUQsb0JBd0R3RjtFQUN2RixVQUFBO0FBU0w7QUFQQztFQUNHO0lBQ0ksVUFBQTtJQUNBLGFBQUE7SUFDQSxzQkFBQTtJQUNBLGtCQUFBO0lBQ0EsWUFBQTtFQVVOOztFQVJFO0lBQ0ksZUFBQTtFQVdOOztFQVRFO0lBQ0ksV0FBQTtFQVlOOztFQVZFO0lBQ0ksZUFBQTtFQWFOO0FBQ0YiLCJmaWxlIjoibG9naW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Sb2JvdG86d2dodEAzMDAmZGlzcGxheT1zd2FwJyk7XHJcblxyXG5AbWl4aW4gZmxleCggJGRpc3BsYXksICRhbGlnbml0ZW1zLCAkanVzdGlmeWNvbnRlbnQsJGZsZXhkaXJlY3Rpb24gKSB7IC8vIE1peGluIHdpdGggZGVmYXVsdHNcclxuICAgIGRpc3BsYXk6JGRpc3BsYXk7XHJcbiAgICBhbGlnbi1pdGVtczogJGFsaWduaXRlbXM7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6ICRqdXN0aWZ5Y29udGVudDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiAkZmxleGRpcmVjdGlvbjtcclxuICB9XHJcblxyXG5AbWl4aW4gZm9udFNpemUoJHNpemUpe1xyXG4gICAgZm9udC1zaXplOiAkc2l6ZTtcclxufVxyXG4uY29udGFpbmVye1xyXG4gICAgQGluY2x1ZGUgZmxleCgkZGlzcGxheTpmbGV4LCRhbGlnbml0ZW1zOmNlbnRlciwkanVzdGlmeWNvbnRlbnQ6Y2VudGVyLCRmbGV4ZGlyZWN0aW9uOnJvdyk7XHJcbiAgICBtYXJnaW4tdG9wOiAzJTtcclxufVxyXG4uY2FyZHtcclxuICAgIHdpZHRoOiAzMCU7XHJcbiAgICBAaW5jbHVkZSBmbGV4KCRkaXNwbGF5OmZsZXgsJGFsaWduaXRlbXM6bm9uZSwkanVzdGlmeWNvbnRlbnQ6bm9uZSwkZmxleGRpcmVjdGlvbjpjb2x1bW4pO1xyXG4gICAgcGFkZGluZzogMyU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjREFEQ0UwO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIFxyXG4gICAgLmxvZ2luQ29udGFpbmVye1xyXG4gICAgICAgIEBpbmNsdWRlIGZsZXgoJGRpc3BsYXk6ZmxleCwkYWxpZ25pdGVtczpub25lLCRqdXN0aWZ5Y29udGVudDpub25lLCRmbGV4ZGlyZWN0aW9uOmNvbHVtbik7XHJcbiAgICB9XHJcbn1cclxubWF0LWNhcmQtdGl0bGV7XHJcbiAgICBAaW5jbHVkZSBmb250U2l6ZSgyNXB4KTtcclxuICAgIGZvbnQtZmFtaWx5OiAnR29vZ2xlIFNhbnMnLCdOb3RvIFNhbnMgTXlhbm1hciBVSScsYXJpYWwsc2Fucy1zZXJpZjtcclxuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgICBjb2xvcjogIzIwMjEyNDtcclxufVxyXG5tYXQtZm9ybS1maWVsZHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWF0LWxhYmVse1xyXG4gICAgICAgIEBpbmNsdWRlIGZvbnRTaXplKDE3cHgpO1xyXG4gICAgfVxyXG59XHJcbm1hdC1lcnJvcntcclxuICAgIEBpbmNsdWRlIGZvbnRTaXplKDEycHgpO1xyXG59XHJcbjo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1vdXRsaW5lLm1hdC1mb2N1c2VkIC5tYXQtZm9ybS1maWVsZC1vdXRsaW5lLXRoaWNre1xyXG4gICAgY29sb3I6ICMyRTdGRUEhaW1wb3J0YW50O1xyXG59XHJcbi5mb3JtQ29udGFpbmVye1xyXG4gICAgZGl2IHtcclxuICAgICBtYXJnaW4tdG9wOiA0JTtcclxuICAgICB9XHJcbiB9XHJcblxyXG4gLmJ1dHRvbkNvbnRhaW5lcntcclxuICAgIEBpbmNsdWRlIGZsZXgoJGRpc3BsYXk6ZmxleCwkYWxpZ25pdGVtczpub25lLCRqdXN0aWZ5Y29udGVudDpzcGFjZS1iZXR3ZWVuLCRmbGV4ZGlyZWN0aW9uOnJvdyk7XHJcbiAgICAgcGFkZGluZy10b3A6IDEyJTtcclxuICAgICAuYnV0dG9ue1xyXG4gICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMUE3M0U4O1xyXG4gICAgICAgICBjb2xvcjogI0ZGRkZGRlxyXG4gICAgIH1cclxuIH1cclxuIC5mb3Jnb3RQYXNzd29yZHtcclxuICAgICBtYXJnaW4tdG9wOiAtMTNweDtcclxuICAgICBAaW5jbHVkZSBmbGV4KCRkaXNwbGF5OmZsZXgsJGFsaWduaXRlbXM6bm9uZSwkanVzdGlmeWNvbnRlbnQ6ZmxleC1zdGFydCwkZmxleGRpcmVjdGlvbjpub25lKTtcclxuICAgICBwYWRkaW5nOiAwO1xyXG4gfVxyXG4gQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NTBweCl7XHJcbiAgICAuY2FyZHtcclxuICAgICAgICB3aWR0aDogNTAlO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgfVxyXG4gICAgLmNvbnRhaW5lcntcclxuICAgICAgICBwYWRkaW5nLXRvcDogNSU7XHJcbiAgICB9XHJcbiAgICBtYXQtZm9ybS1maWVsZHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxuICAgIGgxLGgzLG1hdC1jYXJkLXRpdGxle1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIH1cclxuICAgIFxyXG4gfSJdfQ== */"] });


/***/ }),

/***/ 5953:
/*!**********************************************************!*\
  !*** ./src/app/Component/register/register.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegisterComponent": () => (/* binding */ RegisterComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var src_app_Service_UserService_user_service_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/Service/UserService/user-service.service */ 5988);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/snack-bar */ 8456);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/card */ 2118);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/form-field */ 5788);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/input */ 4742);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/checkbox */ 4058);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ 781);












function RegisterComponent_mat_error_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.getErrorMessage("firstName"));
} }
function RegisterComponent_mat_error_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r1.getErrorMessage("lastName"));
} }
function RegisterComponent_mat_error_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r2.getErrorMessage("email"));
} }
function RegisterComponent_mat_error_44_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r3.getErrorMessage("password"));
} }
function RegisterComponent_mat_error_49_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Password doesn't match");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
const _c0 = function () { return ["/login"]; };
class RegisterComponent {
    constructor(userService, snackBar, router) {
        this.userService = userService;
        this.snackBar = snackBar;
        this.router = router;
        // variable - default false
        this.hide = true;
        this.isVisible = true;
    }
    ngOnInit() {
        this.RegisterForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroup({
            firstName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.pattern('^[A-Z]{1}[a-zA-Z]{2,}'), _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.minLength(3)]),
            lastName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.pattern('^[A-Z]{1}[a-zA-Z]{2,}'), _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.minLength(3)]),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.email]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.pattern('^.*(?=.{8,})(?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!*@#$%^&+=]).*$'), _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.minLength(8)]),
            confirmPassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required])
        });
    }
    onSubmit() {
        if (this.RegisterForm.valid) {
            this.Register();
        }
    }
    ShowPassword() {
        this.hide = !this.hide;
    }
    getErrorMessage(inputName) {
        let len = inputName == "password" ? 8 : 3;
        if (this.RegisterForm.controls[`${inputName}`].hasError('required')) {
            return 'You must enter a value';
        }
        else if (this.RegisterForm.controls[`${inputName}`].hasError('minlength')) {
            return `minimum ${len} characters`;
        }
        else if (this.RegisterForm.controls[`${inputName}`].hasError('email')) {
            return `${inputName} is invalid`;
        }
        return this.RegisterForm.controls[`${inputName}`].hasError('pattern') ? `${inputName} is invalid` : '';
    }
    Register() {
        this.userService.Register(this.RegisterForm.value).
            subscribe((status) => {
            this.snackBar.open(`${status.message}`, '', { duration: 3000, verticalPosition: 'bottom',
                horizontalPosition: 'left' });
            if (`${status.status == true}`)
                this.router.navigate(['/login']);
        }, error => {
            this.snackBar.open(`${error.error.message}`, '', { duration: 3000, verticalPosition: 'bottom',
                horizontalPosition: 'left' });
        });
    }
}
RegisterComponent.ɵfac = function RegisterComponent_Factory(t) { return new (t || RegisterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_Service_UserService_user_service_service__WEBPACK_IMPORTED_MODULE_0__.UserServiceService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__.MatSnackBar), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router)); };
RegisterComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: RegisterComponent, selectors: [["app-register"]], decls: 64, vars: 14, consts: [[1, "container"], [1, "card"], [1, "registerContainer"], [2, "color", "#4285F4"], [2, "color", "#EA4335"], [2, "color", "#FBBC05"], [2, "color", "#34A853"], [2, "color", "#EB4E41"], [1, "formContainer", 3, "formGroup", "ngSubmit"], [1, "name"], ["appearance", "outline"], ["matInput", "", "id", "FirstName", "formControlName", "firstName"], [4, "ngIf"], ["appearance", "outline", 1, "lastname"], ["matInput", "", "id", "lastname", "formControlName", "lastName"], [1, "username"], ["appearance", "outline", 1, "email"], ["matInput", "", "id", "username", "formControlName", "email"], [1, "password"], ["appearance", "outline", 3, "click"], ["matInput", "", "id", "password", "formControlName", "password", 3, "type"], ["appearance", "outline", 1, "confirm", 3, "click"], ["matInput", "", "id", "confirmPassword", "formControlName", "confirmPassword", 3, "type", "pattern"], [2, "margin-top", "-10px"], ["id", "showPassword", 3, "click"], [1, "buttonContainer"], ["mat-button", "", 2, "color", "#1A73E8", 3, "routerLink"], ["type", "submit", "mat-raised-button", "", 1, "button"], [1, "imageContainer"], ["src", "../../../assets/RegisterImage.svg"]], template: function RegisterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-card", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "F");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "u");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "n");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "d");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "o");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "o");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "mat-card-subtitle");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, " Create Your Fundoo Account");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "form", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function RegisterComponent_Template_form_ngSubmit_19_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "mat-form-field", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "FirstName");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](24, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](25, RegisterComponent_mat_error_25_Template, 2, 1, "mat-error", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "mat-form-field", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "Lastname");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](29, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](30, RegisterComponent_mat_error_30_Template, 2, 1, "mat-error", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "mat-form-field", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "UserName");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](35, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "mat-hint");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, "You can use letter, numbers and Periods");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](38, RegisterComponent_mat_error_38_Template, 2, 1, "mat-error", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "mat-form-field", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RegisterComponent_Template_mat_form_field_click_40_listener() { return ctx.isVisible = false; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](43, "input", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](44, RegisterComponent_mat_error_44_Template, 2, 1, "mat-error", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "mat-form-field", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RegisterComponent_Template_mat_form_field_click_45_listener() { return ctx.isVisible = false; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](47, "Confirm");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](48, "input", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](49, RegisterComponent_mat_error_49_Template, 2, 0, "mat-error", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "mat-hint", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](51, "Use 8 or more characters with a mix of letters, numbers & symbols");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "mat-checkbox", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RegisterComponent_Template_mat_checkbox_click_53_listener() { return ctx.ShowPassword(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](54);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "button", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](57, "Sign in instead");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "button", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](59, "Register");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](61, "img", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](63, "One account. All of Google working for you");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.RegisterForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.RegisterForm.controls["firstName"].invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.RegisterForm.controls["firstName"].invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.RegisterForm.controls["email"].invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("type", ctx.hide ? "password" : "text");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.RegisterForm.controls["password"].invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("pattern", ctx.RegisterForm.value.password);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("type", ctx.hide ? "password" : "text");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.RegisterForm.controls["confirmPassword"].invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("display", ctx.isVisible ? "block" : "none");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.hide ? "Show Password" : "Hide Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](13, _c0));
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_5__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_5__.MatCardTitle, _angular_material_card__WEBPACK_IMPORTED_MODULE_5__.MatCardSubtitle, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_7__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__.MatHint, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.PatternValidator, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_9__.MatCheckbox, _angular_material_button__WEBPACK_IMPORTED_MODULE_10__.MatButton, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLink, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__.MatError], styles: ["@import url(\"https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap\");\n@import url(\"https://fonts.googleapis.com/css2?family=Arimo&display=swap\");\n.container[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: row;\n  margin-top: 3%;\n}\n.card[_ngcontent-%COMP%] {\n  width: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: row;\n  padding: 3%;\n  border: 1px solid #DADCE0;\n  border-radius: 10px;\n}\n.card[_ngcontent-%COMP%]   .registerContainer[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: left;\n  justify-content: none;\n  flex-direction: column;\n  width: 73%;\n}\n.card[_ngcontent-%COMP%]   .imageContainer[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: none;\n  justify-content: center;\n  flex-direction: column;\n}\n.card[_ngcontent-%COMP%]   .imageContainer[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  text-align: center;\n  font-family: \"Roboto\", sans-serif;\n  font-size: 18px;\n}\nmat-card-title[_ngcontent-%COMP%], mat-card-subtitle[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-family: \"Google Sans\", \"Noto Sans Myanmar UI\", arial, sans-serif;\n  margin-bottom: 15px;\n  font-weight: 400;\n  color: #202124;\n}\nmat-hint[_ngcontent-%COMP%] {\n  color: #5f6368;\n  font-size: small;\n}\n.name[_ngcontent-%COMP%], .password[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex-direction: row;\n  flex-flow: row wrap;\n}\n.email[_ngcontent-%COMP%] {\n  width: 100%;\n  font-size: 8px;\n}\nmat-form-field[_ngcontent-%COMP%] {\n  font-size: 8px;\n}\nmat-form-field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  padding: 3px;\n}\nmat-label[_ngcontent-%COMP%] {\n  font-size: 15px;\n}\nmat-error[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n  .mat-checkbox-checked.mat-accent .mat-checkbox-background {\n  background-color: #1A73E8 !important;\n}\n.formContainer[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  margin-top: 4%;\n}\n.buttonContainer[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: none;\n  justify-content: space-between;\n  flex-direction: row;\n  padding-top: 12%;\n}\n.buttonContainer[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%] {\n  background-color: #1A73E8;\n  color: #FFFFFF;\n}\n@media only screen and (max-width: 900px) {\n  .imageContainer[_ngcontent-%COMP%] {\n    display: none !important;\n  }\n\n  .lastname[_ngcontent-%COMP%], .confirm[_ngcontent-%COMP%] {\n    margin-left: 0px !important;\n  }\n\n  .card[_ngcontent-%COMP%] {\n    width: 100%;\n    border-radius: 0px;\n  }\n\n  .container[_ngcontent-%COMP%] {\n    margin-top: 0;\n  }\n\n  mat-form-field[_ngcontent-%COMP%] {\n    width: 100% !important;\n  }\n\n  .email[_ngcontent-%COMP%] {\n    width: 95% !important;\n    font-size: 8px;\n  }\n\n  .password[_ngcontent-%COMP%] {\n    margin-top: 16px !important;\n  }\n\n  .buttonContainer[_ngcontent-%COMP%] {\n    margin: 0;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZ2lzdGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFRLG9GQUFBO0FBQ0EsMEVBQUE7QUFjUjtFQVhJLGFBWXVCO0VBWHZCLG1CQVd3QztFQVZ4Qyx1QkFVK0Q7RUFUL0QsbUJBU3FGO0VBQ3JGLGNBQUE7QUFUSjtBQVdBO0VBQ0ksVUFBQTtFQWhCQSxhQWlCdUI7RUFoQnZCLG1CQWdCd0M7RUFmeEMsdUJBZStEO0VBZC9ELG1CQWNxRjtFQUNyRixXQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtBQUxKO0FBT0k7RUF0QkEsYUF1QjJCO0VBdEIzQixpQkFzQjRDO0VBckI1QyxxQkFxQmlFO0VBcEJqRSxzQkFvQnFGO0VBQ2pGLFVBQUE7QUFGUjtBQUlJO0VBMUJBLGFBMkIyQjtFQTFCM0IsaUJBMEI0QztFQXpCNUMsdUJBeUJpRTtFQXhCakUsc0JBd0J1RjtBQUMzRjtBQUFRO0VBQ0ksa0JBQUE7RUFDQSxpQ0FBQTtFQXhCUixlQXlCMEI7QUFFOUI7QUFJQTtFQS9CSSxlQWdDa0I7RUFDbEIscUVBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQURKO0FBR0E7RUFDSSxjQUFBO0VBdkNBLGdCQXdDa0I7QUFBdEI7QUFFQTtFQWhESSxhQWlEdUI7RUFoRHZCLG1CQWdEd0M7RUEvQ3hDLDhCQStDK0Q7RUE5Qy9ELG1CQThDNEY7RUFDNUYsbUJBQUE7QUFJSjtBQUZBO0VBQ0ksV0FBQTtFQUNBLGNBN0NPO0FBa0RYO0FBSEE7RUFDSSxjQWhETztBQXNEWDtBQUxJO0VBQ0ksWUFBQTtBQU9SO0FBSkE7RUF4REksZUF5RGtCO0FBT3RCO0FBTEE7RUEzREksZUE0RGtCO0FBUXRCO0FBTkE7RUFDSSxvQ0FBQTtBQVNKO0FBTEc7RUFFSSxjQUFBO0FBT1A7QUFKQTtFQTlFSSxhQStFdUI7RUE5RXZCLGlCQThFd0M7RUE3RXhDLDhCQTZFNkQ7RUE1RTdELG1CQTRFMEY7RUFDMUYsZ0JBQUE7QUFVSjtBQVRJO0VBRUkseUJBQUE7RUFDQSxjQUFBO0FBVVI7QUFMQTtFQUNJO0lBQ0ksd0JBQUE7RUFRTjs7RUFORTtJQUNJLDJCQUFBO0VBU047O0VBUEU7SUFDSSxXQUFBO0lBQ0Esa0JBQUE7RUFVTjs7RUFSRTtJQUNJLGFBQUE7RUFXTjs7RUFURTtJQUNJLHNCQUFBO0VBWU47O0VBVkU7SUFDSSxxQkFBQTtJQUNBLGNBbkdHO0VBZ0hUOztFQVhFO0lBQ0ksMkJBQUE7RUFjTjs7RUFaRTtJQUNFLFNBQUE7RUFlSjtBQUNGIiwiZmlsZSI6InJlZ2lzdGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Um9ib3RvOndnaHRAMzAwJmRpc3BsYXk9c3dhcCcpO1xyXG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1BcmltbyZkaXNwbGF5PXN3YXAnKTtcclxuXHJcbkBtaXhpbiBmbGV4KCAkZGlzcGxheSwgJGFsaWduaXRlbXMsICRqdXN0aWZ5Y29udGVudCwkZmxleGRpcmVjdGlvbiApIHsgLy8gTWl4aW4gd2l0aCBkZWZhdWx0c1xyXG4gICAgZGlzcGxheTokZGlzcGxheTtcclxuICAgIGFsaWduLWl0ZW1zOiAkYWxpZ25pdGVtcztcclxuICAgIGp1c3RpZnktY29udGVudDogJGp1c3RpZnljb250ZW50O1xyXG4gICAgZmxleC1kaXJlY3Rpb246ICRmbGV4ZGlyZWN0aW9uO1xyXG4gIH1cclxuQG1peGluIGZvbnRTaXplKCRzaXplKXtcclxuICAgIGZvbnQtc2l6ZTogJHNpemU7XHJcbn1cclxuXHJcbiRib3gtc2l6ZTogOHB4O1xyXG5cclxuLmNvbnRhaW5lcntcclxuICAgIEBpbmNsdWRlIGZsZXgoJGRpc3BsYXk6ZmxleCwkYWxpZ25pdGVtczpjZW50ZXIsJGp1c3RpZnljb250ZW50OmNlbnRlciwkZmxleGRpcmVjdGlvbjpyb3cpO1xyXG4gICAgbWFyZ2luLXRvcDogMyU7XHJcbn1cclxuLmNhcmR7XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gICAgQGluY2x1ZGUgZmxleCgkZGlzcGxheTpmbGV4LCRhbGlnbml0ZW1zOmNlbnRlciwkanVzdGlmeWNvbnRlbnQ6Y2VudGVyLCRmbGV4ZGlyZWN0aW9uOnJvdyk7XHJcbiAgICBwYWRkaW5nOiAzJTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNEQURDRTA7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgXHJcbiAgICAucmVnaXN0ZXJDb250YWluZXJ7XHJcbiAgICAgICAgQGluY2x1ZGUgZmxleCgkZGlzcGxheTpmbGV4LCRhbGlnbml0ZW1zOmxlZnQsJGp1c3RpZnljb250ZW50Om5vbmUsJGZsZXhkaXJlY3Rpb246Y29sdW1uKTtcclxuICAgICAgICB3aWR0aDogNzMlO1xyXG4gICAgfVxyXG4gICAgLmltYWdlQ29udGFpbmVye1xyXG4gICAgICAgIEBpbmNsdWRlIGZsZXgoJGRpc3BsYXk6ZmxleCwkYWxpZ25pdGVtczpub25lLCRqdXN0aWZ5Y29udGVudDpjZW50ZXIsJGZsZXhkaXJlY3Rpb246Y29sdW1uKTtcclxuICAgICAgICBwe1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcclxuICAgICAgICAgICAgQGluY2x1ZGUgZm9udFNpemUoMThweCk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxubWF0LWNhcmQtdGl0bGUsbWF0LWNhcmQtc3VidGl0bGV7XHJcbiAgICBAaW5jbHVkZSBmb250U2l6ZSgyNHB4KTtcclxuICAgIGZvbnQtZmFtaWx5OiAnR29vZ2xlIFNhbnMnLCdOb3RvIFNhbnMgTXlhbm1hciBVSScsYXJpYWwsc2Fucy1zZXJpZjtcclxuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgY29sb3I6ICMyMDIxMjQ7XHJcbn1cclxubWF0LWhpbnR7XHJcbiAgICBjb2xvcjogIzVmNjM2ODtcclxuICAgIEBpbmNsdWRlIGZvbnRTaXplKHNtYWxsKTtcclxufVxyXG4ubmFtZSwucGFzc3dvcmR7XHJcbiAgICBAaW5jbHVkZSBmbGV4KCRkaXNwbGF5OmZsZXgsJGFsaWduaXRlbXM6Y2VudGVyLCRqdXN0aWZ5Y29udGVudDpzcGFjZS1iZXR3ZWVuLCRmbGV4ZGlyZWN0aW9uOnJvdyk7XHJcbiAgICBmbGV4LWZsb3c6IHJvdyB3cmFwO1xyXG59XHJcbi5lbWFpbHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZm9udC1zaXplOiAgJGJveC1zaXplO1xyXG59XHJcbm1hdC1mb3JtLWZpZWxke1xyXG4gICAgZm9udC1zaXplOiAkYm94LXNpemU7XHJcbiAgICBpbnB1dHtcclxuICAgICAgICBwYWRkaW5nOjNweDtcclxuICAgIH1cclxufVxyXG5tYXQtbGFiZWx7XHJcbiAgICBAaW5jbHVkZSBmb250U2l6ZSgxNXB4KTtcclxufVxyXG5tYXQtZXJyb3J7XHJcbiAgICBAaW5jbHVkZSBmb250U2l6ZSgxMnB4KTtcclxufVxyXG46Om5nLWRlZXAgLm1hdC1jaGVja2JveC1jaGVja2VkLm1hdC1hY2NlbnQgLm1hdC1jaGVja2JveC1iYWNrZ3JvdW5kIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxQTczRTggIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4uZm9ybUNvbnRhaW5lcntcclxuICAgZGl2XHJcbiAgICB7XHJcbiAgICAgICBtYXJnaW4tdG9wOiA0JTtcclxuICAgIH1cclxufVxyXG4uYnV0dG9uQ29udGFpbmVye1xyXG4gICAgQGluY2x1ZGUgZmxleCgkZGlzcGxheTpmbGV4LCRhbGlnbml0ZW1zOm5vbmUsJGp1c3RpZnljb250ZW50OnNwYWNlLWJldHdlZW4sJGZsZXhkaXJlY3Rpb246cm93KTtcclxuICAgIHBhZGRpbmctdG9wOiAxMiU7XHJcbiAgICAuYnV0dG9uXHJcbiAgICB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzFBNzNFODtcclxuICAgICAgICBjb2xvcjogI0ZGRkZGRlxyXG4gICAgfVxyXG59XHJcblxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5MDBweCl7XHJcbiAgICAuaW1hZ2VDb250YWluZXJ7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgLmxhc3RuYW1lLC5jb25maXJte1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAwcHghaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgLmNhcmR7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMHB4O1xyXG4gICAgfVxyXG4gICAgLmNvbnRhaW5lcntcclxuICAgICAgICBtYXJnaW4tdG9wOiAwO1xyXG4gICAgfVxyXG4gICAgbWF0LWZvcm0tZmllbGR7XHJcbiAgICAgICAgd2lkdGg6IDEwMCUhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgLmVtYWlse1xyXG4gICAgICAgIHdpZHRoOiA5NSUhaW1wb3J0YW50O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogJGJveC1zaXplO1xyXG4gICAgfVxyXG4gICAgLnBhc3N3b3Jke1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDE2cHghaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgLmJ1dHRvbkNvbnRhaW5lcntcclxuICAgICAgbWFyZ2luOiAwO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuXHJcbiJdfQ== */"] });


/***/ }),

/***/ 8885:
/*!**********************************************************************!*\
  !*** ./src/app/Component/reset-password/reset-password.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ResetPasswordComponent": () => (/* binding */ ResetPasswordComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var src_app_Service_UserService_user_service_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/Service/UserService/user-service.service */ 5988);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/snack-bar */ 8456);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/card */ 2118);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/form-field */ 5788);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/input */ 4742);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/checkbox */ 4058);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ 781);












function ResetPasswordComponent_mat_error_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.getErrorMessage("password"));
} }
function ResetPasswordComponent_mat_error_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Password doesn't match");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
const _c0 = function () { return ["/login"]; };
class ResetPasswordComponent {
    constructor(userService, snackBar, router) {
        this.userService = userService;
        this.snackBar = snackBar;
        this.router = router;
        this.hide = true;
    }
    ngOnInit() {
        this.ResetPasswordForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroup({
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.pattern('^.*(?=.{8,})(?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!*@#$%^&+=]).*$'), _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.minLength(8)]),
            confirmPassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required])
        });
    }
    onSubmit() {
        if (this.ResetPasswordForm.valid) {
            this.forgotPassword();
        }
    }
    getErrorMessage(inputName) {
        if (this.ResetPasswordForm.controls[`${inputName}`].hasError('required')) {
            return 'You must enter a value';
        }
        else if (this.ResetPasswordForm.controls[`${inputName}`].hasError('minlength')) {
            return `minimum 8 characters required`;
        }
        return this.ResetPasswordForm.controls[`${inputName}`].hasError('pattern') ? `${inputName} is invalid` : '';
    }
    ShowPassword() {
        this.hide = !this.hide;
    }
    forgotPassword() {
        this.userService.ResetPassword(this.ResetPasswordForm.value).
            subscribe((status) => {
            console.log(status);
            this.snackBar.open(`${status.message}`, '', { duration: 3000, verticalPosition: 'bottom', horizontalPosition: 'left' });
            if (`${status.status == true}`)
                this.router.navigate(['/login']);
        }, error => {
            this.snackBar.open(`${error.error.message}`, '', { duration: 3000, verticalPosition: 'bottom', horizontalPosition: 'left' });
        });
    }
}
ResetPasswordComponent.ɵfac = function ResetPasswordComponent_Factory(t) { return new (t || ResetPasswordComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_Service_UserService_user_service_service__WEBPACK_IMPORTED_MODULE_0__.UserServiceService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__.MatSnackBar), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router)); };
ResetPasswordComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ResetPasswordComponent, selectors: [["app-reset-password"]], decls: 41, vars: 9, consts: [[1, "container"], [1, "card"], [1, "loginContainer"], [2, "color", "#4285F4"], [2, "color", "#EA4335"], [2, "color", "#FBBC05"], [2, "color", "#34A853"], [2, "color", "#EB4E41"], [1, "formContainer", 3, "formGroup", "ngSubmit"], [1, "password"], ["appearance", "outline"], ["matInput", "", "id", "password", "formControlName", "password", 3, "type"], [4, "ngIf"], [1, "password", "confirmPassword"], ["appearance", "outline", 1, "confirm"], ["matInput", "", "id", "confirmPassword", "formControlName", "confirmPassword", 3, "type", "pattern"], ["id", "showPassword", 3, "click"], [1, "buttonContainer"], ["mat-button", "", 2, "color", "#1A73E8", 3, "routerLink"], ["type", "submit", "mat-raised-button", "", 1, "button"]], template: function ResetPasswordComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-card", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "F");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "u");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "n");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "d");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "o");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "o");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Change Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "form", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function ResetPasswordComponent_Template_form_ngSubmit_18_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "mat-form-field", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](23, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](24, ResetPasswordComponent_mat_error_24_Template, 2, 1, "mat-error", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "mat-hint");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "Use 8 or more characters with a mix of letters, numbers & symbols");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "mat-form-field", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "Confirm");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](31, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](32, ResetPasswordComponent_mat_error_32_Template, 2, 0, "mat-error", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "mat-checkbox", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ResetPasswordComponent_Template_mat_checkbox_click_34_listener() { return ctx.ShowPassword(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, "Reset");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.ResetPasswordForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("type", ctx.hide ? "password" : "text");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.ResetPasswordForm.controls["password"].invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("pattern", ctx.ResetPasswordForm.value.password);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("type", ctx.hide ? "password" : "text");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.ResetPasswordForm.controls["confirmPassword"].invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.hide ? "Show Password" : "Hide Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](8, _c0));
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_5__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_5__.MatCardTitle, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_7__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__.MatHint, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.PatternValidator, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_9__.MatCheckbox, _angular_material_button__WEBPACK_IMPORTED_MODULE_10__.MatButton, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLink, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__.MatError], styles: ["@import url(\"https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap\");\n.container[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-top: 3%;\n}\n.card[_ngcontent-%COMP%] {\n  width: 27%;\n  display: flex;\n  flex-direction: column;\n  padding: 4%;\n  border-radius: 10px;\n  text-align: center;\n  border: 1px solid #DADCE0;\n}\n.card[_ngcontent-%COMP%]   .loginContainer[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\nmat-card-title[_ngcontent-%COMP%] {\n  font-size: 2.2vw;\n  font-weight: bolder;\n  font-family: \"Google Sans\", \"Noto Sans Myanmar UI\", arial, sans-serif;\n  margin-bottom: 15px;\n  color: #202124;\n}\nmat-form-field[_ngcontent-%COMP%] {\n  width: 100%;\n}\nmat-form-field[_ngcontent-%COMP%]   mat-label[_ngcontent-%COMP%] {\n  font-size: 17px;\n}\nmat-error[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n  .mat-form-field-appearance-outline.mat-focused .mat-form-field-outline-thick {\n  color: #2E7FEA !important;\n}\n.formContainer[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  margin-top: 4%;\n}\n.formContainer[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   mat-hint[_ngcontent-%COMP%] {\n  margin-bottom: 5px;\n}\n#showPassword[_ngcontent-%COMP%] {\n  margin-top: -20px;\n  display: flex;\n  justify-content: flex-start;\n}\n  .mat-checkbox-checked.mat-accent .mat-checkbox-background {\n  background-color: #1A73E8 !important;\n}\n.buttonContainer[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  padding-top: 3%;\n}\n.buttonContainer[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%] {\n  background-color: #1A73E8;\n  color: #FFFFFF;\n}\n.forgotPassword[_ngcontent-%COMP%] {\n  margin-top: -13px;\n  display: flex;\n  align-items: flex-start;\n  padding: 0;\n}\n@media only screen and (max-width: 750px) {\n  .card[_ngcontent-%COMP%] {\n    width: 50%;\n    display: flex;\n    flex-direction: column;\n    border-radius: 0px;\n    height: auto;\n  }\n\n  .container[_ngcontent-%COMP%] {\n    padding-top: 5%;\n  }\n\n  mat-form-field[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n\n  h1[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], mat-card-title[_ngcontent-%COMP%] {\n    font-size: 18px;\n  }\n}\n@media only screen and (max-width: 750px) {\n  mat-hint[_ngcontent-%COMP%] {\n    font-size: 10px;\n  }\n\n  .confirmPassword[_ngcontent-%COMP%] {\n    padding-top: 6%;\n  }\n}\n@media only screen and (max-width: 300px) {\n  mat-hint[_ngcontent-%COMP%] {\n    font-size: 8px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlc2V0LXBhc3N3b3JkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFRLG9GQUFBO0FBQ1I7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGNBQUE7QUFDSjtBQUNBO0VBQ0ksVUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7QUFFSjtBQUFJO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0FBRVI7QUFDQTtFQUNJLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxxRUFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtBQUVKO0FBQUE7RUFDSSxXQUFBO0FBR0o7QUFGSTtFQUNJLGVBQUE7QUFJUjtBQURBO0VBQ0ksZUFBQTtBQUlKO0FBRkE7RUFDSSx5QkFBQTtBQUtKO0FBRkk7RUFDQyxjQUFBO0FBS0w7QUFKSztFQUNJLGtCQUFBO0FBTVQ7QUFGQztFQUNJLGlCQUFBO0VBQ0wsYUFBQTtFQUNBLDJCQUFBO0FBS0E7QUFIQztFQUNHLG9DQUFBO0FBTUo7QUFIQztFQUNJLGFBQUE7RUFDQSw4QkFBQTtFQUNBLGVBQUE7QUFNTDtBQUxLO0VBQ0kseUJBQUE7RUFDQSxjQUFBO0FBT1Q7QUFKQztFQUNJLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsVUFBQTtBQU9MO0FBTEM7RUFDRztJQUNJLFVBQUE7SUFDQSxhQUFBO0lBQ0Esc0JBQUE7SUFDQSxrQkFBQTtJQUNBLFlBQUE7RUFRTjs7RUFORTtJQUNJLGVBQUE7RUFTTjs7RUFQRTtJQUNJLFdBQUE7RUFVTjs7RUFSRTtJQUNJLGVBQUE7RUFXTjtBQUNGO0FBVEM7RUFDQTtJQUNJLGVBQUE7RUFXSDs7RUFURDtJQUNJLGVBQUE7RUFZSDtBQUNGO0FBVkM7RUFDRztJQUNJLGNBQUE7RUFZTjtBQUNGIiwiZmlsZSI6InJlc2V0LXBhc3N3b3JkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Um9ib3RvOndnaHRAMzAwJmRpc3BsYXk9c3dhcCcpO1xyXG4uY29udGFpbmVye1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIG1hcmdpbi10b3A6IDMlO1xyXG59XHJcbi5jYXJke1xyXG4gICAgd2lkdGg6IDI3JTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgcGFkZGluZzogNCU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI0RBRENFMDtcclxuICAgIFxyXG4gICAgLmxvZ2luQ29udGFpbmVye1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIH1cclxufVxyXG5tYXQtY2FyZC10aXRsZXtcclxuICAgIGZvbnQtc2l6ZTogMi4ydnc7XHJcbiAgICBmb250LXdlaWdodDpib2xkZXI7XHJcbiAgICBmb250LWZhbWlseTogJ0dvb2dsZSBTYW5zJywnTm90byBTYW5zIE15YW5tYXIgVUknLGFyaWFsLHNhbnMtc2VyaWY7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gICAgY29sb3I6ICMyMDIxMjQ7XHJcbn1cclxubWF0LWZvcm0tZmllbGR7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hdC1sYWJlbHtcclxuICAgICAgICBmb250LXNpemU6IDE3cHg7XHJcbiAgICB9XHJcbn1cclxubWF0LWVycm9ye1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG59XHJcbjo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1vdXRsaW5lLm1hdC1mb2N1c2VkIC5tYXQtZm9ybS1maWVsZC1vdXRsaW5lLXRoaWNre1xyXG4gICAgY29sb3I6ICMyRTdGRUEhaW1wb3J0YW50O1xyXG59XHJcbi5mb3JtQ29udGFpbmVye1xyXG4gICAgZGl2IHtcclxuICAgICBtYXJnaW4tdG9wOiA0JTtcclxuICAgICBtYXQtaGludHtcclxuICAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gICAgIH1cclxuICAgICB9XHJcbiB9XHJcbiAjc2hvd1Bhc3N3b3Jke1xyXG4gICAgIG1hcmdpbi10b3A6IC0yMHB4O1xyXG5kaXNwbGF5OiBmbGV4O1xyXG5qdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiB9XHJcbiA6Om5nLWRlZXAgLm1hdC1jaGVja2JveC1jaGVja2VkLm1hdC1hY2NlbnQgLm1hdC1jaGVja2JveC1iYWNrZ3JvdW5kIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxQTczRTggIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gLmJ1dHRvbkNvbnRhaW5lcntcclxuICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICBwYWRkaW5nLXRvcDogMyU7XHJcbiAgICAgLmJ1dHRvbntcclxuICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzFBNzNFODtcclxuICAgICAgICAgY29sb3I6ICNGRkZGRkZcclxuICAgICB9XHJcbiB9XHJcbiAuZm9yZ290UGFzc3dvcmR7XHJcbiAgICAgbWFyZ2luLXRvcDogLTEzcHg7XHJcbiAgICAgZGlzcGxheTogZmxleDtcclxuICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICAgICBwYWRkaW5nOiAwO1xyXG4gfVxyXG4gQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NTBweCl7XHJcbiAgICAuY2FyZHtcclxuICAgICAgICB3aWR0aDogNTAlO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgfVxyXG4gICAgLmNvbnRhaW5lcntcclxuICAgICAgICBwYWRkaW5nLXRvcDogNSU7XHJcbiAgICB9XHJcbiAgICBtYXQtZm9ybS1maWVsZHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxuICAgIGgxLGgzLG1hdC1jYXJkLXRpdGxle1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIH0gICBcclxuIH1cclxuIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzUwcHgpe1xyXG4gbWF0LWhpbnR7XHJcbiAgICAgZm9udC1zaXplOiAxMHB4O1xyXG4gfVxyXG4gLmNvbmZpcm1QYXNzd29yZHtcclxuICAgICBwYWRkaW5nLXRvcDogNiU7XHJcbiB9XHJcbn1cclxuIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzAwcHgpe1xyXG4gICAgbWF0LWhpbnR7XHJcbiAgICAgICAgZm9udC1zaXplOiA4cHg7XHJcbiAgICB9XHJcbn0iXX0= */"] });


/***/ }),

/***/ 9720:
/*!*************************************************************!*\
  !*** ./src/app/Service/HttpService/http-service.service.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HttpServiceService": () => (/* binding */ HttpServiceService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 3882);


class HttpServiceService {
    constructor(http) {
        this.http = http;
    }
    post(url, data = null, isHeaderRequired = false, headers = null) {
        console.log(url, data + "value");
        return this.http.post(url, data, isHeaderRequired && headers);
    }
    put(url, data = null, isHeaderRequired = false, headers = null) {
        console.log(url, data + "value");
        return this.http.put(url, data, isHeaderRequired && headers);
    }
}
HttpServiceService.ɵfac = function HttpServiceService_Factory(t) { return new (t || HttpServiceService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient)); };
HttpServiceService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: HttpServiceService, factory: HttpServiceService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 5988:
/*!*************************************************************!*\
  !*** ./src/app/Service/UserService/user-service.service.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserServiceService": () => (/* binding */ UserServiceService)
/* harmony export */ });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _HttpService_http_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../HttpService/http-service.service */ 9720);



class UserServiceService {
    constructor(httpService) {
        this.httpService = httpService;
    }
    Register(data) {
        const params = {
            FirstName: data.firstName,
            LastName: data.lastName,
            Email: data.email,
            Password: data.password,
        };
        return this.httpService.post(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrl}/api/register`, params);
    }
    Login(data) {
        const params = {
            Email: data.email,
            Password: data.password,
        };
        return this.httpService.post(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrl}/api/login`, params);
    }
    ResetMail(data) {
        return this.httpService.post(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrl}/api/forgotpassword?email=${data}`);
    }
    ResetPassword(data) {
        const params = {
            Email: localStorage.getItem("Username"),
            Password: data.password,
        };
        return this.httpService.put(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrl}/api/resetpassword`, params);
    }
}
UserServiceService.ɵfac = function UserServiceService_Factory(t) { return new (t || UserServiceService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_HttpService_http_service_service__WEBPACK_IMPORTED_MODULE_1__.HttpServiceService)); };
UserServiceService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: UserServiceService, factory: UserServiceService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var _Component_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Component/dashboard/dashboard.component */ 8053);
/* harmony import */ var _Component_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Component/forgot-password/forgot-password.component */ 8590);
/* harmony import */ var _Component_login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Component/login/login.component */ 5534);
/* harmony import */ var _Component_register_register_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Component/register/register.component */ 5953);
/* harmony import */ var _Component_reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Component/reset-password/reset-password.component */ 8885);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2316);








const token = localStorage.getItem("Token");
const routes = [
    { path: 'register', component: _Component_register_register_component__WEBPACK_IMPORTED_MODULE_3__.RegisterComponent },
    { path: 'login', component: _Component_login_login_component__WEBPACK_IMPORTED_MODULE_2__.LoginComponent },
    { path: 'forgetPassword', component: _Component_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_1__.ForgotPasswordComponent },
    { path: `resetpassword/${token}`, component: _Component_reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_4__.ResetPasswordComponent },
    { path: 'home', component: _Component_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_0__.DashboardComponent },
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule.forRoot(routes, {
                initialNavigation: 'enabled'
            })], _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule] }); })();


/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 1258);


class AppComponent {
    constructor() {
        this.title = 'FundooNotes';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser */ 1570);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/platform-browser/animations */ 718);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/toolbar */ 4106);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/icon */ 2529);
/* harmony import */ var _Component_register_register_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Component/register/register.component */ 5953);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/card */ 2118);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/form-field */ 5788);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/input */ 4742);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/checkbox */ 4058);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/button */ 781);
/* harmony import */ var _Component_login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Component/login/login.component */ 5534);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/common/http */ 3882);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/snack-bar */ 8456);
/* harmony import */ var _Component_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Component/forgot-password/forgot-password.component */ 8590);
/* harmony import */ var _Component_reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Component/reset-password/reset-password.component */ 8885);
/* harmony import */ var _Component_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Component/dashboard/dashboard.component */ 8053);
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/sidenav */ 6608);
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/list */ 8417);
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/expansion */ 2323);
/* harmony import */ var _Component_add_note_add_note_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Component/add-note/add-note.component */ 8153);
/* harmony import */ var ngx_autosize__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ngx-autosize */ 1967);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/menu */ 221);
/* harmony import */ var _Component_icon_icon_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Component/icon/icon.component */ 7609);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 2316);





























class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__.BrowserModule.withServerTransition({ appId: 'serverApp' }),
            _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__.BrowserAnimationsModule,
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_12__.MatToolbarModule,
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__.MatIconModule,
            _angular_material_card__WEBPACK_IMPORTED_MODULE_14__.MatCardModule,
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__.MatFormFieldModule,
            _angular_material_input__WEBPACK_IMPORTED_MODULE_16__.MatInputModule,
            _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_17__.MatCheckboxModule,
            _angular_material_button__WEBPACK_IMPORTED_MODULE_18__.MatButtonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_19__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_19__.ReactiveFormsModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_20__.HttpClientModule,
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_21__.MatSnackBarModule,
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_22__.MatSidenavModule,
            _angular_material_list__WEBPACK_IMPORTED_MODULE_23__.MatListModule,
            _angular_material_expansion__WEBPACK_IMPORTED_MODULE_24__.MatExpansionModule,
            ngx_autosize__WEBPACK_IMPORTED_MODULE_25__.AutosizeModule,
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_26__.MatMenuModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent,
        _Component_register_register_component__WEBPACK_IMPORTED_MODULE_2__.RegisterComponent,
        _Component_login_login_component__WEBPACK_IMPORTED_MODULE_3__.LoginComponent,
        _Component_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_4__.ForgotPasswordComponent,
        _Component_reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_5__.ResetPasswordComponent,
        _Component_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_6__.DashboardComponent,
        _Component_add_note_add_note_component__WEBPACK_IMPORTED_MODULE_7__.AddNoteComponent,
        _Component_icon_icon_component__WEBPACK_IMPORTED_MODULE_8__.IconComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__.BrowserAnimationsModule,
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_12__.MatToolbarModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__.MatIconModule,
        _angular_material_card__WEBPACK_IMPORTED_MODULE_14__.MatCardModule,
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__.MatFormFieldModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_16__.MatInputModule,
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_17__.MatCheckboxModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_18__.MatButtonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_19__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_19__.ReactiveFormsModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_20__.HttpClientModule,
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_21__.MatSnackBarModule,
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_22__.MatSidenavModule,
        _angular_material_list__WEBPACK_IMPORTED_MODULE_23__.MatListModule,
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_24__.MatExpansionModule,
        ngx_autosize__WEBPACK_IMPORTED_MODULE_25__.AutosizeModule,
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_26__.MatMenuModule] }); })();


/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    baseUrl: 'https://localhost:44310',
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 1570);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
document.addEventListener('DOMContentLoaded', () => {
    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
        .catch(err => console.error(err));
});


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map