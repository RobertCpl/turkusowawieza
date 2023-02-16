import Item from "./Item";
import style from "./DayPlan.module.css";
function DayPlan(props) {
   const plan = props.plan.map((item) => <Item key={item.id} title={item.title} color={item.color} />);
   return (
      <div className={style.wraper}>
         <h3 className={style.title}>{props.title}</h3>
         <div className={style.sub}>{props.sub}</div>
         <div className={style.items}>{plan}</div>
      </div>
   );
}
export default DayPlan;
