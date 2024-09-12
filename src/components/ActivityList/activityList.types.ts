import { Dispatch } from "react";
import { IInfo } from "../../data/categories";
import { ActivityActions } from "../../reducers/activityReducer.types";

export interface IActivityListProps{
    activities: IInfo[],
    dispatch: Dispatch<ActivityActions>
}