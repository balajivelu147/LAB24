import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(private http: HttpClient) { }
  productcard(){ 
    let url= "https://bookcart.azurewebsites.net/api/Book"
    return this.http.get(url)
  }
 getbookid(id: any){
    let url1= "https://bookcart.azurewebsites.net/api/Book/GetSimilarBooks/"+id;
    return this.http.get(url1) 
  }

  postToCart(userId: number, id: number) {
    let url2 = "https://bookcart.azurewebsites.net/api/ShoppingCart/AddToCart/"+userId+id;
    return this.http.post(url2 + `addToCart/${userId}/${id}`, {})
  }
}