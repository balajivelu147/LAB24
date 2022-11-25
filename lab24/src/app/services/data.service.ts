import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

 cartDataList:any=[];
 bookList = new BehaviorSubject<any>([])
  constructor(private http:HttpClient) { }
  
  public getBookList(){
    return this.http.get("https://bookcart.azurewebsites.net/api/book")
  }
  getProductData(){
    return this.bookList.asObservable();
  }
  
  addtoCart(product:any){
    this.cartDataList.push(product);
    this.bookList.next(this.cartDataList);
    console.log(this.cartDataList);
  }
}
