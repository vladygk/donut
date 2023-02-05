import Title from "./TitleComponent"
import { useNavigate } from "react-router-dom";
import unicornDust from "../assets/unicorn_dust.svg"
import trueBlood from "../assets/true_blood.svg"
import styles from "../styles/StartScreen.module.css"
import sparkles from "../assets/sparkles.svg"
export default function StartScreen(){
const navigate = useNavigate();

    return <>
    <div className={styles["start-screen-container"]}>
        <div >
    <Title bigTitleStyle={styles.bigTitle} smallTitleStyle={styles.smallTitle} bigTitle="DONUT SHOP" smallTitle="THE"/>
    </div>
    <img className={styles.sparkles} src={sparkles} alt=""/>
    <img className={styles.donut1} src={unicornDust} alt="" />
    <img className={styles.donut2}src={trueBlood} alt="" />
    <button className={styles["start-button"]} onClick={()=>navigate("/menu")}>
        Start
    </button>
    </div>
        

    </>
}