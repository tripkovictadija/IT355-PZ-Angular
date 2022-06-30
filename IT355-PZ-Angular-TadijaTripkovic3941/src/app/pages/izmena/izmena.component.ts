import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Doktor } from 'src/app/interface/doktor';
import { Zakazivanje } from 'src/app/interface/zakazivanje';
import { ZakazivanjeService } from 'src/app/service/zakazivanje.service';
import { DoktorState } from 'src/app/store/state/doktor.state';

import { selectedDoktori } from 'src/app/store/selector/doktor.selector';
import { GetDoctors } from 'src/app/store/action/doktor.action';

@Component({
  selector: 'app-izmena',
  templateUrl: './izmena.component.html',
  styleUrls: ['./izmena.component.scss']
})
export class IzmenaComponent implements OnInit {

  zakazivanje: Zakazivanje = {
    id_zakazivanje:0,
    doktor:{},
    ime_pacijenta: '',
    prezime_pacijenta: '',
    naziv: '',
    datum: '',
    vreme: '',
    telefon: ''
  }; 

  public doktori$: Observable<Doktor[]>;
  public doktori: Doktor[];
  selectedDoktor: Doktor;
  doktorHtml: Doktor;
  
  public zakazivanja: Zakazivanje[];
  constructor(private _route: ActivatedRoute,private _store: Store<DoktorState>, private zakazivanje_service: ZakazivanjeService, private router:Router) {
    // this.car_service.cars$.pipe.

    this.zakazivanje_service.zakazivanja$.subscribe(val => {
      this._route.params.subscribe(params => {
        this.zakazivanje = <Zakazivanje>JSON.parse(JSON.stringify(val.find(x => x.id_zakazivanje == params['id'])));
        
      })
    });
    this.doktori$ = this._store.pipe(select(selectedDoktori));
    
    this.doktori$.subscribe(val => {
      this.doktori = JSON.parse(JSON.stringify(val));
      console.log(val);
    })
  }

  public selectItem(data: any) {
    data = JSON.parse(data);
    console.log("==> data:", data)
    this.zakazivanje.doktor = data
    
    console.log("==> data:", data)
    console.log("==> data:", this.zakazivanje.doktor)
    //this.zakazivanje.doktor = data.doktor   
  }
  
  stringify(val: any) {
    return JSON.stringify(val);
  }


  
  updateZakazivanje(obj: Zakazivanje){
    console.log("SA"+this.zakazivanje)
    console.log("SAS"+obj)
    this.zakazivanje_service.updateZakazivanje(obj);
    /*this.zakazivanje_service.updateZakazivanje(this.zakazivanje).subscribe((car) => {
      this.zakazivanja.forEach((element, index) => {
        if (element.id === car.id) {
          this.zakazivanja[index] = this.zakazivanje;


        }
      });
    });*/
    this.router.navigate(['/pocetna']);
  }


  ngOnInit(): void {
    
    this._store.dispatch(new GetDoctors());
  }

}
