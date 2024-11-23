import { Link, useSearchParams } from "react-router-dom";
import { useUserExercisesByMuscle } from "../../queries/useUserExercisesByMuscle";
import image from "../../assets/exerciseEx.png";
import Button from "../../ui/Button";
import Spinner from "../../ui/spinner/Spinner";

function ExerciseInfo({ onCloseModal, exerciseId }) {
  const [searchParams] = useSearchParams();
  const date = searchParams.get("date");

  const { exerciseDetails, isLoading } = useUserExercisesByMuscle(exerciseId);

  if (isLoading) return <Spinner className="!h-[20vh] w-full" />;

  return (
    <div className="p-[10px]">
      <div className="flex items-center justify-center gap-[20px] text-[20px] font-[700] leading-[24px] md:text-[32px]">
        <h1>تعلميات التمرين</h1>
        <img src={image} alt="Exercise Instruction" />
      </div>
      <p className="my-[10px] text-center">{exerciseDetails.desc}</p>
      <div className="my-[20px] rounded-md">
        <iframe
          width="100%"
          height="300"
          src="https://www.youtube.com/embed/oHgZuV1drKc"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <Link
        to={`/exercise/details/${exerciseId}?date=${date}`}
        onClick={onCloseModal}
      >
        <Button AriaLabel="startExerciseNow" variant="tertiary">
          ابدا الان
        </Button>
      </Link>
    </div>
  );
}

export default ExerciseInfo;
