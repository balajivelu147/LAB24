import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith} from 'rxjs/operators'

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
/**-------------------------------------------home page---------------------------------------- */
  ngOnInit(): void {
    this.api.getBookList().subscribe((result:any)=>{
      this.bookList=result;
    },
   (error:any)=>{
    console.log("Something went wrong...")
   });

  }
 
  /*---------------------------------------------For Search-------------------------------------*/
  public Search(){
    if(this.title == "" ){
      this.ngOnInit();
    }else{
      this.bookList=this.bookList.filter((res:any)=>{
        return res.title.toLocaleLowerCase().match(this.title.toLocaleLowerCase())
      
      });
    } }
    
/**-------------------------------add to cart------------------------------------------------------- */
public addtoCart(item:any){
  this.api.addtoCart(item);
}
/**-----------------------------------dropdown---------------------------------------------- */
  
/**------------------------------close button inside search inside nav------------------------------------------- */
onSearchButton(){
  this.title = "";
  this.Search();
}    

}



