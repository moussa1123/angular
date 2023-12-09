import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './compenent/header/header.component';
import { CartComponent } from './compenent/cart/cart.component';
import { ProductsComponent } from './compenent/products/products.component';




const routes: Routes = [ 
  {path :"",redirectTo:"products",pathMatch:'full'},
  { path: "header", component: HeaderComponent },
  { path: "cart", component: CartComponent },
  { path: "products", component: ProductsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],

  exports: [RouterModule]
})
export class AppRoutingModule { }
