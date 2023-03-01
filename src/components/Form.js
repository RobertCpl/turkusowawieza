import style from "./Form.module.css";
import arrowSvg from "./../assets/images/button-arrow.svg";
import { useForm } from "react-hook-form";
import { useEffect, useRef, useState } from "react";

function Form() {
   const [checked, setChecked] = useState(false);
   const {
      register,
      handleSubmit,
      formState,
      formState: { errors },
   } = useForm();
   const agree = useRef();

   const onSubmit = (data) => {
      console.log(data);
   };

   const agreeHandler = () => {
      if (agree.current.checked) {
         console.log(agree.current.checked);
         setChecked(true);
         return;
      } else {
         setChecked(false);
      }
   };
   const button = checked ? (
      <button type="submit" className={style.subbmit}>
         <span>Wyślij</span>
         <span className={style.arrow}>
            <img src={arrowSvg} alt="" />
         </span>
      </button>
   ) : (
      <button type="submit" className={style.subbmit} disabled>
         <span>Wyślij</span>
         <span className={style.arrow}>
            <img src={arrowSvg} alt="" />
         </span>
      </button>
   );

   return (
      <form onSubmit={handleSubmit(onSubmit)} className="form">
         <div className={style.formInput}>
            <label htmlFor="name" className={style.label}>
               Twoje imię
            </label>
            <input
               type="text"
               id="name"
               className={style.input}
               placeholder="np. Ewa"
               {...register("name", {
                  required: true,
               })}
            />
            {errors.name && errors.name.type === "required" && (
               <p className={style.errorMsg}>To pole jest obowiązkowe</p>
            )}
         </div>
         <div className={style.contact}>
            <div className={style.formInput}>
               <label htmlFor="email" className={style.label}>
                  Adres email
               </label>
               <input
                  type="text"
                  id="email"
                  className={style.input}
                  placeholder="np. ewa@turkusowawieza.pl"
                  {...register("email", {
                     required: "To pole jest obowiązkowe",
                     pattern: {
                        value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                        message: "Email nie jest poprawny",
                     },
                  })}
               />
               {errors.email && <p className={style.errorMsg}>{errors.email.message}</p>}
            </div>
            <div className={style.formInput}>
               <label htmlFor="phone" className={style.label}>
                  Numer telefonu
               </label>
               <input
                  type="number"
                  id="phone"
                  className={style.input}
                  placeholder="np.+48 605 128 128"
                  {...register("phone", {
                     required: "To pole jest obowiązkowe",
                     minLength: {
                        value: 9,
                        message: "Numer nie jest poprawny",
                     },
                  })}
               />
               {errors.phone && <p className={style.errorMsg}>{errors.phone.message}</p>}
            </div>
         </div>
         <div className={style.formInput}>
            <label htmlFor="child" className={style.label}>
               Imię i wiek dziecka / dzieci
            </label>
            <input
               type="text"
               id="child"
               className={style.input}
               placeholder="np. Ewa"
               {...register("child", {
                  required: true,
               })}
            />
            {errors.child?.type === "required" && <p className={style.errorMsg}>To pole jest obowiązkowe </p>}
         </div>
         <div className={style.formInput}>
            <label htmlFor="message" className={style.label}>
               Treść wiadomości - opcjonalnie
            </label>
            <textarea
               id="message"
               className={style.textarea}
               placeholder="np. Cześć! Jesteśmy zainteresowani zapisaniem dziecka."
               {...register("message")}
            />
         </div>
         <div className={style.checkboxes}>
            <p className={style.checkboxesLabel}>Skąd się o nas dowiedzieliście</p>
            <div className={style.checkboxWraper}>
               <input
                  type="checkbox"
                  className={style.checkbox}
                  id="facebook"
                  value="facebook"
                  {...register("source")}
               />
               <label htmlFor="facebook" className={style.checkboxLabel}>
                  Facebook
               </label>
            </div>
            <div className={style.checkboxWraper}>
               <input type="checkbox" className={style.checkbox} id="friends" value="friends" {...register("source")} />
               <label htmlFor="friends" className={style.checkboxLabel}>
                  Znajomi
               </label>
            </div>
            <div className={style.checkboxWraper}>
               <input type="checkbox" className={style.checkbox} id="google" value="google" {...register("source")} />
               <label htmlFor="google" className={style.checkboxLabel}>
                  Wyszukiwarka internetowa - prosimy o wpsanie wyszukiwanej frazy w polu inne.
               </label>
            </div>
            <div className="other">
               <div className={style.checkboxWraper}>
                  <input type="checkbox" className={style.checkbox} id="other" value="other" {...register("source")} />
                  <label htmlFor="other" className={style.checkboxLabel}>
                     Inne
                  </label>
               </div>
               <textarea
                  name="other"
                  cols="30"
                  rows="10"
                  placeholder="np. wyszukiwarka Google - fraza turkusowa wieża"
                  className={style.textarea}
                  {...register("sourceText")}
               ></textarea>
            </div>
         </div>
         <div className={style.agreement}>
            <input
               type="checkbox"
               className={style.checkbox}
               id="agreement"
               {...register("agreement", { required: true })}
               ref={agree}
               onChange={agreeHandler}
            />
            <label htmlFor="agreement" className={style.agreementLabel}>
               Wypełniając i wysyłając nam niniejszy formularz, wyrażasz zgodę na przetwarzanie podanych danych
               osobowych przez organ prowadzący "Turkusową Wieżę", z siedzibą w Warszawie, ul. Romaszewskiego 23. W
               każdym czasie możesz odwołać zgodę na przetwarzanie danych, jak również uzyskać dostęp do danych lub je
               poprawić, wysyłając wiadomość e-mail na adres: info@turkusowawieza.pl. Podanie danych jest dobrowolne.
            </label>
         </div>
         {button}
      </form>
   );
}
export default Form;
