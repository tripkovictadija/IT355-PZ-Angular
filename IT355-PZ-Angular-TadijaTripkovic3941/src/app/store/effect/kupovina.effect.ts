import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { of } from "rxjs";
import { Kupovina } from "src/app/interface/kupovina";
import { KupovinaService } from "src/app/service/kupovina.service";
import { EnumKupovinaAction, GetKupovine, GetKupovinaSuccess } from "../action/kupovina.action";
import { switchMap } from "rxjs/operators";

@Injectable()
export class KupovinaEffect {
    constructor(private _actions$: Actions, private kupovinaService: KupovinaService){

    }
/*
    getKupovine$ = createEffect(() =>
        this._actions$.pipe(
            ofType<GetKupovine>(EnumKupovinaAction.GetKupovine),
            //switchMap(() => this.kupovinaService.fetchKupovine(user)),
            switchMap((kupovinaHttp: Kupovina[]) =>{
                return of(new GetKupovinaSuccess(kupovinaHttp))
            }
            )
        )
    ) */
}