import React from "react";
import { useState } from "react";
import Package1 from "./Package1";
import Package2 from "./Package2";
import Package3 from "./Package3";

const Packages = ({ onClick, packageSelected }) => {
  return (
    <div>
      <h1 className="package-title">Insurance Packages</h1>
      <div className="package-container">
        <Package1 onClick={onClick} packageSelected={packageSelected} />
        <Package2 onClick={onClick} packageSelected={packageSelected} />
        <Package3 onClick={onClick} packageSelected={packageSelected} />
      </div>
    </div>
  );
};

export default Packages;
