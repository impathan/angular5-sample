"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var input_component_1 = require("../pages/input-output/input.component");
var listing_component_1 = require("../pages/posts/listing.component");
var post_component_1 = require("../pages/posts/post.component");
exports.routes = [
    { path: '', component: input_component_1.InputComponent },
    { path: 'posts', component: listing_component_1.PostListingComponent },
    { path: 'posts/add', component: post_component_1.PostComponent },
    { path: 'posts/edit/:id', component: post_component_1.PostComponent }
];
exports.routing = router_1.RouterModule.forRoot(exports.routes);
//# sourceMappingURL=routing.js.map