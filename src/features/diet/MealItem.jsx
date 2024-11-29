import mealImage from "../../assets/meal.png";

function MealItem({ meal }) {
  return (
    <div className="w-full cursor-pointer py-3 text-[#ffffff]">
      <div className="flex w-full items-center justify-between sm:w-[50%]">
        <div className="space-y-[4px]">
          <h2 className="font-bold">{meal?.name}</h2>
          <div className="flex gap-4 text-xs">
            <div>السعرات الحرارية: {meal?.calories_per_gram}</div>
            <div>الدهون: {meal?.fat_per_gram}</div>
            <div>البروتين: {meal?.protein_per_gram}</div>
          </div>
        </div>
        <img src={mealImage} alt="Meal" className="h-16 w-16" />
      </div>
    </div>
  );
}

export default MealItem;
