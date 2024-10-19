import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import WeightsDevelopmentTable from "./WeightsDevelopmentTable";

function TrainingOption({ title, data }) {
  const [showTable, setShowTable] = useState(false);

  const toggleHandler = (id) => {
    setShowTable((prev) => !prev);
  };

  return (
    <div className="mb-[20px] flex w-full flex-col items-center justify-center gap-[20px]">
      <article
        className={`w-full cursor-pointer text-[#fff]`}
        onClick={toggleHandler}
      >
        <h2 className="flex items-center justify-between rounded-md bg-[#FFFFFF29] p-[10px] text-[20px] font-[600] leading-[42px]">
          {title}
          <IoIosArrowDown
            className={`transition-all ${showTable ? "rotate-[180deg]" : ""}`}
          />
        </h2>

        <div
          className={`overflow-hidden transition-all duration-500 ease-in-out ${
            showTable ? "clip-active h-auto py-4" : "clip-hidden h-0"
          }`}
          style={{
            clipPath: showTable
              ? "polygon(0 0, 100% 0, 100% 100%, 0 100%)"
              : "polygon(0 0, 100% 0, 100% 0, 0 0)",
          }}
        >
          <WeightsDevelopmentTable data={data} />
        </div>
      </article>
    </div>
  );
}

export default TrainingOption;
