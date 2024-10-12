import { Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";
import Spinner from "../ui/spinner/Spinner";
import NotFound from "../pages/NotFound";

const Home = lazy(() => import("../pages/Home"));

function AppRoutes() {
  return (
    <main className="mt-[64px] min-h-[calc(100vh-64px)] bg-bg_color">
      <Suspense fallback={<Spinner />}>
        <Routes>
          <Route index path="*" element={<NotFound />} />
          <Route index path="/" element={<Home />} />
        </Routes>
      </Suspense>
    </main>
  );
}

export default AppRoutes;
