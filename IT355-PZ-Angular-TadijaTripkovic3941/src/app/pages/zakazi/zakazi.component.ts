import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Doktor } from 'src/app/interface/doktor';
import { User } from 'src/app/interface/user';
import { Zakazivanje } from 'src/app/interface/zakazivanje';
import { DoktorService } from 'src/app/service/doktor.service';
import { UserService } from 'src/app/service/user.service';
import { ZakazivanjeService } from 'src/app/service/zakazivanje.service';
import { GetDoctors } from 'src/app/store/action/doktor.action';
import { selectedDoktori } from 'src/app/store/selector/doktor.selector';
import { DoktorState } from 'src/app/store/state/doktor.state';

@Component({
  selector: 'app-zakazi',
  templateUrl: './zakazi.component.html',
  styleUrls: ['./zakazi.component.scss']
})
export class ZakaziComponent implements OnInit {

  public doktori$: Observable<Doktor[]>;
  public doktori: Doktor[];
  selectedDoktor: Doktor;
  doktorHtml: Doktor;
  

  zakazivanje: Zakazivanje = {
    id_zakazivanje:0,    
    doktor: {},
    ime_pacijenta: '',
    prezime_pacijenta: '',
    naziv: '',
    datum: '',
    vreme: '',
    telefon: '',
  }; 
   user: User = {};
  

  constructor(private userService: UserService,private _store: Store<DoktorState>,private zakazi_service: ZakazivanjeService, private router: Router) {
    this.user = this.userService.ulogovan;
    console.log("probassd"+this.user.id_korisnika);
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
    console.log("==> data:", this.zakazivanje.doktor)
    //this.zakazivanje.doktor = data.doktor   
  }

  stringify(val: any) {
    return JSON.stringify(val);
  }
  addZakazivanje(formObj: Zakazivanje){
    console.log(formObj.doktor.id_doktora);
    this.zakazi_service.addZakazivanje(formObj);
      console.log(formObj.doktor);
      
      this.router.navigate(['/svi-termini']);
    };
  

  ngOnInit(): void {
    this._store.dispatch(new GetDoctors());
  }

}
