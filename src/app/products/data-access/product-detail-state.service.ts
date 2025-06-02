import { inject, Injectable, signal } from "@angular/core";
import { Product } from "../interfaces/product.interface";
import {SignalSlice, signalSlice} from 'ngxtension/signal-slice';
import { catchError, map, Observable, observable, of, pipe, startWith, Subject, switchMap } from "rxjs";
import { ProductsService } from "./products.service";

interface ProductState{
  product : Product | null,
  status : 'loading' | 'success' | 'error'
}
@Injectable({
  providedIn:'root'
})
export class ProductsDetailStateService  {
  
  private productService = inject(ProductsService)
  private initialState : ProductState = {
    product: null,  
    status :'loading' as const,
  };
  // computation: ()=> TSignal return Signal<T>
  state = signalSlice({
    initialState: this.initialState,
    actionSources: {
      getById: (_state, action$: Observable<string>)=>action$.pipe(
          switchMap((id)=> this.productService.getProduct(id)),
          map(data => ({ product:data, status:'success' as const}))
      )}
  })
}
