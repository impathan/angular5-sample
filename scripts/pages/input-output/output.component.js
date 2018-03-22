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
var OutputComponent = (function () {
    function OutputComponent() {
        this.outputVariable = "";
        this.inputVariable = '';
        this.output = new core_1.EventEmitter();
    }
    OutputComponent.prototype.outputEvent = function () {
        this.output.emit(this.outputVariable);
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], OutputComponent.prototype, "inputVariable", void 0);
    __decorate([
        core_1.Output("output"),
        __metadata("design:type", core_1.EventEmitter)
    ], OutputComponent.prototype, "output", void 0);
    OutputComponent = __decorate([
        core_1.Component({
            selector: "output-component",
            templateUrl: "../../views/pages/input-output/output.html"
        })
    ], OutputComponent);
    return OutputComponent;
}());
exports.OutputComponent = OutputComponent;
//# sourceMappingURL=output.component.js.map