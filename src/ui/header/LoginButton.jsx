import { Link } from "react-router-dom";
import Button from "../Button";

function LoginButton() {
  return (
    <Link to={"/login"} className="w-[100px]">
      <Button styles={"text-white"}>تسجيل</Button>
    </Link>
  );
}

export default LoginButton;
