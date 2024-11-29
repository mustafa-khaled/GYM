import { useState } from "react";
import MealItem from "./MealItem";
import Spinner from "../../ui/spinner/Spinner";

function MealsWithDetailsList({ loading, meals }) {
  const [showAll, setShowAll] = useState(false);

  const visibleMeals = showAll ? meals : meals?.slice(0, 3);

  return (
    <div className="mb-5 rounded-lg bg-bg_color p-5 text-white">
      {loading && <Spinner className="!h-[5vh] w-full" />}
      {!meals?.length && <div>لا توجد وجبات لعرضها</div>}

      <div className="w-full divide-y-[0.5px] divide-[#ffffff80]">
        {visibleMeals?.map((meal) => (
          <MealItem key={meal?.id} meal={meal} />
        ))}
      </div>

      {/* Toggle Button */}
      {meals?.length > 3 && (
        <div className="mt-4 space-y-3">
          <button onClick={() => setShowAll(!showAll)} className="text-primary">
            {showAll ? "عرض أقل" : "عرض المزيد"}
          </button>
          {!showAll && (
            <p className="text-[#ffffff]">{`${meals?.length - 3} وجبات اخري`}</p>
          )}
        </div>
      )}
    </div>
  );
}

export default MealsWithDetailsList;
