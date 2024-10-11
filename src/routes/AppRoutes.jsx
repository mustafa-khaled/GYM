import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";

function AppRoutes() {
  return (
    <main className="bg-bg_color mt-[64px] min-h-[calc(100vh-64px)]">
      <Routes>
        <Route index path="/" element={<Home />} />
      </Routes>
    </main>
  );
}

export default AppRoutes;
