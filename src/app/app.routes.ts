import { Routes } from '@angular/router';
import  LayoutComponent  from './ui/layout/layout.component';
import { DashboardComponent } from './ui/dashboard/dashboard.component';
import { LoginComponent } from './auth/login/login.component';
import { PlayerComponent } from './player/player.component';
import { ComprobanteComponent } from './comprobante/comprobante.component';
import { ProductsListComponent } from './products/ui/products-list/products-list.component';

export const routes: Routes = [
    {
        path:'products',
         loadChildren:()=>import('./products/data-features/products-routes')
        // children:[
        // {
        //     path:'dashboard', loadComponent:()=>DashboardComponent,

        // }
        // ]
    },
    {
        path:'login', loadComponent:()=>LoginComponent
    },
    {
        path:'venta', loadComponent:()=>ComprobanteComponent
    },
    {
        path:'products', loadComponent:()=>ProductsListComponent
    },
    {
        path:'**',
        redirectTo:'/products'
    }
];

