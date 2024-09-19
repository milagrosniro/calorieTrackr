import { Dispatch, ReactNode } from "react";
import { IInfo } from "../data/categories";
import { ActivityActions, ActivityState } from "../reducers/activityReducer.types";

export interface IActivityContextProps{
    state: ActivityState;
    dispatch: Dispatch<ActivityActions>;
    caloriesConsumed: number;
    caloriesBurned: number;
    netCalories: number;
    isEmptyActivities: boolean;
    categoryName: (category: IInfo['category']) => string[];
}

export interface IActivityProviderProps {
    children: ReactNode
}