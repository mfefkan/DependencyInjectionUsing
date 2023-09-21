import { Component } from '@angular/core';
import { ProductService } from './productservice';

@Component({
  selector: 'app-root',
  template: ``,
  /* providers: [ProductService]
 Buradaki gibi de provide edebiliriz bu şekilde sadece app.component.ts için provide edilmiş olacaktır.
  */
})
export class AppComponent {
  constructor(private productService:ProductService){
    console.log(productService.getProducts());
    
  }
}
