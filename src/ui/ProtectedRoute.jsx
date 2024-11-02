import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function ProtectedRoute({ children }) {
  const currenToken = localStorage.getItem("GYM_user_token");
  const navigate = useNavigate();

  useEffect(() => {
    if (!currenToken) {
      navigate("/login", { replace: true });
    }
  }, [currenToken, navigate]);

  if (currenToken) return children;
}

export default ProtectedRoute;
