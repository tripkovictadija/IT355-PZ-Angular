import { createFeatureSelector, createSelector } from "@ngrx/store";
import { DoktorState } from "../state/doktor.state";

const selectDoktori = (state: any) => state.doktor;

export const selectedDoktori = createSelector(
    selectDoktori,
    (state: DoktorState) => {
        console.log("State", state.doktori)
        return state.doktori
    }
);

export const selectDoktorii = createSelector(
    createFeatureSelector('doktori'),
    (state: DoktorState) => {
        return state.doktori;
    }
)