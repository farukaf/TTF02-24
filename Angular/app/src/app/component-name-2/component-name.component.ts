import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { ServiceNameService } from '../service-name.service';

@Component({
  selector: 'app-component-name2',
  template: `
    <button [disabled]="!podeAdicionar" ]>Adicionar</button>
    <br />
    <button [disabled]="!podeRemover" ]>Remover</button>
  `,
})
//subscribe estrategia (não tão bom assim)
//ainda é imperativo
export class ComponentNameComponent2 implements OnInit, OnDestroy {
  //Olhar as props não é o suficiente para entender o que eles significam durante a vida do componente
  items?: any[];
  podeRemover?: boolean;
  podeAdicionar?: boolean;

  destroy = new Subject<boolean>();

  constructor(private serviceNameService: ServiceNameService) {}

  ngOnInit(): void {
    this.serviceNameService.iten$
      .pipe(takeUntil(this.destroy))
      .subscribe((items) => {
        //uma vez manualmente fazendo o subscribe a gente tem que manualmente remover o sub
        this.items = items;
        this.podeAdicionar = true;
        this.podeRemover = items.length > 0;
      });
  }

  ngOnDestroy(): void {
    this.destroy.next(true);
  }

  
  remove() {
    //Alterações em 'items' é gerenciado pelo observable
  }
  add(item: any) {
    //Alterações em 'items' é gerenciado pelo observable
  }
}
