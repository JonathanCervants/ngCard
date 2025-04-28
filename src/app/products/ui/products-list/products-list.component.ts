import { Component, Inject, inject } from '@angular/core';
import { ProductsService } from '../../data-access/products.service';
import { Product } from '../../interfaces/product.interface';

@Component({
  selector: 'app-products-list',
  imports: [],
  providers: [ProductsService],
  templateUrl: './products-list.component.html',
  styleUrl: './products-list.component.css'
})
export class ProductsListComponent {
  private productData : any ;
  constructor( private productsService :ProductsService){
    productsService.getProducts().subscribe(
      console.log(this.productData)

    )
  }
  ngOnInit():void{
    
  }
}



// libro diario, cuentas contables, debe y haber

// If(Procesar programacion)

// Formula de cálculo de provisión, 


// Incremento,  

// Caso 01: Legal dice espera, esa provisión modificar por x motivo
// Entonces habilitar la funcionalidad Actualiza Provisión

// Impuesto a la renta 5% de cualquier alquiler.

// Todas las cashuisticas deben ser expuestas y controladas.
