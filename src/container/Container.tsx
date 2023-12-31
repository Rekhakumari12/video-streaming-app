import SidebarNav from "components/SidebarNav";
import { useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";

const Container = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname === "/" || location.pathname === "/in")
      navigate("/in/home");
  }, [location.pathname, navigate]);

  return (
    <>
      <SidebarNav />
      <Outlet />
    </>
  );
};

export default Container;
