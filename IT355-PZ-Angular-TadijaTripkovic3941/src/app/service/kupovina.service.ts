import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Kupovina } from '../interface/kupovina';
import { Proizvod } from '../interface/proizvod';
import { User } from '../interface/user';
import { selectedKupovine } from '../store/selector/kupovina.selector';


@Injectable({
  providedIn: 'root'
})
export class KupovinaService {

  private url: string = 'http://localhost:8080';

  public kupovine$: Observable<Kupovina[]>;

  constructor(private http: HttpClient, private store: Store) { 
    this.kupovine$ = this.store.pipe(select(selectedKupovine));
  }

  fetchKupovine(user: User){
    return this.http.get<Proizvod[]>(this.url+"/kupljena/"+user.id_korisnika);
  }
/*
  fetchOrderedCars() {
    console.log("fetc user id"+user.user_id);
    return this._http.get<Order[]>(this.url+"/orderedCars/"+user.id_korisnika);"
  }
*/
  addKupovina(kupovina: Kupovina){
    return this.http.post(this.url, kupovina)
  }

  updateKupovina(kupovina: Kupovina){
    const mUrl: string = `${this.url}/${kupovina.id}`;
     return this.http.put<Kupovina>(mUrl, kupovina);
  }

  deleteKupovina(id: number){
    const mUrl: string = `${this.url}/${id}`;
     return this.http.delete<Kupovina[]>(mUrl);
  }
}
