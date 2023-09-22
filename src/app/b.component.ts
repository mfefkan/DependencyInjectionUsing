import { Component, SkipSelf } from '@angular/core';
import { RandomService } from './random.service';

@Component({
  selector: 'app-b',
  template: `
  BComponent => {{randomService.random}}
  `,
  providers:[]
})
export class BComponent {
  constructor(@SkipSelf() public randomService : RandomService){
 //Skipself de parentından alıyor random service'ı
  }

}
