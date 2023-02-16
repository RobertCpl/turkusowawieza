import refresh from "./../../assets/images/refresh.svg";
import DayPlan from "./DayPlan";

import style from "./DayWraper.module.css";

const planWiktor = [
   {
      id: 1,
      title: "Edukatorium z Polskiego",
      color: "rgba(0, 179, 181, 1)",
   },
   {
      id: 2,
      title: "Spotkanie z mentorem",
      color: "rgba(85, 233, 137, 1)",
   },
   {
      id: 3,
      title: "Język angielski",
      color: " rgba(255, 144, 0, 1)",
   },
   {
      id: 4,
      title: "Robie chmure",
      color: "rgba(58, 134, 255, 1)",
   },
   {
      id: 5,
      title: "Spoktanie grona",
      color: "rgba(0, 179, 181, 1)",
   },
   {
      id: 6,
      title: "Sport",
      color: "rgba(255, 186, 83, 1)",
   },
];

const planKasia = [
   {
      id: 1,
      title: "Spotkanie mentorskie",
      color: "rgba(85, 233, 137, 1)",
   },
   {
      id: 2,
      title: "Matematyka",
      color: "rgba(54, 213, 215, 1)",
   },
   {
      id: 3,
      title: "Język angielski",
      color: " rgba(255, 144, 0, 1)",
   },
   {
      id: 4,
      title: "Praca własna",
      color: "rgba(79, 192, 255, 1)",
   },
   {
      id: 5,
      title: "RPG",
      color: "rgba(165, 184, 255, 1)",
   },
   {
      id: 6,
      title: "Malort",
      color: "rgba(183, 126, 255, 1)",
   },
   {
      id: 7,
      title: "Sport",
      color: "rgba(255, 186, 83, 1)",
   },
];

function DayWraper() {
   return (
      <div className={style.wraper}>
         <div className={style.wiktor}>
            <DayPlan title={"Wiktor z klasy 6"} sub={"Czwartek"} plan={planWiktor} />
         </div>
         <div className={style.icon}>
            <img src={refresh} alt="refresh icon" />
         </div>
         <div className="kasia">
            <DayPlan title={"Kasia z klasy 2"} sub={"Poniedziałek"} plan={planKasia} />
         </div>
      </div>
   );
}
export default DayWraper;
