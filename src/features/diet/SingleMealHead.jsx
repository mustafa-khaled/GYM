import { FaCirclePlus } from "react-icons/fa6";
import { GrSubtractCircle } from "react-icons/gr";
import mealImage from "../../assets/meal.png";

function SingleMealHead({ quantity, updateQuantity }) {
  return (
    <div className="flex flex-wrap items-center justify-around gap-[40px] text-3xl sm:flex-nowrap sm:justify-start">
      <div className="flex items-center gap-[40px]">
        <h2>نوع الوجبه</h2>
        <div className="flex items-center gap-[20px]">
          <FaCirclePlus
            className="cursor-pointer"
            onClick={() => updateQuantity("add")}
          />
          <span>{quantity}</span>
          <GrSubtractCircle
            className="cursor-pointer"
            onClick={() => updateQuantity("subtract")}
          />
        </div>
      </div>
      <img src={mealImage} alt="" />
    </div>
  );
}

export default SingleMealHead;
