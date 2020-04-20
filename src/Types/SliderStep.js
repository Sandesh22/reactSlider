import { Slider } from "./Slider";
export class SliderStep extends Slider {
  constructor(min, max, value, step) {
    super(min, max, value);
    this.step = step;
  }
  get sliderStep() {
    return this.step;
  }
}
