import { Proizvod } from "src/app/interface/proizvod";

export interface ProizvodState {
    proizvodi: Array<Proizvod>;
}

export const initalProizvodState: ProizvodState ={
    proizvodi:[]
}