import { Component, OnInit } from "@angular/core"
import { Post } from '../../models/post/post.model'
import { PostService } from '../../services/post.service';


import {Router,ActivatedRoute} from '@angular/router';

@Component({
    selector: "app-root",
    templateUrl: "../../views/pages/post/post.html",
    styles:['.no-padding{padding:0px;}']
})
export class PostComponent implements OnInit {

    post: Post;
    postTitle:string = 'Add New Post';
    postId: number = 0;
    constructor(private postService: PostService,
        private route: ActivatedRoute,
        private router: Router) { }

    ngOnInit() {
        this.post = new Post();

        this.postId = +this.route.snapshot.paramMap.get('id');
        if(this.postId!=0){
            this.getPost();
        }
    }

    getPost(): void {
         this.postService.getPost(this.postId)
           .subscribe(post => this.post = post);
    }

    savePost(): void {
        if(this.postId == 0){
        this.postService.addPost(this.post)
            .subscribe(post => {
                this.router.navigate(['/posts']);
            });
        }else{
            this.postService.updatePost(this.post, this.postId)
            .subscribe(post => {
                this.router.navigate(['/posts']);
            });            
        }
    }

}