import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-detailpage',
  templateUrl: './detailpage.component.html',
  styleUrls: ['./detailpage.component.scss']
})

export class DetailpageComponent implements OnInit {

 
  url="https://bookcart.azurewebsites.net/Upload/"
  getbookid:  string | any;
  bookDetail:any;
  subscription!: Subscription;
  bookId: any;
  userId: any;
  
  constructor(private listservice:ProductService,private route:ActivatedRoute) { }

  ngOnInit(): void {
  this.route.params.subscribe(params=>{
  
  this.listservice.productcard()
  .subscribe((data:any) => {

    
    if(data&&data.length){
    this.bookDetail=data.find((it: { bookId: any; })=>it.bookId==params['id'])
    }
    });
    this.listservice.getbookid(params['id'])
      .subscribe((data:any) => {
        
        this.getbookid=data;
        
     
    });
  })
  
  }
  addToCart(){
    this.listservice.postToCart(this.userId, this.bookId).subscribe ((data : any) => {
     window.alert("Boook added to cart");
     console.log(data)
    })

  }

}

