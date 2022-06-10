import React from "react";

const Package2 = ({ onClick, packageSelected }) => {
  return (
    <div
      className="package"
      onClick={() => onClick("Umbrella")}
      style={
        packageSelected == "Umbrella"
          ? { border: "3px solid rgb(93, 90, 255)" }
          : {}
      }
    >
      <h2>Umbrella Insurance</h2>
      <h3>
        Our most popular package. Your personal belongings will be covered up to
        30k$. This package also includes a free water sensor to detect a water
        leak in your home.
      </h3>
      <h4>35.73/mo</h4>
    </div>
  );
};

export default Package2;
