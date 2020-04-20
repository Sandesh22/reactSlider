import React from "react";
import logo from "./logo.svg";
import "./App.css";

import SliderComp from "./Components/SliderComp";
import { Slider } from "./Types/Slider";
import { SliderStep } from "./Types/SliderStep";
function App() {
  var sliderObj = new Slider(0, 100, 50);
  var sliderStepObj = new SliderStep(10, 200, 10, 5);

  return (
    <div className="App">
    

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
