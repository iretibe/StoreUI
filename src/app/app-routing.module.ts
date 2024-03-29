import { NotFoundComponent } from './core/not-found/not-found.component';
import { ServerErrorComponent } from './core/server-error/server-error.component';
import { TestErrorComponent } from './core/test-error/test-error.component';
import { ProductDetailsComponent } from './shop/product-details/product-details.component';
import { ShopComponent } from './shop/shop.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    data: {breadcrumb: 'Home'}
  },
  // {
  //   path: 'test-error',
  //   component: TestErrorComponent,
  //   data: {breadcrumb: 'Test Errors'}
  // },
  // {
  //   path: 'server-error',
  //   component: ServerErrorComponent,
  //   data: {breadcrumb: 'Server Error'}
  // },
  // {
  //   path: 'not-found',
  //   component: NotFoundComponent,
  //   data: {breadcrumb: 'Not Found'}
  // },
  // {path: 'shop', component: ShopComponent},
  // {path: 'shop/:id', component: ProductDetailsComponent},
  {
    path: 'shop',
    loadChildren: () => import('./shop/shop.module').then(mod => mod.ShopModule),
    data: {breadcrumb: 'Shop'}
  },
  {
    path: 'basket',
    loadChildren: () => import('./basket/basket.module').then(mod => mod.BasketModule),
    data: {breadcrumb: 'Basket'}
  },
  // {path: '**', redirectTo: '', pathMatch: 'full'}
  {
    path: '**',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
