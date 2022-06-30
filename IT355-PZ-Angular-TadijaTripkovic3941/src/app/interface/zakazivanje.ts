import { Doktor } from "./doktor";

export interface Zakazivanje {
    id_zakazivanje: number;
    doktor: Doktor;
    ime_pacijenta: string;
    prezime_pacijenta: string;
    naziv: string;
    datum: string;
    vreme: string;
    telefon: string;
}
