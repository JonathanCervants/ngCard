import { Inject, Injectable } from "@angular/core";
import { Product } from "../interfaces/product.interface";
import { BaseHttpService } from "../../services/base-http.service";
import { Observable } from "rxjs";
@Injectable(
 { providedIn: 'root',}
)
export class ProductsService extends BaseHttpService{
  LIMIT:number = 5;
  getProducts(page:number) : Observable<Product[]>{
    return this.http.get<Product[]>(`${this.apiUrl}`)
  }
}

// http.get('/images/dog.jpg', {responseType: 'arraybuffer'}).subscribe(buffer => {
//   console.log('The image is ' + buffer.byteLength + ' bytes large');
// });