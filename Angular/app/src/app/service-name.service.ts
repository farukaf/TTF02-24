import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ServiceNameService {
  constructor() {
    this.iten$ = new Observable<any[]>((obs) => {
      obs.next(this.getItens()); 
    });
  }

  getItens() {
    return [
      { id: 1, name: 'test 1' },
      { id: 2, name: 'test 2' },
    ];
  }

  public iten$;
}
