import style from "./Form.module.css";
import { useForm } from "react-hook-form";

function Form() {
   const {
      register,
      handleSubmit,
      formState: { errors },
   } = useForm();

   const onSubmit = (data) => {
      console.log(data);
   };
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
               placeholder="np.Ewa"
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
                  placeholder="np.ewa@turkusowawieza.pl"
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
               placeholder="np.Ewa"
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
               type="text"
               id="message"
               className={style.textarea}
               placeholder="np. Cześć! Jesteśmy zainteresowani zapisaniem dziecka."
               {...register("message")}
            />
         </div>
         <div className={style.checkbox}>
            <input type="checkbox" className={style.checkbox} />
            <label htmlFor="" className={style.label}>
               Facebook
            </label>
         </div>
         <input type="submit" />
      </form>
   );
}
export default Form;
