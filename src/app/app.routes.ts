import { Routes } from '@angular/router';
import  LayoutComponent  from './ui/layout/layout.component';
import { DashboardComponent } from './ui/dashboard/dashboard.component';

export const routes: Routes = [
    {
        path:'', loadComponent:()=>LayoutComponent,
        children:[
        {
            path:'dashboard', loadComponent:()=>DashboardComponent,

        }
        ]
    },
    {
        path:'**',
        redirectTo:''
    }
];

