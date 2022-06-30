import { createFeatureSelector, createSelector } from "@ngrx/store";
import { ProizvodState } from "../state/proizvod.state";

const selectProizvodi = (state: any) => state.proizvod;

export const selectedProizvodi = createSelector(
    selectProizvodi,
    (state: ProizvodState) => {
        console.log("State", state.proizvodi)
        return state.proizvodi
    }
);

export const selectProizvodii = createSelector(
    createFeatureSelector('proizvodi'),
    (state:ProizvodState) => {
        return state.proizvodi;
    }
)