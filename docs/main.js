(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "+j1i":
/*!****************************************************!*\
  !*** ./src/app/pages/welcome/welcome.component.ts ***!
  \****************************************************/
/*! exports provided: WelcomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WelcomeComponent", function() { return WelcomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/auth.service */ "lGQG");
/* harmony import */ var src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/profile.service */ "Aso2");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _progress_progress_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./progress/progress.component */ "krjZ");
/* harmony import */ var _progress_progress_step_progress_step_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./progress/progress-step/progress-step.component */ "Y+J8");
/* harmony import */ var _progress_progress_step_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./progress/progress-step.directive */ "7rOy");











function WelcomeComponent_h1_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "WELCOME TO THE CYCLE");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function WelcomeComponent_div_34_span_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "i", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Invalid Number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function WelcomeComponent_div_34_span_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "i", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Invalid Number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function WelcomeComponent_div_34_span_51_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "i", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Invalid Number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function WelcomeComponent_div_34_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "HI! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "i", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " (that's such a cool name btw).");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "THE CYCLE");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " is glad that you have made it this far. But this is where fantasy meets reality because For every cycle to be a success, there has to be a consistent level of trust amongst all participants. The real question here is...");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Can we trust you?");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "form", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function WelcomeComponent_div_34_Template_form_ngSubmit_13_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.updateUser(ctx_r7.userForm2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "I need to know and if so, i got a quick question for you. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " i go fit get your control? beacuse Normally, i for like to reach you easily with notifications and all the important bonuses but also this is the first stage of our trust process. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "i", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "LET'S GO");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Phone Number: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "input", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, WelcomeComponent_div_34_span_26_Template, 3, 0, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, " should also be the last name on your BVN, if not you should go back to the first step and get that right. I am not doing and cannot do anything with your BVN, this is only for verification purposes, this marks stage two of our trust process. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "i", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "I only need your trust.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "p", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Bank Verification Number ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "input", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](37, WelcomeComponent_div_34_span_37_Template, 3, 0, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Great Job so far ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, " its going to take a couple hours to verify all the info, and the Federal Goverment of Nigeria has made all financial transactions be linked to your NIN. Why don't you go on right ahead and add your NIN to the form ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "i", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "b", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "THE CYCLE. WELCOME!!!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "p", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "National Identity Number ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "input", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](51, WelcomeComponent_div_34_span_51_Template, 3, 0, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "THE WORLD IS OUR CANVAS AND WE HAVE A RESPONSIBILITY TO PAINT. THE CYCLE IS HERE TO LET YOU KNOW THAT YOU DO NOT HAVE TO PAINT ALONE, COME LET US COOPERATE AND GET BECOME SOCIALLY RESPONSIBLE. CONTRIBUTION OPOR OPOR! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "p", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Back");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Next");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const user_r3 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r3.firstName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r1.userForm2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r3.firstName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.onlyNumbersPhone);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r3.lastName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.onlyNumbersBvn);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r3.firstName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", user_r3.firstName, " ", user_r3.lastName, " you are literally a member of ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.onlyNumbersNin);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r1.userForm2.invalid);
} }
function WelcomeComponent_div_36_span_93_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "i", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Invalid Number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function WelcomeComponent_div_36_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "GREAT!! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "We only deal with the trustworthy");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "How about you tell us more about yourself na...");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "form", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function WelcomeComponent_div_36_Template_form_ngSubmit_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r11.updateUser(ctx_r11.userForm3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Occupation: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "input", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Salary:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "select", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Less than N50,000");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "More than N50,000");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Less than N100,000");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "More than N100,000");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "i", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, " (The above information set the range of cycles you can participate in)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "We need to link to your bank. Please provide the details below");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "p", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Account Number: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "input", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "p", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Bank: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "input", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "b", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Almost There!!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "We just need a few more information.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Age:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "input", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Marital Status:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "select", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "Single");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "Married");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "Not Sure");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "Origin:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "select", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "African");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "American");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "Asian");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "European");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "Not Sure");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "Share some information about a relative we can verify");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "p", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "Next of Kin Name: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](88, "input", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "p", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, "Next of Kin Phone Number: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](92, "input", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](93, WelcomeComponent_div_36_span_93_Template, 3, 0, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, "Enter your Full Address:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](100, "textarea", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "p", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, "Back");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, "Next");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r2.userForm3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](86);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.onlyNumbersAge);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r2.userForm1.invalid);
} }
class WelcomeComponent {
    constructor(router, authService, fb, profileService) {
        this.router = router;
        this.authService = authService;
        this.fb = fb;
        this.profileService = profileService;
    }
    ngOnInit() {
        this.userForm1 = this.fb.group({
            firstName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            lastName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
        this.userForm2 = this.fb.group({
            phoneNumber: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            bvn: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            nin: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
        });
        this.userForm3 = this.fb.group({
            occupation: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            salary: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            age: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            maritalStatus: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            address: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            accountNumber: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            bank: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            origin: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            nextOfKinName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            nextOfKinPhoneNumber: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
        });
    }
    updateUser(str) {
        this.profileService.updateUserDetails(this.authService.getUserId(), str.value).subscribe(() => {
            this.profileService.getUserDetails(this.authService.getUserId()).subscribe((user) => {
                this.userProfile = user;
                console.log(user);
            });
        });
    }
    login() {
        this.router.navigate(['/login']);
    }
    get onlyNumbersPhone() {
        if (this.userForm2.value.phoneNumber) {
            let zero = this.userForm2.value.phoneNumber * 0;
            if (zero !== 0) {
                return true;
            }
        }
    }
    get onlyNumbersBvn() {
        if (this.userForm2.value.bvn) {
            let zero = this.userForm2.value.bvn * 0;
            if (zero !== 0) {
                return true;
            }
        }
    }
    get onlyNumbersNin() {
        if (this.userForm2.value.nin) {
            let zero = this.userForm2.value.nin * 0;
            if (zero !== 0) {
                return true;
            }
        }
    }
    get onlyNumbersAge() {
        if (this.userForm3.value.age) {
            let zero = this.userForm3.value.age * 0;
            if (zero !== 0) {
                return true;
            }
        }
    }
}
WelcomeComponent.ɵfac = function WelcomeComponent_Factory(t) { return new (t || WelcomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_4__["ProfileService"])); };
WelcomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: WelcomeComponent, selectors: [["app-welcome"]], decls: 47, vars: 5, consts: [[1, "centered-content"], [1, "container"], [1, "profile", "has-background-light"], ["class", "title has-text-primary", 4, "ngIf"], [1, "profile-content"], [3, "formGroup", "ngSubmit"], [1, "field", "is-horizontal"], [1, "field-body"], [1, "field"], [1, "control", "is-expanded"], ["type", "text", "placeholder", "What is your First Name?", "formControlName", "firstName", 1, "input"], ["type", "text", "placeholder", "What is your Last Name?", "formControlName", "lastName", 1, "input"], [1, "control"], ["progressStepNext", "", "type", "submit", 1, "button", "is-success", "is-pulled-right", 3, "disabled"], [4, "ngFor", "ngForOf"], ["progressStepPrev", "", 1, "button", "is-danger", "is", "pulled", "left"], ["progressStepNext", "", 1, "button", "is-success", "is-pulled-right", 3, "click"], [1, "title", "has-text-primary"], [2, "color", "red"], [1, "form-box"], ["placeholder", "Phone Number", "formControlName", "phoneNumber", 1, "input"], [4, "ngIf"], ["placeholder", "BVN", "formControlName", "bvn", 1, "input"], [2, "color", "green"], ["placeholder", "NIN", "formControlName", "nin", 1, "input"], [2, "color", "red", "font-size", "smaller"], ["placeholder", "What do your do", "formControlName", "occupation", 1, "input"], [1, "select", "is-fullwidth"], ["formControlName", "salary"], [1, "control", "is-expanded", "has-icons-left"], ["type", "text", "placeholder", "XXXXXXXXXX", "formControlName", "accountNumber", 1, "input"], [1, "control", "is-expanded", "has-icons-left", "has-icons-right"], ["type", "email", "placeholder", "Email", "formControlName", "bank", 1, "input", "is-success"], [1, "field", "is-narrow"], ["placeholder", "Phone Number", "formControlName", "age", 1, "input"], ["formControlName", "maritalStatus"], ["formControlName", "origin"], ["formControlName", "nextOfKinName", "placeholder", "Enter Name Here...", 1, "input"], ["placeholder", "Phone Number", "formControlName", "nextOfKinPhoneNumber", 1, "input"], ["formControlName", "address", "placeholder", "Street, Town, City, State", 1, "textarea"]], template: function WelcomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, WelcomeComponent_h1_3_Template, 2, 0, "h1", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "app-progress");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "app-progress-step");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "What is ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "THE CYCLE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " ?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "THE CYCLE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " is a safe and secure centralised contribution platform where everyone participates in a monthly or weekly contribution.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "First things First. Lets get to know you");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "form", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function WelcomeComponent_Template_form_ngSubmit_18_listener() { return ctx.updateUser(ctx.userForm1); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " First Name ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " Last Name ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Next");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "app-progress-step");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](34, WelcomeComponent_div_34_Template, 61, 11, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "app-progress-step");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](36, WelcomeComponent_div_36_Template, 107, 3, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "app-progress-step");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "FINALLY!!!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Back");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WelcomeComponent_Template_button_click_45_listener() { return ctx.login(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Finish");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.userForm1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.userForm1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.userForm1.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.userProfile);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.userProfile);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _progress_progress_component__WEBPACK_IMPORTED_MODULE_6__["ProgressComponent"], _progress_progress_step_progress_step_component__WEBPACK_IMPORTED_MODULE_7__["ProgressStepComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _progress_progress_step_directive__WEBPACK_IMPORTED_MODULE_8__["ProgressStepDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_x"]], styles: ["@import url(\"https://fonts.googleapis.com/css?family=Lato:400,700|Nunito:400,700\");\nhtml[_ngcontent-%COMP%] {\n  background: linear-gradient(to right top, #c6dd44, #e0bb13);\n}\nhtml[_ngcontent-%COMP%], body[_ngcontent-%COMP%] {\n  height: 100%;\n}\nhtml[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], body[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 150%;\n  margin-bottom: 5%;\n}\n.centered-content[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  height: 100%;\n}\n.title[_ngcontent-%COMP%] {\n  font-family: \"Lato\";\n  font-size: 20px;\n  text-transform: uppercase;\n  letter-spacing: 2.5px;\n}\n.modal-box[_ngcontent-%COMP%] {\n  min-height: 300px;\n  width: 100%;\n  max-width: 700px;\n  background: white;\n  border-radius: 5px;\n  padding: 35px;\n}\n.navigation[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 0%;\n  width: 20%;\n  height: 10%;\n  display: flex;\n  flex-direction: row;\n}\n.todashboard[_ngcontent-%COMP%]:hover   a[_ngcontent-%COMP%] {\n  color: red;\n  font-size: larger;\n}\n.logout[_ngcontent-%COMP%]:hover   a[_ngcontent-%COMP%] {\n  color: red;\n  font-size: larger;\n}\n@media only screen and (max-width: 720px) {\n  html[_ngcontent-%COMP%] {\n    background: whitesmoke;\n  }\n\n  .container[_ngcontent-%COMP%] {\n    height: 100%;\n  }\n\n  .profile[_ngcontent-%COMP%] {\n    height: 250%;\n    padding: 10% 5%;\n  }\n\n  .navigation[_ngcontent-%COMP%] {\n    right: 15%;\n    font-size: 2vh;\n  }\n\n  a[_ngcontent-%COMP%] {\n    color: red;\n  }\n\n  .profile-tags[_ngcontent-%COMP%] {\n    margin: 3% 0%;\n    font-size: 250%;\n    box-shadow: 0px 0px 10px 3.5px rgba(0, 0, 0, 0.2);\n  }\n\n  p[_ngcontent-%COMP%] {\n    font-size: 100%;\n  }\n}\n@media only screen and (min-width: 320px) {\n  html[_ngcontent-%COMP%] {\n    background: white;\n  }\n\n  .profile-content[_ngcontent-%COMP%] {\n    margin: auto -4.5%;\n    background-color: whitesmoke;\n  }\n}\n@media only screen and (min-width: 720px) {\n  .container[_ngcontent-%COMP%] {\n    display: flex;\n    width: 100px;\n    height: 100%;\n    justify-content: center;\n    max-width: 1000px;\n    max-height: 680px;\n  }\n\n  .profile[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    border-top-right-radius: 15px;\n    border-bottom-right-radius: 15px;\n    border-bottom-left-radius: 15px;\n    border-top-left-radius: 15px;\n    align-items: center;\n    padding: 30px;\n    width: 70%;\n    box-shadow: 0 20px 25px rgba(0, 0, 0, 0.2);\n  }\n  .profile[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-weight: bolder;\n    font-size: 2.5vh;\n    letter-spacing: 0.4rem;\n  }\n\n  .profile-content[_ngcontent-%COMP%] {\n    background: white;\n    padding: 20px 20px;\n    height: 100%;\n    width: 100%;\n    justify-content: center;\n    overflow-x: hidden;\n    overflow-y: auto;\n  }\n  .profile-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    margin-top: 10px;\n    padding-bottom: 10px;\n    font-size: 1.35rem;\n  }\n\n  .form-box[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    height: 100%;\n    width: 100%;\n  }\n\n  .control[_ngcontent-%COMP%] {\n    padding-left: 5px;\n    padding-right: 5px;\n  }\n\n  .selected[_ngcontent-%COMP%] {\n    width: 180%;\n    margin-top: -10px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxtYWluLXN0eWxlcy5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXHdlbGNvbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR1Esa0ZBQUE7QUFxQlI7RUFDSSwyREFBQTtBQ3RCSjtBRHlCQTs7RUFFSSxZQUFBO0FDdEJKO0FEd0JJOztFQUNJLGVBQUE7RUFDQSxpQkFBQTtBQ3JCUjtBRHlCQTtFQUNJLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUN0Qko7QUQwQkE7RUFDSSxtQkFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtFQUNBLHFCQUFBO0FDdkJKO0FEMEJBO0VBQ0ksaUJBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtBQ3ZCSjtBRDBCQTtFQUNJLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FDdkJKO0FENEJJO0VBQ0ksVUFBQTtFQUNBLGlCQUFBO0FDekJSO0FEZ0NJO0VBQ0ksVUFBQTtFQUNBLGlCQUFBO0FDN0JSO0FEa0NBO0VBQ0k7SUFDSSxzQkFBQTtFQy9CTjs7RURrQ0U7SUFDSSxZQUFBO0VDL0JOOztFRGtDRTtJQUNJLFlBQUE7SUFDQSxlQUFBO0VDL0JOOztFRGtDRTtJQUNJLFVBQUE7SUFDQSxjQUFBO0VDL0JOOztFRGtDRTtJQUNJLFVBQUE7RUMvQk47O0VEa0NFO0lBRUksYUFBQTtJQUNBLGVBQUE7SUFDQSxpREFBQTtFQ2hDTjs7RURtQ0U7SUFDSSxlQUFBO0VDaENOO0FBQ0Y7QUF6RkE7RUFDSTtJQUNJLGlCQUFBO0VBMkZOOztFQXhGRTtJQUNJLGtCQUFBO0lBQ0EsNEJBQUE7RUEyRk47QUFDRjtBQXhGQTtFQUVJO0lBQ0ksYUFBQTtJQUNBLFlBQUE7SUFDQSxZQUFBO0lBQ0EsdUJBQUE7SUFDQSxpQkFBQTtJQUNBLGlCQUFBO0VBeUZOOztFQXRGRTtJQUNJLGFBQUE7SUFDQSxzQkFBQTtJQUNBLDZCQUFBO0lBQ0EsZ0NBQUE7SUFDQSwrQkFBQTtJQUNBLDRCQUFBO0lBQ0EsbUJBQUE7SUFDQSxhQUFBO0lBQ0EsVUFBQTtJQUNBLDBDQUFBO0VBeUZOO0VBdkZNO0lBQ0ksbUJBQUE7SUFDQSxnQkFBQTtJQUNBLHNCQUFBO0VBeUZWOztFQXJGRTtJQUNJLGlCQUFBO0lBQ0Esa0JBQUE7SUFDQSxZQUFBO0lBQ0EsV0FBQTtJQUNBLHVCQUFBO0lBQ0Esa0JBQUE7SUFDQSxnQkFBQTtFQXdGTjtFQXRGTTtJQUNJLGdCQUFBO0lBQ0Esb0JBQUE7SUFDQSxrQkFBQTtFQXdGVjs7RUFwRkU7SUFDSSxhQUFBO0lBQ0Esc0JBQUE7SUFDQSxZQUFBO0lBQ0EsV0FBQTtFQXVGTjs7RUFwRkU7SUFDSSxpQkFBQTtJQUNBLGtCQUFBO0VBdUZOOztFQXBGRTtJQUNJLFdBQUE7SUFDQSxpQkFBQTtFQXVGTjtBQUNGIiwiZmlsZSI6IndlbGNvbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvL1RoaXMgd2hlcmUgd2UgcHV0IGdsb2JhbCBzdHlsZXMgYW5kIGNoYW5nZSB2YXJpYWJsZSB2YWx1ZXNcclxuXHJcbi8vaW1wb3J0IGdvb2dsZSBmb250cy4gTGF0byBhbmQgTnVuaXRvXHJcbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9TGF0bzo0MDAsNzAwfE51bml0bzo0MDAsNzAwJyk7XHJcblxyXG4kZGVlcC15ZWxsb3c6ICNjNmRkNDQ7XHJcbiRvcmFuZ2U6ICNlMGJiMTM7XHJcblxyXG4kbGlnaHQtb3JhbmdlOiAjZTdkYjZlO1xyXG4kbGlnaHQ6ICNmMWU3YjY7XHJcbiRkYXJrLW9yYW5nZTogIzMzMmIwNTtcclxuXHJcbi8vIFVwZGF0ZSBCdWxtYSBnbG9iYWwgdmFyaWFibGVzXHJcbiRmYW1pbHktc2Fucy1zZXJpZjogXCJOdW5pdG9cIiwgc2Fucy1zZXJpZjtcclxuJHByaW1hcnk6ICRvcmFuZ2U7XHJcbiRsaW5rOiAkbGlnaHQtb3JhbmdlO1xyXG5cclxuLy9VcGRhdGUgc29tZSBCdWxtYSBjb21wb25lbnQgdmFyaWFibGVzXHJcbiRjb250b2wtYm9yZGVyLXdpZHRoOiAycHg7XHJcbiRpbnB1dC1ib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xyXG4kaW5wdXQtc2hhZG93OiBub25lO1xyXG5cclxuLy9zZXQgY3VzdG9tIGdsb2JhbCBzdHlsZXMgKHdpbGwgYmUgYXBsaWVkIHRvIHdob2xlIGFwcClcclxuXHJcbmh0bWwge1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0IHRvcCwgJGRlZXAteWVsbG93LCAkb3JhbmdlKTtcclxufVxyXG5cclxuaHRtbCxcclxuYm9keSB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcblxyXG4gICAgaDMge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTUwJTtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiA1JTtcclxuICAgIH1cclxufVxyXG5cclxuLmNlbnRlcmVkLWNvbnRlbnQge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG5cclxuLnRpdGxlIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnTGF0byc7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDIuNXB4O1xyXG59XHJcblxyXG4ubW9kYWwtYm94IHtcclxuICAgIG1pbi1oZWlnaHQ6IDMwMHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXgtd2lkdGg6IDcwMHB4O1xyXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBwYWRkaW5nOiAzNXB4O1xyXG59XHJcblxyXG4ubmF2aWdhdGlvbiB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICByaWdodDogMCU7XHJcbiAgICB3aWR0aDogMjAlO1xyXG4gICAgaGVpZ2h0OiAxMCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxufVxyXG5cclxuLnRvZGFzaGJvYXJkOmhvdmVyIHtcclxuXHJcbiAgICBhIHtcclxuICAgICAgICBjb2xvcjogcmVkO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogbGFyZ2VyO1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuLmxvZ291dDpob3ZlciB7XHJcblxyXG4gICAgYSB7XHJcbiAgICAgICAgY29sb3I6IHJlZDtcclxuICAgICAgICBmb250LXNpemU6IGxhcmdlcjtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzIwcHgpIHtcclxuICAgIGh0bWwge1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHdoaXRlc21va2U7XHJcbiAgICB9XHJcblxyXG4gICAgLmNvbnRhaW5lciB7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlXHJcbiAgICB9XHJcblxyXG4gICAgLnByb2ZpbGUge1xyXG4gICAgICAgIGhlaWdodDogMjUwJTtcclxuICAgICAgICBwYWRkaW5nOiAxMCUgNSU7XHJcbiAgICB9XHJcblxyXG4gICAgLm5hdmlnYXRpb24ge1xyXG4gICAgICAgIHJpZ2h0OiAxNSU7XHJcbiAgICAgICAgZm9udC1zaXplOiAydmg7XHJcbiAgICB9XHJcblxyXG4gICAgYSB7XHJcbiAgICAgICAgY29sb3I6IHJlZDtcclxuICAgIH1cclxuXHJcbiAgICAucHJvZmlsZS10YWdzIHtcclxuXHJcbiAgICAgICAgbWFyZ2luOiAzJSAwJTtcclxuICAgICAgICBmb250LXNpemU6IDI1MCU7XHJcbiAgICAgICAgYm94LXNoYWRvdzogMHB4IDBweCAxMHB4IDMuNXB4IHJnYigwIDAgMCAvIDIwJSk7XHJcbiAgICB9XHJcblxyXG4gICAgcCB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMDAlO1xyXG4gICAgfVxyXG59IiwiQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9TGF0bzo0MDAsNzAwfE51bml0bzo0MDAsNzAwXCIpO1xuaHRtbCB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCB0b3AsICNjNmRkNDQsICNlMGJiMTMpO1xufVxuXG5odG1sLFxuYm9keSB7XG4gIGhlaWdodDogMTAwJTtcbn1cbmh0bWwgaDMsXG5ib2R5IGgzIHtcbiAgZm9udC1zaXplOiAxNTAlO1xuICBtYXJnaW4tYm90dG9tOiA1JTtcbn1cblxuLmNlbnRlcmVkLWNvbnRlbnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLnRpdGxlIHtcbiAgZm9udC1mYW1pbHk6IFwiTGF0b1wiO1xuICBmb250LXNpemU6IDIwcHg7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGxldHRlci1zcGFjaW5nOiAyLjVweDtcbn1cblxuLm1vZGFsLWJveCB7XG4gIG1pbi1oZWlnaHQ6IDMwMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgbWF4LXdpZHRoOiA3MDBweDtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgcGFkZGluZzogMzVweDtcbn1cblxuLm5hdmlnYXRpb24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAwJTtcbiAgd2lkdGg6IDIwJTtcbiAgaGVpZ2h0OiAxMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG59XG5cbi50b2Rhc2hib2FyZDpob3ZlciBhIHtcbiAgY29sb3I6IHJlZDtcbiAgZm9udC1zaXplOiBsYXJnZXI7XG59XG5cbi5sb2dvdXQ6aG92ZXIgYSB7XG4gIGNvbG9yOiByZWQ7XG4gIGZvbnQtc2l6ZTogbGFyZ2VyO1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDcyMHB4KSB7XG4gIGh0bWwge1xuICAgIGJhY2tncm91bmQ6IHdoaXRlc21va2U7XG4gIH1cblxuICAuY29udGFpbmVyIHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gIH1cblxuICAucHJvZmlsZSB7XG4gICAgaGVpZ2h0OiAyNTAlO1xuICAgIHBhZGRpbmc6IDEwJSA1JTtcbiAgfVxuXG4gIC5uYXZpZ2F0aW9uIHtcbiAgICByaWdodDogMTUlO1xuICAgIGZvbnQtc2l6ZTogMnZoO1xuICB9XG5cbiAgYSB7XG4gICAgY29sb3I6IHJlZDtcbiAgfVxuXG4gIC5wcm9maWxlLXRhZ3Mge1xuICAgIG1hcmdpbjogMyUgMCU7XG4gICAgZm9udC1zaXplOiAyNTAlO1xuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMTBweCAzLjVweCByZ2JhKDAsIDAsIDAsIDAuMik7XG4gIH1cblxuICBwIHtcbiAgICBmb250LXNpemU6IDEwMCU7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMzIwcHgpIHtcbiAgaHRtbCB7XG4gICAgYmFja2dyb3VuZDogd2hpdGU7XG4gIH1cblxuICAucHJvZmlsZS1jb250ZW50IHtcbiAgICBtYXJnaW46IGF1dG8gLTQuNSU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3MjBweCkge1xuICAuY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHdpZHRoOiAxMDBweDtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgbWF4LXdpZHRoOiAxMDAwcHg7XG4gICAgbWF4LWhlaWdodDogNjgwcHg7XG4gIH1cblxuICAucHJvZmlsZSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxNXB4O1xuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxNXB4O1xuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDE1cHg7XG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTVweDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHBhZGRpbmc6IDMwcHg7XG4gICAgd2lkdGg6IDcwJTtcbiAgICBib3gtc2hhZG93OiAwIDIwcHggMjVweCByZ2JhKDAsIDAsIDAsIDAuMik7XG4gIH1cbiAgLnByb2ZpbGUgaDEge1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG4gICAgZm9udC1zaXplOiAyLjV2aDtcbiAgICBsZXR0ZXItc3BhY2luZzogMC40cmVtO1xuICB9XG5cbiAgLnByb2ZpbGUtY29udGVudCB7XG4gICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgcGFkZGluZzogMjBweCAyMHB4O1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XG4gICAgb3ZlcmZsb3cteTogYXV0bztcbiAgfVxuICAucHJvZmlsZS1jb250ZW50IHAge1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gICAgZm9udC1zaXplOiAxLjM1cmVtO1xuICB9XG5cbiAgLmZvcm0tYm94IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG5cbiAgLmNvbnRyb2wge1xuICAgIHBhZGRpbmctbGVmdDogNXB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDVweDtcbiAgfVxuXG4gIC5zZWxlY3RlZCB7XG4gICAgd2lkdGg6IDE4MCU7XG4gICAgbWFyZ2luLXRvcDogLTEwcHg7XG4gIH1cbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WelcomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-welcome',
                templateUrl: './welcome.component.html',
                styleUrls: ['./welcome.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_4__["ProfileService"] }]; }, null); })();


/***/ }),

/***/ "+nza":
/*!**************************************************!*\
  !*** ./src/app/pages/wallet/wallet.component.ts ***!
  \**************************************************/
/*! exports provided: WalletComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WalletComponent", function() { return WalletComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/auth.service */ "lGQG");
/* harmony import */ var src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/profile.service */ "Aso2");
/* harmony import */ var _services_wallet_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/wallet.service */ "Fvwb");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");







