import { useUserExercises } from "../../queries/useUserExercises";
import { useSearchParams } from "react-router-dom";
import Spinner from "../../ui/spinner/Spinner";
import ShowExercise from "./ShowExercise";

function ExercisesList() {
  const [searchParams] = useSearchParams();
  const currentDate = new Date().toISOString().split("T")[0];
  const selectedDate = searchParams.get("date") || currentDate;
  const { isLoading, exercises, muscleImage } = useUserExercises(selectedDate);

  if (isLoading) return <Spinner className="!h-[20vh] w-full" />;
  if (!exercises?.length)
    return (
      <div className="w-full text-center text-xl">لا توجد تمارين لعرضها</div>
    );

  return (
    <div className="w-full space-y-[20px] self-start">
      {exercises?.map((ex, index) => {
        return (
          <ShowExercise key={ex.id} exerciseId={ex.id}>
            <div
              key={ex.id}
              className="flex cursor-pointer items-center justify-between rounded-md bg-[#0c0c0c] p-[5px]"
            >
              <p className="flex items-center gap-[5px] md:text-[24px]">
                <span className="flex h-[20px] w-[20px] items-center justify-center rounded-full bg-[#fff] text-sm text-[#000]">
                  {index + 1}
                </span>
                {ex.name}- {ex.r_p_e}
              </p>
              <img src={muscleImage} alt={ex.name} className="w-[80px]" />
            </div>
          </ShowExercise>
        );
      })}
    </div>
  );
}

export default ExercisesList;
