export class Slider {
  constructor(min, max, value) {
    this.min = min;
    this.max = max;
    this.value = value;
  }
  get sliderMin() {
    return this.min;
  }
  get sliderMax() {
    return this.max;
  }
  get sliderValue() {
    return this.value;
  }
}
