import Modal from "../../ui/Modal";
import ExerciseInfo from "./ExerciseInfo";

function ShowExercise({ children, exerciseId }) {
  return (
    <Modal>
      <Modal.Open opens="ShowExercise">{children}</Modal.Open>

      <Modal.Window name="ShowExercise">
        <ExerciseInfo exerciseId={exerciseId} />
      </Modal.Window>
    </Modal>
  );
}

export default ShowExercise;
