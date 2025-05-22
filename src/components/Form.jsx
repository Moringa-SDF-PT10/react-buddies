import { useEffect, useState } from "react";

export default function Form() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [count, setCount] = useState(0);
  const maxCount = 15;
  const [style, setStyle] = useState({});

  useEffect(() => {
    setCount(email.length);
  }, [email]);

  useEffect(() => {
    if (count > maxCount) {
      alert(`You have exceeded the maximum character count of ${maxCount}`);
      setStyle({ color: "red" });
    } else {
      setStyle({});
    }
  }, [count]);

  useEffect(() => {
    if (submitted) {
      alert(`You have submitted email: ${email}`);
      setSubmitted(false);
    }
  }, [submitted, email]); // React will render on every character change. BONUS: Improve this approach

  return (
    <div>
      <h2>This is our controlled form</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setSubmitted(true);
        }}
      >
        <p>
          Character Count : {count} / {maxCount}{" "}
        </p>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={style}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
