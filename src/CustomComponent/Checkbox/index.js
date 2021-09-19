import React from "react";

export default function Checkbox(props) {
    const {id, disabled, defaultChecked, value, onClick} = props;
    return (
        <input
          id={id}
          disabled={disabled}
          type="checkbox"
          checked={defaultChecked || value}
          onClick={event => onClick(event, !value)}
        />
    )
}