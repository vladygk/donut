import styles from "../styles/DonutComponent.module.css";
import {motion} from "framer-motion/dist/framer-motion"

export default function DonutComponent(props) {
  return (
    <div id={props.title} onClick={props.clickHandler}>
      {props.title && <div className={styles[`donutTitle${props.id}`]}>{props.title}</div>}
      <div className={styles[`shadow${props.id}`]}></div>
      <div className={styles[`shadowInner${props.id}`]}></div>
        <motion.img 
            
            animate={props.isRotating ? { rotate: 360 }:""}
            transition={{ ease: "linear", duration: 2, repeat: Infinity }}
          className={styles[`donutImage${props.id}`]}
          src={props.img}
          alt=""
        />
      
    </div>
  );
}
