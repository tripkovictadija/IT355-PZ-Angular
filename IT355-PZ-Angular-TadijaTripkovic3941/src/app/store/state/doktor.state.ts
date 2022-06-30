import { Doktor } from "src/app/interface/doktor";

export interface DoktorState {
    doktori: Array<Doktor>;
}

export const initalDoktorState: DoktorState ={
    doktori:[]
}