import { createFeatureSelector, createSelector } from "@ngrx/store";
import { KupovinaState } from "../state/kupovina.state";

const selectKupovine = (state: any) => state.kupovina;

export const selectedKupovine = createSelector(
    selectKupovine,
    (state: KupovinaState) => {
        console.log("State", state.kupovine)
        return state.kupovine
    }
);

export const selectKupovinee = createSelector(
    createFeatureSelector('kupovine'),
    (state:KupovinaState) => {
        return state.kupovine;
    }
)