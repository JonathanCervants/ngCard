import { Routes } from '@angular/router';
import { ProductsListComponent } from '../ui/products-list/products-list.component';
import { ProductDetailComponent } from '../ui/product-detail/product-detail.component';
export default  [
    {
        path:'', loadComponent:()=>(ProductsListComponent),
    },
    {
        path:'product/{id}', loadComponent:()=>ProductDetailComponent

    }
] as Routes
