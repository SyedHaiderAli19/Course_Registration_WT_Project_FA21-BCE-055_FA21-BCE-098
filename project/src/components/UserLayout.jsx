import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer"

function UserLayout() {
  return (
    <>
    <Header/>
    <Outlet></Outlet>
    <Footer></Footer>
    </>
  );
}

export default UserLayout;
