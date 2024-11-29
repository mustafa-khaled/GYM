import { IoCopyOutline } from "react-icons/io5";
import { Link, useSearchParams } from "react-router-dom";
import { useUserDietByDate } from "../../queries/useUserDietByDate";
import Button from "../../ui/Button";
import mealImage from "../../assets/meal.png";
import Spinner from "../../ui/spinner/Spinner";

function TrainerMealsList() {
  const [searchParams] = useSearchParams();
  const currentDate = new Date().toISOString().split("T")[0];
  const date = searchParams.get("date") || currentDate;

  const { isLoading, userDietByDate } = useUserDietByDate(date);

  return (
    <div className="w-full rounded-md bg-bg_color p-[20px] md:w-[50%]">
      {isLoading && <Spinner className="!h-[5vh] w-full" />}
      {!userDietByDate?.length && !isLoading && (
        <div className="text-center">لايوجد وجبات لعرضها</div>
      )}

      {userDietByDate?.length > 0 && (
        <Button AriaLabel="copyTable" styles={"!font-[700]"}>
          <span className="flex items-center justify-center gap-[10px]">
            <IoCopyOutline />
            نسخ الجدول لبكره
          </span>
        </Button>
      )}

      <div className="mt-[20px] flex h-[50vh] flex-col gap-[20px] overflow-y-auto">
        {userDietByDate?.map((meal) => {
          return (
            <div key={meal.id} className="rounded-md bg-[#000] p-[10px]">
              <div className="flex items-center justify-between">
                <div className="flex items-center justify-center gap-1">
                  <h2>{meal?.meal_type?.name}</h2>
                </div>
                <div className="flex items-center gap-[10px]">
                  <p>{meal.calories}</p>
                  <img src={mealImage} alt="Meal" className="w-[30px]" />
                </div>
              </div>
              <div className="mt-[20px] flex items-center justify-between gap-[10px]">
                <Link to={`allMeals`} className="w-full">
                  <Button AriaLabel="addClassify">اضافه صنف</Button>
                </Link>
                <div className="hidden w-[25%] md:block"></div>
                <Button AriaLabel="ClassifyName" styles={"!bg-[#B0B0B0]"}>
                  {meal?.food?.name}
                </Button>
                <Button AriaLabel="Quantity" styles={"!bg-[#B0B0B0]"}>
                  {meal?.quantity}
                </Button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default TrainerMealsList;
