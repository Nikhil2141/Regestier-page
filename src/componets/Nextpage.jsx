import { useLocation } from "react-router";

export default function NextPage() {
  const { state } = useLocation();

  const { selectedLocation, serverSize } = state || {};

  return (
    <div>
      <h1>Selected Details</h1>
      <p>Location: {selectedLocation}</p>

      <p>Server Size: {serverSize} GB</p>
    </div>
  );
}
