import { IActivityListProps } from "./activityList.types";
import { IInfo, categories } from "../../data/categories";
import { useMemo } from "react";
import {PencilSquareIcon} from '@heroicons/react/24/outline';

const ActivityList = ({ activities }: IActivityListProps) => {

  const categoryName = useMemo(
    () => (category: IInfo["category"]) => {
      const nameCategory = categories.find(
        (elem) => elem.id === category
      )?.name;
      return nameCategory;
    },
    [activities]
  );

  return (
    <>
      <h2 className=" text-4xl font-bold text-slate-600 text-center">
        Food & Activities
      </h2>

      {activities.map((act) => (
        <div
          key={act.id}
          className=" px-5 py-10 bg-white mt-5 flex justify-between"
        >
          <div className=" space-y-2 relative">
            <p
              className={`absolute -top-8 -left-8 px-10 py-2 text-white uppercase font-bold ${
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
              />
            </button>
          </div>
        </div>
      ))}
    </>
  );
};

export default ActivityList;
