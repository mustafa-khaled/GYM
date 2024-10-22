import { IoCopyOutline } from "react-icons/io5";
import Button from "../../ui/Button";
import mealImage from "../../assets/meal.png";

const fakeMeals = [
  {
    id: 1,
    name: "وجبه 1",
    calories: 11,
  },

  {
    id: 2,
    name: "وجبه 2",
    calories: 11,
  },

  {
    id: 3,
    name: "وجبه 3",
    calories: 11,
  },

  {
    id: 4,
    name: "وجبه 4",
    calories: 11,
  },

  {
    id: 5,
    name: "وجبه 4",
    calories: 11,
  },
];

function MealsList() {
  return (
    <div className="w-full rounded-md bg-bg_color p-[20px] md:w-[50%]">
      <Button styles={"!font-[700]"}>
        <span className="flex items-center justify-center gap-[10px]">
          <IoCopyOutline />
          نسخ الجدول لبكره
        </span>
      </Button>

      <div className="mt-[20px] flex h-[70vh] flex-col gap-[20px] overflow-y-auto">
        {fakeMeals?.map((meal) => {
          return (
            <div key={meal.id} className="rounded-md bg-[#000] p-[10px]">
              <div className="flex items-center justify-between">
                <h2>{meal.name}</h2>
                <div className="flex items-center gap-[10px]">
                  <p>{meal.calories}</p>
                  <img src={mealImage} alt="Meal" className="w-[30px]" />
                </div>
              </div>
              <div className="mt-[20px] flex items-center justify-between gap-[10px]">
                <Button>اضافه صنف</Button>
                <div className="hidden w-[25%] md:block"></div>
                <Button styles={"!bg-[#B0B0B0]"}>اسم الصنف</Button>
                <Button styles={"!bg-[#B0B0B0]"}>الكميه والوحده</Button>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-[20px] flex items-center justify-center rounded-md bg-[#000] p-[10px]">
        <Button styles={"!font-[700] !w-[100px]"}>اضافه وجبه</Button>
      </div>
    </div>
  );
}

export default MealsList;
