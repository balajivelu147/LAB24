import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { BookcartComponent } from './bookcart/bookcart.component';
import { LoginComponent } from './login/login.component';
import { MyorderComponent } from './myorder/myorder.component';

import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { WhishlistComponent } from './whishlist/whishlist.component';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'bookcart',component:BookcartComponent},
  {path:'wishlist',component:WhishlistComponent},
  {path:'shopping-cart',component:ShoppingCartComponent},
  {path:'myorder',component:MyorderComponent  },
  {path:'login',component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
