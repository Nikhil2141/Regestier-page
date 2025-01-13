import { useState } from "react";
import img1 from "../../src/assets/java.png";
import img2 from "../../src/assets/php.png";
import img3 from "../../src/assets/magento.png";
import img4 from "../../src/assets/php.png";
import { useNavigate } from "react-router";
import Data from "../utlis/Data";
import Technology from "./Technology";
import Project from "./Project";
import WebServer from "./WebServer";
import ServerSize from "./ServerSize";
import PlanPage from "./PlanPage";
import Lunch from "./Lunch";
import LocationPage from "./LocationPage";
export default function Mainbox() {
  const navgatiion = useNavigate();
  const [selectedTech, setSelectedTech] = useState(0);
  const [selectedata, setdata] = useState(2);
  const [selectedServer, setSelectedServer] = useState("NGINX");
  const [managedAppName, setManagedAppName] = useState("");
  const [serverName, setServerName] = useState("");
  const [projectName, setProjectName] = useState("");
  const [ramSize, setRamSize] = useState(1);
  const [selectedLocation, setSelectedLocation] = useState(3);
  const gbValues = [1, 2, 4, 8, 16, 32, 64, 128];
  const locations = [
    "India",
    "India",
    "India",
    "India",
    "India",
    "India",
    "India",
    "India",
    "India",
  ];
  const [errors, setErrors] = useState({
    managedAppName: "",
    serverName: "",
    projectName: "",
  });

  const images = [img1, img2, img3, img4];
  const techname = ["Java", "PHP", "Magento", "PHP", "Other"];
  const getGBValue = (value) => {
    const t = (value - 1) / 127;
    const index = Math.min(Math.floor(t * 7), 6);
    const start = gbValues[index];
    const end = gbValues[index + 1];
    const localT = (t * 7) % 1;
    return (start + (end - start) * localT).toFixed(1);
  };
  const validateField = (name, value) => {
    if (!value.trim()) {
      return `${name} is required`;
    }
    if (!/^[a-zA-Z0-9-_\s]+$/.test(value)) {
      return `${name} can only contain letters and underscores`;
    }
    return "";
  };

  // Validate all fields and required props
  const validateForm = () => {
    const newErrors = {
      managedAppName: validateField("Managed App Name", managedAppName),
      serverName: validateField("Server Name", serverName),
      projectName: validateField("Project Name", projectName),
    };

    setErrors(newErrors);

    return !Object.values(newErrors).some((error) => error !== "");
  };

  const handleClick = () => {
    const selectedRowData = Data[selectedata];
    if (validateForm()) {
      const currentConfig = {
        technology: techname[selectedTech] || selectedTech,
        managedAppName,
        serverName,
        projectName,
        webServer: selectedServer,
        location: locations[selectedLocation],
        ramSize: `${getGBValue(ramSize)}GB`,
        selectplan: {
          cpu: selectedRowData.CPU,
          memory: selectedRowData.Memory,
          ssdDisk: selectedRowData.SSDDisk,
          transfer: selectedRowData.Transfer,
          price: {
            monthly: selectedRowData.Price.monthly,
            hourly: selectedRowData.Price.hourly,
          },
        },
      };

      // Log the complete configuration
      console.log(JSON.stringify(currentConfig, null, 2));

      // Navigate to next page
      navgatiion("/home/Nextpage");
    }
  };

  return (
    <>
      <div className=" w-[100%] h-[100%]  pb-6 pt-6 ">
        <div className=" max-w-[972px] m-auto pl-6 pr-6 pb-6 bg-[#FFFFFF] rounded-[8px] border-[1px] border-[#E5E5E5] ">
          <Technology
            selectedTech={selectedTech}
            setSelectedTech={setSelectedTech}
            images={images}
          />

          <Project
            setServerName={setServerName}
            setProjectName={setProjectName}
            errors={errors}
            managedAppName={managedAppName}
            setManagedAppName={setManagedAppName}
            serverName={serverName}
            projectName={projectName}
          />
          <WebServer
            selectedServer={selectedServer}
            setSelectedServer={setSelectedServer}
          />
          <LocationPage
            locations={locations}
            setSelectedLocation={setSelectedLocation}
            selectedLocation={selectedLocation}
          />
          <ServerSize
            setRamSize={setRamSize}
            gbValues={gbValues}
            ramSize={ramSize}
          />
          <PlanPage selectedata={selectedata} setdata={setdata} />
          <Lunch handleClick={handleClick} />
        </div>
      </div>
    </>
  );
}
