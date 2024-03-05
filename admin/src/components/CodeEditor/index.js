"use client";
import { useEffect, useRef, useState } from "react";

function CodeEditor({ code, onChange }) {
  const [content, setContent] = useState("");
  const resultRef = useRef(null);

  useEffect(() => {
    setContent(code);
    if (resultRef.current) {
      resultRef.current.addEventListener("input", handleResultChange);
    }
    return () => {
      if (resultRef.current) {
        resultRef.current.removeEventListener("input", handleResultChange);
      }
    };
  }, []);

  const handleResultChange = (e) => {
    if (resultRef.current) {
      onChange(resultRef.current.innerHTML);
      const newContent = resultRef.current.innerHTML;
      const newResult = content.replace(content, newContent);
      setContent(newResult);
    }
  };

  return (
    <div
      className="code-editor"
      ref={resultRef}
      contentEditable="true"
      suppressContentEditableWarning={true}
      dangerouslySetInnerHTML={{ __html: content }}
    ></div>
  );
}

export default CodeEditor;
