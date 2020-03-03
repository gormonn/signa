import React from "react";
import { render } from "react-dom";
import { Stage } from "react-konva";
import { Draggable } from "./comp/draggable";

function App() {
  const { innerWidth, innerHeight } = window;
  return (
    <Stage width={innerWidth} height={innerHeight}>
      <Draggable />
    </Stage>
  );
}

render(<App />, document.getElementById("root"));
