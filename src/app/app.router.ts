import { RouterModule, Routes } from '@angular/router';



export const router: Routes = [
    { path:'', redirectTo: 'home', pathMatch: 'full' }, //default page
   {}
];
export const routes = RouterModule.forRoot(router);