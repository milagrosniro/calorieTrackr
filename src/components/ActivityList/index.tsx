import { IActivityListProps } from "./activityList.types";
import { IInfo, categories } from "../../data/categories";
import { useMemo } from "react";
import {PencilSquareIcon, XCircleIcon} from '@heroicons/react/24/outline';

const ActivityList = ({ activities, dispatch }: IActivityListProps) => {

  const categoryName = useMemo(
    () => (category: IInfo["category"]) => {
      const nameCategory = categories.find(
        (elem) => elem.id === category
      )?.name;
      return nameCategory;
    },
    [activities]
  );

  const isEmptyActivities = useMemo(()=>activities.length === 0 , [activities])

  const onClick = (id: IInfo['id']) => {
    dispatch({ type: 'setActiveId',  payload: {id} })
  }

  return (
    <>
    <h2 className=" text-4xl font-bold text-slate-600 text-center">
        Food & Activities
      </h2>
      {isEmptyActivities ? <p className=" text-center"> No Activities </p> : 
      activities.map((act) => (
        <div
          key={act.id}
          className=" px-5 py-10 bg-white mt-5 flex justify-between shadow rounded-lg"
        >
          <div className=" space-y-2 relative">
            <p
              className={`absolute -top-8 -left-8 px-10 py-2 text-white uppercase font-bold rounded-lg ${
                act.category === 1 ? "bg-lime-500" : "bg-orange-500"
              }`}
            >
              {categoryName(act.category)}
            </p>
            <p className=" text-2xl font-bold pt-5"> {act.activity} </p>
            <p className=" text-2xl font-black text-lime-500">
              {" "}
              {`${act.calories} `} <span>Calories</span>{" "}
            </p>
          </div>

          <div className=" flex gap-5 items-center">
          <button>
              <PencilSquareIcon 
              className=" h-8 w-8 text-gray-800"
              onClick={()=> onClick(act.id)}
              />
            </button>
            
            <button>
              <XCircleIcon 
              className=" h-8 w-8 text-red-500"
              onClick={()=> dispatch({type:'deleteActivity', payload:{id:act.id}})}
              />
            </button>


          </div>
        </div>
      ))
      }
      

    </>
  );
};

export default ActivityList;
