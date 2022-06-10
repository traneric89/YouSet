import React from "react";

const Package1 = ({ onClick, packageSelected }) => {
  return (
    <div
      className="package"
      onClick={() => onClick("Proteco")}
      style={
        packageSelected == "Proteco"
          ? { border: "3px solid rgb(93, 90, 255)" }
          : {}
      }
    >
      <h2>Proteco Insurance</h2>
      <h3>
        Our most affordable package. Your personal belongings will be covered up
        to 15k$. This is perfect if you own a few belongings.
      </h3>
      <h4>12.50/mo</h4>
    </div>
  );
};

export default Package1;
