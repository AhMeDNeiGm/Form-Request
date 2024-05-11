import React from "react";

import "./FormStyle.css";

const Model = ({ isVisible }) => {
  if (isVisible) {
    return (
      <div id="model">
        <div className="model-content">
          <h2>The Form Has Been Submitted Successfully</h2>
        </div>
      </div>
    );
  } else {
    return <></>;
  }
};

export default Model;
