import React, { Component } from "react";
import "../css/CompCss.css";
class SliderComp extends Component {
  constructor(props) {
    super();
    this.state = {
      outputValue: 0
    };
    this.handleChannge = this.handleChannge.bind(this);
  }
  handleChannge(event) {
    this.setState({
      outputValue: event.target.value
    });
  }

  render() {
    const { min, max, value, step } = this.props;

    return (
      <div>
        <div className="container">
          <div className="row logo">
            <div className="cell">{this.props.children}</div>
          </div>
          <div className="row nav">
            <div className="slidecontainer cell">
              <input
                onChange={this.handleChannge}
                type="range"
                min={min}
                max={max}
                value={this.state.outputValue}
                step={step}
                class="slider"
                id="myRange"
              ></input>
            </div>
            <div className="cell">
              <span> {this.state.outputValue}</span>
            </div>
          </div>
          <div className="row base"></div>
        </div>
      </div>
    );
  }
}
export default SliderComp;
