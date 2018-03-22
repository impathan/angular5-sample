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
var post_service_1 = require("../../services/post.service");
var PostListingComponent = (function () {
    function PostListingComponent(postService) {
        this.postService = postService;
        this.posts = Array();
    }
    PostListingComponent.prototype.ngOnInit = function () {
        this.getPosts();
    };
    PostListingComponent.prototype.getPosts = function () {
        var _this = this;
        this.postService.getPosts()
            .subscribe(function (posts) { return _this.posts = posts; });
    };
    PostListingComponent.prototype.delete = function (postId) {
        this.posts = this.posts.filter(function (h) { return h.id !== postId; });
        this.postService.deletePost(postId).subscribe();
    };
    PostListingComponent = __decorate([
        core_1.Component({
            selector: "app-root",
            templateUrl: "../../views/pages/post/listing.html"
        }),
        __metadata("design:paramtypes", [post_service_1.PostService])
    ], PostListingComponent);
    return PostListingComponent;
}());
exports.PostListingComponent = PostListingComponent;
//# sourceMappingURL=listing.component.js.map