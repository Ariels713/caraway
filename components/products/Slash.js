import React from "react";

function Slash(props) {
  const title = props.title || "shape line";

  return (
    <svg
      style={{ marginInlineStart: "1rem" }}
      height="16"
      width="16"
      viewBox="0 0 16 16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{title}</title>
      <g fill="hsla(220, 7%, 53%, 1.00)">
        <rect
          height="2"
          width="18.97"
          fill="hsla(220, 7%, 53%, 1.00)"
          transform="translate(-3.314 8) rotate(-45)"
          x="-1.485"
          y="7"
        />
      </g>
    </svg>
  );
}

export default Slash;
