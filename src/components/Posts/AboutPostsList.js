import { useEffect, useState } from "react";
import style from "./AboutPostsList.module.css";

import Post from "./AboutPost";

function AboutPostsList() {
   const [posts, setPosts] = useState([]);
   const [windowsWidth, setWindowWidth] = useState(window.innerWidth);

   useEffect(() => {
      async function getPosts() {
         const response = await fetch("https://nowa.turkusowawieza.pl/wp-json/wp/v2/posts?categories=3&order=asc");
         const data = await response.json();
         setPosts(data);
      }
      getPosts();
   }, []);

   useEffect(() => {
      const handleWindowResize = () => {
         setWindowWidth(window.innerWidth);
      };
      window.addEventListener("resize", handleWindowResize);

      return () => {
         window.removeEventListener("resize", handleWindowResize);
      };
   });

   let post = posts.map((post, index) => {
      if (index % 2 === 0) {
         return (
            <Post key={post.id} title={post.title} content={post.content} media={post.featured_media} index={index} />
         );
      } else {
         return (
            <Post
               key={post.id}
               title={post.title}
               content={post.content}
               media={post.featured_media}
               reverse={windowsWidth >= 768 ? "row-reverse" : "column-reverse"}
               imgMargin={"0"}
               textMargin={windowsWidth >= 768 ? null : "3rem"}
            />
         );
      }
   });
   return <div className={style.aboutus}>{post}</div>;
}
export default AboutPostsList;
