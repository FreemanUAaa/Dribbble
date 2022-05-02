import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderBlockComponent } from './blocks/header-block/header-block.component';
import { HeaderUiComponent } from './ui/header-ui/header-ui.component';



@NgModule({
  declarations: [
    HeaderBlockComponent,
    HeaderUiComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderBlockComponent,
  ]
})
export class HeaderModule { }
