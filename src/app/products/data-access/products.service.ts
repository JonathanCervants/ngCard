import { Inject, Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
@Injectable()
export class ProductsService{
  private http = Inject(HttpClient);
  getProducts(){
    return this.http.get('https://fakestoreapi.com/products');
  }
}