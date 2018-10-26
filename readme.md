### NgbModalDraggable

Angular Directive used for make ngbModal draggable

### Install

```
npm i ngb-modal-draggable --save
```

### How to use

First import NgbModalDraggableModule in your modules

```
import { NgModule } from '@angular/core';
import { NgbModalDraggableModule } from 'ngb-modal-draggable'

@NgModule({
    imports: [
        ....

        NgbModalDraggableModule
    ],
    ...
})
```

Then just use in your modal component html

```
<div ngb-modal-draggable [ngbModalDraggableHandle]="draggableHandle">
  <div #draggableHandle class="modal-header">
    <h4 class="modal-title" id="modal-basic-title">Profile update</h4>
    <button type="button" class="close" aria-label="Close" (click)="modal.dismiss('Cross click')">
      <span aria-hidden="true">&times;</span>
    </button>
  </div>
  ...
</div>
```

### Properties

| Input | Type | Default | Description |
| ------ | ------ | ------ | ------ |
| ngbModalDraggableHandle | HTMLElement | null | Use template variable to refer to the handle element. Then only the handle element is draggable |
| ngbModalRootLevel | number | 2 | Set the root level from current element which set the directive. If you set the directive on the root element of the NgbModal component, the true root level would be 2 as the NgbModalService would add two parent element automatically |


