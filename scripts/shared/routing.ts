import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InputComponent } from '../pages/input-output/input.component';
import { PostListingComponent } from '../pages/posts/listing.component';
import { PostComponent } from '../pages/posts/post.component';

export const routes: Routes = [ 
    { path: '', component: InputComponent },
    { path: 'posts', component: PostListingComponent },
    { path: 'posts/add', component: PostComponent },
    { path: 'posts/edit/:id', component: PostComponent }
];
 
export const routing: ModuleWithProviders = RouterModule.forRoot(routes);