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
var post_model_1 = require("../../models/post/post.model");
var post_service_1 = require("../../services/post.service");
var router_1 = require("@angular/router");
var PostComponent = (function () {
    function PostComponent(postService, route, router) {
        this.postService = postService;
        this.route = route;
        this.router = router;
        this.postTitle = 'Add New Post';
        this.postId = 0;
    }
    PostComponent.prototype.ngOnInit = function () {
        this.post = new post_model_1.Post();
        this.postId = +this.route.snapshot.paramMap.get('id');
        if (this.postId != 0) {
            this.getPost();
        }
    };
    PostComponent.prototype.getPost = function () {
        var _this = this;
        this.postService.getPost(this.postId)
            .subscribe(function (post) { return _this.post = post; });
    };
    PostComponent.prototype.savePost = function () {
        var _this = this;
        if (this.postId == 0) {
            this.postService.addPost(this.post)
                .subscribe(function (post) {
                _this.router.navigate(['/posts']);
            });
        }
        else {
            this.postService.updatePost(this.post, this.postId)
                .subscribe(function (post) {
                _this.router.navigate(['/posts']);
            });
        }
    };
    PostComponent = __decorate([
        core_1.Component({
            selector: "app-root",
            templateUrl: "../../views/pages/post/post.html",
            styles: ['.no-padding{padding:0px;}']
        }),
        __metadata("design:paramtypes", [post_service_1.PostService,
            router_1.ActivatedRoute,
            router_1.Router])
    ], PostComponent);
    return PostComponent;
}());
exports.PostComponent = PostComponent;
//# sourceMappingURL=post.component.js.map