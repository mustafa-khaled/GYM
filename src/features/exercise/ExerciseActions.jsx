import { FaRegEdit } from "react-icons/fa";
import DeleteRoundModal from "./DeleteRoundModal";
import AddEditRoundModal from "./AddEditRoundModal";

export default function ExerciseActions({ exercise }) {
  return (
    <div className="relative flex items-center justify-center gap-[10px]">
      <AddEditRoundModal roundToEdit={exercise}>
        <div className="flex h-[30px] w-[30px] cursor-pointer items-center justify-center rounded-full bg-black">
          <FaRegEdit className="text-lg text-primary" />
        </div>
      </AddEditRoundModal>

      <DeleteRoundModal exercise={exercise} />
    </div>
  );
}
