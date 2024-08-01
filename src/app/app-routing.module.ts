import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';

import { ContactPageComponent } from './contact-page/contact-page.component';
import { FaqComponent } from './faq/faq.component';
import { ContactElement1Component } from './contact-element1/contact-element1.component';
import { CardScrollComponent } from './card-scroll/card-scroll.component';
import { AboutPageComponent } from './about-page/about-page.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomePageComponent },
  { path: 'about', component: AboutPageComponent },

  { path: 'contact', component: ContactPageComponent,
    children:[
      { path: '', redirectTo: 'contactus', pathMatch: 'full', outlet: 'contactPage' },
      {path: 'contactus', component:ContactElement1Component, outlet:'contactPage'},
      {path: 'faq', component:FaqComponent, outlet:'contactPage'}

    ]
   },
  {path: 'shop', component:CardScrollComponent}
 
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export { RouterModule };
