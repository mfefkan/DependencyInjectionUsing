import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
}) //app.module de provide etmek yerine bu şekilde de provide edebiliriz. yalnız uygulamanın her yerinden erişilebilir. bir servisi app.module.ts de provide ettikten sonra o servisin bağımlı olduğu bir servis varsa onu da eklemek gerekir aksi taktirde bağlı olduğu servisi bulamadığı için hata alırız.
//providedIn ile de nasıl provide etmesi gerekdiğini belirleriz. root,any,platform olarak üç tane parametre vardır.
//root ile uygulamanın ana modülüne AppModule'e singleton olarak eklenmesi sağlanır.
//any ile ilgili service'in birden fazla instance alacak şekilde provide eder. Her modüle karşın bir instance üretecektir.
// platform ile servislerin platforma özgü olduğunu ifade eden değerdir. Hem server hem client taraflarında çalışma modu gibi farklı koşulları mevcuttur. Bu nedenle bir servis, platforma özgü olduğunda her iki tarafta(server,client) da farklı bir şekilde provide edilebilir.
export class ProductService {
  getProducts(): Product[] {
    return [
      { name: 'Keyboard', quantity: 10 },
      { name: 'Mouse', quantity: 15 },
      { name: 'Pencil', quantity: 25 },
    ];
  }
}

export class Product {
  name: string;
  quantity: number;
}
