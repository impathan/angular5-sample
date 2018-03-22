import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LayoutComponent } from './pages/layout.component';
import { InputComponent } from './pages/input-output/input.component';
import { OutputComponent } from './pages/input-output/output.component';
import { routing } from './shared/routing';
import { FormsModule } from "@angular/forms"
import { HttpClientModule } from '@angular/common/http';

import { PostService } from './services/post.service';
import { PostListingComponent } from './pages/posts/listing.component';
import { PostComponent } from './pages/posts/post.component';

import { FilterPipe } from './shared/filter.pipe';

@NgModule({
    imports: [BrowserModule,
        routing,
        FormsModule,
        HttpClientModule,
    ],
    providers: [PostService],
    declarations: [LayoutComponent, InputComponent, OutputComponent, PostListingComponent, 
        PostComponent, FilterPipe],
    bootstrap: [LayoutComponent]
})
export class MainModule { }

