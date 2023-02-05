import { useNavigate } from "react-router-dom";
import Title from "./TitleComponent";
import styles from "../styles/MenuScreen.module.css";
import skyShaped from "../assets/sky_shaped.svg";
import trueBlood from "../assets/true_blood.svg";
import unicornDust from "../assets/unicorn_dust.svg";
import marbleMagic from "../assets/marble_magic.svg";
import DonutComponent from "./DonutComponent";
export default function MenuScreen() {
  const navigate = useNavigate();

  function redirectToPayment(event) {
    const donutName = event.target.parentElement.id;
    return navigate("/payment",{state:{"donut":donutName}});
  }

  return (
    <div className={styles.menuScreenContainer}>
      <div>
        {" "}
        <Title
          smallTitleStyle={styles.smallTitle}
          bigTitleStyle={styles.bigTitle}
          bigTitle="MENU"
          smallTitle="THE"
        />
      </div>
      <div className={styles.donutContainer}>
        <DonutComponent
          clickHandler={redirectToPayment}
          title="SKY SHAPED"
          id={1}
          img={skyShaped}
          isRotating={true}
        />
        <DonutComponent
          clickHandler={redirectToPayment}
          title="MARBLE MAGIC"
          id={2}
          img={marbleMagic}
          isRotating={true}
        />
        <DonutComponent
          clickHandler={redirectToPayment}
          title="TRUE BLOOD"
          id={3}
          img={trueBlood}
          isRotating={true}
        />
        <DonutComponent
          clickHandler={redirectToPayment}
          title="UNICORN DUST"
          id={4}
          img={unicornDust}
          isRotating={true}
        />
      </div>
    </div>
  );
}
