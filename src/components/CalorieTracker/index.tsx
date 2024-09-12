import { useMemo } from "react"
import { ICaloriesTrackrProps } from "./caloriesTrackr.types"
import CalorieDisplay from "../CalorieDisplay";

const CalorieTrackr = ({activities}: ICaloriesTrackrProps) => {

    const caloriesConsumed = useMemo(()=>activities.reduce((acc, obj )=> {return obj.category === 1 ? acc + obj.calories : acc},0),[activities]);

    const caloriesBurned = useMemo(()=>activities.reduce((acc,obj)=>{return obj.category === 2 ? acc + obj.calories : acc },0),[activities]);

    const netCalories = useMemo (()=>caloriesConsumed - caloriesBurned,[activities])

  return (
    <>
    <h2 className=" text-4xl font-black text-white text-center"> Energy Balance</h2>
    <div className=" flex flex-col items-center md:flex-row md:justify-between gap-5 mt-10">

      <CalorieDisplay text="Consumed" quantity={caloriesConsumed}/>
      <CalorieDisplay text="Burned" quantity={caloriesBurned}/>
      <CalorieDisplay text="Difference" quantity={netCalories}/>


    </div>

    </>
  )
}

export default CalorieTrackr