import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        // path:'products',
        // loadChildren:()=>
        //     import('///'),
    },
    {
        path:'**',
        redirectTo:'products'
    }
];

