import { Action } from "@ngrx/store";
import { Zakazivanje } from "src/app/interface/zakazivanje";

export enum EnumZakazivanjeAction{
    GetZakazivanja = '[Zakazivanje] Get Zakazivanje',
    GetZakazivanjeSuccess = '[Zakazivanje] Get Zakazivanje Success',
}

export class GetZakazivanja implements Action {
    public readonly type = EnumZakazivanjeAction.GetZakazivanja;
}

export class GetZakazivanjeSuccess implements Action {
    public readonly type = EnumZakazivanjeAction.GetZakazivanjeSuccess;
    constructor(public payload: Zakazivanje[]){}
}

export type ZakazivanjeActions = GetZakazivanja | GetZakazivanjeSuccess;