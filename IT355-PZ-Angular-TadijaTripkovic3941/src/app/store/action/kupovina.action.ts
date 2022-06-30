import { Action } from "@ngrx/store";
import { Kupovina } from "src/app/interface/kupovina";

export enum EnumKupovinaAction{
    GetKupovine = '[Kupovina] Get Kupovina',
    GetKupovinaSuccess = '[Kupovina] Get Kupovina Success',
}

export class GetKupovine implements Action {
    public readonly type = EnumKupovinaAction.GetKupovine;
}

export class GetKupovinaSuccess implements Action {
    public readonly type = EnumKupovinaAction.GetKupovinaSuccess;
    constructor(public payload: Kupovina[]){}
}

export type KupovinaActions = GetKupovine | GetKupovinaSuccess;