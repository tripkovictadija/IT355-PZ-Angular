import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Kupovina } from 'src/app/interface/kupovina';
import { Proizvod } from 'src/app/interface/proizvod';
import { User } from 'src/app/interface/user';
import { KupovinaService } from 'src/app/service/kupovina.service';
import { UserService } from 'src/app/service/user.service';
import { ZakazivanjeService } from 'src/app/service/zakazivanje.service';
import { GetKupovine } from 'src/app/store/action/kupovina.action';
import { GetZakazivanja } from 'src/app/store/action/zakazivanje.action';
import { selectedKupovine } from 'src/app/store/selector/kupovina.selector';
import { selectedZakazivanja } from 'src/app/store/selector/zakazivanje.selector';
import { KupovinaState } from 'src/app/store/state/kupovina.state';

@Component({
  selector: 'app-korpa',
  templateUrl: './korpa.component.html',
  styleUrls: ['./korpa.component.scss']
})
export class KorpaComponent implements OnInit {

  public kupovine$: Observable<Kupovina[]>;
  public kupovine: Kupovina[];
  unos: string = "";
  public proizvodi: Proizvod[];

  user: User = {};
  constructor(private _store: Store<KupovinaState>, private userService: UserService,private kupovina_service: KupovinaService, private _router: Router) {
    this.user = this.userService.ulogovan;
    this.kupovine$ = this._store.pipe(select(selectedKupovine));
    this.kupovina_service.fetchKupovine(this.userService.ulogovan).subscribe((response:Proizvod[])=>{
      console.log("It is a responsea ", response)
      this.proizvodi =  response.map(order => order)
     
     })
  }
  ngOnInit() {
    this._store.dispatch(new GetKupovine());
  }

  // logOut(){
  //   this.userService.ulogovan = {}
  //   this.user = {}
  //   this._router.navigate(['/login']);
  // }
  

  onDelete(id: number) {
    if (window.confirm('Da li zelite da obrisete izabrani termin?')) {
      this.kupovina_service.deleteKupovina(id).subscribe(() => {
        this.kupovine.forEach((curr, i) => {
          if (id === curr.id) {
            this.kupovine.splice(i, 1);
          }
        });
      });
    }
  }
}
