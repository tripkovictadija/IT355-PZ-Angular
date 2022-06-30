import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EffectsModule } from '@ngrx/effects';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { reducers } from './store/reducer';
import { DoktorService } from './service/doktor.service';
import { DoktorEffect } from './store/effect/doktor.effect';
import { HeaderComponent } from './pages/header/header.component';
import { PocetnaComponent } from './pages/pocetna/pocetna.component';
import { ZakaziComponent } from './pages/zakazi/zakazi.component';
import { SviTerminiComponent } from './pages/svi-termini/svi-termini.component';
import { LoginComponent } from './pages/login/login.component';
import { RegistracijaComponent } from './pages/registracija/registracija.component';
import { FooterComponent } from './pages/footer/footer.component';
import { ZakazivanjeService } from './service/zakazivanje.service';
import { ZakazivanjeEffect } from './store/effect/zakazivanje.effect';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IzmenaComponent } from './pages/izmena/izmena.component';
import { FilterIme } from './pages/filter';
import { SviProizvodiComponent } from './pages/svi-proizvodi/svi-proizvodi.component';
import { filterNazivProizvoda } from './pages/filter2';
import { UserService } from './service/user.service';
import { ProizvodService } from './service/proizvod.service';
import { UserEffect } from './store/effect/user.effect';
import { ProizvodEffect } from './store/effect/proizvod.effect';
import { KupovinaEffect } from './store/effect/kupovina.effect';
import { KupovinaService } from './service/kupovina.service';
import { KorpaComponent } from './pages/korpa/korpa.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PocetnaComponent,
    ZakaziComponent,
    SviTerminiComponent,
    LoginComponent,
    RegistracijaComponent,
    FooterComponent,
    IzmenaComponent,
    FilterIme,
    SviProizvodiComponent,
    filterNazivProizvoda,
    KorpaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    EffectsModule.forRoot([DoktorEffect, ZakazivanjeEffect, UserEffect, ProizvodEffect, KupovinaEffect]),
    StoreModule.forRoot(reducers)
  ],
  providers: [HttpClientModule, DoktorService, ZakazivanjeService, UserService, ProizvodService, KupovinaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
