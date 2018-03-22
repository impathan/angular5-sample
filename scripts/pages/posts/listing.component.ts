import { Component, OnInit } from "@angular/core"
import { Post } from '../../models/post/post.model'
import { PostService } from '../../services/post.service';

@Component({
    selector: "app-root",
    templateUrl: "../../views/pages/post/listing.html"
})
export class PostListingComponent implements OnInit {

    posts: Post[] = Array<Post>();

    constructor(private postService: PostService) { }

    ngOnInit() {
        this.getPosts();
    }

    getPosts(): void {
        this.postService.getPosts()
            .subscribe(posts => this.posts = posts);
    }


    delete(postId: number): void {
        this.posts = this.posts.filter(h => h.id !== postId);
        this.postService.deletePost(postId).subscribe();
    }
}