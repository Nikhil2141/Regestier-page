import { Outlet } from "react-router";
import Header from "./Header";
import Sidebar from "./Sidebar";

export default function SharedLayout() {
  return (
    <>
      <Header />
      <div className="app-content flex w-[100%] min-h-[100vh]  ">
        <div className="sidebar">
          <Sidebar />
        </div>
        <main className="main-box">
          <Outlet />
        </main>
      </div>
    </>
  );
}
