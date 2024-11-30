import mealImage from "../../assets/meal.png";
import { FaCirclePlus } from "react-icons/fa6";
import { GrSubtractCircle } from "react-icons/gr";

function SingleMealHead() {
  return (
    <div className="flex flex-wrap items-center justify-around gap-[40px] text-3xl sm:flex-nowrap sm:justify-start">
      <div className="flex items-center gap-[40px]">
        <h2>نوع الوجبه</h2>
        <div className="flex items-center gap-[10px]">
          <FaCirclePlus className="cursor-pointer" />
          <span>1</span>
          <GrSubtractCircle className="cursor-pointer" />
        </div>
      </div>
      <img src={mealImage} alt="" />
    </div>
  );
}

export default SingleMealHead;
