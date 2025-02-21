import {
    Directive,
    EmbeddedViewRef,
    Input,
    OnChanges,
    TemplateRef,
    ViewContainerRef,
} from '@angular/core';

@Directive({
    selector: '[ngFor][ngForOf][ngForElse],[ngFor][ngForOf][ngForEmpty]',
})
export class TuiForDirective implements OnChanges {
    private ref?: EmbeddedViewRef<{}>;

    @Input()
    ngForOf: unknown[] | null = [];

    @Input()
    ngForElse?: TemplateRef<{}>;

    @Input()
    ngForEmpty?: TemplateRef<{}>;

    constructor(private readonly vcr: ViewContainerRef) {}

    ngOnChanges() {
        this.ref?.destroy();

        if (this.ngForOf?.length === 0 && this.ngForEmpty) {
            this.ref = this.vcr.createEmbeddedView(this.ngForEmpty);
        } else if (!this.ngForOf && this.ngForElse) {
            this.ref = this.vcr.createEmbeddedView(this.ngForElse);
        }
    }
}
