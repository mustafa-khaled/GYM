import { Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";
import Spinner from "../ui/spinner/Spinner";

const Home = lazy(() => import("../pages/Home"));
const NotFound = lazy(() => import("../pages/NotFound"));
const SignUp = lazy(() => import("../pages/SignUp"));
const Login = lazy(() => import("../pages/Login"));

function AppRoutes() {
  return (
    <main className="mt-[64px] min-h-[calc(100vh-64px)] bg-bg_color">
      <Suspense fallback={<Spinner />}>
        <Routes>
          <Route index path="*" element={<NotFound />} />
          <Route index path="/" element={<Home />} />
          <Route index path="/signUp" element={<SignUp />} />
          <Route index path="/login" element={<Login />} />
        </Routes>
      </Suspense>
    </main>
  );
}

export default AppRoutes;
