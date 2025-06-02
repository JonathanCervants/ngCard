import { Component, effect, inject, input } from '@angular/core';
import { ProductsDetailStateService } from '../../data-access/product-detail-state.service';
import { CurrencyPipe } from '@angular/common';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-product-detail',
  imports: [CurrencyPipe],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export  class ProductDetailComponent {
  // id = input.required<string>();
  // constructor(){
  //   effect(()=>{
  //     console.log(this.id)
  //   })
  // }
  productDetailState = inject(ProductsDetailStateService).state
  id = input.required<string>()

  constructor(){
    console.log(this.id)
    effect(()=>{
      this.productDetailState.getById(this.id())
    })
  }
}