function WalletComponent_div_2_span_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Pending");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function WalletComponent_div_2_tbody_43_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const transaction_r4 = ctx.$implicit;
    const i_r5 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r5 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](transaction_r4.transactionId);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](transaction_r4.date);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](transaction_r4.depositAmount);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](transaction_r4.action);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](transaction_r4.holder);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](transaction_r4.newBalance);
} }
const _c0 = function (a0) { return [a0]; };
function WalletComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WalletComponent_div_2_Template_a_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.todashboard(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Dashboard ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " | ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WalletComponent_div_2_Template_a_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.logout(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Logout ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h1", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "WALLET");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, WalletComponent_div_2_span_17_Template, 3, 0, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "FUND WALLET");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WalletComponent_div_2_Template_div_click_21_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.navigateWithdraw(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "WITHDRAWAL");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WalletComponent_div_2_Template_div_click_23_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.navigate(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "MY CYCLES");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "table", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "thead", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "sn");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Transaction ID");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Amount");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Action");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Holder");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Balance");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](43, WalletComponent_div_2_tbody_43_Template, 16, 7, "tbody", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const wallets_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("WALLET ID: ", wallets_r1.walletId, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("BALANCE: NGN", wallets_r1.walletAmount, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.pendingTransactionExists);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c0, wallets_r1._id));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.transactions);
} }
class WalletComponent {
    constructor(authService, profileService, walletService, route, router) {
        this.authService = authService;
        this.profileService = profileService;
        this.walletService = walletService;
        this.route = route;
        this.router = router;
    }
    ngOnInit() {
        this.walletService.getWallet().subscribe((wallet) => {
            this.wallet = wallet;
            this.transactions = wallet[0].transactions;
            console.log(this.transactions);
        });
        //check if user has some pending transfers
        this.profileService.getUserDetails(this.authService.getUserId()).subscribe((profile) => {
            this.profile = profile;
            this.pendingTransactionExists = profile[0].pendingTransfer;
        });
    }
    navigate() {
        this.router.navigate(['wallet', this.wallet[0]._id, 'my-cycles']);
    }
    navigateWithdraw() {
        this.router.navigate(['wallet', this.wallet[0]._id, 'withdraw']);
    }
    todashboard() {
        this.walletService.getWallet().subscribe((wallet) => {
            this.profileService.updateUserDetails(this.authService.getUserId(), { wallet: wallet }).subscribe(() => {
                this.router.navigate(['dashboard']);
                console.log(wallet);
            });
        });
    }
    logout() {
        this.authService.logout();
        this.router.navigate(['login']);
    }
}
WalletComponent.ɵfac = function WalletComponent_Factory(t) { return new (t || WalletComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_2__["ProfileService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_wallet_service__WEBPACK_IMPORTED_MODULE_3__["WalletService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"])); };
WalletComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: WalletComponent, selectors: [["app-wallet"]], decls: 3, vars: 1, consts: [[1, "centered-content"], [1, "container"], ["class", "profile has-background-light", 4, "ngFor", "ngForOf"], [1, "profile", "has-background-light"], [1, "navigation"], [1, "todashboard"], [3, "click"], [1, "logout"], [1, "title", "has-text-primary"], [1, "headers"], [1, "title", "has-text-secondary"], ["style", "color: red;", 4, "ngIf"], [1, "profile-content"], [1, "profile-tags", "title", 3, "routerLink"], [1, "profile-tags", "title", 3, "click"], [1, "transactions"], [1, "table", "is-bordered", "is-fullwidth"], [2, "width", "fit-content"], [4, "ngFor", "ngForOf"], [2, "color", "red"]], template: function WalletComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, WalletComponent_div_2_Template, 44, 7, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.wallet);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLink"]], styles: ["@import url(\"https://fonts.googleapis.com/css?family=Lato:400,700|Nunito:400,700\");\nhtml[_ngcontent-%COMP%] {\n  background: linear-gradient(to right top, #c6dd44, #e0bb13);\n}\nhtml[_ngcontent-%COMP%], body[_ngcontent-%COMP%] {\n  height: 100%;\n}\nhtml[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], body[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 150%;\n  margin-bottom: 5%;\n}\n.centered-content[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  height: 100%;\n}\n.title[_ngcontent-%COMP%] {\n  font-family: \"Lato\";\n  font-size: 20px;\n  text-transform: uppercase;\n  letter-spacing: 2.5px;\n}\n.modal-box[_ngcontent-%COMP%] {\n  min-height: 300px;\n  width: 100%;\n  max-width: 700px;\n  background: white;\n  border-radius: 5px;\n  padding: 35px;\n}\n.navigation[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 0%;\n  width: 20%;\n  height: 10%;\n  display: flex;\n  flex-direction: row;\n}\n.todashboard[_ngcontent-%COMP%]:hover   a[_ngcontent-%COMP%] {\n  color: red;\n  font-size: larger;\n}\n.logout[_ngcontent-%COMP%]:hover   a[_ngcontent-%COMP%] {\n  color: red;\n  font-size: larger;\n}\n@media only screen and (max-width: 720px) {\n  html[_ngcontent-%COMP%] {\n    background: whitesmoke;\n  }\n\n  .container[_ngcontent-%COMP%] {\n    height: 100%;\n  }\n\n  .profile[_ngcontent-%COMP%] {\n    height: 250%;\n    padding: 10% 5%;\n  }\n\n  .navigation[_ngcontent-%COMP%] {\n    right: 15%;\n    font-size: 2vh;\n  }\n\n  a[_ngcontent-%COMP%] {\n    color: red;\n  }\n\n  .profile-tags[_ngcontent-%COMP%] {\n    margin: 3% 0%;\n    font-size: 250%;\n    box-shadow: 0px 0px 10px 3.5px rgba(0, 0, 0, 0.2);\n  }\n\n  p[_ngcontent-%COMP%] {\n    font-size: 100%;\n  }\n}\n@media only screen and (max-width: 720px) {\n  .container[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n\n  .profile[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n  }\n\n  .title[_ngcontent-%COMP%] {\n    text-align: left;\n    font-size: 150%;\n  }\n\n  a[_ngcontent-%COMP%] {\n    color: red;\n  }\n\n  .profile-content[_ngcontent-%COMP%] {\n    display: flex;\n    background: white;\n    flex-flow: wrap;\n  }\n  .profile-content[_ngcontent-%COMP%]   .profile-tags[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: row;\n    border-radius: 5px;\n    align-items: center;\n    text-align: center;\n    margin: 5px;\n    background: #c6dd44;\n    width: 30%;\n    height: 10vh;\n    font-size: 2vh;\n    justify-content: center;\n    flex-grow: 1;\n  }\n  .profile-content[_ngcontent-%COMP%]   .transactions[_ngcontent-%COMP%] {\n    width: 100%;\n    justify-content: center;\n    overflow-x: auto;\n    overflow-y: hidden;\n  }\n  .profile-content[_ngcontent-%COMP%]   .flex[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: row;\n  }\n}\n@media only screen and (min-width: 720px) {\n  .container[_ngcontent-%COMP%] {\n    display: flex;\n    width: 100%;\n    height: 100%;\n    max-width: 1000px;\n    max-height: 680px;\n    justify-content: center;\n  }\n\n  .profile[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    border-top-right-radius: 15px;\n    border-bottom-right-radius: 15px;\n    border-bottom-left-radius: 15px;\n    border-top-left-radius: 15px;\n    padding: 30px;\n    width: 70%;\n    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);\n  }\n\n  .title[_ngcontent-%COMP%] {\n    font-family: \"Lato\";\n    font-size: 20px;\n    text-transform: uppercase;\n    letter-spacing: 2.5px;\n    padding: 10px;\n  }\n\n  .profile-content[_ngcontent-%COMP%] {\n    display: flex;\n    background: white;\n    padding: 20px 20px;\n    height: 100%;\n    width: 100%;\n    flex-flow: wrap;\n    overflow-x: hidden;\n  }\n  .profile-content[_ngcontent-%COMP%]   .profile-tags[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: row;\n    border-radius: 5px;\n    justify-content: center;\n    align-items: center;\n    margin: 5px;\n    background: #c6dd44;\n    width: 30%;\n    height: 35%;\n    flex-grow: 1;\n    font-size: 30px;\n  }\n  .profile-content[_ngcontent-%COMP%]   .profile-tags[_ngcontent-%COMP%]:hover {\n    box-shadow: 1.5px 1.5px #e0bb13;\n    transition: ease-in-out 0.2s;\n    cursor: pointer;\n  }\n  .profile-content[_ngcontent-%COMP%]   .transactions[_ngcontent-%COMP%] {\n    width: 100%;\n    justify-content: center;\n    overflow-x: auto;\n    overflow-y: hidden;\n  }\n  .profile-content[_ngcontent-%COMP%]   .flex[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: row;\n  }\n\n  .navigation[_ngcontent-%COMP%] {\n    position: absolute;\n    right: 7%;\n    width: 20%;\n    height: 10%;\n    display: flex;\n    flex-direction: row;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxtYWluLXN0eWxlcy5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXHdhbGxldC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHUSxrRkFBQTtBQXFCUjtFQUNJLDJEQUFBO0FDdEJKO0FEeUJBOztFQUVJLFlBQUE7QUN0Qko7QUR3Qkk7O0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0FDckJSO0FEeUJBO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQ3RCSjtBRDBCQTtFQUNJLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0VBQ0EscUJBQUE7QUN2Qko7QUQwQkE7RUFDSSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0FDdkJKO0FEMEJBO0VBQ0ksa0JBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUN2Qko7QUQ0Qkk7RUFDSSxVQUFBO0VBQ0EsaUJBQUE7QUN6QlI7QURnQ0k7RUFDSSxVQUFBO0VBQ0EsaUJBQUE7QUM3QlI7QURrQ0E7RUFDSTtJQUNJLHNCQUFBO0VDL0JOOztFRGtDRTtJQUNJLFlBQUE7RUMvQk47O0VEa0NFO0lBQ0ksWUFBQTtJQUNBLGVBQUE7RUMvQk47O0VEa0NFO0lBQ0ksVUFBQTtJQUNBLGNBQUE7RUMvQk47O0VEa0NFO0lBQ0ksVUFBQTtFQy9CTjs7RURrQ0U7SUFFSSxhQUFBO0lBQ0EsZUFBQTtJQUNBLGlEQUFBO0VDaENOOztFRG1DRTtJQUNJLGVBQUE7RUNoQ047QUFDRjtBQXhGQTtFQUNJO0lBQ0ksV0FBQTtFQTBGTjs7RUF2RkU7SUFDSSxhQUFBO0lBQ0Esc0JBQUE7RUEwRk47O0VBdkZFO0lBQ0ksZ0JBQUE7SUFDQSxlQUFBO0VBMEZOOztFQXZGRTtJQUNJLFVBQUE7RUEwRk47O0VBdkZFO0lBQ0ksYUFBQTtJQUNBLGlCQUFBO0lBQ0EsZUFBQTtFQTBGTjtFQXhGTTtJQUNJLGFBQUE7SUFDQSxtQkFBQTtJQUNBLGtCQUFBO0lBQ0EsbUJBQUE7SUFDQSxrQkFBQTtJQUNBLFdBQUE7SUFDQSxtQkFBQTtJQUNBLFVBQUE7SUFDQSxZQUFBO0lBQ0EsY0FBQTtJQUNBLHVCQUFBO0lBQ0EsWUFBQTtFQTBGVjtFQXZGTTtJQUNJLFdBQUE7SUFDQSx1QkFBQTtJQUNBLGdCQUFBO0lBQ0Esa0JBQUE7RUF5RlY7RUF0Rk07SUFDSSxhQUFBO0lBQ0EsbUJBQUE7RUF3RlY7QUFDRjtBQW5GQTtFQUNJO0lBQ0ksYUFBQTtJQUNBLFdBQUE7SUFDQSxZQUFBO0lBQ0EsaUJBQUE7SUFDQSxpQkFBQTtJQUNBLHVCQUFBO0VBcUZOOztFQWxGRTtJQUNJLGFBQUE7SUFDQSxzQkFBQTtJQUNBLDZCQUFBO0lBQ0EsZ0NBQUE7SUFDQSwrQkFBQTtJQUNBLDRCQUFBO0lBQ0EsYUFBQTtJQUNBLFVBQUE7SUFDQSwwQ0FBQTtFQXFGTjs7RUFsRkU7SUFDSSxtQkFBQTtJQUNBLGVBQUE7SUFDQSx5QkFBQTtJQUNBLHFCQUFBO0lBQ0EsYUFBQTtFQXFGTjs7RUFsRkU7SUFDSSxhQUFBO0lBQ0EsaUJBQUE7SUFDQSxrQkFBQTtJQUNBLFlBQUE7SUFDQSxXQUFBO0lBQ0EsZUFBQTtJQUNBLGtCQUFBO0VBcUZOO0VBbEZNO0lBQ0ksYUFBQTtJQUNBLG1CQUFBO0lBQ0Esa0JBQUE7SUFDQSx1QkFBQTtJQUNBLG1CQUFBO0lBQ0EsV0FBQTtJQUNBLG1CRGxHRTtJQ21HRixVQUFBO0lBQ0EsV0FBQTtJQUNBLFlBQUE7SUFDQSxlQUFBO0VBb0ZWO0VBbEZVO0lBQ0ksK0JBQUE7SUFDQSw0QkFBQTtJQUNBLGVBQUE7RUFvRmQ7RUFoRk07SUFDSSxXQUFBO0lBQ0EsdUJBQUE7SUFDQSxnQkFBQTtJQUNBLGtCQUFBO0VBa0ZWO0VBL0VNO0lBQ0ksYUFBQTtJQUNBLG1CQUFBO0VBaUZWOztFQTdFRTtJQUNJLGtCQUFBO0lBQ0EsU0FBQTtJQUNBLFVBQUE7SUFDQSxXQUFBO0lBQ0EsYUFBQTtJQUNBLG1CQUFBO0VBZ0ZOO0FBQ0YiLCJmaWxlIjoid2FsbGV0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy9UaGlzIHdoZXJlIHdlIHB1dCBnbG9iYWwgc3R5bGVzIGFuZCBjaGFuZ2UgdmFyaWFibGUgdmFsdWVzXHJcblxyXG4vL2ltcG9ydCBnb29nbGUgZm9udHMuIExhdG8gYW5kIE51bml0b1xyXG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PUxhdG86NDAwLDcwMHxOdW5pdG86NDAwLDcwMCcpO1xyXG5cclxuJGRlZXAteWVsbG93OiAjYzZkZDQ0O1xyXG4kb3JhbmdlOiAjZTBiYjEzO1xyXG5cclxuJGxpZ2h0LW9yYW5nZTogI2U3ZGI2ZTtcclxuJGxpZ2h0OiAjZjFlN2I2O1xyXG4kZGFyay1vcmFuZ2U6ICMzMzJiMDU7XHJcblxyXG4vLyBVcGRhdGUgQnVsbWEgZ2xvYmFsIHZhcmlhYmxlc1xyXG4kZmFtaWx5LXNhbnMtc2VyaWY6IFwiTnVuaXRvXCIsIHNhbnMtc2VyaWY7XHJcbiRwcmltYXJ5OiAkb3JhbmdlO1xyXG4kbGluazogJGxpZ2h0LW9yYW5nZTtcclxuXHJcbi8vVXBkYXRlIHNvbWUgQnVsbWEgY29tcG9uZW50IHZhcmlhYmxlc1xyXG4kY29udG9sLWJvcmRlci13aWR0aDogMnB4O1xyXG4kaW5wdXQtYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuJGlucHV0LXNoYWRvdzogbm9uZTtcclxuXHJcbi8vc2V0IGN1c3RvbSBnbG9iYWwgc3R5bGVzICh3aWxsIGJlIGFwbGllZCB0byB3aG9sZSBhcHApXHJcblxyXG5odG1sIHtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCB0b3AsICRkZWVwLXllbGxvdywgJG9yYW5nZSk7XHJcbn1cclxuXHJcbmh0bWwsXHJcbmJvZHkge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG5cclxuICAgIGgzIHtcclxuICAgICAgICBmb250LXNpemU6IDE1MCU7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNSU7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5jZW50ZXJlZC1jb250ZW50IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuXHJcbi50aXRsZSB7XHJcbiAgICBmb250LWZhbWlseTogJ0xhdG8nO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIGxldHRlci1zcGFjaW5nOiAyLjVweDtcclxufVxyXG5cclxuLm1vZGFsLWJveCB7XHJcbiAgICBtaW4taGVpZ2h0OiAzMDBweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWF4LXdpZHRoOiA3MDBweDtcclxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgcGFkZGluZzogMzVweDtcclxufVxyXG5cclxuLm5hdmlnYXRpb24ge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcmlnaHQ6IDAlO1xyXG4gICAgd2lkdGg6IDIwJTtcclxuICAgIGhlaWdodDogMTAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbn1cclxuXHJcbi50b2Rhc2hib2FyZDpob3ZlciB7XHJcblxyXG4gICAgYSB7XHJcbiAgICAgICAgY29sb3I6IHJlZDtcclxuICAgICAgICBmb250LXNpemU6IGxhcmdlcjtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbi5sb2dvdXQ6aG92ZXIge1xyXG5cclxuICAgIGEge1xyXG4gICAgICAgIGNvbG9yOiByZWQ7XHJcbiAgICAgICAgZm9udC1zaXplOiBsYXJnZXI7XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDcyMHB4KSB7XHJcbiAgICBodG1sIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZXNtb2tlO1xyXG4gICAgfVxyXG5cclxuICAgIC5jb250YWluZXIge1xyXG4gICAgICAgIGhlaWdodDogMTAwJVxyXG4gICAgfVxyXG5cclxuICAgIC5wcm9maWxlIHtcclxuICAgICAgICBoZWlnaHQ6IDI1MCU7XHJcbiAgICAgICAgcGFkZGluZzogMTAlIDUlO1xyXG4gICAgfVxyXG5cclxuICAgIC5uYXZpZ2F0aW9uIHtcclxuICAgICAgICByaWdodDogMTUlO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMnZoO1xyXG4gICAgfVxyXG5cclxuICAgIGEge1xyXG4gICAgICAgIGNvbG9yOiByZWQ7XHJcbiAgICB9XHJcblxyXG4gICAgLnByb2ZpbGUtdGFncyB7XHJcblxyXG4gICAgICAgIG1hcmdpbjogMyUgMCU7XHJcbiAgICAgICAgZm9udC1zaXplOiAyNTAlO1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDBweCAwcHggMTBweCAzLjVweCByZ2IoMCAwIDAgLyAyMCUpO1xyXG4gICAgfVxyXG5cclxuICAgIHAge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTAwJTtcclxuICAgIH1cclxufSIsIkBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PUxhdG86NDAwLDcwMHxOdW5pdG86NDAwLDcwMFwiKTtcbmh0bWwge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQgdG9wLCAjYzZkZDQ0LCAjZTBiYjEzKTtcbn1cblxuaHRtbCxcbmJvZHkge1xuICBoZWlnaHQ6IDEwMCU7XG59XG5odG1sIGgzLFxuYm9keSBoMyB7XG4gIGZvbnQtc2l6ZTogMTUwJTtcbiAgbWFyZ2luLWJvdHRvbTogNSU7XG59XG5cbi5jZW50ZXJlZC1jb250ZW50IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi50aXRsZSB7XG4gIGZvbnQtZmFtaWx5OiBcIkxhdG9cIjtcbiAgZm9udC1zaXplOiAyMHB4O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBsZXR0ZXItc3BhY2luZzogMi41cHg7XG59XG5cbi5tb2RhbC1ib3gge1xuICBtaW4taGVpZ2h0OiAzMDBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIG1heC13aWR0aDogNzAwcHg7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHBhZGRpbmc6IDM1cHg7XG59XG5cbi5uYXZpZ2F0aW9uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMCU7XG4gIHdpZHRoOiAyMCU7XG4gIGhlaWdodDogMTAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xufVxuXG4udG9kYXNoYm9hcmQ6aG92ZXIgYSB7XG4gIGNvbG9yOiByZWQ7XG4gIGZvbnQtc2l6ZTogbGFyZ2VyO1xufVxuXG4ubG9nb3V0OmhvdmVyIGEge1xuICBjb2xvcjogcmVkO1xuICBmb250LXNpemU6IGxhcmdlcjtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3MjBweCkge1xuICBodG1sIHtcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZXNtb2tlO1xuICB9XG5cbiAgLmNvbnRhaW5lciB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICB9XG5cbiAgLnByb2ZpbGUge1xuICAgIGhlaWdodDogMjUwJTtcbiAgICBwYWRkaW5nOiAxMCUgNSU7XG4gIH1cblxuICAubmF2aWdhdGlvbiB7XG4gICAgcmlnaHQ6IDE1JTtcbiAgICBmb250LXNpemU6IDJ2aDtcbiAgfVxuXG4gIGEge1xuICAgIGNvbG9yOiByZWQ7XG4gIH1cblxuICAucHJvZmlsZS10YWdzIHtcbiAgICBtYXJnaW46IDMlIDAlO1xuICAgIGZvbnQtc2l6ZTogMjUwJTtcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDEwcHggMy41cHggcmdiYSgwLCAwLCAwLCAwLjIpO1xuICB9XG5cbiAgcCB7XG4gICAgZm9udC1zaXplOiAxMDAlO1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDcyMHB4KSB7XG4gIC5jb250YWluZXIge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG5cbiAgLnByb2ZpbGUge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgfVxuXG4gIC50aXRsZSB7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBmb250LXNpemU6IDE1MCU7XG4gIH1cblxuICBhIHtcbiAgICBjb2xvcjogcmVkO1xuICB9XG5cbiAgLnByb2ZpbGUtY29udGVudCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICBmbGV4LWZsb3c6IHdyYXA7XG4gIH1cbiAgLnByb2ZpbGUtY29udGVudCAucHJvZmlsZS10YWdzIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbjogNXB4O1xuICAgIGJhY2tncm91bmQ6ICNjNmRkNDQ7XG4gICAgd2lkdGg6IDMwJTtcbiAgICBoZWlnaHQ6IDEwdmg7XG4gICAgZm9udC1zaXplOiAydmg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgZmxleC1ncm93OiAxO1xuICB9XG4gIC5wcm9maWxlLWNvbnRlbnQgLnRyYW5zYWN0aW9ucyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgb3ZlcmZsb3cteDogYXV0bztcbiAgICBvdmVyZmxvdy15OiBoaWRkZW47XG4gIH1cbiAgLnByb2ZpbGUtY29udGVudCAuZmxleCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDcyMHB4KSB7XG4gIC5jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIG1heC13aWR0aDogMTAwMHB4O1xuICAgIG1heC1oZWlnaHQ6IDY4MHB4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB9XG5cbiAgLnByb2ZpbGUge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTVweDtcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMTVweDtcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxNXB4O1xuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDE1cHg7XG4gICAgcGFkZGluZzogMzBweDtcbiAgICB3aWR0aDogNzAlO1xuICAgIGJveC1zaGFkb3c6IDAgMTBweCAzMHB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgfVxuXG4gIC50aXRsZSB7XG4gICAgZm9udC1mYW1pbHk6IFwiTGF0b1wiO1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIGxldHRlci1zcGFjaW5nOiAyLjVweDtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICB9XG5cbiAgLnByb2ZpbGUtY29udGVudCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICBwYWRkaW5nOiAyMHB4IDIwcHg7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGZsZXgtZmxvdzogd3JhcDtcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XG4gIH1cbiAgLnByb2ZpbGUtY29udGVudCAucHJvZmlsZS10YWdzIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgbWFyZ2luOiA1cHg7XG4gICAgYmFja2dyb3VuZDogI2M2ZGQ0NDtcbiAgICB3aWR0aDogMzAlO1xuICAgIGhlaWdodDogMzUlO1xuICAgIGZsZXgtZ3JvdzogMTtcbiAgICBmb250LXNpemU6IDMwcHg7XG4gIH1cbiAgLnByb2ZpbGUtY29udGVudCAucHJvZmlsZS10YWdzOmhvdmVyIHtcbiAgICBib3gtc2hhZG93OiAxLjVweCAxLjVweCAjZTBiYjEzO1xuICAgIHRyYW5zaXRpb246IGVhc2UtaW4tb3V0IDAuMnM7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG4gIC5wcm9maWxlLWNvbnRlbnQgLnRyYW5zYWN0aW9ucyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgb3ZlcmZsb3cteDogYXV0bztcbiAgICBvdmVyZmxvdy15OiBoaWRkZW47XG4gIH1cbiAgLnByb2ZpbGUtY29udGVudCAuZmxleCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICB9XG5cbiAgLm5hdmlnYXRpb24ge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogNyU7XG4gICAgd2lkdGg6IDIwJTtcbiAgICBoZWlnaHQ6IDEwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIH1cbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WalletComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-wallet',
                templateUrl: './wallet.component.html',
                styleUrls: ['./wallet.component.scss']
            }]
    }], function () { return [{ type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"] }, { type: src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_2__["ProfileService"] }, { type: _services_wallet_service__WEBPACK_IMPORTED_MODULE_3__["WalletService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }]; }, null); })();


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\angularProjects\cycle_beta_0.2\cyclebetafront\src\main.ts */"zUnb");


/***/ }),

/***/ "1qfz":
/*!*************************************************************!*\
  !*** ./src/app/pages/wallet/withdraw/withdraw.component.ts ***!
  \*************************************************************/
/*! exports provided: WithdrawComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WithdrawComponent", function() { return WithdrawComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/profile.service */ "Aso2");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/auth.service */ "lGQG");
/* harmony import */ var src_app_services_wallet_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/wallet.service */ "Fvwb");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");









function WithdrawComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Back");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Approve");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function WithdrawComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Back");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("disable", function WithdrawComponent_div_11_Template_button_disable_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.disableApproval; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Approve");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class WithdrawComponent {
    constructor(profileService, authService, walletService, fb, route, router) {
        this.profileService = profileService;
        this.authService = authService;
        this.walletService = walletService;
        this.fb = fb;
        this.route = route;
        this.router = router;
    }
    ngOnInit() {
        this.withdraw = this.fb.group({
            withdrawAmount: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
        this.walletService.getWallet().subscribe((wallet) => {
            this.wallet = wallet;
        });
    }
    withdrawer() {
        console.log(this.withdraw.value.withdrawAmount);
        this.walletService.getWallet().subscribe((wallet) => {
            let walletAmount = Number(wallet[0].walletAmount) - Number(this.withdraw.value.withdrawAmount);
            this.walletService.updateWallet(this.wallet[0]._id, { walletAmount: walletAmount }).subscribe(() => {
                this.walletService.updateWallet(this.wallet[0]._id + '/transactions', {
                    transactions: {
                        transactionId: Math.random() * 100 + 'dbt',
                        date: new Date(),
                        depositAmount: Number(this.withdraw.value.withdrawAmount),
                        action: 'DEBIT',
                        holder: 'WALLET',
                        newBalance: walletAmount
                    }
                }).subscribe(() => {
                    this.profileService.getUserDetails(this.authService.getUserId()).subscribe((profile) => {
                        this.profileService.updateUserDetails(this.authService.getUserId(), { pendingTransfer: true }).subscribe(() => {
                            this.profile = profile;
                            this.wallet[0].walletAmount = walletAmount;
                            console.log("withdrawal succesful");
                            this.router.navigate(['wallet']);
                        });
                    });
                });
            });
        });
    }
    get touched() {
        if (this.withdraw.value.withdrawAmount) {
            return true;
        }
    }
    get onlyNumbers() {
        if (this.withdraw.value.withdrawAmount) {
            let zero = this.withdraw.value.withdrawAmount * 0;
            if (zero !== 0) {
                return true;
            }
        }
    }
    get disableApproval() {
        if (Number(this.withdraw.value.withdrawAmount == 0)) {
            return true;
        }
        else if ((Number(this.wallet[0].walletAmount) - Number(this.withdraw.value.withdrawAmount) < 0)) {
            return true;
        }
        else {
            return false;
        }
    }
}
WithdrawComponent.ɵfac = function WithdrawComponent_Factory(t) { return new (t || WithdrawComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_2__["ProfileService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_wallet_service__WEBPACK_IMPORTED_MODULE_4__["WalletService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"])); };
WithdrawComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: WithdrawComponent, selectors: [["app-withdraw"]], decls: 12, vars: 3, consts: [[1, "centered-content"], [3, "formGroup", "ngSubmit"], [1, "modal-box"], [1, "title", 2, "text-align", "center"], [2, "padding", "5px"], [1, "field"], [1, "control"], ["placeholder", "ITS YOUR MONEY!!", "formControlName", "withdrawAmount", 1, "input", "is-small", "has-background-light", "is-medium"], ["class", "field", "style", "width: 100%; padding: 20px;", 4, "ngIf"], [1, "field", 2, "width", "100%", "padding", "20px"], ["routerLink", "/wallet", 1, "button", "is-danger", "is-pulled-left"], [1, "button", "is-danger", "is-pulled-right", 2, "cursor", "not-allowed"], ["type", "submit", 1, "button", "is-success", "is-pulled-right", 3, "disable"]], template: function WithdrawComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function WithdrawComponent_Template_form_ngSubmit_1_listener() { return ctx.withdrawer(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Request Funds");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "All withdrawals would be completed in 1 hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, WithdrawComponent_div_10_Template, 5, 0, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, WithdrawComponent_div_11_Template, 5, 0, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.withdraw);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.disableApproval);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.disableApproval);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLink"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ3aXRoZHJhdy5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WithdrawComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-withdraw',
                templateUrl: './withdraw.component.html',
                styleUrls: ['./withdraw.component.scss']
            }]
    }], function () { return [{ type: src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_2__["ProfileService"] }, { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }, { type: src_app_services_wallet_service__WEBPACK_IMPORTED_MODULE_4__["WalletService"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }]; }, null); })();


/***/ }),

/***/ "3xko":
/*!*******************************************************************!*\
  !*** ./src/app/pages/welcome/progress/progress-helper.service.ts ***!
  \*******************************************************************/
/*! exports provided: ProgressHelperService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgressHelperService", function() { return ProgressHelperService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");



class ProgressHelperService {
    constructor() {
        this.eventHelper = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
}
ProgressHelperService.ɵfac = function ProgressHelperService_Factory(t) { return new (t || ProgressHelperService)(); };
ProgressHelperService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ProgressHelperService, factory: ProgressHelperService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProgressHelperService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "4/+/":
/*!***************************************************************!*\
  !*** ./src/app/pages/wallet/my-cycles/my-cycles.component.ts ***!
  \***************************************************************/
/*! exports provided: MyCyclesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyCyclesComponent", function() { return MyCyclesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_wallet_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/wallet.service */ "Fvwb");
/* harmony import */ var src_app_services_cycle_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/cycle.service */ "XUC1");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");






