import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

import { Post } from '../models/post/post.model';
import { COMPOSITION_BUFFER_MODE } from '@angular/forms';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class PostService {

    private postUrl = 'https://jsonplaceholder.typicode.com/';  // URL to web api

    constructor(private http: HttpClient) { }

    getPosts(): Observable<Post[]> {
        return this.http.get<Post[]>(this.postUrl + 'posts')
            .pipe(
                tap(posts => this.log(`fetched posts`)),
                catchError(this.handleError('getPosts', []))
            );
    }

    getPost(id: number): Observable<Post> {
        var url = this.postUrl + 'posts/' + id;
        return this.http.get<Post>(url)
            .pipe(
                tap(posts => this.log(`fetched posts`)),
                catchError(this.handleError<Post>(`getPost id=$(id}`))
            );
    }

    addPost(post: Post): Observable<Post> {
        return this.http.post<Post>(this.postUrl + 'posts', post, httpOptions).pipe(
            tap((post: Post) => this.log(`added post w/ id=${post.id}`)),
            catchError(this.handleError<Post>('addPost'))
        );
    }

    updatePost(post: Post, postId: number): Observable<Post> {
        return this.http.put<Post>(this.postUrl + 'posts/' + postId, post, httpOptions).pipe(
            tap((post: Post) => this.log(`update post w/ id=${post.id}`)),
            catchError(this.handleError<Post>('updatePost'))
        );
    }

    deletePost(postId: number): Observable<Post> {
        const id = postId;
        const url = this.postUrl + 'posts/' + id;
        return this.http.delete<Post>(url, httpOptions).pipe(
            tap(_ => this.log(`deleted post id=${id}`)),
            catchError(this.handleError<Post>('deletePost'))
        );
    }

    private handleError<T>(operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {
            this.log(`${operation} failed: ${error.message}`);
            // Let the app keep running by returning an empty result.
            return of(result as T);
        };
    }
    private log(message: string) {
        // log your message
    }
}
