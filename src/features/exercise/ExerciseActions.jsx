import { useState } from "react";
import { PiDotsThreeCircleVerticalLight } from "react-icons/pi";
import { FiEdit } from "react-icons/fi";
import { useOutsideClick } from "../../hooks/useOutsideClick";

import DeleteRoundModal from "./DeleteRoundModal";
import AddEditRoundModal from "./AddEditRoundModal";

export default function ExerciseActions({ exercise }) {
  const [openMenu, setOpenMenu] = useState(false);

  const toggleMenu = () => setOpenMenu((prev) => !prev);
  const ref = useOutsideClick(() => setOpenMenu(false));

  return (
    <div ref={ref} className="relative cursor-pointer" onClick={toggleMenu}>
      <PiDotsThreeCircleVerticalLight className="text-2xl text-primary" />

      {openMenu && (
        <div
          className={`absolute -left-[30px] top-[-62px] z-30 w-[150px] translate-x-[-50%] rounded-md border bg-white p-[5px] text-sm shadow-lg`}
        >
          <AddEditRoundModal roundToEdit={exercise}>
            <div className="flex items-center gap-1 rounded-md p-[8px] text-black transition-all hover:bg-primary hover:font-bold">
              <FiEdit />
              <span>تعديل</span>
            </div>
          </AddEditRoundModal>

          <DeleteRoundModal exercise={exercise} />
        </div>
      )}
    </div>
  );
}
