import { Directive, ElementRef, HostListener, AfterViewInit, Input } from "@angular/core";
@Directive({
    selector: '[ngb-modal-draggable]'
})
export class NgbModalDraggable implements AfterViewInit {
    private modalElement: HTMLElement;
    private topStart: number;
    private leftStart: number;
    private md: boolean;
    private handleElement: HTMLElement;
    private rootLevel: number = 2;

    constructor(public element: ElementRef) {
    }

    ngAfterViewInit() {
        let element = this.element.nativeElement;
        for (let level = this.rootLevel; level > 0; level --) {
            element = element.parentNode;
        }

        this.modalElement = element;

        this.modalElement.style.position = 'relative';
        this.modalElement.className += ' cursor-draggable';
    }

    @HostListener('mousedown', ['$event'])
    onMouseDown(event: MouseEvent) {
        if (event.button === 2 || (this.handleElement && event.target !== this.handleElement))
            return; // prevents right click drag, remove this if you don't want it
        this.md = true;
        this.topStart = event.clientY - Number(this.modalElement.style.top.replace('px', ''));
        this.leftStart = event.clientX - Number(this.modalElement.style.left.replace('px', ''));
        event.preventDefault();
    }

    @HostListener('document:mouseup', ['$event'])
    onMouseUp(event: MouseEvent) {
        this.md = false;
    }

    @HostListener('document:mousemove', ['$event'])
    onMouseMove(event: MouseEvent) {
        //console.dir(event.target)
        if (this.md) {
            this.modalElement.style.top = (event.clientY - this.topStart) + 'px';
            this.modalElement.style.left = (event.clientX - this.leftStart) + 'px';
        }
    }

    @HostListener('document:mouseleave', ['$event'])
    onMouseLeave(event: MouseEvent) {
        this.md = false;
    }

    @Input() 
    set ngbModalDraggableHandle(handle: HTMLElement){
        this.handleElement = handle;
    }

    @Input()
    set ngbModalRootLevel(level: number) {
        this.rootLevel = level;
    }
}