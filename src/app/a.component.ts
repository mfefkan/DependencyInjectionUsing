import { Component, Optional, Self } from '@angular/core';
import { RandomService } from './random.service';

@Component({
  selector: 'app-a',
  template: `
    AComponent => {{ randomService.random }}
    <br />
    <app-b></app-b>
  `,
  providers: [RandomService],
})
export class AComponent {
  constructor( @Self() public randomService: RandomService) {}
  //Self'de kendisi bir randomservice instance alıyor onu kullanıyor
}
 // Birde selfin arkasında @Optional keywordu var bunu eklediğimizde provider var mı diye kontrol eder yoksa da programı patlatmaz varsa alır yoksa almaz.