import { ActionReducerMap } from "@ngrx/store";
import { DoktorState } from "../state/doktor.state";
import { KupovinaState } from "../state/kupovina.state";
import { ProizvodState } from "../state/proizvod.state";
import { UserState } from "../state/user.state";
import { ZakazivanjeState } from "../state/zakazivanje.state";
import { doktorReducer } from "./doktor.reducer";
import { kupovinaReducer } from "./kupovina.reducer";
import { proizvodReducer } from "./proizvod.reducer";
import { userReducer } from "./user.reducer";
import { zakazivanjeReducer } from "./zakazivanje.reducer";

export const rootReducer = {};

export interface AppState{
    doktor: DoktorState;
    zakazivanje: ZakazivanjeState;
    user: UserState;
    proizvod: ProizvodState;
    kupovina: KupovinaState;
}

export const reducers: ActionReducerMap< AppState, any>={
    doktor: doktorReducer,
    zakazivanje: zakazivanjeReducer,
    user: userReducer,
    proizvod: proizvodReducer,
    kupovina: kupovinaReducer
};