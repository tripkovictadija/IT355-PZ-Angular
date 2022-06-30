import { EnumUserAction, UserActions } from "../action/user.action"
import { initalUserState } from "../state/user.state"

export function userReducer(
    state = initalUserState,
    action: UserActions
){
    switch(action.type){
        case EnumUserAction.GetUserSuccess:{
           
            return{
                ...state,
                users:action.payload
            };
        }
        default:
            return state;
    }
}