import { User } from "src/app/interface/user";

export interface UserState {
    users: Array<User>;
}

export const initalUserState: UserState ={
    users:[]
}