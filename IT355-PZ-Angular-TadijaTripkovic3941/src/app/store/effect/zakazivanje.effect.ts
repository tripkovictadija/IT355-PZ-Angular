import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { of } from "rxjs";
import { Zakazivanje } from "src/app/interface/zakazivanje";
import { ZakazivanjeService } from "src/app/service/zakazivanje.service";
import { EnumZakazivanjeAction, GetZakazivanja, GetZakazivanjeSuccess } from "../action/zakazivanje.action";
import { switchMap } from "rxjs/operators";

@Injectable()
export class ZakazivanjeEffect {
    constructor(private _actions$: Actions, private zakazivanjeService: ZakazivanjeService){

    }

    getZakazivanja$ = createEffect(() =>
        this._actions$.pipe(
            ofType<GetZakazivanja>(EnumZakazivanjeAction.GetZakazivanja),
            switchMap(() => this.zakazivanjeService.fetchZakazivanja()),
            switchMap((zakazivanjeHttp: Zakazivanje[]) =>{
                return of(new GetZakazivanjeSuccess(zakazivanjeHttp))
            }
            )
        )
    ) 
}