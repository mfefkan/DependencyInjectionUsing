import { Injectable } from "@angular/core";

@Injectable({
    providedIn:"root"           
})  //app.module de provide etmek yerine bu şekilde de provide edebiliriz. yalnız uygulamanın her yerinden erişilebilir. 
export class ProductService{
    getProducts() :Product[]{
return [
    {name:"Keyboard", quantity:10},
    {name:"Mouse", quantity:15},
    {name:"Pencil", quantity:25}
];
    }
}

export class Product{
    name:string;
    quantity:number;
}