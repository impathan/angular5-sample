import { Component, Input, Output, EventEmitter } from "@angular/core"

@Component({
    selector: "output-component",
    templateUrl: "../../views/pages/input-output/output.html"
})
export class OutputComponent {

    outputVariable: string = "";

    @Input()
    inputVariable: string = '';

    @Output("output")
    output: EventEmitter<Object> = new EventEmitter<Object>();

    outputEvent() {
        this.output.emit(this.outputVariable);
    }
}