function MyCyclesComponent_a_6_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MyCyclesComponent_a_6_Template_p_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const cycle_r2 = ctx.$implicit; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.getDetails(cycle_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const cycle_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](cycle_r2);
} }
function MyCyclesComponent_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const wallet_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](wallet_r5._id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](wallet_r5.walletId);
} }
class MyCyclesComponent {
    constructor(walletService, cycleService) {
        this.walletService = walletService;
        this.cycleService = cycleService;
        this.wallets = [];
    }
    ngOnInit() {
        this.walletService.getWallet().subscribe((wallet) => {
            this.cycles = wallet[0].cycle;
        });
    }
    getDetails(str) {
        this.cycleId = str;
        this.wallets = [];
        this.cycleService.getCycleDetails(str).subscribe((cycleDetails) => {
            this.walletService.getWallet().subscribe((wallet) => {
                this.lengthOfCycles = wallet[0].cycle.length;
                this.lengthOfWallet = cycleDetails[0].wallet.length;
                this.wallet = cycleDetails[0].wallet;
                console.log(cycleDetails);
                for (let i = 0; i < this.lengthOfWallet; i++) {
                    if (this.wallet[i] !== null) {
                        this.wallets.push(this.wallet[i]);
                    }
                }
                console.log(this.wallets);
                return this.wallet;
            });
        });
    }
}
MyCyclesComponent.ɵfac = function MyCyclesComponent_Factory(t) { return new (t || MyCyclesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_wallet_service__WEBPACK_IMPORTED_MODULE_1__["WalletService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_cycle_service__WEBPACK_IMPORTED_MODULE_2__["CycleService"])); };
MyCyclesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MyCyclesComponent, selectors: [["app-my-cycles"]], decls: 14, vars: 2, consts: [[1, "centered-content"], [1, "container"], [1, "cycle-list", "has-background-white"], [1, "title", "has-text-primary"], [1, "list-menu"], ["class", "list-menu-item", "routerLinkActive", "is-active", 4, "ngFor", "ngForOf"], ["routerLink", "/wallet", 1, "button", "is-danger", "has-text-white"], [1, "profile", "has-background-light"], [1, "profile-content"], ["class", "profile-tags", 4, "ngFor", "ngForOf"], ["routerLinkActive", "is-active", 1, "list-menu-item"], [3, "click"], [1, "profile-tags"], [1, "card-content"], [1, "media"], [1, "media-left"], [1, "media-content"], [1, "title", "is-4"], [1, "subtitle", "is-6"]], template: function MyCyclesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "CYCLES");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, MyCyclesComponent_a_6_Template, 3, 1, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Back To Wallet ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h1", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "MY CYCLE DETAILS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, MyCyclesComponent_div_13_Template, 9, 2, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.cycles);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.wallets);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLink"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkActive"]], styles: ["@import url(\"https://fonts.googleapis.com/css?family=Lato:400,700|Nunito:400,700\");\nhtml[_ngcontent-%COMP%] {\n  background: linear-gradient(to right top, #c6dd44, #e0bb13);\n}\nhtml[_ngcontent-%COMP%], body[_ngcontent-%COMP%] {\n  height: 100%;\n}\nhtml[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], body[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 150%;\n  margin-bottom: 5%;\n}\n.centered-content[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  height: 100%;\n}\n.title[_ngcontent-%COMP%] {\n  font-family: \"Lato\";\n  font-size: 20px;\n  text-transform: uppercase;\n  letter-spacing: 2.5px;\n}\n.modal-box[_ngcontent-%COMP%] {\n  min-height: 300px;\n  width: 100%;\n  max-width: 700px;\n  background: white;\n  border-radius: 5px;\n  padding: 35px;\n}\n.navigation[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 0%;\n  width: 20%;\n  height: 10%;\n  display: flex;\n  flex-direction: row;\n}\n.todashboard[_ngcontent-%COMP%]:hover   a[_ngcontent-%COMP%] {\n  color: red;\n  font-size: larger;\n}\n.logout[_ngcontent-%COMP%]:hover   a[_ngcontent-%COMP%] {\n  color: red;\n  font-size: larger;\n}\n@media only screen and (max-width: 720px) {\n  html[_ngcontent-%COMP%] {\n    background: whitesmoke;\n  }\n\n  .container[_ngcontent-%COMP%] {\n    height: 100%;\n  }\n\n  .profile[_ngcontent-%COMP%] {\n    height: 250%;\n    padding: 10% 5%;\n  }\n\n  .navigation[_ngcontent-%COMP%] {\n    right: 15%;\n    font-size: 2vh;\n  }\n\n  a[_ngcontent-%COMP%] {\n    color: red;\n  }\n\n  .profile-tags[_ngcontent-%COMP%] {\n    margin: 3% 0%;\n    font-size: 250%;\n    box-shadow: 0px 0px 10px 3.5px rgba(0, 0, 0, 0.2);\n  }\n\n  p[_ngcontent-%COMP%] {\n    font-size: 100%;\n  }\n}\n@media only screen and (max-width: 720px) {\n  .container[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n\n  .cycle-list[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    padding-top: 5%;\n    padding-left: 5%;\n    padding-right: 5%;\n  }\n\n  .list-menu[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: row;\n    flex-grow: 1;\n    font-size: 2vh;\n    flex-wrap: wrap;\n  }\n  .list-menu[_ngcontent-%COMP%]   .list-menu-item[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: center;\n    border-radius: 10vh;\n    margin-right: 4.2vh;\n    background-color: pink;\n    color: #5f5f5f;\n    margin-bottom: 2vh;\n    padding: 2vh;\n  }\n  .list-menu[_ngcontent-%COMP%]   .list-menu-item[_ngcontent-%COMP%]:hover {\n    background: #f1e7b6;\n  }\n  .list-menu[_ngcontent-%COMP%]   .list-menu-item.is-active[_ngcontent-%COMP%] {\n    background-color: #c6dd44;\n    color: #332b05;\n  }\n\n  .profile[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    padding: 32px;\n    box-shadow: 10px 10px 30px 10px rgba(0, 0, 0, 0.2);\n  }\n\n  .profile-content[_ngcontent-%COMP%] {\n    background: white;\n    padding: 20px 20px;\n    width: 100%;\n  }\n  .profile-content[_ngcontent-%COMP%]   .profile-tags[_ngcontent-%COMP%] {\n    border-radius: 5px;\n    justify-content: center;\n    align-items: center;\n    margin: 5px;\n    background: #c6dd44;\n  }\n  .profile-content[_ngcontent-%COMP%]   .profile-tags[_ngcontent-%COMP%]:hover {\n    box-shadow: 1.5px 1.5px #e0bb13;\n    transition: ease-in-out 0.2s;\n    cursor: pointer;\n  }\n\n  .navigation[_ngcontent-%COMP%] {\n    top: 2%;\n  }\n}\n@media only screen and (min-width: 720px) {\n  .container[_ngcontent-%COMP%] {\n    display: flex;\n    width: 100%;\n    height: 100%;\n    max-width: 1000px;\n    max-height: 680px;\n    justify-content: center;\n  }\n\n  .cycle-list[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    width: 190px;\n    background-color: white;\n    padding: 32px;\n    border-top-left-radius: 15px;\n    border-bottom-left-radius: 15px;\n    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);\n  }\n\n  .profile[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    border-top-right-radius: 15px;\n    border-bottom-right-radius: 15px;\n    padding: 32px;\n    width: 70%;\n    box-shadow: 10px 10px 30px 10px rgba(0, 0, 0, 0.2);\n  }\n\n  .list-menu[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    margin-top: 10px;\n    flex-grow: 1;\n    font-size: 15px;\n  }\n  .list-menu[_ngcontent-%COMP%]   .list-menu-item[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: center;\n    border-radius: 5px;\n    width: 100%;\n    color: #5f5f5f;\n    margin-bottom: 2.5px;\n    padding: 7px;\n  }\n  .list-menu[_ngcontent-%COMP%]   .list-menu-item[_ngcontent-%COMP%]:hover {\n    background: #f1e7b6;\n  }\n  .list-menu[_ngcontent-%COMP%]   .list-menu-item.is-active[_ngcontent-%COMP%] {\n    background-color: #c6dd44;\n    color: #332b05;\n  }\n\n  p[_ngcontent-%COMP%] {\n    font-size: 0.7rem;\n  }\n\n  .profile-content[_ngcontent-%COMP%] {\n    display: flex;\n    background: white;\n    padding: 20px 20px;\n    height: 100%;\n    width: 100%;\n    flex-flow: wrap;\n  }\n  .profile-content[_ngcontent-%COMP%]   .profile-tags[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: row;\n    border-radius: 5px;\n    justify-content: center;\n    align-items: center;\n    margin: 5px;\n    background: #c6dd44;\n    width: 45%;\n    height: 45%;\n    flex-grow: 1;\n    font-size: 35px;\n  }\n  .profile-content[_ngcontent-%COMP%]   .profile-tags[_ngcontent-%COMP%]:hover {\n    box-shadow: 1.5px 1.5px #e0bb13;\n    transition: ease-in-out 0.2s;\n    cursor: pointer;\n  }\n\n  .cycle-hero[_ngcontent-%COMP%] {\n    background: white;\n    padding: 15px 20px;\n    border-radius: 5px;\n    margin-top: 10px;\n  }\n\n  .details[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: row;\n    flex-grow: 1;\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcbWFpbi1zdHlsZXMuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcbXktY3ljbGVzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdRLGtGQUFBO0FBcUJSO0VBQ0ksMkRBQUE7QUN0Qko7QUR5QkE7O0VBRUksWUFBQTtBQ3RCSjtBRHdCSTs7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7QUNyQlI7QUR5QkE7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDdEJKO0FEMEJBO0VBQ0ksbUJBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7RUFDQSxxQkFBQTtBQ3ZCSjtBRDBCQTtFQUNJLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7QUN2Qko7QUQwQkE7RUFDSSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQ3ZCSjtBRDRCSTtFQUNJLFVBQUE7RUFDQSxpQkFBQTtBQ3pCUjtBRGdDSTtFQUNJLFVBQUE7RUFDQSxpQkFBQTtBQzdCUjtBRGtDQTtFQUNJO0lBQ0ksc0JBQUE7RUMvQk47O0VEa0NFO0lBQ0ksWUFBQTtFQy9CTjs7RURrQ0U7SUFDSSxZQUFBO0lBQ0EsZUFBQTtFQy9CTjs7RURrQ0U7SUFDSSxVQUFBO0lBQ0EsY0FBQTtFQy9CTjs7RURrQ0U7SUFDSSxVQUFBO0VDL0JOOztFRGtDRTtJQUVJLGFBQUE7SUFDQSxlQUFBO0lBQ0EsaURBQUE7RUNoQ047O0VEbUNFO0lBQ0ksZUFBQTtFQ2hDTjtBQUNGO0FBeEZBO0VBQ0k7SUFDSSxXQUFBO0VBMEZOOztFQXZGRTtJQUNJLGFBQUE7SUFDQSxzQkFBQTtJQUNBLGVBQUE7SUFDQSxnQkFBQTtJQUNBLGlCQUFBO0VBMEZOOztFQXZGRTtJQUNJLGFBQUE7SUFDQSxtQkFBQTtJQUNBLFlBQUE7SUFDQSxjQUFBO0lBQ0EsZUFBQTtFQTBGTjtFQXhGTTtJQUNJLGFBQUE7SUFDQSxtQkFBQTtJQUNBLG1CQUFBO0lBQ0EsbUJBQUE7SUFDQSxzQkFBQTtJQUNBLGNBQUE7SUFDQSxrQkFBQTtJQUNBLFlBQUE7RUEwRlY7RUF4RlU7SUFDSSxtQkR4QlI7RUNrSE47RUF2RlU7SUFDSSx5QkRoQ0Y7SUNpQ0UsY0Q1QkY7RUNxSFo7O0VBbkZFO0lBQ0ksYUFBQTtJQUNBLHNCQUFBO0lBQ0EsYUFBQTtJQUNBLGtEQUFBO0VBc0ZOOztFQW5GRTtJQUNJLGlCQUFBO0lBQ0Esa0JBQUE7SUFDQSxXQUFBO0VBc0ZOO0VBbkZNO0lBQ0ksa0JBQUE7SUFDQSx1QkFBQTtJQUNBLG1CQUFBO0lBQ0EsV0FBQTtJQUNBLG1CRHpERTtFQzhJWjtFQW5GVTtJQUNJLCtCQUFBO0lBQ0EsNEJBQUE7SUFDQSxlQUFBO0VBcUZkOztFQS9FRTtJQUNJLE9BQUE7RUFrRk47QUFDRjtBQS9FQTtFQUNBO0lBQ0ksYUFBQTtJQUNBLFdBQUE7SUFDQSxZQUFBO0lBQ0EsaUJBQUE7SUFDQSxpQkFBQTtJQUNBLHVCQUFBO0VBaUZGOztFQTlFRjtJQUNJLGFBQUE7SUFDQSxzQkFBQTtJQUNBLFlBQUE7SUFDQSx1QkFBQTtJQUNBLGFBQUE7SUFDQSw0QkFBQTtJQUNBLCtCQUFBO0lBQ0EsMENBQUE7RUFpRkY7O0VBOUVGO0lBQ0ksYUFBQTtJQUNBLHNCQUFBO0lBQ0EsNkJBQUE7SUFDQSxnQ0FBQTtJQUNBLGFBQUE7SUFDQSxVQUFBO0lBQ0Esa0RBQUE7RUFpRkY7O0VBOUVGO0lBQ0ksYUFBQTtJQUNBLHNCQUFBO0lBQ0EsZ0JBQUE7SUFDQSxZQUFBO0lBQ0EsZUFBQTtFQWlGRjtFQS9FRTtJQUNJLGFBQUE7SUFDQSxtQkFBQTtJQUNBLGtCQUFBO0lBQ0EsV0FBQTtJQUNBLGNBQUE7SUFDQSxvQkFBQTtJQUNBLFlBQUE7RUFpRk47RUEvRU07SUFDSSxtQkRySEo7RUNzTU47RUE5RU07SUFDSSx5QkQ3SEU7SUM4SEYsY0R6SEU7RUN5TVo7O0VBM0VGO0lBQ0ksaUJBQUE7RUE4RUY7O0VBM0VGO0lBQ0ksYUFBQTtJQUNBLGlCQUFBO0lBQ0Esa0JBQUE7SUFDQSxZQUFBO0lBQ0EsV0FBQTtJQUNBLGVBQUE7RUE4RUY7RUEzRUU7SUFDSSxhQUFBO0lBQ0EsbUJBQUE7SUFDQSxrQkFBQTtJQUNBLHVCQUFBO0lBQ0EsbUJBQUE7SUFDQSxXQUFBO0lBQ0EsbUJEdkpNO0lDd0pOLFVBQUE7SUFDQSxXQUFBO0lBQ0EsWUFBQTtJQUNBLGVBQUE7RUE2RU47RUEzRU07SUFDSSwrQkFBQTtJQUNBLDRCQUFBO0lBQ0EsZUFBQTtFQTZFVjs7RUF0RUY7SUFDSSxpQkFBQTtJQUNBLGtCQUFBO0lBQ0Esa0JBQUE7SUFDQSxnQkFBQTtFQXlFRjs7RUF0RUY7SUFDSSxhQUFBO0lBQ0EsbUJBQUE7SUFDQSxZQUFBO0lBQ0EsV0FBQTtFQXlFRjtBQUNGIiwiZmlsZSI6Im15LWN5Y2xlcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vVGhpcyB3aGVyZSB3ZSBwdXQgZ2xvYmFsIHN0eWxlcyBhbmQgY2hhbmdlIHZhcmlhYmxlIHZhbHVlc1xyXG5cclxuLy9pbXBvcnQgZ29vZ2xlIGZvbnRzLiBMYXRvIGFuZCBOdW5pdG9cclxuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1MYXRvOjQwMCw3MDB8TnVuaXRvOjQwMCw3MDAnKTtcclxuXHJcbiRkZWVwLXllbGxvdzogI2M2ZGQ0NDtcclxuJG9yYW5nZTogI2UwYmIxMztcclxuXHJcbiRsaWdodC1vcmFuZ2U6ICNlN2RiNmU7XHJcbiRsaWdodDogI2YxZTdiNjtcclxuJGRhcmstb3JhbmdlOiAjMzMyYjA1O1xyXG5cclxuLy8gVXBkYXRlIEJ1bG1hIGdsb2JhbCB2YXJpYWJsZXNcclxuJGZhbWlseS1zYW5zLXNlcmlmOiBcIk51bml0b1wiLCBzYW5zLXNlcmlmO1xyXG4kcHJpbWFyeTogJG9yYW5nZTtcclxuJGxpbms6ICRsaWdodC1vcmFuZ2U7XHJcblxyXG4vL1VwZGF0ZSBzb21lIEJ1bG1hIGNvbXBvbmVudCB2YXJpYWJsZXNcclxuJGNvbnRvbC1ib3JkZXItd2lkdGg6IDJweDtcclxuJGlucHV0LWJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiRpbnB1dC1zaGFkb3c6IG5vbmU7XHJcblxyXG4vL3NldCBjdXN0b20gZ2xvYmFsIHN0eWxlcyAod2lsbCBiZSBhcGxpZWQgdG8gd2hvbGUgYXBwKVxyXG5cclxuaHRtbCB7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQgdG9wLCAkZGVlcC15ZWxsb3csICRvcmFuZ2UpO1xyXG59XHJcblxyXG5odG1sLFxyXG5ib2R5IHtcclxuICAgIGhlaWdodDogMTAwJTtcclxuXHJcbiAgICBoMyB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNTAlO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDUlO1xyXG4gICAgfVxyXG59XHJcblxyXG4uY2VudGVyZWQtY29udGVudCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcblxyXG4udGl0bGUge1xyXG4gICAgZm9udC1mYW1pbHk6ICdMYXRvJztcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMi41cHg7XHJcbn1cclxuXHJcbi5tb2RhbC1ib3gge1xyXG4gICAgbWluLWhlaWdodDogMzAwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1heC13aWR0aDogNzAwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIHBhZGRpbmc6IDM1cHg7XHJcbn1cclxuXHJcbi5uYXZpZ2F0aW9uIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHJpZ2h0OiAwJTtcclxuICAgIHdpZHRoOiAyMCU7XHJcbiAgICBoZWlnaHQ6IDEwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG59XHJcblxyXG4udG9kYXNoYm9hcmQ6aG92ZXIge1xyXG5cclxuICAgIGEge1xyXG4gICAgICAgIGNvbG9yOiByZWQ7XHJcbiAgICAgICAgZm9udC1zaXplOiBsYXJnZXI7XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG4ubG9nb3V0OmhvdmVyIHtcclxuXHJcbiAgICBhIHtcclxuICAgICAgICBjb2xvcjogcmVkO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogbGFyZ2VyO1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3MjBweCkge1xyXG4gICAgaHRtbCB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogd2hpdGVzbW9rZTtcclxuICAgIH1cclxuXHJcbiAgICAuY29udGFpbmVyIHtcclxuICAgICAgICBoZWlnaHQ6IDEwMCVcclxuICAgIH1cclxuXHJcbiAgICAucHJvZmlsZSB7XHJcbiAgICAgICAgaGVpZ2h0OiAyNTAlO1xyXG4gICAgICAgIHBhZGRpbmc6IDEwJSA1JTtcclxuICAgIH1cclxuXHJcbiAgICAubmF2aWdhdGlvbiB7XHJcbiAgICAgICAgcmlnaHQ6IDE1JTtcclxuICAgICAgICBmb250LXNpemU6IDJ2aDtcclxuICAgIH1cclxuXHJcbiAgICBhIHtcclxuICAgICAgICBjb2xvcjogcmVkO1xyXG4gICAgfVxyXG5cclxuICAgIC5wcm9maWxlLXRhZ3Mge1xyXG5cclxuICAgICAgICBtYXJnaW46IDMlIDAlO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjUwJTtcclxuICAgICAgICBib3gtc2hhZG93OiAwcHggMHB4IDEwcHggMy41cHggcmdiKDAgMCAwIC8gMjAlKTtcclxuICAgIH1cclxuXHJcbiAgICBwIHtcclxuICAgICAgICBmb250LXNpemU6IDEwMCU7XHJcbiAgICB9XHJcbn0iLCJAaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1MYXRvOjQwMCw3MDB8TnVuaXRvOjQwMCw3MDBcIik7XG5odG1sIHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0IHRvcCwgI2M2ZGQ0NCwgI2UwYmIxMyk7XG59XG5cbmh0bWwsXG5ib2R5IHtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuaHRtbCBoMyxcbmJvZHkgaDMge1xuICBmb250LXNpemU6IDE1MCU7XG4gIG1hcmdpbi1ib3R0b206IDUlO1xufVxuXG4uY2VudGVyZWQtY29udGVudCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4udGl0bGUge1xuICBmb250LWZhbWlseTogXCJMYXRvXCI7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgbGV0dGVyLXNwYWNpbmc6IDIuNXB4O1xufVxuXG4ubW9kYWwtYm94IHtcbiAgbWluLWhlaWdodDogMzAwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXgtd2lkdGg6IDcwMHB4O1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBwYWRkaW5nOiAzNXB4O1xufVxuXG4ubmF2aWdhdGlvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDAlO1xuICB3aWR0aDogMjAlO1xuICBoZWlnaHQ6IDEwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbn1cblxuLnRvZGFzaGJvYXJkOmhvdmVyIGEge1xuICBjb2xvcjogcmVkO1xuICBmb250LXNpemU6IGxhcmdlcjtcbn1cblxuLmxvZ291dDpob3ZlciBhIHtcbiAgY29sb3I6IHJlZDtcbiAgZm9udC1zaXplOiBsYXJnZXI7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzIwcHgpIHtcbiAgaHRtbCB7XG4gICAgYmFja2dyb3VuZDogd2hpdGVzbW9rZTtcbiAgfVxuXG4gIC5jb250YWluZXIge1xuICAgIGhlaWdodDogMTAwJTtcbiAgfVxuXG4gIC5wcm9maWxlIHtcbiAgICBoZWlnaHQ6IDI1MCU7XG4gICAgcGFkZGluZzogMTAlIDUlO1xuICB9XG5cbiAgLm5hdmlnYXRpb24ge1xuICAgIHJpZ2h0OiAxNSU7XG4gICAgZm9udC1zaXplOiAydmg7XG4gIH1cblxuICBhIHtcbiAgICBjb2xvcjogcmVkO1xuICB9XG5cbiAgLnByb2ZpbGUtdGFncyB7XG4gICAgbWFyZ2luOiAzJSAwJTtcbiAgICBmb250LXNpemU6IDI1MCU7XG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAxMHB4IDMuNXB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgfVxuXG4gIHAge1xuICAgIGZvbnQtc2l6ZTogMTAwJTtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3MjBweCkge1xuICAuY29udGFpbmVyIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuXG4gIC5jeWNsZS1saXN0IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgcGFkZGluZy10b3A6IDUlO1xuICAgIHBhZGRpbmctbGVmdDogNSU7XG4gICAgcGFkZGluZy1yaWdodDogNSU7XG4gIH1cblxuICAubGlzdC1tZW51IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgZmxleC1ncm93OiAxO1xuICAgIGZvbnQtc2l6ZTogMnZoO1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgfVxuICAubGlzdC1tZW51IC5saXN0LW1lbnUtaXRlbSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwdmg7XG4gICAgbWFyZ2luLXJpZ2h0OiA0LjJ2aDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBwaW5rO1xuICAgIGNvbG9yOiAjNWY1ZjVmO1xuICAgIG1hcmdpbi1ib3R0b206IDJ2aDtcbiAgICBwYWRkaW5nOiAydmg7XG4gIH1cbiAgLmxpc3QtbWVudSAubGlzdC1tZW51LWl0ZW06aG92ZXIge1xuICAgIGJhY2tncm91bmQ6ICNmMWU3YjY7XG4gIH1cbiAgLmxpc3QtbWVudSAubGlzdC1tZW51LWl0ZW0uaXMtYWN0aXZlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzZkZDQ0O1xuICAgIGNvbG9yOiAjMzMyYjA1O1xuICB9XG5cbiAgLnByb2ZpbGUge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBwYWRkaW5nOiAzMnB4O1xuICAgIGJveC1zaGFkb3c6IDEwcHggMTBweCAzMHB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjIpO1xuICB9XG5cbiAgLnByb2ZpbGUtY29udGVudCB7XG4gICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgcGFkZGluZzogMjBweCAyMHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gIC5wcm9maWxlLWNvbnRlbnQgLnByb2ZpbGUtdGFncyB7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgbWFyZ2luOiA1cHg7XG4gICAgYmFja2dyb3VuZDogI2M2ZGQ0NDtcbiAgfVxuICAucHJvZmlsZS1jb250ZW50IC5wcm9maWxlLXRhZ3M6aG92ZXIge1xuICAgIGJveC1zaGFkb3c6IDEuNXB4IDEuNXB4ICNlMGJiMTM7XG4gICAgdHJhbnNpdGlvbjogZWFzZS1pbi1vdXQgMC4ycztcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cblxuICAubmF2aWdhdGlvbiB7XG4gICAgdG9wOiAyJTtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3MjBweCkge1xuICAuY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBtYXgtd2lkdGg6IDEwMDBweDtcbiAgICBtYXgtaGVpZ2h0OiA2ODBweDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgfVxuXG4gIC5jeWNsZS1saXN0IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgd2lkdGg6IDE5MHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIHBhZGRpbmc6IDMycHg7XG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTVweDtcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxNXB4O1xuICAgIGJveC1zaGFkb3c6IDAgMTBweCAzMHB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgfVxuXG4gIC5wcm9maWxlIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDE1cHg7XG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDE1cHg7XG4gICAgcGFkZGluZzogMzJweDtcbiAgICB3aWR0aDogNzAlO1xuICAgIGJveC1zaGFkb3c6IDEwcHggMTBweCAzMHB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjIpO1xuICB9XG5cbiAgLmxpc3QtbWVudSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgZmxleC1ncm93OiAxO1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgfVxuICAubGlzdC1tZW51IC5saXN0LW1lbnUtaXRlbSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBjb2xvcjogIzVmNWY1ZjtcbiAgICBtYXJnaW4tYm90dG9tOiAyLjVweDtcbiAgICBwYWRkaW5nOiA3cHg7XG4gIH1cbiAgLmxpc3QtbWVudSAubGlzdC1tZW51LWl0ZW06aG92ZXIge1xuICAgIGJhY2tncm91bmQ6ICNmMWU3YjY7XG4gIH1cbiAgLmxpc3QtbWVudSAubGlzdC1tZW51LWl0ZW0uaXMtYWN0aXZlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzZkZDQ0O1xuICAgIGNvbG9yOiAjMzMyYjA1O1xuICB9XG5cbiAgcCB7XG4gICAgZm9udC1zaXplOiAwLjdyZW07XG4gIH1cblxuICAucHJvZmlsZS1jb250ZW50IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgIHBhZGRpbmc6IDIwcHggMjBweDtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZmxleC1mbG93OiB3cmFwO1xuICB9XG4gIC5wcm9maWxlLWNvbnRlbnQgLnByb2ZpbGUtdGFncyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIG1hcmdpbjogNXB4O1xuICAgIGJhY2tncm91bmQ6ICNjNmRkNDQ7XG4gICAgd2lkdGg6IDQ1JTtcbiAgICBoZWlnaHQ6IDQ1JTtcbiAgICBmbGV4LWdyb3c6IDE7XG4gICAgZm9udC1zaXplOiAzNXB4O1xuICB9XG4gIC5wcm9maWxlLWNvbnRlbnQgLnByb2ZpbGUtdGFnczpob3ZlciB7XG4gICAgYm94LXNoYWRvdzogMS41cHggMS41cHggI2UwYmIxMztcbiAgICB0cmFuc2l0aW9uOiBlYXNlLWluLW91dCAwLjJzO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxuXG4gIC5jeWNsZS1oZXJvIHtcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICBwYWRkaW5nOiAxNXB4IDIwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gIH1cblxuICAuZGV0YWlscyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGZsZXgtZ3JvdzogMTtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MyCyclesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-my-cycles',
                templateUrl: './my-cycles.component.html',
                styleUrls: ['./my-cycles.component.scss']
            }]
    }], function () { return [{ type: src_app_services_wallet_service__WEBPACK_IMPORTED_MODULE_1__["WalletService"] }, { type: src_app_services_cycle_service__WEBPACK_IMPORTED_MODULE_2__["CycleService"] }]; }, null); })();


/***/ }),

/***/ "7rOy":
/*!*******************************************************************!*\
  !*** ./src/app/pages/welcome/progress/progress-step.directive.ts ***!
  \*******************************************************************/
/*! exports provided: ProgressStepDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgressStepDirective", function() { return ProgressStepDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _progress_helper_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./progress-helper.service */ "3xko");



class ProgressStepDirective {
    constructor(progressHelper, el) {
        this.progressHelper = progressHelper;
        this.el = el;
        this.methods = {
            prev: false,
            next: false
        };
    }
    listen(e) {
        this.progressHelper.eventHelper.next(this.methods);
    }
    ngOnInit() {
        this.initMethods();
    }
    initMethods() {
        if ('next' in this) {
            this.methods = Object.assign(Object.assign({}, this.methods), { next: true });
        }
        if ('prev' in this) {
            this.methods = Object.assign(Object.assign({}, this.methods), { prev: true });
        }
    }
}
ProgressStepDirective.ɵfac = function ProgressStepDirective_Factory(t) { return new (t || ProgressStepDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_progress_helper_service__WEBPACK_IMPORTED_MODULE_1__["ProgressHelperService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])); };
ProgressStepDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: ProgressStepDirective, selectors: [["", "progressStepNext", ""], ["", "progressStepPrev", ""]], hostBindings: function ProgressStepDirective_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProgressStepDirective_click_HostBindingHandler($event) { return ctx.listen($event); });
    } }, inputs: { next: ["progressStepNext", "next"], prev: ["progressStepPrev", "prev"] } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProgressStepDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[progressStepNext], [progressStepPrev]'
            }]
    }], function () { return [{ type: _progress_helper_service__WEBPACK_IMPORTED_MODULE_1__["ProgressHelperService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }]; }, { next: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['progressStepNext']
        }], prev: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['progressStepPrev']
        }], listen: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['click', ['$event']]
        }] }); })();


/***/ }),

/***/ "A4Ci":
/*!**************************************************************!*\
  !*** ./src/app/pages/cycle/new-cycle/new-cycle.component.ts ***!
  \**************************************************************/
/*! exports provided: NewCycleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewCycleComponent", function() { return NewCycleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var src_app_services_cycle_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/cycle.service */ "XUC1");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_wallet_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/wallet.service */ "Fvwb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");








function NewCycleComponent_span_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Invalid Entry");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function NewCycleComponent_span_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Invalid Entry");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class NewCycleComponent {
    constructor(fb, cycleService, route, router, walletService) {
        this.fb = fb;
        this.cycleService = cycleService;
        this.route = route;
        this.router = router;
        this.walletService = walletService;
        this.disable = true;
    }
    ngOnInit() {
        this.cycleForm = this.fb.group({
            cycleDuration: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            cycleAmount: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            cycleStartDate: [''],
            frequency: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
        this.walletService.getWallet().subscribe((wallet) => {
            this.wallet = wallet;
        });
    }
    createNewCycle() {
        console.log(this.cycleForm.value.cycleAmount);
        this.cycleService.createCycle({
            cycleDuration: this.cycleForm.value.cycleDuration,
            cycleAmount: this.cycleForm.value.cycleAmount,
            cycleStartDate: this.cycleForm.value.cycleStartDate,
            frequency: this.cycleForm.value.frequency,
            wallet: this.wallet
        }).subscribe((cycle) => {
            this.walletService.updateWallet(this.wallet[0]._id + '/my-cycle', { cycle: cycle._id }).subscribe(() => {
                console.log(cycle);
                console.log('Data added successfully!');
                this.router.navigate(['cycle']);
                alert('Cycle Created');
            });
        }, (err) => {
            console.log(err);
        });
    }
    get onlyNumbersCycleDuration() {
        if (this.cycleForm.value.cycleDuration) {
            let zero = this.cycleForm.value.cycleDuration * 0;
            if (zero !== 0) {
                return true;
            }
        }
    }
    get onlyNumbersCycleAmount() {
        if (this.cycleForm.value.cycleAmount) {
            let zero = this.cycleForm.value.cycleAmount * 0;
            if (zero !== 0) {
                return true;
            }
        }
    }
}
NewCycleComponent.ɵfac = function NewCycleComponent_Factory(t) { return new (t || NewCycleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_cycle_service__WEBPACK_IMPORTED_MODULE_2__["CycleService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_wallet_service__WEBPACK_IMPORTED_MODULE_4__["WalletService"])); };
NewCycleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NewCycleComponent, selectors: [["app-new-cycle"]], decls: 33, vars: 3, consts: [[1, "centered-content"], [3, "formGroup", "ngSubmit"], [1, "modal-box"], [1, "title"], [1, "field"], [1, "control"], ["placeholder", "How Long Is The Cycle?", "formControlName", "cycleDuration", 1, "input", "is-small", "has-background-light", "is-medium"], ["style", "color: red;", 4, "ngIf"], [1, "selected"], ["formControlName", "frequency", 2, "width", "100%", "height", "100%"], ["placeholder", "Amount", "formControlName", "cycleAmount", 1, "input", "is-small", "has-background-light", "is-medium"], ["type", "submit", 1, "button", "is-success"], ["routerLink", "/adminprivateaccess", 1, "button", "is-danger"], [2, "color", "red"]], template: function NewCycleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function NewCycleComponent_Template_form_ngSubmit_1_listener() { return ctx.createNewCycle(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Create Your CYCLE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Duration ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, NewCycleComponent_span_9_Template, 2, 0, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Frequency");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "select", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Daily");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Weekly");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Monthly");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Value ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, NewCycleComponent_span_26_Template, 2, 0, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, " Create ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Back");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.cycleForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.onlyNumbersCycleDuration);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.onlyNumbersCycleAmount);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_x"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJuZXctY3ljbGUuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NewCycleComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-new-cycle',
                templateUrl: './new-cycle.component.html',
                styleUrls: ['./new-cycle.component.scss']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: src_app_services_cycle_service__WEBPACK_IMPORTED_MODULE_2__["CycleService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _services_wallet_service__WEBPACK_IMPORTED_MODULE_4__["WalletService"] }]; }, null); })();


/***/ }),

/***/ "Aso2":
/*!*********************************************!*\
  !*** ./src/app/services/profile.service.ts ***!
  \*********************************************/
/*! exports provided: ProfileService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileService", function() { return ProfileService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _web_request_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./web-request.service */ "hZfp");



