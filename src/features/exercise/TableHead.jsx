import { MdOutlineSlowMotionVideo } from "react-icons/md";
import { PiNotepadBold } from "react-icons/pi";

import StartNow from "./StartNow";

const twoBtnStyles =
  "flex items-center w-full gap-[10px] bg-[#FFFFFF] text-[#000] p-[10px] font-[600] rounded-md cursor-pointer";

function TableHead() {
  return (
    <div className="mb-[10px] flex flex-wrap items-center justify-between gap-[10px] lg:flex-nowrap">
      <h2 className="w-full text-[20px] md:text-[32px] lg:w-[50%]">
        اسم التمرينه x 2
      </h2>

      <div className="flex w-full flex-col items-center gap-[10px] sm:flex-row">
        <StartNow>
          <span className={`${twoBtnStyles} bg-primary`}>
            التعليمات - التزضيح
            <MdOutlineSlowMotionVideo />
          </span>
        </StartNow>

        <span className={`${twoBtnStyles}`}>
          <PiNotepadBold />
          اضافه ملاحظه
        </span>
      </div>

      <p className="w-full rounded-md border border-slate-500 p-[7px] lg:w-[40%]">
        مدي التكرار
        <span className="mr-[10px] text-primary">8:12</span>
      </p>
    </div>
  );
}

export default TableHead;
