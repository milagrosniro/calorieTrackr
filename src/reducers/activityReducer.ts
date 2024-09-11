import { IInfo } from "../data/categories"

export type ActivityActions = {
type: 'saveActivity',
payload: {newActivity: IInfo}
}

type ActivityState = {
    activities: IInfo[]
}

export const initialState : ActivityState = {
    activities: []

}

export const activityReducer = ( state: ActivityState = initialState, action: ActivityActions) =>{
    
switch(action.type){
    case 'saveActivity' : return {...state, activities: [...state.activities, action.payload.newActivity]}
    default: return state
};

}