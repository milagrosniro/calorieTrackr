import { Dispatch } from "react";
import { IInfo } from "../../data/categories";
import { ActivityActions } from "../../reducers/activityReducer";

export interface IActivityListProps{
    activities: IInfo[],
    dispatch: Dispatch<ActivityActions>
}