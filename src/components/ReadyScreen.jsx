import { useLocation, useNavigate } from "react-router-dom";
import styles from "../styles/ReadyScreen.module.css";
import DonutComponent from "./DonutComponent";
import donutImgs from "../assets/imports";
export default function ReadyScreen() {
  const navigate = useNavigate();

  function goToStart() {
    return navigate("/");
  }

  const location = useLocation();
  return (
    <div className={styles["ready-screen-container"]}>
      <DonutComponent img={donutImgs[location.state.donut]} id="6" />
      <div className={styles.message}>
        <div className={styles["paragraphs"]}>
          <p>You can now come</p>
          <p>and pick up</p>
          <p>your amazing Donut!</p>
        </div>
      </div>
      <button onClick={goToStart} className={styles.doneBtn}>
        Done
      </button>
    </div>
  );
}
