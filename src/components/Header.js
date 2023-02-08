import style from "./Header.module.css";
import tree from "./../assets/images/Tree.jpg";
import Button from "./Button";
import ButtonSecondary from "./ButtonSecondary";
function Header() {
   return (
      <header className={style.header}>
         <div className={style.hero}>
            <h1 className={style.heading_primary}>
               <span>Wspieramy</span>
               <span>dzieci w byciu</span>
               <span>samodzielnym</span>
            </h1>
            <span className={style.heading_sub}>Dając wolność uczymy odpowiedzialności.</span>
            <div className="heroBtnBox">
               <Button title={"Zgłoś się"} />
               <ButtonSecondary title={"Jak działamy"} margin={"0rem 0 0 1rem"} />
            </div>
         </div>
         <div className="tree">
            <img src={tree} alt="" />
         </div>
      </header>
   );
}
export default Header;
