import img from "../../src/assets/ComapnyLogo.png";
import seach from "../../src/assets/Header-Search.svg";
import profileimg from "../../src/assets/ProfileImage.svg";
import arrow from "../../src/assets/arrow.svg";

export default function Header() {
  return (
    <>
      <div className="container min-w-full sticky top-0 z-10 w-full bg-[#FFFFFF] ">
        <div className="flex justify-between items-center h-full px-6 pt-3 pb-3  ">
          {/* Left Section - Logo */}
          <div className="flex gap-2 items-center w-[153.26px] cursor-pointer">
            <img className="logo" src={img} alt="logo" />
            <p className="font-bold font-body text-[17.79px] leading-4 text-[primary-color] tracking-[2.4px]">
              SHARK CLUSTER
            </p>
          </div>

          {/* Right Section - Search and Profile */}
          <div className="flex items-center gap-4 cursor-pointer">
            {/* Search Input */}
            <div className="relative ">
              <input
                type="search"
                className="border border-[rgba(208, 213, 221, 1)] rounded-lg focus:outline-none px-3 py-1 pt-[10px] pb-[10px]  pl-10 pr-3 placeholder-gray-500 text-sm font-body w-[200px]"
                placeholder="Search"
              />
              <img
                src={seach}
                alt="search"
                className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4"
              />
            </div>

            {/* Profile Section */}
            <div className="flex items-center gap-2">
              <img
                src={profileimg}
                className="w-8 h-8 rounded-full"
                alt="profile"
              />
              <div className="flex items-center gap-2">
                <p className="font-normal font-body text-sm text-[#000000] leading-[19.07px]">
                  Andrew Ansley
                </p>
                <img
                  src={arrow}
                  alt="arrow"
                  className="inline-block align-middle"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
