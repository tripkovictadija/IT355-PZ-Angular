import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Doktor } from './interface/doktor';
import { User } from './interface/user';
import { GetDoctors } from './store/action/doktor.action';
import { GetUsers } from './store/action/user.action';
import { selectedDoktori } from './store/selector/doktor.selector';
import { selectedUsers } from './store/selector/user.selector';
import { DoktorState } from './store/state/doktor.state';
import { UserState } from './store/state/user.state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'IT255-PZ-Tadija';

  public users$: Observable<User[]>;
  public User: User[];

  constructor(private _store: Store<UserState>, private _route: Router){
    this.users$ = this._store.pipe(select(selectedUsers));
  }

  ngOnInit(){
    this._store.dispatch(new GetUsers());
  }

}
