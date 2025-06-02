import { Component, Inject, Injector, Signal, WritableSignal, computed, effect, inject, signal } from '@angular/core';
import { ProductsStateService } from '../../data-access/products-state.service';
import { ProductCardComponent } from '../product-card/product-card.component';

@Component({
  selector: 'app-products-list',
  imports: [ProductCardComponent],
  providers: [ProductsStateService],
  templateUrl: './products-list.component.html',
  styleUrl: './products-list.component.css'
})

export class ProductsListComponent {
  page:number = 1 
  productState = inject(ProductsStateService) 
    // readonly count = signal(0)
    // private inject = inject(Injector)
    // initializeLogng (): void{
    //   effect(()=>{
    //    console.log(this.count())
    //   },
    //   {injector: this.inject}
    // )
    // }   
    constructor(){      
      console.log(this.productState.state())
      console.log("Genesis")
    } 
    addPage(){
      this.productState.changePipe.next(2)
      // this.page = this.page+5  
      // console.log(this.productState.LIMIT=10)
      // console.log(this.productState.state());
    }
  }
// const num :WritableSignal<number> = signal(0)
// // Increment the count by 1.
// num.update(value => value + 4);3
// console.log(num())
// const doubleCount: Signal<number> = computed(() => num() * 85858585);
// console.log(doubleCount())
// const señal = signal(true)
// if(!señal()){
//   console.error("wwwaaaaa")
// }
// console.log(doubleCount())
  // const subject = new Subject<number>()
  // subject.subscribe({
  //   next: (v) => console.log(`observer: ${v}`)
  // })

  // subject.subscribe({
  //   next:(v) => console.log('hello moto')
  // })

  // console.log(subject.subscribe)
// libro diario, cuentas contables, debe y haber
// If(Procesar programacion)
// Formula de cálculo de provisión, 
// Incremento,  
// Caso 01: Legal dice espera, esa provisión modificar por x motivo
// Entonces habilitar la funcionalidad Actualiza Provisión
// Impuesto a la renta 5% de cualquier alquiler.
// Todas las cashuisticas deben ser expuestas y controladas.
