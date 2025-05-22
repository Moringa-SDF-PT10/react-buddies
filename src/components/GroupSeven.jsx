import { useState, useEffect } from "react";

export default function GroupSeven() {
  const [text, setText] = useState("");
  const [blurred, setBlurred] = useState(false);
  const [style, setStyle] = useState({});
  const [showValue, setShowValue] = useState(false)

  useEffect(() => {
    if (blurred && text === "") {
      setStyle({ backgroundColor: "red" });
    } else {
      setStyle({});
    }
  }, [text, blurred]);

  return (
    <div>
      <h2>Input backgroundColor turns red onBlur.</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        setShowValue(true)
        }}
      >
        <input
        required
          value={text}
          placeholder="First Name"
          onChange={(e) => setText(e.target.value)}
          onBlur={() => {
            setBlurred(true);
          }}
          onFocus={() => {
            setBlurred(false);
            setShowValue(false)
          }}
          style={style}
        />
        <button type="submit" disabled={text === ""} >Submit</button>
      </form>
      {showValue && <h1>{text}</h1>}
    </div>
  );
}
