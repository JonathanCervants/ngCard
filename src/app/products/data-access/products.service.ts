import { Inject, Injectable } from "@angular/core";
import { Product } from "../interfaces/product.interface";
import { BaseHttpService } from "../../services/base-http.service";
import { Observable } from "rxjs";
@Injectable(
 { providedIn: 'root',}

)
export class ProductsService extends BaseHttpService{
  getProducts(page:number) : Observable<Product[]>{
    return this.http.get<Product[]>(`${this.apiUrl}`);
  }

}