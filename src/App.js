import "./App.css";
import Navigation from "./Layout/Navigation";
import Header from "./Layout/Header";
import Section from "./Layout/Section";
import AboutPostsList from "./components/Posts/AboutPostsList";
import TowerPostsList from "./components/Posts/TowerPostsList";
import Wraper from "./components/Wraper";
import ButtonInspiration from "./components/ButtonInspiration";

function App() {
   return (
      <div className="container">
         <Navigation />
         <Header></Header>
         <Section className={"aboutus"} color={"rgba(252, 252, 252, 1)"} pad={"128px 0"}>
            <AboutPostsList />
         </Section>
         <Section className={"inspiration"} title={"Nasze inspiracje"} pad={"128px 564px"}>
            <Wraper>
               <ButtonInspiration
                  title={"Maria Montessori"}
                  color={"rgba(0, 179, 181, 1)"}
                  pad={"1rem 0"}
                  margin={"0 0 1.5rem 0"}
                  maxWidth={"24rem"}
               />
               <ButtonInspiration
                  title={"Turkusowe organizacje"}
                  color={"rgba(0, 179, 181, 1)"}
                  pad={"1rem 0"}
                  margin={"0 0 1.5rem 1.5rem"}
                  maxWidth={"24rem"}
               />
               <ButtonInspiration
                  title={"Agile Learning Center"}
                  color={"rgba(0, 179, 181, 1)"}
                  pad={"1rem 0"}
                  margin={"0 0 1.5rem 0"}
                  maxWidth={"24rem"}
               />
               <ButtonInspiration
                  title={"Porozumienie bez przemocy"}
                  color={"rgba(0, 179, 181, 1)"}
                  pad={"1rem 0"}
                  margin={"0 0 1.5rem 1.5rem"}
                  maxWidth={"24rem"}
               />
               <ButtonInspiration
                  title={"Jasper Jull"}
                  color={"rgba(0, 179, 181, 1)"}
                  pad={"1rem 0"}
                  margin={"0 0 1.5rem 0"}
                  maxWidth={"24rem"}
               />
               <ButtonInspiration
                  title={"Janusz Korczak"}
                  color={"rgba(0, 179, 181, 1)"}
                  pad={"1rem 0"}
                  margin={"0 0 1.5rem 1.5rem"}
                  maxWidth={"24rem"}
               />
               <ButtonInspiration
                  title={"Robert Baden-Powell i skauting"}
                  color={"rgba(0, 179, 181, 1)"}
                  pad={"1rem 0"}
                  margin={"0 0 1.5rem 0"}
                  maxWidth={"24rem"}
               />
            </Wraper>
         </Section>
         <Section className={"program"} color={"rgba(0, 179, 181, 0.07)"} title={"Jak działamy"} pad={"128px 0"}>
            <TowerPostsList />
         </Section>
      </div>
   );
}

export default App;
