import { Zakazivanje } from "src/app/interface/zakazivanje";

export interface ZakazivanjeState {
    zakazivanja: Array<Zakazivanje>;
}

export const initalZakazivanjeState: ZakazivanjeState ={
    zakazivanja:[]
}