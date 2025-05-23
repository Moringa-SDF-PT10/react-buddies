import { useEffect, useRef, useState } from "react";

export default function Home() {
  const [count, setCount] = useState(0);
  const prevCount = useRef(0);

    const inputRef = useRef(null)
    const removeTimeout = useRef(null); // Ref to store the timeout ID for blur effect

  // Function to handle focusing the input and setting the highlight to green using useRef
     const handleInputFocus = () => {
     inputRef.current.style.setProperty("background-color", "lightgreen");
};

// Function to handle removing the green highlight on focus after a set delay using useRef
    const handleRemoveTimeout = () => {
    removeTimeout.current = setTimeout(() => {
    inputRef.current.style.removeProperty("background-color");
  }, 5000);
};
    const handleClick = () => {
        inputRef.current?.focus()
    }

  const increaseCount = () => {
    setCount(count + 1);
  };

  useEffect(() => {
    prevCount.current = count;
  }, [count]);

    return (
        <div>
            <h2>Welcome to the React Buddies page</h2>
            <p>This is a live collaborative demo for useRef hook:</p>
            <input
                ref={inputRef}
                placeholder="Check me out"
                onFocus={handleInputFocus}
                onBlur={handleRemoveTimeout}
            />
            <button onClick={handleClick}>Click Me</button>
            <div>
                <p>Current Count: {count}</p>
                <p>Previous Count: {prevCount.current}</p>

            <button onClick={increaseCount} >Increase button count</button>
            </div>
            {/* <div style={display.block}></div> */}

        </div>
    )
}
