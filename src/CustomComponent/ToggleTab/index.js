import React from "react";
import "./style.scss";

export default function ToggleTab(props) {
  const { onChange, tabs = [], value, variant, wrapperStyle } = props;
  const onClick = (event) => {
    onChange(event.target.id || value);
  };
  return (
    <ul className="toggle-tab-wrapper" style={{...wrapperStyle}} onClick={onClick}>
      {tabs.map((el) => (
        <li
          key={el.value}
          id={el.value}
          className={`${variant} ${value === el.value ? "active" : ""}`}
        >
          {el.text}
        </li>
      ))}
      <hr />
    </ul>
  );
}
