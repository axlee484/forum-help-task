import React, { useState } from "react";
import Like from "./Body-Components/Like";

import { GoComment } from "react-icons/go";

function Footer() {
  const [like, setLike] = useState(false);
  return (
    <div className="list-group list-group-flush">
      <div onClick={() => setLike(!like)} style={{ cursor: "pointer" }}>
        <Like like={like}></Like>
      </div>
    </div>
  );
}

export default Footer;
