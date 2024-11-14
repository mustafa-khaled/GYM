import { HiTrash } from "react-icons/hi2";
import Modal from "../../ui/Modal";
import ConfirmMessage from "../../ui/ConfirmMessage";
import { useDeleteRound } from "../../queries/useDeleteRound";

export default function DeleteRoundModal({ exercise }) {
  console.log("test");
  const { deleteRound, isDeleting } = useDeleteRound();

  function handleDeleteRound() {
    deleteRound(exercise?.id);
  }

  return (
    <Modal>
      <Modal.Open opens="deleteExercise">
        <div className="flex items-center gap-1 rounded-md p-[8px] text-black transition-all hover:bg-primary hover:font-bold">
          <HiTrash />
          <span>حذف الجولة</span>
        </div>
      </Modal.Open>

      <Modal.Window name="deleteExercise">
        <ConfirmMessage
          disabled={isDeleting}
          message={`هل أنت متأكد من انك تريد حذف تلك الجولة(${exercise?.name})`}
          onConfirm={handleDeleteRound}
        />
      </Modal.Window>
    </Modal>
  );
}
