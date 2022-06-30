import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Doktor } from '../interface/doktor';
import { HttpClient } from '@angular/common/http';
import { selectedDoktori } from '../store/selector/doktor.selector';

@Injectable({
  providedIn: 'root'
})
export class DoktorService {

  private url: string = 'http://localhost:8080';

  public ulogovan:Doktor={};

  public doktori$: Observable<Doktor[]>;

  constructor(private http: HttpClient, private store: Store) { 
    this.doktori$ = this.store.pipe(select(selectedDoktori));
  }

  public fetchDoktori(): Observable<Doktor[]>{
    return this.http.get<Doktor[]>(this.url+"/doktori");
  }

  getDoktori() {
    return this.http.get<Doktor[]>(this.url);
  }

  getDoktor(username: string, password: string) {
    const mUrl: string = `${this.url}?username=${username}&password=${password}`;
    return this.http.get<Doktor[]>(mUrl);
  }

  addDoktor(doktor: Doktor){
    return this.http.post(this.url, doktor)
  }

  updateDoktor(doktor: Doktor){
    const mUrl: string = `${this.url}/${doktor.id_doktora}`;
     return this.http.put<Doktor>(mUrl, doktor);
  }

  deleteDoktor(id: number){
    const mUrl: string = `${this.url}/${id}`;
     return this.http.delete<Doktor[]>(mUrl);
  }

}

