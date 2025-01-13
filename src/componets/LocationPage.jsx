import flag from "../../src/assets/india-flag.png";
import checkmark from "../../src/assets/Checkmark.india.svg";

import { useContext } from "react";
import { UserContext } from "./Createcontax";

export default function LocationPage() {
  const { selectedLocation, locations, setSelectedLocation } =
    useContext(UserContext);
  return (
    <>
      <div className="mt-6">
        <div>
          <h6 className="font-bold font-body text-lg leading-[24.51px] text-Heading-color">
            Location
          </h6>
        </div>
        <div className="pt-4 grid grid-cols-3 gap-4">
          {locations.map((location, index) => (
            <div
              key={index}
              className={`border-2 rounded-md relative ${
                selectedLocation === index
                  ? "bg-[#EDE6F1] border-primary-color border-[2px] Shadow-selectbox "
                  : "hover:bg-[#EDE6F1]"
              }`}
              onClick={() => setSelectedLocation(index)} // When clicked, it selects the box
            >
              {selectedLocation === index && (
                <div
                  className="bg-primary-color absolute rounded-es top-0 right-[-1px] w-[41px] h-[32px] "
                  style={{
                    backgroundColor: "primary-color", // Triangle color
                    clipPath: "polygon(100% 0, 0 0, 100% 100%)", // Define a triangle shape
                  }}
                >
                  <img
                    src={checkmark} // Replace with the path to your checkmark image
                    alt="Selected"
                    className="pr-[6.57px] pt-[4.98px] pb-[19px] pl-[23.57px] "
                  />
                </div>
              )}
              <div className="pt-3 pb-3 pl-[16px] cursor-pointer">
                <img src={flag} alt="Flag" className="inline-block" />
                <p className="font-normal font-body text-sm leading-[19.07px] inline-block pl-2 align-middle ">
                  {location}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
