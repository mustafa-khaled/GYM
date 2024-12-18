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
      <div className="w-[120px]">
        <Button AriaLabel="logout" styles={"!font-[700] "} onClick={logout}>
          تسجيل الخروج
        </Button>
      </div>
    );
  }

  return (
    <Link to={"/login"} className="w-[100px]">
      <Button AriaLabel="login" styles={"!font-[700]"}>
        تسجيل
      </Button>
    </Link>
  );
}

export default LoginButton;
