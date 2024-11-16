import { HiTrash } from "react-icons/hi2";
import { useDeleteRound } from "../../queries/useDeleteRound";
import Modal from "../../ui/Modal";
import ConfirmMessage from "../../ui/ConfirmMessage";

export default function DeleteRoundModal({ exercise }) {
  const { deleteRound, isDeleting } = useDeleteRound();

  function handleDeleteRound() {
    deleteRound(exercise?.id);
  }

  return (
    <Modal>
      <Modal.Open opens="deleteExercise">
        <div className="flex h-[30px] w-[30px] cursor-pointer items-center justify-center rounded-full bg-black">
          <HiTrash className="text-lg text-primary" />
        </div>
      </Modal.Open>

      <Modal.Window name="deleteExercise">
        <ConfirmMessage
          disabled={isDeleting}
          message={`هل أنت متأكد من انك تريد حذف تلك الجولة`}
          onConfirm={handleDeleteRound}
        />
      </Modal.Window>
    </Modal>
  );
}
