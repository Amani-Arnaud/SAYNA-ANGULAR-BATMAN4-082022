import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EshopComponent } from './components/screens/eshop/eshop.component';
import { GameComponent } from './components/screens/game/game.component';
import { HomeComponent } from './components/screens/home/home.component';
import { MonCompteComponent } from './components/screens/mon-compte/mon-compte.component';
import { NotFoundPageComponent } from './components/screens/not-found-page/not-found-page.component';
import { CartComponent } from './components/widgets/cart/cart.component';

const routes: Routes = [
  {path:'', redirectTo: '/home', pathMatch: 'full'},
  {path:'home', component:HomeComponent},
  {path:'game', component:GameComponent},
  {path:'eshop', component:EshopComponent},
  {path:'product/:id', component:EshopComponent},
  {path:'myAccount', component:MonCompteComponent},
  {path:'cart', component:CartComponent},

  {path:'**', component:NotFoundPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
