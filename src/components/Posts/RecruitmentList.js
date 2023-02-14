import arrowL from "./../../assets/images/arrowLeft.svg";
import arrowR from "./../../assets/images/arrowRight.svg";
import style from "./RecruitmentList.module.css";
import RecruitmentPost from "./RecruitmentPost";
import Steps from "./../Steps";
import { useEffect, useLayoutEffect, useRef, useState } from "react";

const posts = [
   {
      id: 1,
      title: "Formularz zgłoszeniowy",
      text: "Jeśli po zapoznaniu się z naszą stroną internetową jesteś zainteresowany zapisaniem dziecka do naszej szkoły, wypełnij formularz zgłoszeniowy.",
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

function RecruitmentList() {
   const text = useRef(null);
   const step = useRef([]);

   const [borders, setActiveBorder] = useState([]);
   let [index, setIndex] = useState(1);

   useEffect(() => {
      setActiveBorder(Array.from(step.current.childNodes));
   }, []);

   function RightClickHandler() {
      // const steps = borders.map((border) => border.firstElementChild);

      // console.log(index);
      console.log(borders);

      // if (index <= steps.length - 1) {
      //    borders[index].classList.add("stepActive");
      //    steps[index].classList.add("stepVisited");
      //    if (index !== 0) {
      //       borders[index - 1].classList.remove("stepActive");
      //    }

      //    descriptions.forEach((description, indexDescription, descriptions) => {
      //       if (index == indexDescription) {
      //          description.classList.add("joinus__description-active");

      //          descriptions[indexDescription - 1].classList.remove("joinus__description-active");
      //       }
      //    });
      //    setIndex(index++);
      // } else if (index == steps.length) {
      //    return;
      // }
   }
   return (
      <>
         <div className={style.wraper}>
            <div className={style.arrowLeft}>
               <img src={arrowL} alt="arrow left" />
            </div>
            <div className={style.text} ref={text}>
               {posts.map((post) => (
                  <RecruitmentPost key={post.id} title={post.title} text={post.text} />
               ))}
            </div>
            <div className={style.arrowRight} onClick={RightClickHandler}>
               <img src={arrowR} alt="arrow right" />
            </div>
         </div>
         <Steps ref={step} />
      </>
   );
}
export default RecruitmentList;
