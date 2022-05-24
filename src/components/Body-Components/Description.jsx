import React, { useState } from "react";

function Description({ description }) {
  const [isFull, setIsFull] = useState(false);
  const toggleText = (isFull) => {
    setIsFull(!isFull);
  };
  return (
    <div>
      {isFull ? description : description.slice(0, 500)}
      <span
        className="fw-bold"
        onClick={() => toggleText(isFull)}
        style={{ cursor: "pointer", color: "grey" }}
      >
        {isFull ? "...See less" : "...See more"}
      </span>
    </div>
  );
}

export default Description;
