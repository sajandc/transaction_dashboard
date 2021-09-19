import React from "react";

export default function Title({ name }) {
  return (
    <h1>
      {name}
      <span className="learn-more">
        <span className="material-icons">videocam</span>
        Learn More
      </span>
    </h1>
  );
}
