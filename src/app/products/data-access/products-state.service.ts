import { inject, Injectable, signal } from "@angular/core";
import { Product } from "../interfaces/product.interface";
import {SignalSlice, signalSlice} from 'ngxtension/signal-slice';
import { catchError, map, observable, of, pipe, startWith, Subject, switchMap } from "rxjs";
import { ProductsService } from "./products.service";

interface ProductState{
  products : Product[]
  status : 'loading' | 'success' | 'error'
}
@Injectable({
  providedIn:'root'
})

export class ProductsStateService extends ProductsService {

  private dfd = inject(ProductsService)
  // computation: ()=> TSignal return Signal<T>
  private initialState : ProductState = {
    products: [],
    status :'loading' as const,
  };
  
  changePipe = new Subject<number>()
  // addPage(){
  //  page = page +5
    // this.page = this.page+5
    // console.log(this.productState.LIMIT=10)
    // console.log(this.productState.state());
  loadProducts = this.changePipe.pipe(
    startWith(1),
    switchMap((page)=> this.dfd.getProducts(page)),
    map((products)=>({products, status:'success' as const})),
    catchError(()=> {
      return of({
        products:[],
        status: 'error' as const
      })
    })
  )

  state = signalSlice({
    initialState: this.initialState,
    sources: [
      this.changePipe.pipe(
        map((page) => ({page, status:'loading' as const}))
      ),
      this.loadProducts
      ],
  });
}
  // productService = inject(ProductsService)
  
  
  // sourceList = this.productService.getProducts(pipe(map(
  //   {products = products , status as const }
  // )))



  // state = signalSlice({
  //   initialState: this.initialState,
  //   sources: this.productService.getProducts().pipe(map(
  //     {unkwon => (unknown), state as const}
  //   ))
  // })

  // ngOnInit():void{
  //   console.log(this.state().state)
  // }

  // loadChecklists$ = this.checklistsLoaded$.pipe(
  //   map((checklists) => ({ checklists, loaded: true })),
  // );
  
  


  // // productService = inject(ProductsService)

  // // //initialState: loadProducts$ : map<>
  // // loadProducts$ = 
  // // //inspirad in redux is for state and readonly
  // // state = signalSlice({
  // //   initialState: this.initialState,
  // //   sources:[
  // //     // this.loadProducts$
  // //   ]
  // // })
