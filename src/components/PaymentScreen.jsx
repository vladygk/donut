import { useLocation, useNavigate } from "react-router-dom";
import Title from "./TitleComponent";
import styles from "../styles/PaymentScreen.module.css";
import skyShaped from "../assets/sky_shaped.svg";
import unicornDust from "../assets/unicorn_dust.svg";
import googleImg from "../assets/google-pay.png";
import appleImg from "../assets/apple-pay.png";
export default function PaymentScreen() {
  const navigate = useNavigate();
const location = useLocation();

  return (
    <div className={styles["payment-screen-container"]}>
      <Title
        bigTitle="NOW"
        smallTitle="PAY US"
        middleTitle="You can"
        bigTitleStyle={styles.bigTitle}
        smallTitleStyle={styles.smallTitle}
        middleTitleStyle={styles.middleTitle}
      />
      <img src={skyShaped} className={styles.donut1} alt="" />
      <img src={unicornDust} className={styles.donut2} alt="" />


      <div >
      <button className={styles.appleBtn}
        onClick={() => {
          navigate("/preparation",{state:{"donut":location.state.donut}});
        }}
      >
        <div className={styles.appleImg}><img src={appleImg} className={styles.img}  alt="" /></div>
      </button>
      <button className={styles.googleBtn}
        onClick={() => {
          navigate("/preparation",{state:{"donut":location.state.donut}});
        }}
      >
       <div className={styles.googleImg}><img src={googleImg} className={styles.img} alt="" /></div> 
      </button>
      </div>
    </div>
  );
}
