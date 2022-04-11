import React, { useState } from "react";

function Box({ onClick, selectedChoice, box }) {
  const [hover, setHover] = useState(false);

  const styles = {
    boxStyle: {
      backgroundColor:
        selectedChoice && selectedChoice.id === box.id ? "black" : "#70D6FF",
      width: "100px",
      height: "100px",
    },
    hover: {
      backgroundColor: "#023476",
    },
  };

  return (
    <div
      style={{
        ...styles.boxStyle,
        ...(hover ? styles.hover : styles.boxStyle),
      }}
      onClick={() => {
        onClick(box);
      }}
      onMouseEnter={() => {
        setHover(true);
      }}
      onMouseLeave={() => {
        setHover(false);
      }}
    ></div>
  );
}
export default Box;
