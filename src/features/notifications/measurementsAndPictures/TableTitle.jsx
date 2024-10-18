import { IoIosArrowDown } from "react-icons/io";
import { PiNotepadBold } from "react-icons/pi";

const twoBtnStyles =
  "flex items-center gap-[10px] bg-[#f3c4c4] text-[#000] p-[10px] font-[600] rounded-md cursor-pointer";

function TableTitle() {
  return (
    <div className="mb-[20px] flex items-center justify-between gap-[15px] sm:justify-start">
      <h2 className="font-[700] leading-[24px] md:text-[20px]">
        متابعه التطور
      </h2>
      <div className="flex flex-col items-center gap-[10px] sm:flex-row">
        <span className={`${twoBtnStyles}`}>
          الاسبوع الحالي
          <IoIosArrowDown />
        </span>
        <span className={`${twoBtnStyles}`}>
          <PiNotepadBold />
          اضافه ملاحظه
        </span>
      </div>
    </div>
  );
}

export default TableTitle;
