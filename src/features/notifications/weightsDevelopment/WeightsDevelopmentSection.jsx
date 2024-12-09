import { useWeightEvaluation } from "../../../queries/useWeightEvaluation";
import Spinner from "../../../ui/spinner/Spinner";
import TableTitle from "../TableTitle";
import TrainingOption from "./TrainingOption";
import WeightsDevelopmentTitle from "./WeightsDevelopmentTitle";

function WeightsDevelopmentSection() {
  const { isLoading, exercises } = useWeightEvaluation();

  if (isLoading) return <Spinner className="!h-[20vh] w-full" />;

  return (
    <div className="bg-bg_color p-[20px]">
      <WeightsDevelopmentTitle />
      <TableTitle />

      {exercises?.map((exercise, index) => {
        return (
          <TrainingOption
            key={index}
            title={exercise.day}
            data={exercise.exercises}
          />
        );
      })}
    </div>
  );
}

export default WeightsDevelopmentSection;
