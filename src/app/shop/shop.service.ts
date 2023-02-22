import { IProduct } from 'src/app/shared/models/product';
import { ShopParams } from './../shared/models/shopParams';
import { IBrand } from './../shared/models/brand';
import { IPagination } from '../shared/models/pagination';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IType } from '../shared/models/productType';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ShopService {
  baseUrl = 'http://localhost/Storeapi/api/';

  constructor(private http: HttpClient) { }

  getProducts(shopParams: ShopParams) {
    let params = new HttpParams();

    if(shopParams.brandId !== 0)
    {
      params = params.append('brandId', shopParams.brandId.toString());
    }

    if (shopParams.typeId !== 0)
    {
      params = params.append('typeId', shopParams.typeId.toString());
    }

    if (shopParams.search)
    {
      params = params.append('search', shopParams.search);
    }

    // if (shopParams.sort)
    // {
    //   params = params.append('sort', shopParams.sort);
    // }

    params = params.append('sort', shopParams.sort);

    params = params.append('pageIndex', shopParams.pageNumber?.toString()!); 

    params = params.append('pageIndex', shopParams.pageSize?.toString()!);   

    return this.http.get<IPagination>(this.baseUrl + 'Products', {observe: 'response', params})
      .pipe(
        map(response => {
          return response.body;
        })
      );
  }

  // getProducts() {
  //   return this.http.get<IPagination>(this.baseUrl + 'Products?pageSize=50');
  // }

  getProduct(id: number){
    return this.http.get<IProduct>(this.baseUrl + 'Products/' + id);
  }

  getBrands() {
    return this.http.get<IBrand[]>(this.baseUrl + 'Products/Brands');
  }

  getTypes() {
    return this.http.get<IType[]>(this.baseUrl + 'Products/Types');
  }
}
