import { Component } from '@angular/core';
import { ServiceNameService } from '../service-name.service';

@Component({
  selector: 'app-component-name2',
  template: `<span>Hello World.</span>`, 
})
export class ComponentNameComponent {
  //o que "itens" realmente é?
  itens = this.serviceNameService.getItens();

  constructor(private serviceNameService: ServiceNameService) {}

  //Como "itens" é alterado ao curso do componente?
  remove() {
    let removed = this.itens.pop();
  }
  add(item: any) {
     this.itens.push(item);
  }

}
