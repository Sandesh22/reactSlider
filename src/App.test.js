import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
// describe("checkMinmax", () => {
//   it("knows that 10 is less then 100", () => {
//     expect(10 < 100).toBe(true);
//   });
// });
