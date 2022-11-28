import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private cart:DataService,private wish:DataService) { }
  cartItemNumber:number=0;
  wishItemNumber:number=0;
  ngOnInit(): void {
   
    this.cart.getProductData().subscribe(res=>{
      this.cartItemNumber=res.length;
    });
  }

}
