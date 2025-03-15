import { Routes } from '@angular/router';
import  LayoutComponent  from './ui/layout/layout.component';
import { DashboardComponent } from './ui/dashboard/dashboard.component';
import { LoginComponent } from './auth/login/login.component';

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
        path:'login', loadComponent:()=>LoginComponent
    },
    {
        path:'**',
        redirectTo:''
    }
];

