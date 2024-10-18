import Button from "../../../ui/Button";
import bodyImage from "../../../assets/body.png";
import { LuFileImage } from "react-icons/lu";
import { HiOutlineArrowsPointingOut } from "react-icons/hi2";

const test = 2;
function WeeklyNotificationsSection() {
  return (
    <>
      <div className="flex items-center justify-between gap-[20px]">
        <div className="w-[115px]">
          <Button variant="tertiary" styles="!bg-[#000] !text-[#fff]">
            السابق
          </Button>
        </div>
        <div className="w-[115px]">
          <Button variant="tertiary" styles="!bg-[#000] !text-primary">
            الاسبوع {test}
          </Button>
        </div>
      </div>

      <div className="mt-[20px] flex flex-col items-center gap-[20px] lg:flex-row">
        <div className="flex min-h-[70vh] w-full items-center justify-center lg:w-[50%]">
          <img src={bodyImage} alt="body" className="h-[70vh]" />
        </div>
        <div className="flex min-h-[70vh] w-full flex-col items-end gap-[10px] rounded-md md:flex-row md:gap-0 lg:w-[50%]">
          <div className="w-full bg-[#000] p-[10px]">
            <div className="min-h-[15vh]">
              <HiOutlineArrowsPointingOut className="text-[40px]" />
            </div>
            <div className="flex min-h-[55vh] flex-col items-center justify-center gap-[40px]">
              <LuFileImage className="text-[100px] text-primary" />
              <h4 className="font-[600] leading-[24px]">
                ارفاق صوره من الامام
              </h4>
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
      </div>
    </>
  );
}

export default WeeklyNotificationsSection;
