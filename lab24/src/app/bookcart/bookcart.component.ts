import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-bookcart',
  templateUrl: './bookcart.component.html',
  styleUrls: ['./bookcart.component.scss']
})
export class BookcartComponent implements OnInit {

  constructor(private api:DataService) { }

 
  public bookList:any=[];
   author:any;
   title:any;

  ngOnInit(): void {
    this.api.getBookList().subscribe((result:any)=>{
      this.bookList=result;
      this.bookList.forEach((a:any)=>{
        Object.assign(a,{quantity:1,total:a.price})
      })
    },
   (error:any)=>{
    console.log("Something went wrong...")
   });

  }
  /*--------------------For Search-------------------------------*/
  public Search(){
    if(this.author == "" ){
      this.ngOnInit();
    }else{
      this.bookList=this.bookList.filter((res:any)=>{
        return res.author.toLocaleLowerCase().match(this.author.toLocaleLowerCase())
      
      });
    } }
    
/**-------------------------------add to cart------------------------------------------------------- */
public addtoCart(item:any){
  this.api.addtoCart(item);
}
/**------------------------------search in nav------------------------------------------- */
onSearchButton(){
  this.author = "";
  this.Search();
}    

}



