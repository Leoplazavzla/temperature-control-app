import './App.css';
import {TempGrid} from "./components/TempGrid";
import {TempCircle} from "./components/TempCircle";
import {Degrees} from "./components/Degrees"
import {ButtonContainer} from "./components/ButtonContainer";
import {HotButton} from "./components/HotButton";
import {ColdButton} from "./components/ColdButton";
import {useState} from "react";

function App() {
    const [circleColor, setCircleColor]= useState("blue");

    const changeColor = () => {
            setCircleColor("red")
    }

  return (
    <div className="App">
      <h1>Temperature Control App</h1>

      <section style={{width: 600, minHeight:900,}}>
        <TempGrid>
          <TempCircle tempColor={circleColor}>
              <Degrees>0°C</Degrees>
          </TempCircle>
          <ButtonContainer>
            <HotButton onClick={changeColor}>+</HotButton>
            <ColdButton>-</ColdButton>
          </ButtonContainer>
        </TempGrid>
      </section>
    </div>
  );
}

export default App;
