import { Component } from '@angular/core';
import { map } from 'rxjs';
import { ServiceNameService } from '../service-name.service';

@Component({
  selector: 'app-component-name3',
  template: `
    <button
      *ng-if="podeAdicionar$ | async as podeAdicionar"
      [disabled]="!podeAdicionar"
    >
      Adicionar
    </button>
    <br />
    <button
      *ng-if="podeRemover$ | async as podeRemover"
      [disabled]="!podeRemover"
    >
      Remover
    </button>
  `,
})
export class ComponentNameComponent3 {
  //Tudo que depende da lista de itens está nesse observable
  item$ = this.serviceNameService.iten$;

  //a definição de podeRemover e sua dependencia "items" esta contida no mesmo contexto
  //e o código ja é a definição por escrito
  //**codificação reativa**
  podeRemover$ = this.item$.pipe(
    map((itens) => itens.length > 0)
  );
  podeAdicionar$ = this.item$.pipe(map((itens) => true));

  constructor(private serviceNameService: ServiceNameService) {}

  remove() {
    //Alterações em 'items' é gerenciado pelo observable
  }
  add(item: any) {
    //Alterações em 'items' é gerenciado pelo observable
  }
}
