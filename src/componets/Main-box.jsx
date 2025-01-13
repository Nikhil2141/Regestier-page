import Technology from "./Technology";
import Project from "./Project";
import WebServer from "./WebServer";
import ServerSize from "./ServerSize";
import PlanPage from "./PlanPage";
import Lunch from "./Lunch";
import LocationPage from "./LocationPage";

export default function Mainbox() {
  return (
    <>
      <div className=" w-[100%] h-[100%]  pb-6 pt-6 ">
        <div className=" max-w-[972px] m-auto pl-6 pr-6 pb-6 bg-[#FFFFFF] rounded-[8px] border-[1px] border-[#E5E5E5] ">
          <Technology />
          <Project />
          <WebServer />
          <LocationPage />
          <ServerSize />
          <PlanPage />
          <Lunch />
        </div>
      </div>
    </>
  );
}
