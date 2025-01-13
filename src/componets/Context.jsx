// import { createContext} from "react";
import { useState } from "react";
import img1 from "../../src/assets/java.png";
import img2 from "../../src/assets/php.png";
import img3 from "../../src/assets/magento.png";
import img4 from "../../src/assets/php.png";
import { UserContext } from "./Createcontax";
import PropTypes from "prop-types";

ContextProvider.propTypes = {
  children: PropTypes.any,
};

export function ContextProvider({ children }) {
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

  const value = {
    // Technology
    selectedTech,
    setSelectedTech,

    // Project details
    managedAppName,
    setManagedAppName,
    serverName,
    setServerName,
    projectName,
    setProjectName,
    selectedata,
    setdata,

    // Server configuration
    selectedServer,
    setSelectedServer,
    selectedLocation,
    setSelectedLocation,
    ramSize,
    setRamSize,
    locations,
    images,
    techname,
    getGBValue,

    // Validation
    errors,
    setErrors,
    validateForm,
    validateField,

    // Utils
  };
  return (
    <>
      <UserContext.Provider value={value}>{children}</UserContext.Provider>
    </>
  );
}
