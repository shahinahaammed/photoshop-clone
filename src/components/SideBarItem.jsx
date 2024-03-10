import React from "react";

export const SideBarItem = ({ name, active, handleClick }) => {
  return (
    <button
      className={`sideBarItem ${active ? "active" : ""}`}
      onClick={handleClick}
    >
      {name}
    </button>
  );
};
