import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PromotionalBannerBlockComponent } from './blocks/promotional-banner-block/promotional-banner-block.component';
import { PromotionalBannerUiComponent } from './ui/promotional-banner-ui/promotional-banner-ui.component';



@NgModule({
  declarations: [
    PromotionalBannerBlockComponent,
    PromotionalBannerUiComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PromotionalBannerBlockComponent
  ]
})
export class PromotionalBannerModule { }
