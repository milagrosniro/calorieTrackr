import { ICalorieDisplayProps } from "./calorieDisplay.types"


const CalorieDisplay = ({text, quantity}: ICalorieDisplayProps) => {
  return (
    <p className=" text-white font-bold rounded-full grid grid-cols-1 gap-3 text-center">
        <span className=" font-black text-6xl text-orange">{quantity}</span>
        {text}
        </p>

  )
}

export default CalorieDisplay