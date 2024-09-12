import { Dispatch } from "react";
import { ActivityActions, ActivityState } from "../../reducers/activityReducer"

export interface IInfoState {
    id: string;
    category: 1 | 2,
    activity: string,
    calories: number
}

export interface IFormProps{
    dispatch: Dispatch<ActivityActions>;
    state: ActivityState
}