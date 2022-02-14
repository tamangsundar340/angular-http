import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from 'src/app/MyComponents/home/home.component';
import {FirstComponent} from 'src/app/MyComponents/first/first.component';
import {SecondComponent} from 'src/app/MyComponents/second/second.component';
import {ProductComponent} from 'src/app/MyComponents/product/product.component';
import {ProductsComponent} from 'src/app/MyComponents/products/products.component';

const routes: Routes = [
  { path: '', redirectTo:'home', pathMatch:'full' },  
  { path: 'home', component:HomeComponent  }, 
  { path: 'first', component:FirstComponent  }, 
  { path: 'second', component:SecondComponent  },
  { path: 'product', component:ProductComponent  },
  { path: 'products/:id', component:ProductsComponent  },
  {path:'**', redirectTo:'home'} 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
