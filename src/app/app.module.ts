import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, RouterModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CardBigComponent } from './card-big/card-big.component';
import { CardScrollComponent } from './card-scroll/card-scroll.component';
import { Hero3SectionsComponent } from './hero3-sections/hero3-sections.component';
import { HomePageComponent } from './home-page/home-page.component';
import { TformComponent } from './tform/tform.component';

import { FormsModule } from '@angular/forms';
import { FooterComponent } from './footer/footer.component';
import { ContactElement1Component } from './contact-element1/contact-element1.component';
import { MapLinkComponent } from './map-link/map-link.component';
import { ContactNavComponent } from './contact-nav/contact-nav.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { FaqComponent } from './faq/faq.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    CardBigComponent,
    CardScrollComponent,
    Hero3SectionsComponent,
    HomePageComponent,
    TformComponent,
    FooterComponent,
    ContactElement1Component,
    MapLinkComponent,
    ContactNavComponent,
    ContactPageComponent,
    FaqComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule, FormsModule, RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
