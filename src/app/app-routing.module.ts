import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EshopComponent } from './components/screens/eshop/eshop.component';
import { GameComponent } from './components/screens/game/game.component';
import { HomeComponent } from './components/screens/home/home.component';
import { MonCompteComponent } from './components/screens/mon-compte/mon-compte.component';
import { NotFoundPageComponent } from './components/screens/not-found-page/not-found-page.component';
import { CartComponent } from './components/screens/cart/cart.component';
import { ProductDetailComponent } from './components/screens/product-detail/product-detail.component';
import { LoginComponent } from './components/screens/login/login.component';
import { SignupComponent } from './components/screens/signup/signup.component';

const routes: Routes = [
  {path:'', redirectTo: '/home', pathMatch: 'full'},
  {path:'home', component:HomeComponent},
  {path:'game', component:GameComponent},
  {path:'eshop', component:EshopComponent},
  {path:'eshop/product/:id', component:ProductDetailComponent},
  {path:'myAccount', component:MonCompteComponent},
  {path:'cart', component:CartComponent},
  {path:'login', component:LoginComponent},
  {path:'signup', component:SignupComponent},

  {path:'**', component:NotFoundPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
