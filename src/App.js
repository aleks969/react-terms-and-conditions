import React, { useEffect, useState } from "react";
import Document from "./Document";
import "./App.css";

function App() {
  const [content, setContent] = useState("");
  useEffect(() => {
    const fetchContent = async () => {
      const res = await fetch(
        "https://jaspervdj.be/lorem-markdownum/markdown.txt"
      );
      const data = await res.text();
      // console.log(data);
      setContent(data);
    };
    fetchContent();
  }, []);

  return (
    <div className="App">
      <Document title={"Terms and Conditions"} content={content} />
    </div>
  );
}

export default App;
