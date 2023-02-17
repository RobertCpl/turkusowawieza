import { useEffect, useState } from "react";
import style from "./Team.module.css";
import dziubek from "./../../assets/images/dziubek.svg";

function Team(props) {
   const [photo, setPhoto] = useState({ datas: {}, isLoaded: false });
   const { featured_media, title } = props.person;

   useEffect(() => {
      const getImg = async () => {
         const response = await fetch(`https://nowa.turkusowawieza.pl/wp-json/wp/v2/media/${featured_media}`);
         const data = await response.json();
         setPhoto({ datas: data, isLoaded: true });
         console.log(data);
      };
      getImg();
   }, []);

   const person = !photo.isLoaded ? (
      <p>is Loading</p>
   ) : (
      <div className={style.wraper}>
         <div className={style.person}>
            <img src={photo.datas.media_details.sizes.thumbnail.source_url} alt="person photo" />
            <div className={style.name}>
               {title.rendered}
               <img className={style.dziubek} src={dziubek} alt="" />
            </div>
         </div>
      </div>
   );

   return <>{person}</>;
}
export default Team;
