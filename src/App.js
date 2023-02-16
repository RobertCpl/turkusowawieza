import { useEffect, useState } from "react";

import "./App.css";
import Navigation from "./Layout/Navigation";
import Header from "./Layout/Header";
import Section from "./Layout/Section";
import AboutPostsList from "./components/Posts/AboutPostsList";
import TowerPostsList from "./components/Posts/TowerPostsList";
import Wraper from "./Layout/Wraper";
import ButtonInspiration from "./components/ButtonInspiration";
import RecruitmentList from "./components/Posts/RecruitmentList";
import DayWraper from "./Layout/DayPlan/DayWraper";
import JoinUs from "./Layout/JoinUs/JoinUs";
import JobOfertList from "./components/Posts/JobOfertList";
import Mariusz from "./Layout/World/Mariusz";
import Circle from "./Layout/World/Circle";
import Footer from "./Layout/Footer";

function App() {
   const [windowsWidth, setWindowWidth] = useState(window.innerWidth);
   useEffect(() => {
      const handleWindowResize = () => {
         setWindowWidth(window.innerWidth);
      };
      window.addEventListener("resize", handleWindowResize);

      return () => {
         window.removeEventListener("resize", handleWindowResize);
      };
   });
   return (
      <div className="container">
         <Navigation />
         <Header></Header>
         <Section
            className={"aboutus"}
            color={"rgba(252, 252, 252, 1)"}
            pad={windowsWidth > 768 ? "128px 0" : "64px 0"}
         >
            <AboutPostsList />
         </Section>
         <Section className={"inspiration"} title={"Nasze inspiracje"} pad={windowsWidth > 768 ? "128px 0" : "64px 0"}>
            <Wraper maxWidth={"1200px"}>
               <ButtonInspiration
                  title={"Maria Montessori"}
                  color={"rgba(0, 179, 181, 1)"}
                  pad={"1rem 0"}
                  margin={windowsWidth > 768 ? "0 0 1.5rem 1.5rem" : "0 0 1.5rem 0 "}
                  maxWidth={"24rem"}
               />
               <ButtonInspiration
                  title={"Turkusowe organizacje"}
                  color={"rgba(0, 179, 181, 1)"}
                  pad={"1rem 0"}
                  margin={windowsWidth > 768 ? "0 0 1.5rem 1.5rem" : "0 0 1.5rem 0 "}
                  maxWidth={"24rem"}
               />
               <ButtonInspiration
                  title={"Agile Learning Center"}
                  color={"rgba(0, 179, 181, 1)"}
                  pad={"1rem 0"}
                  margin={windowsWidth > 768 ? "0 0 1.5rem 1.5rem" : "0 0 1.5rem 0 "}
                  maxWidth={"24rem"}
               />
               <ButtonInspiration
                  title={"Porozumienie bez przemocy"}
                  color={"rgba(0, 179, 181, 1)"}
                  pad={"1rem 0"}
                  margin={windowsWidth > 768 ? "0 0 1.5rem 1.5rem" : "0 0 1.5rem 0 "}
                  maxWidth={"24rem"}
               />
               <ButtonInspiration
                  title={"Jasper Jull"}
                  color={"rgba(0, 179, 181, 1)"}
                  pad={"1rem 0"}
                  margin={windowsWidth > 768 ? "0 0 1.5rem 1.5rem" : "0 0 1.5rem 0 "}
                  maxWidth={"24rem"}
               />
               <ButtonInspiration
                  title={"Janusz Korczak"}
                  color={"rgba(0, 179, 181, 1)"}
                  pad={"1rem 0"}
                  margin={windowsWidth > 768 ? "0 0 1.5rem 1.5rem" : "0 0 1.5rem 0 "}
                  maxWidth={"24rem"}
               />
               <ButtonInspiration
                  title={"Robert Baden-Powell i skauting"}
                  color={"rgba(0, 179, 181, 1)"}
                  pad={"1rem 0"}
                  margin={windowsWidth > 768 ? "0 0 1.5rem 1.5rem" : "0 0 1.5rem 0 "}
                  maxWidth={"24rem"}
               />
            </Wraper>
         </Section>
         <Section
            className={"actions"}
            color={"rgba(0, 179, 181, 0.07)"}
            title={"Jak działamy"}
            pad={windowsWidth > 768 ? "128px 0" : "64px 0"}
         >
            <TowerPostsList />
         </Section>
         {/* <Section className={"plan"} title={"Przykładowy plan dnia"} title2={"w Turkusowej Wieży"} pad={"128px 0"}>
            <DayWraper />
         </Section>
         <Section className={"team"} title={"Nasza kadra jest wspaniała"} pad={"128px 0"}></Section>
         <Section
            className={"recruitment"}
            color={"rgba(0, 179, 181, 0.07)"}
            title={"Rekrutacja do Turkusowej Wieży"}
            pad={"128px 0"}
         >
            <RecruitmentList />
         </Section>
         <Section className={"joinus"} title={"Dołącz do nas"} pad={"128px 0"}>
            <JoinUs />
            <JobOfertList />
         </Section>
         <Section className={"world"} title={"Zmieniamy świat"} pad={"128px 0"}>
            <Mariusz />
            <Circle />
         </Section>
         <Footer /> */}
      </div>
   );
}

export default App;
