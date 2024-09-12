import {categories} from "../../data/categories";
import { useEffect, useState } from "react";
import { IFormProps, IInfoState } from "./form.types.ts";
import { initialInfoState } from "../../constants/index.ts";
import {v4 as uuidV4} from 'uuid';

const Form = ({dispatch, state}:IFormProps) => {

  const [info, setInfo] = useState<IInfoState>(initialInfoState);
  
  useEffect(()=>{
    if(state.activeId){
      const selectedActivity = state.activities.find(stateActivity => stateActivity.id === state.activeId)
      if(selectedActivity)  setInfo(selectedActivity)
    }
  },[state.activeId])

  const handleInfo = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) => {
    const isNumber : boolean = ['category', 'calories'].includes(e.target.id);
    setInfo({ ...info, [e.target.id]: isNumber ? +e.target.value : e.target.value });
  };

  const isValidActivity = () => info.activity.trim() !== '' && info.calories > 0

  const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch({type:'saveActivity',payload: {newActivity: info}})
    setInfo({...initialInfoState, id: uuidV4()})
    if(state.activeId.trim() !== '') dispatch({type: 'setActiveId', payload: {id:''}})
  }

  return (
    <form className=" space-y-5 bg-white shadow p-10 rounded-lg"
    onSubmit={ handleSubmit}
    >
      <div className=" grid grid-cols-1 gap-3">
        <label htmlFor="category" className=" font-bold">Category:</label>
        <select
          className=" border border-slate-300 p-2 rounded-lg w-full bg-white"
          id="category"
          value={info.category}
          onChange={handleInfo}
        >
          {categories.map((category) => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </select>
      </div>
      <div className=" grid grid-cols-1 gap-3">
        <label htmlFor="activity" className=" font-bold">
          Activity:
        </label>
        <input
          id="activity"
          type="text"
          className=" border border-slate-300 p-2 rounded-lg"
          placeholder="Ex. Meal, Juice, Salad, Exercise, Bicycle, Dumbbells"
          value={info.activity}
          onChange={handleInfo}
        />
      </div>

      <div className=" grid grid-cols-1 gap-3">
        <label htmlFor="calories" className=" font-bold">
          Calories:
        </label>
        <input
          id="calories"
          type="number"
          className=" border border-slate-300 p-2 rounded-lg"
          placeholder="Calories Ex. 200, 300"
          value={info.calories}
          onChange={handleInfo}
        />
        
      </div>

      <input
        type="submit"
        className=" bg-gray-800 hover:bg-gray-900 w-full p-2 font-bold uppercase text-white cursor-pointer disabled:opacity-15"
        value={info.category === 1 ? 'Save Food ': "Save Exercise"}
        disabled={!isValidActivity()}
      />
    </form>
  );
};

export default Form;
