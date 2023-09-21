import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductService } from './productservice';
import { productServiceIT } from './injection-token';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule,HttpClientModule],
  providers: [
    // {provide : ProductService, useClass:ProductService} Type token
    //{ provide: 'productService', useClass: ProductService }, String Token
    // {provide: productServiceIT, useClass:ProductService}, //Injection Token
    //{provide:"example",useValue:"merhba"} //useValue için string token
    // {provide:"example",useValue:() => {
    //  return "merhaba";
    // }},
    {
      provide: 'productService',
      useFactory: (httpClient: HttpClient) => {

        const obs = httpClient
          .get("https://jsonplaceholder.typicode.com/posts")
          .subscribe({ next: (data) => console.log(data) });
  
        return new ProductService();


      },deps: [HttpClient]
    },
  ], //sınıfı burada provide ediyoruz. Injectable kullanıldığında buraya provide etmeye gerek kalmaz. DI Token eğer referansı Default Type Token olur. Type Tokeni değiştirebiliriz.
  bootstrap: [AppComponent],
})
export class AppModule {}
