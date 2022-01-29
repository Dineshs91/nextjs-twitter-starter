import React from "react";

export const ColorSquare = ({ bgColor, textColor, handleColorSelection }) => {
  return (
    <button
      onClick={() => {
        handleColorSelection(bgColor, textColor);
      }}
      className={`w-12 h-12 ${bgColor} rounded-lg`}
    ></button>
  );
};
