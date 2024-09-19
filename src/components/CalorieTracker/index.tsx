import { useActivity } from "../../hook/useActivity";
import CalorieDisplay from "../CalorieDisplay";

const CalorieTrackr = () => {

  const { caloriesBurned, caloriesConsumed, netCalories } = useActivity();

  return (
    <>
      <h2 className=" text-4xl font-black text-white text-center">
        {" "}
        Energy Balance
      </h2>
      <div className=" flex flex-col items-center md:flex-row md:justify-between gap-5 mt-10">
        <CalorieDisplay text="Consumed" quantity={caloriesConsumed} />
        <CalorieDisplay text="Burned" quantity={caloriesBurned} />
        <CalorieDisplay text="Difference" quantity={netCalories} />
      </div>
    </>
  );
};

export default CalorieTrackr;
