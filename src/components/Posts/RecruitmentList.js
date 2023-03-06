import arrowL from "./../../assets/images/arrowLeft.svg";
import arrowR from "./../../assets/images/arrowRight.svg";
import style from "./RecruitmentList.module.css";
import RecruitmentPost from "./RecruitmentPost";
import Step from "./../Step";
import { Link } from "react-router-dom";
import { useState } from "react";

const link = <Link to={"/"}>formularz zgłoszeniowy</Link>;

const posts = [
   {
      id: 1,
      title: "Formularz zgłoszeniowy",
      text: `Jeśli po zapoznaniu się z naszą stroną internetową jesteś zainteresowany zapisaniem dziecka do naszej szkoły, wypełnij formularz zgłoszeniowy`,
   },
   {
      id: 2,
      title: "Ankieta",
      text: "W odpowiedzi na zgłoszenie, prześlemy Ci ankietę z pytaniami. To ważne, żeby na pytania odpowiedzieli obydwoje rodziców dziecka. Jeżeli odpowiedzi udzielone w ankiecie wykażą spójność w podejściu do rozwoju i wychowania dziecka, zaprosimy Was na rozmowę.",
   },
   {
      id: 3,
      title: "Rozmowa z rodzicami",
      text: "Rozmowa to dobry czas, żeby obydwie strony mogły zweryfikować wzajemne oczekiwania. Jeżeli po rozmowie wyrazimy chęć dalszej współpracy, zaprosimy Wasze dziecko na dzień próbny",
   },
   {
      id: 4,
      title: "Dzień próbny dla dziecka",
      text: "Dzień próbny to okazja dla Waszego dziecka, żeby zapoznać się ze szkołą, kadrą, zobaczyć jak tu jest. My tego dnia skupiamy się na obserwacji dziecka i ocenie, czy Turkusowa Wieża jest miejscem dopasowanym do potrzeb Waszego dziecka.",
   },
   {
      id: 5,
      title: "Finalna decyzja obydwu stron",
      text: "Po dniu próbnym przekażemy Wam naszą decyzję. W przypadku odpowiedzi na “nie”, damy informację zwrotną dlaczego. Jeżeli będziemy na “tak”, damy Wam czas do namysłu, czy chcecie do nas dołączyć.",
   },
];

function RecruitmentList(props) {
   let [curentIndex, setCurenIndex] = useState(0);
   const [widthFill, setWidthFill] = useState("");

   const post = posts.map((post, index) => {
      if (curentIndex === index) {
         return <RecruitmentPost key={post.id} title={post.title} text={post.text} />;
      }
   });

   const steps = posts.map((post, index) => {
      return <Step key={index} index={index} curentIndex={curentIndex} />;
   });

   function RightClickHandler() {
      if (curentIndex >= posts.length - 1) {
         return;
      }

      setCurenIndex(++curentIndex);
      if (curentIndex === 1) {
         setWidthFill("25%");
      } else if (curentIndex === 2) {
         setWidthFill("50%");
      } else if (curentIndex === 3) {
         setWidthFill("75%");
      } else if (curentIndex === 4) {
         setWidthFill("100%");
      }
   }
   function LeftClickHandler() {
      if (curentIndex <= 0) {
         return;
      }
      setCurenIndex(--curentIndex);
      if (curentIndex === 1) {
         setWidthFill("25%");
      } else if (curentIndex === 2) {
         setWidthFill("50%");
      } else if (curentIndex === 3) {
         setWidthFill("75%");
      } else if (curentIndex === 4) {
         setWidthFill("100%");
      } else if (curentIndex === 0) {
         setWidthFill("0");
      }
   }

   return (
      <>
         <div className={style.wraper}>
            <div className={style.arrowLeft} onClick={LeftClickHandler}>
               <img src={arrowL} alt="arrow left" />
            </div>

            <div className={style.text}>{post}</div>

            <div className={style.arrowRight} onClick={RightClickHandler}>
               <img src={arrowR} alt="arrow right" />
            </div>
         </div>

         {props.width > 768 ? (
            <div className={style.steps}>
               <div className={style.bar}>
                  <div className={style.fill} style={{ width: widthFill }}></div>
               </div>
               {steps}
            </div>
         ) : null}
      </>
   );
}
export default RecruitmentList;
