import Modal from "../../ui/Modal";
import EditWeightKeyboard from "./EditWeightKeyboard";

function EditWeight({ item }) {
  return (
    <Modal>
      <Modal.Open opens="EditWeight">
        <span className="flex w-full cursor-pointer items-center justify-center bg-[#909090] p-[10px] text-[#000]">
          {item?.weight}
        </span>
      </Modal.Open>

      <Modal.Window name="EditWeight">
        <EditWeightKeyboard item={item} />
      </Modal.Window>
    </Modal>
  );
}

export default EditWeight;
