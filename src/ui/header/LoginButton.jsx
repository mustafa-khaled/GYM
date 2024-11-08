import { Link, useNavigate } from "react-router-dom";
import Button from "../Button";

function LoginButton() {
  const navigate = useNavigate();
  const currenToken = localStorage.getItem("GYM_USER_TOKEN");

  const logout = () => {
    localStorage.removeItem("GYM_USER_TOKEN");
    navigate("/");
  };

  if (currenToken) {
    return (
      <Button styles={"!font-[700] w-[120px]"} onClick={logout}>
        تسجيل الخروج
      </Button>
    );
  }

  return (
    <Link to={"/login"} className="w-[100px]">
      <Button styles={"!font-[700]"}>تسجيل</Button>
    </Link>
  );
}

export default LoginButton;
