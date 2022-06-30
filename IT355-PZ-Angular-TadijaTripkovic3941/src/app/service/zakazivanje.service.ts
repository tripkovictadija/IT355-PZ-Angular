import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Zakazivanje } from '../interface/zakazivanje';
import { selectedZakazivanja } from '../store/selector/zakazivanje.selector';

@Injectable({
  providedIn: 'root'
})
export class ZakazivanjeService {

  private url: string = 'http://localhost:8080';

  public zakazivanja$: Observable<Zakazivanje[]>;

  constructor(private http: HttpClient, private store: Store) { 
    this.zakazivanja$ = this.store.pipe(select(selectedZakazivanja));
  }

  public fetchZakazivanja(): Observable<Zakazivanje[]>{
    return this.http.get<Zakazivanje[]>(this.url+"/zakazivanja");
  }

  addZakazivanje(zakazivanje: Zakazivanje){
    return this.http.post(this.url+"/dodajZakazivanje", zakazivanje).subscribe(e=>{console.log(e)});
  }

  updateZakazivanje(zakazivanje: Zakazivanje){
    const mUrl: string = `${this.url+"/updateZakazivanje"}/${zakazivanje.id_zakazivanje}`;
     return this.http.put<Zakazivanje>(mUrl, zakazivanje);
  }

  deleteZakazivanje(id: number){
    const mUrl: string = `${this.url+"/deleteZakazivanje"}/${id}`;
     return this.http.delete<Zakazivanje[]>(mUrl);
  }
}
