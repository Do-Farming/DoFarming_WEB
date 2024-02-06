import React, { useState, useEffect, useRef } from "react";

function TextInput({ init, onSave }) {
  const ref = useRef(null);
  const [text, setText] = useState(init);
  const [editable, setEditable] = useState(false);

  const editOn = () => {
    setEditable(true);
  };

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      setEditable(false);
      onSave(text); // 수정된 텍스트 저장
    }
  };

  const handleClickOutside = (e) => {
    if (editable && !ref.current.contains(e.target)) {
      setEditable(false);
      onSave(text); // 수정된 텍스트 저장
    }
  };

  useEffect(() => {
    window.addEventListener("click", handleClickOutside, true);
    return () => {
      window.removeEventListener("click", handleClickOutside, true);
    };
  }, []);

  return (
    <div ref={ref}>
      {editable ? (
        <input type="text" value={text} onChange={handleChange} onKeyDown={handleKeyDown} />
      ) : (
        <div onClick={editOn}>{text}</div>
      )}
    </div>
  );
}

export default TextInput;
