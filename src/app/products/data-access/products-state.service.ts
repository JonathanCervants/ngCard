import { inject, Injectable, signal } from "@angular/core";
import { Product } from "../interfaces/product.interface";
import {SignalSlice, signalSlice} from 'ngxtension/signal-slice';
import { catchError, map, observable, of, pipe, startWith, Subject, switchMap } from "rxjs";
import { ProductsService } from "./products.service";

interface ProductState{
  status : 'loading' | 'success' | 'error'
  products : []
  state:any
}
@Injectable({
  providedIn:'root'
})
export class ProductsStateService extends ProductsService {
  
  // computation: ()=> TSignal
  initialState! : ProductState;
  productService = inject(ProductsService)
  sourceList = this.productService.getProducts(pipe(map(
    {products = products , status as const }
  )))
  
  state = signalSlice({
    initialState: this.initialState,
    sources:[this.sourceList]
  })

  ngOnInit():void{
    console.log(this.state().state)
  }

  loadChecklists$ = this.checklistsLoaded$.pipe(
    map((checklists) => ({ checklists, loaded: true })),
  );
  
  state = signalSlice({
    initialState: this.initialState,
    sources: [this.loadChecklists$],
  });
}


  // productService = inject(ProductsService)

  // //initialState: loadProducts$ : map<>
  // loadProducts$ = 
  // //inspirad in redux is for state and readonly
  // state = signalSlice({
  //   initialState: this.initialState,
  //   sources:[
  //     // this.loadProducts$
  //   ]
  // })
