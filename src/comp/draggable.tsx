import React, { useState } from "react";
import { Stage, Layer, Text } from "react-konva";

function Draggable() {
  const [{ isDragging, x, y }, setDrag] = useState({
    isDragging: false,
    x: 50,
    y: 50
  });
  const onDragStart = () => setDrag({ isDragging: true, x, y });
  const onDragEnd = ({ target }: any) =>
    setDrag({
      isDragging: false,
      x: target.x(),
      y: target.y()
    });

  const fill = isDragging ? "green" : "black";
  return (
    <Layer>
      <Text
        text="Draggable Text"
        x={x}
        y={y}
        draggable
        fill={fill}
        onDragStart={onDragStart}
        onDragEnd={onDragEnd}
      />
    </Layer>
  );
}
export { Draggable };
