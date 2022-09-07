import { NgModule, LOCALE_ID } from '@angular/core';
import * as fr from '@angular/common/locales/fr-CI';
import { BrowserModule } from '@angular/platform-browser';
import { NgxPaginationModule } from "ngx-pagination";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BarNavComponent } from './components/widgets/bar-nav/bar-nav.component';
import { FooterComponent } from './components/widgets/footer/footer.component';
import { HomeComponent } from './components/screens/home/home.component';
import { GameComponent } from './components/screens/game/game.component';
import { EshopComponent } from './components/screens/eshop/eshop.component';
import { MonCompteComponent } from './components/screens/mon-compte/mon-compte.component';
import { NotFoundPageComponent } from './components/screens/not-found-page/not-found-page.component';
import { CartComponent } from './components/screens/cart/cart.component';
import { ProductsComponent } from './components/widgets/products/products.component';
import { AsideComponent } from './components/widgets/aside/aside.component';
import { registerLocaleData } from '@angular/common';
import { LoginComponent } from './components/screens/login/login.component';
import { ProductDetailComponent } from './components/screens/product-detail/product-detail.component';
import { ButtonComponent } from './components/widgets/button/button.component';
import { SignupComponent } from './components/screens/signup/signup.component';
@NgModule({
  declarations: [
    AppComponent,
    BarNavComponent,
    FooterComponent,
    HomeComponent,
    GameComponent,
    EshopComponent,
    MonCompteComponent,
    NotFoundPageComponent,
    CartComponent,
    ProductsComponent,
    AsideComponent,
    LoginComponent,
    ProductDetailComponent,
    ButtonComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxPaginationModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'fr-CI'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(){
    registerLocaleData(fr.default);
  }
}
