import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProductsComponent } from './components/products/products.component';
import { StoresComponent } from './components/stores/stores.component';
import { BulkOrderComponent } from './components/bulk-order/bulk-order.component';
import { AboutComponent } from './components/about/about.component';
import { SigninComponent } from './components/auth/signin/signin.component';
import { FeaturedProductComponent } from './featured-product/featured-product.component';

export const routes: Routes = [
     { path: '', component: HomeComponent }, // or 'home'
  { path: 'products', component: ProductsComponent },
  { path : 'stores',component:StoresComponent},
  { path: 'bulkorders', component: BulkOrderComponent },
  { path: 'about', component: AboutComponent },
{ path: 'auth', component: SigninComponent },
  { path: 'featured-product', component: FeaturedProductComponent },
  

];
