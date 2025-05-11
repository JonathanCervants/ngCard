import { Component, Inject, inject } from '@angular/core';
import { ProductsService } from '../../data-access/products.service';
import { Product } from '../../interfaces/product.interface';
import { ProductsStateService } from '../../data-access/products-state.service';
import { ProductCardComponent } from '../product-card/product-card.component';
import { Subject } from 'rxjs';


@Component({
  selector: 'app-products-list',
  imports: [ProductCardComponent],
  providers: [ProductsStateService],
  templateUrl: './products-list.component.html',
  styleUrl: './products-list.component.css'
})
export class ProductsListComponent {
  productState = inject(ProductsStateService) 
  
}

  const subject = new Subject<number>()
  subject.subscribe({
    next: (v) => console.log(`observer: ${v}`)
  })

  subject.subscribe({
    next:(v) => console.log('hello moto')
  })

  console.log(subject.subscribe())



// libro diario, cuentas contables, debe y haber
// If(Procesar programacion)
// Formula de cálculo de provisión, 
// Incremento,  
// Caso 01: Legal dice espera, esa provisión modificar por x motivo
// Entonces habilitar la funcionalidad Actualiza Provisión
// Impuesto a la renta 5% de cualquier alquiler.
// Todas las cashuisticas deben ser expuestas y controladas.
