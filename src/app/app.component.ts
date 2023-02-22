// import { IPagination } from './shared/models/pagination';
// import { IProduct } from './shared/models/product';
// import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  
  title = 'Store System';

  // products!: any[];
  // products!: IProduct[];

  /**
   *
   */
   constructor() {
    
  }
  // constructor(private http: HttpClient) {
    
  // }

  ngOnInit(): void {
    
  }

  // ngOnInit(): void {
  //   this.http
  //     // .get('https://localhost:7231/api/Products?pageSize=50')  
  //     .get('http://localhost/Storeapi/api/Products?pageSize=50')
  //     .subscribe((response: any) => {
  //       this.products = response.data;
  //     }, error => {
  //       console.log(error);
  //     });
  // }

  // ngOnInit(): void {
  //   type paginationType = IPagination;

  //   this.http
  //     // .get('https://localhost:7231/api/Products?pageSize=50')  
  //     .get('http://localhost/Storeapi/api/Products?pageSize=50')
  //     .subscribe((response: paginationType) => {
  //       this.products = response.data;
  //     }, error => {
  //       console.log(error);
  //     });
  // }

  // ngOnInit(): void {
  //   this.http
  //     // .get('https://localhost:7231/api/Products?pageSize=50')  
  //     .get('http://localhost/Storeapi/api/Products?pageSize=50')
  //     .subscribe((response: any) => {
  //       this.products = response.data;
  //     }, error => {
  //       console.log(error);
  //     });
  // }

  // ngOnInit(): void {
  //   this.http
  //     .get('https://localhost:7231/api/Products?pageSize=50')
  //     .subscribe((response: any) => {
  //       console.log(response);
  //     }, error => {
  //       console.log(error);
  //     });
  // }
}
