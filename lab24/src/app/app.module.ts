import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { WhishlistComponent } from './whishlist/whishlist.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BookcartComponent } from './bookcart/bookcart.component';
import { MyorderComponent } from './myorder/myorder.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule,ReactiveFormsModule} from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import {AutocompleteLibModule} from 'angular-ng-autocomplete';



@NgModule({
  declarations: [
    AppComponent,
    WhishlistComponent,
    ShoppingCartComponent,
    NavbarComponent,
    BookcartComponent,
    MyorderComponent,
    LoginComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,HttpClientModule,AutocompleteLibModule,
    FormsModule,ReactiveFormsModule,
    Ng2SearchPipeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
