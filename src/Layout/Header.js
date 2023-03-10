import style from "./Header.module.css";
import tree from "./../assets/images/Tree.webp";
import Button from "../components/Button";
import ButtonSecondary from "./../components/ButtonSecondary";
function Header() {
   const scrollToActions = (e) => {
      e.preventDefault();

      const element = document.getElementById("actions");

      element.scrollIntoView({ behavior: "smooth" });
   };
   return (
      <header className={style.header}>
         <div className={style.hero}>
            <h1 className={style.heading_primary}>
               <span>Wspieramy</span>
               <span>dzieci w byciu</span>
               <span>samodzielnym</span>
            </h1>
            <span className={style.heading_sub}>Dając wolność uczymy odpowiedzialności.</span>
            <div className={style.buttons}>
               <Button title={"Zgłoś się"} className={style.button} to={"/formularz-zgloszeniowy"} />
               <ButtonSecondary title={"Jak działamy"} scroll={scrollToActions} />
            </div>
         </div>
         <div className={style.tree}>
            <img src={tree} alt="tree" />
         </div>
      </header>
   );
}
export default Header;
