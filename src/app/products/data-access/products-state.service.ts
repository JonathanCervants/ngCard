import { Injectable, signal } from "@angular/core";
import { Product } from "../interfaces/product.interface";

interface State{
  products: Product[]
  status: 'loading' | 'success' | 'error',
  page:number
}

@Injectable()
export class ProductsStateService{
  private initialState: State = {
    products:[],
    status: 'loading' as const,
    page: 1,

  }

  state = signalSlice({})

  loadProducts = this.changePage$.pipe(

  )

  state = signalSlice({
    
  })
}