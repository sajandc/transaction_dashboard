import React from "react";

export default function SearchBox(props) {
  const [value, setValue] = React.useState(false);
  return (
    <div className="search-box" onClick={() => setValue(false)}>
      {!value && <span
        onClick={(event) => {
          event.stopPropagation();
          setValue(true);
        }}
        className="material-icons"
      >
        search
      </span>}
      <div>
        <input
          id="searchBox"
          autoFocus={value}
          className={value ? "show-input" : ""}
          onClick={(event) => event.stopPropagation()}
          onChange={(event) => props.onChange(event.target.value)}
        />
        {value && <span className="material-icons clear">highlight_off</span>}
      </div>
    </div>
  );
}
