import { Injectable } from "@angular/core";
import { Product } from "../interfaces/product.interface";



interface State{
  products: Product[]
  status: 'loading' | 'success' | 'error'
}

@Injectable()
export class ProductsStateService{
  
}