import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Greet from "./Components/Greet";
import Welcome from "./Components/Welcome";
import ClassComp from "./Components/ClassComp";
import Hello from "./Components/Hello";
import PropComp from "./Components/PropComp";
import ClassStateComp from "./Components/ClassStateComp";
import GreetDeSt from "./Components/GreetDeSt";
import GreetDestBody from "./Components/GreetDestBody";
import FunctionClick from "./Components/FunctionClick";
import ClassCompClick from "./Components/ClassCompClick";
import SliderComp from "./Components/SliderComp";
import { Slider } from "./Types/Slider";
import { SliderStep } from "./Types/SliderStep";
function App() {
  var sliderObj = new Slider(0, 100, 50);
  var sliderStepObj = new SliderStep(10, 200, 10, 5);

  return (
    <div className="App">
      {/* <Greet />
      <Welcome />
      <ClassComp />
      <Hello /> */}
      {/* <ClassStateComp /> */}
      {/* <FunctionClick /> */}
      {/* <ClassCompClick />
      <ClassStateComp /> */}
      {/* <GreetDestBody name="sandesh" age="34" /> */}
      {/* <PropComp name="Haim" skill="magic">
        he is also Security officer
      </PropComp>
      <PropComp name="Maurice" skill="C#">
        <button>Action</button>
      </PropComp>
      <PropComp name="Zeev" skill="SQL" />

      <Welcome name="Sandesh" /> */}

      <SliderComp min={sliderObj.min} max={sliderObj.max} value={sliderObj.max}>
        This is normal slider
      </SliderComp>

      <SliderComp
        min={sliderStepObj.min}
        max={sliderStepObj.max}
        value={sliderStepObj.value}
        step={sliderStepObj.step}
      >
        This is step slider
      </SliderComp>
    </div>
  );
}

export default App;
