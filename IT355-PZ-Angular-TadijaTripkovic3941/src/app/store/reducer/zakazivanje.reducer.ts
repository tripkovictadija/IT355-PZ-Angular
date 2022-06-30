import { EnumZakazivanjeAction, ZakazivanjeActions } from "../action/zakazivanje.action"
import { initalZakazivanjeState } from "../state/zakazivanje.state"

export function zakazivanjeReducer(
    state = initalZakazivanjeState,
    action: ZakazivanjeActions
){
    switch(action.type){
        case EnumZakazivanjeAction.GetZakazivanjeSuccess:{
          
            return{
                ...state,
                zakazivanja:action.payload
            };
        }
        default:
            return state;
    }
}