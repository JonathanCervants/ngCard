import { inject, Injectable, signal } from "@angular/core";
import { Product } from "../interfaces/product.interface";
import {signalSlice} from 'ngxtension/signal-slice';
import { map, startWith, Subject, switchMap } from "rxjs";
import { ProductsService } from "./products.service";

interface State{
  products: Product[]
  status: 'loading' | 'success' | 'error',
  page:number
}

@Injectable(
  
)
export class ProductsStateService{
  private productService = inject(ProductsService)
  private initialState: State = {
    products:[],
    status: 'loading' as const,
    page: 1
  };

  changePage$ = new Subject<number>();
  loadProducts$ = this.changePage$.pipe(
    startWith(1),
    switchMap((page) => this.productService.getProducts(page)),
    (map((products)=>({products, status:'success' as const}))),
    (map((products)=>({products, status:'error' as const}))),
    
  );

  state = signalSlice({
    initialState : this.initialState,
    sources:[
      this.changePage$.pipe(
        map((page)=> ({page,status:'loading' as const}))
      )
    ]
  });

}