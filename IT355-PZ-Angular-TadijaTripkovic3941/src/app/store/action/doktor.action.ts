import { Action } from "@ngrx/store";
import { Doktor } from "src/app/interface/doktor";

export enum EnumDoktorAction{
    GetDoctors = '[Doktor] Get Doktor',
    GetDoctorSuccess = '[Doktor] Get Doktor Success',
}

export class GetDoctors implements Action {
    public readonly type = EnumDoktorAction.GetDoctors;
}

export class GetDoctorSuccess implements Action {
    public readonly type = EnumDoktorAction.GetDoctorSuccess;
    constructor(public payload: Doktor[]){}
}

export type DoctorActions = GetDoctors | GetDoctorSuccess;