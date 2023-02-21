import { useEffect, useState } from "react";
import Team from "./Team";
import style from "./TeamList.module.css";

function TeamList(props) {
   const [posts, setPosts] = useState([]);
   useEffect(() => {
      const getTeam = async () => {
         const response = await fetch("https://nowa.turkusowawieza.pl/wp-json/wp/v2/zespol");
         const data = await response.json();
         setPosts(data);
      };
      getTeam();
   }, []);

   const persons = posts.map((person) => {
      return <Team key={person.id} person={person} top={props.top} />;
   });
   return <div className={style.wraper}>{persons}</div>;
}
export default TeamList;
