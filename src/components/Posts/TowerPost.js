import { Fragment, useEffect, useState } from "react";
import style from "./TowerPost.module.css";
import Button from "../Button";

function TowerPost(props) {
   const [img, setImg] = useState({ datas: {}, isLoaded: false });
   const { title, excerpt, media } = props;

   useEffect(() => {
      fetch(`https://nowa.turkusowawieza.pl/wp-json/wp/v2/media/${media}`)
         .then((response) => response.json())
         .then((data) => {
            setImg({ datas: data, isLoaded: true });
         });
   }, []);

   return (
      <div className={style.wraper}>
         {!img.isLoaded ? (
            <p>Loading</p>
         ) : (
            <>
               <div className={style.leftColumn}>
                  <div>
                     <h3 className={style.title}>{title.rendered}</h3>
                     <div className={style.text} dangerouslySetInnerHTML={{ __html: excerpt.rendered }}></div>
                  </div>
                  <Button title={"Dowiedź się wiecej"} />
               </div>
               <div className={style.rightColumn}>
                  <div className={style.photo}>
                     <img src={img.datas.media_details.sizes.full.source_url} alt="" />
                  </div>
               </div>
            </>
         )}
      </div>
   );
}

export default TowerPost;