class ProfileService {
    constructor(webReqService) {
        this.webReqService = webReqService;
    }
    getUserDetails(userId) {
        return this.webReqService.get(`users/${userId}`);
    }
    getAllUsers() {
        return this.webReqService.get(`users`);
    }
    updateUserDetails(userId, update) {
        return this.webReqService.patch(`users/${userId}`, update);
    }
    deleteWallet(userId) {
        return this.webReqService.delete(userId);
    }
}
ProfileService.ɵfac = function ProfileService_Factory(t) { return new (t || ProfileService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_web_request_service__WEBPACK_IMPORTED_MODULE_1__["WebRequestService"])); };
ProfileService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ProfileService, factory: ProfileService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProfileService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _web_request_service__WEBPACK_IMPORTED_MODULE_1__["WebRequestService"] }]; }, null); })();


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
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


/***/ }),

/***/ "D8EZ":
/*!************************************************!*\
  !*** ./src/app/pages/login/login.component.ts ***!
  \************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth.service */ "lGQG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");







function LoginComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Username or Password Incorect");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class LoginComponent {
    constructor(authService, router, fb) {
        this.authService = authService;
        this.router = router;
        this.fb = fb;
        this.badRequestError = false;
    }
    ngOnInit() {
        this.loginForm = this.fb.group({
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
    }
    login() {
        this.profileForm = this.loginForm.value;
        this.authService.login(this.profileForm.username.toUpperCase(), this.profileForm.password).subscribe((res) => {
            if (res.status === 200) {
                this.badRequestError = false;
                this.router.navigate(['/dashboard']);
            }
        }, (catchError) => {
            this.badRequestError = true;
            this.loginForm.reset();
            console.log('Incorrect Password');
        });
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"])); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 23, vars: 2, consts: [[1, "centered-content"], [3, "formGroup", "ngSubmit"], [1, "modal-box"], [1, "title", "has-text-primary"], [1, "field"], [1, "control"], ["placeholder", "Username", "formControlName", "username", 1, "input", "is-small", "has-background-light", "is-medium"], [1, "field", 2, "display", "flex", "justify-content", "flex-end"], ["type", "password", "placeholder", "password", "formControlName", "password", 1, "input", "is-small", "has-background-light", "is-medium"], [4, "ngIf"], [1, "field", "is-pulled-right"], ["type", "submit", 1, "button", "is-success"], ["routerLink", "/signup"], [1, "danger", 2, "margin-bottom", "5px"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_1_listener() { return ctx.login(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "LOGIN");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, LoginComponent_div_11_Template, 4, 0, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Login ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Not got an account? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Sign up");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " now!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.loginForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.badRequestError);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"]], styles: ["@import url(\"https://fonts.googleapis.com/css?family=Lato:400,700|Nunito:400,700\");\nhtml[_ngcontent-%COMP%] {\n  background: linear-gradient(to right top, #c6dd44, #e0bb13);\n}\nhtml[_ngcontent-%COMP%], body[_ngcontent-%COMP%] {\n  height: 100%;\n}\nhtml[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], body[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 150%;\n  margin-bottom: 5%;\n}\n.centered-content[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  height: 100%;\n}\n.title[_ngcontent-%COMP%] {\n  font-family: \"Lato\";\n  font-size: 20px;\n  text-transform: uppercase;\n  letter-spacing: 2.5px;\n}\n.modal-box[_ngcontent-%COMP%] {\n  min-height: 300px;\n  width: 100%;\n  max-width: 700px;\n  background: white;\n  border-radius: 5px;\n  padding: 35px;\n}\n.navigation[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 0%;\n  width: 20%;\n  height: 10%;\n  display: flex;\n  flex-direction: row;\n}\n.todashboard[_ngcontent-%COMP%]:hover   a[_ngcontent-%COMP%] {\n  color: red;\n  font-size: larger;\n}\n.logout[_ngcontent-%COMP%]:hover   a[_ngcontent-%COMP%] {\n  color: red;\n  font-size: larger;\n}\n@media only screen and (max-width: 720px) {\n  html[_ngcontent-%COMP%] {\n    background: whitesmoke;\n  }\n\n  .container[_ngcontent-%COMP%] {\n    height: 100%;\n  }\n\n  .profile[_ngcontent-%COMP%] {\n    height: 250%;\n    padding: 10% 5%;\n  }\n\n  .navigation[_ngcontent-%COMP%] {\n    right: 15%;\n    font-size: 2vh;\n  }\n\n  a[_ngcontent-%COMP%] {\n    color: red;\n  }\n\n  .profile-tags[_ngcontent-%COMP%] {\n    margin: 3% 0%;\n    font-size: 250%;\n    box-shadow: 0px 0px 10px 3.5px rgba(0, 0, 0, 0.2);\n  }\n\n  p[_ngcontent-%COMP%] {\n    font-size: 100%;\n  }\n}\n.danger[_ngcontent-%COMP%] {\n  color: red;\n}\n.centered-content[_ngcontent-%COMP%] {\n  background: linear-gradient(to right top, #c6dd44, #e0bb13);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxtYWluLXN0eWxlcy5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXGxvZ2luLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdRLGtGQUFBO0FBcUJSO0VBQ0ksMkRBQUE7QUN0Qko7QUR5QkE7O0VBRUksWUFBQTtBQ3RCSjtBRHdCSTs7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7QUNyQlI7QUR5QkE7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDdEJKO0FEMEJBO0VBQ0ksbUJBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7RUFDQSxxQkFBQTtBQ3ZCSjtBRDBCQTtFQUNJLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7QUN2Qko7QUQwQkE7RUFDSSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQ3ZCSjtBRDRCSTtFQUNJLFVBQUE7RUFDQSxpQkFBQTtBQ3pCUjtBRGdDSTtFQUNJLFVBQUE7RUFDQSxpQkFBQTtBQzdCUjtBRGtDQTtFQUNJO0lBQ0ksc0JBQUE7RUMvQk47O0VEa0NFO0lBQ0ksWUFBQTtFQy9CTjs7RURrQ0U7SUFDSSxZQUFBO0lBQ0EsZUFBQTtFQy9CTjs7RURrQ0U7SUFDSSxVQUFBO0lBQ0EsY0FBQTtFQy9CTjs7RURrQ0U7SUFDSSxVQUFBO0VDL0JOOztFRGtDRTtJQUVJLGFBQUE7SUFDQSxlQUFBO0lBQ0EsaURBQUE7RUNoQ047O0VEbUNFO0lBQ0ksZUFBQTtFQ2hDTjtBQUNGO0FBeEZBO0VBQ0ksVUFBQTtBQTBGSjtBQXZGQTtFQUNJLDJEQUFBO0FBMEZKIiwiZmlsZSI6ImxvZ2luLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy9UaGlzIHdoZXJlIHdlIHB1dCBnbG9iYWwgc3R5bGVzIGFuZCBjaGFuZ2UgdmFyaWFibGUgdmFsdWVzXHJcblxyXG4vL2ltcG9ydCBnb29nbGUgZm9udHMuIExhdG8gYW5kIE51bml0b1xyXG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PUxhdG86NDAwLDcwMHxOdW5pdG86NDAwLDcwMCcpO1xyXG5cclxuJGRlZXAteWVsbG93OiAjYzZkZDQ0O1xyXG4kb3JhbmdlOiAjZTBiYjEzO1xyXG5cclxuJGxpZ2h0LW9yYW5nZTogI2U3ZGI2ZTtcclxuJGxpZ2h0OiAjZjFlN2I2O1xyXG4kZGFyay1vcmFuZ2U6ICMzMzJiMDU7XHJcblxyXG4vLyBVcGRhdGUgQnVsbWEgZ2xvYmFsIHZhcmlhYmxlc1xyXG4kZmFtaWx5LXNhbnMtc2VyaWY6IFwiTnVuaXRvXCIsIHNhbnMtc2VyaWY7XHJcbiRwcmltYXJ5OiAkb3JhbmdlO1xyXG4kbGluazogJGxpZ2h0LW9yYW5nZTtcclxuXHJcbi8vVXBkYXRlIHNvbWUgQnVsbWEgY29tcG9uZW50IHZhcmlhYmxlc1xyXG4kY29udG9sLWJvcmRlci13aWR0aDogMnB4O1xyXG4kaW5wdXQtYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuJGlucHV0LXNoYWRvdzogbm9uZTtcclxuXHJcbi8vc2V0IGN1c3RvbSBnbG9iYWwgc3R5bGVzICh3aWxsIGJlIGFwbGllZCB0byB3aG9sZSBhcHApXHJcblxyXG5odG1sIHtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCB0b3AsICRkZWVwLXllbGxvdywgJG9yYW5nZSk7XHJcbn1cclxuXHJcbmh0bWwsXHJcbmJvZHkge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG5cclxuICAgIGgzIHtcclxuICAgICAgICBmb250LXNpemU6IDE1MCU7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNSU7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5jZW50ZXJlZC1jb250ZW50IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuXHJcbi50aXRsZSB7XHJcbiAgICBmb250LWZhbWlseTogJ0xhdG8nO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIGxldHRlci1zcGFjaW5nOiAyLjVweDtcclxufVxyXG5cclxuLm1vZGFsLWJveCB7XHJcbiAgICBtaW4taGVpZ2h0OiAzMDBweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWF4LXdpZHRoOiA3MDBweDtcclxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgcGFkZGluZzogMzVweDtcclxufVxyXG5cclxuLm5hdmlnYXRpb24ge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcmlnaHQ6IDAlO1xyXG4gICAgd2lkdGg6IDIwJTtcclxuICAgIGhlaWdodDogMTAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbn1cclxuXHJcbi50b2Rhc2hib2FyZDpob3ZlciB7XHJcblxyXG4gICAgYSB7XHJcbiAgICAgICAgY29sb3I6IHJlZDtcclxuICAgICAgICBmb250LXNpemU6IGxhcmdlcjtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbi5sb2dvdXQ6aG92ZXIge1xyXG5cclxuICAgIGEge1xyXG4gICAgICAgIGNvbG9yOiByZWQ7XHJcbiAgICAgICAgZm9udC1zaXplOiBsYXJnZXI7XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDcyMHB4KSB7XHJcbiAgICBodG1sIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZXNtb2tlO1xyXG4gICAgfVxyXG5cclxuICAgIC5jb250YWluZXIge1xyXG4gICAgICAgIGhlaWdodDogMTAwJVxyXG4gICAgfVxyXG5cclxuICAgIC5wcm9maWxlIHtcclxuICAgICAgICBoZWlnaHQ6IDI1MCU7XHJcbiAgICAgICAgcGFkZGluZzogMTAlIDUlO1xyXG4gICAgfVxyXG5cclxuICAgIC5uYXZpZ2F0aW9uIHtcclxuICAgICAgICByaWdodDogMTUlO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMnZoO1xyXG4gICAgfVxyXG5cclxuICAgIGEge1xyXG4gICAgICAgIGNvbG9yOiByZWQ7XHJcbiAgICB9XHJcblxyXG4gICAgLnByb2ZpbGUtdGFncyB7XHJcblxyXG4gICAgICAgIG1hcmdpbjogMyUgMCU7XHJcbiAgICAgICAgZm9udC1zaXplOiAyNTAlO1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDBweCAwcHggMTBweCAzLjVweCByZ2IoMCAwIDAgLyAyMCUpO1xyXG4gICAgfVxyXG5cclxuICAgIHAge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTAwJTtcclxuICAgIH1cclxufSIsIkBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PUxhdG86NDAwLDcwMHxOdW5pdG86NDAwLDcwMFwiKTtcbmh0bWwge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQgdG9wLCAjYzZkZDQ0LCAjZTBiYjEzKTtcbn1cblxuaHRtbCxcbmJvZHkge1xuICBoZWlnaHQ6IDEwMCU7XG59XG5odG1sIGgzLFxuYm9keSBoMyB7XG4gIGZvbnQtc2l6ZTogMTUwJTtcbiAgbWFyZ2luLWJvdHRvbTogNSU7XG59XG5cbi5jZW50ZXJlZC1jb250ZW50IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi50aXRsZSB7XG4gIGZvbnQtZmFtaWx5OiBcIkxhdG9cIjtcbiAgZm9udC1zaXplOiAyMHB4O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBsZXR0ZXItc3BhY2luZzogMi41cHg7XG59XG5cbi5tb2RhbC1ib3gge1xuICBtaW4taGVpZ2h0OiAzMDBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIG1heC13aWR0aDogNzAwcHg7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHBhZGRpbmc6IDM1cHg7XG59XG5cbi5uYXZpZ2F0aW9uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMCU7XG4gIHdpZHRoOiAyMCU7XG4gIGhlaWdodDogMTAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xufVxuXG4udG9kYXNoYm9hcmQ6aG92ZXIgYSB7XG4gIGNvbG9yOiByZWQ7XG4gIGZvbnQtc2l6ZTogbGFyZ2VyO1xufVxuXG4ubG9nb3V0OmhvdmVyIGEge1xuICBjb2xvcjogcmVkO1xuICBmb250LXNpemU6IGxhcmdlcjtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3MjBweCkge1xuICBodG1sIHtcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZXNtb2tlO1xuICB9XG5cbiAgLmNvbnRhaW5lciB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICB9XG5cbiAgLnByb2ZpbGUge1xuICAgIGhlaWdodDogMjUwJTtcbiAgICBwYWRkaW5nOiAxMCUgNSU7XG4gIH1cblxuICAubmF2aWdhdGlvbiB7XG4gICAgcmlnaHQ6IDE1JTtcbiAgICBmb250LXNpemU6IDJ2aDtcbiAgfVxuXG4gIGEge1xuICAgIGNvbG9yOiByZWQ7XG4gIH1cblxuICAucHJvZmlsZS10YWdzIHtcbiAgICBtYXJnaW46IDMlIDAlO1xuICAgIGZvbnQtc2l6ZTogMjUwJTtcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDEwcHggMy41cHggcmdiYSgwLCAwLCAwLCAwLjIpO1xuICB9XG5cbiAgcCB7XG4gICAgZm9udC1zaXplOiAxMDAlO1xuICB9XG59XG4uZGFuZ2VyIHtcbiAgY29sb3I6IHJlZDtcbn1cblxuLmNlbnRlcmVkLWNvbnRlbnQge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQgdG9wLCAjYzZkZDQ0LCAjZTBiYjEzKTtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-login',
                templateUrl: './login.component.html',
                styleUrls: ['./login.component.scss']
            }]
    }], function () { return [{ type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }]; }, null); })();


/***/ }),

/***/ "Fvwb":
/*!********************************************!*\
  !*** ./src/app/services/wallet.service.ts ***!
  \********************************************/
/*! exports provided: WalletService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WalletService", function() { return WalletService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _web_request_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./web-request.service */ "hZfp");



class WalletService {
    constructor(webReqService) {
        this.webReqService = webReqService;
    }
    createWallet(wallet) {
        return this.webReqService.post('wallet', wallet);
    }
    updateWallet(walletId, obj) {
        return this.webReqService.patch('wallet/' + walletId, obj);
    }
    getWallet() {
        return this.webReqService.get('wallet');
    }
    getWalletDetails(walletId) {
        return this.webReqService.get('wallet/' + walletId);
    }
    deleteWallet(walletId) {
        return this.webReqService.delete(walletId);
    }
}
WalletService.ɵfac = function WalletService_Factory(t) { return new (t || WalletService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_web_request_service__WEBPACK_IMPORTED_MODULE_1__["WebRequestService"])); };
WalletService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: WalletService, factory: WalletService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WalletService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _web_request_service__WEBPACK_IMPORTED_MODULE_1__["WebRequestService"] }]; }, null); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



class AppComponent {
    constructor() {
        this.title = 'cyclebetafront';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], null, null); })();


/***/ }),

/***/ "TcIk":
/*!*******************************************************************!*\
  !*** ./src/app/pages/wallet/fund-wallet/fund-wallet.component.ts ***!
  \*******************************************************************/
/*! exports provided: FundWalletComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FundWalletComponent", function() { return FundWalletComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/profile.service */ "Aso2");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/auth.service */ "lGQG");
/* harmony import */ var src_app_services_wallet_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/wallet.service */ "Fvwb");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");









function FundWalletComponent_div_10_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Only Numbers");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Back");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Approve ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function FundWalletComponent_div_10_div_2_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "We are only accepting transfers at this time");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Bank");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, ": Zenith Bank Plc");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Account Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, ": Zenith Bank Plc");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Account Number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, ": 1015209474");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function FundWalletComponent_div_10_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, FundWalletComponent_div_10_div_2_div_1_Template, 15, 0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Back");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Approve ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.touched);
} }
function FundWalletComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, FundWalletComponent_div_10_div_1_Template, 8, 0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, FundWalletComponent_div_10_div_2_Template, 7, 1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.onlyNumbers);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.onlyNumbers);
} }
function FundWalletComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Back");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Approve ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class FundWalletComponent {
    constructor(profileService, authService, walletService, fb, route, router) {
        this.profileService = profileService;
        this.authService = authService;
        this.walletService = walletService;
        this.fb = fb;
        this.route = route;
        this.router = router;
    }
    ngOnInit() {
        this.fundWallet = this.fb.group({
            walletAmount: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
        this.walletService.getWallet().subscribe((wallet) => {
            this.wallet = wallet;
        });
    }
    fundWallets() {
        this.walletService.getWallet().subscribe((wallet) => {
            let walletAmount = Number(wallet[0].walletAmount) + Number(this.fundWallet.value.walletAmount);
            console.log(walletAmount);
            if (wallet[0].walletAmount === null) {
                walletAmount = Number(this.fundWallet.value.walletAmount);
            }
            console.log(walletAmount);
            this.walletService.updateWallet(this.wallet[0]._id, { walletAmount: walletAmount }).subscribe(() => {
                this.walletService.updateWallet(this.wallet[0]._id + '/transactions', {
                    transactions: {
                        transactionId: Math.random() * 1000 + 'crd',
                        date: new Date(),
                        depositAmount: Number(this.fundWallet.value.walletAmount),
                        action: 'CREDIT',
                        holder: 'WALLET',
                        newBalance: walletAmount
                    }
                }).subscribe(() => {
                    this.profileService.getUserDetails(this.authService.getUserId()).subscribe((profile) => {
                        this.profileService.updateUserDetails(this.authService.getUserId(), { pendingTransfer: true }).subscribe(() => {
                            this.profile = profile;
                            this.wallet[0].walletAmount = walletAmount;
                            console.log("funds have been added");
                            console.log(this.profile);
                            this.router.navigate(['wallet']);
                        });
                    });
                });
            });
        });
    }
    get touched() {
        if (this.fundWallet.value.walletAmount) {
            return true;
        }
    }
    get onlyNumbers() {
        if (this.fundWallet.value.walletAmount) {
            let zero = this.fundWallet.value.walletAmount * 0;
            if (zero !== 0) {
                return true;
            }
        }
    }
    get disableApproval() {
        if (Number(this.fundWallet.value.walletAmount == 0)) {
            return true;
        }
        else {
            return false;
        }
    }
}
FundWalletComponent.ɵfac = function FundWalletComponent_Factory(t) { return new (t || FundWalletComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_2__["ProfileService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_wallet_service__WEBPACK_IMPORTED_MODULE_4__["WalletService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"])); };
FundWalletComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FundWalletComponent, selectors: [["app-fund-wallet"]], decls: 12, vars: 3, consts: [[1, "centered-content"], [3, "formGroup", "ngSubmit"], [1, "modal-box"], [1, "title", 2, "text-align", "center"], [2, "padding", "5px"], [1, "field"], [1, "control"], ["placeholder", "How much are we contributing today?", "formControlName", "walletAmount", 1, "input", "is-small", "has-background-light", "is-medium"], ["class", "field", "style", "width: 100%; padding: 20px;", 4, "ngIf"], [1, "field", 2, "width", "100%", "padding", "20px"], ["style", "color: red;", 4, "ngIf"], [4, "ngIf"], [2, "color", "red"], ["routerLink", "/wallet", 1, "button", "is-danger", "is-pulled-left"], ["type", "submit", 1, "button", "is-success", "is-pulled-right"], ["class", "accountInfo", 4, "ngIf"], [1, "accountInfo"], [1, "button", "is-danger", "is-pulled-right", 2, "cursor", "not-allowed"]], template: function FundWalletComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function FundWalletComponent_Template_form_ngSubmit_1_listener() { return ctx.fundWallets(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Fund Your Wallet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "All deposits would remain pending until confirmed");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, FundWalletComponent_div_10_Template, 3, 2, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, FundWalletComponent_div_11_Template, 6, 0, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.fundWallet);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.disableApproval);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.disableApproval);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLink"]], styles: [".accountInfo[_ngcontent-%COMP%] {\n  border: 1px solid white;\n  justify-content: right;\n  padding: 10px;\n  margin-top: 2px;\n  background-color: #e6db7a;\n}\n.accountInfo[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  letter-spacing: 2px;\n  font-size: smaller;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcZnVuZC13YWxsZXQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx1QkFBQTtFQUNBLHNCQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtBQUNKO0FBQ0k7RUFDSSxtQkFBQTtFQUNBLGtCQUFBO0FBQ1IiLCJmaWxlIjoiZnVuZC13YWxsZXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYWNjb3VudEluZm8ge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHJpZ2h0O1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIG1hcmdpbi10b3A6IDJweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlNmRiN2E7XHJcblxyXG4gICAgcCB7XHJcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDJweDtcclxuICAgICAgICBmb250LXNpemU6IHNtYWxsZXI7XHJcbiAgICB9XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FundWalletComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-fund-wallet',
                templateUrl: './fund-wallet.component.html',
                styleUrls: ['./fund-wallet.component.scss']
            }]
    }], function () { return [{ type: src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_2__["ProfileService"] }, { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }, { type: src_app_services_wallet_service__WEBPACK_IMPORTED_MODULE_4__["WalletService"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }]; }, null); })();


/***/ }),

/***/ "ThVL":
/*!****************************************************!*\
  !*** ./src/app/pages/welcome/progress/uiHelper.ts ***!
  \****************************************************/
/*! exports provided: UiSate, Status, UiHelper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UiSate", function() { return UiSate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Status", function() { return Status; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UiHelper", function() { return UiHelper; });
var UiSate;
(function (UiSate) {
    UiSate["ACTIVE"] = "active";
    UiSate["COMPLETE"] = "complete";
})(UiSate || (UiSate = {}));
var Status;
(function (Status) {
    Status["PENDING"] = "pending";
    Status["IN_PROGRESS"] = "in progress";
    Status["COMPLETED"] = "completed";
})(Status || (Status = {}));
class UiHelper {
    constructor(progressHelper) {
        this.progressHelper = progressHelper;
        this.itemProgressList = [];
        this.activeIndex = 0;
    }
    completeLastStep() {
        this.itemProgressList[this.activeIndex].status = Status.COMPLETED;
    }
    undoLastComplete() {
        this.itemProgressList[this.activeIndex].status = Status.IN_PROGRESS;
    }
    switchStatusNext(index) {
        this.itemProgressList[this.activeIndex - 1].status = Status.COMPLETED;
        this.itemProgressList[index].status = Status.IN_PROGRESS;
    }
    switchStatusPrev(index) {
        this.itemProgressList[this.activeIndex + 1].status = Status.PENDING;
        this.itemProgressList[index].status = Status.IN_PROGRESS;
    }
}


/***/ }),

/***/ "U5Cf":
/*!********************************************************!*\
  !*** ./src/app/pages/dashboard/dashboard.component.ts ***!
  \********************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_wallet_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/wallet.service */ "Fvwb");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/auth.service */ "lGQG");
/* harmony import */ var src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/profile.service */ "Aso2");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");







