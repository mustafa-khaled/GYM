import Modal from "../../ui/Modal";
import Button from "../../ui/Button";
import ExerciseInfo from "./ExerciseInfo";

function StartNow() {
  return (
    <Modal>
      <Modal.Open opens="StartNow">
        <Button variant="tertiary">ابدا الان</Button>
      </Modal.Open>

      <Modal.Window name="StartNow">
        <ExerciseInfo />
      </Modal.Window>
    </Modal>
  );
}

export default StartNow;
