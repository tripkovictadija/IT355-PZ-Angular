import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IzmenaComponent } from './pages/izmena/izmena.component';
import { KorpaComponent } from './pages/korpa/korpa.component';
import { LoginComponent } from './pages/login/login.component';
import { PocetnaComponent } from './pages/pocetna/pocetna.component';
import { RegistracijaComponent } from './pages/registracija/registracija.component';
import { SviProizvodiComponent } from './pages/svi-proizvodi/svi-proizvodi.component';
import { SviTerminiComponent } from './pages/svi-termini/svi-termini.component';
import { ZakaziComponent } from './pages/zakazi/zakazi.component';
import { DoktorService } from './service/doktor.service';

const routes: Routes = [

  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'registracija', component: RegistracijaComponent },
  { path: 'zakazi', component: ZakaziComponent },
  { path: 'svi-termini', component: SviTerminiComponent },
  { path: 'pocetna', component: PocetnaComponent },
  { path: 'izmena/:id', component: IzmenaComponent },
  { path: 'svi-proizvodi', component: SviProizvodiComponent },
  { path: 'korpa', component: KorpaComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
