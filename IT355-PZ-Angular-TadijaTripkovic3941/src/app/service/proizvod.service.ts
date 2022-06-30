import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Proizvod } from '../interface/proizvod';
import { User } from '../interface/user';
import { selectedProizvodi } from '../store/selector/proizvod.selector';

@Injectable({
  providedIn: 'root'
})
export class ProizvodService {

  private url: string = 'http://localhost:8080';

  public proizvodi$: Observable<Proizvod[]>;

  constructor(private http: HttpClient, private store: Store) { 
    this.proizvodi$ = this.store.pipe(select(selectedProizvodi));
  }

  public fetchProizvodi(): Observable<Proizvod[]>{
    return this.http.get<Proizvod[]>(this.url+"/proizvodi");
  }

  fetchPreostale(user: User){
    return this.http.get<Proizvod[]>(this.url+"/preostali/"+user.id_korisnika);
  }

  public fetchPreostali(): Observable<Proizvod[]>{
    return this.http.get<Proizvod[]>(this.url+"/proizvodi");
  }

  
  public kupi(pr: Proizvod, user:User) {
    console.log("-kupi-");
    return this.http.post<any>(this.url+"/kupi",  {id_proizvoda:pr.id_proizvoda, id_user:user.id_korisnika}).subscribe(e=>{console.log(e)});
  }

}
