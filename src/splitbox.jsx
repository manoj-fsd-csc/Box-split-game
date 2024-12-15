import React from "react";


const SplitBox = ({ squares, handleSplit }) => {
  return (
    <div >
      {squares.map((square, index) => (

        <div
          onClick={() => handleSplit(square.x, square.y, square.size)}
          style={{
            position: "absolute",
            left: `${square.x}%`,
            top: `${square.y}%`,
            width: `${square.size}%`,
            height: `${square.size}%`,
            border: "1px solid black",
            boxSizing: "border-box",
            
          }}
        />
      ))}
    </div>
  );
};

export default SplitBox;
