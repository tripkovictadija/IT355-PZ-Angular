import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Zakazivanje } from 'src/app/interface/zakazivanje';
import { ZakazivanjeService } from 'src/app/service/zakazivanje.service';
import { GetZakazivanja } from 'src/app/store/action/zakazivanje.action';
import { selectedZakazivanja } from 'src/app/store/selector/zakazivanje.selector';
import { ZakazivanjeState } from 'src/app/store/state/zakazivanje.state';

@Component({
  selector: 'app-pocetna',
  templateUrl: './pocetna.component.html',
  styleUrls: ['./pocetna.component.scss']
})
export class PocetnaComponent implements OnInit {

  public zakazivanja$: Observable<Zakazivanje[]>;
  public zakazivanja: Zakazivanje[];
  unos: string = "";

  constructor(private _store: Store<ZakazivanjeState>, private zakazivanje_service: ZakazivanjeService, private _router: Router) {
    this.zakazivanja$ = this._store.pipe(select(selectedZakazivanja));
    this.zakazivanja$.subscribe(val => {
      this.zakazivanja = JSON.parse(JSON.stringify(val));
      console.log(val);
    })
  }

  ngOnInit(): void {
    this._store.dispatch(new GetZakazivanja());
  }

  
  
}
