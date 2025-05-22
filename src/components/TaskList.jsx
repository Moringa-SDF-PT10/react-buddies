import React, { useState, useEffect } from "react";

const quoteGenerator = () => {
  const [quotes, setQuotes] = useState([]);
  const [quote, setQuote] = useState("");

  const getRandomQuote = () => {
    if (quotes.length > 0) {
      const randomIndex = Math.floor(Math.random() * quotes.length);
      setQuote(quotes[randomIndex].quote);
    }
  };

  useEffect(() => {
    fetch("/quotes.json")
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data) && data.length > 0) {
          setQuotes(data);
          setQuote(data[0].quote);
        }
      })
      .catch((err) => console.error("Error loading quotes:", err));
  }, []);

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h2>Motivational Quote</h2>
      <p>"{quote}"</p>
      <button onClick={getRandomQuote}>Refresh Quote</button>
    </div>
  );
};

export default quoteGenerator;