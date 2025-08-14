import { useLocation } from "react-router-dom";
import Header from "./layouts/Header";

const HeaderWrapper = ({ user }) => {
  const location = useLocation();


  const hideHeaderPaths = ["/payment", "/login", "/signup"];
  if (!user || hideHeaderPaths.includes(location.pathname)) return null;

  return <Header />;
};

export default HeaderWrapper;