const _c0 = function () { return ["/welcome"]; };
function DashboardComponent_div_2_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "INCOMPLETE PROFILE: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " You have not provided some information. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
} }
const _c1 = function () { return ["/cycle"]; };
function DashboardComponent_div_2_div_7_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " CYCLES ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c1));
} }
function DashboardComponent_div_2_div_7_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " CYCLES ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DashboardComponent_div_2_div_7_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "MESSAGES");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DashboardComponent_div_2_div_7_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "MESSAGES");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c2 = function () { return ["/wallet"]; };
function DashboardComponent_div_2_div_7_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DashboardComponent_div_2_div_7_Template_a_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const profiles_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.createWallet(profiles_r1.username); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " WALLET ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, DashboardComponent_div_2_div_7_div_4_Template, 4, 2, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, DashboardComponent_div_2_div_7_div_5_Template, 4, 0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, DashboardComponent_div_2_div_7_div_6_Template, 5, 0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, DashboardComponent_div_2_div_7_div_7_Template, 4, 0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "INVEST");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "REFER");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "AJO");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](8, _c2));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r3.locked);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.locked);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r3.locked);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.locked);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r3.locked);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r3.locked);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r3.locked);
} }
function DashboardComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, DashboardComponent_div_2_div_6_Template, 5, 2, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, DashboardComponent_div_2_div_7_Template, 14, 9, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const profiles_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("WELCOME BACK ", profiles_r1.firstName, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", profiles_r1.username, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.completeProfile);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.completeProfile);
} }
class DashboardComponent {
    constructor(walletService, authService, profileService, route, authServive) {
        this.walletService = walletService;
        this.authService = authService;
        this.profileService = profileService;
        this.route = route;
        this.authServive = authServive;
        this.newAccountBalance = 1;
    }
    /**
     * On init we would subscribe to the route params to activate
     * the routes
     */
    ngOnInit() {
        this.route.params.subscribe((params) => {
            this.profileService.getUserDetails(this.authServive.getUserId()).subscribe((user) => {
                console.log(user);
                this.profile = user;
                //check if user has wallet or not
                if (user[0].wallet === undefined) {
                    this.locked = true;
                    console.log(this.locked);
                }
                //check for NIN, BVN, Phonenumber
                if (user[0].nin && user[0].bvn && user[0].phoneNumber) {
                    this.completeProfile = true;
                }
            });
        });
        this.walletService.getWallet().subscribe((wallet) => {
            this.wallet = wallet;
        });
    }
    //create wallet method 
    createWallet(str) {
        //check if user already has a wallet
        if (Array.isArray(this.wallet) && this.wallet.length) {
            //if wallet exists get the wallet. 
            if (this.wallet[0].walletId === str) {
                this.walletService.getWallet().subscribe((wallet) => {
                    this.profileService.updateUserDetails(this.authService.getUserId(), { wallet: wallet }).subscribe(() => {
                        console.log(wallet);
                    });
                });
                //console.log('walletExists')
            }
            else {
                this.walletService.createWallet({ walletId: str, walletAmount: this.newAccountBalance, cycle: null, transactions: null }).subscribe((wallet) => {
                    this.walletService.getWallet().subscribe((wallet) => {
                        this.profileService.updateUserDetails(this.authService.getUserId(), { wallet: wallet }).subscribe(() => {
                            console.log(wallet);
                        });
                    });
                });
            }
        }
        else {
            this.walletService.createWallet({ walletId: str, walletAmount: this.newAccountBalance, cycle: null, transactions: null }).subscribe((wallet) => {
                this.walletService.getWallet().subscribe((wallet) => {
                    this.profileService.updateUserDetails(this.authService.getUserId(), { wallet: wallet }).subscribe(() => {
                        console.log(wallet);
                    });
                });
            });
        }
    }
}
DashboardComponent.ɵfac = function DashboardComponent_Factory(t) { return new (t || DashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_wallet_service__WEBPACK_IMPORTED_MODULE_1__["WalletService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_3__["ProfileService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"])); };
DashboardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DashboardComponent, selectors: [["app-dashboard"]], decls: 3, vars: 1, consts: [[1, "centered-content"], [1, "container"], ["class", "profile has-background-light", 4, "ngFor", "ngForOf"], [1, "profile", "has-background-light"], [1, "title", "has-text-primary"], [1, "headers"], [1, "title", "has-text-secondary"], ["class", "has-text-secondary", 4, "ngIf"], ["class", "profile-content", 4, "ngIf"], [1, "has-text-secondary"], [3, "routerLink"], [1, "profile-content"], [1, "profile-tags", "title", "has-text-primary"], [3, "routerLink", "click"], ["class", "profile-tags title has-text-primary", 4, "ngIf"], ["class", "profile-tags title has-text-primary", "style", "cursor: not-allowed;", 4, "ngIf"], [1, "profile-tags", "title", "has-text-primary", 3, "disabled"], [1, "flex-column"], [1, "profile-tags", "title", "has-text-primary", 2, "cursor", "not-allowed"], [2, "color", "red", "cursor", "not-allowed"], [2, "color", "red"]], template: function DashboardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, DashboardComponent_div_2_Template, 8, 4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.profile);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"]], styles: ["@import url(\"https://fonts.googleapis.com/css?family=Lato:400,700|Nunito:400,700\");\nhtml[_ngcontent-%COMP%] {\n  background: linear-gradient(to right top, #c6dd44, #e0bb13);\n}\nhtml[_ngcontent-%COMP%], body[_ngcontent-%COMP%] {\n  height: 100%;\n}\nhtml[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], body[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 150%;\n  margin-bottom: 5%;\n}\n.centered-content[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  height: 100%;\n}\n.title[_ngcontent-%COMP%] {\n  font-family: \"Lato\";\n  font-size: 20px;\n  text-transform: uppercase;\n  letter-spacing: 2.5px;\n}\n.modal-box[_ngcontent-%COMP%] {\n  min-height: 300px;\n  width: 100%;\n  max-width: 700px;\n  background: white;\n  border-radius: 5px;\n  padding: 35px;\n}\n.navigation[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 0%;\n  width: 20%;\n  height: 10%;\n  display: flex;\n  flex-direction: row;\n}\n.todashboard[_ngcontent-%COMP%]:hover   a[_ngcontent-%COMP%] {\n  color: red;\n  font-size: larger;\n}\n.logout[_ngcontent-%COMP%]:hover   a[_ngcontent-%COMP%] {\n  color: red;\n  font-size: larger;\n}\n@media only screen and (max-width: 720px) {\n  html[_ngcontent-%COMP%] {\n    background: whitesmoke;\n  }\n\n  .container[_ngcontent-%COMP%] {\n    height: 100%;\n  }\n\n  .profile[_ngcontent-%COMP%] {\n    height: 250%;\n    padding: 10% 5%;\n  }\n\n  .navigation[_ngcontent-%COMP%] {\n    right: 15%;\n    font-size: 2vh;\n  }\n\n  a[_ngcontent-%COMP%] {\n    color: red;\n  }\n\n  .profile-tags[_ngcontent-%COMP%] {\n    margin: 3% 0%;\n    font-size: 250%;\n    box-shadow: 0px 0px 10px 3.5px rgba(0, 0, 0, 0.2);\n  }\n\n  p[_ngcontent-%COMP%] {\n    font-size: 100%;\n  }\n}\n@media only screen and (max-width: 720px) {\n  html[_ngcontent-%COMP%] {\n    background: white;\n  }\n\n  a[_ngcontent-%COMP%] {\n    color: #332b05;\n  }\n\n  .container[_ngcontent-%COMP%] {\n    height: 100%;\n    justify-content: center;\n  }\n\n  .title[_ngcontent-%COMP%] {\n    font-family: \"Lato\";\n    font-size: 150%;\n    text-transform: uppercase;\n    letter-spacing: 2.5px;\n    text-align: left;\n    padding-left: 1vh;\n  }\n\n  .profile-content[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    background: white;\n    padding: 20px;\n    height: 100%;\n    border-radius: 5px;\n    margin-top: 5%;\n    box-shadow: 0 0 20px 3px rgba(0, 0, 0, 0.2);\n  }\n  .profile-content[_ngcontent-%COMP%]   .profile-tags[_ngcontent-%COMP%] {\n    display: flex;\n    border-radius: 5px;\n    justify-content: center;\n    align-items: center;\n    background: #c6dd44;\n    flex-grow: 1;\n    font-size: 250%;\n  }\n}\n@media only screen and (min-width: 720px) {\n  .container[_ngcontent-%COMP%] {\n    display: flex;\n    width: 100px;\n    height: 100%;\n    max-width: 1000px;\n    max-height: 680px;\n    justify-content: center;\n  }\n\n  .profile[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    border-top-right-radius: 15px;\n    border-bottom-right-radius: 15px;\n    border-bottom-left-radius: 15px;\n    border-top-left-radius: 15px;\n    padding: 30px;\n    width: 70%;\n    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);\n    justify-content: center;\n    align-items: center;\n  }\n\n  .title[_ngcontent-%COMP%] {\n    font-family: \"Lato\";\n    font-size: 3vh;\n    text-transform: uppercase;\n    letter-spacing: 2.5px;\n    padding: 10px;\n    text-align: center;\n  }\n\n  .profile-content[_ngcontent-%COMP%] {\n    display: flex;\n    background: white;\n    padding: 20px 20px;\n    height: 100%;\n    width: 100%;\n    flex-flow: wrap;\n  }\n  .profile-content[_ngcontent-%COMP%]   .profile-tags[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: row;\n    border-radius: 5px;\n    justify-content: center;\n    align-items: center;\n    margin: 5px;\n    background: #c6dd44;\n    width: 30%;\n    height: 45%;\n    flex-grow: 1;\n    font-size: 2vh;\n  }\n  .profile-content[_ngcontent-%COMP%]   .profile-tags[_ngcontent-%COMP%]:hover {\n    box-shadow: 1.5px 1.5px #e0bb13;\n    transition: ease-in-out 0.2s;\n    cursor: pointer;\n  }\n\n  .flex-column[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    padding-top: -30px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxtYWluLXN0eWxlcy5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXGRhc2hib2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHUSxrRkFBQTtBQXFCUjtFQUNJLDJEQUFBO0FDdEJKO0FEeUJBOztFQUVJLFlBQUE7QUN0Qko7QUR3Qkk7O0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0FDckJSO0FEeUJBO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQ3RCSjtBRDBCQTtFQUNJLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0VBQ0EscUJBQUE7QUN2Qko7QUQwQkE7RUFDSSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0FDdkJKO0FEMEJBO0VBQ0ksa0JBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUN2Qko7QUQ0Qkk7RUFDSSxVQUFBO0VBQ0EsaUJBQUE7QUN6QlI7QURnQ0k7RUFDSSxVQUFBO0VBQ0EsaUJBQUE7QUM3QlI7QURrQ0E7RUFDSTtJQUNJLHNCQUFBO0VDL0JOOztFRGtDRTtJQUNJLFlBQUE7RUMvQk47O0VEa0NFO0lBQ0ksWUFBQTtJQUNBLGVBQUE7RUMvQk47O0VEa0NFO0lBQ0ksVUFBQTtJQUNBLGNBQUE7RUMvQk47O0VEa0NFO0lBQ0ksVUFBQTtFQy9CTjs7RURrQ0U7SUFFSSxhQUFBO0lBQ0EsZUFBQTtJQUNBLGlEQUFBO0VDaENOOztFRG1DRTtJQUNJLGVBQUE7RUNoQ047QUFDRjtBQXhGQTtFQUNJO0lBQ0ksaUJBQUE7RUEwRk47O0VBdkZFO0lBQ0ksY0RFTTtFQ3dGWjs7RUF2RkU7SUFDSSxZQUFBO0lBQ0EsdUJBQUE7RUEwRk47O0VBdkZFO0lBQ0ksbUJBQUE7SUFDQSxlQUFBO0lBQ0EseUJBQUE7SUFDQSxxQkFBQTtJQUNBLGdCQUFBO0lBQ0EsaUJBQUE7RUEwRk47O0VBdkZFO0lBQ0ksYUFBQTtJQUNBLHNCQUFBO0lBQ0EsaUJBQUE7SUFDQSxhQUFBO0lBQ0EsWUFBQTtJQUNBLGtCQUFBO0lBQ0EsY0FBQTtJQUNBLDJDQUFBO0VBMEZOO0VBeEZNO0lBQ0ksYUFBQTtJQUNBLGtCQUFBO0lBQ0EsdUJBQUE7SUFDQSxtQkFBQTtJQUNBLG1CRG5DRTtJQ29DRixZQUFBO0lBQ0EsZUFBQTtFQTBGVjtBQUNGO0FBckZBO0VBQ0E7SUFDSSxhQUFBO0lBQ0EsWUFBQTtJQUNBLFlBQUE7SUFDQSxpQkFBQTtJQUNBLGlCQUFBO0lBQ0EsdUJBQUE7RUF1RkY7O0VBcEZGO0lBQ0ksYUFBQTtJQUNBLHNCQUFBO0lBQ0EsNkJBQUE7SUFDQSxnQ0FBQTtJQUNBLCtCQUFBO0lBQ0EsNEJBQUE7SUFDQSxhQUFBO0lBQ0EsVUFBQTtJQUNBLDBDQUFBO0lBQ0EsdUJBQUE7SUFDQSxtQkFBQTtFQXVGRjs7RUFwRkY7SUFDSSxtQkFBQTtJQUNBLGNBQUE7SUFDQSx5QkFBQTtJQUNBLHFCQUFBO0lBQ0EsYUFBQTtJQUNBLGtCQUFBO0VBdUZGOztFQWxGRjtJQUNJLGFBQUE7SUFDQSxpQkFBQTtJQUNBLGtCQUFBO0lBQ0EsWUFBQTtJQUNBLFdBQUE7SUFDQSxlQUFBO0VBcUZGO0VBbEZFO0lBQ0ksYUFBQTtJQUNBLG1CQUFBO0lBQ0Esa0JBQUE7SUFDQSx1QkFBQTtJQUNBLG1CQUFBO0lBQ0EsV0FBQTtJQUNBLG1CRDlGTTtJQytGTixVQUFBO0lBQ0EsV0FBQTtJQUNBLFlBQUE7SUFDQSxjQUFBO0VBb0ZOO0VBbEZNO0lBQ0ksK0JBQUE7SUFDQSw0QkFBQTtJQUNBLGVBQUE7RUFvRlY7O0VBL0VGO0lBQ0ksYUFBQTtJQUNBLHNCQUFBO0lBQ0Esa0JBQUE7RUFrRkY7QUFDRiIsImZpbGUiOiJkYXNoYm9hcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvL1RoaXMgd2hlcmUgd2UgcHV0IGdsb2JhbCBzdHlsZXMgYW5kIGNoYW5nZSB2YXJpYWJsZSB2YWx1ZXNcclxuXHJcbi8vaW1wb3J0IGdvb2dsZSBmb250cy4gTGF0byBhbmQgTnVuaXRvXHJcbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9TGF0bzo0MDAsNzAwfE51bml0bzo0MDAsNzAwJyk7XHJcblxyXG4kZGVlcC15ZWxsb3c6ICNjNmRkNDQ7XHJcbiRvcmFuZ2U6ICNlMGJiMTM7XHJcblxyXG4kbGlnaHQtb3JhbmdlOiAjZTdkYjZlO1xyXG4kbGlnaHQ6ICNmMWU3YjY7XHJcbiRkYXJrLW9yYW5nZTogIzMzMmIwNTtcclxuXHJcbi8vIFVwZGF0ZSBCdWxtYSBnbG9iYWwgdmFyaWFibGVzXHJcbiRmYW1pbHktc2Fucy1zZXJpZjogXCJOdW5pdG9cIiwgc2Fucy1zZXJpZjtcclxuJHByaW1hcnk6ICRvcmFuZ2U7XHJcbiRsaW5rOiAkbGlnaHQtb3JhbmdlO1xyXG5cclxuLy9VcGRhdGUgc29tZSBCdWxtYSBjb21wb25lbnQgdmFyaWFibGVzXHJcbiRjb250b2wtYm9yZGVyLXdpZHRoOiAycHg7XHJcbiRpbnB1dC1ib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xyXG4kaW5wdXQtc2hhZG93OiBub25lO1xyXG5cclxuLy9zZXQgY3VzdG9tIGdsb2JhbCBzdHlsZXMgKHdpbGwgYmUgYXBsaWVkIHRvIHdob2xlIGFwcClcclxuXHJcbmh0bWwge1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0IHRvcCwgJGRlZXAteWVsbG93LCAkb3JhbmdlKTtcclxufVxyXG5cclxuaHRtbCxcclxuYm9keSB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcblxyXG4gICAgaDMge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTUwJTtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiA1JTtcclxuICAgIH1cclxufVxyXG5cclxuLmNlbnRlcmVkLWNvbnRlbnQge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG5cclxuLnRpdGxlIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnTGF0byc7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDIuNXB4O1xyXG59XHJcblxyXG4ubW9kYWwtYm94IHtcclxuICAgIG1pbi1oZWlnaHQ6IDMwMHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXgtd2lkdGg6IDcwMHB4O1xyXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBwYWRkaW5nOiAzNXB4O1xyXG59XHJcblxyXG4ubmF2aWdhdGlvbiB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICByaWdodDogMCU7XHJcbiAgICB3aWR0aDogMjAlO1xyXG4gICAgaGVpZ2h0OiAxMCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxufVxyXG5cclxuLnRvZGFzaGJvYXJkOmhvdmVyIHtcclxuXHJcbiAgICBhIHtcclxuICAgICAgICBjb2xvcjogcmVkO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogbGFyZ2VyO1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuLmxvZ291dDpob3ZlciB7XHJcblxyXG4gICAgYSB7XHJcbiAgICAgICAgY29sb3I6IHJlZDtcclxuICAgICAgICBmb250LXNpemU6IGxhcmdlcjtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzIwcHgpIHtcclxuICAgIGh0bWwge1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHdoaXRlc21va2U7XHJcbiAgICB9XHJcblxyXG4gICAgLmNvbnRhaW5lciB7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlXHJcbiAgICB9XHJcblxyXG4gICAgLnByb2ZpbGUge1xyXG4gICAgICAgIGhlaWdodDogMjUwJTtcclxuICAgICAgICBwYWRkaW5nOiAxMCUgNSU7XHJcbiAgICB9XHJcblxyXG4gICAgLm5hdmlnYXRpb24ge1xyXG4gICAgICAgIHJpZ2h0OiAxNSU7XHJcbiAgICAgICAgZm9udC1zaXplOiAydmg7XHJcbiAgICB9XHJcblxyXG4gICAgYSB7XHJcbiAgICAgICAgY29sb3I6IHJlZDtcclxuICAgIH1cclxuXHJcbiAgICAucHJvZmlsZS10YWdzIHtcclxuXHJcbiAgICAgICAgbWFyZ2luOiAzJSAwJTtcclxuICAgICAgICBmb250LXNpemU6IDI1MCU7XHJcbiAgICAgICAgYm94LXNoYWRvdzogMHB4IDBweCAxMHB4IDMuNXB4IHJnYigwIDAgMCAvIDIwJSk7XHJcbiAgICB9XHJcblxyXG4gICAgcCB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMDAlO1xyXG4gICAgfVxyXG59IiwiQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9TGF0bzo0MDAsNzAwfE51bml0bzo0MDAsNzAwXCIpO1xuaHRtbCB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCB0b3AsICNjNmRkNDQsICNlMGJiMTMpO1xufVxuXG5odG1sLFxuYm9keSB7XG4gIGhlaWdodDogMTAwJTtcbn1cbmh0bWwgaDMsXG5ib2R5IGgzIHtcbiAgZm9udC1zaXplOiAxNTAlO1xuICBtYXJnaW4tYm90dG9tOiA1JTtcbn1cblxuLmNlbnRlcmVkLWNvbnRlbnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLnRpdGxlIHtcbiAgZm9udC1mYW1pbHk6IFwiTGF0b1wiO1xuICBmb250LXNpemU6IDIwcHg7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGxldHRlci1zcGFjaW5nOiAyLjVweDtcbn1cblxuLm1vZGFsLWJveCB7XG4gIG1pbi1oZWlnaHQ6IDMwMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgbWF4LXdpZHRoOiA3MDBweDtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgcGFkZGluZzogMzVweDtcbn1cblxuLm5hdmlnYXRpb24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAwJTtcbiAgd2lkdGg6IDIwJTtcbiAgaGVpZ2h0OiAxMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG59XG5cbi50b2Rhc2hib2FyZDpob3ZlciBhIHtcbiAgY29sb3I6IHJlZDtcbiAgZm9udC1zaXplOiBsYXJnZXI7XG59XG5cbi5sb2dvdXQ6aG92ZXIgYSB7XG4gIGNvbG9yOiByZWQ7XG4gIGZvbnQtc2l6ZTogbGFyZ2VyO1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDcyMHB4KSB7XG4gIGh0bWwge1xuICAgIGJhY2tncm91bmQ6IHdoaXRlc21va2U7XG4gIH1cblxuICAuY29udGFpbmVyIHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gIH1cblxuICAucHJvZmlsZSB7XG4gICAgaGVpZ2h0OiAyNTAlO1xuICAgIHBhZGRpbmc6IDEwJSA1JTtcbiAgfVxuXG4gIC5uYXZpZ2F0aW9uIHtcbiAgICByaWdodDogMTUlO1xuICAgIGZvbnQtc2l6ZTogMnZoO1xuICB9XG5cbiAgYSB7XG4gICAgY29sb3I6IHJlZDtcbiAgfVxuXG4gIC5wcm9maWxlLXRhZ3Mge1xuICAgIG1hcmdpbjogMyUgMCU7XG4gICAgZm9udC1zaXplOiAyNTAlO1xuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMTBweCAzLjVweCByZ2JhKDAsIDAsIDAsIDAuMik7XG4gIH1cblxuICBwIHtcbiAgICBmb250LXNpemU6IDEwMCU7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzIwcHgpIHtcbiAgaHRtbCB7XG4gICAgYmFja2dyb3VuZDogd2hpdGU7XG4gIH1cblxuICBhIHtcbiAgICBjb2xvcjogIzMzMmIwNTtcbiAgfVxuXG4gIC5jb250YWluZXIge1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgfVxuXG4gIC50aXRsZSB7XG4gICAgZm9udC1mYW1pbHk6IFwiTGF0b1wiO1xuICAgIGZvbnQtc2l6ZTogMTUwJTtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIGxldHRlci1zcGFjaW5nOiAyLjVweDtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIHBhZGRpbmctbGVmdDogMXZoO1xuICB9XG5cbiAgLnByb2ZpbGUtY29udGVudCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBtYXJnaW4tdG9wOiA1JTtcbiAgICBib3gtc2hhZG93OiAwIDAgMjBweCAzcHggcmdiYSgwLCAwLCAwLCAwLjIpO1xuICB9XG4gIC5wcm9maWxlLWNvbnRlbnQgLnByb2ZpbGUtdGFncyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kOiAjYzZkZDQ0O1xuICAgIGZsZXgtZ3JvdzogMTtcbiAgICBmb250LXNpemU6IDI1MCU7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzIwcHgpIHtcbiAgLmNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICB3aWR0aDogMTAwcHg7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIG1heC13aWR0aDogMTAwMHB4O1xuICAgIG1heC1oZWlnaHQ6IDY4MHB4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB9XG5cbiAgLnByb2ZpbGUge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTVweDtcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMTVweDtcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxNXB4O1xuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDE1cHg7XG4gICAgcGFkZGluZzogMzBweDtcbiAgICB3aWR0aDogNzAlO1xuICAgIGJveC1zaGFkb3c6IDAgMTBweCAzMHB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB9XG5cbiAgLnRpdGxlIHtcbiAgICBmb250LWZhbWlseTogXCJMYXRvXCI7XG4gICAgZm9udC1zaXplOiAzdmg7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBsZXR0ZXItc3BhY2luZzogMi41cHg7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cblxuICAucHJvZmlsZS1jb250ZW50IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgIHBhZGRpbmc6IDIwcHggMjBweDtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZmxleC1mbG93OiB3cmFwO1xuICB9XG4gIC5wcm9maWxlLWNvbnRlbnQgLnByb2ZpbGUtdGFncyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIG1hcmdpbjogNXB4O1xuICAgIGJhY2tncm91bmQ6ICNjNmRkNDQ7XG4gICAgd2lkdGg6IDMwJTtcbiAgICBoZWlnaHQ6IDQ1JTtcbiAgICBmbGV4LWdyb3c6IDE7XG4gICAgZm9udC1zaXplOiAydmg7XG4gIH1cbiAgLnByb2ZpbGUtY29udGVudCAucHJvZmlsZS10YWdzOmhvdmVyIHtcbiAgICBib3gtc2hhZG93OiAxLjVweCAxLjVweCAjZTBiYjEzO1xuICAgIHRyYW5zaXRpb246IGVhc2UtaW4tb3V0IDAuMnM7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG5cbiAgLmZsZXgtY29sdW1uIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgcGFkZGluZy10b3A6IC0zMHB4O1xuICB9XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DashboardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-dashboard',
                templateUrl: './dashboard.component.html',
                styleUrls: ['./dashboard.component.scss']
            }]
    }], function () { return [{ type: src_app_services_wallet_service__WEBPACK_IMPORTED_MODULE_1__["WalletService"] }, { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }, { type: src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_3__["ProfileService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }, { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }]; }, null); })();


/***/ }),

/***/ "XUC1":
/*!*******************************************!*\
  !*** ./src/app/services/cycle.service.ts ***!
  \*******************************************/
/*! exports provided: CycleService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CycleService", function() { return CycleService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _web_request_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./web-request.service */ "hZfp");



class CycleService {
    constructor(webReqService) {
        this.webReqService = webReqService;
    }
    createCycle(cycle) {
        //create a new cycle in the db
        return this.webReqService.post('cycles', cycle);
    }
    joinCycle(cycleId, wallet) {
        return this.webReqService.patch(`cycles/${cycleId}`, wallet);
    }
    getCycles() {
        //get all cycles
        return this.webReqService.get('cycles');
    }
    getCycleDetails(cycleId) {
        //get all details (wallets) within each cycle
        return this.webReqService.get(`cycles/${cycleId}`);
    }
    deleteCycle(cycleId) {
        return this.webReqService.delete(cycleId);
    }
}
CycleService.ɵfac = function CycleService_Factory(t) { return new (t || CycleService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_web_request_service__WEBPACK_IMPORTED_MODULE_1__["WebRequestService"])); };
CycleService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CycleService, factory: CycleService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CycleService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _web_request_service__WEBPACK_IMPORTED_MODULE_1__["WebRequestService"] }]; }, null); })();


/***/ }),

/***/ "Y+J8":
/*!*********************************************************************************!*\
  !*** ./src/app/pages/welcome/progress/progress-step/progress-step.component.ts ***!
  \*********************************************************************************/
/*! exports provided: ProgressStepComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgressStepComponent", function() { return ProgressStepComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


const _c0 = ["*"];
class ProgressStepComponent {
    constructor() {
        this.isActive = false;
    }
    set activeState(step) {
        this.isActive = step === this;
    }
    ngOnInit() {
    }
}
ProgressStepComponent.ɵfac = function ProgressStepComponent_Factory(t) { return new (t || ProgressStepComponent)(); };
ProgressStepComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProgressStepComponent, selectors: [["app-progress-step"]], hostVars: 2, hostBindings: function ProgressStepComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("activeStep", ctx.isActive);
    } }, inputs: { activeState: "activeState" }, ngContentSelectors: _c0, decls: 1, vars: 0, template: function ProgressStepComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
    } }, styles: [".activeStep[_nghost-%COMP%] {\n  display: inline-block;\n  padding: 10px;\n  visibility: visible;\n  opacity: 1;\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  width: 100%;\n  height: 100%;\n  transform: translateY(0);\n  transition: all 0.6s cubic-bezier(0.45, 0, 0.55, 1);\n}\n\n[_nghost-%COMP%]:not(.activeStep) {\n  visibility: hidden;\n  padding: 10px;\n  transform: translateY(-8px);\n  opacity: 0;\n}\n\n@media only screen and (max-width: 720px) {\n  .activeStep[_nghost-%COMP%] {\n    margin-top: 10%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXHByb2dyZXNzLXN0ZXAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxxQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esd0JBQUE7RUFDQSxtREFBQTtBQUNKOztBQUVBO0VBQ0ksa0JBQUE7RUFDQSxhQUFBO0VBQ0EsMkJBQUE7RUFDQSxVQUFBO0FBQ0o7O0FBRUE7RUFDSTtJQUNJLGVBQUE7RUFDTjtBQUNGIiwiZmlsZSI6InByb2dyZXNzLXN0ZXAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdC5hY3RpdmVTdGVwIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNnMgY3ViaWMtYmV6aWVyKDAuNDUsIDAsIDAuNTUsIDEpO1xyXG59XHJcblxyXG46aG9zdDpub3QoLmFjdGl2ZVN0ZXApIHtcclxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLThweCk7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDcyMHB4KSB7XHJcbiAgICA6aG9zdC5hY3RpdmVTdGVwIHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAxMCU7XHJcbiAgICB9XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProgressStepComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-progress-step',
                templateUrl: './progress-step.component.html',
                styleUrls: ['./progress-step.component.scss']
            }]
    }], function () { return []; }, { isActive: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['class.activeStep']
        }], activeState: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _app_services_web_request_interceptor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../app/services/web-request.interceptor */ "nmHL");
/* harmony import */ var _pages_login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/login/login.component */ "D8EZ");
/* harmony import */ var _pages_signup_signup_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/signup/signup.component */ "o97b");
/* harmony import */ var _pages_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/dashboard/dashboard.component */ "U5Cf");
/* harmony import */ var _pages_wallet_wallet_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/wallet/wallet.component */ "+nza");
/* harmony import */ var _pages_welcome_welcome_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pages/welcome/welcome.component */ "+j1i");
/* harmony import */ var _pages_cycle_cycle_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pages/cycle/cycle.component */ "y+fu");
/* harmony import */ var _pages_cycle_new_cycle_new_cycle_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pages/cycle/new-cycle/new-cycle.component */ "A4Ci");
/* harmony import */ var _pages_wallet_fund_wallet_fund_wallet_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./pages/wallet/fund-wallet/fund-wallet.component */ "TcIk");
/* harmony import */ var _pages_wallet_my_cycles_my_cycles_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./pages/wallet/my-cycles/my-cycles.component */ "4/+/");
/* harmony import */ var _pages_welcome_progress_progress_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./pages/welcome/progress/progress.component */ "krjZ");
/* harmony import */ var _pages_welcome_progress_progress_step_progress_step_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./pages/welcome/progress/progress-step/progress-step.component */ "Y+J8");
/* harmony import */ var _pages_welcome_progress_progress_step_directive__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./pages/welcome/progress/progress-step.directive */ "7rOy");
/* harmony import */ var _pages_admin_admin_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./pages/admin/admin.component */ "sS4B");
/* harmony import */ var _pages_wallet_withdraw_withdraw_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./pages/wallet/withdraw/withdraw.component */ "1qfz");






















class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [{
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HTTP_INTERCEPTORS"],
            useClass: _app_services_web_request_interceptor__WEBPACK_IMPORTED_MODULE_6__["WebReqInterceptor"],
            multi: true
        }], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _pages_login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"],
        _pages_signup_signup_component__WEBPACK_IMPORTED_MODULE_8__["SignupComponent"],
        _pages_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_9__["DashboardComponent"],
        _pages_wallet_wallet_component__WEBPACK_IMPORTED_MODULE_10__["WalletComponent"],
        _pages_welcome_welcome_component__WEBPACK_IMPORTED_MODULE_11__["WelcomeComponent"],
        _pages_cycle_cycle_component__WEBPACK_IMPORTED_MODULE_12__["CycleComponent"],
        _pages_cycle_new_cycle_new_cycle_component__WEBPACK_IMPORTED_MODULE_13__["NewCycleComponent"],
        _pages_wallet_fund_wallet_fund_wallet_component__WEBPACK_IMPORTED_MODULE_14__["FundWalletComponent"],
        _pages_wallet_my_cycles_my_cycles_component__WEBPACK_IMPORTED_MODULE_15__["MyCyclesComponent"],
        _pages_welcome_progress_progress_component__WEBPACK_IMPORTED_MODULE_16__["ProgressComponent"],
        _pages_welcome_progress_progress_step_progress_step_component__WEBPACK_IMPORTED_MODULE_17__["ProgressStepComponent"],
        _pages_welcome_progress_progress_step_directive__WEBPACK_IMPORTED_MODULE_18__["ProgressStepDirective"],
        _pages_admin_admin_component__WEBPACK_IMPORTED_MODULE_19__["AdminComponent"],
        _pages_wallet_withdraw_withdraw_component__WEBPACK_IMPORTED_MODULE_20__["WithdrawComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _pages_login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"],
                    _pages_signup_signup_component__WEBPACK_IMPORTED_MODULE_8__["SignupComponent"],
                    _pages_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_9__["DashboardComponent"],
                    _pages_wallet_wallet_component__WEBPACK_IMPORTED_MODULE_10__["WalletComponent"],
                    _pages_welcome_welcome_component__WEBPACK_IMPORTED_MODULE_11__["WelcomeComponent"],
                    _pages_cycle_cycle_component__WEBPACK_IMPORTED_MODULE_12__["CycleComponent"],
                    _pages_cycle_new_cycle_new_cycle_component__WEBPACK_IMPORTED_MODULE_13__["NewCycleComponent"],
                    _pages_wallet_fund_wallet_fund_wallet_component__WEBPACK_IMPORTED_MODULE_14__["FundWalletComponent"],
                    _pages_wallet_my_cycles_my_cycles_component__WEBPACK_IMPORTED_MODULE_15__["MyCyclesComponent"],
                    _pages_welcome_progress_progress_component__WEBPACK_IMPORTED_MODULE_16__["ProgressComponent"],
                    _pages_welcome_progress_progress_step_progress_step_component__WEBPACK_IMPORTED_MODULE_17__["ProgressStepComponent"],
                    _pages_welcome_progress_progress_step_directive__WEBPACK_IMPORTED_MODULE_18__["ProgressStepDirective"],
                    _pages_admin_admin_component__WEBPACK_IMPORTED_MODULE_19__["AdminComponent"],
                    _pages_wallet_withdraw_withdraw_component__WEBPACK_IMPORTED_MODULE_20__["WithdrawComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"]
                ],
                providers: [{
                        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HTTP_INTERCEPTORS"],
                        useClass: _app_services_web_request_interceptor__WEBPACK_IMPORTED_MODULE_6__["WebReqInterceptor"],
                        multi: true
                    }],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "hZfp":
/*!*************************************************!*\
  !*** ./src/app/services/web-request.service.ts ***!
  \*************************************************/
/*! exports provided: WebRequestService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebRequestService", function() { return WebRequestService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



class WebRequestService {
    constructor(http) {
        this.http = http;
        this.ROOT_URL = 'https://heroku-api-link.herokuapp.com/';
    }
    get(uri) {
        return this.http.get(`${this.ROOT_URL}/${uri}`);
    }
    login(username, password) {
        return this.http.post(`${this.ROOT_URL}/users/login`, { username, password }, { observe: 'response' });
    }
    signup(username, password) {
        return this.http.post(`${this.ROOT_URL}/users`, { username, password }, { observe: 'response' });
    }
    post(uri, payload) {
        return this.http.post(`${this.ROOT_URL}/${uri}`, payload);
    }
    patch(uri, payload) {
        return this.http.patch(`${this.ROOT_URL}/${uri}`, payload, { responseType: 'text' });
    }
    delete(uri) {
        return this.http.delete(`${this.ROOT_URL}/${uri}`);
    }
}
WebRequestService.ɵfac = function WebRequestService_Factory(t) { return new (t || WebRequestService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
WebRequestService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: WebRequestService, factory: WebRequestService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WebRequestService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "krjZ":
/*!**************************************************************!*\
  !*** ./src/app/pages/welcome/progress/progress.component.ts ***!
  \**************************************************************/
/*! exports provided: ProgressComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgressComponent", function() { return ProgressComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _progress_step_progress_step_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./progress-step/progress-step.component */ "Y+J8");
/* harmony import */ var _uiHelper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./uiHelper */ "ThVL");
/* harmony import */ var _progress_helper_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./progress-helper.service */ "3xko");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");






