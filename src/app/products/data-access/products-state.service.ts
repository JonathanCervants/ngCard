import { inject, Injectable, signal } from "@angular/core";
import { Product } from "../interfaces/product.interface";
import {signalSlice} from 'ngxtension/signal-slice';
import { catchError, map, observable, of, startWith, Subject, switchMap } from "rxjs";
import { ProductsService } from "./products.service";

interface ProductState{
  status : 'loading' | 'success' | 'error'
  products : []
  state:any
}

  const subject = new Subject<number>()
  subject.subscribe({
    next: (v) => console.log(`observer: ${v}`)
  })

  subject.subscribe({
    next:(v) => console.log('hello moto')
  })

  subject.subscribe

  export class ProductsStateService extends ProductsService{

  // CheckListState: Subject<any>  
  private initialState ={
    checklist: [],
    loaded:false,
    error: null
  } 
  state = signalSlice({
    initialState: this.initialState
  })
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
}