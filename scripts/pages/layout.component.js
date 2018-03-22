"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var LayoutComponent = (function () {
    function LayoutComponent() {
        this.websiteTitle = "Angular 5";
        this.description = "Welcome to the Angular 5 Simple Application";
        this.name = "";
        console.log("Constructor fired");
    }
    LayoutComponent.prototype.ngOnInit = function () {
        console.log("On init");
    };
    LayoutComponent.prototype.ngAfterContentInit = function () {
        console.log("After content init");
    };
    LayoutComponent.prototype.ngAfterViewInit = function () {
        console.log("After view init");
    };
    LayoutComponent.prototype.ngDoCheck = function () {
        console.log("Do Check");
    };
    LayoutComponent.prototype.ngAfterContentChecked = function () {
        console.log("After content Checked");
    };
    LayoutComponent.prototype.ngAfterViewChecked = function () {
        console.log("After View  Checked");
    };
    LayoutComponent.prototype.ngOnChanges = function () {
        console.log("On changes fired");
    };
    LayoutComponent = __decorate([
        core_1.Component({
            selector: "app-root",
            templateUrl: "../views/pages/layout.html"
        }),
        __metadata("design:paramtypes", [])
    ], LayoutComponent);
    return LayoutComponent;
}());
exports.LayoutComponent = LayoutComponent;
//# sourceMappingURL=layout.component.js.map