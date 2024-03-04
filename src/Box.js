import React from "react";

function Box({
  id,
  handleRemove,
  width = 25,
  height = 25,
  backgroundColor = "purple",
}) {
  const remove = () => handleRemove(id);
  return (
    <div>
      <div
        style={{ height: `${height}px`, width: `${width}px`, backgroundColor }}
      ></div>
      <button onClick={remove}>Remove The Box!</button>
    </div>
  );
}
export default Box;
