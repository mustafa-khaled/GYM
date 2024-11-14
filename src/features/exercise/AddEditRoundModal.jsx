import Modal from "../../ui/Modal";
import AddEditRoundForm from "./AddEditRoundForm";

export default function AddEditRoundModal({ children, roundToEdit }) {
  return (
    <Modal>
      <Modal.Open opens="addEditRoundModal">{children}</Modal.Open>

      <Modal.Window name="addEditRoundModal">
        <AddEditRoundForm roundToEdit={roundToEdit} />
      </Modal.Window>
    </Modal>
  );
}
