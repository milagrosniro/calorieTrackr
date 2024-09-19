import { createContext, useMemo, useReducer } from "react";
import { IInfo, categories } from "../data/categories";
import { activityReducer, initialState } from "../reducers/activityReducer";
import { IActivityContextProps, IActivityProviderProps } from "./activityContext.type";


export const ActivityContext = createContext<IActivityContextProps>({} as IActivityContextProps)

export const ActivityProvider = ({children}: IActivityProviderProps) =>{

    const [state, dispatch] = useReducer(activityReducer, initialState);
    const {activities} = state;

    
  const caloriesConsumed = useMemo( () =>
      activities.reduce((acc, obj) => {
        return obj.category === 1 ? acc + obj.calories : acc;
      }, 0),
    [activities]
  );

  const caloriesBurned = useMemo(() =>
      activities.reduce((acc, obj) => {
        return obj.category === 2 ? acc + obj.calories : acc;
      }, 0),
    [activities]
  );

  const netCalories = useMemo(() => caloriesConsumed - caloriesBurned, [activities]);

  const isEmptyActivities = useMemo( () => activities.length === 0, [activities]);

  const categoryName = useMemo( () => (category: IInfo["category"]) => categories.map(cat => cat.id === category ? cat.name : ''), [activities]);
    
    return <ActivityContext.Provider
    value={{
        state,
        dispatch,
        caloriesBurned,
        caloriesConsumed,
        netCalories,
        isEmptyActivities,
        categoryName
        
    }}>
    {children}
    </ActivityContext.Provider>
}

