import { LuFileImage } from "react-icons/lu";
import { HiOutlineArrowsPointingOut } from "react-icons/hi2";

function ImagesContainer() {
  return (
    <div className="flex min-h-[70vh] w-full flex-col items-end gap-[10px] rounded-md md:flex-row md:gap-0 lg:w-[40%]">
      <div className="w-full bg-[#000] p-[10px]">
        <div className="min-h-[15vh]">
          <HiOutlineArrowsPointingOut className="text-[40px]" />
        </div>
        <div className="flex min-h-[55vh] flex-col items-center justify-center gap-[40px]">
          <LuFileImage className="text-[100px] text-primary" />
          <h4 className="font-[600] leading-[24px]">ارفاق صوره من الامام</h4>
        </div>
      </div>

      <div className="w-full bg-[#000] p-[10px]">
        <div className="min-h-[15vh]">
          <HiOutlineArrowsPointingOut className="text-[40px]" />
        </div>
        <div className="flex min-h-[55vh] flex-col items-center justify-center gap-[40px]">
          <LuFileImage className="text-[100px] text-primary" />
          <h4 className="font-[600] leading-[24px]">ارفاق صوره من الخلف</h4>
        </div>
      </div>
    </div>
  );
}

export default ImagesContainer;
