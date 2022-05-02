import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { RouterModule } from '@angular/router';
import { HomeBlockModule } from 'src/app/views/home-block/home-block.module';



@NgModule({
  declarations: [
    HomePageComponent
  ],
  imports: [
    CommonModule,

    HomeBlockModule,

    RouterModule.forChild([
      {
        path: "",
        component: HomePageComponent,
      }
    ])
  ]
})
export class HomeModule { }
