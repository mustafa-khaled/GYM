import { PiNotepadBold } from "react-icons/pi";

import VideoInstructionModal from "./VideoInstructionModal";

const twoBtnStyles =
  "flex items-center w-full gap-[10px] bg-[#FFFFFF] text-[#000] p-[10px] font-[600] rounded-md cursor-pointer";

function TableHead({ data }) {
  return (
    <div className="mb-[10px] flex flex-wrap items-center justify-between gap-[10px] lg:flex-nowrap">
      <h2 className="w-full text-[20px] md:text-[32px] lg:w-[50%]">
        {`${data?.name} x ${data?.r_p_e}`}
      </h2>

      <div className="flex w-full flex-col items-center gap-[10px] sm:flex-row">
        <VideoInstructionModal exercise={data} />

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
