import { Inject, Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Product } from "../interfaces/product.interface";
import { BaseHttpService } from "../../services/base-http.service";
import { Observable } from "rxjs";
@Injectable()
export class ProductsService extends BaseHttpService{
  getProducts():Observable<Product[]>{
    return this.http.get<any>(`${this.apiUrl}`);
  }

  // getProduct(id:number){
  //   return this.http.get<Product>(`${this.apiUrl}/products/${id}`);
  // }
}