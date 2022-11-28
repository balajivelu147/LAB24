import {  NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailpageComponent } from './detailpage/detailpage.component';
import { ProductcardComponent } from './productcard/productcard.component';

const routes: Routes = [  
  {
    path: 'move/:id' , component: DetailpageComponent
  },
  {
    path: '', component: ProductcardComponent
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
