import { Action } from "@ngrx/store";
import { Proizvod } from "src/app/interface/proizvod";

export enum EnumProizvodAction{
    GetProizvodi = '[Proizvod] Get Proizvod',
    GetProizvodSuccess = '[Proizvod] Get Proizvod Success',
}

export class GetProizvodi implements Action {
    public readonly type = EnumProizvodAction.GetProizvodi;
}

export class GetProizvodSuccess implements Action {
    public readonly type = EnumProizvodAction.GetProizvodSuccess;
    constructor(public payload: Proizvod[]){}
}

export type ProizvodActions = GetProizvodi | GetProizvodSuccess;