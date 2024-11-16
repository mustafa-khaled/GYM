import { MdOutlineSlowMotionVideo } from "react-icons/md";
import Modal from "../../ui/Modal";

const twoBtnStyles =
  "flex items-center w-full gap-[10px] bg-[#FFFFFF] text-[#000] p-[10px] font-[600] rounded-md cursor-pointer";

export default function VideoInstructionModal({ exercise }) {
  return (
    <Modal>
      <Modal.Open opens="videoInstruction">
        <span className={`${twoBtnStyles} bg-primary`}>
          التعليمات - التوضيح
          <MdOutlineSlowMotionVideo />
        </span>
      </Modal.Open>

      <Modal.Window name="videoInstruction">
        <div className="my-[20px] flex flex-col gap-[15px]">
          <h1 className="text-xl font-semibold lg:text-2xl">
            التعليمات - التوضيح
          </h1>
          <div className="rounded-md">
            <iframe
              width="100%"
              height="300"
              src="https://www.youtube.com/embed/oHgZuV1drKc"
              // src={exercise?.url}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </Modal.Window>
    </Modal>
  );
}
