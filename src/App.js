import "./App.css";
import Navigation from "./Layout/Navigation";
import Header from "./Layout/Header";
import Section from "./Layout/Section";
import AboutPostsList from "./components/Posts/AboutPostsList";
import TowerPostsList from "./components/Posts/TowerPostsList";

function App() {
   return (
      <div className="container">
         <Navigation />
         <Header></Header>
         <Section color={"rgba(252, 252, 252, 1)"} pad={"128px 0"}>
            <AboutPostsList />
         </Section>
         <Section title={"Jak działamy"} pad={"128px 0"}>
            <TowerPostsList />
         </Section>
      </div>
   );
}

export default App;
