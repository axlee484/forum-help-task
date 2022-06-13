import React, { useState } from "react";

function Description({ description }) {
  const [isFull, setIsFull] = useState(false);
  const toggleText = (isFull) => {
    setIsFull(!isFull);
  };
  if (description.text.length <= 500) {
    return <>{description.text}</>;
  }
  return (
    <div>
      {isFull ? (
        <div>
          {description.text}
          {description.hasImage ? (
            <div style={{ display: "flex" }}>
              <img
                src={description.image}
                alt=""
                style={{ width: "70%", borderRadius: "10px" }}
              />
            </div>
          ) : (
            <></>
          )}
        </div>
      ) : (
        description.text.slice(0, 500)
      )}

      <span
        className="fw-bold"
        onClick={() => toggleText(isFull)}
        style={{ cursor: "pointer", color: "grey" }}
      >
        {isFull ? " See less" : "...See more"}
      </span>
    </div>
  );
}

export default Description;
