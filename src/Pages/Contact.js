import style from "./Contact.module.css";
import { Link } from "react-router-dom";
import arrowLink from "./../assets/images/arrowLink.svg";
import Form from "../components/Form";
import Footer from "../Layout/Footer";

function Contact() {
   return (
      <>
         <div className={style.wraper}>
            <Link to={"/"} className={style.link}>
               <div className={style.linkArrow}>
                  <img src={arrowLink} alt="arrow left" />
               </div>
               Wróć do strony głównej
            </Link>
            <h1 className={style.title}>Rekrutacja rodzin</h1>
            <div className={style.flexWraper}>
               <div className={style.info}>
                  <h3 className={style.sub}>
                     Rekrutacja na rok szkolny 2023/2024
                     <div className={style.decor}></div>
                  </h3>
                  <p className={style.text}>
                     <span>
                        Jeśli chcesz zapisać dziecko – skontaktuj się z nami, porozmawiamy i umówimy się na spotkanie.
                     </span>
                     <span>Prosimy obydwoje rodziców o wcześniejsze zapoznanie się z naszą stroną internetową.</span>
                     <span>
                        Niestety, ze względu na duże zainteresowanie możemy nie być w stanie zaoferować spotkania każdej
                        rodzinie i przyjąć wszystkich chętnych.
                     </span>
                     <span>
                        W tym momencie niestety nie jesteśmy jeszcze gotowi, aby zapewnić wsparcie dzieciom z diagnozami
                        trudności rozwojowych czy orzeczeniami o potrzebie specjalnego kształcenia.
                     </span>
                     <span>
                        Decyzję o przyjęciu każdorazowo będziemy podejmować na podstawie kolejności zgłoszeń oraz
                        naszych możliwości odpowiedzi na potrzeby rodziny, dziecka oraz naszej społeczności.
                     </span>
                     <span>Aby dowiedzieć się więcej na temat zapisów skontaktuj się z nami:</span>
                  </p>
                  <div className={style.phone}>tel. 605 128 128</div>
                  <div className={style.email}>info@turkusowawieza.pl</div>
               </div>
               <div className={style.formWrap}>
                  <h3 className={style.sub}>Formularz zgłoszeniowy</h3>
                  <Form />
               </div>
            </div>
         </div>
         <Footer />
      </>
   );
}
export default Contact;
