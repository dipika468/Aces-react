import React, { useState } from "react";

const LearningUseState = () => {
  const [count, setCount] = useState(0);

  const increment = () => setCount(prev => prev + 1);
  const decrement = () => {
    if (count > 0) setCount(prev => prev - 1);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#1a1a2e", // deep navy-purple
        color: "#e0e0f8", // soft lavender-white text
      }}
    >
      <div
        style={{
          textAlign: "center",
          padding: "30px",
          border: "3px solid #5c5470", // muted lavender border
          borderRadius: "15px",
          boxShadow: "0 0 20px rgba(138, 43, 226, 0.5)", // glowing purple shadow
          backgroundColor: "#2e2e3a", // dark slate background
          transition: "all 0.4s ease",
        }}
      >
        <h2 style={{ color: "#cdb4db" }}>React Counter</h2>
        <h3 style={{ fontSize: "36px", color: "#ffb3c6" }}>{count}</h3>
        <div style={{ marginTop: "20px" }}>
          <button
            onClick={decrement}
            style={{
              margin: "10px",
              padding: "10px 20px",
              backgroundColor: "#3c3c4e",
              border: "2px solid #9d4edd",
              color: "#e0aaff",
              borderRadius: "8px",
              cursor: "pointer",
              transition: "transform 0.2s ease",
            }}
            onMouseEnter={e => (e.target.style.transform = "scale(1.05)")}
            onMouseLeave={e => (e.target.style.transform = "scale(1)")}
          >
            ➖ Decrease
          </button>
          <button
            onClick={increment}
            style={{
              margin: "10px",
              padding: "10px 20px",
              backgroundColor: "#3c3c4e",
              border: "2px solid #9d4edd",
              color: "#e0aaff",
              borderRadius: "8px",
              cursor: "pointer",
              transition: "transform 0.2s ease",
            }}
            onMouseEnter={e => (e.target.style.transform = "scale(1.05)")}
            onMouseLeave={e => (e.target.style.transform = "scale(1)")}
          >
            ➕ Increase
          </button>
        </div>
      </div>
    </div>
  );
};

export default LearningUseState;
