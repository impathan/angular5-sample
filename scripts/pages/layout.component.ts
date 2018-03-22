import { Component, OnInit, OnChanges } from "@angular/core"

@Component({
    selector: "app-root",
    templateUrl: "../views/pages/layout.html"
})

export class LayoutComponent implements OnInit, OnChanges {
    websiteTitle: string = "Angular 5";

    description: string = "Welcome to the Angular 5 Simple Application";

    name: string = "";

    constructor() {
        console.log("Constructor fired");
    }
    ngOnInit() {
        console.log("On init"); 
    }
    ngAfterContentInit() {
        console.log("After content init");
    }
    ngAfterViewInit() {
        console.log("After view init"); 
    }
    ngDoCheck() {
        console.log("Do Check");
    }
    ngAfterContentChecked() {
        console.log("After content Checked");
    }
    ngAfterViewChecked() {
        console.log("After View  Checked");
    }
    ngOnChanges() {
        console.log("On changes fired");
    }
}