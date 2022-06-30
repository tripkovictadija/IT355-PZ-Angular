import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Doktor } from 'src/app/interface/doktor';
import { Proizvod } from 'src/app/interface/proizvod';
import { User } from 'src/app/interface/user';
import { Zakazivanje } from 'src/app/interface/zakazivanje';
import { DoktorService } from 'src/app/service/doktor.service';
import { ProizvodService } from 'src/app/service/proizvod.service';
import { UserService } from 'src/app/service/user.service';
import { ZakazivanjeService } from 'src/app/service/zakazivanje.service';
import { GetProizvodi } from 'src/app/store/action/proizvod.action';
import { GetUsers } from 'src/app/store/action/user.action';
import { GetZakazivanja } from 'src/app/store/action/zakazivanje.action';
import { selectedProizvodi } from 'src/app/store/selector/proizvod.selector';
import { selectedZakazivanja } from 'src/app/store/selector/zakazivanje.selector';
import { ProizvodState } from 'src/app/store/state/proizvod.state';
import { ZakazivanjeState } from 'src/app/store/state/zakazivanje.state';

@Component({
  selector: 'app-svi-proizvodi',
  templateUrl: './svi-proizvodi.component.html',
  styleUrls: ['./svi-proizvodi.component.scss']
})
export class SviProizvodiComponent implements OnInit {

  public proizvodi$: Observable<Proizvod[]>;
  public proizvodi: Proizvod[];
  unos: string = "";
  user: User = {};

  constructor(private _store: Store<ProizvodState>, private proizvod_service: ProizvodService, private router: Router, private userService: UserService) {
    this.user = this.userService.ulogovan;
    console.log("Svi"+this.user.id_korisnika);
    this.proizvodi$ = this._store.pipe(select(selectedProizvodi));
    this.proizvod_service.fetchPreostale(this.userService.ulogovan).subscribe((response:Proizvod[])=>{
      console.log("It is a responsea ", response)
      this.proizvodi =  response.map(order => order)
     
     })

    this.user = this.userService.ulogovan;
  }

  kupi(pro:Proizvod, user: User) {
    console.log("-orderCar-");
    console.log(pro.id_proizvoda);
    console.log(user.id_korisnika);
    this.proizvod_service.kupi(pro, user);

    this.router.navigate(['/korpa']);
  }

  ngOnInit() {
    console.log("SAD?"+this.user.id_korisnika);
    this._store.dispatch(new GetProizvodi());
  }

  logOut(){
    this.userService.ulogovan = {}
    this.user = {}
    this.router.navigate(['/login']);
  }
  
}
