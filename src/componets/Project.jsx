import { useContext } from "react";
import phonarrow from "../../src/assets/phonearrow.svg";

import { UserContext } from "./Createcontax";

export default function Project() {
  const {
    managedAppName,
    setManagedAppName,
    serverName,
    setServerName,
    projectName,
    setProjectName,
    errors,
  } = useContext(UserContext);
  return (
    <>
      <div className="pt-4 flex gap-6">
        <div>
          <span className="font-normal font-body text-sm leading-[19.07px] text-[#020D21] ">
            Name Your Managed App
          </span>
          <br></br>
          <input
            type="text"
            value={managedAppName}
            onChange={(e) => setManagedAppName(e.target.value)}
            className="  w-[292px] focus:outline-none border-[1px] rounded-md    placeholder: pt-3 pb-3 pl-[16px] font-normal text-sm leading-[19.07px]"
            placeholder="Enter name your managed app"
          ></input>

          <p className="text-red-500 text-xs mt-1">{errors.managedAppName}</p>
        </div>
        <div>
          <span className="font-normal text-sm leading-[19.07px] text-[#020D21] ">
            Name Your Server
          </span>
          <br></br>
          <input
            type="text"
            value={serverName}
            onChange={(e) => setServerName(e.target.value)}
            className="  w-[292px] focus:outline-none border-[1px] rounded-md    placeholder: pt-3 pb-3   pl-[16px] font-normal text-sm leading-[19.07px]"
            placeholder="Enter name your server"
          ></input>

          <p className="text-red-500 text-xs mt-1">{errors.serverName}</p>
        </div>
        <div className="relative">
          <span className="font-normal text-sm leading-[19.07px] text-[#020D21] ">
            Name Your Project
          </span>

          <br></br>

          <input
            type="text"
            value={projectName}
            onChange={(e) => setProjectName(e.target.value)}
            className="  w-[292px] focus:outline-none border-[1px] rounded-md    placeholder: pt-3 pb-3 pl-[16px] font-normal text-sm leading-[19.07px]"
            placeholder="Select name your project"
            src="src\assets\arrow.png"
            required
          ></input>

          <p className="text-red-500 text-xs mt-1">{errors.projectName}</p>

          <img
            src={phonarrow}
            className="absolute top-11 right-4 cursor-pointer"
          ></img>
        </div>
      </div>
    </>
  );
}
