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
    return this.http.get<Product[]>(`${this.apiUrl}`,{
      params:{limit:this.LIMIT * page}
    })
  }

  getProduct(id:string) : Observable<Product>{
    return this.http.get<Product>(`${this.apiUrl}/${id}`)
  }

}
// http.get('/images/dog.jpg', {responseType: 'arraybuffer'}).subscribe(buffer => {
//   console.log('The image is ' + buffer.byteLength + ' bytes large');
// });

// # _FullyTax.ps1_
// # Possible values: 'Minor', 'Adult', 'Senior Citizen'
// $Status = 'Minor'
// If ($Status -eq 'Minor') 
// {
//   Write-Host $False
// } ElseIf ($Status -eq 'Adult') {
//   Write-Host $True
// } Else {
//   Write-Host $False
// }
