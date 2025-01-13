import { useContext } from "react";
import { UserContext } from "./Createcontax";

export default function ServerSize() {
  const { ramSize, setRamSize, gbValues } = useContext(UserContext);

  return (
    <>
      <h3 className="text-lg font-bold mt-6">Server Size</h3>
      <p className="text-sm mt-2">
        Select Your Server Size. You Can Always Scale Up As Needed.
      </p>

      <input
        type="range"
        min="1"
        max="128"
        step="0.1"
        value={ramSize}
        onChange={(e) => setRamSize(parseFloat(e.target.value))}
        className="w-full h-2 bg-purple-100 rounded-full appearance-none"
        style={{
          background: `linear-gradient(to right, primary-color ${
            ((ramSize - 1) / 127) * 100
          }%, #E0E0E0 ${((ramSize - 1) / 127) * 100}%)`,
        }}
      />

      <div className="grid grid-cols-8 gap-4 mt-1">
        {gbValues.map((gb) => (
          <span key={gb} className="text-xs">
            {gb}GB
          </span>
        ))}
      </div>
    </>
  );
}
