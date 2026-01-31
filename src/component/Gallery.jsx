import React, { useState } from "react";

export default function Gallery() {
  const [currIdx, setCurrIdx] = useState(0);

  const arr = [
    "https://images.unsplash.com/photo-1518791841217-8f162f1e1131",
    "https://images.unsplash.com/photo-1517849845537-4d257902454a",
    "https://images.unsplash.com/photo-1552053831-71594a27632d",
    "https://images.unsplash.com/photo-1437622368342-7a3d73a34c8f",
  ];

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "12px",
      }}
    >
      <button
        onClick={() => setCurrIdx((val) => (val - 1 + arr.length) % arr.length)}
      >
        prev
      </button>
      <img
        src={arr[currIdx]}
        alt="image"
        height="200"
        width="300"
        style={{ objectFit: "cover" }}
      />
      <button onClick={() => setCurrIdx((val) => (val + 1) % arr.length)}>
        next
      </button>
    </div>
  );
}
