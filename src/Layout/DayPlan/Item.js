import style from "./Item.module.css";

function Item(props) {
   return (
      <div className={style.item} style={{ backgroundColor: props.color }}>
         <span>{props.title}</span>
      </div>
   );
}
export default Item;