const _c0 = function (a0, a1) { return { "complete": a0, "active": a1 }; };
function ProgressComponent_ng_container_2_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](1, _c0, item_r1.status === "completed", item_r1.status === "in progress"));
} }
function ProgressComponent_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "svg", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "circle", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "polyline", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ProgressComponent_ng_container_2_div_5_Template, 2, 4, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](2, _c0, item_r1.status === "completed", item_r1.status === "in progress"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", i_r2 !== ctx_r0.itemLength - 1);
} }
const _c1 = [[["app-progress-step"]]];
const _c2 = ["app-progress-step"];
class ProgressComponent extends _uiHelper__WEBPACK_IMPORTED_MODULE_2__["UiHelper"] {
    constructor(progressHelper) {
        super(progressHelper);
        this.progressHelper = progressHelper;
    }
    set selectedIndex(value) {
        this.activeIndex = value || 0;
    }
    ngOnInit() {
        this.progressHelper.eventHelper.subscribe({
            next: ({ prev, next }) => {
                if (next) {
                    this.next();
                }
                if (prev) {
                    this.prev();
                }
            }
        });
    }
    prev() {
        this.decreaseStep();
    }
    next() {
        this.increaseStep();
    }
    increaseStep() {
        if (this.activeIndex === this.itemLength - 1 && this.itemProgressList[this.activeIndex].status !== _uiHelper__WEBPACK_IMPORTED_MODULE_2__["Status"].COMPLETED) {
            this.completeLastStep();
        }
        if (this.activeIndex < this.itemLength - 1) {
            this.activeIndex++;
            this.switchStatusNext(this.activeIndex);
            this.setActiveStep(this.activeIndex);
        }
    }
    decreaseStep() {
        if (this.activeIndex === this.itemLength - 1 && this.itemProgressList[this.activeIndex].status !== _uiHelper__WEBPACK_IMPORTED_MODULE_2__["Status"].COMPLETED) {
            this.undoLastComplete();
        }
        else {
            if (this.activeIndex > 0) {
                this.activeIndex--;
                this.switchStatusPrev(this.activeIndex);
                this.setActiveStep(this.activeIndex);
            }
        }
    }
    ngAfterContentInit() {
        this.initProgress(this.progressSteps.length);
        this.setActiveStep(this.activeIndex);
        this.initStepIndex();
    }
    setActiveStep(activeIndex) {
        if (this.stepsExist) {
            this.removeActiveStep();
            this.updateActiveStep(activeIndex);
        }
    }
    removeActiveStep() {
        this.progressSteps.map((step) => {
            if (step.isActive) {
                step.isActive = false;
            }
        });
    }
    updateActiveStep(index) {
        this.progressSteps[index].activeState = this.progressSteps[index];
    }
    initStepIndex() {
        this.progressSteps.forEach((step, i) => (step.stepIndex = i));
    }
    get activeStep() {
        return this.progressSteps[this.activeIndex];
    }
    get progressSteps() {
        return this.steps.toArray();
    }
    get stepsExist() {
        return this.progressSteps && Array.isArray(this.progressSteps);
    }
    initProgress(value) {
        this.itemLength = value || 0;
        this.itemProgressList = this.generateProgressArray(this.itemLength);
    }
    generateProgressArray(length) {
        return [...Array(length).keys()].map((key) => {
            return {
                stepIndex: key,
                status: key === this.activeIndex ? _uiHelper__WEBPACK_IMPORTED_MODULE_2__["Status"].IN_PROGRESS : _uiHelper__WEBPACK_IMPORTED_MODULE_2__["Status"].PENDING
            };
        });
    }
}
ProgressComponent.ɵfac = function ProgressComponent_Factory(t) { return new (t || ProgressComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_progress_helper_service__WEBPACK_IMPORTED_MODULE_3__["ProgressHelperService"])); };
ProgressComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProgressComponent, selectors: [["app-progress"]], contentQueries: function ProgressComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, _progress_step_progress_step_component__WEBPACK_IMPORTED_MODULE_1__["ProgressStepComponent"], false);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.steps = _t);
    } }, inputs: { selectedIndex: "selectedIndex" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], ngContentSelectors: _c2, decls: 5, vars: 1, consts: [[1, "step-progress"], [1, "container"], [4, "ngFor", "ngForOf"], [1, "step-content"], [1, "check-box", 3, "ngClass"], ["id", "checkbox", "viewBox", "0 0 100 100"], ["cx", "50.5", "cy", "49", "r", "45", 1, "circle"], ["points", "28.5,51.9 41.9,65.3 72.5,32.8", 1, "check"], ["class", "progress-line", 3, "ngClass", 4, "ngIf"], [1, "progress-line", 3, "ngClass"], [1, "progress-percent"]], template: function ProgressComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"](_c1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ProgressComponent_ng_container_2_Template, 6, 5, "ng-container", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.itemProgressList);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"]], styles: ["[_nghost-%COMP%] {\n  -webkit-user-select: none;\n          user-select: none;\n  display: inline;\n  grid-template-rows: 50px 1fr;\n  grid-row-gap: 80px;\n  justify-content: center;\n  grid-template-columns: min-content;\n  width: -moz-fit-content;\n  width: fit-content;\n}\n[_nghost-%COMP%]   .step-progress[_ngcontent-%COMP%] {\n  border-radius: 10px;\n  grid-row: 1/-1;\n  align-self: center;\n}\n[_nghost-%COMP%]   .step-content[_ngcontent-%COMP%] {\n  position: relative;\n  align-self: start;\n  grid-row: 2/-1;\n  grid-column: 1/-1;\n}\n.container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.container[_ngcontent-%COMP%]   svg#checkbox[_ngcontent-%COMP%] {\n  width: 30px;\n  height: 30px;\n  stroke: #23c274;\n  stroke-width: 6;\n}\n.container[_ngcontent-%COMP%]   svg#checkbox[_ngcontent-%COMP%]   .circle[_ngcontent-%COMP%] {\n  stroke-dasharray: 320;\n  stroke-dashoffset: 320;\n  fill: #d2d2d2;\n  transition: stroke-dashoffset 0.5s, fill 0.5s 0.3s cubic-bezier(0.45, 0, 0.55, 1);\n}\n.container[_ngcontent-%COMP%]   svg#checkbox[_ngcontent-%COMP%]   .check[_ngcontent-%COMP%] {\n  stroke-dasharray: 70;\n  stroke-dashoffset: 70;\n  stroke: #fff;\n  fill: none;\n  transition: all 0.5s 0.5s cubic-bezier(0.45, 0, 0.55, 1);\n}\n.check-box[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  position: relative;\n}\n.check-box[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: -60px;\n  display: grid;\n  grid-template-columns: max-content;\n}\n.check-box[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   span.progress-info[_ngcontent-%COMP%] {\n  text-transform: capitalize;\n  font-size: 11px;\n  display: inline-block;\n  margin-left: 3px;\n  padding: 2px 10px;\n  transform: translateY(6px);\n  font-weight: 500;\n  color: currentColor;\n  background-color: #eee;\n  border-radius: 20px;\n  transition: background-color 0.1s ease-in-out;\n}\n.check-box[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   span.progress-info.in-progress[_ngcontent-%COMP%] {\n  background-color: #23c274;\n}\n.check-box[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   span.progress-info.completed[_ngcontent-%COMP%] {\n  background-color: #23c274;\n  color: #fff;\n}\n.check-box[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   span.step[_ngcontent-%COMP%] {\n  margin-left: 10px;\n  text-transform: uppercase;\n  font-weight: normal;\n  letter-spacing: 0.5px;\n  font-size: 11px;\n  color: #777;\n}\n.progress-line[_ngcontent-%COMP%] {\n  width: 5vh;\n  height: 1px;\n  overflow: hidden;\n  display: inline-block;\n  background-color: #d2d2d2;\n  border-radius: 10px;\n}\n.progress-line[_ngcontent-%COMP%]   .progress-percent[_ngcontent-%COMP%] {\n  height: inherit;\n  width: 0%;\n  transition: all 0.5s 0.5s cubic-bezier(0.45, 0, 0.55, 1);\n}\n.progress-line.active[_ngcontent-%COMP%]   .progress-percent[_ngcontent-%COMP%] {\n  background-color: #c6dd44;\n  width: 50%;\n}\n.progress-line.complete[_ngcontent-%COMP%]   .progress-percent[_ngcontent-%COMP%] {\n  width: 100%;\n  background-color: #23c274;\n}\n.check-box.active[_ngcontent-%COMP%]   svg#checkbox[_ngcontent-%COMP%]   .circle[_ngcontent-%COMP%] {\n  fill: #c6dd44;\n}\n.check-box.complete[_ngcontent-%COMP%]   svg#checkbox[_ngcontent-%COMP%]   .circle[_ngcontent-%COMP%] {\n  stroke-dashoffset: 0;\n  fill: #23c274;\n}\n.check-box.complete[_ngcontent-%COMP%]   svg#checkbox[_ngcontent-%COMP%]   .check[_ngcontent-%COMP%] {\n  stroke-dashoffset: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxccHJvZ3Jlc3MuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx5QkFBQTtVQUFBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLDRCQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtFQUNBLGtDQUFBO0VBQ0EsdUJBQUE7RUFBQSxrQkFBQTtBQUNKO0FBQ0k7RUFDSSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQUNSO0FBRUk7RUFDSSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0FBQVI7QUFJQTtFQUNJLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBREo7QUFHSTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7QUFEUjtBQUdRO0VBQ0kscUJBQUE7RUFDQSxzQkFBQTtFQUNBLGFBQUE7RUFDQSxpRkFBQTtBQURaO0FBSVE7RUFDSSxvQkFBQTtFQUNBLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSx3REFBQTtBQUZaO0FBT0E7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQUpKO0FBTUk7RUFDSSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0VBQ0Esa0NBQUE7QUFKUjtBQU1RO0VBQ0ksMEJBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsMEJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLDZDQUFBO0FBSlo7QUFPUTtFQUNJLHlCQUFBO0FBTFo7QUFRUTtFQUNJLHlCQUFBO0VBQ0EsV0FBQTtBQU5aO0FBU1E7RUFDSSxpQkFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0FBUFo7QUFZQTtFQUNJLFVBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7QUFUSjtBQVdJO0VBQ0ksZUFBQTtFQUNBLFNBQUE7RUFDQSx3REFBQTtBQVRSO0FBY1E7RUFDSSx5QkFBQTtFQUNBLFVBQUE7QUFYWjtBQWdCUTtFQUNJLFdBQUE7RUFDQSx5QkFBQTtBQWJaO0FBbUJRO0VBQ0ksYUFBQTtBQWhCWjtBQXVCUTtFQUNJLG9CQUFBO0VBQ0EsYUFBQTtBQXBCWjtBQXVCUTtFQUNJLG9CQUFBO0FBckJaIiwiZmlsZSI6InByb2dyZXNzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICBkaXNwbGF5OmlubGluZTtcclxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogNTBweCAxZnI7XHJcbiAgICBncmlkLXJvdy1nYXA6IDgwcHg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogbWluLWNvbnRlbnQ7XHJcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XHJcblxyXG4gICAgLnN0ZXAtcHJvZ3Jlc3Mge1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgZ3JpZC1yb3c6IDEgLyAtMTtcclxuICAgICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgLnN0ZXAtY29udGVudCB7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIGFsaWduLXNlbGY6IHN0YXJ0O1xyXG4gICAgICAgIGdyaWQtcm93OiAyIC8gLTE7XHJcbiAgICAgICAgZ3JpZC1jb2x1bW46IDEgLyAtMTtcclxuICAgIH1cclxufVxyXG5cclxuLmNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAgIHN2ZyNjaGVja2JveCB7XHJcbiAgICAgICAgd2lkdGg6IDMwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgICAgIHN0cm9rZTogIzIzYzI3NDtcclxuICAgICAgICBzdHJva2Utd2lkdGg6IDY7XHJcblxyXG4gICAgICAgIC5jaXJjbGUge1xyXG4gICAgICAgICAgICBzdHJva2UtZGFzaGFycmF5OiAzMjA7XHJcbiAgICAgICAgICAgIHN0cm9rZS1kYXNob2Zmc2V0OiAzMjA7XHJcbiAgICAgICAgICAgIGZpbGw6ICNkMmQyZDI7XHJcbiAgICAgICAgICAgIHRyYW5zaXRpb246IHN0cm9rZS1kYXNob2Zmc2V0IDAuNXMsIGZpbGwgMC41cyAwLjNzIGN1YmljLWJlemllcigwLjQ1LCAwLCAwLjU1LCAxKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5jaGVjayB7XHJcbiAgICAgICAgICAgIHN0cm9rZS1kYXNoYXJyYXk6IDcwO1xyXG4gICAgICAgICAgICBzdHJva2UtZGFzaG9mZnNldDogNzA7XHJcbiAgICAgICAgICAgIHN0cm9rZTogI2ZmZjtcclxuICAgICAgICAgICAgZmlsbDogbm9uZTtcclxuICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuNXMgMC41cyBjdWJpYy1iZXppZXIoMC40NSwgMCwgMC41NSwgMSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi5jaGVjay1ib3gge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG4gICAgLmluZm8ge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICBib3R0b206IC02MHB4O1xyXG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBtYXgtY29udGVudDtcclxuXHJcbiAgICAgICAgc3Bhbi5wcm9ncmVzcy1pbmZvIHtcclxuICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTFweDtcclxuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogM3B4O1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAycHggMTBweDtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDZweCk7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgICAgIGNvbG9yOiBjdXJyZW50Q29sb3I7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICAgICAgICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4xcyBlYXNlLWluLW91dDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHNwYW4ucHJvZ3Jlc3MtaW5mby5pbi1wcm9ncmVzcyB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMyM2MyNzQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzcGFuLnByb2dyZXNzLWluZm8uY29tcGxldGVkIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzIzYzI3NDtcclxuICAgICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzcGFuLnN0ZXAge1xyXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDExcHg7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjNzc3O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLnByb2dyZXNzLWxpbmUge1xyXG4gICAgd2lkdGg6IDV2aDtcclxuICAgIGhlaWdodDogMXB4O1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNkMmQyZDI7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG5cclxuICAgIC5wcm9ncmVzcy1wZXJjZW50IHtcclxuICAgICAgICBoZWlnaHQ6IGluaGVyaXQ7XHJcbiAgICAgICAgd2lkdGg6IDAlO1xyXG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjVzIDAuNXMgY3ViaWMtYmV6aWVyKDAuNDUsIDAsIDAuNTUsIDEpO1xyXG4gICAgfVxyXG59XHJcblxyXG4gICAgLnByb2dyZXNzLWxpbmUuYWN0aXZlIHtcclxuICAgICAgICAucHJvZ3Jlc3MtcGVyY2VudCB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNjNmRkNDQ7XHJcbiAgICAgICAgICAgIHdpZHRoOiA1MCU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5wcm9ncmVzcy1saW5lLmNvbXBsZXRlIHtcclxuICAgICAgICAucHJvZ3Jlc3MtcGVyY2VudCB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjNjMjc0O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbi5jaGVjay1ib3guYWN0aXZlIHtcclxuICAgIHN2ZyNjaGVja2JveCB7XHJcbiAgICAgICAgLmNpcmNsZSB7XHJcbiAgICAgICAgICAgIGZpbGw6ICNjNmRkNDRcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi5jaGVjay1ib3guY29tcGxldGUge1xyXG4gICAgc3ZnI2NoZWNrYm94IHtcclxuICAgICAgICAuY2lyY2xlIHtcclxuICAgICAgICAgICAgc3Ryb2tlLWRhc2hvZmZzZXQ6IDA7XHJcbiAgICAgICAgICAgIGZpbGw6ICMyM2MyNzQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuY2hlY2sge1xyXG4gICAgICAgICAgICBzdHJva2UtZGFzaG9mZnNldDogMDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProgressComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-progress',
                templateUrl: './progress.component.html',
                styleUrls: ['./progress.component.scss']
            }]
    }], function () { return [{ type: _progress_helper_service__WEBPACK_IMPORTED_MODULE_3__["ProgressHelperService"] }]; }, { selectedIndex: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], steps: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"],
            args: [_progress_step_progress_step_component__WEBPACK_IMPORTED_MODULE_1__["ProgressStepComponent"]]
        }] }); })();


/***/ }),

/***/ "lGQG":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _web_request_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./web-request.service */ "hZfp");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");






class AuthService {
    constructor(http, webservice, router) {
        this.http = http;
        this.webservice = webservice;
        this.router = router;
    }
    login(username, password) {
        return this.webservice.login(username, password).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["shareReplay"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])((res) => {
            this.setSession(res.body._id, res.headers.get('x-access-token'), res.headers.get('x-refresh-token'));
        }));
    }
    signup(username, password) {
        return this.webservice.signup(username, password).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["shareReplay"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])((res) => {
            this.setSession(res.body._id, res.headers.get('x-access-token'), res.headers.get('x-refresh-token'));
            console.log('Succesfully Signed Up');
        }));
    }
    logout() {
        this.removeSession();
        this.router.navigate(['/login']);
    }
    setSession(userId, accessToken, refreshToken) {
        localStorage.setItem('user-id', userId);
        localStorage.setItem('x-access-token', accessToken);
        localStorage.setItem('x-refresh-token', refreshToken);
    }
    removeSession() {
        localStorage.removeItem('user-id');
        localStorage.removeItem('x-access-token');
        localStorage.removeItem('x-refresh-token');
    }
    getAccessToken() {
        return localStorage.getItem('x-access-token');
    }
    setAccessToken(accessToken) {
        localStorage.setItem('x-access-token', accessToken);
    }
    getRefreshToken() {
        return localStorage.getItem('x-refresh-token');
    }
    getUserId() {
        return localStorage.getItem('user-id');
    }
    getNewAccessToken() {
        return this.http.get(`${this.webservice.ROOT_URL}/users/me/access-token`, {
            headers: {
                'x-refresh-token': this.getRefreshToken(),
                '_id': this.getUserId()
            },
            observe: 'response'
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])((res) => {
            this.setAccessToken(res.headers.get('x-access-token'));
        }));
    }
}
AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_web_request_service__WEBPACK_IMPORTED_MODULE_3__["WebRequestService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"])); };
AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthService, factory: AuthService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }, { type: _web_request_service__WEBPACK_IMPORTED_MODULE_3__["WebRequestService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }]; }, null); })();


/***/ }),

/***/ "nmHL":
/*!*****************************************************!*\
  !*** ./src/app/services/web-request.interceptor.ts ***!
  \*****************************************************/
/*! exports provided: WebReqInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebReqInterceptor", function() { return WebReqInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth.service */ "lGQG");





class WebReqInterceptor {
    constructor(authService) {
        this.authService = authService;
        this.accessTokenRefreshed = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
    intercept(request, next) {
        //Handle the request
        request = this.addAuthHeader(request);
        //call next and handle the response
        return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])((error) => {
            console.log(error);
            if (error.status === 401) {
                //if 401 (Unauthorised) error
                //refresh access token
                return this.refreshAccessToken().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(() => {
                    request = this.addAuthHeader(request);
                    return next.handle(request);
                }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])((err) => {
                    // console.log(err);
                    this.authService.logout();
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["empty"])();
                }));
            }
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(error);
        }));
    }
    addAuthHeader(request) {
        const token = this.authService.getAccessToken();
        if (token) {
            return request.clone({
                setHeaders: {
                    'x-access-token': token
                }
            });
        }
        return request;
    }
    refreshAccessToken() {
        if (this.refreshingAccessToken) {
            return new rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"](observer => {
                this.accessTokenRefreshed.subscribe(() => {
                    //this will run when the access token is refreshed
                    observer.next();
                    observer.complete();
                });
            });
        }
        else {
            this.refreshingAccessToken = true;
            return this.authService.getNewAccessToken().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(() => {
                console.log('Access Token Refreshed');
                this.refreshingAccessToken = false;
                this.accessTokenRefreshed.next();
            }));
        }
    }
}
WebReqInterceptor.ɵfac = function WebReqInterceptor_Factory(t) { return new (t || WebReqInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"])); };
WebReqInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: WebReqInterceptor, factory: WebReqInterceptor.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WebReqInterceptor, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }]; }, null); })();


/***/ }),

/***/ "o97b":
/*!**************************************************!*\
  !*** ./src/app/pages/signup/signup.component.ts ***!
  \**************************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _services_wallet_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/wallet.service */ "Fvwb");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/auth.service */ "lGQG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");








function SignupComponent_div_14_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Both Passwords Must Match");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SignupComponent_div_14_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 14);
} }
function SignupComponent_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SignupComponent_div_14_span_1_Template, 3, 0, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SignupComponent_div_14_span_2_Template, 1, 0, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.passwordMatch);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.passwordMatch);
} }
function SignupComponent_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Username is Invalid");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class SignupComponent {
    constructor(walletService, authService, router, fb) {
        this.walletService = walletService;
        this.authService = authService;
        this.router = router;
        this.fb = fb;
        this.newAccountBalance = 0;
        this.badRequestError = false;
    }
    ngOnInit() {
        this.signupForm = this.fb.group({
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(8)]],
            password2: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(8)]]
        });
    }
    signup() {
        //console.log(this.signupForm.value.password == this.signupForm.value.password2)
        this.profileForm = this.signupForm.value;
        this.authService.signup(this.profileForm.username.toUpperCase(), this.profileForm.password).subscribe((res) => {
            if (res.status === 200) {
                this.badRequestError = false;
                this.router.navigate(['/welcome']);
            }
            console.log(res);
        });
        if (this.badRequestError) {
            this.badRequestError = true;
        }
        this.signupForm.reset();
    }
    get passwordMatch() {
        return this.signupForm.value.password == this.signupForm.value.password2;
    }
    get password() {
        return this.signupForm.get('password');
    }
    get password2() {
        return this.signupForm.get('password2');
    }
}
SignupComponent.ɵfac = function SignupComponent_Factory(t) { return new (t || SignupComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_wallet_service__WEBPACK_IMPORTED_MODULE_2__["WalletService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"])); };
SignupComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SignupComponent, selectors: [["app-signup"]], decls: 27, vars: 4, consts: [[1, "centered-content"], [3, "formGroup", "ngSubmit"], [1, "modal-box"], [1, "title", "has-text-primary"], [1, "field"], [1, "control"], ["placeholder", "Username", "formControlName", "username", 1, "input", "is-small", "has-background-light", "is-medium"], ["type", "password", "placeholder", "Password", "formControlName", "password", 1, "input", "is-small", "has-background-light", "is-medium"], ["type", "password", "placeholder", "Enter Password Again", "formControlName", "password2", 1, "input", "is-small", "has-background-light", "is-medium"], [4, "ngIf"], [1, "field", "is-pulled-right"], ["type", "submit", 1, "button", "is-success", 3, "disabled"], ["routerLink", "/login"], ["class", "danger", 4, "ngIf"], [1, "danger"]], template: function SignupComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function SignupComponent_Template_form_ngSubmit_1_listener() { return ctx.signup(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "SIGN UP");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, SignupComponent_div_14_Template, 3, 2, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, SignupComponent_div_15_Template, 4, 0, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " Sign Up ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Got an account? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " here!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.signupForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.password2.touched || ctx.password2.dirty);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.badRequestError);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.signupForm.invalid);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"]], styles: ["@import url(\"https://fonts.googleapis.com/css?family=Lato:400,700|Nunito:400,700\");\nhtml[_ngcontent-%COMP%] {\n  background: linear-gradient(to right top, #c6dd44, #e0bb13);\n}\nhtml[_ngcontent-%COMP%], body[_ngcontent-%COMP%] {\n  height: 100%;\n}\nhtml[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], body[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 150%;\n  margin-bottom: 5%;\n}\n.centered-content[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  height: 100%;\n}\n.title[_ngcontent-%COMP%] {\n  font-family: \"Lato\";\n  font-size: 20px;\n  text-transform: uppercase;\n  letter-spacing: 2.5px;\n}\n.modal-box[_ngcontent-%COMP%] {\n  min-height: 300px;\n  width: 100%;\n  max-width: 700px;\n  background: white;\n  border-radius: 5px;\n  padding: 35px;\n}\n.navigation[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 0%;\n  width: 20%;\n  height: 10%;\n  display: flex;\n  flex-direction: row;\n}\n.todashboard[_ngcontent-%COMP%]:hover   a[_ngcontent-%COMP%] {\n  color: red;\n  font-size: larger;\n}\n.logout[_ngcontent-%COMP%]:hover   a[_ngcontent-%COMP%] {\n  color: red;\n  font-size: larger;\n}\n@media only screen and (max-width: 720px) {\n  html[_ngcontent-%COMP%] {\n    background: whitesmoke;\n  }\n\n  .container[_ngcontent-%COMP%] {\n    height: 100%;\n  }\n\n  .profile[_ngcontent-%COMP%] {\n    height: 250%;\n    padding: 10% 5%;\n  }\n\n  .navigation[_ngcontent-%COMP%] {\n    right: 15%;\n    font-size: 2vh;\n  }\n\n  a[_ngcontent-%COMP%] {\n    color: red;\n  }\n\n  .profile-tags[_ngcontent-%COMP%] {\n    margin: 3% 0%;\n    font-size: 250%;\n    box-shadow: 0px 0px 10px 3.5px rgba(0, 0, 0, 0.2);\n  }\n\n  p[_ngcontent-%COMP%] {\n    font-size: 100%;\n  }\n}\n.danger[_ngcontent-%COMP%] {\n  color: red;\n}\n.centered-content[_ngcontent-%COMP%] {\n  background: linear-gradient(to right top, #c6dd44, #e0bb13);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxtYWluLXN0eWxlcy5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXHNpZ251cC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHUSxrRkFBQTtBQXFCUjtFQUNJLDJEQUFBO0FDdEJKO0FEeUJBOztFQUVJLFlBQUE7QUN0Qko7QUR3Qkk7O0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0FDckJSO0FEeUJBO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQ3RCSjtBRDBCQTtFQUNJLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0VBQ0EscUJBQUE7QUN2Qko7QUQwQkE7RUFDSSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0FDdkJKO0FEMEJBO0VBQ0ksa0JBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUN2Qko7QUQ0Qkk7RUFDSSxVQUFBO0VBQ0EsaUJBQUE7QUN6QlI7QURnQ0k7RUFDSSxVQUFBO0VBQ0EsaUJBQUE7QUM3QlI7QURrQ0E7RUFDSTtJQUNJLHNCQUFBO0VDL0JOOztFRGtDRTtJQUNJLFlBQUE7RUMvQk47O0VEa0NFO0lBQ0ksWUFBQTtJQUNBLGVBQUE7RUMvQk47O0VEa0NFO0lBQ0ksVUFBQTtJQUNBLGNBQUE7RUMvQk47O0VEa0NFO0lBQ0ksVUFBQTtFQy9CTjs7RURrQ0U7SUFFSSxhQUFBO0lBQ0EsZUFBQTtJQUNBLGlEQUFBO0VDaENOOztFRG1DRTtJQUNJLGVBQUE7RUNoQ047QUFDRjtBQXhGQTtFQUNJLFVBQUE7QUEwRko7QUF2RkE7RUFDSSwyREFBQTtBQTBGSiIsImZpbGUiOiJzaWdudXAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvL1RoaXMgd2hlcmUgd2UgcHV0IGdsb2JhbCBzdHlsZXMgYW5kIGNoYW5nZSB2YXJpYWJsZSB2YWx1ZXNcclxuXHJcbi8vaW1wb3J0IGdvb2dsZSBmb250cy4gTGF0byBhbmQgTnVuaXRvXHJcbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9TGF0bzo0MDAsNzAwfE51bml0bzo0MDAsNzAwJyk7XHJcblxyXG4kZGVlcC15ZWxsb3c6ICNjNmRkNDQ7XHJcbiRvcmFuZ2U6ICNlMGJiMTM7XHJcblxyXG4kbGlnaHQtb3JhbmdlOiAjZTdkYjZlO1xyXG4kbGlnaHQ6ICNmMWU3YjY7XHJcbiRkYXJrLW9yYW5nZTogIzMzMmIwNTtcclxuXHJcbi8vIFVwZGF0ZSBCdWxtYSBnbG9iYWwgdmFyaWFibGVzXHJcbiRmYW1pbHktc2Fucy1zZXJpZjogXCJOdW5pdG9cIiwgc2Fucy1zZXJpZjtcclxuJHByaW1hcnk6ICRvcmFuZ2U7XHJcbiRsaW5rOiAkbGlnaHQtb3JhbmdlO1xyXG5cclxuLy9VcGRhdGUgc29tZSBCdWxtYSBjb21wb25lbnQgdmFyaWFibGVzXHJcbiRjb250b2wtYm9yZGVyLXdpZHRoOiAycHg7XHJcbiRpbnB1dC1ib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xyXG4kaW5wdXQtc2hhZG93OiBub25lO1xyXG5cclxuLy9zZXQgY3VzdG9tIGdsb2JhbCBzdHlsZXMgKHdpbGwgYmUgYXBsaWVkIHRvIHdob2xlIGFwcClcclxuXHJcbmh0bWwge1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0IHRvcCwgJGRlZXAteWVsbG93LCAkb3JhbmdlKTtcclxufVxyXG5cclxuaHRtbCxcclxuYm9keSB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcblxyXG4gICAgaDMge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTUwJTtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiA1JTtcclxuICAgIH1cclxufVxyXG5cclxuLmNlbnRlcmVkLWNvbnRlbnQge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG5cclxuLnRpdGxlIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnTGF0byc7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDIuNXB4O1xyXG59XHJcblxyXG4ubW9kYWwtYm94IHtcclxuICAgIG1pbi1oZWlnaHQ6IDMwMHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXgtd2lkdGg6IDcwMHB4O1xyXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBwYWRkaW5nOiAzNXB4O1xyXG59XHJcblxyXG4ubmF2aWdhdGlvbiB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICByaWdodDogMCU7XHJcbiAgICB3aWR0aDogMjAlO1xyXG4gICAgaGVpZ2h0OiAxMCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxufVxyXG5cclxuLnRvZGFzaGJvYXJkOmhvdmVyIHtcclxuXHJcbiAgICBhIHtcclxuICAgICAgICBjb2xvcjogcmVkO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogbGFyZ2VyO1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuLmxvZ291dDpob3ZlciB7XHJcblxyXG4gICAgYSB7XHJcbiAgICAgICAgY29sb3I6IHJlZDtcclxuICAgICAgICBmb250LXNpemU6IGxhcmdlcjtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzIwcHgpIHtcclxuICAgIGh0bWwge1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHdoaXRlc21va2U7XHJcbiAgICB9XHJcblxyXG4gICAgLmNvbnRhaW5lciB7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlXHJcbiAgICB9XHJcblxyXG4gICAgLnByb2ZpbGUge1xyXG4gICAgICAgIGhlaWdodDogMjUwJTtcclxuICAgICAgICBwYWRkaW5nOiAxMCUgNSU7XHJcbiAgICB9XHJcblxyXG4gICAgLm5hdmlnYXRpb24ge1xyXG4gICAgICAgIHJpZ2h0OiAxNSU7XHJcbiAgICAgICAgZm9udC1zaXplOiAydmg7XHJcbiAgICB9XHJcblxyXG4gICAgYSB7XHJcbiAgICAgICAgY29sb3I6IHJlZDtcclxuICAgIH1cclxuXHJcbiAgICAucHJvZmlsZS10YWdzIHtcclxuXHJcbiAgICAgICAgbWFyZ2luOiAzJSAwJTtcclxuICAgICAgICBmb250LXNpemU6IDI1MCU7XHJcbiAgICAgICAgYm94LXNoYWRvdzogMHB4IDBweCAxMHB4IDMuNXB4IHJnYigwIDAgMCAvIDIwJSk7XHJcbiAgICB9XHJcblxyXG4gICAgcCB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMDAlO1xyXG4gICAgfVxyXG59IiwiQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9TGF0bzo0MDAsNzAwfE51bml0bzo0MDAsNzAwXCIpO1xuaHRtbCB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCB0b3AsICNjNmRkNDQsICNlMGJiMTMpO1xufVxuXG5odG1sLFxuYm9keSB7XG4gIGhlaWdodDogMTAwJTtcbn1cbmh0bWwgaDMsXG5ib2R5IGgzIHtcbiAgZm9udC1zaXplOiAxNTAlO1xuICBtYXJnaW4tYm90dG9tOiA1JTtcbn1cblxuLmNlbnRlcmVkLWNvbnRlbnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLnRpdGxlIHtcbiAgZm9udC1mYW1pbHk6IFwiTGF0b1wiO1xuICBmb250LXNpemU6IDIwcHg7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGxldHRlci1zcGFjaW5nOiAyLjVweDtcbn1cblxuLm1vZGFsLWJveCB7XG4gIG1pbi1oZWlnaHQ6IDMwMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgbWF4LXdpZHRoOiA3MDBweDtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgcGFkZGluZzogMzVweDtcbn1cblxuLm5hdmlnYXRpb24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAwJTtcbiAgd2lkdGg6IDIwJTtcbiAgaGVpZ2h0OiAxMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG59XG5cbi50b2Rhc2hib2FyZDpob3ZlciBhIHtcbiAgY29sb3I6IHJlZDtcbiAgZm9udC1zaXplOiBsYXJnZXI7XG59XG5cbi5sb2dvdXQ6aG92ZXIgYSB7XG4gIGNvbG9yOiByZWQ7XG4gIGZvbnQtc2l6ZTogbGFyZ2VyO1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDcyMHB4KSB7XG4gIGh0bWwge1xuICAgIGJhY2tncm91bmQ6IHdoaXRlc21va2U7XG4gIH1cblxuICAuY29udGFpbmVyIHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gIH1cblxuICAucHJvZmlsZSB7XG4gICAgaGVpZ2h0OiAyNTAlO1xuICAgIHBhZGRpbmc6IDEwJSA1JTtcbiAgfVxuXG4gIC5uYXZpZ2F0aW9uIHtcbiAgICByaWdodDogMTUlO1xuICAgIGZvbnQtc2l6ZTogMnZoO1xuICB9XG5cbiAgYSB7XG4gICAgY29sb3I6IHJlZDtcbiAgfVxuXG4gIC5wcm9maWxlLXRhZ3Mge1xuICAgIG1hcmdpbjogMyUgMCU7XG4gICAgZm9udC1zaXplOiAyNTAlO1xuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMTBweCAzLjVweCByZ2JhKDAsIDAsIDAsIDAuMik7XG4gIH1cblxuICBwIHtcbiAgICBmb250LXNpemU6IDEwMCU7XG4gIH1cbn1cbi5kYW5nZXIge1xuICBjb2xvcjogcmVkO1xufVxuXG4uY2VudGVyZWQtY29udGVudCB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCB0b3AsICNjNmRkNDQsICNlMGJiMTMpO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SignupComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-signup',
                templateUrl: './signup.component.html',
                styleUrls: ['./signup.component.scss']
            }]
    }], function () { return [{ type: _services_wallet_service__WEBPACK_IMPORTED_MODULE_2__["WalletService"] }, { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }]; }, null); })();


