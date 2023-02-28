import { useState } from "react";
import { Outlet } from "react-router-dom";
import Menu from "./Menu";
import Navigation from "./Navigation";

function RootLayout() {
   const [open, setOpen] = useState(false);

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
               <Outlet />
            </>
         )}
      </>
   );
}
export default RootLayout;
