import { useContext } from "react";
import { UserContext } from "./Createcontax";

export default function NextPage() {
  const {confing}=useContext(UserContext)



  return (
    <div>
<p>Technology : {confing.technology}</p>
<p>managedAppName : {confing.managedAppName}</p>
<p>serverName : {confing.serverName}</p>
<p>projectName : {confing.projectName}</p>
<p>webServer : {confing.webServer}</p>
<p>location : {confing.location}</p>
<p>ramSize : {confing.ramSize}</p>



    </div>
  );
}