/***/ }),

/***/ "sS4B":
/*!************************************************!*\
  !*** ./src/app/pages/admin/admin.component.ts ***!
  \************************************************/
/*! exports provided: AdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminComponent", function() { return AdminComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/profile.service */ "Aso2");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/auth.service */ "lGQG");
/* harmony import */ var src_app_services_cycle_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/cycle.service */ "XUC1");
/* harmony import */ var src_app_services_wallet_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/wallet.service */ "Fvwb");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");









function AdminComponent_div_37_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "label", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Get Path");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "form", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function AdminComponent_div_37_Template_form_ngSubmit_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.fundWallets(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "input", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "input", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "input", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Find");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r0.fundWallet);
} }
function AdminComponent_div_38_tbody_20_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdminComponent_div_38_tbody_20_Template_button_click_18_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const user_r9 = ctx.$implicit; const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r11.deleteUser(user_r9._id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const user_r9 = ctx.$implicit;
    const i_r10 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r10 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r9._id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r9.firstName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r9.lastName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r9.phoneNumber);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r9.bvn);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r9.nin);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r9.pendingTransfer);
} }
function AdminComponent_div_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "table", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "sn");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "ID");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "First Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Last Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Phone Number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "BVN");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "NIN");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Pending");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, AdminComponent_div_38_tbody_20_Template, 20, 8, "tbody", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.users);
} }
function AdminComponent_div_39_tbody_12_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdminComponent_div_39_tbody_12_Template_button_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17); const user_r15 = ctx.$implicit; const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r16.viewTransactions(user_r15._id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "View Transactions");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdminComponent_div_39_tbody_12_Template_button_click_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17); const user_r15 = ctx.$implicit; const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r18.deleteWallet(user_r15._id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const user_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r15._id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r15.walletId);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r15.walletAmount);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r15.cycle);
} }
function AdminComponent_div_39_table_13_tbody_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const transaction_r20 = ctx.$implicit;
    const i_r21 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r21 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](transaction_r20.transactionId);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](transaction_r20.date);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](transaction_r20.depositAmount);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](transaction_r20.action);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](transaction_r20.holder);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](transaction_r20.newBalance);
} }
function AdminComponent_div_39_table_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "table", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "thead", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "sn");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Transaction ID");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Amount");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Action");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Holder");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Balance");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, AdminComponent_div_39_table_13_tbody_17_Template, 16, 7, "tbody", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r14.transactions);
} }
function AdminComponent_div_39_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "table", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "ID");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Wallet Owner");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Wallet Amount");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Wallet Cycles");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, AdminComponent_div_39_tbody_12_Template, 14, 4, "tbody", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, AdminComponent_div_39_table_13_Template, 18, 1, "table", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.userWallets);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.viewTransactionTrigger);
} }
function AdminComponent_div_40_tbody_10_Template(rf, ctx) { if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdminComponent_div_40_tbody_10_Template_button_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r25); const cycle_r23 = ctx.$implicit; const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r24.deleteCycle(cycle_r23._id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdminComponent_div_40_tbody_10_Template_button_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r25); const cycle_r23 = ctx.$implicit; const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r26.getWalletsInCycle(cycle_r23._id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "View Wallets");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const cycle_r23 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](cycle_r23._id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](cycle_r23.cycleAmount);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](cycle_r23.cycleDuration);
} }
function AdminComponent_div_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "table", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "ID");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Cycle Amount");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Cycle Duration");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, AdminComponent_div_40_tbody_10_Template, 12, 3, "tbody", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r3.cycles);
} }
function AdminComponent_div_41_tbody_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const wallet_r28 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](wallet_r28._id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](wallet_r28.walletAmount);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](wallet_r28.walletId);
} }
function AdminComponent_div_41_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "table", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "ID");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Wallet Worth");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Wallet Owner");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, AdminComponent_div_41_tbody_10_Template, 8, 3, "tbody", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r4.cycleWallets);
} }
function AdminComponent_div_42_tbody_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const path_r30 = ctx.$implicit;
    const i_r31 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r31 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](path_r30._id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](path_r30.walletAmount);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](path_r30.walletId);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](path_r30.cycle);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](path_r30.age);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](path_r30.bvn);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](path_r30.firstName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](path_r30.lastName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](path_r30.phoneNumber);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](path_r30.username);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](path_r30.cycleAmount);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](path_r30.cycleDuration);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](path_r30.cycleStartDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](path_r30.frequency);
} }
function AdminComponent_div_42_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "table", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "sn");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "ID");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Wallet Worth");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Wallet Owner");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Wallet Cycles");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Age");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "BVN");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "First Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Last Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Phone Number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "username");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Cycle Worth");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Cycle Duration");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Cycle Start Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Cycle frequency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](34, AdminComponent_div_42_tbody_34_Template, 32, 15, "tbody", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r5.pathInfo);
} }
class AdminComponent {
    constructor(fb, profileService, auhtService, cycleService, walletService) {
        this.fb = fb;
        this.profileService = profileService;
        this.auhtService = auhtService;
        this.cycleService = cycleService;
        this.walletService = walletService;
        this.userWallet = []; //for iteration purposes
        this.userWallets = [];
        this.userWalletCycle = [];
        this.lengthOfUserObject = 0;
        this.lengthOfCycleObject = 0;
    }
    ngOnInit() {
        this.path = this.fb.group({
            pathName: [''],
            id: ['']
        });
        this.fundWallet = this.fb.group({
            userId: [''],
            walletId: [''],
            amount: ['']
        });
        this.profileService.getAllUsers().subscribe((users) => {
            this.users = users;
            for (let key in users) {
                this.lengthOfUserObject++;
            }
            for (let i = 0; i < this.lengthOfUserObject; i++) {
                if (users[i].wallet === undefined) {
                    continue;
                }
                else {
                    this.userWallet.push(users[i].wallet);
                }
            }
            for (let i = 0; i < this.userWallet.length; i++) {
                for (let j = 0; j < this.userWallet[i].length; j++) {
                    this.userWallets.push(this.userWallet[i][j]);
                    this.userWalletCycle.push(this.userWallet[i][j].cycle);
                }
            }
        });
        this.cycleService.getCycles().subscribe((cycle) => {
            this.cycles = cycle;
        });
    }
    viewAllUsers() {
        this.viewAllUser = true;
        this.viewAllCycle = false;
        this.viewAllWallet = false;
        this.viewWalletsInCycle = false;
        this.fundWalletTrigger = false;
    }
    getAllWallets() {
        console.log(this.userWallet);
        this.viewAllWallet = true;
        this.viewAllUser = false;
        this.viewAllCycle = false;
        this.viewWalletsInCycle = false;
        this.fundWalletTrigger = false;
    }
    getAllCycles() {
        console.log(this.cycles);
        this.viewAllWallet = false;
        this.viewAllUser = false;
        this.viewAllCycle = true;
        this.viewWalletsInCycle = false;
        this.fundWalletTrigger = false;
    }
    deleteWallet(str) {
        console.log(str);
        this.walletService.deleteWallet('wallet/' + str).subscribe(() => {
            console.log('deleted');
        });
    }
    deleteUser(str) {
        console.log(str);
        this.profileService.deleteWallet('user/' + str).subscribe(() => {
            console.log('deleted');
        });
    }
    deleteCycle(str) {
        this.cycleService.getCycleDetails(str).subscribe((cycle) => {
            let wallets = cycle[0].wallet;
            for (let i = 0; i < wallets.length; i++) {
                if (wallets[i] == null) {
                    continue;
                }
                this.walletService.getWalletDetails(wallets[i]._id).subscribe((wallet) => {
                    let cyclesInWallet = wallet[0].cycle;
                    for (let j = 0; j < cyclesInWallet.length; j++) {
                        if (str == cyclesInWallet[j]) {
                            cyclesInWallet.splice(j, 1);
                            console.log(cyclesInWallet);
                            this.walletService.updateWallet(wallets[i]._id + '/remove-cycle', { cycle: cyclesInWallet }).subscribe(() => {
                                console.log('cycle in wallet have been deleted');
                            });
                        }
                    }
                });
            }
        });
        this.profileService.deleteWallet('cycles/' + str).subscribe(() => {
            console.log('cycle has been deleted');
        });
    }
    getWalletsInCycle(str) {
        this.viewWalletsInCycle = true;
        console.log(str);
        this.cycleService.getCycleDetails(str).subscribe((cycleDetails) => {
            this.cycleWallets = cycleDetails[0].wallet;
            let cycleWalletLength = cycleDetails[0].wallet.length;
            let cycleWallet = [];
            for (let i = 0; i < cycleWalletLength; i++) {
                if (this.cycleWallets[i] == null) {
                }
                else {
                    cycleWallet.push(this.cycleWallets[i]);
                }
            }
            this.cycleWallets = cycleWallet;
        });
    }
    viewTransactions(str) {
        this.viewTransactionTrigger = true;
        for (let i = 0; i < this.userWallets.length; i++) {
            if (this.userWallets[i]._id == str) {
                this.transactions = this.userWallets[i].transactions;
            }
        }
    }
    getPath() {
        this.pathfinder = true;
        this.viewAllWallet = false;
        this.viewAllUser = false;
        this.viewAllCycle = false;
        this.viewWalletsInCycle = false;
        this.fundWalletTrigger = false;
        if (this.path.value.pathName === 'user') {
            this.profileService.getUserDetails(this.path.value.id).subscribe((user) => {
                this.pathInfo = user;
                console.log(user);
            });
        }
        else if (this.path.value.pathName === 'cycle') {
            this.cycleService.getCycleDetails(this.path.value.id).subscribe((cycle) => {
                console.log(cycle);
                this.pathInfo = cycle;
            });
        }
        else if (this.path.value.pathName === 'wallet') {
            this.walletService.getWalletDetails(this.path.value.id).subscribe((wallet) => {
                this.pathInfo = wallet;
                console.log(this.pathInfo);
            });
        }
    }
    fundWalletDisplay() {
        this.fundWalletTrigger = true;
    }
    fundWallets() {
        console.log(this.fundWallet);
        this.walletService.updateWallet(this.fundWallet.value.walletId, { walletAmount: this.fundWallet.value.amount }).subscribe((wallet) => {
            this.profileService.updateUserDetails(this.fundWallet.value.userId, { pendingTransfer: false }).subscribe(() => {
                alert('Funds have been updated');
                console.log(wallet);
            });
        });
    }
}
AdminComponent.ɵfac = function AdminComponent_Factory(t) { return new (t || AdminComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_2__["ProfileService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_cycle_service__WEBPACK_IMPORTED_MODULE_4__["CycleService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_wallet_service__WEBPACK_IMPORTED_MODULE_5__["WalletService"])); };
AdminComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AdminComponent, selectors: [["app-admin"]], decls: 43, vars: 7, consts: [[1, "centered-content"], [1, "admin"], [1, "getButtons"], [3, "click"], ["routerLink", "/new-cycle"], [1, "path-container"], [1, "field", "is-horizontal"], [1, "field-body"], ["for", ""], [3, "formGroup", "ngSubmit"], [1, "field"], [1, "control"], [1, "select", "is-fullwidth"], [1, "control", "is-expanded", "has-icons-left"], ["placeholder", "Enter Path", "formControlName", "pathName"], ["value", "user"], ["value", "cycle"], ["value", "wallet"], [1, "control", "is-expanded"], ["placeHolder", "Enter ID Here", "formControlName", "id", 1, "input", "is-success", 2, "margin-top", "5px"], ["type", "submit", 1, "button", "is-success", "is-pulled-right"], ["class", "path-container", 4, "ngIf"], [4, "ngIf"], ["placeholder", "Enter walletId", "formControlName", "walletId"], ["placeholder", "Enter UserId", "formControlName", "userId"], ["placeHolder", "Enter Amount Here", "formControlName", "amount", 1, "input", 2, "margin-top", "5px"], [1, "table", "is-bordered"], [4, "ngFor", "ngForOf"], ["class", "table is-bordered is-fullwidth", 4, "ngIf"], [1, "table", "is-bordered", "is-fullwidth"], [2, "width", "fit-content"]], template: function AdminComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdminComponent_Template_button_click_3_listener() { return ctx.viewAllUsers(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "View All Users");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdminComponent_Template_button_click_5_listener() { return ctx.getAllWallets(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "View All Wallets");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdminComponent_Template_button_click_7_listener() { return ctx.getAllCycles(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "View All Cycles");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdminComponent_Template_button_click_9_listener() { return ctx.fundWalletDisplay(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Fund Wallet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Create Cycle");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Get Path");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "form", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function AdminComponent_Template_form_ngSubmit_18_listener() { return ctx.getPath(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "p", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "select", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "option", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "user");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "option", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "cycle");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "option", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "wallet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "p", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Find");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](37, AdminComponent_div_37_Template, 21, 1, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](38, AdminComponent_div_38_Template, 21, 1, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](39, AdminComponent_div_39_Template, 14, 2, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](40, AdminComponent_div_40_Template, 11, 1, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](41, AdminComponent_div_41_Template, 11, 1, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](42, AdminComponent_div_42_Template, 35, 1, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.path);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.fundWalletTrigger);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.viewAllUser);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.viewAllWallet);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.viewAllCycle);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.viewWalletsInCycle);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.pathfinder);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLink"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_x"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"]], styles: [".getButtons[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n.admin[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  max-width: 650px;\n  height: 100%;\n  border: 15px solid brown;\n  box-shadow: 10px 10px black;\n  overflow-y: auto;\n  overflow-x: auto;\n}\n\n.path-container[_ngcontent-%COMP%] {\n  display: flex;\n  width: 100%;\n  height: 100%;\n  justify-content: center;\n  padding: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxhZG1pbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0FBQ0o7O0FBRUE7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSx3QkFBQTtFQUNBLDJCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQUNKOztBQUVBO0VBQ0ksYUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7RUFDQSxhQUFBO0FBQ0oiLCJmaWxlIjoiYWRtaW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZ2V0QnV0dG9ucyB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi5hZG1pbiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIG1heC13aWR0aDogNjUwcHg7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBib3JkZXI6IDE1cHggc29saWQgYnJvd247XHJcbiAgICBib3gtc2hhZG93OiAxMHB4IDEwcHggYmxhY2s7XHJcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xyXG4gICAgb3ZlcmZsb3cteDogYXV0bztcclxufVxyXG5cclxuLnBhdGgtY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyOyAgICBcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdminComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-admin',
                templateUrl: './admin.component.html',
                styleUrls: ['./admin.component.scss']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_2__["ProfileService"] }, { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }, { type: src_app_services_cycle_service__WEBPACK_IMPORTED_MODULE_4__["CycleService"] }, { type: src_app_services_wallet_service__WEBPACK_IMPORTED_MODULE_5__["WalletService"] }]; }, null); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _pages_cycle_cycle_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/cycle/cycle.component */ "y+fu");
/* harmony import */ var _pages_cycle_new_cycle_new_cycle_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/cycle/new-cycle/new-cycle.component */ "A4Ci");
/* harmony import */ var _pages_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/dashboard/dashboard.component */ "U5Cf");
/* harmony import */ var _pages_login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/login/login.component */ "D8EZ");
/* harmony import */ var _pages_signup_signup_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/signup/signup.component */ "o97b");
/* harmony import */ var _pages_wallet_fund_wallet_fund_wallet_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/wallet/fund-wallet/fund-wallet.component */ "TcIk");
/* harmony import */ var _pages_wallet_wallet_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/wallet/wallet.component */ "+nza");
/* harmony import */ var _pages_wallet_my_cycles_my_cycles_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/wallet/my-cycles/my-cycles.component */ "4/+/");
/* harmony import */ var _pages_welcome_welcome_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/welcome/welcome.component */ "+j1i");
/* harmony import */ var _pages_admin_admin_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pages/admin/admin.component */ "sS4B");
/* harmony import */ var _pages_wallet_withdraw_withdraw_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pages/wallet/withdraw/withdraw.component */ "1qfz");















const routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: _pages_login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"] },
    { path: 'signup', component: _pages_signup_signup_component__WEBPACK_IMPORTED_MODULE_6__["SignupComponent"] },
    { path: 'dashboard', component: _pages_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__["DashboardComponent"] },
    { path: 'wallet', component: _pages_wallet_wallet_component__WEBPACK_IMPORTED_MODULE_8__["WalletComponent"] },
    { path: 'cycle', component: _pages_cycle_cycle_component__WEBPACK_IMPORTED_MODULE_2__["CycleComponent"] },
    { path: 'cycle/:cycleId', component: _pages_cycle_cycle_component__WEBPACK_IMPORTED_MODULE_2__["CycleComponent"] },
    { path: 'new-cycle', component: _pages_cycle_new_cycle_new_cycle_component__WEBPACK_IMPORTED_MODULE_3__["NewCycleComponent"] },
    { path: 'welcome', component: _pages_welcome_welcome_component__WEBPACK_IMPORTED_MODULE_10__["WelcomeComponent"] },
    { path: 'wallet/:id', component: _pages_wallet_fund_wallet_fund_wallet_component__WEBPACK_IMPORTED_MODULE_7__["FundWalletComponent"] },
    { path: 'wallet/:id/withdraw', component: _pages_wallet_withdraw_withdraw_component__WEBPACK_IMPORTED_MODULE_12__["WithdrawComponent"] },
    { path: 'wallet/:id/my-cycles', component: _pages_wallet_my_cycles_my_cycles_component__WEBPACK_IMPORTED_MODULE_9__["MyCyclesComponent"] },
    { path: 'adminprivateaccess', component: _pages_admin_admin_component__WEBPACK_IMPORTED_MODULE_11__["AdminComponent"] }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "y+fu":
/*!************************************************!*\
  !*** ./src/app/pages/cycle/cycle.component.ts ***!
  \************************************************/
/*! exports provided: CycleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CycleComponent", function() { return CycleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/profile.service */ "Aso2");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/auth.service */ "lGQG");
/* harmony import */ var src_app_services_wallet_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/wallet.service */ "Fvwb");
/* harmony import */ var src_app_services_cycle_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/cycle.service */ "XUC1");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");








