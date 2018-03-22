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
var http_1 = require("@angular/common/http");
var of_1 = require("rxjs/observable/of");
var operators_1 = require("rxjs/operators");
var httpOptions = {
    headers: new http_1.HttpHeaders({ 'Content-Type': 'application/json' })
};
var PostService = (function () {
    function PostService(http) {
        this.http = http;
        this.postUrl = 'https://jsonplaceholder.typicode.com/'; // URL to web api
    }
    PostService.prototype.getPosts = function () {
        var _this = this;
        return this.http.get(this.postUrl + 'posts')
            .pipe(operators_1.tap(function (posts) { return _this.log("fetched posts"); }), operators_1.catchError(this.handleError('getPosts', [])));
    };
    PostService.prototype.getPost = function (id) {
        var _this = this;
        var url = this.postUrl + 'posts/' + id;
        return this.http.get(url)
            .pipe(operators_1.tap(function (posts) { return _this.log("fetched posts"); }), operators_1.catchError(this.handleError("getPost id=$(id}")));
    };
    PostService.prototype.addPost = function (post) {
        var _this = this;
        return this.http.post(this.postUrl + 'posts', post, httpOptions).pipe(operators_1.tap(function (post) { return _this.log("added post w/ id=" + post.id); }), operators_1.catchError(this.handleError('addPost')));
    };
    PostService.prototype.updatePost = function (post, postId) {
        var _this = this;
        return this.http.put(this.postUrl + 'posts/' + postId, post, httpOptions).pipe(operators_1.tap(function (post) { return _this.log("update post w/ id=" + post.id); }), operators_1.catchError(this.handleError('updatePost')));
    };
    PostService.prototype.deletePost = function (postId) {
        var _this = this;
        var id = postId;
        var url = this.postUrl + 'posts/' + id;
        return this.http.delete(url, httpOptions).pipe(operators_1.tap(function (_) { return _this.log("deleted post id=" + id); }), operators_1.catchError(this.handleError('deletePost')));
    };
    PostService.prototype.handleError = function (operation, result) {
        var _this = this;
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            _this.log(operation + " failed: " + error.message);
            // Let the app keep running by returning an empty result.
            return of_1.of(result);
        };
    };
    PostService.prototype.log = function (message) {
        // log your message
    };
    PostService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], PostService);
    return PostService;
}());
exports.PostService = PostService;
//# sourceMappingURL=post.service.js.map