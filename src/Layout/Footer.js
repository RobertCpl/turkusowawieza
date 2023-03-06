import { Link } from "react-router-dom";
import instagram from "./../assets/images/instagram.svg";
import fb from "./../assets/images/facebook.svg";
import style from "./Footer.module.css";
import earth from "./../assets/images/earth.webp";
import Cookie from "../components/Cookie";
import { useState } from "react";

function Footer() {
   return (
      <div className={style.wraper}>
         <div className={style.top}>
            <h1 className={style.title}>
               Skontaktuj się
               <div className={style.decor}></div>
               <span>z nami</span>
            </h1>
            <div className={style.contact}>
               <div className={style.phone}>(+48) 605 128 128</div>
               <a href="mailto: info@turkusowawieza.pl" className={style.email}>
                  info@turkusowawieza.pl
               </a>
               {/* <div className={style.copymail}>Adres email skopiowany</div> */}
               <div className={style.address}>
                  Turkusowa Wieża - Centrum Spotkań
                  <span>ul. Romaszeskiego 23, Warszawa</span>
               </div>
            </div>
         </div>
         <div className={style.bottom}>
            <div className={style.left}>
               <div className={style.social}>
                  <a href="https://www.instagram.com/turkusowawieza/?igshid=YmMyMTA2M2Y%3D">
                     <div className={style.instagram}>
                        <img src={instagram} alt="instagram icon" />
                     </div>
                  </a>
                  <a href="https://www.facebook.com/TurkusowaWieza">
                     <div className={style.facebook}>
                        <img src={fb} alt="facebook icon" />
                     </div>
                  </a>
               </div>
               <div className={style.copy}>&copy; Turkusowa Wieża 2023</div>
            </div>
            <div className={style.earth}>
               <img src={earth} alt="planeta" />
            </div>

            <Link to={"/polityka-prywatnosci"} className={style.right}>
               Polityka prywatności
            </Link>
         </div>
      </div>
   );
}
export default Footer;
