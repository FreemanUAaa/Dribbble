import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeBlockComponent } from './blocks/home-block/home-block.component';
import { HomeUiComponent } from './ui/home-ui/home-ui.component';
import { HeaderModule } from 'src/app/components/header/header.module';
import { PromotionalBannerModule } from 'src/app/components/promotional-banner/promotional-banner.module';



@NgModule({
  declarations: [
    HomeBlockComponent,
    HomeUiComponent
  ],
  imports: [
    CommonModule,

    HeaderModule,

    PromotionalBannerModule,
  ],
  exports: [
    HomeBlockComponent
  ]
})
export class HomeBlockModule { }
