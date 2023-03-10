import style from "./Home.module.css";
import { useEffect, useState } from "react";

import Header from "../Layout/Header";
import Section from "../Layout/Section";
import AboutPostsList from "../components/Posts/AboutPostsList";
import TowerPostsList from "../components/Posts/TowerPostsList";
import TeamList from "../components/Posts/TeamList";
import Wraper from "../Layout/Wraper";
import ButtonInspiration from "../components/ButtonInspiration";
import RecruitmentList from "../components/Posts/RecruitmentList";
import DayWraper from "../Layout/DayPlan/DayWraper";
import JoinUs from "../Layout/JoinUs/JoinUs";
// import JobOfertList from "./components/Posts/JobOfertList";
import Mariusz from "../Layout/World/Mariusz";
import Circle from "../Layout/World/Circle";
import Footer from "../Layout/Footer";

function Home() {
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
      <div className={style.container}>
         <Header></Header>
         <Section
            className={"aboutus"}
            color={"rgba(252, 252, 252, 1)"}
            pad={windowsWidth > 768 ? "128px 12px" : "64px 12px"}
            line={1}
         >
            <AboutPostsList />
         </Section>
         <Section
            className={"inspiration"}
            title={"Nasze inspiracje"}
            pad={windowsWidth > 768 ? "128px 12px" : "64px 12px"}
         >
            <Wraper maxWidth={"960px"}>
               <ButtonInspiration
                  title={"Maria Montessori"}
                  color={"rgba(0, 179, 181, 1)"}
                  pad={"1rem 0"}
                  margin={windowsWidth > 768 ? "0 0 1.5rem 1.5rem" : "0 0 1.5rem 0 "}
                  // maxWidth={"21rem"}
               />
               <ButtonInspiration
                  title={"Turkusowe organizacje"}
                  color={"rgba(0, 179, 181, 1)"}
                  pad={"1rem 0"}
                  margin={windowsWidth > 768 ? "0 0 1.5rem 1.5rem" : "0 0 1.5rem 0 "}
                  // maxWidth={"21rem"}
               />
               <ButtonInspiration
                  title={"Agile Learning Center"}
                  color={"rgba(0, 179, 181, 1)"}
                  pad={"1rem 0"}
                  margin={windowsWidth > 768 ? "0 0 1.5rem 1.5rem" : "0 0 1.5rem 0 "}
                  // maxWidth={"21rem"}
               />
               <ButtonInspiration
                  title={"Porozumienie bez przemocy"}
                  color={"rgba(0, 179, 181, 1)"}
                  pad={"1rem 0"}
                  margin={windowsWidth > 768 ? "0 0 1.5rem 1.5rem" : "0 0 1.5rem 0 "}
                  // maxWidth={"21rem"}
               />
               <ButtonInspiration
                  title={"Jasper Jull"}
                  color={"rgba(0, 179, 181, 1)"}
                  pad={"1rem 0"}
                  margin={windowsWidth > 768 ? "0 0 1.5rem 1.5rem" : "0 0 1.5rem 0 "}
                  // maxWidth={"21rem"}
               />
               <ButtonInspiration
                  title={"Janusz Korczak"}
                  color={"rgba(0, 179, 181, 1)"}
                  pad={"1rem 0"}
                  margin={windowsWidth > 768 ? "0 0 1.5rem 1.5rem" : "0 0 1.5rem 0 "}
                  // maxWidth={"21rem"}
               />
               <ButtonInspiration
                  title={"Robert Baden-Powell i skauting"}
                  color={"rgba(0, 179, 181, 1)"}
                  pad={"1rem 0"}
                  margin={windowsWidth > 768 ? "0 0 1.5rem 1.5rem" : "0 0 1.5rem 0 "}
                  // maxWidth={"21rem"}
               />
            </Wraper>
         </Section>
         <Section
            className={"actions"}
            color={"rgba(0, 179, 181, 0.07)"}
            title={"Jak dzia??amy"}
            pad={windowsWidth > 768 ? "128px 12px" : "64px 12px"}
            id={"actions"}
         >
            <TowerPostsList />
         </Section>
         <Section
            className={"plan"}
            title={"Przyk??adowy plan dnia"}
            title2={"w Turkusowej Wie??y"}
            pad={windowsWidth > 768 ? "128px 12px" : "64px 12px"}
            line={1}
         >
            <DayWraper />
         </Section>
         <Section
            className={"team"}
            title={"Nasza kadra jest wspania??a"}
            pad={windowsWidth > 768 ? "128px 12px" : "64px 12px"}
         >
            <TeamList />
         </Section>
         <Section
            className={"recruitment"}
            color={"rgba(0, 179, 181, 0.07)"}
            title={"Rekrutacja do Turkusowej Wie??y"}
            pad={windowsWidth > 768 ? "128px 12px" : "64px 12px"}
         >
            <RecruitmentList width={windowsWidth} />
         </Section>
         <Section
            className={"joinus"}
            title={"Do????cz do nas"}
            pad={windowsWidth > 768 ? "128px 12px" : "64px 12px"}
            line={1}
         >
            <JoinUs />
            {/* <JobOfertList /> */}
         </Section>
         <Section
            className={"world"}
            title={"Zmieniamy ??wiat"}
            pad={windowsWidth > 768 ? "128px 12px" : "64px 12px"}
            line={1}
         >
            <Mariusz />
            <Circle />
         </Section>
         <Footer />
      </div>
   );
}

export default Home;
