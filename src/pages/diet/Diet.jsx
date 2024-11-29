import { Outlet } from "react-router-dom";
import MainSection from "../../ui/MainSection";

function Diet() {
  return (
    <MainSection styles="">
      <Outlet />
    </MainSection>
  );
}

export default Diet;
