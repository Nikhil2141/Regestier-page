import checkmark from "../../src/assets/checkmark.svg";
import prop from "../../src/assets/prop.svg";
import img5 from "../../src/assets/arrow.svg";
import PropTypes from "prop-types";
Technology.propTypes = {
  selectedTech: PropTypes.any, 
  setSelectedTech: PropTypes.any, 
  images:PropTypes.any,
};
export default function Technology ({selectedTech,setSelectedTech,images}){
    const handleSelect = (index) => {
        setSelectedTech(index); // Update selected index
      };
return(
    <>
    
        <div>
            <h3 className="pt-6  font-bold text-[28px] leading-[38.13px] text-[#020D21] font-body">
              Create Server
            </h3>
          </div>
    
          <div>
            <h6 className="pt-6 font-body font-bold text-lg leading-[24.51px] text-[#020D21]">
              Application & Server Details
            </h6>
            <div className="pt-4">
              <span className="font-body font-normal text-sm leading-[19.07px] text-[#020D21]">
                Select Technology
              </span>
              <div className="pt-1 flex gap-6">
                {/* Loop through images */}
                {images.map((img, index) => (
                  <div
                    key={index}
                    className={` w-[165px] h-[110px] border-[1px] rounded-md relative cursor-pointer ${
                      selectedTech === index
                        ? "border-primary-color border-[2px] Shadow-selectbox "
                        : "border-gray-300"
                    }`}
                    onClick={() => handleSelect(index)} // Handle image selection
                  >
                    {/* Checkmark for selected image */}
                    {selectedTech === index && (
                       <div className="absolute top-[9.09px] left-[9.5px]">
                       <img src={checkmark} alt="Selected" />
                     </div>
                    )}
                    <img
                      src={img}
                      alt={`Option ${index}`}
                      className="w-full h-full rounded-md"
                    />
                    <img
                      src={prop}
                      alt="Prop"
                      className="absolute top-[7px] right-[15px]"
                    />
                  </div>
                ))}
    
                {/* 'Other' option */}
                <div
                  className={`w-[165px] h-[110px] border-[1px] rounded-md relative flex justify-center cursor-pointer ${
                    selectedTech === "other"
                      ? "border-primary-color border-[2px] Shadow-selectbox"
                      : "border-gray-300"
                  }`}
                  onClick={() => handleSelect("other")} // Handle 'Other' option selection
                >
                
                  <div className="flex gap-2 items-center">
                    <p className="font-body text-sm font-bold leading-[19.07px] text-primary-color">Other</p>
                    <img src={img5} alt="Other" />
                  </div>
    
                  {/* Checkmark for 'Other' */}
                  {selectedTech === "other" && (
                    <div className="absolute top-[9.09px] left-[9.5px]">
                      <img src={checkmark} alt="Selected" />
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
    </>
)
}