import Button from "../../../ui/Button";
import bodyImage from "../../../assets/body.png";
import { LuFileImage } from "react-icons/lu";
import { HiOutlineArrowsPointingOut } from "react-icons/hi2";
import UploadFile from "../../../ui/UploadFile";
import Photo from "./Photo";

const test = 2;
function WeeklyNotificationsSection() {
  return (
    <>
      <div className="flex items-center justify-between gap-[20px]">
        <div className="w-[115px]">
          <Button
            AriaLabel="previous"
            variant="tertiary"
            styles="!bg-[#000] !text-[#fff]"
          >
            السابق
          </Button>
        </div>
        <div className="w-[115px]">
          <Button
            AriaLabel="week"
            variant="tertiary"
            styles="!bg-[#000] !text-primary"
          >
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
            <Photo placeholder={"ارفاق صوره من الامام"} />
          </div>

          <div className="w-full bg-[#000] p-[10px]">
            <div className="min-h-[15vh]">
              <HiOutlineArrowsPointingOut className="text-[40px]" />
            </div>
            <Photo placeholder={"ارفاق صوره من الخلف"} />
          </div>
        </div>
      </div>
    </>
  );
}

export default WeeklyNotificationsSection;
