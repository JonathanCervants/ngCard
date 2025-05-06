import { Component, effect, input } from '@angular/core';

@Component({
  selector: 'app-product-detail',
  imports: [],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent {
  id = input.required<string>();
  constructor(){
    effect(()=>{
      console.log(this.id)
    })
  }
}
