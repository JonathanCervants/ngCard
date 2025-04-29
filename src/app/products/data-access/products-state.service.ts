import { inject, Injectable } from "@angular/core";
import { Product } from "../interfaces/product.interface";
import { ProductsService } from "./products.service";

interface State{
  products: Product[]
  status: 'loading' | 'success' | 'error'
}

@Injectable()
export class ProductsStateService{
  private productService = inject(ProductsService)
  private initialState: State = {
    products : [],
    status:  'loading' as const
  }

  state = signalSlice({
    initialState = this.initialState,
    sources: [
      this.productService.getProducts().pipe(map())
    ]
  })
}

// 
// Se tiene que escalar usar api gateway
// Implementar sistemas resilientes.
// Monolitico -> Service Oriented -> Microservicios
// Dependiendo un fallo podría afectar toda la aplicación, 
// Comunicación de eventos, dependencia baja
// Controllers C# ajustar carga para el inicio 
// Jenkins: Pipelines, cypress, AudioListener
// IC: preparar un release de Software ASAP
// EC: automatizar el proceso de despliguege con interval. humana
// DC: automatizar el respliguege continuo sin hinter humana.
// Conceptos: Jobs.