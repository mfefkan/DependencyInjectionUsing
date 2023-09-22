import { Component, Inject, inject } from '@angular/core';
import { ProductService } from './productservice';
import { productServiceIT } from './injection-token';
import { RandomService } from './random.service';

@Component({
  selector: 'app-root',
  template: `
  
  AppComponent => {{randomService.random}}
  <br>
  <app-a></app-a>
  `,
  providers: []
  /* providers: [ProductService]
 Buradaki gibi de provide edebiliriz bu şekilde sadece app.component.ts için provide edilmiş olacaktır.
  */ 
})
export class AppComponent {
  constructor(@Inject("productService") private productService:ProductService,public randomService: RandomService){
 console.log(productService.getProducts());
 
  }
    // console.log(value); //example injectinin value değeri çıkar... 
   // console.log(func()); // example'da ki metodu getirir
    
   // constructor içinde (private productService:ProductService ) bu property inject işlemini otomatik olarak yapacaktır.

  // constructor(@inject(ProductService) private productService) şeklinde de inject edilebilir. 
}
