import { useContext, useState } from "react";
import Data from "../utlis/Data";
import select from "../../src/assets/most-selected.svg";
import checkmark from "../../src/assets/Checkmark.india.svg";

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
        <table className="w-full  rounded border bg-[#FFFFFF] ">
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
                    : ""
                }`}
                  onClick={() => handleRowClick(index)}
                >
                  <td>
                    <div className="flex items-center justify-center">
                      {data.selected && (
                        <img src={select} alt="Selected" className="mr-2" />
                      )}
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
                  <td>
                    <div className="flex flex-col items-start px-4">
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

      <div className="flex gap-2">
        <button
          onClick={prevPage}
          disabled={currentPage === 1}
          className={`px-3 py-1 rounded border ${
            currentPage === 1
              ? "bg-gray-100 text-gray-400 cursor-not-allowed"
              : "bg-white text-primary-color hover:bg-gray-50"
          }`}
        >
          Previous
        </button>

        <span className="flex items-center px-3">
          Page {currentPage} of {totalPages}
        </span>

        <button
          onClick={nextPage}
          disabled={currentPage === totalPages}
          className={`px-3 py-1 rounded border ${
            currentPage === totalPages
              ? "bg-gray-100 text-gray-400 cursor-not-allowed"
              : "bg-white text-primary-color hover:bg-gray-50"
          }`}
        >
          Next
        </button>
      </div>
    </>
  );
}
