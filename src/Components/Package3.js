import React from "react";

const Package3 = ({ onClick, packageSelected }) => {
  return (
    <div
      className="package"
      onClick={() => onClick("Thor")}
      style={
        packageSelected == "Thor"
          ? { border: "3px solid rgb(93, 90, 255)" }
          : {}
      }
    >
      <h2>Thor Insurance</h2>
      <h3>
        Nothing but the best. Your personal belongings will be covered up to
        100k$. It even includes a protection against an alien invasion.
      </h3>
      <h4>79.30/mo</h4>
    </div>
  );
};

export default Package3;
