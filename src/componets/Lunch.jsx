import { useNavigate } from "react-router";


import { useContext } from "react";
import { UserContext } from "./Createcontax";

export default function Lunch() {
  const {
   
    validateForm,
    confing
  } = useContext(UserContext);
  const navgatiion = useNavigate();
  const handleClick = () => {
   
    if (validateForm()) {
      const currentConfig = {confing}

      // Log the complete configuration
      console.log(JSON.stringify(currentConfig, null, 2));

      // Navigate to next page
      navgatiion("/home/Nextpage");
    }
  };
  return (
    <>
      <div className="mt-6 flex border-[1px] border-[#E5E5E5] rounded-lg ">
        <h6 className="font-body font-bold text-[18px] leading-[24.51px] text-[#020D21] pl-4 pt-6 pb-6">
          Pay as You Go!
        </h6>

        <div className="mt-3 pl-[45%] pr-[50px]">
          <p className="font-body font-bold text-lg leading-[24.51px] text-[#000000]">
            <span className="font-body font-normal leading-[24.51px] text-lg">
              $
            </span>
            4
          </p>
          <p className="font-body font-normal text-[12px] leading-[16.34px] text-[#141414] pt-2">
            Hourly
          </p>
        </div>
        <div className="mt-3 pr-[50px]">
          <p className="font-body font-bold text-lg leading-[24.51px] text-[#000000]">
            {" "}
            <span className="font-body font-normal leading-[24.51px] text-lg">
              $
            </span>
            123
          </p>
          <p className="font-body font-normal text-[12px] leading-[16.34px] text-[#141414] pt-2">
            Monthly
          </p>
        </div>
        <button
          onClick={handleClick}
          className="rounded-lg mt-[15px] mr-[16px]  pt-3 pr-6 pl-6 pb-3 font-body font-bold text-sm leading-[19.07px] text-[#FFFFFF] h-[43px] w-[138px] Btn"
        >
          LUNCH NOW
        </button>
      </div>
    </>
  );
}
