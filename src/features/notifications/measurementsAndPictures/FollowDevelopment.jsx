import ImagesContainer from "./ImagesContainer";
import TablesContainer from "./TablesContainer";

function FollowDevelopment() {
  return (
    <div className="mt-[20px] flex flex-col items-start gap-[20px] lg:flex-row">
      <TablesContainer />
      <ImagesContainer />
    </div>
  );
}

export default FollowDevelopment;
