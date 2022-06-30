import { Proizvod } from "./proizvod";
import { User } from "./user";

export interface Kupovina {
    id: number;
    korisnik: User;
    proizvod: Proizvod;
}
