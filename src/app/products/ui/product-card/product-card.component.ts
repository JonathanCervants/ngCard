import { Component, Input } from '@angular/core';
import { Product } from '../../interfaces/product.interface';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-product-card',
  imports: [RouterLink],
  templateUrl: './product-card.component.html',
  styles: ``
})
export class ProductCardComponent {
  @Input()
  product!: Product;
}

// 11 08 63