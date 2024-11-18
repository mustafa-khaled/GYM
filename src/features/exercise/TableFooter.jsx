import { useParams } from "react-router-dom";
import { useCompleteExercise } from "../../queries/useCompleteExercise";
import Button from "../../ui/Button";
import AddEditRoundModal from "./AddEditRoundModal";

function TableFooter() {
  const { completeExercise, isLoading } = useCompleteExercise();

  const { exerciseId } = useParams();

  function handleCompleteExercise() {
    completeExercise(exerciseId);
  }

  return (
    <div className="mt-[20px] flex flex-col gap-[10px] md:flex-row">
      <Button
        onClick={handleCompleteExercise}
        disabled={isLoading}
        variant="tertiary"
        AriaLabel="completeExercise"
      >
        اتمام التمرينه
      </Button>
      <div className="flex w-full gap-[10px]">
        <AddEditRoundModal>
          <Button
            disabled={isLoading}
            variant="tertiary"
            styles={"!bg-[#000] text-primary border-primary border"}
            AriaLabel="addNewRound"
          >
            اضافه جوله
          </Button>
        </AddEditRoundModal>
      </div>
    </div>
  );
}

export default TableFooter;
