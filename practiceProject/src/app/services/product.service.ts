import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
export class ProductService {

  productList = [{
    name: 'Abc', price: 20
  },
  {
    name: 'pte', price: 30
  }]
  constructor() { }
}
