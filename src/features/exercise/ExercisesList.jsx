import { useUserExercises } from "../../queries/useUserExercises";
import image from "../../assets/exerciseEx.png";
import Spinner from "../../ui/spinner/Spinner";
import ShowExercise from "./ShowExercise";

function ExercisesList() {
  const { isLoading, exercises } = useUserExercises();

  if (isLoading) return <Spinner className="!h-[20vh] w-full" />;
  if (!exercises) return;

  return (
    <div className="w-full space-y-[20px]">
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
                {ex.name}- {ex.repeat}
              </p>
              <img src={image} alt="" />
            </div>
          </ShowExercise>
        );
      })}
    </div>
  );
}

export default ExercisesList;