function CycleComponent_a_6_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CycleComponent_a_6_Template_p_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const cycle_r7 = ctx.$implicit; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.getDetails(cycle_r7._id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const cycle_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", cycle_r7.cycleAmount, "/", cycle_r7.frequency, "");
} }
function CycleComponent_div_21_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CycleComponent_div_21_Template_div_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const wallet_r10 = ctx.$implicit; const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r11.leaveCycle(wallet_r10._userId); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const wallet_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](wallet_r10._id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](wallet_r10.walletId);
} }
function CycleComponent_div_26_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const cycle_r14 = ctx.$implicit;
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", cycle_r14.cycleAmount, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", cycle_r14.cycleDuration, "/", cycle_r14.frequency, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r13.lengthOfWallets, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", cycle_r14.cycleStartDate, " ");
} }
function CycleComponent_div_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "The Value of Unit Contibution");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "For How Long? ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Number of Participating Wallets");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "This Cycle will commence on");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, CycleComponent_div_26_div_14_Template, 13, 5, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.cycleDetails);
} }
function CycleComponent_span_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "You have already joined this circle");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CycleComponent_span_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "INSUFFICIENT FUNDS ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "FUND YOUR WALLET NOW!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CycleComponent_span_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "WALLET FUNDING IN PROCESS... ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Please be Patient!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CycleComponent_div_30_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CycleComponent_div_30_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r15.joinCycle(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Join This Cycle. (NGN ", ctx_r6.costOfCycle, ") ");
} }
class CycleComponent {
    constructor(profileService, authService, walletService, cycleService, route, router) {
        this.profileService = profileService;
        this.authService = authService;
        this.walletService = walletService;
        this.cycleService = cycleService;
        this.route = route;
        this.router = router;
        this.wallets = [];
        this.costOfCycle = 0;
    }
    ngOnInit() {
        this.route.params.subscribe((params) => {
            this.cycles = params['cycleId'];
            this.cycleService.getCycleDetails(params.cycleId).subscribe((cycleDetails) => {
                this.cycles = cycleDetails;
            });
        });
        this.profileService.getUserDetails(this.authService.getUserId()).subscribe((profile) => {
            this.profile = profile;
            this.pendingTransactionExists = profile[0].pendingTransfer;
        });
        this.cycleService.getCycles().subscribe((cycles) => {
            this.cycles = cycles;
        });
    }
    logout() {
        this.authService.logout();
        this.router.navigate(['login']);
    }
    todashboard() {
        this.router.navigate(['dashboard']);
    }
    getDetails(str) {
        this.cycleId = str;
        this.wallets = [];
        this.alreadyJoined = false;
        this.insufficientFunds = false;
        this.cycleService.getCycleDetails(str).subscribe((cycleDetails) => {
            this.cycleDetails = cycleDetails;
            console.log(this.cycleDetails);
            this.walletService.getWallet().subscribe((wallet) => {
                this.lengthOfCycles = wallet[0].cycle.length;
                this.lengthOfWallet = cycleDetails[0].wallet.length;
                this.wallet = cycleDetails[0].wallet;
                console.log(cycleDetails);
                this.costOfCycle = (Number(cycleDetails[0].cycleAmount) * 4) * 0.05;
                for (let i = 0; i < this.lengthOfWallet; i++) {
                    if (this.wallet[i] !== null) {
                        this.wallets.push(this.wallet[i]);
                    }
                }
                if (this.wallets.length < 4) {
                    if (this.lengthOfCycles < 2) {
                        this.check = true;
                    }
                    else {
                        this.check = false;
                    }
                }
                else {
                    this.check = false;
                }
                this.lengthOfWallets = this.wallets.length;
                console.log(this.wallets);
                return this.wallet;
            });
        });
    }
    joinCycle() {
        if (this.pendingTransactionExists) {
            this.pendingTransfer = true;
            console.log('Insufficient Funds');
        }
        else {
            this.walletService.getWallet().subscribe((wallet) => {
                console.log(wallet[0]._id);
                console.log(this.wallets);
                if (wallet[0].walletAmount < this.costOfCycle) {
                    this.insufficientFunds = true;
                    console.log('Insufficient Funds');
                }
                else {
                    for (let i = 0; i < this.lengthOfWallet; i++) {
                        console.log('here');
                        if (wallet[i] == undefined) {
                            continue;
                        }
                        if (wallet[0]._id == this.wallets[i]._id) {
                            this.alreadyJoined = true;
                            break;
                        }
                    }
                    if (this.wallets.length === 0) {
                        this.cycleService.joinCycle(this.cycleId, { wallet: wallet[0] }).subscribe(() => {
                            this.walletService.updateWallet(wallet[0]._id + '/my-cycle', { cycle: this.cycleId }).subscribe(() => {
                                this.walletService.updateWallet(wallet[0]._id, { walletAmount: wallet[0].walletAmount - this.costOfCycle }).subscribe(() => {
                                    console.log('sufficient Funds');
                                    this.walletService.updateWallet(wallet[0]._id + '/transactions', {
                                        transactions: {
                                            transactionId: Math.random() * 1000 + 'crd',
                                            date: new Date(),
                                            depositAmount: Number(this.costOfCycle),
                                            action: 'DEBIT',
                                            holder: 'CYCLE',
                                            newBalance: wallet[0].walletAmount - this.costOfCycle
                                        }
                                    }).subscribe(() => {
                                        console.log('Data added successfully!');
                                        alert('joined Cycle Succesfully');
                                        this.router.navigate(['wallet']);
                                    });
                                });
                            });
                        });
                    }
                    else {
                        this.cycleService.joinCycle(this.cycleId, { wallet: wallet[0] }).subscribe(() => {
                            this.walletService.updateWallet(wallet[0]._id + '/my-cycle', { cycle: this.cycleId }).subscribe(() => {
                                this.walletService.updateWallet(wallet[0]._id, { walletAmount: wallet[0].walletAmount - this.costOfCycle }).subscribe(() => {
                                    this.walletService.updateWallet(wallet[0]._id + '/transactions', {
                                        transactions: {
                                            transactionId: Math.random() * 1000 + 'crd',
                                            date: new Date(),
                                            depositAmount: Number(this.costOfCycle),
                                            action: 'DEBIT',
                                            holder: 'CYCLE',
                                            newBalance: wallet[0].walletAmount - this.costOfCycle
                                        }
                                    }).subscribe(() => {
                                        console.log('else Data added successfully!');
                                        alert('joined Cycle Succesfully');
                                        this.router.navigate(['wallet']);
                                    });
                                });
                            });
                        });
                    }
                }
            });
        }
    }
    leaveCycle(userId) {
        this.walletService.getWallet().subscribe((wallet) => {
            //console.log(wallet[0]._id)
            if (wallet[0]._userId === userId) {
                this.cycleService.getCycleDetails(this.cycleId).subscribe((cycled) => {
                    let wallets = cycled[0].wallet;
                    let emptyRemovedArrayOfWallets = [];
                    for (let i = 0; i < this.lengthOfWallet; i++) {
                        if (wallets[i] !== null) {
                            emptyRemovedArrayOfWallets.push(wallets[i]);
                        }
                    }
                    console.log(emptyRemovedArrayOfWallets);
                    for (let i = 0; i < this.lengthOfWallet; i++) {
                        if (wallet[0]._id == emptyRemovedArrayOfWallets[i]._id) {
                            delete emptyRemovedArrayOfWallets[i];
                            console.log(emptyRemovedArrayOfWallets);
                            this.cycleService.joinCycle(cycled[0]._id + '/leave-cycle', { wallet: emptyRemovedArrayOfWallets }).subscribe(() => {
                                let cycle = wallet[0].cycle;
                                let cycleLength = wallet[0].cycle.length;
                                console.log(cycle);
                                for (let i = 0; i < cycleLength; i++) {
                                    if (cycled[0]._id == cycle[i]) {
                                        cycle.splice(i, 1);
                                        let newCycle;
                                        if (cycle == []) {
                                            console.log('here');
                                            newCycle = null;
                                        }
                                        else {
                                            newCycle = cycle.toString();
                                        }
                                        this.walletService.updateWallet(wallet[0]._id + '/remove-cycle', { cycle: newCycle }).subscribe(() => {
                                            alert('You have left the cycle Succesfully');
                                            this.router.navigate(['wallet']);
                                        });
                                    }
                                }
                            });
                        }
                    }
                });
            }
        });
    }
}
CycleComponent.ɵfac = function CycleComponent_Factory(t) { return new (t || CycleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_1__["ProfileService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_wallet_service__WEBPACK_IMPORTED_MODULE_3__["WalletService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_cycle_service__WEBPACK_IMPORTED_MODULE_4__["CycleService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"])); };
CycleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CycleComponent, selectors: [["app-cycle"]], decls: 31, vars: 7, consts: [[1, "centered-content"], [1, "container"], [1, "cycle-list", "has-background-white"], [1, "title", "has-text-primary"], [1, "list-menu"], ["class", "list-menu-item", "routerLinkActive", "is-active", 4, "ngFor", "ngForOf"], [1, "profile", "has-background-light"], [1, "top-bar"], [1, ""], [1, "navigation"], [1, "todashboard"], [3, "click"], [1, "logout"], [1, "profile-content"], ["class", "profile-tags", 4, "ngFor", "ngForOf"], [2, "padding-top", "20px"], ["class", "details", 4, "ngIf"], [4, "ngIf"], ["style", "color: red; padding-top: 5px;", 4, "ngIf"], ["class", "button", "class", "button is-primary has-text-white", 3, "click", 4, "ngIf"], ["routerLinkActive", "is-active", 1, "list-menu-item"], [1, "profile-tags"], [1, "card-content", 3, "click"], [1, "media"], [1, "media-left"], [1, "media-content"], [1, "title", "is-4"], [1, "subtitle", "is-6"], [1, "details"], [1, "leftpanel"], ["class", "rightpanel", 4, "ngFor", "ngForOf"], [1, "rightpanel"], [2, "color", "red", "padding-top", "5px"], ["routerLink", "/wallet"], [1, "button", "is-primary", "has-text-white", 3, "click"], ["type", "submit", 1, "control"]], template: function CycleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "CYCLES");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, CycleComponent_a_6_Template, 3, 2, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h1", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "CYCLE DETAILS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CycleComponent_Template_a_click_14_listener() { return ctx.todashboard(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Dashboard ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " | ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CycleComponent_Template_a_click_18_listener() { return ctx.logout(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " Logout ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, CycleComponent_div_21_Template, 9, 2, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "h1", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "MORE INFORMATION");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, CycleComponent_div_26_Template, 15, 1, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, CycleComponent_span_27_Template, 2, 0, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, CycleComponent_span_28_Template, 5, 0, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, CycleComponent_span_29_Template, 5, 0, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, CycleComponent_div_30_Template, 3, 1, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.cycles);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.wallets);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.lengthOfWallet);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.alreadyJoined);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.insufficientFunds);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.pendingTransfer);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.lengthOfWallet && ctx.check);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"]], styles: ["@import url(\"https://fonts.googleapis.com/css?family=Lato:400,700|Nunito:400,700\");\nhtml[_ngcontent-%COMP%] {\n  background: linear-gradient(to right top, #c6dd44, #e0bb13);\n}\nhtml[_ngcontent-%COMP%], body[_ngcontent-%COMP%] {\n  height: 100%;\n}\nhtml[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], body[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 150%;\n  margin-bottom: 5%;\n}\n.centered-content[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  height: 100%;\n}\n.title[_ngcontent-%COMP%] {\n  font-family: \"Lato\";\n  font-size: 20px;\n  text-transform: uppercase;\n  letter-spacing: 2.5px;\n}\n.modal-box[_ngcontent-%COMP%] {\n  min-height: 300px;\n  width: 100%;\n  max-width: 700px;\n  background: white;\n  border-radius: 5px;\n  padding: 35px;\n}\n.navigation[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 0%;\n  width: 20%;\n  height: 10%;\n  display: flex;\n  flex-direction: row;\n}\n.todashboard[_ngcontent-%COMP%]:hover   a[_ngcontent-%COMP%] {\n  color: red;\n  font-size: larger;\n}\n.logout[_ngcontent-%COMP%]:hover   a[_ngcontent-%COMP%] {\n  color: red;\n  font-size: larger;\n}\n@media only screen and (max-width: 720px) {\n  html[_ngcontent-%COMP%] {\n    background: whitesmoke;\n  }\n\n  .container[_ngcontent-%COMP%] {\n    height: 100%;\n  }\n\n  .profile[_ngcontent-%COMP%] {\n    height: 250%;\n    padding: 10% 5%;\n  }\n\n  .navigation[_ngcontent-%COMP%] {\n    right: 15%;\n    font-size: 2vh;\n  }\n\n  a[_ngcontent-%COMP%] {\n    color: red;\n  }\n\n  .profile-tags[_ngcontent-%COMP%] {\n    margin: 3% 0%;\n    font-size: 250%;\n    box-shadow: 0px 0px 10px 3.5px rgba(0, 0, 0, 0.2);\n  }\n\n  p[_ngcontent-%COMP%] {\n    font-size: 100%;\n  }\n}\n@media only screen and (max-width: 720px) {\n  .container[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n\n  .cycle-list[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    padding-top: 5%;\n    padding-left: 5%;\n    padding-right: 5%;\n  }\n\n  .list-menu[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: row;\n    flex-grow: 1;\n    font-size: 2vh;\n    flex-wrap: wrap;\n  }\n  .list-menu[_ngcontent-%COMP%]   .list-menu-item[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: center;\n    border-radius: 10vh;\n    margin-right: 4.2vh;\n    background-color: pink;\n    color: #5f5f5f;\n    margin-bottom: 2vh;\n    padding: 2vh;\n  }\n  .list-menu[_ngcontent-%COMP%]   .list-menu-item[_ngcontent-%COMP%]:hover {\n    background: #f1e7b6;\n  }\n  .list-menu[_ngcontent-%COMP%]   .list-menu-item.is-active[_ngcontent-%COMP%] {\n    background-color: #c6dd44;\n    color: #332b05;\n  }\n\n  .profile[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    padding: 32px;\n    box-shadow: 10px 10px 30px 10px rgba(0, 0, 0, 0.2);\n  }\n\n  .profile-content[_ngcontent-%COMP%] {\n    background: white;\n    padding: 20px 20px;\n    width: 100%;\n  }\n  .profile-content[_ngcontent-%COMP%]   .profile-tags[_ngcontent-%COMP%] {\n    border-radius: 5px;\n    justify-content: center;\n    align-items: center;\n    margin: 5px;\n    background: #c6dd44;\n  }\n  .profile-content[_ngcontent-%COMP%]   .profile-tags[_ngcontent-%COMP%]:hover {\n    box-shadow: 1.5px 1.5px #e0bb13;\n    transition: ease-in-out 0.2s;\n    cursor: pointer;\n  }\n\n  .navigation[_ngcontent-%COMP%] {\n    top: 2%;\n  }\n}\n@media only screen and (min-width: 720px) {\n  .container[_ngcontent-%COMP%] {\n    display: flex;\n    width: 100%;\n    height: 100%;\n    max-width: 1000px;\n    max-height: 680px;\n    justify-content: center;\n  }\n\n  .cycle-list[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    width: 190px;\n    background-color: white;\n    padding: 32px;\n    border-top-left-radius: 15px;\n    border-bottom-left-radius: 15px;\n    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);\n  }\n\n  .profile[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    border-top-right-radius: 15px;\n    border-bottom-right-radius: 15px;\n    padding: 32px;\n    width: 70%;\n    box-shadow: 10px 10px 30px 10px rgba(0, 0, 0, 0.2);\n  }\n  .profile[_ngcontent-%COMP%]   .top-bar[_ngcontent-%COMP%] {\n    margin-bottom: 20px;\n    display: flex;\n  }\n\n  .list-menu[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    margin-top: 10px;\n    flex-grow: 1;\n    font-size: 15px;\n  }\n  .list-menu[_ngcontent-%COMP%]   .list-menu-item[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: center;\n    border-radius: 5px;\n    width: 100%;\n    color: #5f5f5f;\n    margin-bottom: 2.5px;\n    padding: 7px;\n  }\n  .list-menu[_ngcontent-%COMP%]   .list-menu-item[_ngcontent-%COMP%]:hover {\n    background: #f1e7b6;\n  }\n  .list-menu[_ngcontent-%COMP%]   .list-menu-item.is-active[_ngcontent-%COMP%] {\n    background-color: #c6dd44;\n    color: #332b05;\n  }\n\n  .profile-content[_ngcontent-%COMP%] {\n    display: flex;\n    background: white;\n    padding: 20px 20px;\n    height: 40%;\n    width: 100%;\n    flex-flow: wrap;\n  }\n  .profile-content[_ngcontent-%COMP%]   .profile-tags[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: row;\n    border-radius: 5px;\n    justify-content: center;\n    align-items: center;\n    margin: 5px;\n    background: #c6dd44;\n    width: 45%;\n    height: 45%;\n    flex-grow: 1;\n    font-size: 35px;\n  }\n  .profile-content[_ngcontent-%COMP%]   .profile-tags[_ngcontent-%COMP%]:hover {\n    box-shadow: 1.5px 1.5px #e0bb13;\n    transition: ease-in-out 0.2s;\n    cursor: pointer;\n  }\n\n  .cycle-hero[_ngcontent-%COMP%] {\n    background: white;\n    padding: 15px 20px;\n    border-radius: 5px;\n    margin-top: 10px;\n  }\n\n  .details[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: row;\n    flex-grow: 1;\n    width: 100%;\n    box-shadow: 0 15px 13px snow;\n    overflow-x: auto;\n  }\n\n  .leftpanel[_ngcontent-%COMP%] {\n    display: inline-flex;\n    flex-direction: column;\n    width: 50%;\n    height: 100%;\n    font-size: 1.5rem;\n    font-weight: 400;\n  }\n\n  .rightpanel[_ngcontent-%COMP%] {\n    display: inline-flex;\n    flex-direction: column;\n    width: 50%;\n    height: 100%;\n    font-size: 1.5rem;\n    font-weight: 400;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxtYWluLXN0eWxlcy5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXGN5Y2xlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdRLGtGQUFBO0FBcUJSO0VBQ0ksMkRBQUE7QUN0Qko7QUR5QkE7O0VBRUksWUFBQTtBQ3RCSjtBRHdCSTs7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7QUNyQlI7QUR5QkE7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDdEJKO0FEMEJBO0VBQ0ksbUJBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7RUFDQSxxQkFBQTtBQ3ZCSjtBRDBCQTtFQUNJLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7QUN2Qko7QUQwQkE7RUFDSSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQ3ZCSjtBRDRCSTtFQUNJLFVBQUE7RUFDQSxpQkFBQTtBQ3pCUjtBRGdDSTtFQUNJLFVBQUE7RUFDQSxpQkFBQTtBQzdCUjtBRGtDQTtFQUNJO0lBQ0ksc0JBQUE7RUMvQk47O0VEa0NFO0lBQ0ksWUFBQTtFQy9CTjs7RURrQ0U7SUFDSSxZQUFBO0lBQ0EsZUFBQTtFQy9CTjs7RURrQ0U7SUFDSSxVQUFBO0lBQ0EsY0FBQTtFQy9CTjs7RURrQ0U7SUFDSSxVQUFBO0VDL0JOOztFRGtDRTtJQUVJLGFBQUE7SUFDQSxlQUFBO0lBQ0EsaURBQUE7RUNoQ047O0VEbUNFO0lBQ0ksZUFBQTtFQ2hDTjtBQUNGO0FBeEZBO0VBQ0k7SUFDSSxXQUFBO0VBMEZOOztFQXZGRTtJQUNJLGFBQUE7SUFDQSxzQkFBQTtJQUNBLGVBQUE7SUFDQSxnQkFBQTtJQUNBLGlCQUFBO0VBMEZOOztFQXZGRTtJQUNJLGFBQUE7SUFDQSxtQkFBQTtJQUNBLFlBQUE7SUFDQSxjQUFBO0lBQ0EsZUFBQTtFQTBGTjtFQXhGTTtJQUNJLGFBQUE7SUFDQSxtQkFBQTtJQUNBLG1CQUFBO0lBQ0EsbUJBQUE7SUFDQSxzQkFBQTtJQUNBLGNBQUE7SUFDQSxrQkFBQTtJQUNBLFlBQUE7RUEwRlY7RUF4RlU7SUFDSSxtQkR4QlI7RUNrSE47RUF2RlU7SUFDSSx5QkRoQ0Y7SUNpQ0UsY0Q1QkY7RUNxSFo7O0VBbkZFO0lBQ0ksYUFBQTtJQUNBLHNCQUFBO0lBQ0EsYUFBQTtJQUNBLGtEQUFBO0VBc0ZOOztFQW5GRTtJQUNJLGlCQUFBO0lBQ0Esa0JBQUE7SUFDQSxXQUFBO0VBc0ZOO0VBbkZNO0lBQ0ksa0JBQUE7SUFDQSx1QkFBQTtJQUNBLG1CQUFBO0lBQ0EsV0FBQTtJQUNBLG1CRHpERTtFQzhJWjtFQW5GVTtJQUNJLCtCQUFBO0lBQ0EsNEJBQUE7SUFDQSxlQUFBO0VBcUZkOztFQS9FRTtJQUNJLE9BQUE7RUFrRk47QUFDRjtBQS9FQTtFQUNJO0lBQ0ksYUFBQTtJQUNBLFdBQUE7SUFDQSxZQUFBO0lBQ0EsaUJBQUE7SUFDQSxpQkFBQTtJQUNBLHVCQUFBO0VBaUZOOztFQTlFRTtJQUNJLGFBQUE7SUFDQSxzQkFBQTtJQUNBLFlBQUE7SUFDQSx1QkFBQTtJQUNBLGFBQUE7SUFDQSw0QkFBQTtJQUNBLCtCQUFBO0lBQ0EsMENBQUE7RUFpRk47O0VBOUVFO0lBQ0ksYUFBQTtJQUNBLHNCQUFBO0lBQ0EsNkJBQUE7SUFDQSxnQ0FBQTtJQUNBLGFBQUE7SUFDQSxVQUFBO0lBQ0Esa0RBQUE7RUFpRk47RUEvRU07SUFDSSxtQkFBQTtJQUNBLGFBQUE7RUFpRlY7O0VBNUVFO0lBQ0ksYUFBQTtJQUNBLHNCQUFBO0lBQ0EsZ0JBQUE7SUFDQSxZQUFBO0lBQ0EsZUFBQTtFQStFTjtFQTdFTTtJQUNJLGFBQUE7SUFDQSxtQkFBQTtJQUNBLGtCQUFBO0lBQ0EsV0FBQTtJQUNBLGNBQUE7SUFDQSxvQkFBQTtJQUNBLFlBQUE7RUErRVY7RUE3RVU7SUFDSSxtQkQzSFI7RUMwTU47RUE1RVU7SUFDSSx5QkRuSUY7SUNvSUUsY0QvSEY7RUM2TVo7O0VBekVFO0lBQ0ksYUFBQTtJQUNBLGlCQUFBO0lBQ0Esa0JBQUE7SUFDQSxXQUFBO0lBQ0EsV0FBQTtJQUNBLGVBQUE7RUE0RU47RUF6RU07SUFDSSxhQUFBO0lBQ0EsbUJBQUE7SUFDQSxrQkFBQTtJQUNBLHVCQUFBO0lBQ0EsbUJBQUE7SUFDQSxXQUFBO0lBQ0EsbUJEekpFO0lDMEpGLFVBQUE7SUFDQSxXQUFBO0lBQ0EsWUFBQTtJQUNBLGVBQUE7RUEyRVY7RUF6RVU7SUFDSSwrQkFBQTtJQUNBLDRCQUFBO0lBQ0EsZUFBQTtFQTJFZDs7RUFwRUU7SUFDSSxpQkFBQTtJQUNBLGtCQUFBO0lBQ0Esa0JBQUE7SUFDQSxnQkFBQTtFQXVFTjs7RUFwRUU7SUFDSSxhQUFBO0lBQ0EsbUJBQUE7SUFDQSxZQUFBO0lBQ0EsV0FBQTtJQUNBLDRCQUFBO0lBQ0EsZ0JBQUE7RUF1RU47O0VBcEVFO0lBQ0ksb0JBQUE7SUFDQSxzQkFBQTtJQUNBLFVBQUE7SUFDQSxZQUFBO0lBQ0EsaUJBQUE7SUFDQSxnQkFBQTtFQXVFTjs7RUFwRUU7SUFDSSxvQkFBQTtJQUNBLHNCQUFBO0lBQ0EsVUFBQTtJQUNBLFlBQUE7SUFDQSxpQkFBQTtJQUNBLGdCQUFBO0VBdUVOO0FBQ0YiLCJmaWxlIjoiY3ljbGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvL1RoaXMgd2hlcmUgd2UgcHV0IGdsb2JhbCBzdHlsZXMgYW5kIGNoYW5nZSB2YXJpYWJsZSB2YWx1ZXNcclxuXHJcbi8vaW1wb3J0IGdvb2dsZSBmb250cy4gTGF0byBhbmQgTnVuaXRvXHJcbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9TGF0bzo0MDAsNzAwfE51bml0bzo0MDAsNzAwJyk7XHJcblxyXG4kZGVlcC15ZWxsb3c6ICNjNmRkNDQ7XHJcbiRvcmFuZ2U6ICNlMGJiMTM7XHJcblxyXG4kbGlnaHQtb3JhbmdlOiAjZTdkYjZlO1xyXG4kbGlnaHQ6ICNmMWU3YjY7XHJcbiRkYXJrLW9yYW5nZTogIzMzMmIwNTtcclxuXHJcbi8vIFVwZGF0ZSBCdWxtYSBnbG9iYWwgdmFyaWFibGVzXHJcbiRmYW1pbHktc2Fucy1zZXJpZjogXCJOdW5pdG9cIiwgc2Fucy1zZXJpZjtcclxuJHByaW1hcnk6ICRvcmFuZ2U7XHJcbiRsaW5rOiAkbGlnaHQtb3JhbmdlO1xyXG5cclxuLy9VcGRhdGUgc29tZSBCdWxtYSBjb21wb25lbnQgdmFyaWFibGVzXHJcbiRjb250b2wtYm9yZGVyLXdpZHRoOiAycHg7XHJcbiRpbnB1dC1ib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xyXG4kaW5wdXQtc2hhZG93OiBub25lO1xyXG5cclxuLy9zZXQgY3VzdG9tIGdsb2JhbCBzdHlsZXMgKHdpbGwgYmUgYXBsaWVkIHRvIHdob2xlIGFwcClcclxuXHJcbmh0bWwge1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0IHRvcCwgJGRlZXAteWVsbG93LCAkb3JhbmdlKTtcclxufVxyXG5cclxuaHRtbCxcclxuYm9keSB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcblxyXG4gICAgaDMge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTUwJTtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiA1JTtcclxuICAgIH1cclxufVxyXG5cclxuLmNlbnRlcmVkLWNvbnRlbnQge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG5cclxuLnRpdGxlIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnTGF0byc7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDIuNXB4O1xyXG59XHJcblxyXG4ubW9kYWwtYm94IHtcclxuICAgIG1pbi1oZWlnaHQ6IDMwMHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXgtd2lkdGg6IDcwMHB4O1xyXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBwYWRkaW5nOiAzNXB4O1xyXG59XHJcblxyXG4ubmF2aWdhdGlvbiB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICByaWdodDogMCU7XHJcbiAgICB3aWR0aDogMjAlO1xyXG4gICAgaGVpZ2h0OiAxMCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxufVxyXG5cclxuLnRvZGFzaGJvYXJkOmhvdmVyIHtcclxuXHJcbiAgICBhIHtcclxuICAgICAgICBjb2xvcjogcmVkO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogbGFyZ2VyO1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuLmxvZ291dDpob3ZlciB7XHJcblxyXG4gICAgYSB7XHJcbiAgICAgICAgY29sb3I6IHJlZDtcclxuICAgICAgICBmb250LXNpemU6IGxhcmdlcjtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzIwcHgpIHtcclxuICAgIGh0bWwge1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHdoaXRlc21va2U7XHJcbiAgICB9XHJcblxyXG4gICAgLmNvbnRhaW5lciB7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlXHJcbiAgICB9XHJcblxyXG4gICAgLnByb2ZpbGUge1xyXG4gICAgICAgIGhlaWdodDogMjUwJTtcclxuICAgICAgICBwYWRkaW5nOiAxMCUgNSU7XHJcbiAgICB9XHJcblxyXG4gICAgLm5hdmlnYXRpb24ge1xyXG4gICAgICAgIHJpZ2h0OiAxNSU7XHJcbiAgICAgICAgZm9udC1zaXplOiAydmg7XHJcbiAgICB9XHJcblxyXG4gICAgYSB7XHJcbiAgICAgICAgY29sb3I6IHJlZDtcclxuICAgIH1cclxuXHJcbiAgICAucHJvZmlsZS10YWdzIHtcclxuXHJcbiAgICAgICAgbWFyZ2luOiAzJSAwJTtcclxuICAgICAgICBmb250LXNpemU6IDI1MCU7XHJcbiAgICAgICAgYm94LXNoYWRvdzogMHB4IDBweCAxMHB4IDMuNXB4IHJnYigwIDAgMCAvIDIwJSk7XHJcbiAgICB9XHJcblxyXG4gICAgcCB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMDAlO1xyXG4gICAgfVxyXG59IiwiQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9TGF0bzo0MDAsNzAwfE51bml0bzo0MDAsNzAwXCIpO1xuaHRtbCB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCB0b3AsICNjNmRkNDQsICNlMGJiMTMpO1xufVxuXG5odG1sLFxuYm9keSB7XG4gIGhlaWdodDogMTAwJTtcbn1cbmh0bWwgaDMsXG5ib2R5IGgzIHtcbiAgZm9udC1zaXplOiAxNTAlO1xuICBtYXJnaW4tYm90dG9tOiA1JTtcbn1cblxuLmNlbnRlcmVkLWNvbnRlbnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLnRpdGxlIHtcbiAgZm9udC1mYW1pbHk6IFwiTGF0b1wiO1xuICBmb250LXNpemU6IDIwcHg7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGxldHRlci1zcGFjaW5nOiAyLjVweDtcbn1cblxuLm1vZGFsLWJveCB7XG4gIG1pbi1oZWlnaHQ6IDMwMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgbWF4LXdpZHRoOiA3MDBweDtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgcGFkZGluZzogMzVweDtcbn1cblxuLm5hdmlnYXRpb24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAwJTtcbiAgd2lkdGg6IDIwJTtcbiAgaGVpZ2h0OiAxMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG59XG5cbi50b2Rhc2hib2FyZDpob3ZlciBhIHtcbiAgY29sb3I6IHJlZDtcbiAgZm9udC1zaXplOiBsYXJnZXI7XG59XG5cbi5sb2dvdXQ6aG92ZXIgYSB7XG4gIGNvbG9yOiByZWQ7XG4gIGZvbnQtc2l6ZTogbGFyZ2VyO1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDcyMHB4KSB7XG4gIGh0bWwge1xuICAgIGJhY2tncm91bmQ6IHdoaXRlc21va2U7XG4gIH1cblxuICAuY29udGFpbmVyIHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gIH1cblxuICAucHJvZmlsZSB7XG4gICAgaGVpZ2h0OiAyNTAlO1xuICAgIHBhZGRpbmc6IDEwJSA1JTtcbiAgfVxuXG4gIC5uYXZpZ2F0aW9uIHtcbiAgICByaWdodDogMTUlO1xuICAgIGZvbnQtc2l6ZTogMnZoO1xuICB9XG5cbiAgYSB7XG4gICAgY29sb3I6IHJlZDtcbiAgfVxuXG4gIC5wcm9maWxlLXRhZ3Mge1xuICAgIG1hcmdpbjogMyUgMCU7XG4gICAgZm9udC1zaXplOiAyNTAlO1xuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMTBweCAzLjVweCByZ2JhKDAsIDAsIDAsIDAuMik7XG4gIH1cblxuICBwIHtcbiAgICBmb250LXNpemU6IDEwMCU7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzIwcHgpIHtcbiAgLmNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cblxuICAuY3ljbGUtbGlzdCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIHBhZGRpbmctdG9wOiA1JTtcbiAgICBwYWRkaW5nLWxlZnQ6IDUlO1xuICAgIHBhZGRpbmctcmlnaHQ6IDUlO1xuICB9XG5cbiAgLmxpc3QtbWVudSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGZsZXgtZ3JvdzogMTtcbiAgICBmb250LXNpemU6IDJ2aDtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gIH1cbiAgLmxpc3QtbWVudSAubGlzdC1tZW51LWl0ZW0ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBib3JkZXItcmFkaXVzOiAxMHZoO1xuICAgIG1hcmdpbi1yaWdodDogNC4ydmg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcGluaztcbiAgICBjb2xvcjogIzVmNWY1ZjtcbiAgICBtYXJnaW4tYm90dG9tOiAydmg7XG4gICAgcGFkZGluZzogMnZoO1xuICB9XG4gIC5saXN0LW1lbnUgLmxpc3QtbWVudS1pdGVtOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kOiAjZjFlN2I2O1xuICB9XG4gIC5saXN0LW1lbnUgLmxpc3QtbWVudS1pdGVtLmlzLWFjdGl2ZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2M2ZGQ0NDtcbiAgICBjb2xvcjogIzMzMmIwNTtcbiAgfVxuXG4gIC5wcm9maWxlIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgcGFkZGluZzogMzJweDtcbiAgICBib3gtc2hhZG93OiAxMHB4IDEwcHggMzBweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgfVxuXG4gIC5wcm9maWxlLWNvbnRlbnQge1xuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgIHBhZGRpbmc6IDIwcHggMjBweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuICAucHJvZmlsZS1jb250ZW50IC5wcm9maWxlLXRhZ3Mge1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIG1hcmdpbjogNXB4O1xuICAgIGJhY2tncm91bmQ6ICNjNmRkNDQ7XG4gIH1cbiAgLnByb2ZpbGUtY29udGVudCAucHJvZmlsZS10YWdzOmhvdmVyIHtcbiAgICBib3gtc2hhZG93OiAxLjVweCAxLjVweCAjZTBiYjEzO1xuICAgIHRyYW5zaXRpb246IGVhc2UtaW4tb3V0IDAuMnM7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG5cbiAgLm5hdmlnYXRpb24ge1xuICAgIHRvcDogMiU7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzIwcHgpIHtcbiAgLmNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgbWF4LXdpZHRoOiAxMDAwcHg7XG4gICAgbWF4LWhlaWdodDogNjgwcHg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIH1cblxuICAuY3ljbGUtbGlzdCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIHdpZHRoOiAxOTBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBwYWRkaW5nOiAzMnB4O1xuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDE1cHg7XG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTVweDtcbiAgICBib3gtc2hhZG93OiAwIDEwcHggMzBweCByZ2JhKDAsIDAsIDAsIDAuMik7XG4gIH1cblxuICAucHJvZmlsZSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxNXB4O1xuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxNXB4O1xuICAgIHBhZGRpbmc6IDMycHg7XG4gICAgd2lkdGg6IDcwJTtcbiAgICBib3gtc2hhZG93OiAxMHB4IDEwcHggMzBweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgfVxuICAucHJvZmlsZSAudG9wLWJhciB7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICB9XG5cbiAgLmxpc3QtbWVudSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgZmxleC1ncm93OiAxO1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgfVxuICAubGlzdC1tZW51IC5saXN0LW1lbnUtaXRlbSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBjb2xvcjogIzVmNWY1ZjtcbiAgICBtYXJnaW4tYm90dG9tOiAyLjVweDtcbiAgICBwYWRkaW5nOiA3cHg7XG4gIH1cbiAgLmxpc3QtbWVudSAubGlzdC1tZW51LWl0ZW06aG92ZXIge1xuICAgIGJhY2tncm91bmQ6ICNmMWU3YjY7XG4gIH1cbiAgLmxpc3QtbWVudSAubGlzdC1tZW51LWl0ZW0uaXMtYWN0aXZlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzZkZDQ0O1xuICAgIGNvbG9yOiAjMzMyYjA1O1xuICB9XG5cbiAgLnByb2ZpbGUtY29udGVudCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICBwYWRkaW5nOiAyMHB4IDIwcHg7XG4gICAgaGVpZ2h0OiA0MCU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZmxleC1mbG93OiB3cmFwO1xuICB9XG4gIC5wcm9maWxlLWNvbnRlbnQgLnByb2ZpbGUtdGFncyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIG1hcmdpbjogNXB4O1xuICAgIGJhY2tncm91bmQ6ICNjNmRkNDQ7XG4gICAgd2lkdGg6IDQ1JTtcbiAgICBoZWlnaHQ6IDQ1JTtcbiAgICBmbGV4LWdyb3c6IDE7XG4gICAgZm9udC1zaXplOiAzNXB4O1xuICB9XG4gIC5wcm9maWxlLWNvbnRlbnQgLnByb2ZpbGUtdGFnczpob3ZlciB7XG4gICAgYm94LXNoYWRvdzogMS41cHggMS41cHggI2UwYmIxMztcbiAgICB0cmFuc2l0aW9uOiBlYXNlLWluLW91dCAwLjJzO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxuXG4gIC5jeWNsZS1oZXJvIHtcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICBwYWRkaW5nOiAxNXB4IDIwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gIH1cblxuICAuZGV0YWlscyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGZsZXgtZ3JvdzogMTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBib3gtc2hhZG93OiAwIDE1cHggMTNweCBzbm93O1xuICAgIG92ZXJmbG93LXg6IGF1dG87XG4gIH1cblxuICAubGVmdHBhbmVsIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIHdpZHRoOiA1MCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIH1cblxuICAucmlnaHRwYW5lbCB7XG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICB3aWR0aDogNTAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICB9XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CycleComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-cycle',
                templateUrl: './cycle.component.html',
                styleUrls: ['./cycle.component.scss']
            }]
    }], function () { return [{ type: src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_1__["ProfileService"] }, { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }, { type: src_app_services_wallet_service__WEBPACK_IMPORTED_MODULE_3__["WalletService"] }, { type: src_app_services_cycle_service__WEBPACK_IMPORTED_MODULE_4__["CycleService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }]; }, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map