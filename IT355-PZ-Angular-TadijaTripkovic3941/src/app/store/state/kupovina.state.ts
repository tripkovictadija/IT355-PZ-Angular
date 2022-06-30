import { Kupovina } from "src/app/interface/kupovina";

export interface KupovinaState {
    kupovine: Array<Kupovina>;
}

export const initalKupovinaState: KupovinaState ={
    kupovine:[]
}