import React, { useState, useRef } from "react";

export default function Document({ title, content }) {
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const contentRef = useRef();
  return (
    <div>
      <h1 className="title">{title}</h1>
      <br />
      <div
        className="content"
        style={{
          overflow: "scroll",
          width: "400px",
          height: "200px",
        }}
        ref={contentRef}
        onScroll={(e) => {
          // console.log("sh" + e.target.scrollHeight);
          // console.log("ch" + e.target.clientHeight);
          // console.log("st" + e.target.scrollTop);
          if (
            Math.round(e.target.scrollHeight) -
              Math.round(e.target.scrollTop) ===
            Math.round(e.target.clientHeight)
          ) {
            setButtonDisabled(false);
          }
        }}
      >
        {content}
      </div>
      <button disabled={buttonDisabled}>I Agree</button>
    </div>
  );
}
