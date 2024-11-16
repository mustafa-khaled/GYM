import { useUserExercises } from "../../queries/useUserExercises";
import { useSearchParams } from "react-router-dom";

import image from "../../assets/exerciseEx.png";
import imag2 from "../../assets/exe2.png";
import ExercisesList from "./ExercisesList";

function TodayExerciseSection() {
  const [searchParams] = useSearchParams();
  const selectedDate = searchParams.get("date");
  const { muscleName } = useUserExercises(selectedDate);

  return (
    <div className="rounded-md bg-bg_color p-[20px]">
      <div className="flex items-center justify-center gap-[20px] text-[20px] font-[700] leading-[24px] md:text-[32px]">
        <h1>{muscleName}</h1>
        <img src={image} alt="" />
      </div>
      <div className="my-[20px] flex flex-col items-center gap-[20px] md:flex-row">
        {/* ffff */}
        <ExercisesList />
        <div className="flex w-full items-center justify-center md:justify-end">
          <img src={imag2} alt="" />
        </div>
      </div>
      {/* <StartNow>
        <Button variant="tertiary">ابدا الان</Button>
      </StartNow> */}
    </div>
  );
}

export default TodayExerciseSection;
