import { EnumProizvodAction, ProizvodActions } from "../action/proizvod.action"
import { initalProizvodState } from "../state/proizvod.state"

export function proizvodReducer(
    state = initalProizvodState,
    action: ProizvodActions
){
    switch(action.type){
        case EnumProizvodAction.GetProizvodSuccess:{
          
            return{
                ...state,
                proizvodi:action.payload
            };
        }
        default:
            return state;
    }
}