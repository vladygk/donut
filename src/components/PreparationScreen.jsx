import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styles from "../styles/PreparationScreen.module.css";
import Title from "./TitleComponent";
import sparcles from "../assets/sparkles.svg"
import DonutComponent from "./DonutComponent";
import donutImgs from "../assets/imports.js"

export default function PreparationScreen(){
    const location = useLocation();
    const navigate = useNavigate();
    function goToReady(){
        return navigate("/ready",{state:{donut:location.state.donut}});
    }



useEffect(()=>{

    setTimeout(goToReady,5000);
    
},[]);


    return <div className={styles["preparation-screen-container"]}>
        <img src={sparcles} className={styles.sparkles} alt="" />
        <DonutComponent isRotating={true} id={5} img={donutImgs[location.state.donut]}/>
          
    <Title middleTitle="Preparing..." middleTitleStyle={styles.middleTitle}/>
    </div>
}