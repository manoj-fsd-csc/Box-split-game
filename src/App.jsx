import React, { useState } from "react";

import SplitBox from "./splitbox";

const App = () => {
  const initialSize = 100; 
  const [squares, setSquares] = useState([{ x: 0, y: 0, size: initialSize }]);

 
  const handleSplit = (x, y, size) => {
    const newSize = size / 2;
    setSquares((prevSquares) => [
      ...prevSquares,
      
      { x, y, size: newSize },
      { x: x + newSize, y, size: newSize },
      { x, y: y + newSize, size: newSize },
      { x: x + newSize, y: y + newSize, size: newSize },
    ]);
    
  };

  return (
    <div className="App">
      
      <SplitBox squares={squares} handleSplit={handleSplit} />
    </div>
  );
};

export default App;
