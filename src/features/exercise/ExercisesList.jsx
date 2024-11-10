import { useUserExercises } from "../../queries/useUserExercises";
import image from "../../assets/exerciseEx.png";
import Spinner from "../../ui/spinner/Spinner";

function ExercisesList() {
  const { isLoading, exercises } = useUserExercises();

  if (isLoading) return <Spinner className="!h-[20vh] w-full" />;
  if (!exercises) return;

  return (
    <div className="w-full space-y-[20px]">
      {exercises?.map((ex, index) => {
        return (
          <div key={ex.id} className="flex items-center justify-between">
            <p className="flex items-center gap-[5px] md:text-[24px]">
              <span className="flex h-[20px] w-[20px] items-center justify-center rounded-full bg-[#fff] text-sm text-[#000]">
                {index + 1}
              </span>
              {ex.name}- {ex.repeat}
            </p>
            <img src={image} alt="" />
          </div>
        );
      })}
    </div>
  );
}

export default ExercisesList;
