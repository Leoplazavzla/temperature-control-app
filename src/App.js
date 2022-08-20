import './App.css';
import {TempGrid} from "./components/TempGrid";
import {TempCircle} from "./components/TempCircle";
import {Degrees} from "./components/Degrees"
import {ButtonContainer} from "./components/ButtonContainer";
import {HotButton} from "./components/HotButton";
import {ColdButton} from "./components/ColdButton";
import {useEffect, useState} from "react";

function App() {
    const [counter, setCounter] = useState(0);
    const [circleColor, setCircleColor]= useState("blue");

    const increaseDegrees = () => {
        setCounter(counter + 10)
    }
    const lowerDegrees = () => {
        setCounter(counter - 10)
    }

    useEffect(() => {
        changeColor(counter)
    },[counter])

    const changeColor = (value) => {
        let degreeColor = ""

        switch (value) {
            case 10:
                degreeColor= "lightBlue"
                break
            case 20:
                degreeColor="blue"
                break
            case 30:
                degreeColor= "orange"
                break
            case 40:
                degreeColor= "red"
                break
            case 50:
                degreeColor = "brown"
                break
            default:
                degreeColor="darkBlue"
        }

        setCircleColor(degreeColor)
    }

  return (
    <div className="App">
      <h1>Temperature Control App</h1>

      <section style={{width: 400, minHeight:900}}>
        <TempGrid>
          <TempCircle tempColor={circleColor}>
              <Degrees>{counter}°C</Degrees>
          </TempCircle>
          <ButtonContainer>
            <HotButton onClick={increaseDegrees}>+</HotButton>
            <ColdButton onClick={lowerDegrees}>-</ColdButton>
          </ButtonContainer>
        </TempGrid>
      </section>
    </div>
  );
}

export default App;
