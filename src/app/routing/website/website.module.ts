import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: "",
        loadChildren: () => import("./routing/home/home.module")
          .then((module) => module.HomeModule),
      }
    ])
  ]
})
export class WebsiteModule { }
