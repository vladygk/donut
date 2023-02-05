
import StartScreen from "./components/StartScreen";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MenuScreen from "./components/MenuScreen";
import PaymentScreen from "./components/PaymentScreen";
import PreparationScreen from "./components/PreparationScreen";
import ReadyScreen from "./components/ReadyScreen";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<StartScreen/>} />
          <Route path="/menu" element={<MenuScreen/>} />
          <Route path="/payment" element={<PaymentScreen/>} />
          <Route path="/preparation" element={<PreparationScreen/>} />
          <Route path="/ready" element={<ReadyScreen/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
