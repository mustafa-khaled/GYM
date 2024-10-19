import Modal from "../../ui/Modal";
import ExerciseInfo from "./ExerciseInfo";

function StartNow({ children }) {
  return (
    <Modal>
      <Modal.Open opens="StartNow">{children}</Modal.Open>

      <Modal.Window name="StartNow">
        <ExerciseInfo />
      </Modal.Window>
    </Modal>
  );
}

export default StartNow;
