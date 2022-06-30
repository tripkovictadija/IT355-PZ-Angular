import { EnumKupovinaAction, KupovinaActions } from "../action/kupovina.action"
import { initalKupovinaState } from "../state/kupovina.state"

export function kupovinaReducer(
    state = initalKupovinaState,
    action: KupovinaActions
){
    switch(action.type){
        case EnumKupovinaAction.GetKupovinaSuccess:{
           
            return{
                ...state,
                kupovine:action.payload
            };
        }
        default:
            return state;
    }
}