import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { of } from "rxjs";
import { Doktor } from "src/app/interface/doktor";
import { DoktorService } from "src/app/service/doktor.service";
import { EnumDoktorAction, GetDoctors, GetDoctorSuccess } from "../action/doktor.action";
import { switchMap } from "rxjs/operators";

@Injectable()
export class DoktorEffect {
    constructor(private _actions$: Actions, private doctorService: DoktorService){

    }

    getDoctors$ = createEffect(() =>
        this._actions$.pipe(
            ofType<GetDoctors>(EnumDoktorAction.GetDoctors),
            switchMap(() => this.doctorService.fetchDoktori()),
            switchMap((drHttp: Doktor[]) =>{
                return of(new GetDoctorSuccess(drHttp))
            }
            )
        )
    ) 
}