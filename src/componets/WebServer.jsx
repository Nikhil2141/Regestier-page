import { useContext } from "react";
import badg1 from "../../src/assets/im.svg";
import badg2 from "../../src/assets/im2.svg";

import { UserContext } from "./Createcontax";

export default function WebServer() {
  const { setSelectedServer, selectedServer } = useContext(UserContext);
  const handleSelectServer = (server) => {
    setSelectedServer(server); // Update the state to reflect the selected server
  };
  return (
    <>
      <div className="pt-6">
        <h6 className="font-bold font-body text-lg leading-[24.51px] text-Heading-color">
          Choose Your Web Server
        </h6>
        <div className="flex gap-2 mt-4">
          {/* NGINX */}
          <div
            className={`bg-[#4B006E14] rounded-[50px] items-center justify-center flex w-[135px] h-[56px] cursor-pointer ${
              selectedServer === "NGINX"
                ? "bg-[#EDE6F1] border-primary-color border-2 Shadow-selectbox"
                : ""
            }`}
            onClick={() => handleSelectServer("NGINX")} // Select NGINX when clicked
          >
            <img src={badg1} alt="NGINX" />
            <span className="font-bold font-body text-sm leading-[19.07px] pl-2">
              NGINX
            </span>
          </div>

          {/* APACHE */}
          <div
            className={`bg-[#4B006E14] rounded-[50px] flex w-[145px] items-center justify-center h-[56px] cursor-pointer ${
              selectedServer === "APACHE"
                ? "bg-[#EDE6F1] border-primary-color border-2 Shadow-selectbox"
                : ""
            }`}
            onClick={() => handleSelectServer("APACHE")} // Select APACHE when clicked
          >
            <img src={badg2} alt="APACHE" />
            <span className="font-bold font-body text-sm leading-[19.07px] pl-2">
              APACHE
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
