import { Component } from "@angular/core";

@Component({
    selector: "app-root",
    templateUrl: "../../views/pages/input-output/input.html"
})
export class InputComponent {
    inputVariable: string = '';

    outputVariable: string = '';
    outputEvent(outputVariable) {
        this.outputVariable = outputVariable;
    }
}