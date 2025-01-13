// import React, { useState } from "react";
import { useNavigate } from "react-router";
import icon1 from "../../src/assets/Home.svg";
import icon2 from "../../src/assets/icon-2.svg";
import icon3 from "../../src/assets/icon-3.svg";
import icon4 from "../../src/assets/icon-4.svg";
import icon5 from "../../src/assets/icon-5.svg";
import { useState } from "react";

export default function Sidebar() {
  const [selected, setSelected] = useState(2);
  const navigate = useNavigate();

  // Define icons and routes
  const icons = [
    { id: 1, src: icon1, route: "/" },
    { id: 2, src: icon2, route: "/home" },
    { id: 3, src: icon3, route: "/page3" },
    { id: 4, src: icon4, route: "/page4" },
    { id: 5, src: icon5, route: "/page5" },
  ];
 
  const handleClick = (id, route) => {  
    setSelected(id); // Set the clicked icon as selected
    navigate(route); // Navigate to the corresponding page
  };

  return (
    <div className="w-[68px] fixed pt-5">
      <div className="nav flex flex-col items-center ">
        {icons.map((icon) => (
          <div
            key={icon.id}
            onClick={() => handleClick(icon.id, icon.route)}
            className={`cursor-pointer pb-6 ${
              selected === icon.id
                ? "bg-white rounded-md text-black"
                : "bg-transparent"
            }`}
            style={{
              padding: "10px",
            }}
          >
              <img
              src={icon.src}
              className={`${selected === icon.id ? "icon-purple" : "icon-default"}`}
              alt={`icon-${icon.id}`}
              style={{
                filter: selected === icon.id 
                  ? "invert(90%) sepia(64%) saturate(4223%) hue-rotate(277deg) brightness(89%) contrast(108%)"
                  : "none"
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
