import { IInfo } from "../data/categories"

export type ActivityActions = { type: 'saveActivity', payload: {newActivity: IInfo}} | 
{ type: 'setActiveId',  payload: {id: IInfo['id']} }

export type ActivityState = {
    activities: IInfo[],
    activeId: IInfo['id']
}

export const initialState : ActivityState = {
    activities: [],
    activeId: ''

}

export const activityReducer = ( state: ActivityState = initialState, action: ActivityActions) =>{
    
switch(action.type){
    case 'saveActivity' : {
        let updatedActivities : IInfo[] = [];
        if(state.activeId) {
            updatedActivities = state.activities.map(act => act.id === state.activeId ? action.payload.newActivity : act) 
        }else{
            updatedActivities = [...state.activities, action.payload.newActivity]
        }
        return  {...state, activities: updatedActivities}
    };
    case 'setActiveId' : return {...state, activeId: action.payload.id};
    default: return state
};

}