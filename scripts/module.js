"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var layout_component_1 = require("./pages/layout.component");
var input_component_1 = require("./pages/input-output/input.component");
var output_component_1 = require("./pages/input-output/output.component");
var routing_1 = require("./shared/routing");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/common/http");
var post_service_1 = require("./services/post.service");
var listing_component_1 = require("./pages/posts/listing.component");
var post_component_1 = require("./pages/posts/post.component");
var filter_pipe_1 = require("./shared/filter.pipe");
var MainModule = (function () {
    function MainModule() {
    }
    MainModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule,
                routing_1.routing,
                forms_1.FormsModule,
                http_1.HttpClientModule,
            ],
            providers: [post_service_1.PostService],
            declarations: [layout_component_1.LayoutComponent, input_component_1.InputComponent, output_component_1.OutputComponent, listing_component_1.PostListingComponent,
                post_component_1.PostComponent, filter_pipe_1.FilterPipe],
            bootstrap: [layout_component_1.LayoutComponent]
        })
    ], MainModule);
    return MainModule;
}());
exports.MainModule = MainModule;
//# sourceMappingURL=module.js.map