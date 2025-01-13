import { BrowserRouter as Router, Routes, Route } from "react-router";
import LoginPage from "./componets/LoginPage";
import RegsiterPage from "./componets/RegsiterPage";
import { useState } from "react";
import "./App.css";
import Second from "./componets/Second";
import Mainbox from "./componets/main-box";
import Nextpage from "./componets/Nextpage";
import Page from "./componets/Page3";
import Page4 from "./componets/Page4";
import Page5 from "./componets/Page5";
import SharedLayout from "./componets/SharedOutlet";

function App() {
  const [value, setvalue] = useState({
    name: "",
    email: "",
    password: "",
  });

  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/"
            element={<LoginPage value={value} setvalue={setvalue} />}
          ></Route>
          <Route
            path="/reg"
            element={<RegsiterPage value={value} setvalue={setvalue} />}
          ></Route>

          <Route path="/" element={<SharedLayout />}>
            <Route path="/Home" element={<Mainbox />}></Route>
            <Route path="/Home/second" element={<Second />}></Route>
            <Route path="/Home/Nextpage" element={<Nextpage />}></Route>
            <Route path="/Page3" element={<Page />}></Route>
            <Route path="/Page4" element={<Page4 />}></Route>
            <Route path="/Page5" element={<Page5 />}></Route>
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
