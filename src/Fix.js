import React from "react";
const Fix = (props) => {
  return (
    <div
      style={{
        position: "fixed",
        zIndex: "auto",
      }}
    >
      {props.children}
    </div>
  );
};
export default Fix;
