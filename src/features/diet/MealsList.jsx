import { IoCopyOutline } from "react-icons/io5";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useUserDietByDate } from "../../queries/useUserDietByDate";
import Button from "../../ui/Button";
import mealImage from "../../assets/meal.png";
import Spinner from "../../ui/spinner/Spinner";

function MealsList() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const date = searchParams.get("date");

  const { isLoading, userDietByDate } = useUserDietByDate(date);
  if (isLoading) return <Spinner className="!h-[20vh] w-full" />;

  const handleNavigate = (id) => {
    navigate(`diet/${id}`);
  };

  return (
    <div className="w-full rounded-md bg-bg_color p-[20px] md:w-[50%]">
      {!userDietByDate?.length && (
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
                <h2>{meal?.meal_type?.name}</h2>
                <div className="flex items-center gap-[10px]">
                  <p>{meal.calories}</p>
                  <img src={mealImage} alt="Meal" className="w-[30px]" />
                </div>
              </div>
              <div className="mt-[20px] flex items-center justify-between gap-[10px]">
                <Button AriaLabel="addClassify">اضافه صنف</Button>
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

      <div className="mt-[20px] flex items-center justify-center rounded-md bg-[#000] p-[10px]">
        <Button AriaLabel="anotherMeal" styles={"!font-[700] !w-[100px]"}>
          اضافه وجبه
        </Button>
      </div>
    </div>
  );
}

export default MealsList;
