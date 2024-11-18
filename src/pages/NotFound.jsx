import { Link } from "react-router-dom";
import { CgGym } from "react-icons/cg";

import Button from "../ui/Button";

function NotFound() {
  return (
    <div className="flex min-h-[calc(100vh-64px)] flex-col items-center justify-center gap-[20px] font-[700] text-[#fff]">
      <p className="relative text-[60px]">
        404
        <CgGym className="absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] text-[40px] text-primary" />
      </p>
      <h1 className="text-[32px]">الصفحه غير موجوده</h1>

      <Link to={"/"} replace className="text-black">
        <Button
          AriaLabel="backToHome"
          variant="tertiary"
          styles={"w-full md:w-[200px] h-[50px]"}
        >
          الرجوع للرئيسيه!
        </Button>
      </Link>
    </div>
  );
}

export default NotFound;
