import { ShopService } from './../shop.service';
import { IProduct } from 'src/app/shared/models/product';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BreadcrumbService } from 'xng-breadcrumb';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  product!: IProduct;

  constructor(private shopService: ShopService, private activateRoute: ActivatedRoute,
    private bcService: BreadcrumbService) { 
      this.bcService.set('@productDetails', ' ')
    }

  ngOnInit(): void {
    this.loadProduct();
  }

  loadProduct()
  {
    const id = this.activateRoute.snapshot.paramMap.get('id');

    if(id) this.shopService.getProduct(+id).subscribe({
      next: product => {
        this.product = product;
        this.bcService.set('@productDetails', product.name)
      },
      error: error => console.log(error)      
      })
  }

  // loadProduct()
  // {
  //   this.shopService.getProduct(+this.activateRoute.snapshot.paramMap.get('id')!).subscribe(product => {
  //     this.product = product;
  //   }, error => {
  //     console.log(error);
  //   })
  // }

}
