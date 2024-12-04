import { useUserExercises } from "../../queries/useUserExercises";
import { useSearchParams } from "react-router-dom";

import ExercisesList from "./ExercisesList";

function TodayExerciseSection() {
  const [searchParams] = useSearchParams();
  const currentDate = new Date().toISOString().split("T")[0];
  const selectedDate = searchParams.get("date") || currentDate;
  const { muscleName, muscleImage } = useUserExercises(selectedDate);

  return (
    <div className="rounded-md bg-bg_color p-[20px]">
      <div className="flex items-center justify-center gap-[20px] text-[20px] font-[700] leading-[24px] md:text-[32px]">
        <h1>{muscleName}</h1>
        {muscleImage && (
          <img src={muscleImage || ""} alt={muscleName} className="w-[100px]" />
        )}
      </div>
      <div className="my-[20px] flex flex-col items-center gap-[20px] md:flex-row">
        {/* ffff */}
        <ExercisesList />

        {muscleImage && (
          <div className="flex w-full items-center justify-center md:justify-end">
            <img src={muscleImage || ""} alt={muscleName || ""} />
          </div>
        )}
      </div>
    </div>
  );
}

export default TodayExerciseSection;
