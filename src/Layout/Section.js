import React from "react";
import { useEffect, useRef, useState } from "react";
import ArrowScroll from "../components/ArrowScroll";
import style from "./Section.module.css";

function Section(props) {
   const sectionTop = useRef();
   const [top, setTop] = useState();

   useEffect(() => {
      const handleScroll = () => {
         setTop(window.scrollY + sectionTop.current.getBoundingClientRect().top + 200);
         console.log(top);
      };

      window.addEventListener("scroll", handleScroll);

      return () => {
         window.removeEventListener("scroll", handleScroll);
      };
   }, []);

   const childrenWithProps = React.Children.map(props.children, (child, index) => {
      return React.cloneElement(child, { top: top });
   });

   return (
      <section
         className={props.className}
         style={{ backgroundColor: props.color, padding: props.pad }}
         ref={sectionTop}
      >
         {props.line ? <div className={style.line}></div> : null}
         {props.title ? (
            <h2 className={style.title}>
               {props.title}
               {props.title2 ? <span>{props.title2}</span> : null}
               <div className={style.decor}></div>
            </h2>
         ) : null}
         {childrenWithProps}
         <ArrowScroll />
      </section>
   );
}
export default Section;
