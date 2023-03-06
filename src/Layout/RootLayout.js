import { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Menu from "./Menu";
import Navigation from "./Navigation";
import Cookie from "../components/Cookie";

function RootLayout() {
   const [open, setOpen] = useState(false);
   const [cookie, setCookie] = useState(false);
   const location = useLocation();

   useEffect(() => {
      window.scrollTo(0, 0);
   }, [location]);

   useEffect(() => {
      const localCookie = localStorage.getItem("cookie");
      setCookie(localCookie);
   }, []);

   const cookieAcceptHandler = () => {
      setCookie(true);
      localStorage.setItem("cookie", "true");
   };
   const openMenuHandler = () => {
      setOpen(true);
   };

   const closeMenuHandler = () => {
      setOpen(false);
   };

   return (
      <>
         {open ? (
            <Menu closeMenuHandler={closeMenuHandler} />
         ) : (
            <>
               <Navigation openMenuHandler={openMenuHandler} />
               {!cookie ? <Cookie cookeHandler={cookieAcceptHandler} /> : null}
               <Outlet />
            </>
         )}
      </>
   );
}
export default RootLayout;
