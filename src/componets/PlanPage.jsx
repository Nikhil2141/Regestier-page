import { useContext, useState } from "react";
import Data from "../utlis/Data";
import select from "../../src/assets/most-selected.svg";
import checkmark from "../../src/assets/Checkmark.india.svg";
import Prev from "../../src/assets/left-pagination.svg";
import Next from "../../src/assets/right-pagination.svg";

import { UserContext } from "./Createcontax";
export default function PlanPage() {
  const { setdata, selectedata } = useContext(UserContext);
  const handleRowClick = (index) => {
    // Calculate the actual index in the full dataset
    const globalIndex = indexOfFirstItem + index;
    setdata(globalIndex);
  };
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;

  // Get current items
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = Data.slice(indexOfFirstItem, indexOfLastItem);

  // Calculate total pages
  const totalPages = Math.ceil(Data.length / itemsPerPage);

  // Change page
  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  return (
    <>
      <div className="mt-6">
        <h6 className=" font-body font-bold text-lg leading-[24.51px] text-[#020D21]">
          Select Plans
        </h6>
      </div>
      <div className="mt-[16px]">
        <table className="w-full  rounded border bg-Background-color ">
          <thead>
            <tr className="bg-[#F5F5F5] border-[#E5E5E5] border-[1px] h-[43px] ">
              <th></th>
              <th className="font-body font-bold leading-[19.07px] text-sm text-Tableheading-color ">
                CPUs
              </th>
              <th className="font-body font-bold leading-[19.07px] text-sm text-Tableheading-color">
                Memory
              </th>
              <th className="font-body font-bold leading-[19.07px] text-sm text-Tableheading-color">
                SSD Disk
              </th>
              <th className="font-body font-bold leading-[19.07px] text-sm text-Tableheading-color">
                Transfer
              </th>
              <th className="font-body font-bold leading-[19.07px] text-sm text-Tableheading-color ">
                Price
              </th>
            </tr>
          </thead>
          <tbody>
            {currentItems.map((data, index) => {
              // Calculate the global index for this row
              const globalIndex = indexOfFirstItem + index;

              return (
                <tr
                  key={data.id}
                  className={`border-t-0 border-[#E5E5E5] cursor-pointer border-b-[1px] relative border-r-[1px] h-[50px] border-l-[1px] text-center
                ${
                  selectedata === globalIndex
                    ? "bg-[#EDE6F1] outline outline-[2px] outline-primary-color"
                    : "hover:bg-[#EDE6F1]"
                }`}
                  onClick={() => handleRowClick(index)}
                >
                  <td className={`${data.selected ?"flex justify-start items-center  pl-3":"flex items-center pl-[40.69px] "}`}>
                  {data.selected && (
                        <img src={select} alt="Selected" className="mr-2 w-5 h-5" />
                      )}
                    <div>
                    
                      <img src={data.image} alt="Google Cloud" />
                      
                    </div>
                  </td>
                  <td className="font-body font-normal text-[14px] leading-[19.07px]">
                    {data.CPU}
                  </td>
                  <td className="font-body font-normal text-[14px] leading-[19.07px]">
                    {data.Memory}
                  </td>
                  <td className="font-body font-normal text-[14px] leading-[19.07px]">
                    {data.SSDDisk}
                  </td>
                  <td className="font-body font-normal text-[14px] leading-[19.07px]">
                    {data.Transfer}
                  </td>
                  <td >
                    <div className="flex flex-col items-start">
                      <div className="font-body font-semibold text-sm leading-[19.07px] text-[#000000]">
                        {data.Price.monthly}
                      </div>
                      <div className="font-body font-normal text-[11px] leading-[14.98px] text-[#000000]">
                        {data.Price.hourly}
                      </div>
                    </div>

                    {selectedata === globalIndex && (
                      <div
                        className="bg-primary-color absolute top-0 right-[-1px] w-[41px] h-[32px]"
                        style={{
                          clipPath: "polygon(100% 0, 0 0, 100% 100%)",
                        }}
                      >
                        <img
                          src={checkmark}
                          alt="Selected"
                          className="absolute top-[5px] right-[6px] w-[12px] h-[12px]"
                        />
                      </div>
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <div className="flex mt-6 justify-end ">
        <img
          src={Prev}
          onClick={prevPage}
          className="px-3 py-1 cursor-pointer"
        ></img>

<span className="flex items-center">

     <span
            onClick={() => setCurrentPage(1)}
            className={`px-3 py-1 mx-1 cursor-pointer rounded ${
              currentPage === 1 
                ? 'bg-[#4B006E1F] text-[#4B006E] font-body font-normal text-sm leading-[19.07px]' 
                : 'text-[#5D6166] font-body font-normal text-sm leading-[19.07px]'
            }`}
          >
            1
          </span>
          <span
            onClick={() => setCurrentPage(2)}
            className={`px-3 py-1 mx-1 cursor-pointer rounded ${
              currentPage === 2 
                ? 'bg-[#4B006E1F] text-[#4B006E] font-body font-normal text-sm leading-[19.07px]' 
                : 'text-[#5D6166] font-body font-normal text-sm leading-[19.07px]'
            }`}
          >
            2
          </span>
          
          {/* Show ellipsis */}
          {currentPage > 2 && currentPage < totalPages ? (
        <span
          onClick={() => setCurrentPage(currentPage)}
          className="bg-[#4B006E1F] text-[#4B006E] font-body font-normal text-sm leading-[19.07px] px-3 py-1 mx-1 cursor-pointer rounded"
        >
          {currentPage}  
        </span>
      ) : (
        <span className="px-3 py-1 mx-1 text-[#5D6166] font-body font-normal text-sm leading-[19.07px]">
          ...
        </span>
      )}

          
          {/* Show last page */}
          <span
            onClick={() => setCurrentPage(totalPages)}
            className={`px-3 py-1 mx-1 cursor-pointer rounded ${
              currentPage === totalPages 
                ? 'bg-[#4B006E1F] text-[#4B006E] font-body font-normal text-sm leading-[19.07px]' 
                : 'text-[#5D6166] font-body font-normal text-sm leading-[19.07px]'
            }`}
          >
            {totalPages}
          </span>
    
  </span>

        <img
          src={Next}
          onClick={nextPage}
          className="px-3 py-1 cursor-pointer"
        ></img>
      </div>
    </>
  );
}
