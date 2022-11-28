import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { ProductService } from '../product.service';




@Component({
  selector: 'app-productcard',
  templateUrl: './productcard.component.html',
  styleUrls: ['./productcard.component.scss']
})
export class ProductcardComponent implements OnInit {
  
  productlist: any;
  selected=false;
  url="http://bookcart.azurewebsites.net/upload/"
  getbookid: any;

  constructor(private listservice:ProductService) { }

  ngOnInit(): void {
    this.listservice.productcard()
    .subscribe((data:any) => {this.productlist=data;
      
      console.log(this.productlist)
    });

    this.listservice.getbookid(1)
    .subscribe((data:any) => {this.getbookid=data;
      
      console.log(this.getbookid)
    });
 
   
  }


  toggleselected(data:any){
    data.selected=!data.selected;
    if(this.selected == true ){
      this.selected = false;
      Swal.fire(
        'item remove to your wishlist'
      )
      
    }else{
      this.selected = true;
      Swal.fire(
        'item added to your wishlist'
      )
      
    } 
  }
  show(){
    if(this.selected == false){
      this.selected = true;
      Swal.fire(
        'item added to your cart'
      )
      
    }else{
      this.selected = false;
      
    }
  }
}
