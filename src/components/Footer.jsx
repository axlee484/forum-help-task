import React, { useState } from "react";
import Like from "./Body-Components/Like";

import { GoComment } from "react-icons/go";

function Footer() {
  const [like, setLike] = useState(false);
  return (
    <div className="list-group list-group-flush">
      <div className="list-group-item"></div>
      <div
        onClick={() => setLike(!like)}
        style={{ cursor: "pointer" }}
        className="list-group-item"
      >
        <Like like={like}></Like>
      </div>
    </div>
  );
}

export default Footer;
