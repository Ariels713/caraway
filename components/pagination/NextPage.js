import React from "react";

function NextPage(props) {
  const title = props.title || "ctrl right";

  return (
    <svg
      height="12"
      width="12"
      viewBox="0 0 12 12"
      xmlns="http://www.w3.org/2000/svg"
      style={{ marginInlineStart: ".5rem" }}
    >
      <title>{title}</title>
      <g fill="hsla(222, 7%, 53%, 1.00)">
        <path
          d="M4.781.375a1,1,0,0,0-1.562,1.25L6.719,6l-3.5,4.375a1,1,0,0,0,1.562,1.25l4-5a1,1,0,0,0,0-1.25Z"
          fill="hsla(222, 7%, 53%, 1.00)"
        />
      </g>
    </svg>
  );
}

export default NextPage;
