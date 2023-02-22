import style from "./CirclePhoto.module.css";

function CirclePhoto(props) {
   const { index } = props;

   return (
      <div
         className={`${style.circle} ${index % 2 === 0 ? style.circleGreen : style.circleYellow}`}
         style={{
            width: index % 2 === 0 ? "40px" : "60px",
            height: index % 2 === 0 ? "40px" : "60px",
            left: index % 2 === 0 ? "25%" : "75%",
            top: index % 2 === 0 ? "-20px" : "-40px",
         }}
      ></div>
   );
}
export default CirclePhoto;
