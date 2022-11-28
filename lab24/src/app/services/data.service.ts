import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

 cartDataList:any=[];
 wishDataList:any=[];
 bookList = new BehaviorSubject<any>([])
  constructor(private http:HttpClient) { }

  /**------------------------for drop down --------------------------------------- */
  
  /**-------------------------------to get the booklist---------------------------- */
  public getBookList(){
    return this.http.get("https://bookcart.azurewebsites.net/api/book");
  }
  /**------------------------------------------------------------------------------ */
  getProductData(){
    return this.bookList.asObservable();
  }
  /**-------------------------------add to cart-------------------------------------- */
  addtoCart(product:any){
    this.cartDataList.push(product);
    this.bookList.next(this.cartDataList);
    console.log(this.cartDataList);
  }
  /**---------------------------------wishlist---------------------------------------- */
  
}
