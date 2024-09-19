import { initialInfoState } from "../constants"
import { IInfo } from "../data/categories"
import { ActivityActions, ActivityState } from "./activityReducer.types"

const localStorageActivities = () : IInfo[] => {
    const activities = localStorage.getItem('activities')
    return activities ? JSON.parse(activities) : []
}
export const initialState : ActivityState = {
    activities: localStorageActivities(),
    activeId: '',
    infoForm: initialInfoState
}

export const activityReducer = ( state: ActivityState = initialState, action: ActivityActions) => {
    
switch(action.type){
    case 'saveActivity' : {
        let updatedActivities : IInfo[] = [];
        if(state.activeId) {
            updatedActivities = state.activities.map(act => act.id === state.activeId ? action.payload.newActivity : act) 
        }else{
            updatedActivities = [...state.activities, action.payload.newActivity]
        }
        return  {...state, activities: updatedActivities, activeId: ''}
    };
    case 'setActiveId' : return {...state, activeId: action.payload.id};
    case 'deleteActivity' : return  {...state, activities: state.activities.filter(act => act.id !== action.payload.id)}
    case 'resetAll' : return {activities: [], activeId: '', infoForm: initialInfoState};

    case 'uploadInfoForm' : {
        const {info} = action.payload
        return{
            ...state,
            infoForm: info
        }
    }

    default: return state
};

}