import { createFeatureSelector, createSelector } from "@ngrx/store";
import { ZakazivanjeState } from "../state/zakazivanje.state";

const selectZakazivanja = (state: any) => state.zakazivanje;

export const selectedZakazivanja = createSelector(
    selectZakazivanja,
    (state: ZakazivanjeState) => {
        console.log("State", state.zakazivanja)
        return state.zakazivanja
    }
);

export const selectZakazivanjaa = createSelector(
    createFeatureSelector('zakazivanja'),
    (state: ZakazivanjeState) => {
        return state.zakazivanja;
    }
)