import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { of } from "rxjs";
import { Proizvod } from "src/app/interface/proizvod";
import { ProizvodService } from "src/app/service/proizvod.service";
import { EnumProizvodAction, GetProizvodi, GetProizvodSuccess } from "../action/proizvod.action";
import { switchMap } from "rxjs/operators";

@Injectable()
export class ProizvodEffect {
    constructor(private _actions$: Actions, private proizvodService: ProizvodService){

    }

    getProizvodi$ = createEffect(() =>
        this._actions$.pipe(
            ofType<GetProizvodi>(EnumProizvodAction.GetProizvodi),
            switchMap(() => this.proizvodService.fetchProizvodi()),
            switchMap((proizvodHttp: Proizvod[]) =>{
                return of(new GetProizvodSuccess(proizvodHttp))
            }
            )
        )
    ) 
}