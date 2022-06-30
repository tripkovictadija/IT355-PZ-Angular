import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { User } from '../interface/user';
import { HttpClient } from '@angular/common/http';
import { selectedUsers } from '../store/selector/user.selector';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url: string = 'http://localhost:8080';

  public ulogovan:User={};

  public users$: Observable<User[]>;

  constructor(private http: HttpClient, private store: Store) { 
    this.users$ = this.store.pipe(select(selectedUsers));
  }

  public fetchUsers(): Observable<User[]>{
    return this.http.get<User[]>(this.url);
  }

  getUsers() {
    return this.http.get<User[]>(this.url);
  }

  loginUser(user: User) {
    
    return this.http.post<any>(this.url+"/login",  {user_id:user.id_korisnika}).subscribe(e=>{console.log(e)});
    //return this._http.post(this.url+"/login", user);
  }

  getUser(username: string, password: string) {
    const mUrl: string = `${this.url}?username=${username}&password=${password}`;
    return this.http.get<User[]>(mUrl);
  }

  addUser(user: User){
    return this.http.post(this.url+"/register", user)
  }

}

