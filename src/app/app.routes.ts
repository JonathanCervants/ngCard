import { Routes } from '@angular/router';
import  LayoutComponent  from './ui/layout/layout.component';
import { DashboardComponent } from './ui/dashboard/dashboard.component';
import { LoginComponent } from './auth/login/login.component';
import { PlayerComponent } from './player/player.component';

export const routes: Routes = [
    {
        path:'', loadComponent:()=>PlayerComponent,
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

