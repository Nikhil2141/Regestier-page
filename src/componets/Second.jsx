export default function Second() {
  return (
    <>
      <div className="bg-gray-200 w-[100%] h-[100%]  pb-6 ">
        <div className="pt-6">
          <div className=" max-w-[972px]   m-auto pl-6 pr-6 pb-6 bg-[#FFFFFF]  ">
            <div>
              <h3 className="pt-6  font-bold text-[28px] leading-[38.13px] text-[#020D21] font-body">
                Create Server
              </h3>
            </div>

            <div className="pt-6 font-body font-bold text-lg leading-[24.51px] text-[#020D21]">
              <h6>Application & Server Details</h6>
              <div className="pt-4">
                <span className="font-body font-normal text-sm leading-[19.07px] text-[#020D21]">
                  Select Technology
                </span>
              </div>
            </div>

            <div className="pt-4 flex gap-6">
              <div>
                <span className="font-normal font-body text-sm leading-[19.07px] text-[#020D21] ">
                  Name Your Managed App
                </span>
                <br></br>
                <input
                  type="text"
                  className="  w-[292px] focus:outline-none border-[1px] rounded-md    placeholder: pt-3 pb-3 pl-[16px] font-normal text-sm leading-[19.07px]"
                  placeholder="Enter name your managed app"
                ></input>
              </div>
              <div>
                <span className="font-normal text-sm leading-[19.07px] text-[#020D21] ">
                  Name Your Server
                </span>
                <br></br>
                <input
                  type="text"
                  className="  w-[292px] focus:outline-none border-[1px] rounded-md    placeholder: pt-3 pb-3   pl-[16px] font-normal text-sm leading-[19.07px]"
                  placeholder="Enter name your server"
                ></input>
              </div>
              <div>
                <span className="font-normal text-sm leading-[19.07px] text-[#020D21] ">
                  Name Your Project
                </span>
                <br></br>
                <input
                  type="text"
                  className="  w-[292px] focus:outline-none border-[1px] rounded-md    placeholder: pt-3 pb-3 pl-[16px] font-normal text-sm leading-[19.07px]"
                  placeholder="Select name your project"
                  src="src\assets\arrow.png"
                ></input>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
