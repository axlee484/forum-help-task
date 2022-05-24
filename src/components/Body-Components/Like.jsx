import React from "react";
import { AiOutlineLike, AiFillLike } from "react-icons/ai";

function Like({ like }) {
  return (
    <>
      {like ? (
        <>
          <AiFillLike />
          <span className="fw-bold">Like</span>
        </>
      ) : (
        <>
          <AiOutlineLike />
          <span>Like</span>
        </>
      )}
    </>
  );
}

export default Like;
